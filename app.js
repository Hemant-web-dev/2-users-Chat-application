let user1 = document.querySelector("#userfirst")
let user2=document.querySelector("#usersecond")
let input1=document.querySelector(".user1-input")
let input2=document.querySelector(".user2-input")
let btn1=document.querySelector("#click1")
let btn2=document.querySelector("#click2")
let chat=document.querySelector(".chat-container .messages")
let msg=document.querySelector(".message")
let state=document.querySelector(".state h4")
let count=0;
input1.addEventListener("focus",()=>{
    input2.placeholder="User 2"
    user1.style.backgroundColor="green";
    user2.style.backgroundColor="grey";
   
})
input2.addEventListener("focus",()=>{
    input1.placeholder="User 1"
    user2.style.backgroundColor="green";
    user1.style.backgroundColor="grey";
   
})
btn1.addEventListener("click",()=>{
 
    if(input1.value!==""){
    let reciever=document.createElement("div")
    reciever.innerText=input1.value
    reciever.classList.add("left-side")
    chat.appendChild(reciever)
    input1.value=""
    user1.style.backgroundColor="grey";
    input1.placeholder="User 1"
    
}
else{
    input1.placeholder="enter some text"
}

})
btn2.addEventListener("click",()=>{
    if(input2.value!==""){
    let reciever=document.createElement("div")
    reciever.innerText=input2.value
    reciever.classList.add("right-side")
    chat.appendChild(reciever)
    input2.value=""
    user2.style.backgroundColor="grey";
    input2.placeholder="User 2"
}
else{
    input2.placeholder="enter some text"
}
})
document.addEventListener("click",(evt)=>{
    if(evt.target.id==="userinput"){
     let cla=evt.target.name
     state.innerText=`${cla} is typing ...`
     let parentElement = evt.target.closest('div');
     let userButton = parentElement.querySelector('.user');  
     userButton.style.backgroundColor="green"
    }
    
   else{
    state.innerText=""
    user1.style.backgroundColor="grey"
    user2.style.backgroundColor="grey"
   }
    
})







