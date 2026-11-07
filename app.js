"use strict";

/*
 * У SmileCare пацієнт обирає послугу — кнопки-бейджі лежать у контейнері .services.
 * Клік по кнопці робить її активною (клас "active"), і активною завжди лишається лише одна.
 * Обробити кліки треба делегуванням — одним обробником на контейнері.
 * 1. Знайди контейнер .services і повісь на нього обробник кліка.
 * 2. Клік може влучити між кнопками, у порожнє місце контейнера. Тому через event.target
 *    перевір: якщо в елемента, по якому клікнули, є клас "service" — це кнопка послуги.
 * 3. Якщо клікнули по кнопці:
 *    - знайди активну кнопку (з класом "active"), і якщо така є — зніми з неї цей клас;
 *    - додай "active" кнопці, по якій клікнули.
 */

// Твій код тут

// const servicesContainer = document.querySelector(".services");

// servicesContainer.addEventListener("click", (event) => {
//   if (event.target.classList.contains("service")) {
//     const serviceActive = document.querySelector(".active");
//     if (serviceActive) {
//       serviceActive.classList.remove("active");
//     }

//     event.target.classList.add("active");
//   }
// });

"use strict";

/*
 * У Sunny Coffee рахуємо чайові. Користувач вводить суму рахунку в поле .bill
 * і обирає відсоток чайових, клікнувши одну з кнопок у контейнері .tips.
 * Результат показуємо в елементі .result. Кліки по кнопках обробляємо делегуванням —
 * одним обробником на контейнері.
 * 1. Знайди поле .bill, контейнер .tips і елемент .result.
 * 2. Повісь на контейнер .tips обробник кліка.
 * 3. Клік може влучити між кнопками. Тому через event.target перевір: якщо в елемента,
 *    по якому клікнули, є клас "tip" — це кнопка відсотка.
 * 4. Якщо клікнули по кнопці:
 *    - дістань відсоток із тексту кнопки. Текст кнопки — рядок на кшталт "10%".
 *      Скористайся функцією Number.parseInt: вона зчитує число з початку рядка
 *      й ігнорує все, що йде далі, тож із "10%" отримаєш число 10.
 *    - дістань суму рахунку з поля .bill і перетвори на число;
 *    - порахуй суму до сплати: рахунок плюс чайові, і округли через Math.round;
 *    - виведи в .result у форматі "Total: СУМА credits".
 */

// const billInput = document.querySelector(".bill");
// const tipsContainer = document.querySelector(".tips");
// const result = document.querySelector(".result");

// tipsContainer.addEventListener("click", (event) => {
//   if (event.target.classList.contains("tip")) {
//     const parsent = Number.parseInt(event.target.textContent);
//     const bill = Number(billInput.value);
//     const total = Math.round(bill + (bill * parsent) / 100);
//     console.log(total);

//     result.textContent = `Total: ${total} credits`;
//   }
// });

"use strict";

/*
 * У SmileCare візит на послугу описано обʼєктом visit. Дістань із нього дані
 * через деструктуризацію й порахуй вартість.
 * 1. Здеструктуризуй з обʼєкта visit властивості service, price і sessions.
 * 2. Порахуй загальну вартість: ціна за сеанс, помножена на кількість сеансів.
 * 3. Виведи в консоль рядок у форматі "SERVICE: TOTAL credits for N sessions".
 */

// const visit = {
//   service: "Whitening",
//   price: 800,
//   sessions: 3,
// };

// const { service, price, sessions } = visit;

// const totalPrice = price * sessions;
// console.log(`${service}: ${totalPrice} credits for ${sessions} sessions`);

"use strict";

/*
 * У SmileCare для запису формують чек. Функцію getReceipt вже оголошено —
 * стрілкова, приймає один обʼєкт запису. Тобі лишилось деструктуризувати
 * параметр у сигнатурі й дописати тіло.
 * 1. У сигнатурі getReceipt деструктуризуй параметр: дістань service, price,
 *    sessions і paid. Для sessions задай значення за замовчуванням 1 —
 *    не в кожному записі воно вказане.
 * 2. Порахуй total як price, помножену на sessions.
 * 3. Визнач status: 'paid', якщо paid дорівнює true, інакше 'due'.
 * 4. Поверни рядок у форматі "SERVICE: TOTAL credits (STATUS)".
 * Виклики getReceipt для обох записів уже написані нижче — результат зʼявиться в консолі.
 */

// const firstVisit = { service: "Cleaning", price: 500, paid: true };
// const secondVisit = {
//   service: "Whitening",
//   price: 800,
//   sessions: 3,
//   paid: false,
// };

// const getReceipt = ({ service, price, sessions = 1, paid }) => {
//   const totalPrice = price * sessions;
//   const status = paid ? "paid" : "due";
//   return `${service}: ${totalPrice} credits (${status})`;
// };

