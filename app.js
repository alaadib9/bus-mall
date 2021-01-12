
'use strict';
var arrayOfimg = []; // display imag
var leftOneImg = document.getElementById('first');
var centerOneImg = document.getElementById('two');
var rightOneImg = document.getElementById('three');
var trials = 25;
var htmlSection = document.getElementById('element');
var imgChart = document.getElementById("myChart").getContext('2d');
var theAppear = [];
var view = document.getElementById("view");
var removedata = document.getElementById('removedata')

function BusMall(nameoftheproduct, image) {
    this.nameoftheproduct = nameoftheproduct,
        this.image = image;
    this.url = 'images/' + image;
    this.counter = 0;
    this.timeShow = 0;
    arrayOfimg.push(this)


}





// /// print the stored data

// function getStorage() {
//     var st = localStorage.getItem('product');
//     if (st) {
//         arrayOfimg = JSON.parse(st);

//         random();

//     }
// }

function renderImg(left, center, right) {

    leftOneImg.setAttribute('src', arrayOfimg[left].url);

    arrayOfimg[left].timeShow++;
    centerOneImg.setAttribute('src', arrayOfimg[center].url);

    arrayOfimg[center].timeShow++;
    rightOneImg.setAttribute('src', arrayOfimg[right].url);

    arrayOfimg[right].timeShow++;
}



