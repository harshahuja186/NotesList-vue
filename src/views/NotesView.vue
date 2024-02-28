<template>

    <AddEditNote v-model="newNote" ref="addEditNoteRef">
        <template #button>
            <button :disabled="!newNote" class="button is-link is-warning has-text-weight-bold	"
                @click.prevent="addNote">
                Add New Note
            </button>
        </template>
    </AddEditNote>

    <progress class="progress is-medium is-dark" max="100" v-if="!notesStore.notesLoaded"/>

    <template v-else-if="!notes.length">
        <div class="has-text-centered is-family-monospace py-6 is-size-4 has-text-grey-light">
            No Notes Added here yet!!!
        </div>
    </template>

    <template v-else>
        <SingleNote v-for="note in notes" :key="note.id" :note="note" />
    </template>

</template>



<script setup>

    import {onMounted, ref} from 'vue';
    import SingleNote from '../components/Notes/SingleNote.vue'
    import {useNotesStore} from '../stores/NotesStore'
    import { useCharactersLimit } from '../composables/useCharactersLimit'
    import { storeToRefs } from 'pinia';
    import AddEditNote from '../components/Notes/AddEditNote.vue';

    const addEditNoteRef = ref(null);
    const newNote = ref('');


    
    const notesStore = useNotesStore();
    const { notes } = storeToRefs(notesStore);
    // const {addNote} = notesStore;
    
    onMounted(() => {
        notesStore.getNotes();
    })

    
    const addNote = () => {
        notesStore.addNote(newNote.value);
        newNote.value = '';
        addEditNoteRef.value.focusTextArea();
    }

    useCharactersLimit(newNote);

</script>