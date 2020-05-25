const container = document.getElementById('container')
const text = document.getElementById('text')

const totalTime = 12500;
// const breatheTime = (totalTime / 3) * 2; //3000 //5000
// const holdTime = totalTime / 3; //1500 // 2500
const breatheTime = 5000; //3000 //5000
const holdTime = 2500; //1500 // 2500

console.log(breatheTime, holdTime)
// 5000 2500 5000
// 3000 1500 3000

breathAnimation()

function breathAnimation() {
    // console.log('Breathe In')
    text.innerText = 'Breathe in!'
    text.className = 'fontname'
    container.className = 'container grow';

    setTimeout(() => {
        // console.log('Hold')
        text.innerText = 'Hold!'

        setTimeout(() => {
            // console.log('Breathe Out!')
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink';
        }, holdTime)
    }, breatheTime)
}

setInterval(breathAnimation, totalTime)