// console.log(getReceipt(firstVisit));
// console.log(getReceipt(secondVisit));

"use strict";

/*
 * У SmileCare є список записів appointments. Треба зібрати ті, що ще не оплачені.
 * 1. Методом filter відбери записи, у яких paid дорівнює false. У колбеку filter
 *    деструктуризуй параметр і бери властивість paid.
 * 2. Методом map перетвори відібрані записи на рядки. У колбеку map деструктуризуй
 *    параметр і бери service та price. Формат рядка: "SERVICE: PRICE credits".
 * 3. Результат (масив рядків) виведи в консоль.
 */

// const appointments = [
//   { service: "Cleaning", price: 500, paid: true },
//   { service: "Whitening", price: 800, paid: false },
//   { service: "Braces check", price: 300, paid: false },
// ];

// const messages = appointments
//   .filter(({ paid }) => !paid)
//   .map(({ service, price }) => `${service}: ${price} credits`);
// console.log(messages);

"use strict";

/*
 * Поле для нікнейму має памʼятати введене значення після перезавантаження сторінки.
 * 1. Знайди інпут .nickname-input.
 * 2. Під час завантаження сторінки постав у поле збережене значення з localStorage
 *    за ключем "nickname"; якщо його немає — залиши поле порожнім.
 * 3. На подію "input" зберігай поточне значення поля в localStorage під тим самим ключем.
 */

// const input = document.querySelector(".nickname-input");

// const savedValue = localStorage.getItem("nickname");
// if (savedValue) {
//   input.value = savedValue;
// }

// input.addEventListener("input", (event) => {
//   localStorage.setItem("nickname", event.target.value);
// });

/*
 * Форма коментаря до кави має памʼятати введене після перезавантаження сторінки.
 * 1. Знайди форму .coffee-form і поля .coffee-author та .coffee-comment.
 * 2. На подію "input" збери значення обох полів в обʼєкт { author, comment } і збережи
 *    його в localStorage за ключем "coffee-form". Обʼєкт напряму не зберегти, тож спершу
 *    перетвори його на JSON через JSON.stringify.
 * 3. Під час завантаження сторінки візьми збережене з localStorage за тим самим ключем
 *    і перетвори назад на обʼєкт через JSON.parse, а тоді постав значення в поля.
 *    Якщо збереженого ще немає — залиш поля порожніми.
 * 4. На submit: скасуй перезавантаження, виведи в консоль подяку з іменем,
 *    видали збережений обʼєкт (removeItem) і очисти форму (form.reset()).
 */

// const form = document.querySelector(".coffee-form");
// const authorInput = document.querySelector(".coffee-author");
// const commentInput = document.querySelector(".coffee-comment");

// const savedState = localStorage.getItem("coffee-form");
// if (savedState) {
//   const state = JSON.parse(savedState);
//   authorInput.value = state.author;
//   commentInput.value = state.comment;
// }

// form.addEventListener("input", (event) => {
//   console.log(authorInput.value, commentInput.value);
//   const formState = {
//     author: authorInput.value,
//     comment: commentInput.value,
//   };

//   localStorage.setItem("coffee-form", JSON.stringify(formState));
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(`Thanks for your comment ${authorInput.value}`);
//   localStorage.removeItem("coffee-form");
//   form.reset();
// });

/*
 * Клініка SmileCare починає дві процедури одночасно. Кожна триває свій час.
 * 1. Одразу виведи в консоль, що обидві процедури почато: "Огляд почато" і "Чистка почато".
 * 2. Через setTimeout заплануй повідомлення про завершення: "Огляд завершено" через 1000 мс
 *    і "Чистка завершено" через 3000 мс.
 * 3. Запусти й подивись у консоль, у якому порядку зʼявляються повідомлення.
 */

// console.log("Огляд почато");
// console.log("Чистка почато");

// setTimeout(() => {
//   console.log("Огляд завершено");
// }, 1000);

// setTimeout(() => {
//   console.log("Чистка завершено");
// }, 3000);

/*
 * Кавомашина Sunny Coffee готує капучино 5 секунд. Поки напій не готовий, приготування можна скасувати.
 * 1. Знайди кнопки .brew-btn і .cancel-btn та абзац .status, збережи кожен у свою змінну.
 * 2. Оголоси змінну timerId без значення. У ній зберігатимеш id таймера.
 * 3. Додай кнопці .brew-btn обробник кліку. У ньому:
 *    - заблокуй .brew-btn і розблокуй .cancel-btn через властивість disabled;
 *    - напиши в статус "Готую капучино…";
 *    - запусти setTimeout із затримкою BREW_TIME і збережи його id в timerId.
 * 4. У callback таймера:
 *    - напиши в статус "Капучино готове ☕";
 *    - розблокуй .brew-btn і заблокуй .cancel-btn.
 * 5. Додай кнопці .cancel-btn обробник кліку. У ньому:
 *    - скасуй таймер через clearTimeout(timerId);
 *    - напиши в статус "Приготування скасовано";
 *    - розблокуй .brew-btn і заблокуй .cancel-btn.
 */

