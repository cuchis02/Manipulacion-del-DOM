const fondo = document.getElementById("btn-color")
const figura = document.querySelector("#figura")
fondo.addEventListener("click",(event)=>{
    event.preventDefault()
    const Color= document.getElementById("seleccionC").value;
    console.log(Color)
    figura.style.backgroundColor=Color
    

})
const fondo1 = document.getElementById("btn-color1")
const body = document.querySelector("#cont-general")
fondo1.addEventListener("click",(event)=>{
    event.preventDefault()
    const Color1= document.getElementById("seleccionC1").value;
    console.log(Color1)
    body.style.backgroundColor=Color1
    

})

function Imagen() {
    const imagen= document.getElementById("figura")
    const letra = document.getElementById("titulo")

    imagen.style.backgroundImage = 'url(https://static.maskokotas.com/blog/wp-content/uploads/2020/12/hare-4375952_1920-1.jpg)';
}


function fondoColor() {
    const body = document.getElementById('cont-general')
    body.style.backgroundColor = 'red';
}

function circulo() {
    const circulo = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    letra.innerText = "Circulo";
    
    if (!circulo.classList.contains("circulo")) {
        circulo.classList = ("circulo");
    } else {
        circulo.classList.remove("circulo");
        letra.innerText = "Figura";
    }
}
function rombo() {
    const rombo = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    letra.innerText = "Rombo";
    
    if (!rombo.classList.contains("rombo")) {
        rombo.classList = ("rombo");
    } else {
        rombo.classList.remove("rombo");
        letra.innerText = "Figura";
    }
}
function superior() {
    const superior = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!superior.classList.contains("superior")) {
        superior.classList = ("superior");
        letra.innerText = "Top";
    } else {
        superior.classList.remove("superior");
        letra.innerText = "Figura";
    }
}

function bottom() {
    const bottom = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!bottom.classList.contains("bottom")) {
        bottom.classList = ("bottom");
        letra.innerText = "Bottom";
    } else {
        bottom.classList.remove("bottom");
        letra.innerText = "Figura";
    }
}
function izquierda() {
    const izquierda = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!izquierda.classList.contains("izquierda")) {
        izquierda.classList = ("izquierda");
        letra.innerText = "Rigth";
    } else {
        izquierda.classList.remove("izquierda");
        letra.innerText = "Figura";
    }
}

function derecha() {
    const derecha = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!derecha.classList.contains("derecha")) {
        derecha.classList = ("derecha");
        letra.innerText = "Left";
    } else {
        derecha.classList.remove("derecha");
        letra.innerText = "Figura";
    }
}

function animation() {
    const animation = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    animation.style.animation = 'brincos 1s infinite running'
}

function Fondo(){
    const Fondo = document.getElementById("figura");
    const letra = document.getElementById("titulo"); 
    letra.innerText = "Degrado";

    Fondo.style.backgroundImage = 'linear-gradient(to top red, pink)';

}

function diagonal() {
    const diagonal = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!diagonal.classList.contains("diagonal")) {
        diagonal.classList = ("diagonal");
        letra.innerText = "Diagonal";
    } else {
        diagonal.classList.remove("diagonal");
        letra.innerText = "Figura";
    }
}


function active (){
    const active = document.getElementById("panel-lateral");
    
    if (!active.classList.contains("active")) {
        active.classList = ("active");
    } else {
        active.classList.remove("active");
    }
}

function desactive (){
    const desactive = document.getElementById("panel-superior");  
    
    if (!desactive.classList.contains("desactive")) {
        desactive.classList = ("desactive");
    } else {
        desactive.classList.remove("desactive");
    }
}
function volver(){
    const volver = document.getElementById("panel-superior");

    if (volver.classList.contains("desactive")){
        volver.classList.remove("desactive");
    }
}