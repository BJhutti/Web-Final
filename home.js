//initialize image array
let images = [];
     
//Array of images
let i = 1;
images[0] = "Images/marss.jpg";
images[1] = "Images/top1.jpg";
images[2] = "Images/top2.jpg";
images[3] = "Images/top3.jpg";
let img = document.getElementById("marss");
//goes through each player in array, and changes the photo and description to match
let interval = setInterval(()=>{
    img.src = images[i]
    console.log(i);
    if (i == 0){
        //changes description and image 
        let dis = document.getElementById("fig");
        dis.innerHTML = 'Tyler "Marss" Martins, the best Zero Suit Player in the world';
    }
    if (i == 1){
        let dis = document.getElementById("fig");
        dis.innerHTML = "Shky, the best in Japan";
    }
    if (i == 2){
        let dis = document.getElementById("fig");
        dis.innerHTML = "Exodia, the best in Alberta, and all of Canada";
    }
    if (i == 3){
        let dis = document.getElementById("fig");
        dis.innerHTML = "Doorstop, a newer ZSS making waves";
    }
    //resets the order
    i++;
    if (i > 3){
        i = 0;
    }


}, 2000);
//alert for introduction for the website
setTimeout(function(){ window.alert("Welcome to the Home Page! Here you will find info an all thing Zero Suit Samus."); }, 2000);