function renderChart() {
    var imgName = [];
    var imgCount = [];
    var click = [];
   
    for (var i = 0; i < arrayOfimg.length; i++) {

        imgName.push(arrayOfimg[i].nameoftheproduct);
        imgCount.push(arrayOfimg[i].counter);
        click.push(arrayOfimg[i].timeShow);

    }

    var myChart = new Chart(imgChart, {
        type: 'bar',
        data: {
            labels: imgName,
            datasets: [
                {
                    label: ' number of Clicks',
                    data: imgCount,
                    backgroundColor: [
                        'rgba(32, 143, 217, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86,1 )',
                        'rgba(75, 192, 192,1 )',
                        'rgba(153, 102, 255,1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(198, 206, 34, 1)',
                        'rgba(206, 80, 34, 1)',
                        'rgba(206, 34, 180, 1)',
                        'rgba(206, 34, 91, 1)',
                        'rgba(236, 4, 15, 0.88)',
                        'rgba(1, 164, 228, 1)',
                        'rgba(0, 11, 15, 1)',
                        'rgba(123, 20, 58, 1)',
                        'rgba(173, 153, 161, 1)',
                        'rgba(102, 161, 89, 1)',
                        'rgba(66, 217, 32, 1)',
                        'rgba(1, 55, 65, 0.74)'
                    ],
                    borderColor: [
                        'rgba(32, 143, 217, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86,1 )',
                        'rgba(75, 192, 192,1 )',
                        'rgba(153, 102, 255,1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(198, 206, 34, 1)',
                        'rgba(206, 80, 34, 1)',
                        'rgba(206, 34, 180, 1)',
                        'rgba(206, 34, 91, 1)',
                        'rgba(236, 4, 15, 0.88)',
                        'rgba(1, 164, 228, 1)',
                        'rgba(0, 11, 15, 1)',
                        'rgba(123, 20, 58, 1)',
                        'rgba(173, 153, 161, 1)',
                        'rgba(102, 161, 89, 1)',
                        'rgba(66, 217, 32, 1)',
                        'rgba(1, 55, 65, 0.74)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Time shown for the Goat',
                    data: click, // array of values (count for each goat when it was clicked)
                    backgroundColor: [
                        'rgba(32, 143, 217, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86,1 )',
                        'rgba(75, 192, 192,1 )',
                        'rgba(153, 102, 255,1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(198, 206, 34, 1)',
                        'rgba(206, 80, 34, 1)',
                        'rgba(206, 34, 180, 1)',
                        'rgba(206, 34, 91, 1)',
                        'rgba(236, 4, 15, 0.88)',
                        'rgba(1, 164, 228, 1)',
                        'rgba(0, 11, 15, 1)',
                        'rgba(123, 20, 58, 1)',
                        'rgba(173, 153, 161, 1)',
                        'rgba(102, 161, 89, 1)',
                        'rgba(66, 217, 32, 1)',
                        'rgba(1, 55, 65, 0.74)'
                    ],
                    borderColor: [
                        'rgba(32, 143, 217, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86,1 )',
                        'rgba(75, 192, 192,1 )',
                        'rgba(153, 102, 255,1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(198, 206, 34, 1)',
                        'rgba(206, 80, 34, 1)',
                        'rgba(206, 34, 180, 1)',
                        'rgba(206, 34, 91, 1)',
                        'rgba(236, 4, 15, 0.88)',
                        'rgba(1, 164, 228, 1)',
                        'rgba(0, 11, 15, 1)',
                        'rgba(123, 20, 58, 1)',
                        'rgba(173, 153, 161, 1)',
                        'rgba(102, 161, 89, 1)',
                        'rgba(66, 217, 32, 1)',
                        'rgba(1, 55, 65, 0.74)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

/// creating a function to make sure that the img didn't appear after click

function makeSure(selector) {
    for (var index = 0; index < theAppear.length; index++) {
        if (theAppear[index].nameoftheproduct === selector) {
            return true;
        }
    }
    return false;
}



function random() {
    do {
        var leftImage = Math.round(Math.random() * (arrayOfimg.length - 1));
        var left = arrayOfimg[leftImage].nameoftheproduct;
    } while (makeSure(left));

    do {
        var centerImage = Math.round(Math.random() * (arrayOfimg.length - 1))
        var center = arrayOfimg[centerImage].nameoftheproduct;
        var rightImage = Math.round(Math.random() * (arrayOfimg.length - 1))
        var last = arrayOfimg[rightImage].nameoftheproduct;

    } while (leftImage === rightImage || centerImage === rightImage || centerImage === leftImage || makeSure(center) ||
        makeSure(last));

    theAppear = [];
    theAppear.push(
        arrayOfimg[leftImage],
        arrayOfimg[centerImage],
        arrayOfimg[rightImage]
    )


    renderImg(leftImage, centerImage, rightImage)
}

function savingData() {

    localStorage.setItem('product', JSON.stringify(arrayOfimg));

}


function clearLocalStorage(){

    // localStorage.clear();

}


function checkAndRestore() {

    if (localStorage.length > 0 ) { 
        arrayOfimg= JSON.parse(localStorage.getItem('product')); 
        console.log(arrayOfimg);
    }
}

removedata.addEventListener('click' , clearLocalStorage )







function check(objectIndicator) {
    for (var x = 0; x < arrayOfimg.length; x++) {
        if (arrayOfimg[x].url === objectIndicator) {
            arrayOfimg[x].counter++;
            trials--;
        }
    }
}
function countPress(event) {
    var targetAny = event.target.id;
    if (trials !== 0) {
        if (targetAny === 'first' || targetAny === 'two' || targetAny === 'three') {
            var objectIndicator = event.target.getAttribute('src');
            check(objectIndicator);
            random();
        }
    }
    else {
        htmlSection.removeEventListener('click', countPress);
        console.log(arrayOfimg);
        savingData();
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
var dog = new BusMall('dog-duck', 'dog-duck.jpg')
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




// function storageTry() {
//     view.innerHTML = '';
//     for (var index = 0; index < arrayOfimg.length; index++) {
//         var productObject = arrayOfimg[index];



//         var newListItem = document.createElement('li');
//         var par = document.createElement('p');
//         par.textContent = `${productObject.counter}`

//         newListItem.appendChild(par);
//         view.appendChild(newListItem);
// }
// }

var buuton = document.getElementById('but');
buuton.addEventListener('click', renderChart);


random();
htmlSection.addEventListener('click', countPress);

checkAndRestore();