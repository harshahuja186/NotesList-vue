<template>

    <AddEditNote v-model="noteContent" ref="addEditNoteRef" bgColor="link" label="Edit Note">
        <template #button>
            <button @click.prevent="cancelEditHandler" class="button mr-4">Cancel</button>
            <button :disabled="!noteContent" 
                @click.prevent="editNoteHandler"
                class="button is-link is-warning has-text-weight-bold">
                Update Note
            </button>
        </template>
    </AddEditNote>     

</template>





<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import AddEditNote from '../components/Notes/AddEditNote.vue';
    import { ref } from 'vue';

    import { useNotesStore } from '@/stores/NotesStore';

    const notesStore = useNotesStore();
    const { editNote } = notesStore;

    const route = useRoute();

    const noteContent = ref(notesStore.getNoteContentById(route.params.id));

    const router = useRouter();

    const editNoteHandler = () => {
        editNote(route.params.id, noteContent.value );
        router.replace({name: 'notes'})
    };

    const cancelEditHandler = () => {
        router.replace({name: 'notes'});
    }

</script>
