/* goal: to make button interactive when clicked they change css of picture. */
//selection of element
var image = document.querySelector("img");
var grayscale = document.querySelector(".grayscale");
let brightness = document.querySelector(".brightness");
let sepia = document.querySelector(".sepia");
let saturate = document.querySelector(".saturate");
let blur = document.querySelector(".blur");
let original = document.querySelector(".original");
var buttons = document.querySelectorAll("button");

// function to make changes in chosen button 
function buttoncolor(button){
    
    button.style.backgroundImage= "linear-gradient(to bottom right, #ffffff, #939cbb)";
    button.style.color="black";
}
// function to make all button to their original color
function allbutton(){
    buttons.forEach(function(i){
        i.style.backgroundImage = "linear-gradient(to bottom right, #008afb, #0037ea)";
        i.style.color="white";
    })
}

grayscale.addEventListener ("click",function(){
    image.style.filter= "grayscale(100%)"; 
    allbutton();
    buttoncolor(grayscale);
})
brightness.addEventListener ("click",function(){
    image.style.filter= "brightness(120%)"; 
    allbutton();
    buttoncolor(brightness);
})
sepia.addEventListener ("click",function(){
    image.style.filter="sepia(50%)"; 
    allbutton();
    buttoncolor(sepia);
})
saturate.addEventListener ("click",function(){
    image.style.filter="saturate(300%)";
    allbutton();
    buttoncolor(saturate);
})
blur.addEventListener ("click",function(){
    image.style.filter="blur(4px)"; 
    allbutton();
    buttoncolor(blur);
})
original.addEventListener ("click",function(){
    image.style.filter= "none";
    allbutton();
    buttoncolor(original);
})

var changeimg = document.querySelector(".change");
function originalcolor(){
    image.style.filter= "none";
    allbutton();
}
var flag=0;
changeimg.addEventListener("click",function(){
    if(flag==0)
    {

        image.src="scenery.jpg";
        originalcolor();
        flag=1;
    }else{
        image.src="scenery2.jpg";
        originalcolor();
        flag=0;
        
    }
})
/*what do i want?
user iamge de
usko access kare hm
and change kar de
 */


// function handleImageUpload(event) {
//     var file = event.target.files[0];
//     var reader = new FileReader();

//     reader.onload= function(e) {
//         var imageDataURL= e.target.result;
//         image.src=imageDataURL;   
//     }

//     reader.readAsDataURL(file);
//     originalcolor();
// }

//new code update
// Function to resize the image and set it to a fixed size
function resizeImage(file) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Set the fixed size (adjust these values as needed)
            const fixedWidth = 300;
            const fixedHeight = 165;

            canvas.width = fixedWidth;
            canvas.height = fixedHeight;

            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0, fixedWidth, fixedHeight);

            // Convert the canvas content to a data URL
            const resizedDataURL = canvas.toDataURL("image/jpeg"); // You can change the format if needed

            // Resolve with the resized data URL
            resolve(resizedDataURL);
        };

        // Handle errors
        img.onerror = (error) => reject(error);

        // Set the source of the image to the uploaded file
        img.src = URL.createObjectURL(file);
    });
}

// Function to handle image upload
function handleImageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var imageDataURL = e.target.result;

        // Resize the image and set it to a fixed size
        resizeImage(file).then((resizedDataURL) => {
            // Set the resized image as the source
            image.src = resizedDataURL;
            originalcolor();
        });
    };

    reader.readAsDataURL(file);
    originalcolor();
}

