const chickenEl = document.querySelector('#fried-chicken')
const halibutEl = document.querySelector('#fried-halibut')
const hamburgerEl = document.querySelector('#hamburger')
const salmonEl = document.querySelector('#grilled-salmon')
const saladEl = document.querySelector('#side-salad')

const totalEl = document.querySelector('.totalItems')

const taxEl = document.querySelector('.tax')

const totalWithTaxEl = document.querySelector('.totalTax')



const inputs = document.getElementsByTagName('input')
// console.dir(inputs); // NOTE: This will show an HTMLCollection



const arrayInputs = Array.from(inputs)
console.log(arrayInputs);



const calculateItems = function () {
    const tax = 0.07
    let totalTax = 0
    let total = 0
    arrayInputs.forEach(input =>{
        if (input.checked) {
            const id = input.id
            const value = Number(input.value) * 100
            switch (id) {
                case 'fried-chicken':
                    totalTax += value * tax
                    total += value + (value * tax)
                    break
                case 'fried-halibut':
                    totalTax += value * tax
                    total += value + (value * tax)
                    break
                case 'hamburger':
                    totalTax += value * tax
                    total += value + (value * tax)
                    break
                case 'grilled-salmon':
                    totalTax += value * tax
                    total += value + (value * tax)
                    break
                case 'side-salad':
                    totalTax += value * tax
                    total += value + (value * tax)
                    break
            }
        }
    })
    totalEl.innerHTML = `Total Cost of Items: $${(total / 100).toFixed(2)}`
    taxEl.innerHTML = `Tax: $${(totalTax / 100).toFixed(2)}`
    totalWithTaxEl.innerHTML = `TOTAL: $${((total + tax) / 100).toFixed(2)}`
}


arrayInputs.forEach(input => {
    input.addEventListener('click', calculateItems)
})







