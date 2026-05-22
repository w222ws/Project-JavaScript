// const topTaskWorld = [
//     { id: 1, text: 'Зрозуміти С', completed: true, priority: 'low' },
//     { id: 2, text: 'Зрозуміти СSS', completed: false, priority: 'high' },
//     { id: 3, text: 'Зрозуміти HTML', completed: false, priority: 'high' },
//     { id: 4, text: 'Зрозуміти Pascale', completed: true, priority: 'low' }
// ]; // Создав змінну з камал кейс по стандарту, далі ну обьекти, ну і стьоб зробив типу ну бля, типу с і паскал
// // типу легко вивчити а ось типу хтмл і цсс тип не реально ахахах) ну і все)) щас ебашить буду фільтр)
//
// const titles = topTaskWorld.map(task => task.text);
// console.log(titles); // мапчик

let user = { name: "Макс", isBlocked: true };

// Что нужно написать вместо вопросов, чтобы проверить, забанен ли Макс?
// if (user.isBlocked === true) {
//     console.log("Доступ запрещен! Вы забанены.");
// } else {
//     console.log("Добро пожаловать в систему!");
// }
//
// let arr1 = [1, 2]; // масс1
// let arr2 = [3, 4]; // масс2
// let combined = [...arr1, ...arr2]; // комбинируем массивы наши с помощью оператора спреар, он же ... россыпь старого массива делаемт
// console.log(combined); // ну и вывод консоль
//
//
// let InetUser = {
//     name: 'Kyrylo',
//     balance: 2000,
//     getReport() {
//         return 'Client: ' + this.name + ', Balance: ' + this.balance;
//     }
// }; // ну понятно создали обьект кинули в него значения имя баланс, база дальше открываем функцию внутри обьекта и возвращаем с этой
// // функции вырываем нейм з контекста и баланс чтоб не писать InetUser.name ) проще))
//
// let InetUser2 = {...InetUser}; // оператор спеар)) рассыпаем все в юзер 2 все что было в том юзере который вставили в обьект, почему обьект ставим типл {} дяк
//
// InetUser2.name = 'Serhiy'; // просто придаем новое имя))
//
// console.log(InetUser.getReport()); // ну и чекаем через функцию но смотрим что нам вернул прежний юзер
// console.log(InetUser2.getReport()); // и соответсвенно что вернул юзер2)) так то все)) лбьяснил как я это понимаб)) когда буду понимать писать легче и голова яснее))
//
// let transactions = [100, 300, 200, 400];
//
// transactions.push(500); // изи это помню хорошо)) поп удалит с конца шифт добавит в начало а аншифт удалит с начала))
//
// console.log(transactions); // написал кстати сам без подсказок))
//
// let history = [
// { type: 'deposit', amount: 100 },
// { type: 'withdraw', amount: 50}
// ];
//
// history.push({ type: 'deposit', amount: 400});
// history.shift({ type: 'deposit', amount: 400}); // по приколу и добавлял и выводил) ахахах) ссори))

// console.log(history.length); // тоже понимаю но наверное не ккоректное удаление типу а вообще я натупил))
//
// let transactions = [200, -120, -50, 450];
//
// transactions.forEach(transaction => {
//     console.log("Transaction:", transaction);
// }) // есть)) догадался чисто что просто нужно функции транзакция назвать да и все)) правильно??
// чем отличается цикл фор и фориач??) правильно сработал??

// фильтрация вообще легко))
// let trans = [100, -20, -75, 110, -11];
//
// let waste = trans.filter((t) => t <= 0);
//
// console.log(waste); // сделал так чтоб васт выводил то что меньше или равно нулю но странно)) к деньгам такое не идет поэтому
// // логичнее просто меньше < 0 вот и все))
//
// // еще примеры базовые
// let num = [1, 20, 3, 2, 111, 10, 5, 80, 12, 13, 20];
//
// let num2 = num.filter((n) => n % 2 === 0);
//
// console.log(num2);
//
// шаблонні строки
//
// let user = "Andry";
// let sum = 1000;
//
// let oldWay = "Hi, " + user + "! Balance: " + sum + " dollars";
// let newWay = `Hi, ${user}! Balance: ${sum} dollars`;
//
// console.log(oldWay);
// console.log(newWay); // запам'ятав)) так легше справді) читабельніше та писати швидше)
//
// map від легкого до тяжче))
//
// const names = ['dmytro', 'nazar', 'alex'];
//
// let bigNames = names.map(name => name.toUpperCase()); // прикол не знав про цей метод, типу шо капс робить але вш підказав та я прочитав
//
// console.log(bigNames);  // изи так то)) дальше)
//
//
// const prices = [100, 200, 300, 400];
//
// let htmlPrices = prices.map((p) => `<li>${p}</li>`);
//
// console.log(htmlPrices); // оно мне 4 раза по кругу отдалось да и все хз как решить.. туплю) ну и может кажется но задача дебильная но тем не менее))
//
//
// map users = [
//     { id: 1, name: 'Alina' },
//     { id: 2, name: 'Olha'}
// ];
//
// let userId = users.map((us) => us.id);
//
// console.log(userId); // есть ваще легко но натупил как всегда)) сначала натупил вводил юзерс айди, потом в консоль выводио так же
// // юзерс айди, потом еще и в терминале тупанул, но все фикшу, как могу))
//
// find & sort
//
// let users = [
//     { id: 1, name: "alex"},
//     { id: 2, name: "oleg"},
//     { id: 3, name: "stive"}
// ];
//
// let usersFind = users.find((u) => u.id === 2); // тоже ошибался и сам правил, сначала ошибка писал не юзерс финд а юзер, потом ошибка писал ю === 2 а не ю.айди а так то все) главное что правлю своей бошкой)
//
// console.log(usersFind);
//
// let amounts = [500, 1200, 100, 300];
//
// amounts.sort((a, b) => a - b); // easy если большее к меньшему б - а) легко))
//
// console.log(amounts);
//
//
// try | catch
//
// писать пример не буду толку нет понял, тру выполняем код, если ошибка все не падает а спокойно выводим ошибку через катч)
//


