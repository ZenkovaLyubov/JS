"use strict";
/*Задача 1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
*/
//Тренировалась прочувствовать работу с объектами, поэтому получилось чуть объемнее.
console.log(`Задача 1:`);
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};
//1 способ. самый лучший
console.log(`1 способ:`);
console.log(Object.values(numbers).filter(a => a >= 3));
//2 способ.
console.log(`2 способ:`);
for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}
//3 и 4 способ. они похожи. подходят только если точно известно, 
//значения каких по счету свойств нужны
console.log(`3 способ:`);
console.log(Object.values(numbers).splice(-5));
console.log(`4 способ:`);
console.log(Object.values(numbers).slice(2, 7));
//5 способ. тоже подходит только если точно известно, 
//значения каких по счету свойств нужны
console.log(`5 способ:`);
for (let i = 2; i < Object.keys(numbers).length; i++) {
    console.log(Object.values(numbers)[i]);
}
//5 способ. вывела и ключи, и значения. просто значения в цикле выше уже есть
console.log(`6 способ:`);
for (let i = 0; i < Object.keys(numbers).length; i++) {
    if (Object.values(numbers)[i] >= 3) {
        console.log(Object.entries(numbers)[i]);
    }
}

/*Задача 2
Необходимо из объекта, который лежит в константе post вывести значения, к
которым приписан комментарий, в консоль.*/
console.log(`Задача 2:`);
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(`1 способ:`);
console.log(post.author, ',', post.comments[0].rating.dislikes, ',', post.comments[1].userId, ',', post.comments[1].text);
//вывод значений вместе с ключами
console.log(`2 способ:`);
console.log(Object.entries(post)[0]);
console.log(Object.entries(post.comments[0].rating)[1]);
console.log(Object.entries(post.comments[1])[0]);
console.log(Object.entries(post.comments[1])[2]);

/*Задача 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.*/
console.log(`Задача 3:`);
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(products => {
    products.price -= products.price * 0.15;
});
console.log(products);

/*Задача 4
1.Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.
Исходные данные - массив products.
2.Необходимо отсортировать массив products используя метод sort по цене, 
начиная с самой маленькой, заканчивая самой большой ценой,
после чего вывести отсортированный массив в консоль.*/
console.log(`Задача 4:`);
const productsTask4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];
console.log(`Продукты с фотографиями:`);
productsTask4.filter(function filterProducts(item) {
    if (item.photos && item.photos.length !== 0) {
        console.log(item);
    }
});
productsTask4.sort(function sortProducts(a, b) {
    return a.price - b.price;
});
console.log(`Массив продуктов, отсортированный по возрастанию цены:`);
console.log(productsTask4);

/*Задача 5
Дано 2 массива.
Вам необходимо объединить 2 этих массива, 
чтобы значения первого массива были ключами, 
а значения второго массива — значениями.
*/
console.log(`Задача 5:`);
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let enru = [];
for (const key in en) {
    enru[en[key]] = ru[key];
}
console.log(enru);

/*Задача 6
Рассчитайте сумму всех значений данного объекта.
*/
console.log(`Задача 6:`);
const numbersTask6 = {
    key1: {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
    },
    key2: {
        keyin1: 4,
        keyin2: 5,
        keyin3: 6,
    },
}
//первый вариант
let sum = 0;
for (const key in numbersTask6) {
    for (const key1 in numbersTask6[key]) {
        sum += numbersTask6[key][key1];
    }
}
console.log(`1 способ: ${sum}`);
//второй вариант
let rez = 0;
for (const key in numbersTask6) {
    rez += (Object.values(numbersTask6[key]).reduce((a, b) => a + b));
}
console.log(`2 способ: ${rez}`);

