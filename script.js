let text=document.getElementById("text");
let list=document.getElementById("list");
function Add(){
    if(text.value==''){
        alert("You must enter a value");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=text.value;
        list.appendChild(li);
        text.value='';
    }
}