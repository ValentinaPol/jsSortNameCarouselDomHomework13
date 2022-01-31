var list = document.querySelector('#todo-list');
list.addEventListener('click', function(event){
    //console.log(event.target.tagName); //event.target определяет элемент, на который мы кликаем
    if(event.target.tagName === 'P'){
        event.target.classList.toggle('task-no-active');
    }
})

var listQuestions = document.querySelector('.collection');
listQuestions.addEventListener('click', function(event){
    if(event.target.className === 'collection-item'){
        event.target.nextElementSibling.classList.toggle('answer-item-show');
    }
})

//  Second way     if(!event.target.classList.contains('answer-item'))

/*var listQuestions = document.querySelector('.collection');
listQuestions.addEventListener('click', function(event){
    if(!event.target.classList.contains('answer-item')){
        event.target.nextElementSibling.classList.toggle('answer-item-show');
    }
})*/

var btnOpenModal = document.querySelector('#open-modal');
var modal = document.querySelector('#modal1');

function openModal(){
    modal.classList.add('modal_open');
}

btnOpenModal.addEventListener('click', openModal);

document.body.addEventListener('click', function(event){ 
    if(event.target !== btnOpenModal && !event.target.closest('#modal1')){
        modal.remove('modal_open'); 
    } 
})

////////////////////////// task 4

var galery = document.querySelector('.container');

galery.addEventListener('click', function(event){
    if(event.target.parentElement.className !== 'image active-image' && event.target.parentElement.className !== 'photo'){
        for (var i = 0; i < galery.children.length; i++){
            if (galery.children[i].className === 'image active-image'){
                galery.children[i].classList.remove('active-image'); 
                break;
            }
        }
        event.target.parentElement.classList.add('active-image');
        var chosenPhoto = event.target.getAttribute('src');   
        galery.firstElementChild.firstElementChild.setAttribute('src', chosenPhoto);
    }
})


////////////////////////// task 5

var btnSortName = document.querySelector('#sort');

var todoList = document.querySelector('#todo');

function sortName(){
    var elements = [].slice.call(todoList.children);
    elements.sort((a,b) => {
        if(a.firstElementChild.innerHTML < b.firstElementChild.innerHTML) { 
            return -1; 
        }
        if(a.firstElementChild.innerHTML > b.firstElementChild.innerHTML) { 
            return 1; 
        }
        return 0;
    });
    while(todoList.children.length){
        todoList.removeChild(todoList.children[0])
    }
    elements.forEach(function(item){
        todoList.appendChild(item);
    }); 
}

btnSortName.addEventListener('click', sortName);
















