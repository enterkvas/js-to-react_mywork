// 1. FUNCTIONS

//1.1. (8:50) (Вывод строки при помощи ПЕРЕМЕННОЙ (пока что не функции))

// const app = document.querySelector('#app');

// const names = 'World!';

// app.innerHTML = `<h1>Hello, ${names}</h1>`;

//===================================

//1.2. (12:10) (Вывод строки при помощи ФУНКЦИИ)

// const app = document.querySelector('#app');

// function getNames(){
//     return 'World!'
// }

// app.innerHTML = `<h1>Hello, ${getNames()}</h1>`;

//1.3. (15:00) (Вывод КНОПКИ с добавлением ПАРАМЕТРОВ и АРГУМЕНТОВ)

// const app = document.querySelector('#app');

// function createButton(name, style){
//     return `<button style="${style}">${name}</button>`
// }

// app.innerHTML = createButton('Update', 'background-color: navy; color: white;');

//===========================================

//1.4. (15:00) (Вывод ДВУХ КНОПОК)

// const app = document.querySelector('#app');

// function createButton(name, style){
//     return `<button style="${style}">${name}</button>`
// }

// app.innerHTML = `
//     ${createButton('Update', 'background-color: navy; color: white;')}
//     ${createButton('Like', 'background-color: maroon; color: white;')}
// `;

// function createButton(name, style){
//     return `<button style="${style}">${name}</button>`
// }

// app.innerHTML = `
//     ${createButton('Update', 'background-color: navy; color: white')}
//     ${createButton('Like', 'background-color: green; color: black')}
// `;

//================================

//1.5. (21:35) (Вывод ЧАСТИ СТРАНИЦЫ и немного отсебятины в виде вывода <h2> и картинки):

// const app = document.querySelector('#app');

// function createHeader(title, style){
//     return `<h1 style="${style}">${title}</h1>`;
// }

// const videoSrc = 'https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4'

// function createVideo(videoSrc, style){
//     return `<video src="${videoSrc}" style="${style}" controls></video>`;
// }

// function createButton(active, style){
//     return `<button style="${style}">${active}</button>`;
// }

// function createTitle(title){
//     return `<h2>${title}</h2>`
// }

// function getImg(src, width, height=100){
//     return `<img src="${src}" />`
// }

// app.innerHTML = `
//     ${createHeader('Video content', 'color: maroon;')}
//     ${createVideo(videoSrc, 'width: 200px;')}<br>
//     ${createButton('Like', 'background-color: navy; color: white;')}
//     ${createButton('Like', 'background-color: maroon; color: white;')}
//     ${createTitle('Graphic content')}
//     ${getImg('../images/earnLearn.jpg')}
// `;

//================================

//11.03.25 вт

//1.6. (27:25) (Вывод ЧАСТИ СТРАНИЦЫ, но уже с картинкой и с ипольз-м параметра "по  умолчанию"):

// const app = document.getElementById('app');

// function createHeader(){
//     return `<h1>My Computer Setup</h1>`;
// }

// function getImage(src, width, height = '300'){
//     return `<img src="${src}" width="${width}" height="${height}" style="object-fit: cover;" />`;
// }

// app.innerHTML = `
//     ${createHeader()}
//     ${getImage('../images/earnLearn.jpg', '300px')}

// `;

//================================

// 1.7. (33:20) (Вывод ЧАСТИ СТРАНИЦЫ: профиль польз-ля и картинка с исп-м props)

// Variant 1:

// const app = document.getElementById('app');

// const userProps = {
//     avatar: 'https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
//     name: 'Benjamin Voros'
// };

// function createProfile(props){
//     return `
//         <header>
//             <img class="profile" src="${props.avatar}" />
//             <span>${props.name}</span>
//         </header>
//     `;
// }

// const photoProps = {
//     src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
//     width: '300px'
// }

// function createPhoto(props){
//     return `
//         <img src="${props.src}" width="${props.width}" />
//     `;
// }

// app.innerHTML = `
// <div>
//     ${createProfile(userProps)}
//     ${createPhoto(photoProps)}
// </div>
// `;

//------------------------

// Variant 2 (ДЕСТРУКТУРИЗАЦИЯ):

