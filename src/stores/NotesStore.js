import { defineStore } from "pinia";
import { computed, ref } from 'vue';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, orderBy, query, limit } from "firebase/firestore";
import { db } from '../js/firebase';

export const useNotesStore = defineStore('notesStore', () => {

    //state variable
    //state variable
    //state variable
    const notes = ref([]);
    let notesLoaded = ref(false);


    const getNoteContentById = computed(() => {
        return (id) => {
            return notes.value.find(note => note.id===id).content;
        };
    });


    const totalNotesCount = computed(() => {
        return notes.value.length;
    });


    const totalCharactersCount = computed(() => {
        let count = 0;
        for(let note of notes.value){
            count+=note.content.length;
        }
        return count;
    })

    
    ///actions
    ///actions
    ///actions
    ///actions
    const addNote = async(noteContent) => {
        const currentDate = new Date().getTime().toString();    
        // const note = {
        //     id: currentDate,
        //     content: noteContent,
        // }
        // console.log(note);
        // notes.value.unshift(note);        

        await addDoc(collection(db, "notes"), { content: noteContent, date: currentDate });
    }


    const getNotes = async () => {
        const q = query(collection(db, 'notes'), orderBy('date', 'desc'));
      
        onSnapshot(q, (querySnapshot) => {
          let notesData = [];
            notesLoaded.value = false;
          querySnapshot.forEach((doc) => {
            notesData.push({ id: doc.id, content: doc.data().content, date: doc.data().date });
          });
          notes.value = notesData;
          notesLoaded.value = true;
        });
      };
      

    

    const deleteNote = async(noteId) => {
        // notes.value = notes.value.filter(note => note.id !== noteId);
        await deleteDoc(doc(db, "notes", noteId));
    }

    const editNote = async(noteId, noteContent) => {
        // const index = notes.value.findIndex((note) => note.id===noteId);
        // notes.value[index].content = noteContent;

        await updateDoc(doc(db, "notes", noteId), {
            content: noteContent,
          });        
    }


    return {
        notes,
        notesLoaded,
        getNoteContentById,
        totalNotesCount,
        totalCharactersCount,
        addNote,
        getNotes,
        deleteNote,
        editNote,
    };

});