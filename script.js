const formulario     = document.getElementById("form-nota")
const inputTitulo    = document.getElementById("titulo")
const inputConteudo  = document.getElementById("conteudo")
const containerNotas = document.getElementById("container-notas")

formulario.addEventListener('submit',function(event) {

    event.preventDefault()
    
    const novaNota = {
        titulo: inputTitulo.value,
        conteudo: inputConteudo.value
        data: new Date().toLogaleDateString('pt-BR')
    }

    console.log("Titulo: ", novaNota.titulo)
    console.log("Conteudo: ", novaNota.conteudo)
    console.log("Data: ", novaNota.data)

    const novoCard = document.createElement("div")
    novoCard.classList.add("card")

    const tituloNota = document.createElement("h3")
    tituloNota.textContent = novaNota.titulo

    const conteudoNota = document.createElement("p")
    conteudoNota.textContent = novaNota.conteudo

    const dataNota = document.createElement("small")
    dataNota.textContent = novaNota.data

    const btnExcluir = document.createElement("button")
    btnExcluir.textContent = "X"
    btnExcluir.classList.add("btn-excluir")

    novoCard.appendChild(tituloNota)
    novoCard.appendChild(conteudoNota)
    novoCard.appendChild(dataNota)
    novoCard.appendChild(btnExcluir)

    containerNotas.appendChild(NovoCard)

    novoCard.addEventListener('mouseover', () => {
        btnExcluir.style.opacity = "1"
    })

    novoCard.addEventListener('mouseout', () => {
        btnExcluir.style.opacity = "o"
    })

    btnExcluir.addEventListener('click', () => {
        novoCard.remove()
    })

    formulario.reset()
})

