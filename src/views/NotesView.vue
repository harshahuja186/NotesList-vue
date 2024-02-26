<template>

    <div class="has-background-danger-dark my-4 p-4">
        <div class="field">
            <label class="label is-size-4">Note</label>
            <div class="control">
                <textarea class="textarea" placeholder="Enter a Note...." v-model="newNode" ref="newNoteRef"></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <button :disabled="!newNode" class="button is-link is-warning"
                    @click.prevent="addNote">
                    Add New Note
                </button>
            </div>
        </div>          
    </div>      

    <SingleNote v-for="note in notes" :key="note.id" :note="note"/>


</template>





<script setup>

    import {ref} from 'vue';
    import SingleNote from '../components/Notes/SingleNote.vue'

    const notes = ref([
        {id: 'id1', content: "First Node"},
        {id: 'id2', content: "Second Node"},
    ]);

    const newNoteRef = ref(null);


    const newNode = ref('');

    const currentDate = new Date().getTime().toString();

    const addNote = () => {
        const note = {
            id: currentDate,
            content: newNode.value,
        }
        console.log(note);
        notes.value.unshift(note);
        newNode.value = '';
        newNoteRef.value.focus();
    }

</script>