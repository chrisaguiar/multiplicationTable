function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function findFirstRange(){
    return document.getElementById("firstStart").value;
  }
  function findSecondRange(){
    return document.getElementById("firstEnd").value;
  }
  function findThirdRange(){
    return document.getElementById("secondStart").value;
  }
  function findFourthRange(){
    return document.getElementById("secondEnd").value;
  }


// FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! 
function generate_tablethreeByEight() {
  if ($('#bigTable').length > 0) {
    let elementTwo = document.getElementById('bigTable');
    elementTwo.parentNode.removeChild(elementTwo);

  }
  // get the reference for the body
  let body = document.getElementsByTagName("body")[0];
  
  // creates a <table> element and a <tbody> element
  let tbl = document.createElement("table");
  tbl.setAttribute('id','smallTable');
  let tblBody = document.createElement("tbody");
  let element = document.getElementById('smallTable');
  // creating all cells
  for (let i = 0; i < 8; i++) {
    // creates a table row
    let row = document.createElement("tr");
    
    for (let j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      let randomOne = getRandomInt(findFirstRange(), findSecondRange());
      let randomTwo = getRandomInt(findThirdRange(), findFourthRange());

      let cell = document.createElement("td");
      let input = document.createElement("input");
      input.setAttribute('id','inputThreeByEight');

      if(getRandomInt(0,1) == 0){
        input.value = (randomOne + " x " + randomTwo + " =    ");

      }

      else{
        input.value = (randomTwo + " x " + randomOne + " =    ");

      }
      row.appendChild(cell);
      cell.appendChild(input);
    }
    
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  
  element.parentNode.removeChild(element);
}





  // FUNCTION TO GENERATE 5x5 !! FUNCTION TO GENERATE 5x5 !! FUNCTION TO GENERATE 5x5 !! FUNCTION TO GENERATE 5x5 !! FUNCTION TO GENERATE 5x5 !! 
  function generate_tablefiveByFive() {

    if ($('#smallTable').length > 0) {
      let element = document.getElementById('smallTable');
      element.parentNode.removeChild(element);
  
    }
    // get the reference for the body
    let body = document.getElementsByTagName("body")[0];
    
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    tbl.setAttribute('id','bigTable');
    let elementTwo = document.getElementById('bigTable');
    let tblBody = document.createElement("tbody");
    
    // creating all cells
    for (let i = 0; i < 5; i++) {
      // creates a table row
      let row = document.createElement("tr");
      
      for (let j = 0; j < 5; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let randomOne = getRandomInt(findFirstRange(), findSecondRange());
        let randomTwo = getRandomInt(findThirdRange(), findFourthRange());

        let cell = document.createElement("td");
        cell.className += "fiveByFive";


        // Creating inputs
        let input = document.createElement("input");
        input.setAttribute('id','inputOne');
        let breakMoment = document.createElement("br");
        let inputTwo = document.createElement("input");
        inputTwo.setAttribute('id','inputTwo');
        // Setting both inputs to correct text.

        if(getRandomInt(0,1) == 0){
          if(randomOne > 9 && randomTwo > 9){
            input.value = (randomOne);
            inputTwo.value = ("x " + randomTwo);
          }
          else if(randomOne > 9 && randomTwo <= 9){
            input.value = (randomOne);
            inputTwo.value = ("x " + randomTwo);
          }
          else if(randomOne <= 9 && randomTwo > 9){
            input.value = (randomOne);
            inputTwo.value = ("x " + randomTwo);
          }
          else{
            input.value = (randomOne);
            inputTwo.value = ("x " + randomTwo);
          }
  
        }

        else{
          if(randomOne > 9 && randomTwo > 9){
            input.value = (randomTwo);
            inputTwo.value = ("x " + randomOne);
          }
          else if(randomOne > 9 && randomTwo <= 9){
            input.value = (randomTwo);
            inputTwo.value = ("x " + randomOne);
          }
          else if(randomOne <= 9 && randomTwo > 9){
            input.value = (randomTwo);
            inputTwo.value = ("x " + randomOne);
          }
          else{
            input.value = (randomTwo);
            inputTwo.value = ("x " + randomOne);
          }

        }
        
        
        // Placing inputs on screen
        row.appendChild(cell);
        cell.appendChild(input);
        cell.appendChild(breakMoment);
        cell.appendChild(inputTwo);

      }
      
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
    
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);

    elementTwo.parentNode.removeChild(elementTwo);

}