// const BREW_TIME = 5000;

// const brewButton = document.querySelector(".brew-btn");
// const cancelButton = document.querySelector(".cancel-btn");
// const statusTaxt = document.querySelector(".status");

// let timerId;

// brewButton.addEventListener("click", (event) => {
//   brewButton.disabled = true;
//   cancelButton.disabled = false;
//   statusTaxt.textContent = "Готую капучино…";
//   timerId = setTimeout(() => {
//     statusTaxt.textContent = "Капучино готове ☕";
//     brewButton.disabled = false;
//     cancelButton.disabled = true;
//     console.log("capuchino");
//   }, BREW_TIME);
// });

// cancelButton.addEventListener("click", (event) => {
//   clearTimeout(timerId);
//   statusTaxt.textContent = "Приготування скасовано";
//   brewButton.disabled = false;
//   cancelButton.disabled = true;
//   console.log("stop");
// });

/*
 * Гість за столиком кавʼярні Sunny Coffee кличе офіціанта кнопкою. Пейджер пікає кожні 2 секунди,
 * доки офіціант не відповість.
 * 1. Знайди кнопки .call-btn і .accept-btn та абзац .status, збережи кожен у свою змінну.
 * 2. Оголоси змінну intervalId без значення — у ній зберігатимеш id інтервалу.
 *    Оголоси змінну signalCount зі значенням 0 — вона рахуватиме сигнали пейджера.
 * 3. Додай кнопці .call-btn обробник кліку. У ньому:
 *    - заблокуй .call-btn і розблокуй .accept-btn через властивість disabled;
 *    - присвой signalCount значення 0, щоб новий виклик рахував сигнали заново;
 *    - запусти setInterval із затримкою SIGNAL_DELAY і збережи його id в intervalId.
 * 4. У callback інтервалу:
 *    - збільш signalCount на 1;
 *    - напиши в статус "🔔 Столик 5 кличе офіціанта (сигнал 3)", де замість 3 — signalCount.
 * 5. Додай кнопці .accept-btn обробник кліку. У ньому:
 *    - зупини інтервал через clearInterval(intervalId);
 *    - напиши в статус "Офіціант іде до столика 5";
 *    - розблокуй .call-btn і заблокуй .accept-btn.
 */

// const SIGNAL_DELAY = 2000;

// const callBtn = document.querySelector(".call-btn");
// const acceptBtn = document.querySelector(".accept-btn");
// const statusText = document.querySelector(".status");

// let intervalId;
// let signalCount = 0;

// callBtn.addEventListener("click", () => {
//   callBtn.disabled = true;
//   acceptBtn.disabled = false;
//   signalCount = 0;
//   intervalId = setInterval(() => {
//     signalCount += 1;
//     statusText.textContent = `🔔 Столик 5 кличе офіціанта (сигнал ${signalCount})`;
//   }, SIGNAL_DELAY);
// });

// acceptBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   statusText.textContent = "Офіціант іде до столика 5";
//   callBtn.disabled = false;
//   acceptBtn.disabled = true;
// });

/*
 * Клініка SmileCare рахує, скільки тривав прийом: від кліку «Почати прийом» до кліку
 * «Завершити прийом».
 * 1. Знайди кнопки .start-btn і .finish-btn та абзац .status, збережи кожен у свою змінну.
 * 2. Оголоси змінну startTime без значення — у ній зберігатимеш момент початку прийому.
 * 3. Додай кнопці .start-btn обробник кліку. У ньому:
 *    - запиши в startTime поточний час через Date.now();
 *    - заблокуй .start-btn і розблокуй .finish-btn через властивість disabled;
 *    - напиши в статус "Прийом триває…".
 * 4. Додай кнопці .finish-btn обробник кліку. У ньому:
 *    - запиши в змінну endTime поточний час через Date.now();
 *    - запиши в змінну duration різницю endTime і startTime — це тривалість у мілісекундах;
 *    - напиши в статус "Прийом тривав 4250 мс (4.25 с)", де замість 4250 — duration,
 *      а замість 4.25 — duration, поділене на 1000;
 *    - розблокуй .start-btn і заблокуй .finish-btn.
 */

// const startBtn = document.querySelector(".start-btn");
// const finishBtn = document.querySelector(".finish-btn");
// const statusText = document.querySelector(".status");

// let startTime;

// startBtn.addEventListener("click", () => {
//   startTime = Date.now();
//   startBtn.disabled = true;
//   finishBtn.disabled = false;
//   statusText.textContent = "Прийом триває…";
// });

