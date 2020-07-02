var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');
var btnEql = document.getElementById('btnEql');
var resRef = document.getElementById('res');
var btnClr = document.getElementById('btnClr');
var n1 =''
var operatorUsed =""
var isResultDisplayed=false
var addToScreen = function(n1){
    
    
    if(isResultDisplayed){
        clearScreen();
    }
    isResultDisplayed=false;
    if(resRef.innerText===''){
        resRef.innerText=n1;    
    }
    else{
        resRef.innerText += n1;
    }
    
}
btn0.addEventListener('click',e=>{
    var temp=btn0.innerText;
    n1 = temp.toString();
    addToScreen(n1);
})
btn1.addEventListener('click',e=>{
    var temp=btn1.innerText;
    n1 = temp.toString();
    addToScreen(n1);
})
btnSum.addEventListener('click',e=>{
    var temp=btnSum.innerText;
    n1 = temp.toString();
    addToScreen(n1);
})
btnSub.addEventListener('click',e=>{
    var temp=btnSub.innerText;
    n1 = temp.toString();
    addToScreen(n1);
})
btnMul.addEventListener('click',e=>{
    var temp=btnMul.innerText;
    n1 = temp.toString();
    addToScreen(n1);
})
btnDiv.addEventListener('click',e=>{
    var temp=btnDiv.innerText;
    n1 = temp.toString();
    addToScreen(n1);
})

var clearScreen = function(){
    resRef.innerText="";
}
btnClr.addEventListener('click',e=>{
   
    clearScreen();
});

btnEql.addEventListener('click',e=>{
    console.log(n1);
    var operators = ["+","-","/","*"];
    var flag=0;
    var value = resRef.innerText;
    for(var i=0;i<value.length;i++){
        
        if(value[i]==="+"){
            operatorUsed="+";
            const operands = value.split(operatorUsed);
            const calc = parseInt(operands[0],2)+parseInt(operands[1],2);
            clearScreen();
            addToScreen((calc >>> 0).toString(2));
            isResultDisplayed=true;
            break;
        }
        else if(value[i]==="*"){
            operatorUsed="*";
            const operands = value.split(operatorUsed);
            const calc = parseInt(operands[0],2)*parseInt(operands[1],2);
            clearScreen();
            addToScreen((calc >>> 0).toString(2));
            isResultDisplayed=true;
            break;
        }
        else if(value[i]==="-"){
            operatorUsed="-";
            const operands = value.split(operatorUsed);
            const calc = parseInt(operands[0],2)-parseInt(operands[1],2);
            clearScreen();
            addToScreen((calc >>> 0).toString(2));
            isResultDisplayed=true;
            break;
        }
        else if(value[i]==="/"){
            operatorUsed="/";
            const operands = value.split(operatorUsed);
            const calc = parseInt(operands[0],2)/parseInt(operands[1],2);
            clearScreen();
            addToScreen((calc >>> 0).toString(2));
            isResultDisplayed=true;
            break;
        }
        
        
        
    }
    
    
    
})
