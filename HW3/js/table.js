/*
    Kush Patel
    September 30, 2021
    Assignment: Creating an Interactive dynamic table.
    This assignment is about creating a user input page where it accepts the values and creates a multiplication table. This page,
    JavaScript, makes the table. It takes in the user input and than multiplies the numbers to get the correct value. The code also
    checks for values that are accepted. 
*/


function createTable() 
{
  console.log("Hi");
  r_min = document.querySelector("#MinHorizontal").value; //selects the ID's from the html file
  r_max = document.querySelector("#MaxHorizontal").value;
  c_min = document.querySelector("#MinVertical").value;
  c_max = document.querySelector("#MaxVertical").value;

  console.log(r_min); //prints the values of r_min,r_max,c_min,c_max into the console
  console.log(r_max);
  console.log(c_min);
  console.log(c_max);

  document.querySelector("#accept").innerHTML = ""; //clears the error message
  inputCheck(); //calls the inputCheck function

  document.querySelector("#ok").innerHTML = "";     //clears the error message
  errorCheck(); //calls the errorCheck function


  table(r_min, r_max, c_min, c_max); //calls the tableCreate function

}


function table(r_min, r_max, c_min, c_max) 
{
  var tbl = document.createElement("table"); //creates element table
  const header = tbl.insertRow();
  var headcell = header.insertCell(); //inserts extra cell at first spot to line up top row
  headcell.appendChild(document.createTextNode("")); //keeps the first cell block after each new table

  for(var i = c_min; i<= c_max; i++) //creates the fixed top row
  {
    var headcell = header.insertCell(); //inserts the cells for the fixed top row
    headcell.appendChild(document.createTextNode(i)); //inserts the value inside the cells for the fixed row
  }


  for (var i = r_min; i <= r_max; i++) 
  {

    var tr = tbl.insertRow(); //creates rows depending on input of r_min and r_max
    //console.log(tr);
    var th = tr.insertCell(); //creates the cells
    th.appendChild(document.createTextNode(i)); //inserts the values into the first fixed column cells
    for (var k = c_min; k <= c_max; k++)    //created columns depending on input of c_min and c_max
    {
      product = i * k;        //multiplies row value and columnn value
      var td = tr.insertCell();  //creates cells
      td.appendChild(document.createTextNode(product))  //inserts values in to the cells

    }

  }
  document.querySelector("#table").innerHTML = ""; //clears the table before creating a new table
  document.querySelector("#table").appendChild(tbl); //creates the table
}

function inputCheck()
{

  //the following 4 if statements check for errors if the number inputed is not between -50 and 50

  if(c_min > 50 || c_min < -50)
  {
    document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50"
  }

  if(c_max > 50 || c_max < -50)
  {
    document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50"
  }

  if(r_min > 50 || r_min < -50)
  {
    document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50"
  }

  if(r_max > 50 || r_max < -50)
  {
    document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50"
  }
}

function errorCheck()
{
    // the following if statements check if the minimum horizontal and vertical values are less then the maximum values

    if(c_min > c_max)
    {
      document.querySelector("#ok").innerHTML = "Input not accepted, please enter a value less than the maximum vertical value"
    }

    if(r_min > r_max)
    {
      document.querySelector("#ok").innerHTML = "Input not accepted, please enter a value less than the maximum horizontal value"
    }
}