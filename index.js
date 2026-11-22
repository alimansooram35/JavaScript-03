// let amount = Number(prompt("Enter shopping amount (Rs.):"));
// let discount = 0;

// if (amount >= 10000) {
//   discount = amount * 0.20;
// } else if (amount >= 5000) {
//   discount = amount * 0.10;
// } else {
//   discount = 0;
// }

// let finalAmount = amount - discount;

// console.log("Original Amount: Rs. " + amount);
// console.log("Discount: Rs. " + discount);
// console.log("Final Amount: Rs. " + finalAmount);


// let units = Number(prompt("Enter electricity units consumed:"));
// let bill = 0;

// if (units <= 100) {
//   bill = units * 10;
// } else if (units <= 200) {
//   bill = (100 * 10) + ((units - 100) * 15);
// } else {
//   bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
// }

// console.log("Units Consumed: " + units);
// console.log("Total Bill: Rs. " + bill);





// let english = Number(prompt("Enter English marks (out of 100):"));
// let math = Number(prompt("Enter Mathematics marks (out of 100):"));
// let cs = Number(prompt("Enter Computer Science marks (out of 100):"));

// let totalMarks = english + math + cs;
// let percentage = (totalMarks / 300) * 100;
// let failedSubject = english < 40 || math < 40 || cs < 40;
// let grade = "";

// if (failedSubject) {
//   grade = "Fail (Failed in one or more subjects below 40)";
// } else if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }

// console.log("Total Marks: " + totalMarks + " / 300");
// console.log("Percentage: " + percentage.toFixed(2) + "%");
// console.log("Failed in Any Subject (< 40): " + (failedSubject ? "Yes" : "No"));
// console.log("Final Grade: " + grade);




// let balance = 50000;
// let withdrawAmount = Number(prompt("Enter amount to withdraw (Available: Rs. 50,000):"));

// if (withdrawAmount <= 0) {
//   console.log("Invalid Amount");
// } else {
//   if (withdrawAmount > balance) {
//     console.log("Insufficient Balance");
//   } else {
//     if (withdrawAmount % 500 === 0) {
//       balance = balance - withdrawAmount;
//       console.log("Transaction Successful! Withdrawn: Rs. " + withdrawAmount);
//       console.log("Remaining Balance: Rs. " + balance);
//     } else {
//       console.log("Please enter an amount in multiples of 500");
//     }
//   }
// }


// let billAmount = Number(prompt("Enter restaurant bill amount (Rs.):"));
// let hasCard = prompt("Do you have a membership card? (yes/no)").toLowerCase();
// let discount = 0;

// if (billAmount < 2000) {
//   discount = 0;
// } else {
//   if (billAmount > 5000) {
//     discount = discount + (billAmount * 0.15);
//   }
//   if (hasCard === "yes") {
//     discount = discount + (billAmount * 0.05);
//   }
// }

// let finalPayable = billAmount - discount;

// console.log("Original Bill: Rs. " + billAmount);
// console.log("Total Discount: Rs. " + discount);
// console.log("Final Payable Amount: Rs. " + finalPayable);







// let age = Number(prompt("Enter customer's age:"));
// let day = prompt("Enter day of the week:").toLowerCase();
// let ticketPrice = 0;

// if (age < 5) {
//   ticketPrice = 0;
// } else if (age < 12) {
//   ticketPrice = 300;
// } else if (age <= 59) {
//   ticketPrice = 600;
// } else {
//   ticketPrice = 400;
// }

// if (day === "wednesday" && ticketPrice > 0) {
//   ticketPrice = ticketPrice - (ticketPrice * 0.20);
// }

// console.log("Final Ticket Price: Rs. " + ticketPrice);





// let dataNeeded = Number(prompt("How much mobile data do you need (in GB)?"));

// if (dataNeeded <= 0) {
//   console.log("Please enter a valid positive data amount.");
// } else if (dataNeeded <= 5) {
//   console.log("Package: Basic | Data: 5 GB | Price: Rs. 300");
// } else if (dataNeeded <= 15) {
//   console.log("Package: Standard | Data: 15 GB | Price: Rs. 600");
// } else if (dataNeeded <= 30) {
//   console.log("Package: Premium | Data: 30 GB | Price: Rs. 1,000");
// } else {
//   console.log("No available package");
// }




