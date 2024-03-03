const calculate = document.querySelector('#calculate-btn');
const inputField = document.querySelector('#date')
// console.log(new Date().toISOString().split('T')[0]);
inputField.max = new Date().toISOString().split('T')[0];

const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

calculate.addEventListener('click', (e) => {
    e.preventDefault();
    let birthDate = new Date(inputField.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    console.log(d3, m3, y3);
    // const p = document.createElement('p');
    // p.innerHTML = `<p>Year ${y3}, Month ${m3}, Day ${d3}</p>`;
    // p.style.fontSize = '40px';
    // document.querySelector('.calculator').appendChild(p);

    document.querySelector('#result').innerHTML = `You're ${y3} years, ${m3} months and ${d3} days old.`
})

