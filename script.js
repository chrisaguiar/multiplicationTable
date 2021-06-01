function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! 
function generate_table3x8() {
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
      let randomOne = getRandomInt(13);
      let randomTwo = getRandomInt(13);

      let cell = document.createElement("td");

      if(getRandomInt(2) == 0){
        cell.innerHTML = (randomOne + " x " + randomTwo + " =    ");

      }

      else{
        cell.innerHTML = (randomTwo + " x " + randomOne + " =    ");

      }
      row.appendChild(cell);
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
  function generate_table5x5() {

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
        let randomOne = getRandomInt(13);
        let randomTwo = getRandomInt(13);

        let cell = document.createElement("td");
        cell.className += "fiveByFive";


        // Creating DIV
        let div = document.createElement("div");
        let divTwo = document.createElement("div");
        div.setAttribute('id','divOne');
        divTwo.setAttribute('id','divTwo');
        // Setting both divs to correct text.

        let randomChance = getRandomInt(2);
        console.log(randomChance);
        if(randomChance == 0){
          if(randomOne > 9 && randomTwo > 9){
            div.innerHTML = (randomOne);
            divTwo.innerHTML = ("x     " + randomTwo);
          }
          else if(randomOne > 9 && randomTwo <= 9){
            div.innerHTML = (randomOne);
            divTwo.innerHTML = ("x     " + randomTwo);
          }
          else if(randomOne <= 9 && randomTwo > 9){
            div.innerHTML = (randomOne);
            divTwo.innerHTML = ("x    " + randomTwo);
          }
          else{
            div.innerHTML = (randomOne);
            divTwo.innerHTML = ("x     " + randomTwo);
          }
  
        }

        else{
          console.log("ran")
          if(randomOne > 9 && randomTwo > 9){
            div.innerHTML = (randomTwo);
            divTwo.innerHTML = ("x     " + randomOne);
          }
          else if(randomOne > 9 && randomTwo <= 9){
            div.innerHTML = (randomTwo);
            divTwo.innerHTML = ("x     " + randomOne);
          }
          else if(randomOne <= 9 && randomTwo > 9){
            div.innerHTML = (randomTwo);
            divTwo.innerHTML = ("x    " + randomOne);
          }
          else{
            div.innerHTML = (randomOne);
            divTwo.innerHTML = ("x     " + randomTwo);
          }

        }
        
        
        // Placing Divs on screen
        cell.appendChild(div);
        div.appendChild(divTwo);
        row.appendChild(cell);
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