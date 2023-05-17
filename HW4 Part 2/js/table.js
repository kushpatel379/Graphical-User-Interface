/*
    Kush Patel
    October 29, 2021
    Assignment: Sliders and Tab Widgets
    This assignment is about creating a user input page where it accepts the values and creates a multiplication table. This page,
    JavaScript, makes the table. It takes in the user input and than multiplies the numbers to get the correct value. The code also
    checks for values that are accepted. For this assignment, i added the validation code that checks if the input values are valid. 
    Checks whether the values are between the min and max, values, if not error messages are printed. For part 2, i added jQuery code
    for sliders and binding the input box and sliders together and generating the tabs. I added javascript for deleting the tabs. 
    I also added code for clicking on tabs, preventing same tables to be saved, no more than 8 tables to be saved, etc.
*/

const min = -50
const max = 50

slide(); //calls slide function
bind();  //calls bind funcition

$(document).ready (
  $("#savedTables").tabs(), //creates the tabs
  console.log("BOY"),
  validate()
  
)
function validate()    //jquery validate function
{ 
  console.log("GIRL")
  $("#inputs2").submit(function(e) {      //connects to the form inputs2 on html
    e.preventDefault(); 
    console.log(e)
    console.log("BOY")
    createTable();                        //calls createTable
    console.log("BOY")
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
    })}
function bind()         //function that binds the input box and slider
{                     
  $("#MinHorizontal").change(function(){                    //value in inputbox will be assigned to newNum
    var newNum = $(this).val();
    console.log("bind")
    $("#MinHorizontalSlider").slider("option","value", newNum);         //slider value will change to newNum value
    console.log("bind2")
  })

  $("#MaxHorizontal").change(function(){                    //value in inputbox will be assigned to newNum
    var newNum = $(this).val();
    $("#MaxHorizontalSlider").slider("option","value", newNum);         //slider value will change to newNum value
  })

  $("#MinVertical").change(function(){                    //value in inputbox will be assigned to newNum
    var newNum = $(this).val();
    $("#MinVerticalSlider").slider("option","value", newNum);         //slider value will change to newNum value
  })

  $("#MaxVertical").change(function(){                    //value in inputbox will be assigned to newNum
    var newNum = $(this).val();
    $("#MaxVerticalSlider").slider("option","value", newNum);         //slider value will change to newNum value
  })
}                                                                                                    

function slide()
{
  $('#MinHorizontalSlider').slider({          //creates slider for minhorizontal
    min: -50,
    max: 50,
    slide: function (event, minHorizontal){                     //as the slider is moving, the minhorizontal value will change
      $("#MinHorizontal").val(parseInt(minHorizontal.value));   //the input will be parsed to read the values to create the table
      document.querySelector("#swap").innerHTML = "";           
      createTable();                                            //creates table as the slider is moving
    },
    stop: function (event, minHorizontal){
      $("#MinHorizontal").val(parseInt(minHorizontal.value));
        createTable();
    }
  })

  $('#MaxHorizontalSlider').slider({
    min: -50,
    max: 50,
    slide: function (event, maxHorizontal){
      $("#MaxHorizontal").val(parseInt(maxHorizontal.value));
      document.querySelector("#swap").innerHTML = "";
      createTable();
    },
    stop: function (event, maxHorizontal){
      $("#MaxHorizontal").val(parseInt(maxHorizontal.value));
        createTable();
    }
  })


  $('#MinVerticalSlider').slider({
    min: -50,
    max: 50,
    slide: function (event, minVertical){
      $("#MinVertical").val(parseInt(minVertical.value));
      document.querySelector("#swap").innerHTML = "";
      createTable();
    },
    stop: function (event, minVertical){
      $("#MinVertical").val(parseInt(minVertical.value));
        createTable();
    }
  })

  $('#MaxVerticalSlider').slider({
    min: -50,
    max: 50,
    slide: function (event, maxVertical){
      $("#MaxVertical").val(parseInt(maxVertical.value));
      document.querySelector("#swap").innerHTML = "";
      createTable();
    },
    stop: function (event, maxVertical){
      $("#MaxVertical").val(parseInt(maxVertical.value));
        createTable();
    }
  })

}


const input = document.querySelectorAll("input")

const valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-","Backspace"];    //array valid
input.forEach((inputField) => {
  inputField.addEventListener("keyup", function (event) {
    if (!valid.includes(event.key))
    {
        inputField.value = inputField.value.slice(0, -1);                    //when the key goes up, it checks to see if it was from the
        document.querySelector("#swap").innerHTML = "";
        createTable();
    }                                                                        // array valid, if not, the key wont be inputed into the form

    if (event.key === "-" && inputField.value.length > 1 && inputField.value.slice(-1))     //if more than 1 - sign is pressed, it wont 
     {                                                                                      // allow more than 1
        inputField.value = inputField.value.slice(0, -1);
     }
    document.querySelector("#swap").innerHTML = "";
    createTable();
  });
});

