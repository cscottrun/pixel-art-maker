console.log('connected')

document.addEventListener('DOMContentLoaded', (ev) => {

    //make 2x2 canvas of squares
    let canvasDivCount = 0;
    let x;
    while (canvasDivCount < 216) {
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
    currentColor.style.paddingBottom = '1%';
    currentColor.classList.add('palDivClass');
    currentColor.innerText = 'Current Color';
    currentColor.id= 'currentColor';

    //create color palette
    let colorList = ['red', 'blue', 'aqua', 'grey','maroon','fuchsia','green','purple','lime','yellow','orange','cornflowerblue'];
    let palBoxSize = 100/colorList.length;
    for (let k = 0; k < colorList.length; k++) {
        const palDiv = document.createElement('div');
        palDiv.style.width = '10%';
        document.body.appendChild(palDiv);
        palDiv.classList.add('palDivClass',colorList[k]);
        palDiv.addEventListener('click', (ev) => {
            //change current div class to whatever class this one is.
            currentColor.setAttribute('class',colorList[k]);
            
        });
    };
})