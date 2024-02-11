function randomColor(){
    let hexValue = '0123456789ABCDEF';
    let colorValue = '#';
    for(let i = 0; i<6; i++){
        colorValue += hexValue[parseInt(Math.random()*hexValue.length)]
    }
    document.querySelector('#color').innerHTML = colorValue;
    return colorValue;
}

document.querySelector('#click-btn').addEventListener('click',function(){
    document.querySelector('.wrapper').style.backgroundColor = randomColor();
})