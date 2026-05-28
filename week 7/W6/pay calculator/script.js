function calculatepay() {
    const hourlyPay = Number(prompt("Enter hourly pay:"));
    const hoursWorked = Number(prompt("Enter Hours worked per week:"));
    const weeks = 2;
    const taxrate = 0.20;

    const grosspay = hourlyPay * hoursWorked * weeks;
    const uncleSamsShare = grosspay * taxrate;
    const netpay = grosspay - uncleSamsShare;
    const message =
        "Gross Pay: $" + grosspay.toFixed(2) + "\n" +
        "Uncle Sam's Share: $" + uncleSamsShare.toFixed(2) + "\n" +
        "Net Pay: $" + netpay.toFixed(2);

    alert(message);

    console.log("Gross Pay: $" + grosspay.toFixed(2));
    console.log("Uncle Sam's Share: $" + uncleSamsShare.toFixed(2));
    console.log("Net Pay: $" + netpay.toFixed(2));
}
calculatepay();