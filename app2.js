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
    let customColor = document.getElementsByTagName('input')[0].value

    //Submit custom color button
    const submit = document.createElement('div');
    submit.setAttribute('class','submit')
    palette.appendChild(submit);
    submit.innerHTML= '<h5>choose</h5>' 
    submit.addEventListener('click', (ev) => {
        current.style.backgroundColor = document.getElementsByTagName('input')[0].value;
        current.setAttribute('id','custom')
    })
    
    //Event Listener for Pallet
    palette.addEventListener('click', (ev) => {
        //if you click on paint
        if (ev.target.classList.contains('paint')) { 
             //then take the ID of the target,
             let chosenId = ev.target.id; 
             //and give that ID to the current box.
             current.setAttribute('id',chosenId)
             return chosenId; 
        }
    })    
        
    //Event listener for Canvas
    canvas.addEventListener('mouseout', (ev) => {
        if (ev.target.classList.contains('pixel')&& mouseState === 'down') {
            if (document.getElementsByClassName('current')[0].id !== 'custom') {
                //get it for current color
                const currentId = document.getElementsByClassName('current')[0].id
                //set id of click target to be same as current color
                ev.target.setAttribute('id',currentId);
            } else {
                ev.target.setAttribute('id','custom');
                ev.target.style.backgroundColor= document.getElementsByTagName('input')[0].value;
            }      
        }
    })
    //Attempt to implement mouse dragging
        //create mouse state variable to capture mouse down and up
        let mouseState = '';
        //adjust canvas event listener to listen for mouseenter
        //and only respond if mouse if down
    
    canvas.addEventListener('mousedown', (ev) => {
        mouseState = 'down';
        return mouseState;
    })
    canvas.addEventListener('mouseup', (ev) => {
        mouseState = 'up';
        return mouseState;
    })





})