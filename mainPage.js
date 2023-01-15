document.querySelector("#form1").addEventListener("submit",checkval)

function checkval(event){
    event.preventDefault();
    let td11=document.querySelector("#td11").value;
    let td12=document.querySelector("#td12").value;
    console.log(td11)
    
    if(td11==""||td12==""){
    alert("please fill all Deta!")
    }
    else if(td12!="7777"){
        alert("Please use zip code:- 7777")
       
    }else{
        window.location.assign("dinnerReady.html")
    }
}
