document.getElementById('submit').addEventListener('click', e => add_restaurants(e));


function add_restaurants(event){
event.preventDefault()
let new_list=document.createElement('li')
let name=document.getElementById('name').value
let neighborhood=document.getElementById('neighborhood').value
new_list.innerHTML=`<li> <h3>${name}</h3> <p>${neighborhood}</p> </li>`
console.log(name,neighborhood)

document.getElementById('restaurants-list').appendChild(new_list)



};