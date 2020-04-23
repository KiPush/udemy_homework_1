'use strict';
let money = prompt("Ваш бюджет на месяц?"),
    time = prompt ("Введите дату в формате YYYY-MM-DD");
let appData =  {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let costItem = prompt("Введите обязательную статью расходов в этом месяце"),
    howMuch  = prompt ("Во сколько обойдется?");
    appData.expenses.costItem = costItem;
    appData.expenses.howMuch = howMuch;
let budget = (money-howMuch)/30;
alert("Ваш бюджет на день составит:" + budget + " руб.");
    // console.log(appData.expenses.howMuch);

    

