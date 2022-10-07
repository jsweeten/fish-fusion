const { boatInventory } = require("./fishingBoat.js")

// Now that the boatInventory function has been imported,
// we can set the return value of the function as a new variable
// that we can iterate over

const fishingBoatArray = boatInventory()

// Create a new array called mongerInventory that filters out
// fish from the boatInventory based on the following criteria:

const fishmongerSelections = []

// 1. if fish.amount < 10 then it does not get added to mongerInventory,
// which means if fish.amount >= 10 then it should get pushed to a new array

// 2. if fish.price > 7.50 then it does not get added to mongerInventory
// which means if fish.price <= 7.5 then it should get pushed to a new array

for (fish of fishingBoatArray) {
    if (fish.amount >= 10 && fish.price <= 7.50) {
        fishmongerSelections.push(fish)
    }
}

// 3. fish.amount in mongerInventory should contain 10 regardless of the
// fish.amount in boatInventory

for (fish of fishmongerSelections) {
    fish.amount = 10
}

// 4. create a parameter that allows users to input a budget and filter results accordingly

const budgetSelection = []

const mongerInventory = (budget) => {
    for (fish of fishmongerSelections) {
        if (budget > fish.price) {
            budgetSelection.push(fish)
        }
    } return budgetSelection    
}

// console.log(mongerInventory(5))


module.exports = { mongerInventory }