const form = document.querySelector('.form');
form.addEventListener('submit', (
  function(){
    const subTotalElement = document.querySelector('#subTotal');
    const tipElement = document.querySelector('#tip');
    const totalElement = document.querySelector('#total');
    
    return e=>{
      const price = Number(form.price.value);
      const percentage = (Number(form.percentage.value) / 100);
      const tip = price * percentage;
      const total = price + tip;
      e.preventDefault();      
      if(!price || !percentage || isNaN(price) || isNaN(percentage))return;      
      subTotalElement.textContent = `$${price.toFixed(3)}`
      tipElement.textContent = `$${tip.toFixed(3)}`;
      totalElement.textContent = `$${total.toFixed(3)}`
    }
  }
)())


