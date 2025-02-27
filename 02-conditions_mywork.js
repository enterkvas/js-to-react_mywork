// -------------------------------------------------------------
//
// УСЛОВИЯ
//
// -------------------------------------------------------------

// function MyApp(isAuth) {
// 	// const isAuth = true;
// 	if (isAuth) return '<div>Authenticated content</div>';
// 	return '<div>Log in here</div>';
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = MyApp(false);

// -------------------------------------------------------------

// function MyApp() {
// 	const isAuth = true;
// 	// return isAuth ? 'true' : 'false';

// 	// if (isAuth) {
// 	// 	return 'Private content';
// 	// } else {
// 	// 	return 'Log in page'
// 	// }

// 	return isAuth ? 'Private content' : 'Log in page';

// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = MyApp();

// -------------------------------------------------------------

// const defaultAvatar =
// 	'https://reactbootcamp.nyc3.digitaloceanspaces.com/default-avatar.png';

// function Profile() {
// 	const user = {
// 		name: 'Brock Wegner'
// 		// avatar: 'https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
// 	};

// 	return `
// 		<div>
// 			<h1>Welcome, ${user.name}r!</h1>
// 			<img src="${user.avatar || defaultAvatar}" width="100px" />
// 		</div>
//   	`;
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = Profile();

// -------------------------------------------------------------

// function Profile() {
// 	const user = {
// 		name: 'Brock Wegner',
// 		avatar: 'https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
// 	};

// 	return `
// 		<div>
// 		<h1>Welcome, ${user.name}!</h1>
// 		${user.avatar ? `<img src="${user.avatar}" />` : ""}
// 		</div>
//   `;
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = Profile();

// -------------------------------------------------------------

// function DownloadButton(props) {
// 	return `
//     <button class="download-button">
// 		${props.isPaid ? `<span>Download</span>` : `<span>Buy Now</span>`}
// 	</button>
//   `;
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = DownloadButton({isPaid: true});

// ${props.isPaid ? `<span>Download</span>` : `<span>Buy Now</span>`}
