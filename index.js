
function cima(){
    let tecnologia = document.getElementById('tecnologia')
    tecnologia.style.color = "green"
    tecnologia.style.fontSize = "30px"
    tecnologia.style.display = "block"
}

function cima2(){
    let tecnologia2 = document.getElementById('tecnologia2')
    tecnologia2.style.color = "blue"
    tecnologia2.style.fontSize = "30px"
    tecnologia2.style.display = "block"
}

function clicar(){
    let button = document.getElementById("button");
    let nome = prompt("Digite o seu nome: ")
    let curso = prompt("Digite o seu curso: ")

    const li = document.createElement("li")
    const button2 = document.createElement("button")
    li.textContent = nome + ", " + curso
    button2.textContent = "Contratar"
    button2.onclick = () => contratar()
    document.getElementById('info').appendChild(li)
    document.getElementById('info').appendChild(button2)
    document.body.appendChild(li)
    document.body.appendChild(button2)
}

function contratar(){
    window.location.href = "contratar.html"
}