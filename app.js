const btnCircle = document.querySelector('.btn-circle');
const circleMenu = document.querySelector('.circle-menu');

btnCircle.addEventListener('click', ()=>{
    btnCircle.classList.toggle('menu-anim');
    circleMenu.classList.toggle('circle-anim');
});

const allBlocs = document.querySelectorAll('.bloc');

allBlocs.forEach(bloc =>{
    bloc.addEventListener('click', (e)=>{
        e.target.classList.add('active');
        for(let i = 0; i < allBlocs.length; i++){
            if(allBlocs[i] !== e.target){
                allBlocs[i].classList.remove('active');
            }
        }
    });
});

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', (e)=> {
    e.stopPropagation();
}));