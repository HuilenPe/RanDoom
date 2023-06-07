let recetasss= document.getElementById('receta');
let pen= document.getElementById('pen');

recetasss.onclick=()=>{
    pen.style.rotate='30deg'
}

recetasss.onblur=()=>{
    pen.style.rotate='-0.1deg'
}