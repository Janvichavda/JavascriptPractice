const arr = [10, 20, 20, 30]

const finalAmount = arr.reduce((total, item) => {
    return total * item
}, 1)
console.log("finalAmount ~ finalAmount:", finalAmount)