document.querySelector("#Button").addEventListener("click", (e)=> {     //when button is clicked, the functions inside will be called
  e.preventDefault()
  createTable()
})                             

document.querySelector("#save").addEventListener("click", function(e){      //when the save button is clicked

  document.querySelector("#exists").innerHTML = "";
  document.querySelector("#dontAllow").innerHTML = ""

  e.preventDefault()
  let r_min = document.querySelector("#MinHorizontal").value; //selects the ID's from the html file
  let r_max = document.querySelector("#MaxHorizontal").value;
  let c_min = document.querySelector("#MinVertical").value;
  let c_max = document.querySelector("#MaxVertical").value;

  var str = `[${r_min}, ${r_max}], [${c_min}, ${c_max}]`  //separates the values 
  console.log(str)
  const check = document.getElementById(str);
  console.log(check);
  if (check != null)                        //if id of li exists, than a new table tab won't be created
  {
    document.querySelector("#exists").innerHTML = "This table already is saved."
    return;
  }
  var li = document.createElement("li");   //creates element li
  li.addEventListener("click", function(e){
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
      table(parseInt(r_min), parseInt(r_max), parseInt(c_min), parseInt(c_max), "oldTables")
  })
  
  

  li.classList.add("tablinks");            //adds li to tablinks in html
  li.id = str;                             //id of the li is going to the be str
  li.classList.add("tabStyle");             //adds class to li
  var button = document.createElement("button");    //creates element button 
  var button2 = document.createElement("button")
 
  var cross = document.createElement("input");      
  cross.setAttribute("type", "checkbox");           //making the input type a checkbox
  cross.id = str;                                   //assigning the checkbox id to the str

  var p = document.createElement("p");


  var name1 = document.createTextNode(str);         //writes the values to a variable
  var close = document.createTextNode("x");         //assigns "x" to close

  button.appendChild(name1);                        //prints the values of the table to the button
  p.appendChild(close);                             //puts close inside of p
  
  p.addEventListener("click", function(e){          //if the p ("x") is clicked, it will remove the tab from the bar
    console.log(e);
    console.log("close")
    const parent = e.target.parentElement;          //parent element of x is the tab itself
    parent.remove()
    document.querySelector("#dontAllow").innerHTML = "";
  })

  button.appendChild(cross);                        //puts the checkbox inside the button
  li.appendChild(button);                           //puts the button inside the li
  li.appendChild(p)                                 //puts element p inside li
  let ul = document.querySelector(".ui-tabs-nav")   //selects ui-tabs-nav
  ul.appendChild(li);                               //puts li inside ui-tabs-nav 

  cross.addEventListener("click", function(e){      //if the chekbox is clicked
    console.log("cross4")
    document.querySelector("#all").addEventListener("click", function(e){       //and is the delete tab button is clicked

      if(cross.checked){                                            //check is the checkbox is checked
        console.log("delete")
        const parent = p.parentElement;                             //if so delete the parent element of the checkbox, which is the tab
        parent.remove();
        document.querySelector("#dontAllow").innerHTML = "";

      }
    })
  })

  const dont = ul.children;                   //sets children of ul to dont, which are the li
  if (dont.length > 8)                        //if more than 8 li/tabs
  {
    console.log("Dont make tab")
    const dontAllow = p.parentElement;        //it will remove any new tab that is made
    dontAllow.remove();
    document.querySelector("#dontAllow").innerHTML = "No more than 8 tables allowed to save"
  }

})

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

  var str = `[${r_min}, ${r_max}], [${c_min}, ${c_max}]`  //separates the values 
  const check = document.getElementById(str);
  console.log(check);
  if (check != null)                        //if id of li exists, than a new table tab won't be created
  {
    document.querySelector("#exists").innerHTML = "This table already is saved."
    return;
  }

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

  if(result) table(parseInt(r_min), parseInt(r_max), parseInt(c_min), parseInt(c_max), "table"); //if result contains valid array values than
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

function table(r_min, r_max, c_min, c_max, tableName) 
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
  document.querySelector(`#${tableName}`).innerHTML = ""; //clears the table before creating a new table
  document.querySelector(`#${tableName}`).appendChild(tbl); //creates the table
}


function parse(r_min, r_max, c_min, c_max)
{
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
}

function inputCheck()
{

  if (isNaN(minHorizontalValue))
  {
    document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50, only values are accepted."
    return 0;
  }

  //the following 4 if statements check for errors if the number inputed is not between -50 and 50


  // if(c_min > 50 || c_min < -50)
  // {
  //   document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50"
  // }

  // if(c_max > 50 || c_max < -50)
  // {
  //   document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50"
  // }

  // if(r_min > 50 || r_min < -50)
  // {
  //   document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50"
  // }

  // if(r_max > 50 || r_max < -50)
  // {
  //   document.querySelector("#accept").innerHTML = "Input not accepted, please enter a value beteen -50 and 50"
  // }
}

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

