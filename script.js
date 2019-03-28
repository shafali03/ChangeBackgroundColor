
const colors = ['#00a8ff', '#e84118', '#353b48', '#fbc531', '#7f8fa6', '#ff5e57', '#5f27cd', '#10ac84', '#f368e0'];

const btn = document.getElementById('btn');

//add event listener
btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * colors.length);

    const body = document.body;
    body.style.backgroundColor = colors[random]
    console.log(random);
})


//Math.floor will rand the numbers to whole