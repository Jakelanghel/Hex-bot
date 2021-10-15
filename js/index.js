const colorsDiv = document.getElementById("colors-id")
const colorCount = document.getElementById("color-count")



const getInput = (e) => {
    let count = colorCount.value
    count === "" ? count = 0 : count 
    getColors(count)
}

const getColors = async (count) => {
    const response = await fetch(`https://apis.scrimba.com/hexcolors?count=${count}`)
    const data = await response.json()
    const colors = data.colors
    displayColors(colors)
}

const displayColors = (colors) => {
    colorsDiv.innerHTML = ""
    colors.forEach(color => {
        creatColorDiv(color)
    });
}

const creatColorDiv = (color) => {
    const div = document.createElement("div")
    div.style.background = color.value
    div.classList.add("color")
    const p = document.createElement("p")
    p.textContent = color.value
    p.classList.add("hex")
    div.appendChild(p)
    colorsDiv.appendChild(div)

}

colorCount.addEventListener("keyup", getInput )


