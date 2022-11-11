let saldo = document.getElementById('cred')
let input = document.getElementById('inp')
let select = document.getElementById('sel')
let apostar = document.getElementById('btnApostar')
let reset = document.getElementById('btnReset')
const notif = document.getElementById('notification');
let results = new Array;
let cuans= 0;
let credito = Number(saldo.innerHTML);
console.log(credito)
saldo.value = credito;
let apuesta;
let cont = 0;
let elec;
let cartas = document.getElementsByTagName('img')
function reseteo() {
    results=new Array;
    cuans= 0;
    cont = 0;
    apostar.removeAttribute('disabled');
    input.removeAttribute('disabled');
    select.removeAttribute('disabled');
    select.selectedIndex = 0;
    input.value = "";
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].setAttribute('src','./images/dorso.png')
        
    }
}

function empJuego() {
    val1 = false;
    val2 = false;
    apuesta = Number(input.value);
    console.log(apuesta)
    if (apuesta > 500 || apuesta < 100 || apuesta > credito) {
        notif.innerText = `La apuesta introducida no es valida.
                Vuelve a intentarlo.`;
        notif.opened = true;
        val1 = false;
    } else val1 = true

    if (select.selectedIndex == 0) {
        notif.innerText = `Selecciona un palo para empezar a apostar.`;
        notif.opened = true;
        val2 = false;
    } else val2 = true;

    if (val1 == true && val2 == true) {
        notif.innerText = `Clica sobre las cartas para empezar.`;
        notif.opened = true;
        apostar.setAttribute('disabled', '');
        input.setAttribute('disabled', '');
        select.setAttribute('disabled', '');
       
        elec=select.selectedIndex;
        juego();
    }
}

function juego() {
    let number;
    let palo;
   
        let v1 = false;
        let v2 = false;
        let v3 = false;
        let v4 = false;
        let v5 = false;
        let v6 = false;
        
    
   
        i1.addEventListener('click', () => {
            if(v1==false){
            number = Math.floor(Math.random() * 4 + 1);
            results.push(number)
            palo=calc(number)
            cont++;
v1=true;
console.log(results.length)
            cartas[0].setAttribute('src',palo)
            if(cont==cartas.length){
            
                acabar()
            }
        }
        })
        i2.addEventListener('click', () => {
            if(v2==false){
            number = Math.floor(Math.random() * 4 + 1);
            results.push(number)
            palo=calc(number)
            cont++;
            v2=true;
            cartas[1].setAttribute('src',palo)
            if(cont==cartas.length){
            
                acabar()
            }
        }
        })
       i3.addEventListener('click', () => {
        if(v3==false){
            number = Math.floor(Math.random() * 4 + 1);
            results.push(number)
            palo=calc(number)
            cont++;
            v3=true;
            cartas[2].setAttribute('src',palo)
            if(cont==cartas.length){
            
                acabar()
            }
        }
        })
        i4.addEventListener('click', () => {
            if(v4==false){
            number = Math.floor(Math.random() * 4 + 1);
            results.push(number)
            palo=calc(number)
            cont++;
            v4=true;
            cartas[3].setAttribute('src',palo)
            if(cont==cartas.length){
            
                acabar()
            }
        }
        })
        i5.addEventListener('click', () => {
            if(v5==false){
            number = Math.floor(Math.random() * 4 + 1);
            results.push(number)
            palo=calc(number)
            cont++;
            v5=true;
            console.log(results.length)
            cartas[4].setAttribute('src',palo)
            if(cont==cartas.length){
            
                acabar()
            }
        }
        })
        i6.addEventListener('click', () => {
            if(v6==false){
            number = Math.floor(Math.random() * 4 + 1);
            results.push(number)
            palo=calc(number)
            cont++;
            v6=true;
            console.log(results.length)
            cartas[5].setAttribute('src',palo)
            if(cont==cartas.length){
            
                acabar()
            }
        }
        })
        
    

       
    
}
function calc(n){
    switch (n) {
        case 1:
    palo="./images/espadas.png"
            break;

        case 2:
            palo="./images/bastos.png"
            break;
        case 3:
            palo="./images/oros.png"
            break;
        case 4:
            palo="./images/copas.png"
            break;
    }
    return palo;
}

function acabar(){
 
    for (let i = 0; i < results.length; i++) {
        if(results[i]==elec){
cuans++;
        }
    }
        if(cuans>=2){
            notif.innerText = `Has ganado.
            Empezando una partida nueva`;
            notif.opened = true;
            credito = credito + apuesta;
            saldo.innerHTML = credito
        }else {
        notif.innerText = `Has Perdido.
        Empezando una partida nueva`;
        notif.opened = true;
        credito = credito - apuesta;
        saldo.innerHTML = credito
        }
   setTimeout(()=>{
    reseteo();
   },2000);
    
}
apostar.addEventListener('click', () => {
    empJuego();


})
reset.addEventListener('click', () => {
    credito=1000;
    saldo.innerHTML = credito
    reseteo();
})