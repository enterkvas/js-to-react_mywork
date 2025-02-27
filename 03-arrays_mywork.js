// -------------------------------------------------------------
//
// МАССИВЫ
//
// -------------------------------------------------------------

// const features = [
// 	'✅ Push to deploy',
// 	'✅ SSL certificates',
// 	'✅ Simple queues',
// ];

// // const featuresHTML = features.map((item) => {
// // 	return `<li>${item}</li>`;
// // });

// // console.log('featuresHTML', featuresHTML);

// function Features() {
// 	return `
//       <h1>App Features</h1>
//       <ul>
// 	  	${features.map((item) => {
// 			return `<li>${item}</li>`;
// 		}).join('')}
//       </ul>
//     `;
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = Features();

// -------------------------------------------------------------

// const members = [
// 	{
// 		name: 'Lindsay Walton',
// 		role: 'Front-end Developer',
// 		imageUrl:
// 			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
// 		twitterUrl: 'https://twitter.com/lindsay',
// 		linkedinUrl: 'https://linkedin.com/lindsay',
// 	},
// 	{
// 		name: 'Tom Cook',
// 		role: 'Director of Product',
// 		imageUrl:
// 			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
// 		twitterUrl: 'https://twitter.com/tom',
// 		linkedinUrl: 'https://linkedin.com/tom',
// 	},
// 	{
// 		name: 'Courtney Henry',
// 		role: 'Designer',
// 		imageUrl:
// 			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
// 		twitterUrl: 'https://twitter.com/courtney',
// 		linkedinUrl: 'https://linkedin.com/courtney',
// 	},
// ];

// function About() {
// 	return `
//     <header>
//       <h1>Who we are</h1>
//       <h2>Meet the team that makes this all possible</h2>
//     </header>

//     <div class="members">
// 		${members.map((member)=> {
// 			return Member(member);
// 		}).join('')}
//     </div>
//   `;
// }

// function Member(props) {
// 	return `
//     <div class="member">
// 		<img src="${props.imageUrl}" width="100" />
// 		<h3>${props.name}</h3>
// 		<p>${props.role}</p>
//     </div>
//   `;
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = About();

// -------------------------------------------------------------

// const links = [
// 	{
// 		text: 'About',
// 		href: '/company/about',
// 	},
// 	{
// 		text: 'Pricing',
// 		href: '/support/pricing',
// 	},
// 	{
// 		text: 'Jobs',
// 		href: '/company/jobs',
// 	},
// 	{
// 		text: 'Press',
// 		href: '/company/press',
// 	},
// 	{
// 		text: 'Documentation',
// 		href: '/support/docs',
// 	},
// ];

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNums = numbers.filter((item)=> {
// 	return item >= 5;
// })

// console.log('filteredNums', filteredNums);

// const companyLinks = links.filter((link)=> {
// 	return link.href.includes('company');
// })

// console.log('companyLinks', companyLinks);

// function Footer() {
// 	return `
//     <footer>
//       <section>
//         <h4>Support</h4>
//         <div>
// 		${links
// 			.filter((link) => {
// 				return link.href.includes('support');
// 			})
// 			.map(Link)
// 			.join('')}
//         </div>
//       </section>

//       <section>
//         <h4>Company</h4>
//         <div>
// 			${links
// 				.filter((link) => {
// 					return link.href.includes('company');
// 				})
// 				.map(Link)
// 				.join('')}
//         </div>
//       </section>
//     </footer>
//   `;
// }

// function Link(link) {
// 	return `
//     <div>
//       <a href="${link.href}">
//         ${link.text}
//       </a>
//     </div>
//   `;
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = Footer();

// -------------------------------------------------------------

// const todos = [
// 	{
// 		done: false,
// 		text: 'Wash dishes',
// 	},
// 	{
// 		done: true,
// 		text: 'Pick up laundry',
// 	},
// 	{
// 		done: true,
// 		text: 'Feed dog',
// 	},
// ];

// function TodoList() {
// 	return `
//     <main>
//       <h1>What I did today</h1>
//       <ul>
// 		${todos.map(TodoItem).join('')}
//       </ul>
//     </main>
//   `;
// }

// function TodoItem(props) {
// 	return `<li>
// 			${props.done ? '✅' : '❌'}
// 			${props.text}
// 			</li>`;
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = TodoList();

// ----------------------------------------------

// const recipes = [
// 	{
// 		isVegetarian: true,
// 		name: 'Greek Salad',
// 		ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
// 	},
// 	{
// 		isVegetarian: false,
// 		name: 'Hawaiian Pizza',
// 		ingredients: [
// 			'pizza crust',
// 			'pizza sauce',
// 			'mozzarella',
// 			'ham',
// 			'pineapple',
// 		],
// 	},
// 	{
// 		isVegetarian: true,
// 		name: 'Hummus',
// 		ingredients: [
// 			'chickpeas',
// 			'olive oil',
// 			'garlic cloves',
// 			'lemon',
// 			'tahini',
// 		],
// 	},
// ];

// // const vegRecipes = recipes.filter((recipe) => {
// // 	return recipe.isVegetarian
// // });

// // console.log('vegRecipes', vegRecipes);

// function Recipes() {
// 	return `
// 		<div>
// 		<h1>Vegetarian Recipes</h1>
// 			${
// 				recipes
// 					.filter((recipe) => recipe.isVegetarian)
// 					.map(Recipe).join('')
// 			}
// 		</div>
//   `;
// }

// function Recipe (recipe) {
// 	console.log(recipe);
// 	return `<h3>${recipe.name}</h3>
// 			<ul>
// 				${recipe.ingredients
// 					.map((item)=>`<li>${item}</li>`)
// 					.join('')}
// 			</ul>`;
// }

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = Recipes();

// -----------------------------------------------------
