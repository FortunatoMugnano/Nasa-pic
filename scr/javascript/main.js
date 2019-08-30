console.log("hello nasa")


fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(response => response.json())
    .then(parseDate => {
        printDomFunction(parseDate)
        console.table(parseDate)
    })


function createNasaHTML(item) {
    return `
            <div>
            <img src="${item.url}" alt="pic of the day">
            <h3> Date: ${item.date} </h3>
            <p> Explanation: ${item.explanation} </p>
            <p> Title: ${item.title} </p>
            <p> Copyright by: ${item.copyright} </p>
            </div>
            `
}

const nasaContainer = document.querySelector(".nasaList")

const printDomFunction = (data) => {
    nasaContainer.innerHTML += createNasaHTML(data)
}

