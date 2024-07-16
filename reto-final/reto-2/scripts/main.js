const MaxFileSize = 800 * 1024;

document.addEventListener('DOMContentLoaded',async ()=>{                
    //Form
    const formElement       = document.getElementsByTagName('FORM')[0];
    const formImageElment   = document.querySelector('.character__image--creator');
    const formMessage       = document.querySelector('.form__message');
    //Containers
    const viewContainer     = document.getElementById('character');
    const formContainer     = document.querySelector('.main__article--creator');
    //Buttons
    const nextBtnElment     = document.querySelector('.character__btn--next');
    const prevBtnElment     = document.querySelector('.character__btn--prev');    
    //Character
    const [
        nameElment, 
        imageElement, 
        descriptionElment
    ] = document.querySelectorAll('[data-character]');


    const updateView    = (character)=>{
        nameElment.textContent          = character.name;
        descriptionElment.textContent   = character.description;
        imageElement.setAttribute('src',character.imageUrl)
    }

    const disableButton = (itIsTheLast,element)=>{
        if(itIsTheLast){
            element.classList.add('character__btn--disabled');
        }else{
            element.classList.remove('character__btn--disabled');
        }
    }

    const setFormMessage = (message)=>{
        formMessage.classList.remove('form__message--hidden');
        formMessage.textContent = message;
        setTimeout(()=>{
            formMessage.textContent = '';
            formMessage.classList.add('form__message--hidden');
        },4200)
    }

    let characterPagination,firstCharacter,next, prev;
    async function setActions(character = null){
        nextBtnElment.removeEventListener('click',next);
        prevBtnElment.removeEventListener('click',prev);
        [characterPagination,firstCharacter] = await localCharacters(character);
        [next, prev]   = characterPagination(
            disableButton,
            nextBtnElment,
            prevBtnElment,
            updateView
        )        
        nextBtnElment.addEventListener('click',next);
        prevBtnElment.addEventListener('click',prev);
        disableButton(false,nextBtnElment);
        disableButton(true,prevBtnElment);
        updateView(firstCharacter);
    }

    function imagePreviewCleaner(){        
        formImageElment.setAttribute('src','./assets/default.png');
    }

    setActions();
    
    //Pagination
    nextBtnElment.addEventListener('click',next);
    prevBtnElment.addEventListener('click',prev);
    nameElment.addEventListener('click',
        ()=>viewContainer.classList.add('character--info'));

    document.querySelector('.character__btn--cancel')
    .addEventListener('click',()=>viewContainer.classList.remove('character--info'));

    //Form        
    document.getElementById('image').addEventListener('change',
    async e=>{
        const file = e?.target?.files[0];
        if(!file){
            setFormMessage('No se ha seleccionado ninguna imagen.');
            imagePreviewCleaner();
            return;
        }
        if(file.size > MaxFileSize){
            setFormMessage('La imagen excede el tamaño máximo permitido de 800KB.');
            imagePreviewCleaner();
            return
        }
        formImageElment.setAttribute('src',await renderImage(file));
        
    })

    document.querySelector('.character__btn--create')
    .addEventListener('click', ()=>{
        formContainer.classList.add('main__article--open')
    })

    document.querySelector('.form__action--close')
    .addEventListener('click', ()=>{
        formContainer.classList.remove('main__article--open')
        imagePreviewCleaner();
    });

    formElement.addEventListener('submit',async e=>{
        const name = formElement.name.value.trim();
        const image = formElement.image.files[0];
        const description = formElement.description.value.trim();
        let imageUrl = '';
        e.preventDefault();
        if(!name||!image||!description || name.length==0 || description.length==0){
            setFormMessage('Algunos campos no son válidos.Por favor, revisa y corrige la información.');
            return;
        }

        try{
            imageUrl = await renderImage(image)
        }catch(e){
            setFormMessage('La imagen excede el tamaño máximo permitido de 800KB.');
            console.error(e);
            return;
        }

        //Clear form
        imagePreviewCleaner();
        formElement.reset(); 
        formContainer.classList.remove('main__article--open')

        //Reset variables
        setActions({name,description,imageUrl});        
        
    })
});

function renderImage(file){
    const Render = new FileReader();
    if(
        !file || 
        (
            file.type !== 'image/jpeg' &&  
            file.type !== 'image/png' && 
            file.type !== 'image/jpg'
        ) ||
        file.size > MaxFileSize
    )throw new Error('invalid image format');
    Render.readAsDataURL(file);
    return new Promise((res, rej)=>{
        Render.onload = ()=>res(Render.result);
        Render.onerror = rej;
    })
}

function pagination(data){
    let index = 0;
    let localData = [...data];
    return (action,nextBtn,prevBtn,update)=>{        
        return [
            ()=>{                
                if(index+1<=data.length-1)index++;
                if(index==data.length-1)action(true,nextBtn);
                else action(false,prevBtn);
                update(localData.at(index));                    
            },
            ()=>{
                if(index-1>=0)index--;
                if(index==0) action(true,prevBtn);
                else action(false,nextBtn);
                update(localData.at(index));
            }
        ];        
    }
}

async function  localCharacters(newData = null){
    let data = [];
    try{
        if(!localStorage.getItem('characters')){//!Set Default Data            
            data = await (await fetch('scripts/data.json')).json();
            localStorage.setItem('characters', JSON.stringify(data))
        }else{//!Get Data
            data = JSON.parse(localStorage.getItem('characters'));
            if(newData != null){//!Set Data
                data = [newData,...data];
                localStorage.setItem('characters', JSON.stringify(data));
            }
        }        
    }catch (e){
        console.error("Error: We cannot access local storage");        
        console.log(e)

    }finally{
        return [            
            pagination(data),
            data[0]
        ]        
    }    
}
