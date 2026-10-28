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

const firstVisit = { service: "Cleaning", price: 500, paid: true };
const secondVisit = {
  service: "Whitening",
  price: 800,
  sessions: 3,
  paid: false,
};

const getReceipt = ({ service, price, sessions = 1, paid }) => {
  const totalPrice = price * sessions;
  const status = paid ? "paid" : "due";
  return `${service}: ${totalPrice} credits (${status})`;
};

console.log(getReceipt(firstVisit));
console.log(getReceipt(secondVisit));