// rеduce

// const trans = [100, -50, -15, 50, 200];
//
// const totalWase = trans.reduce((acc, curr) => curr > 0 ? acc + curr : acc, 0);
//
// console.log(totalWase); // поясняю логику, транакции, они уже прошли они же не могут меняться, переменная всего было, транзакций и метод редус, пробегаается по массиву но копит все в асс то есть аккумулятор
// // аккум указали и курр текущая монета типу, функцию запустили, условие к ней монета меньше нуля, тогда мы плюсуем акк и курр то есть складываем
// // иначе поступаем так, просто возвращаем аккум начальное значение ноль в итоге вывелось -65)  хз так ли я все сделал и логику правь)) и поясни все)) и решим еще задачи с редусом

// const trans = [100, 20, -20, -80, 200];
//
// const total = trans.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(total); // легше легкого а как вернуть одной строкой это?? тип чтоб ретурн не прописывать и т.д? возможно?
//

// const trans = [100, 500, 200, 800, 300];
//
// const maxTrans = trans.reduce((acc, curr) => curr > acc ? curr : acc, 0);
// console.log(maxTrans);

// const transactions = [100, -50, 200, -10, -40];
//
// const report = transactions.reduce((acc, cur) => {
//     if (cur > 0) {
//           acc.plus += cur;
//     } else {
//         acc.minus += cur;
//     }
//     return acc;
// }, { plus: 0, minus: 0 });
//
// console.log(report);

// задачки
// const clients = [
//     { name: 'Alex', balance: 500 },
//     { name: 'Sergo', balance: 1000 },
//     { name: 'Mike', balance: 3000},
//     { name: 'Trent', balance: 300 }
// ];
//
// const Vipclient = clients
// .filter(user => user.balance >= 1000 )
// .map(n => n.name.toUpperCase());
//
// console.log(Vipclient); // легко)) справився)

// const client = [
//     { name: 'Sanya', balance: 300 },
//     { name: 'Sofia', balance: 500 },
//     { name: 'Olha', balance: 200 },
// ];
//
// const blackList = ['Sandro', 'Oleg', 'Sofia'];
//
// const foundUser = client.find((user) => user.name === 'Sanya');
//
// const isBanned = blackList.includes(foundUser.name);
//
// console.log(` User ${foundUser.name} is Banned? ${isBanned}`); // софья в бане, саня нет, просто покрутил
// // инслудес чисто проверяет статус как я понял типо или как??)

// const history = [300, -100, 400, -250];
//
// const formattedHistory = history.map((amount) => {
//     const sing = amount > 0 ? '+' : '';
//
//     return `[DATE]: ${sing}${amount} USD`;
// });
//
// console.log(formattedHistory); // поняв задачу, просто ось у нас с сервака типу прийшла відповідь типу ну история транзакций
// // тогда оформленнИстория типо преобразуем массив количество функция синг что обозначает типо синг количество больше 0 тогда плюс иначе пустота тип или я не так понял ваще плохо все равно понимаю
// // ну и делаем ретерн типу дата когда было подключалась бы, синг амоюнт д
// // оллар кажлый раз когда помещаем переменную, ну и юсд понятно и чек консоль) поясни мне все просто)) обнял!!)
//

// const family = [
//     { id: 1, name: 'Olha', salary: 2000},
//     { id: 2, name: 'Sanya', salary: 2200},
//     { id: 3, name: 'AlinaBoss777', salary: 9999999999},
// ];
//
// const salaryBig = family.filter((s) => s.salary > 2500);
//
// console.log(salaryBig); // по приколу

