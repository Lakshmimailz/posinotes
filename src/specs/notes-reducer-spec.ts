import { NotesState,NotesReducer } from "../notes-reducer";

test("SetCurrentNoteAction",()=>{
    const currentNote: NotesState={
        currentNote: "",
         allNotes:[]
    }
    const nextstate=NotesReducer(currentNote,{type:"SET_CURRENT_NOTE",payload:"Lux"});
    expect(nextstate.currentNote).toBe("Lux");
})
test("AddNoteAction"),()=>{
const currentNote: NotesState={
    currentNote: "lakshmi",
     allNotes:["samy"]
}
const nextstate=NotesReducer(currentNote,{type:"ADD_NOTE"});
expect(nextstate.allNotes).toBe(["samy","lakshmi"]);
}
test("ClearNoteAction"),()=>{
    const currentNote: NotesState={
        currentNote: "lakshmi",
         allNotes:['Print']
    }
    const nextstate=NotesReducer(currentNote,{type:"CLEAR_NOTES"});
    expect(nextstate.allNotes).toBe([]);
}