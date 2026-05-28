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

// const prices = [100, 500, 200, 800];
// const totalPrice = prices.reduce((acc, curr) => {
//  return acc + curr;
// }, 0);
// console.log(totalPrice);

// const nums = [11, 5, 55, 42, 3];
// const max = nums.reduce((acc, curr) => {
//  if (curr > acc) {
//   return curr;
//  } else {
//   return acc;
//  }
// }, [0]);
// console.log(max);

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
// // инслудес чисто проверяет статус

// const history = [300, -100, 400, -250];
//
// const formattedHistory = history.map((amount) => {
//     const sing = amount > 0 ? '+' : '';
//
//     return `[DATE]: ${sing}${amount} USD`;
// });
//
// console.log(formattedHistory);

// const family = [
//     { id: 1, name: 'Olha', salary: 2000},
//     { id: 2, name: 'Sanya', salary: 2200},
//     { id: 3, name: 'AlinaBoss777', salary: 9999999999},
// ];
//
// const salaryBig = family.filter((s) => s.salary > 2500);

// console.log(salaryBig);


// Closures / Замыкания

 // function createBankCard(owner) {
 //     let balance = 0;
 //
 //     return function(amount) {
 //         balance += amount;
 //         return `${owner}, твой баланс: ${balance}$`;
 //     }
 // }
 //
 // const sanyaCard = createBankCard('Sanya');
 //
 // console.log(sanyaCard(500));
 // console.log(sanyaCard(200));

// function createPlayer(name) {
//     let score = 0;
//
//
//     return function () {
//     score ++;
//     return `name: ${name} has ${score} score`;
//     }
// }
//
// const sanyaStatus = createPlayer('Sanya');
//
// console.log(sanyaStatus());
//  console.log(sanyaStatus());
//
// const apple = {
//     price: 1000,
//     showPrice: function() {
//         console.log(`apple price: ${this.price}`);
//     }
// };
//
// const samsung = {
//     price: 800
// };
//
// apple.showPrice();
//
// const checkSamsung = apple.showPrice.bind(samsung);
//
// checkSamsung();


// function getUser() {
//  const name = 'Ivan'
//   return function() {
//   return name;
//   };
//  }
//
//  const user = getUser();
// console.log(user());


//   function createIdGenerator() {
//    let usId = 0;
//    return function() {
//     usId++;
//     return usId;
//    };
//   }
//
//   const nextId = createIdGenerator();
//
// console.log(nextId());
//  console.log(nextId());

// function initPlayer() {
//  const userPlayer = 'Sanya'
//  return function() {
//   return userPlayer;
//   };
//  }
//
//  const playerName = initPlayer();
// console.log(playerName());

// function createBox() {
//  let money = 0;
//
//  return {
//   add: function(amount) {
//    money += amount;
//   },
//   get: function() {
//    let current = money;
//    money = 0;
//    return current;
//   }
//  };
// }
//
// const box = createBox();
// box.add(500);
// box.add(-100);
//
// console.log(box.get());
// console.log(box.get());

 // function createCensor(badWord) {
 // return function(text) {
 //  return text.replace(badWord, '***');
 //  };
 // }
 //
 // const censor = createCensor('super');
 // console.log(censor('super bro!'));

//  const user = {
//   name: 'Sashko',
//   sayHi: function() {
//    setTimeout( function()  {
//     console.log(this.name);
//    }, 1000);
//
//    setTimeout(() => {
//     console.log(this.name);
//    }, 2000);
//   }
//  };
//
// user.sayHi();

//  const counter = {
//   count: 0,
//   increment: function() {
//    setInterval(() => {
//     this.count++;
//     console.log(this.count);
//    }, 1000);
//   }
//  };
// counter.increment();

