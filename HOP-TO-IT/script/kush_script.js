
const q = document.getElementById("search");
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'pagedart.com';

function submitted(event){
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();

}

q.addEventListener('submit', submitted);



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function logoutDropdown() 
{
  console.log('HImess')
  const select = document.querySelector("#dropdownInfo");
  if(select.style.display === "block")
  {
    console.log("beojmegs");
    select.style.display = "none"

  }
  else{
    console.log("else");
    select.style.display = "block"
  }
  console.log(select)
  console.log("hi2mess")
}


function messageDropdown() {
  console.log('HImess')
  const select = document.querySelector("#messageInfo");
  if(select.style.display === "block")
  {
    console.log("beojmegs");
    select.style.display = "none"

  }
  else{
    console.log("else");

    select.style.display = "block"
  }
  console.log(select)
  console.log("hi2mess")
}




function notificationsDropdown() {
  console.log('HInoti')
  const select = document.querySelector("#notificationInfo");
  if(select.style.display === "block")
  {
    console.log("beojmegs");
    select.style.display = "none"

  }
  else{
    console.log("else");

    select.style.display = "block"
  }
  console.log(select)
  console.log("hi2noti")
}

function removeMessage(){
  const select = document.querySelector("friendsButton");
  if(select.style.display === "block")
  {
    select.style.display === "none";
  }
}


/********************************************************************************************** */
/********************************************************************************************** */
/********************************************************************************************** */

// function removePopup(){
//   console.log('BEFORE')
//   const select = document.querySelector("#add")
//   console.log('AFTER')

//   if(select.style.display === "block")
//   {
//     console.log('INSIDE')
    
//     select.style.display === "none";
//   }
// }

function addNotification(){
  const notiAdd = document.querySelector("#notifications")
  notiAdd.innerHTML = "Jacquie Moloney has been added as friend"
}

// const removeYes = document.querySelector("#acceptYes")
// removeYes.addEventListener("click", removePopup)
// removeYes.addEventListener("click", addNotification)


// const removeNo = document.querySelector("#acceptNo")
// removeNo.addEventListener("click", removePopup)

/********************************************************************************************** */
/********************************************************************************************** */
/********************************************************************************************** */


const div_noti = document.querySelector("#notifications")
div_noti.addEventListener("click", notificationsDropdown)

const div_message = document.querySelector("#messages")
div_message.addEventListener("click", messageDropdown)

const div_log = document.querySelector("#logoutPic")
div_log.addEventListener("click", logoutDropdown)

const cancelButton = document.querySelector("#cancel")
cancelButton.addEventListener("click", logoutDropdown)

const exitButton = document.querySelector("#exitNoti")
exitButton.addEventListener("click", notificationsDropdown)

const backButton = document.querySelector("#goBack")
backButton.addEventListener("click", messageDropdown)

// Setting-up-sing-out-function-and-directions-besides-map
// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", window.location("index.html"))

// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", signOut())




// const logButton = document.querySelector("#logout")
// logButton.addEventListener("click", window.location("index.html"))

const logButton = document.querySelector("#logout")

// function logOut() {
//   console.log(gapi)
//   console.log(gapi.auth2)
//   console.log(gapi.auth2.getAuthInstance)
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     console.log('User signed out.');
//   });

//   // GoogleAuth.signOut()

  

//   // window.onLoadCallback = function(){
//   //   gapi.auth2.init({
//   //       client_id: 'You_client_Id_HERE.apps.googleusercontent.com'
//   //     });
//   //   }
// }

// // function onLoad() {
// //   gapi.load('auth2', function() {
// //     gapi.auth2.init();
// //   });
// // }

// logButton.addEventListener("click", logOut())



const friendOne = document.createElement("p");
friendOne.innerHTML = "Friend 1";
document.getElementById("friend1").appendChild(friendOne);
friendOne.id = "friendOne";

const dateOne = document.createElement("p");
dateOne.innerHTML = "Date 1";
document.getElementById("friend1").appendChild(dateOne);
dateOne.id = "dateOne";


const profilePicTL = document.createElement("img")
profilePicTL.src = "assets/navbar/profile_blank.webp"
profilePicTL.id = "infoPicTL"
document.getElementById("tlpic").appendChild(profilePicTL) 

