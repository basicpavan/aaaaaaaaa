var url = document.querySelector(".url")
var preview = document.querySelector(".exibir")
var galeria = document.querySelector(".galery")
var button = document.querySelector(".btn")
var galeriaArray = []

url.addEventListener("keydown", (e) => {
    console.log(e)
    if (e.key === "Enter"){
        const img = document.createElement("img")
        img.src = url.value
        img.className = "image"
        preview.innerHTML = ""
        preview.appendChild(img)
    }
})


button.addEventListener("click", () => {
    console.log("CLicou")
    galeriaArray.push({
        id: 1,
        url: url.value
    })
})
