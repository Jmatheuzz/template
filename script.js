const cards = document.querySelectorAll('.card');
const verMais = document.querySelector('.ver-mais');

window.addEventListener('load', ()=>{
    dinamic();
})

verMais.addEventListener('click', ()=>{
    if(cards[5].classList.contains('card-off')){
        mostraTudo();
        verMais.value = "Ver menos...";
        verMais.classList.remove('ver-mais');
        verMais.classList.add('ver-menos');
        
    }else{
        dinamic();
        verMais.value = "Ver mais...";
        verMais.classList.remove('ver-menos');
        verMais.classList.add('ver-mais');
        
    }
})

function esconde(){
    

}

function dinamic(){
    for(let card of cards){
        card.classList.remove('card');
        card.classList.add('card-off');
    }

    for(let i = 0 ; i<4 ; i++){
        cards[i].classList.remove('card-off');
        cards[i].classList.add('card');
    }
}

function mostra4(){
    
}

function mostraTudo(){
    for(let card of cards){
        card.classList.remove('card-off');
        card.classList.add('card');
    }
}