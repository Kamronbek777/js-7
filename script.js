let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
let bigger = [];
let smaller = [];
let h1 = document.createElement('h1');
let h2 = document.createElement('h1');

bigger = data.filter(value => {
    bigger.push = value > 50
    return value > 50
})
smaller = data.filter(value => {
    smaller.push = value <= 50
    return value <= 50
})



h1.textContent = bigger;
h2.textContent = smaller;

h1.className = 'big';
h2.className ='small';

document.body.style.backgroundColor = 'lightgray';
h1.style.backgroundColor = 'green';
h2.style.backgroundColor = 'red';

document.body.appendChild(h1);
document.body.appendChild(h2);