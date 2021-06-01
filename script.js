function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! FUNCTION TO GENERATE 3x8 !! 
function generate_table3x8() {
    // get the reference for the body
    let body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 8; i++) {
      // creates a table row
      let row = document.createElement("tr");
  
      for (let j = 0; j < 3; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let cell = document.createElement("td");
        let cellText = document.createTextNode(getRandomInt(13) + " x " + getRandomInt(13) + " =    ");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);

  }




  // FUNCTION TO GENERATE 5x5 !! FUNCTION TO GENERATE 5x5 !! FUNCTION TO GENERATE 5x5 !! FUNCTION TO GENERATE 5x5 !! FUNCTION TO GENERATE 5x5 !! 
  function generate_table5x5() {
    // get the reference for the body
    let body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 5; i++) {
      // creates a table row
      let row = document.createElement("tr");
  
      for (let j = 0; j < 5; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let cell = document.createElement("td");
        cell.className += "fiveByFive";
        let cellText = document.createTextNode(getRandomInt(13) +  " x " + getRandomInt(13));
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);

  }

