const { mongerInventory } = require("./fishMonger.js")

// The mongerInventory function has been imported from fishMonger.js,
// but I need to figure out how to create a variable for the chef's budget
// in this module. Once a budget has been decided, I need to write a code
// that adds 50% of the affordable fish to a new array.
// When the fish have been purchased, create a function that outputs
// an HTML string and call it fishMenu()

const budgetedInventory = mongerInventory(100)
const restaurantInventory = []

const budgetFilter = (budget) => {
    for (fish of budgetedInventory) {
        if (budget > fish.price) {
            restaurantInventory.push(fish)
            fish.amount = fish.amount / 2
        }
    } return restaurantInventory
}

const fishMenu = () => {
    for (fish of restaurantInventory) {
        console.log(`<h1>Menu</h1>
        <article class="menu">
        <h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>
        </article>`)
    }
}


budgetFilter(5)

module.exports = { fishMenu }