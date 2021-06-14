let buttons=document.querySelector(".buttons");
let display=document.querySelector(".display");

let calculator={
    operator:null,
    firtOper:"",
    secondOper:""
}
let first="";
let second="";
let oper="";
let result=0;
let operators="x+-/";




buttons.addEventListener("click", (e)=>{
    click(e)
    updateDisplay();
})

const click=(button)=>{
    let val=button.target.innerText;
    if(val.toLowerCase() === "reset"){
        first="";
        oper="";
        second="";
        result=0;
        return
    }else if(val === "="){
        if(oper && first && second){
            calculate();
            first=result;
            oper="";
            second="";
        }else if(first && !oper && !second){
            result=first;
        }
        
    }else if(val === "del"){
        del();
    }
    else if(val === "." && first[first.length-1] === "."){
         return
    }
    else if(val==="." && second[second.length-1] === "."){
        
    }
    else if(operators.includes(val)){
        //if an operator is clicked
        
        if(first && second){
            calculate();
            oper=val;
            first=String(result);
            second="";
            return
        }else if(first===""){
            first="0";
            oper=val;
            console.log(first);
            return
        }else{
            oper=val;
            return;
        }
    }
    else if(!oper && result){
        return
    }
    else if(!oper){
        //if an operator hasn't been clicked
        first=first+val;
        return
    }else{
        //if an operator has been clicked before a number is clicked
        second+=val; 
        return
    }
    
}

function updateDisplay(){
    let format=new Intl.NumberFormat();
    let b4Op;
    let afterOp;
    let final;
    
    if(!oper && first){
        // if(first === "-"){
        //     first="0";
        // }
        b4Op=format.format(first);
        final=`${b4Op}`
    }else if(oper && first && second){
        b4Op=format.format(first);
        afterOp=format.format(second);
        final=`${b4Op} ${oper} ${afterOp}`
        
        
    }else{
        b4Op=format.format(first);
        final=`${b4Op} ${oper}`;
        console.log(final);
        
        
    }
    console.log(final)
    display.querySelector(".current").innerText=final;
    display.querySelector(".result").innerText=format.format(result);
}

const del=()=>{
    let temp;
    
    if(first && second && oper){
        temp=second;
        temp=second.split("");
        temp.pop();
        second=temp.join("");
    }else if(first && oper){
        oper=""
    }else{
        temp=first.split("");
        temp.pop();
        first=temp.join("");
    }
}

const calculate=()=>{
    if(oper && second && first){
        switch(oper){
            case "+":
                result=parseFloat(first) + parseFloat(second);
                break;
            case "x":
                result=parseFloat(first) * parseFloat(second);
                break;
            case "-":
                result=parseFloat(first) - parseFloat(second);
                break;
            case "/":
                result=parseFloat(first) / parseFloat(second);
                break;
        }
    }else{
        result="SHINE YOUR EYES";
    }
    
}