// finishBtn.addEventListener("click", () => {
//   const endTime = Date.now();
//   const duration = endTime - startTime;
//   statusText.textContent = `Прийом тривав ${duration} мс (${duration / 1000} с)`;
//   startBtn.disabled = false;
//   finishBtn.disabled = true;
// });

/*
 * Кавʼярня Sunny Coffee приймає онлайн-замовлення щодня з 8:00 до 20:00, крім неділі.
 * 1. Оголоси стрілочну функцію checkOrderTime, яка приймає дату date.
 * 2. У checkOrderTime запиши в змінну weekDay день тижня через getDay(),
 *    а в змінну hours — годину через getHours().
 * 3. Якщо weekDay дорівнює 0 (неділя), поверни рядок "Неділя — кавʼярня зачинена".
 * 4. Якщо hours менше 8 або більше чи дорівнює 20, поверни рядок "Поза робочими годинами".
 * 5. В усіх інших випадках поверни рядок "Замовлення прийнято".
 */

// const checkOrderTime = (date) => {
//   const weekDay = date.getDay();
//   if (weekDay === 0) {
//     return "Неділя — кавʼярня зачинена";
//   }
//   const hours = date.getHours();
//   if (hours < 8 || hours >= 20) {
//     return "Поза робочими годинами";
//   }
//   return "Замовлення прийнято";
// };

// console.log(checkOrderTime(new Date("2030-03-16T10:00:00"))); // Замовлення прийнято
// console.log(checkOrderTime(new Date("2030-03-17T10:00:00"))); // Неділя — кавʼярня зачинена
// console.log(checkOrderTime(new Date("2030-03-18T21:30:00"))); // Поза робочими годинами

/*
 * Клініка SmileCare записує, коли пацієнт зареєструвався на рецепції, і показує це повідомленням.
 * 1. Оголоси стрілочну функцію formatCheckIn, яка приймає дату date.
 * 2. У formatCheckIn запиши в змінну dateText дату через toLocaleDateString('uk-UA').
 * 3. Запиши в змінну timeText час через toLocaleTimeString('uk-UA').
 * 4. Поверни рядок "Пацієнт зареєструвався 16.03.2030 о 09:05:07", де замість дати й часу —
 *    dateText і timeText.
 */

// const formatCheckIn = (date) => {
//   const dateText = date.toLocaleDateString("uk-UA");
//   const timeText = date.toLocaleTimeString("uk-UA");
//   return `Пацієнт зареєструвався ${dateText} о ${timeText}`;
// };

// console.log(formatCheckIn(new Date("2030-03-16T09:05:07")));
// // Пацієнт зареєструвався 16.03.2030 о 09:05:07

// console.log(formatCheckIn(new Date("2030-04-02T14:30:00")));
// // Пацієнт зареєструвався 02.04.2030 о 14:30:00

/*
 * tableBooking — готовий проміс: Sunny Coffee бронює столик для гостя.
 * Через 2 секунди він або виконається (столик заброньовано), або відхилиться (вільних столиків немає).
 * 1. Додай до tableBooking метод then() і виведи в консоль значення, передане в resolve.
 * 2. Додай catch() і виведи в консоль значення, передане в reject.
 * 3. Додай finally() і виведи в консоль "Request processed".
 * 4. Запусти код з isAvailable = true, потім зміни на false і запусти ще раз.
 */

// const isAvailable = false;

// const tableBooking = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isAvailable) {
//       resolve("Table booked for 19:00");
//     } else {
//       reject("No free tables");
//     }
//   }, 2000);
// });

// tableBooking.then((value) => {
//   console.log(value);
// });

// tableBooking.catch((error) => {
//   console.log(error);
// });

// tableBooking.finally(() => {
//   console.log("Request processed");
// });

/*
 * Лабораторія SmileCare обробляє аналізи: результат приходить не одразу, а через якийсь час.
 * 1. Оголоси стрілочну функцію getLabResult, яка приймає один параметр — обʼєкт із властивостями
 *    result, delay та isReady. Діставай їх деструктуризацією, а для isReady задай значення
 *    за замовчуванням true.
 * 2. Усередині поверни новий Promise. У setTimeout через delay мілісекунд виклич resolve(result),
 *    якщо isReady дорівнює true, інакше — reject(result).
 * 3. До кожного виклику getLabResult нижче додай then() і catch(), які виводять значення в консоль.
 */

// const getLabResult = ({ result, delay, isReady = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isReady) {
//         resolve(result);
//       } else {
//         reject(result);
//       }
//     }, delay);
//   });
// };

// getLabResult({ result: "Blood test ready", delay: 1000 })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
// // через 1 с: Blood test ready

// getLabResult({ result: "Sample rejected", delay: 2000, isReady: false })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
// // через 2 с: Sample rejected
