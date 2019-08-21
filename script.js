'use strict'

let money = prompt('Ваш бюджет на месяц', '') ,
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let AppData = {
    budget: money,
    timeData: time,
    expenses: {'ответ на первый вопрос' :
    'ответ на второй вопрос'},
    optionalExpenses: {},
    income: [],
    savings: false
    };

    let question1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
	    question2 = prompt('Во сколько обойдется?', ''),
	    question3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
        question4 = prompt('Во сколько обойдется?', '');
    
    AppData.expenses.question1 = question2;
    AppData.expenses.question3 = question4;

alert(AppData.budget / 30);