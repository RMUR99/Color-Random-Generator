// function generateRandomColor(){
//     //maximum color in the hexa is white 0x is needed to recongnize hexa
//     let maxVal = 0xFFFFFF; // 16777215
//  // returning the float point 
//     let randomNumber = Math.random() * maxVal; 
//     randomNumber = Math.floor(randomNumber);
//     randomNumber = randomNumber.toString(16);
//     let randColor = randomNumber.padStart(6, 0);   
//     return `#${randColor.toUpperCase()}`
// }
// console.log(generateRandomColor()); 

// i think i will put 4 for colors 

function generateRandomColor(){
const colors = [];

for (let i = 0; i < 4; i++) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  

  colors.push(randomColor);

   arrayContainer = []; 
 arrayContainer = arrayContainer.concat(colors);
//  arrayContainer1 = arrayContainer[0]; 
//  arrayContainer2= arrayContainer[1];
//  arrayContainer3 = arrayContainer[2];
//  arrayContainer4 = arrayContainer[3]




 
}

document.querySelector(".col1").style.background = colors[0];
document.querySelector(".col2").style.background = colors[1];
document.querySelector(".col3").style.background = colors[2];
document.querySelector(".col4").style.background = colors[3];

}

//  function changeBackgroundColor() {
//   var randomColors = generateRandomColor();
//   document.body.style.backgroundColor = randomColors;
// }


//   var columnColors = '';
//   var ContainerArea = document.getElementById('elements')
//   for ( var j ; j < colors.length; j++) {
//      result = colors[j].randomColor;
  
//   ContainerArea.innerHTML = columnColors;

// iro.forEach(Element => {
//    Element.addEventListener('click', function(event)  {
//       var iroGen = document.querySelector("div[elements]");      
//       mdContainerElement.innerHTML = iro;
      
//     });
//   });
 
  
 
//   console.log(colors);
//   console.log(arrayContainer)
//   console.log(arrayContainer1)
//   console.log(arrayContainer2)
//   console.log(arrayContainer3)
//   console.log(arrayContainer4)
  
  
  

  
 


// }
//  arrayContainer = []; 
//  arrayContainer = arrayContainer.concat(colors);
//  arrayContainer1 = arrayContainer[0]; 
//  arrayContainer2= arrayContainer[1];
//  arrayContainer3 = arrayContainer[2];
//  arrayContainer4 = arrayContainer[3]
 



// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function changeBackgroundColor() {
//   var randomColor = getRandomColor();
//   document.body.style.backgroundColor = randomColor;
// }

// setInterval(changeBackgroundColor, 10000)
