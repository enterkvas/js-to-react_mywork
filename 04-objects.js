// -------------------------------------------------------------
//
// ОБЪЕКТЫ
//
// -------------------------------------------------------------

// function Checkbox({ id, label, defaultChecked }) {
// 	return `
//     <div>
//       <label for="${id}">${label}</label>
//       <input id="${id}" type="checkbox" ${defaultChecked ? 'checked' : ''} />
//     </div>
//   `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Checkbox({
// 	id: 'checkbox',
// 	label: 'Subscribe for updates',
// 	defaultChecked: true,
// });

// -----------------------------------------------------------------------

// function Avatar({ src, alt: name, ...rest }) {
// 	return `<img src="${src}" alt="${name}" style="border-radius: ${rest.borderRadius}" width="100px" />`;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Avatar({
// 	src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 	alt: 'Bob Jones',
// 	borderRadius: '10px',
// });

// -----------------------------------------------------------------------

// function Message({ text = 'No message', author = 'Someone', time = ''}) {
// 	return `
//     <div class="message">
//       <header>
//         <strong>${author}</strong> commented ${time}
//       </header>
//       <p>${text}</p>
//     </div>
//   `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Message({
// 	text: 'Called client, they reassured me the invoice would be paid by the 25th.',
// 	author: 'Chelsea Hagon',
// 	// time: '3d ago',
// });

// -----------------------------------------------------------------------

// const users = [
// 	{
// 		name: 'Lindsay Walton',
// 		email: 'lindsay.walton@example.com',
// 	},
// 	{
// 		name: 'Whitney Francis',
// 		email: 'whitney.francis@example.com',
// 	},
// 	{
// 		name: 'Tom Cook',
// 		email: 'tom.cook@example.com',
// 	},
// ];

// const livesIn = {
// 	state: 'California',
// 	country: 'USA',
// };

// const newUsers = users.map((user)=> {
// 	return {
// 		...user,
// 		...livesIn
// 	};
// })

// function Users() {
// 	return `
//     <ul >
// 		${newUsers.map((user)=> `<li>${user.name} with email: ${user.email} lives in ${user.state} ${user.country}  </li>`).join('')}
//     </ul>
//   `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Users();

// -----------------------------------------------------------

// const date = 'today';

// const stats = [
// 	{ id: 1, record: { value: '71,897', name: 'Total Subscribers' } },
// 	{ id: 2, record: { value: '58.16%', name: 'Avg. Open Rate' } },
// 	{ id: 3, record: { value: '24.57%', name: 'Avg. Click Rate' } },
// ].map((item) => {
// 	return {
// 		...item,
// 		record: {
// 			...item.record,
// 			date,
// 		},
// 	};
// });

// console.log(stats);

// function Statistics() {
// 	return `
//     <ul>
// 		${stats.map(Statistic).join('')}
//     </ul>
//   `;
// }

// function Statistic({ id, record }) {
// 	return `
//     <li id="${id}">
//       <span>${record.name}</span>
//       <h2>${record.value}</h2>
//       <span>as of ${record.date}</span>
//     </li>
//   `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Statistics();
