//Завдання 1
console.clear();
// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

async function getData() {
  try {
    console.log(await fetchFakeData());
  } catch (error) {
    console.log(error);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
getData();

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

async function logRandomNumberAfterSeconds(seconds) {
  try {
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    console.log(randomNumber);
  } catch (error) {
    console.log(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();

//Завдання 3

async function getDataFromUrl(url) {
  try {
    const res = await fetch(url);
    if (res.ok) console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4

async function postDataWithAuth(url, data, authToken) {
  try {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: authToken,
    });
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: data,
    });
    console.log(res.status);
    if (res.ok) console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 4 ==============================");
postDataWithAuth(
  "https://petstore.swagger.io/v2/store/order",
  {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-07-23T19:28:06.229Z",
    status: "placed",
    complete: true,
  },
  "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

//Завдання 5

async function* asyncGenerator() {
  let i = 0;

  while (true) {
    await new Promise((res) => setTimeout(res, 1000));
    i++;
    yield i;
  }
}

const gen = asyncGenerator();
// Використовуємо асинхронний генератор та записуємо його значення в константу gen

async function printFiveItems() {
  for await (value of gen) {
    console.log(value);
    if (value === 4) break;
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

async function* gatherData() {
  try {
    const dbData = await getDataFromDB();
    yield dbData;
    const apiData = await getDataFromAPI();
    yield apiData;
    const cacheData = await getDataFromCache();
    yield cacheData;
  } catch (error) {
    console.log(error);
  }
}

async function displayData() {
  const gen = gatherData();
  console.log((await gen.next()).value);
  console.log((await gen.next()).value);
  console.log((await gen.next()).value);
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 6 ==============================");

displayData();

//Завдання 7

function* countdownGenerator(start) {
  let count = start;

  while (count >= 0) {
    yield count;
    count--;
  }
}
// console.log("Завдання: 7 ==============================");

// Створюємо екземпляр генератора countdown з лічильниковм 5
countdown = countdownGenerator(5);
let nextValue = countdown.next();
console.log(nextValue);
while (!nextValue.done) {
  console.log(nextValue.value);
  nextValue = countdown.next();
}
// Цикл while, що виводить значення з генератора, та працює поки не є генератор вичерпаним.
// Якщо властивість done == false, генератор ще має значення для повернення.

// Виводимо поточне значення
// Отримуємо наступне значення з генератора
