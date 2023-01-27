//initialize image arrays
let images1 = [];
let images2 = [];
let images3 = [];
let images4 = [];

     
//Array of images
images1[0] = 'air/nair/f1.png';
images1[1] = 'air/nair/f2.png';
images1[2] = 'air/nair/f1.png';
images1[3] = 'air/nair/f2.png';

images2[0] = 'air/fair/f1.png';
images2[1] = 'air/fair/f2.png';
images2[2] = 'air/fair/f1.png';
images2[3] = 'air/fair/f2.png';

images3[0] = 'air/uair/u1.png';
images3[1] = 'air/uair/u2.png';
images3[2] = 'air/uair/u1.png';
images3[3] = 'air/uair/u2.png';

images4[0] = 'air/dair/d1.png';
images4[1] = 'air/dair/d2.png';
images4[2] = 'air/dair/d1.png';
images4[3] = 'air/dair/d2.png';


//set interval to repeatedely execute interval1 Function for img 1, and stop and start button functions
let i1 = 1;
let img1 = document.getElementById("nair");
function interval(){
    //image1 is replaced by the image in the next element
    img1.src = images1[i1];
    i1++;
    //resets after image is changed to image 4
    if (i1 > 3){
        i1 = 0;
    }
}
let  interv1;
function start1(){
    interv1 = setInterval(interval, 500);
}

function stop1(){
    clearInterval(interv1);
}

//set interval to repeatedely execute interval2 Function for img 2, and stop and start button functions

let i2 = 1;
let img2 = document.getElementById("fair");
function interval2(){
    
    img2.src = images2[i2];
    i2++;
    if (i2 > 3){
        i2 = 0;
    }
}
let  interv2;
function start2(){
    interv2 = setInterval(interval2, 500);
}

function stop2(){
    clearInterval(interv2);
}

//set interval to repeatedely execute interval3 Function for img3, and stop and start button functions

let i3 = 1;
let img3 = document.getElementById("uair");
function interval3(){
    
    img3.src = images3[i3];
    i3++;
    if (i3 > 3){
        i3 = 0;
    }
}
let  interv3;
function start3(){
    interv3 = setInterval(interval3, 500);
}

function stop3(){
    clearInterval(interv3);
}


//set interval to repeatedely execute interval4 Function for img 4, and stop and start button functions

let i4 = 1;
let img4 = document.getElementById("dair");
function interval4(){
    
    img4.src = images4[i4];
    i4++;
    if (i4 > 3){
        i4 = 0;
    }
}
let  interv4;
function start4(){
    interv4 = setInterval(interval4, 500);
}

function stop4(){
    clearInterval(interv4);
}

//alert for introduction to this portion of the website
setTimeout(function(){ window.alert("Welcome to the Aerial Moves section!"); }, 2000);