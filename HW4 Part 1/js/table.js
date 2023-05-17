/*
    Kush Patel
    October 27, 2021
    Assignment: Validation Plugin
    This assignment is about creating a user input page where it accepts the values and creates a multiplication table. This page,
    JavaScript, makes the table. It takes in the user input and than multiplies the numbers to get the correct value. The code also
    checks for values that are accepted. For this assignment, i added the validation code that checks if the input values are valid. 
    Checks whether the values are between the min and max, values, if not error messages are printed. 
*/

const min = -50
const max = 50

$(document).ready (function validate()    //jquery validate function
{
  $("#inputs2").submit(function(e) {      //connects to the form inputs2 on html
    e.preventDefault();
    createTable();                        //calls createTable
}).validate
    ({
        rules:
        {
            MinHorizontal: 
            {
              required: true,             //something must be inputed
              range: [min, max],          //range for the inputs
            },
            
            MaxHorizontal:
            {
              required: true,
              range: [min, max],
            }, 
            MinVertical:
            {
              required: true,
              range: [min, max],
            },
            
            MaxVertical: 
            {
              required: true,
              range: [min, max],
            }
        },
    

        messages:
        {
            MinHorizontal: {
              required: " Please enter a MinHorizontal value. Must be an integer.",     //prints out these messages if not accetped
              range: " Number must be between -50 to 50."
            },
            MaxHorizontal: {
              required: " Please enter a MaxHorizontal value. Must be an integer.",
              range: " Number must be between -50 to 50."
            },
            MinVertical: {
              required: " Please enter a MinVertical value. Must be an integer.",
              range: " Number must be between -50 to 50."
            },
            MaxVertical: {
              required: " Please enter a MaxVertical value. Must be an integer.",
              range: " Number must be between -50 to 50."
            },
        },
    })
})


const input = document.querySelectorAll("input")

const valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-","Backspace"];    //array valid
input.forEach((inputField) => {
  inputField.addEventListener("keyup", function (event) {
    if (!valid.includes(event.key))
    {
        inputField.value = inputField.value.slice(0, -1);                    //when the key goes up, it checks to see if it was from the
        document.querySelector("#swap").innerHTML = "";
    }                                                                        // array valid, if not, the key wont be inputed into the form

    if (event.key === "-" && inputField.value.length > 1 && inputField.value.slice(-1))     //if more than 1 - sign is pressed, it wont 
     {                                                                                      // allow more than 1
        inputField.value = inputField.value.slice(0, -1);
     }
     document.querySelector("#swap").innerHTML = "";
  });
});

const btn = document.querySelector("button")
function createTable() 
{
  console.log("Hi");
  let r_min = document.querySelector("#MinHorizontal").value; //selects the ID's from the html file
  let r_max = document.querySelector("#MaxHorizontal").value;
  let c_min = document.querySelector("#MinVertical").value;
  let c_max = document.querySelector("#MaxVertical").value;



  console.log(r_min); //prints the values of r_min,r_max,c_min,c_max into the console
  console.log(r_max);
  console.log(c_min);
  console.log(c_max);

  //validate();

  //document.querySelector("#accept").innerHTML = ""; //clears the error message
  //inputCheck(); //calls the inputCheck function

  //document.querySelector("#ok").innerHTML = "";     //clears the error message
  //errorCheck(); //calls the errorCheck function

  if(parseInt(c_min) > parseInt(c_max))     //swaps the c_min and c_max if c_min is > c_max
  {
      const temp = c_max;
      c_max = c_min;
      c_min = temp;
      document.querySelector("#swap").innerHTML = "c_min and c_max values have been swapped because c_min was greater than c_max";
  }

  if(parseInt(r_min) > parseInt(r_max))   //swaps the r_min and r_max if r_min is > r_max
  {
      const temp = r_max;
      r_max = r_min;
      r_min = temp;
      document.querySelector("#swap").innerHTML = "r_min and r_max values have been swapped because r_min was greater than r_max";
  }

  document.querySelector("#table").innerHTML = ""; //clears table if inputs are not accepted
  const result = validator(r_min, r_max, c_min, c_max)

  if(result) table(parseInt(r_min), parseInt(r_max), parseInt(c_min), parseInt(c_max)); //if result contains valid array values than
                                                                                        //parse the values
}

function validator(minHorizontalValue, maxHorizontalValue, minVerticalValue, maxVerticalValue)
{

  
  const minHor = minHorizontalValue.split("")   //splits the input and reads each digit individually by splitting
  const maxHor = maxHorizontalValue.split("")
  const minVer = minVerticalValue.split("")
  const maxVer = maxVerticalValue.split("")
  const combinedArr = [...minHor, ...maxHor, ...minVer, ...maxVer]    //combines all 4 input boxes values into one array

  let result = true
  for (let i = 0; i < combinedArr.length; i++)      //for loop that goes through the combined array and checks each digit, if one of them
  {                                                 // isn't in the valid array, than the function returns
    if(valid.includes(combinedArr[i]) != true) 
    {
      result = false
    }
  }
  
  if(result != true) 
  {
    return
  }

  else if (minHorizontalValue < -50 || maxHorizontalValue > 50 || minVerticalValue < -50 || maxVerticalValue > 50)        //functions returns if the values dont go 
  {                                                                                                                       // through the if statement
     return 0;
  }

  else if (minHorizontalValue > 50 || maxHorizontalValue < -50 || minVerticalValue > 50 || maxVerticalValue < -50)
  {
     return 0;
  }

  return 1;
  
}

function table(r_min, r_max, c_min, c_max) 
{
  var tbl = document.createElement("table"); //creates element table
  const header = tbl.insertRow();
  var headcell = header.insertCell(); //inserts extra cell at first spot to line up top row
  headcell.appendChild(document.createTextNode("")); //keeps the first cell block after each new table

  console.log("HELL0")

  for(var i = c_min; i <= c_max; i++) //creates the fixed top row
  {
    console.log("HELL0")
    var headcell = header.insertCell(); //inserts the cells for the fixed top row
    headcell.appendChild(document.createTextNode(i)); //inserts the value inside the cells for the fixed row
  }

  for (var i = r_min; i <= r_max; i++) 
  {

    console.log("BOB")

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

/*function inputCheck()
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
}*/

/*function errorCheck()
{
    // the following if statements check if the minimum horizontal and vertical values are less then the maximum values

    if(c_min > c_max)
    {
      const temp = c_max;
      c_max = c_min;
      c_min = temp;

    }

    if(r_min > r_max)
    {
      const temp = r_max;
      r_max = r_min;
      r_min = temp;
    }
}*/