// const profileName = document.createElement("p")
// profileName.innerHTML = "Your Name"
// document.getElementById("tlpic").append(profileName)


// if(person == online){
//   const friendOn = document.createElement("p");
//   friendOn.innerHTML = "Kush";
//   document.getElementById("friendOnline").appendChild(friendOn);
// }

const profilePicBL = document.createElement("img")
profilePicBL.src = "assets/navbar/profile_blank.webp"
profilePicBL.id = "blpic"                                           //online friends
document.getElementById("friendsOnline").appendChild(profilePicBL)


const viewButton = document.createElement("button")
viewButton.innerHTML = "View"                                       //view button
// document.getElementById("otherJourneys").appendChild(viewButton)


const friendJourney = document.createElement("p")
friendJourney.innerHTML = "... journey is going on, with ... stops left."
document.getElementById("otherJourneys").appendChild(friendJourney)
// document.getElementById("otherJourneys").appendChild(viewButton)


const profilePic = document.createElement("img")
profilePic.src = "assets/navbar/profile_blank.webp"
profilePic.id = "infoPic"
// document.getElementById("quickInfo").appendChild(profilePic) 

const info = document.createElement("p")
info.innerHTML =  /*profilePic + */"... Pick-Up journey has started, with ... stops and ...!"
document.getElementById("quickInfo").appendChild(info);


const messageButton = document.createElement("button")
messageButton.innerHTML = "Friend";
messageButton.id = "friendsButton"
document.getElementById("messagesSide").appendChild(messageButton)

// Setting-up-sing-out-function-and-directions-besides-map
// const spaceInside = document.createElement("div")
// spaceInside.id = "Insidespace";
// document.getElementById("friendsButton").prepend(spaceInside)       //create space between profile pic and name

const friendPic = document.createElement("img")
friendPic.src = "assets/navbar/profile_blank.webp"
friendPic.id = "picFriend"
document.getElementById("friendsButton").prepend(friendPic)

const exitFriend = document.createElement("img")
exitFriend.src = "assets/navbar/exit.png"
exitFriend.id = "exitPic"
document.getElementById("friendsButton").append(exitFriend)


// const deleteMessage = document.querySelector("exitPic")
// deleteMessage.addEventListener("click", function(e){       //remove message on the side
//   const parent = e.target.parentElement;
//   parent.removeMessage;
// })

const mapInfo = document.createElement("p")
mapInfo.innerHTML = "Some Info"                             //quick directions info
mapInfo.id = "simpleInfo"
document.getElementById("aboveMap").appendChild(mapInfo)

const enter = document.querySelector("#search")
enter.addEventListener("keyup", function(e){              //creates a list 
  e.preventDefault()
  
  if(e.keyCode === 13){
    var letters = /^[A-Za-z]+$/;

    // document.querySelector("#searchTwo").submit();
    e.preventDefault();
    // console.log("sea")
    // console.log(enter.value);

    if (enter.value.length == 0){
      return
    }

    if(enter.value.match(letters)){

    }
    
/********************************************************************************************** */

    if(enter.value == "Jacquie Moloney"){

      // console.log(enter.value)
      var add = document.createElement("div")
      var addfriend = document.createElement("p")
      addfriend.innerHTML = "Would you like to add Jacquie Moloney as a friend?"
      // add.innerHTML = "Jacquie Moloney"
      add.id = "add"
      add.display === "block";

      var yes = document.createElement("button")
      yes.id = "acceptYes"
      yes.innerHTML = "Yes"
      var no = document.createElement("button")
      no.id = "acceptNo"
      no.innerHTML = "No"

      document.querySelector(".box3").appendChild(add)
      document.querySelector("#add").appendChild(addfriend)
      document.querySelector("#add").appendChild(yes)
      document.querySelector("#add").appendChild(no)


      function removePopup(){
        console.log('BEFORE')
        const select = document.querySelector("#add")
        console.log('AFTER')
        select.remove();
      }

      const removeYes = document.querySelector("#acceptYes")
      removeYes.addEventListener("click", removePopup)
      removeYes.addEventListener("click", addNotification)


      const removeNo = document.querySelector("#acceptNo")
      removeNo.addEventListener("click", removePopup)

/********************************************************************************************** */


    }
  }
})
