//initialize image arrays
let images1 = [];
let images2 = [];
let images3 = [];
let images4 = [];

     
//Array of images
images1[0] = 'normals/jab/jab1.png';
images1[1] = 'normals/jab/jab2.png';
images1[2] = 'normals/jab/jab3.png';
images1[3] = 'normals/jab/jab4.png';

images2[0] = 'normals/ftilt/f1.png';
images2[1] = 'normals/ftilt/f2.png';
images2[2] = 'normals/ftilt/f3.png';
images2[3] = 'normals/ftilt/f4.png';

images3[0] = 'normals/uptilt/u1.png';
images3[1] = 'normals/uptilt/u2.png';
images3[2] = 'normals/uptilt/u3.png';
images3[3] = 'normals/uptilt/u4.png';

images4[0] = 'normals/dtilt/d1.png';
images4[1] = 'normals/dtilt/d2.png';
images4[2] = 'normals/dtilt/d3.png';
images4[3] = 'normals/dtilt/d4.png';


//set interval to repeatedely execute interval1 Function for img 1, and stop and start button functions
let i1 = 1;
let img1 = document.getElementById("jab");
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
let img2 = document.getElementById("ftilt");
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

//set interval to repeatedely execute interval3 Function for img 3, and stop and start button functions

let i3 = 1;
let img3 = document.getElementById("utilt");
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
let img4 = document.getElementById("dtilt");
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
setTimeout(function(){ window.alert("Welcome to the Normal Moves section!"); }, 2000);