// const input = document.getElementById('input'),
//       buttonadd = document.getElementById('add'),
//       list = document.getElementById('lists'),
//       buttonsort = document.getElementById('sort');

// let todo = [];

// buttonadd.addEventListener('click', add);

// if(todo.length){
//     show();
// }

// function show(){
//     list.innerHTML = "";
//     for (let i = 0; i < todo.length; i++) {
//         todo[i].date = new Date(todo[i].date);
//         list.innerHTML += `<li>${todo[i].text} | ${todo[i].date}${todo[i].completed}</li>`
//     }
// }
// function add(){
//     let val = input.value;
//     todo.push({
//         text: val,
//         date: new Date(),
//         completed: false,
//     })
//     show();
// }

// change all of this to jquery code

const input = $('#input'), // get element
      buttonadd = $('#add'),
      list = $('#lists'),
      buttonsort = $('#sort');

let todo = [];

// buttonadd.addEventListener('click', add);
buttonadd.click(add);

if(todo.length){
    show();
}

function show(){
    list.html(""); // change to html ('') 
    let content = ""; // create empty content
    for (let i = 0; i < todo.length; i++) {
        todo[i].date = new Date(todo[i].date);
        content += `<li>${todo[i].text} | ${todo[i].date}${todo[i].completed}</li>`
        list.html(content); // add to content
    }
}
function add(){
    let val = input.val();
    todo.push({
        text: val,
        date: new Date(),
        completed: false,
    })
    show();
}