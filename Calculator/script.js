let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let str = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click",(e) =>{
        if(e.target.innerHTML == '='){
            try{
                str=eval(str);
                input.value=str;
            }
            catch(error){
                input.value="error";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            str="";
            input.value=str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            input.value=str;
        }
        else{
            str+=e.target.innerHTML;
            input.value=str;
        }
    })
})

document.addEventListener("keydown",function(event){
    if(event.key == 'Backspace'){
        str = str.substring(0,str.length-1);
        input.value=str;
    }
    else if(event.key == 'Escape'){
        str="";
        input.value=str;
    }
    else if(event.key == 'Enter' || event.key == '='){
        try{
            str=eval(str);
            input.value=str;
        }
        catch(error){
            input.value="error";
        }
    }
    else{
        str+=event.key;
        input.value=str;
    }
});