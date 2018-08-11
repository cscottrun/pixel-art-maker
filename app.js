console.log('connected')

document.addEventListener('DOMContentLoaded', (ev) => {
    //make header
    const h1 = document.createElement('h1')
    document.body.appendChild(h1)
    h1.innerText = 'Your Color Pixel Maker'

    //make 2x2 canvas of squares
    let canvasDivCount = 0;
    let x;
    while (canvasDivCount < 228) {
        const canvasDiv = document.createElement('div');
        // canvasDiv.setAttribute('class','canvasDiv')
        document.body.appendChild(canvasDiv);
        //add event listener to the squares so when clicked, they turn red

        //messing with mouse functions

        canvasDiv.addEventListener(`click`, (ev) => {
            // console.log(ev.type);
            const colorId = document.getElementById('currentColor').classList;
            canvasDiv.setAttribute('class',colorId);
        });

        canvasDivCount ++;
    }

    //create current color indicator square
    let currentColor = document.createElement('div')
    document.body.appendChild(currentColor);
    currentColor.style.float = 'center';
    currentColor.style.margin = '10px';
    currentColor.style.width = '95%';
    currentColor.style.paddingBottom = '5px';
    currentColor.classList.add('palDivClass');
    currentColor.id= 'currentColor';

    let smallText = document.createElement('h3')
    smallText.innerText= 'current color'
    currentColor.appendChild(smallText)

    //create color palette
    let colorList = ['red', 'blue', 'aqua', 'grey','maroon','fuchsia','green','purple','lime','yellow','orange','cornflowerblue','turquoise'];
    let palBoxSize = 90/(colorList.length);
    for (let k = 0; k < colorList.length; k++) {
        const palDiv = document.createElement('div');
        palDiv.style.width = `${palBoxSize}%`;
        document.body.appendChild(palDiv);
        palDiv.classList.add('palDivClass',colorList[k]);
        palDiv.addEventListener('click', (ev) => {
            //change current div class to whatever class this one is.
            currentColor.setAttribute('class',colorList[k]);  
        });
    };
    //create input box for hexidecimal
    const input = document.createElement('input')
    input.setAttribute('placeholder','what color do you want?')
    document.body.appendChild(input)

    //do something with input to create color
    //if (input.value === )
})