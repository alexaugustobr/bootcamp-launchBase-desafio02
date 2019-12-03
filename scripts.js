//FUNCTION TO MODAL

const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll(".recipe")

for (let recipe of recipes) {
    
    recipe.addEventListener("click", function() {

        const imgId = recipe.getAttribute("id")
        const recipeH3 = recipe.querySelector('h3').textContent
        const recipeP = recipe.querySelector('p').textContent

        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `assets/${imgId}.png`
        modalOverlay.querySelector(".modal-content-description h3").textContent = recipeH3
        modalOverlay.querySelector(".modal-content-description p").textContent = recipeP

    })
}

//CLOSE THE MODAL
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})