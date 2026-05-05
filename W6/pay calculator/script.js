function calculatepay() {
    const hourlyPay = Number(prompt("Enter hourly pay:"));
    const hoursWorked = Number(prompt("Enter Hours worked per week:"));
    const weeks = 2;
    const taxrate = 0.20;

    const grosspay = hourlyPay * hoursWorked * weeks;
    const uncleSamsShare = grosspay * taxrate;
    const netpay = grosspay - uncleSamsShare;