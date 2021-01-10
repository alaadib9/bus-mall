'use strict';
var arrayOfimg = []; // display imag
var leftOneImg = document.getElementById('leftOne');
var centerOneImg = document.getElementById('centerOne');
var rightOneImg = document.getElementById('rightOne');
var trials = 5;
var htmlSection = document.getElementById('element')

function BusMall(nameoftheproduct, image) {
    this.nameoftheproduct = nameoftheproduct,
        this.image = image;
    this.url = 'images/' + image;
    this.counter = 0;
    this.timeShow =0;
    arrayOfimg.push(this)
    

}

function renderImg(left, center, right) {
    var leftImag = document.createElement('img');
    leftImag.setAttribute('src', arrayOfimg[left].url);
    leftOneImg.append(leftImag);
    var centerImag = document.createElement('img');
    centerImag.setAttribute('src', arrayOfimg[center].url);
    centerOneImg.append(centerImag);
    var rightimag = document.createElement('img');
    rightimag.setAttribute('src', arrayOfimg[right].url);
    rightOneImg.append(rightimag);
     leftOneImg.setAttribute('scr' , arrayOfimg[left].url);
     centerOneImg.setAttribute('src' , arrayOfimg[center].url);
     rightOneImg.setAttribute('src'  , arrayOfimg[right].url);

    // leftImag.setAttribute('src', arrayOfimg[left].url);
    // centerImag.setAttribute('src', arrayOfimg[center].url);
    //  rightimag.setAttribute('src', arrayOfimg[right].url);
    //  leftOneImg.textContent = arrayOfimg[left].nameoftheproduct;
    //  centerOneImgr.textContent = arrayOfimg[center].nameoftheproduct;
    //  rightOneImg.textContent = arrayOfimg[right].nameoftheproduct;
    // renderImg(left, center, right);

}

function Random() {
    var leftImage = Math.round(Math.random() * (arrayOfimg.length - 1))

    do {
        var rightImage = Math.round(Math.random() * (arrayOfimg.length - 1))
        var centerImage = Math.round(Math.random() * (arrayOfimg.length - 1))
    } while (leftImage === rightImage || centerImage === rightImage || centerImage === leftImage);


    renderImg(leftImage, centerImage, rightImage)
}


function Check(objectIndicator) {
    for (var index = 0; index < arrayOfimg.length; index++) {
        if (arrayOfimg[index].url = objectIndicator) {
            arrayOfimg[index].counter++;
            trials--;


        }

    }

}

htmlSection.addEventListener('click' ,  countPress  );
function countPress (event) {
    var targetAny = event.target.id;
    if (trials !== 0)  {
        // if (targetAny === 'first' || targetAny === 'two' || targetAny === 'three') {
            var objectIndicator = event.target.getAttribute('src');
            Check(objectIndicator);
           
        } else {
        htmlSection.removeEventListener ('click' ,  countPress);
        console.log(arrayOfimg);
    }   Random();

}







var bag = new BusMall('bag', 'bag.jpg');
var banana = new BusMall('banana', 'banana.jpg');
var bathroom = new BusMall('bathroom', 'bathroom.jpg');
var boots = new BusMall('boots', 'boots.jpg');
var breakfast = new BusMall('breakfast', 'breakfast.jpg');
var bubblegum = new BusMall('bubblegum', 'bubblegum.jpg');
var chair = new BusMall('chair', 'chair.jpg');
var cthulhu = new BusMall('cthulhu', ' cthulhu.jpg');
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



Random();

