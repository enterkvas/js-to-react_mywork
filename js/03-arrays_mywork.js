// 3. ARRAYS

// 3.1 (1:19:30)   (Обработка массива с помощью метода map())

// const features = ['Take me', 'Thank you', 'As soon'];

// function Features(){
//     return `
//         <h1>App Features</h1>
//         <ul>
//             ${features.map((item) => {
//                 return `
//                     <li>${item}</li>
//                 `;
//             }).join('')}
//         </ul>
//     `;
// }

// const appDiv = document.getElementById('app');

// app.innerHTML = Features();

// 3.1.1 (1:19:30)   (Обработка массива с помощью метода map() варик написания синтаксиса по-другому)

// const features = ['Let me', 'Give me', 'Take me'];

// function Features(){
//     return `
//         <h1>App Features</h1>
//         <ul>
//             ${
//                 features.map((item) => {
//                     return `
//                         <li>${item}</li>
//                     `;
//                 }).join('')
//             }
//         </ul>
//     `;
// }

// const app = document.getElementById('app');

// app.innerHTML = Features();

//================================

// 3.2 (1:30:20) (Обработка массива с помощью метода map() - более сложный варик: вывод данных из массива объектов)

// const members = [
//     {
//         name: 'Robert',
//         role: 'designer'
//     },
//     {
//         name: 'Pola',
//         role: 'veb-developer'
//     },
//     {
//         name: 'John',
//         role: 'programmer'
//     }
// ];

// function About(){
//     return `
//         <header>
//             <h1>Who we are</h1>
//             <h2>Meet the team, that makes this all possible</h2>
//         </header>

//         <div class="members">
//             ${members.map((member) => {
//                 return Member(member);
//             }).join('')}
//         </div>
//     `;
// }
// 1-й варик записи ф-ции Member с props:
// function Member(props){
//     return `
//         <div class="member">
//             <h3>${props.name}</h3>
//             <p>${props.role}</p>
//         </div>
//     `;
// }
// 2-й варик записи ф-ции Member (ДЕСТРУКТУРИЗАЦИЯ):

// function Member({name, role}){
//     return `
//         <div class="member">
//             <h3>${name}</h3>
//             <p>${role}</p>
//         </div>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = About();

//--------------------------------------------

// Пример применения метода filter():

// const numbers = [1,3,5,9,12,15];

// const filtered = numbers.filter((num)=> {
// Полная форма записи Условия:
// if(number >= 5) {
//     return true
// } else {
//     return false
// }
// Короткая форма записи Условия, записанного выше:
// return num >= 5
// });

// console.log('filtered', filtered);

//================================

// 3.3 (1:38:15)  (Создание блока Footer с 2-мя секциями и вывод в эти секции ссылок из общего массива ссылок при помощи методов filter(), includes() и map()):

// const links = [
//     {
//         text: 'About',
//         href: '/company/about'
//     },
//     {
//         text: 'Pricing',
//         href: '/support/pricing'
//     },
//     {
//         text: 'Jobs',
//         href: '/company/jobs'
//     },
//     {
//         text: 'Press',
//         href: '/company/press'
//     },
//     {
//         text: 'Documentation',
//         href: '/support/documentation'
//     }

// ]

// function Link(link){
//     return `
//     <div>
//         <a href="${link.href}">
//             ${link.text}
//         </a>
//     </div>
//     `;
// }

// function Footer(){
//     return `
//     <footer>
//         <section>
//             <h4>Support</h4>
//             <div>
//                 ${links.filter((link) => {
//                     return link.href.includes('support');
//                 }).map(Link).join('')}
//             </div>
//         </section>
//         <section>
//             <h4>Company</h4>
//             <div>
//                 ${links.filter((link) => {
//                     return link.href.includes('company');
//                 }).map(Link).join('')}
//             </div>
//         </section>
//     </footer>
//     `;
// };

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Footer();

//================================

// 3.4 (1:54:10)  (Создание TodoList из массива объектов при помощи метода map() и тернарного оператора)

// const todos = [
//     {
//         done: false,
//         text: 'Wash dishes'
//     },
//     {
//         done: true,
//         text: 'Pick up laundry'
//     },
//     {
//         done: true,
//         text: 'Feed dog'
//     }
// ];

// function TodoItem(props){
//     return `<li>
//             ${props.done ? '✅' : '❌'}
//             ${props.text}
//             </li>`;
// }

// function TodoList(){
//     return `
//     <main>
//         <h1>What I did today?</h1>
//         <ul>
//             ${todos.map(TodoItem).join('')}
//         </ul>
//     </main>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = TodoList();

//================================

// 3.5 (1:59:00)  (Создание списка Рецептов из массива объектов с рецептами, используя методы filter() и map())

// const recipes = [
//   {
//     isVegetarian: true,
//     name: "Greek Salad",
//     ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
//   },
//   {
//     isVegetarian: false,
//     name: "Hawaiian Pizza",
//     ingredients: [
//       "pizza crust",
//       "pizza sauce",
//       "mozzarella",
//       "ham",
//       "pineapple",
//     ],
//   },
//   {
//     isVegetarian: true,
//     name: "Hummus",
//     ingredients: ["Chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
//   }
// ];

// ============================================

// Мои варики по Рецептам:

// Мой 2-й варик:
// function Recipe(props){
//     return `
//         <h5>${props.name}</h5>
//         <div>${props.ingredients}</div><br>
//     `;
// }

// Предпочтительный мой 3-й варик (самый удачный):
// function Recipe(props) {
//     return `
//     <h2>${props.name}</h2>
//     <ul>
//         ${props.ingredients.map((item) => {
//             return `<li>${item}</li>`
//         }).join('')}
//     </ul>
//     `;
// }

