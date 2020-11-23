const age = 20;
const drink = age >= 18 ? "wine " : "water";


console.log(drink)



let tip;
const bills = [275, 40, 430];
// console.log(`Bill was ${bill}, tip was ${tip = bill >= 50 && bill < 300 ? bill * .15 : bill * .20} and total value was ${bill + tip}`);
let bill;

function loop(bills) {
    for (i = 0; bills.lenght; i++) {
        bill = bills[i]
        console.log(`Bill was ${bill}, tip was ${tip = bill >= 50 && bill < 300 ? bill * .15 : bill * .20} and total value was ${bill + tip}`)
        return `Bill was ${bill}, tip was ${tip = bill >= 50 && bill < 300 ? bill * .15 : bill * .20} and total value was ${bill + tip}`
    }
}
loop(bills)