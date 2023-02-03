import { useReducer } from "react";
import {NotesReducer, NotesState} from "./notes-reducer";

const initialState:NotesState={
    currentNote :"",
    allNotes:[]
}
export function Addnotes(){

    const[NotesState,dispatch]=useReducer(NotesReducer, initialState);

    function enterNotes(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_CURRENT_NOTE", payload: String(event.target.value)})
    }
    
    function addNotesClick(){
        dispatch({type:"ADD_NOTE"})
    }
    
    function clearNotesClick(){
        dispatch({type:"CLEAR_NOTES"})
    }
    return<>
    <h1>POST-IT-NOTES</h1>
    
    <input type="text" placeholder="Your Notes Here" onInput={enterNotes} />
   <button onClick={addNotesClick}>ADD NOTES</button>
   <button onClick={clearNotesClick}>CLEAR NOTES</button>
   
   <h4>Notes</h4>
   <ul>
        {NotesState.allNotes.map(ex => <li>{ex}</li>)}
    </ul>
    </>
}