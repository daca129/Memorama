var cards = document.querySelectorAll('.card');
let cont =0;
let fiCart;

[...cards].forEach((card)=>{
      card.addEventListener( 'click', function() {
        if(card.getAttribute('facing')=='true'){
          console.log('No')
          console.log(card.getAttribute('facing'));
        }
        else{
          card.classList.toggle('is-flipped');
        }

      });
  });



function acumu(car){
  console.log(cont);
  cont =cont+1;
  if(cont==2){
    if(car.getAttribute('id')!=fiCart.getAttribute('id')){
      if(car.getAttribute('ident')==fiCart.getAttribute('ident')){
        console.log('son iguales chavo');
        setTimeout(()=>{
          car.setAttribute('facing', 'true');
          fiCart.setAttribute('facing', 'true');
        },100);
        cont=0;
      }else{
        setTimeout(() => {
          car.classList.toggle('is-flipped');
          fiCart.classList.toggle('is-flipped');
        }, 1500);
        fiCart.setAttribute('facing', 'false');
        cont=0;
      }
    }else{
      cont=1;
    }


  }
  else{
    fiCart=car;
    setTimeout(()=>{
      car.setAttribute('facing', 'true');
    },100)
  }
}