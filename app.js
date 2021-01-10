'use strict';
var arrayOfimg = []; // display imag
var leftOneImg = document.getElementById('first');
var centerOneImg = document.getElementById('two');
var rightOneImg = document.getElementById('three');
var trials = 25;
var htmlSection = document.getElementById('element');

function BusMall(nameoftheproduct, image) {
    this.nameoftheproduct = nameoftheproduct,
        this.image = image;
    this.url = 'images/' + image;
    this.counter = 0;
    this.timeShow =0;
    arrayOfimg.push(this)
    

}

function renderImg(left, center, right) {
    // var leftImag = document.createElement('img');
    // leftImag.setAttribute('src', arrayOfimg[left].url);
    // leftOneImg.textContent = arrayOfimg[left].nameoftheproduct;
    // arrayOfimg[left].timeShow++;
    // leftOneImg.append(leftImag);
    // var centerImag = document.createElement('img');
    // centerImag.setAttribute('src', arrayOfimg[center].url);
    // centerOneImg.textContent = arrayOfimg[center].nameoftheproduct;
    // arrayOfimg[center].timeShow++;
    // centerOneImg.append(centerImag);
    // var rightimag = document.createElement('img');
    // rightimag.setAttribute('src', arrayOfimg[right].url);
    // rightOneImg.textContent = arrayOfimg[right].nameoftheproduct;
    // arrayOfimg[right].timeShow++;
    // rightOneImg.append(rightimag);
     leftOneImg.setAttribute('scr' , arrayOfimg[left].url);
     leftOneImg.textContent = arrayOfimg[left].nameoftheproduct;
     arrayOfimg[left].timeShow++;
     centerOneImg.setAttribute('src' , arrayOfimg[center].url);
     centerOneImg.textContent = arrayOfimg[center].nameoftheproduct;
     arrayOfimg[center].timeShow++;
     rightOneImg.setAttribute('src'  , arrayOfimg[right].url);
     rightOneImg.textContent = arrayOfimg[right].nameoftheproduct;
     arrayOfimg[right].timeShow++;

    

}

function random() {
    var leftImage = Math.round(Math.random() * (arrayOfimg.length - 1))

    do {
        var rightImage = Math.round(Math.random() * (arrayOfimg.length - 1))
        var centerImage = Math.round(Math.random() * (arrayOfimg.length - 1))
    } while (leftImage === rightImage || centerImage === rightImage || centerImage === leftImage);


    renderImg(leftImage, centerImage, rightImage)
}


function check(objectIndicator) {
    for (var index = 0; index < arrayOfimg.length; index++) {
        if (arrayOfimg[index].url = objectIndicator) {
            arrayOfimg[index].counter++;
            trials--;


        }

    }

}

function countPress (event) {
    var targetAny = event.target.id;
    if (trials !== 0)  {
        if (targetAny === 'first' || targetAny === 'two' || targetAny === 'three') {
            var objectIndicator = event.target.getAttribute('src');
            check(objectIndicator);
            random();
        } else {
        htmlSection.removeEventListener ('click' ,  countPress);
        console.log(arrayOfimg);
     
    }   

}
}









var bag = new BusMall('bag', 'bag.jpg');
var banana = new BusMall('banana', 'banana.jpg');
var bathroom = new BusMall('bathroom', 'bathroom.jpg');
var boots = new BusMall('boots', 'boots.jpg');
var breakfast = new BusMall('breakfast', 'breakfast.jpg');
var bubblegum = new BusMall('bubblegum', 'bubblegum.jpg');
var chair = new BusMall('chair', 'chair.jpg');
var cthulhu = new BusMall('cthulhu', 'cthulhu.jpg');
var dog = new BusMall ('dog-duck', 'dog-duck.jpg')
var dragon = new BusMall('dragon', 'dragon.jpg');
var pen = new BusMall('pen', 'pen.jpg');
var pet = new BusMall('pet-sweep', 'pet-sweep.jpg');
var scissors = new BusMall('scissors', 'scissors.jpg');
var shark = new BusMall('shark', 'shark.jpg');
var sweep = new BusMall('sweep', 'sweep.png');
var taun = new BusMall('tauntaun', 'tauntaun.jpg');
var uni = new BusMall('unicorn', 'unicorn.jpg');
var usb = new BusMall('usb', 'usb.gif');
var water = new BusMall('water-can', 'water-can.jpg');
var wine = new BusMall('wine-glass', 'wine-glass.jpg');
random();
htmlSection.addEventListener('click' ,  countPress );
