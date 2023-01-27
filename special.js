

//initialize image arrays

let images1 = [];
let images2 = [];
let images3 = [];
let images4 = [];

     
//Array of images
images1[0] = 'special/neutral/s1.png';
images1[1] = 'special/neutral/s2.png';
images1[2] = 'special/neutral/s3.png';
images1[3] = 'special/neutral/s4.png';

images2[0] = 'special/side/b1.png';
images2[1] = 'special/side/b2.png';
images2[2] = 'special/side/b3.png';
images2[3] = 'special/side/b4.png';

images3[0] = 'special/up/u1.png';
images3[1] = 'special/up/u2.png';
images3[2] = 'special/up/u3.png';
images3[3] = 'special/up/u4.png';

images4[0] = 'special/down/d1.png';
images4[1] = 'special/down/d2.png';
images4[2] = 'special/down/d3.png';
images4[3] = 'special/down/d4.png';


//set interval to repeatedely execute interval1 Function for img 1, and stop and start button functions
let i1 = 1;
let img1 = document.getElementById("ns");
function interval(){
    
    img1.src = images1[i1];
    i1++;
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
let img2 = document.getElementById("sb");
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
let img3 = document.getElementById("us");
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
let img4 = document.getElementById("ds");
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
setTimeout(function(){ window.alert("Welcome to the Special Moves section!"); }, 2000);


