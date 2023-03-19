const employeesNumber = 100;

function awardBonuses() {
    for (let i = 1; i <= employeesNumber; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`)
        }
        else if (i % 3 === 0) {
            console.log(`${i} - Vacation!`)
        }
        else if (i % 5 === 0) {
            console.log(`${i} - $100,000 bonus!`)
        }
        else {
            console.log(`${i} - :(`)
        }

    }

}

awardBonuses()
