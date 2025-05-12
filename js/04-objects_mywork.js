// -------------------------------------------------------------
//
// OBJECTS
//
// -------------------------------------------------------------

// 1.1. (5:08) Destructuring на основе использования 
// свойств(ключей) объекта в качестве переменных, 
// передаваемых в виде параметров (в фигрурных скобках) в 
// функцию-компонент:

// function Checkbox({id, label, defaultChecked}){
//     return `
//     <div>
//         <label for="${id}">${label}</label>
//         <input id="${id}" type="checkbox" ${defaultChecked ? 'checked' : ''} />
//     </div>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Checkbox({
//     id: 'checkbox', 
//     label: 'Subscribe for update',
//     defaultChecked: false
// });

// ============================================

// 1.2. (14:40) Destructuring с использованием оператора 
// rest:

// function Avatar({src, alt: name, ...rest}){
//     return `
//     <img src="${src}" alt="${name}" style="border-radius: ${rest.borderRadius}; width: 200px;" />    
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Avatar({
//     src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     alt: 'Bob Jones',
//     borderRadius: '10px'
// });

// ============================================

// 1.3. (19:04) Destructuring с использованием параметров 
// "по умолчанию" (суть: если в объекте отсутвует 
// какое-либо (или все сразу) из описанных свойств, то всё 
// равно будут на странице выводиться значения "по 
// умолчанию", переданные в параметрах объекта):

// function Message({text="No message", author='Someone', time=''}){
//     return `
//     <header class="message">
//         <strong>${author}</strong> commented ${time}
//     </header>
//     <p>${text}</p>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Message({
//     text: 'Called client, they reassured me the invoice would be paid by the 25th.',
//     author: 'Chelsea Hagon',
//     time: '3d ago'
// });

// =============================================

// 1.4. (23:33) (На основе уже имеющегося Объекта создать 
// новый Объект, дополнив страрый новыми свойствами):

// -- Sorce --:

// const users = [
//     {
//         name: 'Lindsay Walton',
//         email: 'lindsay.walton@example.com'
//     },
//     {
//         name: 'Whitney Francis',
//         email: 'whitney.francis@example.com'
//     },
//     {
//         name: 'Tom Cook',
//         email: 'tom.cook@example.com'
//     }
// ];

// const livesIn = {
//     state: 'California',
//     country: 'USA' 
// }

// console.log({name:'Bob', ...livesIn})

// -- // Sorce --

// -- Need to --: добавить к каждому объекту массива users
//  объект livesIn 

// -- Solution --:

//--------------------------------------

// For example:

// const user = {
//     name: 'Lindsay Walton',
//     email: 'lindsay.walton@example.com'
// }

// const newUser = {
//     ...user,
//     ...livesIn,
//     name: 'John Down',
//     state: 'Alaska'
// }

// console.log(newUser) // Output: к свойствам объекта user
// добавились св-ва объекта livesIn 

// ---------------------------------------------------

// Original solution:

// const users = [
//     {
//         name: 'Lindsay Walton',
//         email: 'lindsay.walton@example.com'
//     },
//     {
//         name: 'Whitney Francis',
//         email: 'whitney.francis@example.com'
//     },
//     {
//         name: 'Tom Cook',
//         email: 'tom.cook@example.com'
//     }
// ];

// const livesIn = {
//     state: 'California',
//     country: 'USA' 
// }

// const newUsers = users.map((user) => {
//     return {
//         ...user,
//         ...livesIn
//     }
// })

// function Users(){
//     return `
//     <ul>
//         ${newUsers.map((user) => {
//             return `
//             <li>
//                 ${user.name} with email: ${user.email} lives in ${user.state} ${user.country} ${user.email}
//             </li>
//             `;
//         }).join('')}
//     </ul>
//     `;   
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Users();

// ---------------------------------------------------
// ---------------------------------------------------

// Original variant 2 (one line):

// const users = [
//     {
//         name: 'Lindsay Walton',
//         email: 'lindsay.walton@example.com'
//     },
//     {
//         name: 'Whitney Francis',
//         email: 'whitney.francis@example.com'
//     },
//     {
//         name: 'Tom Cook',
//         email: 'tom.cook@example.com'
//     }
// ];

// const livesIn = {
//     state: 'California',
//     country: 'USA' 
// }

// const newUsers = users.map((user) => {
//     return {
//         ...user,
//         ...livesIn
//     }
// })

// function Users(){
//     return `
//     <ul>
//         ${newUsers.map((user) => `<li>${user.name} with email: ${user.email} lives in ${user.state} ${user.country}</li>`).join('')}
//     </ul>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Users();

// ---------------------------------------------------
// ---------------------------------------------------

// Мой вариант №2: создание ф-ции User() и подстановка её в
// функцию Users() в качестве колбэк-функции (его предлагал
//  Кл, но не стал реализовывать). Интересная особенность в
// этом случае получается: в функции User() я нигде не 
// указываю переменную newUsers, но её свойства учитывает 
// переменная props (user, item, i - неважно), переданная в 
// функцию User() в качестве параметра:

const users = [
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com'
    },
    {
        name: 'Whitney Francis',
        email: 'whitney.francis@example.com'
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com'
    }
];

const livesIn = {
    state: 'California',
    country: 'USA' 
}

const newUsers = users.map((user) => {
    return {
        ...user,
        ...livesIn
    }
});

function User(i){
    return `<li>${i.name} with email: ${i.email} lives in ${i.state} ${i.country}</li>`
}

function Users(){
    return `
    <ul>
        ${newUsers.map(User).join('')}
    </ul>
    `;
}

const appDiv = document.getElementById('app');

appDiv.innerHTML = Users();

// ================================================

// 1.5. (38:10) 