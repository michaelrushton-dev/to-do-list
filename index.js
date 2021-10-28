// when you click add button, the text content of the input gets inserted into the ul as a li string with a checkbox

const addButton = document.querySelector('.add-button');
const textBox = document.querySelector('.text-box');
const taskList = document.querySelector('.task-list');
const enterPrompt = document.querySelector('.enter-prompt');

//CALLING INITIAL FUNCTIONS

//make the text box be the initial focus, instead of having to click in with cursor
textBox.focus();

// UPDATING LIST WITH NEW ITEM

//function for updating list
function updateList(){
    if(textBox.value == ''){
        console.log('Please enter a task');
        enterPrompt.textContent = 'Please enter a task';
        enterPrompt.style.color = 'DarkRed'
        textBox.focus();
} else{
    enterPrompt.style.color = 'black';
    enterPrompt.textContent = 'Enter a new task';
    console.log(textBox.value);
    const newItem = document.createElement('li');
    newItem.classList.add(); //to add any classes to the li at a later time if needed
    newItem.innerHTML = `${textBox.value} <input type="checkbox" class="check-task">`;
    taskList.prepend(newItem);
    textBox.value = '';
    textBox.focus();}
}

//EVENT HANDLING CLICKS AND PRESSING ENTER TO ADD TO LIST

//listening to add button press to invoke updateList function
addButton.addEventListener('click',updateList);
//listening to add button to invoke placeholderGenerator function
addButton.addEventListener('click',placeholderGenerator);
//listening for pressing enter key on text input field to invoke updateList function and placeholderGenerator funcion
textBox.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13){
        updateList();
        placeholderGenerator();
    }
})


//PLACEHOLDER GENERATOR - RANDOM MESSAGE IN PLACEHOLDER FROM AN ARRAY
//array of placeholder suggestions
const placeholderItems = ['walk the dog', 'have a brew', 'book flights', 'learn to tango', 'cook dinner', 'learn to moonwalk',
                          'buy sausages', 'buy eggs', 'feed the cat', 'buy beers', 'practice guitar'];
//get random number (for use in placeholderGenerator)
let randomNumberUpdated;
function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper );
  };
//function for selecting random placeholder suggestion
// make sure placeholder item doesn't repeat on refresh
// first clause checks if new random number matches existing number and isn't the last one in the array, if true will add 1 to new random number to avoid repeating
// second clause will use the newly generated random number to select the array index item

function placeholderGenerator(){
  let randomNumber = getRandomNumber(placeholderItems.length -1);// minus 1 so function won't select last array item and return undefined upon adding 1
  if(randomNumber == randomNumberUpdated){                       //will instead only ever return last array item if last but one item is already in randomNumberUpdated variable 
      console.log('Same numbers');
      randomNumber = randomNumber + 1;
      randomNumberUpdated = randomNumber;
      console.log(randomNumber);
      textBox.placeholderItems = placeholderItems[randomNumberUpdated];
      console.log(textBox.placeholderItems);
      textBox.placeholder = `i.e ${textBox.placeholderItems}`;
  }else{
    randomNumberUpdated = randomNumber;
    console.log(randomNumber);
    textBox.placeholderItems = placeholderItems[randomNumberUpdated];
    console.log(textBox.placeholderItems);
    textBox.placeholder = `i.e ${textBox.placeholderItems}`;
  }
};




//REMOVING THE SELECTED LIST ITEMS WHEN THE REMOVE BUTTON IS CLICKED

const removeButton = document.querySelector('.remove-button');
let checkBox = document.getElementsByClassName('check-task');
let dumpBin = [];



removeButton.addEventListener('click', ()=>{
    console.log('clicky clicky');

    console.log(taskList.childElementCount) //amount of items in ul

    for(let i = 0; i<taskList.childElementCount; i++){

        if(checkBox[i].checked == true){
           dumpBin += checkBox[i];  
        }
    }
    console.log(dumpBin);

    // dumpBin.forEach(){}
    
    // // for(let i = 0; i<dumpBin.length; i++){
    // //    console.log(typeof(dumpBin[i].parentElement)); 
    // // }
});








//STILL TO DO

// when user clicks remove, remove all li items that have the checkbox ticked

// make buttons scale up and change color on hover 

//make buttons styling pulse on being clicked
