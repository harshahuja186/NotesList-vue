<template>

    <div class="card mb-4">
        <div class="card-content">
            <div class="content" style="white-space: pre-line;">
                {{ note.content }}
                <div class="has-text-right has-text-gray-light has-text-weight-medium">
                    <small>{{ characterLength}} {{ characterLength > 1 ? 'characters' : 'character' }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="{name: 'editNote', params: {id: note.id}}" class="card-footer-item">Edit</RouterLink>
            <a href="#" class="card-footer-item" @click.prevent="deleteHandler">Delete</a>
        </footer>
        <DeleteNoteComponent v-if="modals.deleteModal" v-model="modals.deleteModal" :noteId="note.id"/>
    </div>

</template>


<script setup>

import DeleteNoteComponent from './DeleteNoteComponent.vue';
import { computed, reactive } from 'vue';

const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});


const deleteHandler = () => {
    modals.deleteModal = true;
}

const characterLength = computed(() => {
    return props.note.content.length;
});


const modals = reactive({
    deleteModal: false,
})

</script>

<style scoped>

</style>