const calculateChange = (payable, cashPaid) => {
    const moneys = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    const change = [];

    if (cashPaid < payable) {
        return 'error: unable to calculate change'; 
    } else if (cashPaid == payable) {
        return change;
    } else if (cashPaid > payable) {
        let remainingChange = cashPaid - payable;
        for (const money of moneys) {
            while (remainingChange >= money) {
                change.push(money);
                remainingChange -= money;
            }
    } 
    return change;
}
}

export default calculateChange;