// const user = { name: 'Alex', age: 31, salary: 1500};
//
// const { name, age, salary } = user;
//
// console.log(name);

 // АССИНХРОНКА

 // function checkBankSystem() {
 //  return new Promise((resolve, reject) => {
 //   console.log("--- Починаємо перевірку... ---");
 //
 //   setTimeout(() => {
 //    const isOnline = true;
 //
 //    if (isOnline) {
 //     resolve(" ГОТОВ!");
 //    } else {
 //     reject(" ПОМИЛКА");
 //    }
 //   }, 2000);
 //    });
 // }
 //
 // checkBankSystem()
 //     .then((message) => {
 //      //
 //      console.log("Повідомлення банка:", message);
 //     })
 //     .catch((error) => {
 //      //
 //      console.error("Упс:", error);
 //     });
 //
 // console.log("Синхронний код: Я виведусь першим, поки банк перевіряється!");

// function login(pass) {
//  return new Promise((resolve, reject) => {
//   if (pass === '1234') {
//    resolve('Access is open')
//   } else {
//    reject('Access is closed')
//   }
//  });
// }
//
// login('1224') // спецом сделал ошибку
//  .then((data) => {
//   console.log(data);
//  })
//  .catch((err) => {
//   console.log(err);
//  });

 // function getBalance(userID) {
 //  return new Promise((resolve, reject) => {
 //
 //   setTimeout(() => {
 //
 //    if (userID === 7) {
 //     resolve(1000);
 //    } else {
 //     reject('User not found!');
 //    }
 //
 //   }, 1000);
 //
 //  });
 // }
 //
 // getBalance(7)
 // .then((money) => console.log('User balance: ' + money))
 // .catch((err) => console.log('Sorry: ' + err));


// TASK PROMISE

 // function applyCoupone(code) {
 //  return new Promise((resolve, reject) => {
 //   if (code === 'SALE') {
 //    resolve(20);
 //   } else {
 //    reject('Invalid code!');
 //   }
 //  });
 // }
 //
 // applyCoupone('SALE')
 //     .then((discount) => {
 //      console.log('Discount: ' + discount + '%');
 //     })
 //     .catch((err) => {
 //      console.log('Error: ' + err);
 //     });

// function orderFood(item) {
//  return new Promise((resolve, reject) => {
//
//   setTimeout(() => {
//
//    if (item === 'burger') {
//     resolve({ status: 'deliverid', time: 20 + ' min'});
//    } else {
//     reject('Sorry, we only have pizza')
//    }
//   }, 1500);
//  });
// }
//
// orderFood('burger')
//  .then((itm) => console.log('FOOD ', itm)) // я просто хз как вернуть обьект))
//  .catch((err) => console.log('' + err));

//  function getBalance(userId) {
//  return new Promise((resolve, reject) => {
//
//   setTimeout(() => {
//    if (userId === 2) {
//     resolve(1000)
//    }  else {
//     reject('User is not found!')
//    }
//   }, 1200);
//  });
//  }
//
//  getBalance(2)
//
//      .then((money) => {
//   console.log('reciveide a base: ' + money)
//   return money + 500;
//  })
//
// .then((total) => {
//  console.log('bonus: ' + total);
// })
//  .catch((err) => console.log('Error: ' + err));

 // function getPizza() {
 // return new Promise((resolve, reject) => {
 //  setTimeout(() => resolve('Peperoni'), 2000);
 // });
 // }
 //
 // async function startDinner() {
 // console.log('Ordening...')
 //
 //  const pizza = await getPizza();
 //
 // console.log('arrived ' + pizza);
 // }

 // startDinner();

// function getBalance() {
//  return new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1000), 1000);
//  });
// }
//
// async function checkBalance() {
//  try {
//   const money = await getBalance();
//
//   console.log(`Balance: ${money}`)
//
//  } catch (error) {
//   console.log(error);
//  }
// }
// checkBalance();

 async function getProfileData() {
 try {
  console.log('run queries');

  const [name, mentors, balance] = await Promise.all([
      getName(),
      getMentors(),
      getBalance(),
  ]);

  console.log(`data is ready: ${name}, mentors: ${mentors}, balance: ${balance}`);
 } catch (error) {
  console.log(error);
 }
 }

 getProfileData();