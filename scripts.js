//FUNCTION TO MODAL

const modalOverlay = document.querySelector('.modal-overlay')
const revenues = document.querySelectorAll(".revenue")

for (let revenue of revenues) {
    
    revenue.addEventListener("click", function() {

        const imgId = revenue.getAttribute("id")
        const revenueH3 = revenue.querySelector('h3').textContent
        const revenueP = revenue.querySelector('p').textContent

        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `assets/${imgId}.png`
        modalOverlay.querySelector(".modal-content-description h3").textContent = revenueH3
        modalOverlay.querySelector(".modal-content-description p").textContent = revenueP

    })
}

//CLOSE THE MODAL
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})