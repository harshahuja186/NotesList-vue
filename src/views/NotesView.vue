<template>

    <AddEditNote v-model="newNote" ref="addEditNoteRef">
        <template #button>
            <button :disabled="!newNote" class="button is-link is-warning has-text-weight-bold	"
                @click.prevent="addNote">
                Add New Note
            </button>
        </template>
    </AddEditNote>

    <SingleNote v-for="note in notes" :key="note.id" :note="note" />


</template>



<script setup>

    import {ref} from 'vue';
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

    const addNote = () => {
        notesStore.addNote(newNote.value);
        newNote.value = '';
        addEditNoteRef.value.focusTextArea();
    }

    useCharactersLimit(newNote);

</script>