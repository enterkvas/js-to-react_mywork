const app = document.querySelector('#app');

const names = 'World!';

app.innerHTML = `<h1>Hello, ${names}</h1>`;




//+++++++++++++++++++++++++++++++++++++++++++


// -------------------------------------------------------------
//
// ФУНКЦИИ
//
// -------------------------------------------------------------

// const app = document.querySelector('#app');

// function getName () {
// 	return 'World';
// }

// app.innerHTML = `<h1>Hello, ${getName()}</h1>`;

// -------------------------------------------------------------

// const app = document.querySelector('#app');

// function createButton (name, style) {
// 	return `<button style="${style}">${name}</button>`;
// }

// // app.innerHTML = createButton('Update', 'background-color: navy; color: white;');
// app.innerHTML = `
// 	${createButton( 'Update', 'background-color: navy; color: white;')}
// 	${createButton('Like', 'background-color: maroon; color: white;')}
// `;

// -------------------------------------------------------------

// function createButton(action, style) {
// 	return `<button style="${style}">${action} Video</button>`;
// }

// function createHeader(title, style) {
// 	return `<h1 style="${style}">${title}</h1>`;
// }

// const videoSrc =
// 	'https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4';

// function createVideo(videoSrc, style) {
// 	return `<video src="${videoSrc}" style="${style}" controls></video>`;
// }

// const app = document.getElementById('app');

// app.innerHTML = `
// ${createHeader('Видео с кроликом', 'font-size: 32px;')}
// ${createVideo(videoSrc, 'width: 300px; height: 200px')} <br>
// ${createButton('Like', 'background-color: green; color: white;')}
// ${createButton('Dislike', 'background-color: red; color: white;')}
// `;

// -------------------------------------------------------------

// const app = document.getElementById('app');

// function createHeader () {
// 	return `<h1>👾 My Computer Setup</h1>`;
// }

// function getImage(src, width, height = '300') {
// 	return `<img src="${src}" width="${width}" height="${height}" style="object-fit: cover" >`;
// }

// app.innerHTML = `
// 	${createHeader()}
// 	${getImage(
// 		'https://images.unsplash.com/photo-1547082299-de196ea013d6',
// 		'300px'
// 	)}
// `;

// -------------------------------------------------------------

// const userProps = {
// 	avatar: 'https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
// 	name: 'Benjamin Voros'
// };

// function createProfile({avatar, name}) {
// 	return `
//      <header>
//        <img class="profile" src="${avatar}" />
//        <span>${name}</span>
//      </header>
//    `;
// }

// const photoProps = {
// 	src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
// 	width: '500px',
// };

// function createPhoto(props) {
// 	return `
//       <img src="${props.src}" width="${props.width}" />
//    `;
// }

// const app = document.getElementById('app');

// app.innerHTML = `
//    <div>
//    ${createProfile(userProps)}
//    ${createPhoto(photoProps)}
//    </div>
// `;
