console.log('is this working?')

document.addEventListener('DOMContentLoaded', (ev) => {
    
    //Heading
    const heading = document.createElement('h1')
    document.body.appendChild(heading);
    heading.innerText= 'Version Two Pixel Editor'

    //Canvas
    const canvas = document.createElement('div');
    canvas.setAttribute('class','canvas');
    document.body.appendChild(canvas);

    //Palette
    const palette = document.createElement('div');
    palette.setAttribute('class','palette');
    document.body.appendChild(palette);

    //Pixels
    //** number of pixels */
    let pixelNumber = 500;
    while (pixelNumber > 0) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class','pixel');
        canvas.appendChild(pixel);
        pixelNumber --;   
    }
    
    //Color Choices AKA Paint
    let colorChoices = ['black','white','red','orange','yellow','green','blue','indigo','violet'];
    for ( let i = 0; i < colorChoices.length; i++) {
        const paint = document.createElement('div');
        paint.setAttribute('class','paint');
        paint.setAttribute('id',colorChoices[i])
        palette.appendChild(paint);
    }
        
    //Current Color Box
    const current = document.createElement('div');
    current.setAttribute('class','current');
    palette.appendChild(current);

    //Custom Color Box
    const custom = document.createElement('input');
    custom.type= 'color'
    custom.setAttribute('class','custom')
    palette.appendChild(custom);

    //Event Listener for Pallet
    palette.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('paint')) { //if you click on paint
            //then take the ID of the target, and give that ID to the current box.
        console.log('you clicked violet')
        }
    })
        

        






})