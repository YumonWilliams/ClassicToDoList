const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");


addButton.addEventListener("click", addEntry);
clearButton.addEventListener("click", clearEntry);

let listArray = [];

let entryCount = 0;

let confirmCount = 0;

//Retrieve the amount of entries that are listed.
function retrieveEntryCount() {

};

//Retrieve the amount of entries that have been checked. 
function retrieveConfirmedCount() {

};

function textBox(){
    //Receives the text from the form. 
    const textInput = document.getElementById('textInput');
    textInput.value.trim();
};

function arrayList(){
    //Takes the value of the form and stores it into the array. 
    let newEntry = textInput.value.trim();
    listArray.push(newEntry);
};

//contains functions to display user's text input as entries in the to-do list. 
function displayArray() {
    const container = document.getElementById('myList')

    //Clears the list and prepares it for user input.
    container.innerHTML = '';

    for(let i = 0; i < listArray.length; i++){
        

        container.innerHTML += `
            <div class="field-row">
                <input type="checkbox" id="entry${i}">
                <label for="entry${i}">${listArray[i]}</label>
                <button id="removeButton${i}" style="margin-left: auto">REMOVE</button>
            </div>
        `; 
    }


};

function addEntry() {
    //Calls the textbox function and the function that adds new entries to the list.
    textBox();
    arrayList();
    //Clears the text box after selecting the add button.
    textInput.value = '';

    //console log the array.
    console.log(listArray)

    displayArray(); 

    //These populate the dom properly. Now all I that is left to do is create the conditional statements and math needed to display the progress bar.
    let entryCount =+ 1;
    let confirmCount =+ 1;
    
    const entryCountContainer = document.getElementById("entryCountContainer");
    entryCountContainer.textContent = entryCount;
    console.log(entryCount);

    const confirmedCountContainer = document.getElementById("confirmedCountContainer");
    confirmedCountContainer.textContent = confirmCount;
    console.log(confirmCount);
};


// This needs to be able to remove an entry from the list of the array. Maybe assign the index to the checkbox somehow and remove when it is selected. 
function clearEntry() {
    // Remove entry from the array. 
    // listArray.pop();
    // displayArray()
    // console.log(listArray)

    let listArray = [];
    displayArray();
    
};

//Calculates the progress bars' value from the amount of completed tasks. The value will then need to dynamically update the css styling of the progress bar. 
function progressBar() {

};

console.log(listArray);
