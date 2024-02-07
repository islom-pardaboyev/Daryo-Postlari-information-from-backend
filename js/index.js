const elResult = document.querySelector(".result")
const elList = document.querySelector(".list-container")
const elMainDiv = document.querySelector(".mainDiv")


elResult.textContent = `Umumiy yangiliklar soni: ${daryoPostlari.length}`
for (let data of daryoPostlari){

    // Create Elements
    const newLI = document.createElement("li")    
    const newImg = document.createElement("img")
    const newDiv = document.createElement("div")
    const newTitle = document.createElement("h1")
    const newP = document.createElement("p")
    const newLink = document.createElement("a")


    // Text Contents
    newTitle.textContent = data.title
    newP.textContent = data.date
    newLink.textContent = 'Link'

    // Set Attributes
    newImg.setAttribute('src', `${data.photo}`)
    elList.setAttribute('class', "flex flex-wrap gap-6")
    newLI.setAttribute("class", 'w-[303px] h-[280px] rounded-md border-2 mr-[1rem] p-4')
    newLink.setAttribute("href", `${data.link}`)
    newP.setAttribute("class", "mb-[20px]")
    newLink.setAttribute("class", "text-[#0C6DFD] border rounded-md border-[#0C6DFD] py-3 hover:text-[#fff] hover:bg-[#0C6DFD] duration-200 px-4")
    newTitle.setAttribute('class', "text-[20px] mb-[10px] font-medium")
    newLink.setAttribute("target", '_blank')


    // Appends
    elList.appendChild(newLI)
    newLI.append(newImg, newDiv, newP, newLink)
    newDiv.append(newTitle)
}