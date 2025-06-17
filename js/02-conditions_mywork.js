// 2. CONDITIONS

// 2.1. (45:25) (Простое УСЛОВИЕ)

// Variant 1:

// function MyApp(){

//     const isAuth = false;

//     if(isAuth)
//     return '<div>Authenticator content</div>'
//     return '<div>Log in here</div>'
// }

// const app = document.getElementById('app');

// app.innerHTML = MyApp();


const appDiv = document.getElementById('app');

function MyApp(isAuth){
    if(isAuth) 
        return '<div>Authenticated content</div>';
        return '<div>Log in here</div>';
}
appDiv.innerHTML = MyApp()




// Variant 2 (УПРОЩЕНИЕ):

// function MyApp(isAuth){

//     if(isAuth) return '<div>Log in here</div>'

//     return '<div>Authenticator content</div>'
// }

// const app = document.getElementById('app');

// app.innerHTML = MyApp(true);

//================================

// 2.2. (52:58) (Применение ТЕРНАРНОГО ОПЕРАТОРА):

// function MyApp(){

//     const isAuth = false;

//     return isAuth ? 'Private content' : 'Log in page';
// }

// const app = document.getElementById('app');

// app.innerHTML = MyApp();

// !!!!! В ТЕРНАРНОМ операторе ОБЯЗАТЕЛЬНО д.б. else (то, что идёт после ?).
// Если я не хочу, чтобы в ТЕРНАРНОМ операторе что-то выводилось после ?, то я могу вернуть либо: а) пустые кавыки, либо: б) null:
// Пример: return isAuth ? '<div>Log in</div>' : '';

//================================

// 2.3. (58:40) (Применение логического оператора || ("или")):

// const defaultAvatar = '../images/earnLearn.jpg';
// function Profile(){

//     const user = {
//         name: 'Brock Wegnerr',
//         avatar: 'https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
//     }

//     return `
//         <div>
//             <h1>Welcome, ${user.name}</h1>
//             <img src="${user.avatar || defaultAvatar}" width="100px" />
//         </div>
//     `;

// }

// const app = document.getElementById('app');

// app.innerHTML = Profile();

//================================

// 2.4. (1:03:30) (Применение ТЕРНАРНОГО ОПЕРАТОРА и шаблонной строки внутри другой шаблонной строки):

// function Profile(){
//     const user = {
//         name: 'John Carry',
//         avatar: 'https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
//     }

//     return `
//         <div>
//             <h1>Hello, ${user.name}!</h1>
//             ${user.avatar ? `<img src="${user.avatar}" width='300px' />` : '<p>Fig wam</p>'}
//         </div>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Profile();

//================================

// 2.5. (1:07:30) (Применение ТЕРНАРНОГО ОПЕРАТОРА и ПРОПСОВ: вывод кнопки "Download"):

// function DownloadButton(props){
//     return `
//         <button class="download-button">
//             ${props.isPaid ? `<span>Download</span>` : `<span>Buy now</span>`}
//         </button>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = DownloadButton({isPaid: true});

//---------------------------------------

// My variant:
// function Buy(){
//     const isPay = false;
//     const notPay = true;
//     return `
//         ${isPay ? `<button>Download</button>` : `<button>Buy now</button>`}
//     `;
// }

// const appBuy = document.getElementById('app');

// appBuy.innerHTML = Buy();

//++++++++++++++++++++++++++++++++++++++ The End 



// ++++++++++++++++++++++++++++++++++++++

// Код, который начал писать по юр с 24.02.25 и который потом (начиная с 08.03.25) переписывал с упорядочиванием (то, что выше):

// 2. CONDITIONS

//08.03.25 сб

// ‘allow pasting’ - н. добавлять в Console F12 прежде, чем туда записывать код и уже после этой строки писать код

//2.1

// function MyApp(){

//     const isAuth = false;

// Как МОЖНО, но НЕ НУЖНО:

// if(isAuth === true) {
//     return '<div>Authenticated content</div>';
// }

// ЛУЧШЕ так:

// if(isAuth){
//     return '<div>Authenticated content</div>';
// }

// Ещё ЛУЧШЕ так:

//     if(isAuth) return '<div>Authenticated content</div>';
// }

// const app = document.getElementById('app');

// app.innerHTML = MyApp();

// НО ЕЩЁ ЛУЧШЕ так:

// function MyApp(isAuth){

//     if(isAuth) return '<div>Authenticated content</div>';

// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = MyApp(true);

// +++++++++++++++++++++++++++++++ The End 