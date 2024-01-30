const inputBox = document.getElementById('input')
const btn = document.getElementById('btn')
const listItems = document.getElementById('listitems')


// ADDING A NEW TASK

btn.addEventListener('click',function(){
    if (inputBox.value === ""){
        alert ('Please Enter A New Task ...')
    }
    else{
       let paragrah =document.createElement('li')
       paragrah.innerHTML = inputBox.value
       paragrah.classList.add('list-style')
       listItems.appendChild(paragrah)
       let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        paragrah.appendChild(span)
       inputBox.value = " "



        paragrah.addEventListener('click',function(){
            paragrah.classList.add('Checked')

            
        })
        
        span.addEventListener('click',function(){
            listItems.removeChild(paragrah)
            

        })

    } 
    
    

})

// // local storage

// function savePage(){
//     localStorage.setItem("data",listItems.innerHTML)
// }

// function showTask(){
//     listItems.innerHTML = localStorage.getItem("data")
// }

// showTask()



