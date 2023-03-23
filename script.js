// let salaryFirstMonth = prompt("Enter first month's salary", 0);
// let salarySecondMonth = prompt("Enter second month's salary", 0);
// let salaryTotal = +salaryFirstMonth + +salarySecondMonth;
// alert(`Your salary for two months is: ${salaryTotal}$`);
// alert(`You have extra bonus! Your total salary was: ${salaryTotal++}$ It has been increased for 1$ and now it is: ${salaryTotal}$`);
// alert(`Will you work next? ${salaryTotal >= 2000}`);

let salaryFirstMonth = prompt("Enter first month's salary", 0);
let salarySecondMonth = prompt("Enter second month's salary", 0);
let salaryTotal = +salaryFirstMonth + +salarySecondMonth;
alert(`Your salary for two months is: ${salaryTotal}$`);
alert(`You have extra bonus! Your total salary was: ${salaryTotal++}$ It has been increased for 1$ and now it is: ${salaryTotal}$`);
alert((salaryTotal < 2000 && "I'm out") || (salaryTotal >= 2000 && "I'm ready to work"));

//Щоб скоротити запис в останній строчці можна прибрати перевірку на >= 2000 та записати, як написано нижче
//alert((salaryTotal < 2000 && "I'm out") || "I'm ready to work");