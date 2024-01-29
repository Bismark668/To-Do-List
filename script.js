const inputBox = document.getElementById('input')
const btn = document.getElementById('btn')
const listItems = document.getElementById('listitems')

btn.addEventListener('click',function(){
    if (inputBox.value === ""){
        alert ('Please Enter A New Task ...')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listItems.append(li)
    }  
    inputBox.value =""
})