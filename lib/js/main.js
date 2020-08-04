const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here

const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const value = {
        //key (column):value(row)
        NAME:username,
        MESSAGE:message,
    };
    // Start 
    database.push(value);
}

// Set database "child_added" event listener here
database.on('child_added', addMessageToBoard)

function addMessageToBoard(rowData){
    //rawData received the child that was just added to the database
   const row= rowData.val();

   console.log(row);

    let P=document.querySelector(".allMessages");
    let messa=document.createElement("p");
        messa.innerText= row.NAME+" : "+row.MESSAGE;

    P.appendChild(messa);
}