// let salary = Number(prompt("Enter employee salary (Rs.):"));
// let experience = Number(prompt("Enter years of experience:"));
// let bonus = 0;

// if (salary < 30000) {
//   bonus = 0;
// } else if (experience >= 5) {
//   bonus = salary * 0.20;
// } else if (experience >= 3) {
//   bonus = salary * 0.10;
// } else {
//   bonus = salary * 0.05;
// }

// let finalSalary = salary + bonus;

// console.log("Base Salary: Rs. " + salary);
// console.log("Bonus Amount: Rs. " + bonus);
// console.log("Final Salary: Rs. " + finalSalary);






// let orderAmount = Number(prompt("Enter order amount (Rs.):"));
// let city = prompt("Enter your city:").trim().toLowerCase();
// let deliveryCharges = 0;

// if (orderAmount > 5000) {
//   deliveryCharges = 0;
// } else if (orderAmount >= 2000) {
//   deliveryCharges = 150;
// } else {
//   deliveryCharges = 250;
// }

// if (city === "karachi") {
//   deliveryCharges = deliveryCharges - 50;
//   if (deliveryCharges < 0) {
//     deliveryCharges = 0;
//   }
// }

// let totalPayable = orderAmount + deliveryCharges;

// console.log("Order Amount: Rs. " + orderAmount);
// console.log("Delivery Charges: Rs. " + deliveryCharges);
// console.log("Final Payable Amount: Rs. " + totalPayable);







// let age = Number(prompt("Enter your age:"));
// let monthlySalary = Number(prompt("Enter your monthly salary (Rs.):"));
// let jobExperience = Number(prompt("Enter your job experience (in years):"));

// if (age < 21) {
//   console.log("Not Eligible: Minimum age required is 21 years.");
// } else if (monthlySalary < 50000) {
//   console.log("Not Eligible: Minimum monthly salary required is Rs. 50,000.");
// } else if (jobExperience < 2) {
//   console.log("Not Eligible: Minimum job experience required is 2 years.");
// } else {
//   if (monthlySalary > 100000) {
//     console.log("Eligible for Loan! Eligible Loan Amount: Rs. 1,000,000");
//   } else {
//     console.log("Eligible for Loan! Eligible Loan Amount: Rs. 500,000");
//   }
// }






// let costPrice = 45000;
// let sellingPrice = 52000;

// let profit = sellingPrice - costPrice;
// let profitPercentage = (profit / costPrice) * 100;

// console.log("Total Profit: Rs. " + profit);
// console.log("Profit Percentage: " + profitPercentage.toFixed(2) + "%");





// let totalMoney = 5000;

// let foodExpense = totalMoney * 0.25;
// let transportExpense = totalMoney * 0.15;
// let totalExpenses = foodExpense + transportExpense;
// let remainingMoney = totalMoney - totalExpenses;

// console.log("Money Spent on Food: Rs. " + foodExpense);
// console.log("Money Spent on Transport: Rs. " + transportExpense);
// console.log("Total Expenses: Rs. " + totalExpenses);
// console.log("Remaining Money: Rs. " + remainingMoney);





// let distance = 180; // in kilometers
// let time = 3; // in hours

// let speed = distance / time;

// console.log("Average Speed: " + speed + " km/h");




// let currentAge = Number(prompt("Enter your current age:"));
// let futureAge = currentAge + 15;

// console.log("After 15 years, you will be " + futureAge + " years old.");






// let stock = 100;

// // Hour 1 (5 sold)
// stock--; stock--; stock--; stock--; stock--;
// // Hour 2 (5 sold)
// stock--; stock--; stock--; stock--; stock--;
// // Hour 3 (5 sold)
// stock--; stock--; stock--; stock--; stock--;
// // Hour 4 (5 sold)
// stock--; stock--; stock--; stock--; stock--;
// // Hour 5 (5 sold)
// stock--; stock--; stock--; stock--; stock--;
// // Hour 6 (5 sold)
// stock--; stock--; stock--; stock--; stock--;
// // Hour 7 (5 sold)
// stock--; stock--; stock--; stock--; stock--;

// console.log("Remaining products after 7 hours: " + stock);




// let num = Number(prompt("Enter a number:"));

// if (num > 0) {
//   console.log("The number is Positive.");
// } else if (num < 0) {
//   console.log("The number is Negative.");
// } else {
//   console.log("The number is Zero.");
// }




