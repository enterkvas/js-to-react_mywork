// -------------------------------------------------------------
//
// OBJECTS
//
// -------------------------------------------------------------

// 1.1. (5:08) Destructuring:

function Checkbox({id, label, defaultChecked}){
    return `
    <div>
        <label for="${id}">${label}</label>
        <input id="${id}" type="checkbox" ${defaultChecked ? 'checked' : ''} />
    </div>
    `;
}

const appDiv = document.getElementById('app');

appDiv.innerHTML = Checkbox({
    id: 'checkbox', 
    label: 'Subscribe for update',
    defaultChecked: false
});