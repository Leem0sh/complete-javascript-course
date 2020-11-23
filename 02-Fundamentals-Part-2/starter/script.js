'use strict';

const billz = [23, 56, 600]

function loop(bills) {
    for (const i = 0; bills.lenght; i++) {
        bill = bills[i]
        console.log(`Bill was ${bill}, tip was ${tip = bill >= 50 && bill < 300 ? bill * .15 : bill * .20} and total value was ${bill + tip}`);
        // return `Bill was ${bill}, tip was ${tip = bill >= 50 && bill < 300 ? bill * .15 : bill * .20} and total value was ${bill + tip}`;
    }
}
loop(billz);
