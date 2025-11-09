var setaesquerda = window.document.getElementById ("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById ("samantha")
var Bbuna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById ("seta-direita")

function rolarparadireita() {
    setaesquerda.style = "display:flex; margin-top:55px"
    leonardo.style = "display:none"  
    bruna.style ="display:flex"
    setadireita.style = "display:none"
} 

function rolarparaesquerda() {
    setaesquerda.style = "display:none"
    bruna.style ="display:none"
    leonardo.style = "display:flex"  
    setadireita.style = "display:style; margin-top:55px"
} 