// const app = document.getElementById('app');

// const userProps = {
//     avatar: 'https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
//     name: 'Benjamin Voros'
// };

// function createProfile({avatar, name}){
//     return `
//         <header>
//             <img class="profile" src="${avatar}" />
//             <span>${name}</span>
//         </header>
//     `;
// }

// const photoProps = {
//     src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
//     width: '300px'
// }

// function createPhoto({src, width}){
//     return `
//         <img src="${src}" width="${width}" />
//     `;
// }

// app.innerHTML = `
//     <div>
//         ${createProfile(userProps)}
//         ${createPhoto(photoProps)}
//     </div>
// `;

//++++++++++++++++++++++++++++++++++++++ The End



// ++++++++++++++++++++++++++++++++++++++

// Код, который начал писать по юр с 24.02.25 и который потом (начиная с 08.03.25) переписывал с упорядочиванием (то, что выше):

//1.2. (добавление ПАРАМЕТРОВ)

// const app = document.querySelector('#app');

// function createButton (name, style) {
//     return `<button style='${style}'>${name}</button>`;
// }

// app.innerHTML = `
//     ${createButton('Like', 'background-color: navy; color: white;')}
//     ${createButton('Update', 'background-color: red; color: white;')}
//     ${createButton('Subscribe', 'background-color: green; color: black; font-weight: 700;')}
// `;

//================================================

//01.03.25, 02 и 03.03.25:

//1.3. (добавление ПАРАМЕТРОВ)

// function createHeader(title, style){
//     return `<h1 style="${style}">${title}</h1>`;
// }

// const videoSrc = 'https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4';

// function createVideo(videoSrc, style){
//     return `<video src="${videoSrc}" style="${style}" controls></video>`;
// }
// function createButton(action, style){
//     return `<button style="${style}">${action}</button>`
// }

// const app = document.getElementById('app');

// app.innerHTML = `
//     ${createHeader('Watch', 'color: red;')}
//     ${createVideo(videoSrc, 'width: 300px; height: 200px;')}<br>
//     ${createButton('Like', 'background-color: green; color: white; margin-right: 50px;')}
//     ${createButton('Dislike', 'background-color: red; color: white;')}
// `;

//================================================

//04.03.25 вт

//1.4.

// My version:

// const app = document.getElementById('app');

// function createHeader(title){
//     return `<h1>${title}</h1>`;
// }

// const img = './images/changeYourLife.jpg';

// const defaultImg = `./images/earnLearn.jpg`;

// function getImage(srcImg, style){
//     if (srcImg === img){
//         return `<img src="${img}">`;
//     } else {
//         return `<img src="${defaultImg}">`
//     }
//     // return `<img src="${srcImg}" style="${style}">`
// }

// app.innerHTML = `
//     ${createHeader('My computer setup')}
//     ${getImage(img, 'width: 300px; height: 200px; object-fit: cover;')}
// `;

// Original version:

// const app = document.getElementById('app');

// function createHeader(){return `<h1>👾 My Computer Setup</h1>`}

// function getImage(src, width, height = '300'){
//     return `<img src="${src}" width="${width}" height="${height}" style="object-fit: cover">`;
// }

// app.innerHTML = `
//     ${createHeader()}
//     ${getImage('https://images.unsplash.com/photo-1547082299-de196ea013d6', '300px')}
// `;

//================================================

//06-07.03.25 чт-пт

//1.5.

// const userProps = {
//     avatar:
//         "https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
//     name: "Benjamin Voros",
//     age: "25"
// };

// function createProfile({ avatar, name, age }) {
//     return `
//         <header>
//             <img class="profile" src="${avatar}" />
//             <span>${name}</span>
//             <span>${age}</span>
//         </header>
//     `;
// }

// const photoProps = {
//     src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
//     width: "300px"
// };

// function createPhoto(props) {
//     return `
//         <img src="${props.src}" width="${props.width}" />
//     `;
// }

// const appDiv = document.getElementById("app");

// appDiv.innerHTML = `
//     ${createProfile(userProps)}
//     ${createPhoto(photoProps)}
// `;

//++++++++++++++++++++++++++++++++++++++++++++++++ The End
