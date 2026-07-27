// Selecting HTML elements

const noteInput = document.getElementById("noteInput");

const addNoteButton = document.getElementById("addNote");

const notesContainer = document.getElementById("notesContainer");




// Note Class

class Note {


    constructor(id, text){

        this.id = id;

        this.text = text;

    }


}




// Notes Manager Class

class NotesManager {


    constructor(){

        const savedNotes = localStorage.getItem("notes");


        this.notes = savedNotes 
        ? JSON.parse(savedNotes) 
        : [];


    }



    // Save notes to Local Storage

    saveNotes(){


        localStorage.setItem(

            "notes",

            JSON.stringify(this.notes)

        );


    }



    // Add note

    addNote(note){


        this.notes.push(note);


        this.saveNotes();


    }



    // Delete note using filter()

    deleteNote(id){


        this.notes = this.notes.filter(note => note.id !== id);


        this.saveNotes();


    }


}



// Create manager object

const manager = new NotesManager();





// Display notes using map()

const displayNotes = () => {


    notesContainer.innerHTML = "";



    const notesHTML = manager.notes.map(note => {


        return `

        <div class="note">


        <span>
        ${note.text}
        </span>


        <button 
        class="delete"
        onclick="removeNote(${note.id})">

        Delete

        </button>


        </div>

        `;


    });



    notesContainer.innerHTML = notesHTML.join("");

};






// Add note button event

addNoteButton.addEventListener("click",()=>{


    const text = noteInput.value.trim();



    if(text !== ""){


        const newNote = new Note(

            Date.now(),

            text

        );



        manager.addNote(newNote);



        noteInput.value = "";


        displayNotes();


    }


});






// Delete note

window.removeNote = (id)=>{


    manager.deleteNote(id);


    displayNotes();


};




// Load saved notes when page opens

displayNotes();