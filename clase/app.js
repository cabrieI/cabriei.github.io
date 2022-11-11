let t1=document.getElementById('tt1')
let t2=document.getElementById('tt2')
let sol = document.getElementById('sol')
let btn = document.getElementById('btn')
let img = document.getElementById('img')
let array ;
let copy =new Array();
let letrasus =new Array();
//if(t1.ariaValueMax.length>0){}
let i = 0;
function reDraw(){
    img.setAttribute('src','img/'+i+'.png');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < letrasus.length; j++) {
            if(array[i]==letrasus[j]){
                copy[i]=letrasus[j];
            }            
        }
        
        
    }
    sol.innerHTML=copy.join(" ");
}

t1.addEventListener('keyup', (evento) => {
    if (evento.key == "Enter") {
         onKeyup();
    }
    });

function onKeyup(){

    t1.setAttribute('disabled','');
    t2.removeAttribute('disabled');
    array = Array.from(t1.value);
    for (let i = 0; i < array.length; i++) {
        sol.innerHTML+="- "
        copy[i]="-";
    }

}
t2.addEventListener('keyup', (evento) => {
    if (evento.key == "Enter") {
     if(t2.value.length==1)
        letter();
        t2.value= "";
    }
    });

function letter(){
    let boo = 0;
    for (let i = 0; i < array.length; i++) {
       if(t2.value == array[i]){
        boo++;
        letrasus.push( t2.value);
        reDraw();
        if(compare()==0){
            img.setAttribute('src','img/win.png');
            t2.setAttribute('disabled','');
        }
       }
        
    }
    if(boo==0){
        i++;
        if(i==7){
            t2.setAttribute('disabled','');
        }
        reDraw();
    }
    
}
function compare(){
    let p=0;
    for (let i = 0; i < array.length; i++) {
        if(copy[i]!=array[i]){
            p=1;
        }
        
    }
    return p;
}

btn.addEventListener('click',()=>{
    i=0;
    t1.value=null;
    t1.removeAttribute('disabled');
    t2.setAttribute('disabled','');
 
     copy =new Array();
 letrasus =new Array();
 reDraw();


})
