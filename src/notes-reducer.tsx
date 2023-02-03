import { type } from "os"

export type NotesState ={
    currentNote: string
    allNotes:string[]
    }
 type SetCurrentNoteAction={type:"SET_CURRENT_NOTE",payload:string};
 type AddNoteAction={type:"ADD_NOTE"};
 type ClearNoteAction={type:"CLEAR_NOTES"};
 type NotesAction = SetCurrentNoteAction |AddNoteAction | ClearNoteAction

export function NotesReducer(state: NotesState,action: NotesAction): NotesState{
    const stateClone: NotesState=JSON.parse(JSON.stringify(state));
   
    switch(action.type){
        case "ADD_NOTE":{
            if(stateClone.currentNote.length >=3){
            stateClone.allNotes.push(stateClone.currentNote);
                        return stateClone;
            }else
            {
                return stateClone;   
            }
        }
        case "SET_CURRENT_NOTE":{
            stateClone.currentNote=action.payload;
            return stateClone;
        }
        case "CLEAR_NOTES":{
            stateClone.allNotes=[];
            return stateClone;
        }
        
    }

}



