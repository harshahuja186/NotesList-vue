import { defineStore } from "pinia";
import {computed, ref} from 'vue';

export const useNotesStore = defineStore('notesStore', () => {

    //state variable
    //state variable
    //state variable
    const notes = ref([
        {id: 'id1', content: "First Node"},
        {id: 'id2', content: "Second Node"},
    ]);


    const getNoteContentById = computed(() => {
        return (id) => {
            return notes.value.find(note => note.id===id).content;
        };
    });

    
    ///actions
    ///actions
    ///actions
    ///actions
    const addNote = (noteContent) => {
        const currentDate = new Date().getTime().toString();    
        const note = {
            id: currentDate,
            content: noteContent,
        }
        console.log(note);
        notes.value.unshift(note);        
    }
    

    const deleteNote = (noteId) => {
        notes.value = notes.value.filter(note => note.id !== noteId);
    }

    const editNote = (noteId, noteContent) => {
        notes.value = notes.value.map(note => {
            if(note.id === noteId){
                return {...note, content: noteContent};
            }
            return note;
        });
    }


    return {
        notes,
        getNoteContentById,
        addNote,
        deleteNote,
        editNote,
    };

});