// function Recipes() {
  // Мой 1-й варик:
  // return `
  // <h4>Vegetarian</h4>
  // <div>
  //     ${recipes.map((recipe) => {
  //         return (recipe.isVegetarian ?
  //             `<div>
  //                 <h5>${recipe.name}</h5>
  //                 ${recipe.ingredients}
  //             </div>` : '')
  //     })}
  // </div>
  // `;

  // Мой 2-й варик (здесь получился "избыточный код" (в тернарнике достаточно 1-й части (до ? не включительно)неидиоматично)):
  // return `
  //     <h2>Vegetarian</h2>
  //     <div>
  //         ${recipes.filter((recipe) => {
  //             return recipe.isVegetarian ? `<div>${Recipe}</div>` : ''
  //         }).map(Recipe).join('')}
  //     </div>
  // `;

  // Предпочтительный мой 3-й варик - самый удачный(сократил код, убрал избыточный код)
    // return `
    // <div>
    //     <h1>Vegetarian Recipes</h1>
    //     <div>
    //         ${recipes.filter((item) => {
    //             return item.isVegetarian
    //         }).map(Recipe).join('')}
    //     </div>
    // </div>
    // `;
// }

// const appDiv = document.getElementById("app");

// appDiv.innerHTML = Recipes();

// ----------------------------------------------------

// Оригинал по Рецептам:

// const recipes = [
//     {
//         isVegetarian: true,
//         name: "Greek Salad",
//         ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
//     },
//     {
//         isVegetarian: false,
//         name: "Hawaiian Pizza",
//         ingredients: [
//         "pizza crust",
//         "pizza sauce",
//         "mozzarella",
//         "ham",
//         "pineapple",
//         ],
//     },
//     {
//         isVegetarian: true,
//         name: "Hummus",
//         ingredients: ["Chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
//     }
// ];

// const vegRecipes = recipes.filter((recipe) => {
//     return recipe.isVegetarian })
    // console.log('vegRecipes', vegRecipes)

// function Recipe(props){
// Мой варик - полностью совпал с Оригиналом:
//     return `
//     <h3>${props.name}</h3>
//     <ul>
//         ${props.ingredients.map((i) => {
//             return `<li>${i}</li>`
//         }).join('')}
//     </ul>
//     `;
// }

// function Recipes(){
// Мой варик - тоже полностью совпал с Оригиналом:
//     return `
//     <div>
//         <h1>Vegeterians Recipes</h1>
//         <div>
//             ${vegRecipes.map(Recipe).join('')}
//         </div>
//     </div>
//     `;
// }

//----------------------------

//!    // console.log('vegRecipes', vegRecipes)

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Recipes();

// ----------------------------------------

// 2-й варик Оригинала (2:07:05): убираем return и фигурные скобки, вытягиваем стрелочную ф-ию в одну строку (свойство стрелочных функций):

// const recipes = [
//     {
//         isVegetarian: true,
//         name: "Greek Salad",
//         ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
//     },
//     {
//         isVegetarian: false,
//         name: "Hawaiian Pizza",
//         ingredients: [
//         "pizza crust",
//         "pizza sauce",
//         "mozzarella",
//         "ham",
//         "pineapple",
//         ],
//     },
//     {
//         isVegetarian: true,
//         name: "Hummus",
//         ingredients: ["Chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
//     }
// ];

// const vegRecipes = recipes.filter((recipe) => recipe.isVegetarian);

// function Recipe(props){
//     return `
//     <h3>${props.name}</h3>
//     <ul>
//         ${props.ingredients.map((i) => `<li>${i}</li>`).join('')}
//     </ul>
//     `;
// }

//-------------------------------------------------------

// 3-й варик Оригинала (2:08:12): пример вывода Recipes() без предварительного вывода vegRecipes (сразу внутри функции), но с функцией Recipe() и с применением return и фигурных скобок:

// function Recipes(){
// Мой варик - тоже полностью совпал с Оригиналом:
//     return `
//     <div>
//         <h1>Vegeterians Recipes</h1>
//         <div>
//             ${recipes.filter((recipe) => {
//             return recipe.isVegetarian}).map(Recipe).join('')}
//         </div>
//     </div>
//     `;
// }

//-------------------------------------------------

// Мой варик вывода нужных рецептов в одной функции , я же запхнул в Recipes() всё (в т.ч. и Recipe()))

// function Recipes(){
//     return `
//     <div>
//         <h1>Vegeterians Recipes</h1>
//         ${recipes.filter((recipe) => {
//             return recipe.isVegetarian
//         }).map((item) => {
//             return `
//         <ul>
//             <h3>${item.name}</h3>
//             ${item.ingredients.map((i) => {
//                 return `<li>${i}</li>`
//             }).join('')}
//         </ul>
//         `;}).join('')}                                    
//     </div>
//     `;
// }

//-------------------------------------------------------------

// Мой варик вывода (почти экстрим) не т. ВСЕГО внутри одной функции Recipes(), но и почти всё в ОДНУ СТРОКУ по максимуму (я надеюсь), избавившись от return и фигурных скобок): 

// function Recipes(){
//     return `
//     <div>
//         <h1>Vegeterians Recipes</h1>
//         ${recipes.filter((recipe)=>recipe.isVegetarian).map((item)=>`<ul><h3>${item.name}</h3>${item.ingredients.map((i)=>`<li>${i}</li>`).join('')}</ul>`).join('')}                                    
//     </div>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Recipes();

// ++++++++++++++++++++++++++++++++++++++++++++++++ The End