
// Find returns the FRIST element of an array that satisfy the condition its similar to filter but it only returns one element thats the catch in it

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


const firstWithdrwal = transactions.find(function(n){
       return n < 0
})

console.log(firstWithdrwal)
