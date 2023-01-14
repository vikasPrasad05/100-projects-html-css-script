 const btn = document.getElementById("btn")
 const page = document.getElementById("page")

 getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content)
    page.insertBefore(noteEl, btn)
 })


 function createNoteEl(id, content) {
    const element = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "Empty Note"
    element.value = content

    element.addEventListener("dblclick",() => {
        const warning = confirm("Do you want to delete this note?")
        if(warning) {
            deleteNote(id,element)
        }
    })


    element.addEventListener("input", () => {
        updateNote(id, element.value)
    })

    return element 
 }


 function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id)
    saveNote(notes)
    page.removeChild(element)

 }

 function updateNote(id,content) {
    const notes = getNotes()
    const target = notes.filter((note)=>note.id == id)[0]
    target.content = content
    saveNote(notes)
 }

 function addNote(){
    const notes = getNotes()
    const noteObj = {
        id:Math.floor(Math.random() * 100000),
        content: ""
    }
    const note = createNoteEl(noteObj.id, noteObj.content) 
    page.insertBefore(note,btn)
    notes.push(noteObj)

    saveNote(notes)
 }


 function saveNote(notes){
    localStorage.setItem("note-page", JSON.stringfy(notes))
 }

function getNotes(){
    return JSON.parse(localStorage.getItem("note-page") || "[]")
}

 btn.addEventListener("click", addNote)