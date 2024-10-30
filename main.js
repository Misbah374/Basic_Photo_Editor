console.log("Hello world");
// Taking input file and displaying it
const imageInput = document.getElementById("myfile");
const imageDisplay = document.getElementById("image");
const ctx = imageDisplay.getContext("2d");
imageInput.addEventListener('change',(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (Event) => {
        const img = new Image();
        img.onload = () => {
            imageDisplay.width = img.width;
            imageDisplay.height = img.height;
            ctx.drawImage(img,0,0);
        };
        img.src = Event.target.result;
    };
    reader.readAsDataURL(file);
});

//Taking file input is done

const choose = () => {
    //filters
    let filterN = String(document.getElementById('filterS').value);
    let filterValue = Number(document.getElementById('filterValue').value);
    if(filterN == 'none'){
        document.getElementById('image').style.filter = 'none';
    }
    else if(filterN == 'contrast'){
        document.getElementById('image').style.filter = 'contrast('+filterValue+'%)';
    }
    else if(filterN == 'saturate'){
        document.getElementById('image').style.filter = 'saturate('+filterValue+'%)';
    }
    else if(filterN == 'grayscale'){
        document.getElementById('image').style.filter = 'grayscale('+filterValue+'%)';
    }
    else if(filterN == 'blur'){
        document.getElementById('image').style.filter = 'blur('+filterValue+'px)';
    }
    else if(filterN == 'brightness'){
        document.getElementById('image').style.filter = 'brightness('+filterValue+'%)';
    }
    else if(filterN == 'transparency'){
        document.getElementById('image').style.filter = 'transparency('+filterValue+'%)';
    }
    else if(filterN == 'sepia'){
        document.getElementById('image').style.filter = 'sepia('+filterValue+'%)';
        console.log(9);
    }
    console.log(filterN);
    console.log(typeof(filterN));

    //border radius
    let border_radius = Number(document.getElementById('BorderRadius').value);
    document.getElementById('image').style.borderRadius = border_radius+'px';
    console.log(border_radius);

    //border-color
    let border_color = document.getElementById('BorderColor').value;
    document.getElementById('image').style.borderColor = border_color;

    //border-width
    let border_width = document.getElementById('BorderWidth').value;
    document.getElementById('image').style.borderWidth = border_width+'px';

    //border-style
    let border_style = document.getElementById('BorderStyle').value;
    document.getElementById('image').style.borderStyle = border_style;

    //height
    let HeighT = document.getElementById('Height').value;
    document.getElementById('image').style.height = HeighT+'px';

    //width
    let WidtH = document.getElementById('Width').value;
    document.getElementById('image').style.width = WidtH+'px';
}
document.getElementById('choose').addEventListener("click",choose);
