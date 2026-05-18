const topTaskWorld = [
    { id: 1, text: 'Зрозуміти С', completed: true, priority: 'low' },
    { id: 2, text: 'Зрозуміти СSS', completed: false, priority: 'high' },
    { id: 3, text: 'Зрозуміти HTML', completed: false, priority: 'high' },
    { id: 4, text: 'Зрозуміти Pascale', completed: true, priority: 'low' }
]; // Создав змінну з камал кейс по стандарту, далі ну обьекти, ну і стьоб зробив типу ну бля, типу с і паскал
// типу легко вивчити а ось типу хтмл і цсс тип не реально ахахах) ну і все)) щас ебашить буду фільтр)

const titles = topTaskWorld.map(task => task.text);
console.log(titles);