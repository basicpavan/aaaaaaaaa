var url = document.querySelector(".url")
var preview = document.querySelector(".exibir")
var galeria = document.querySelector(".galery")
var button = document.querySelector(".btn")
var galeriaArray = []
var previewVar = ""

url.addEventListener("keydown", (e) => {
    console.log(e)
    if (e.key === "Enter"){
        const img = document.createElement("img")
        img.src = url.value
        img.className = "image"
        previewVar = url.value
        preview.innerHTML = ""
        preview.appendChild(img)
    }
})


button.addEventListener("click", () => {
    console.log("CLicou")
    galeria.innerHTML = ""
    galeriaArray.push({
        id: 1,
        url: previewVar
    })
    galeriaArray.forEach(e => {
        const img = document.createElement("img")
        img.src = e.url
        img.className = "png"
        galeria.appendChild (img)
    });
})
