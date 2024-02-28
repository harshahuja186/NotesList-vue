<template>

    <div class="card mb-4">
        <div class="card-content">
            <div class="content" style="white-space: pre-line;">
                <div class="has-text-weight-semibold">{{ note.content }}</div>
                <div class="columns mt-2 has-text-gray-light has-text-weight-medium">
                    <small class="column has-text-grey">{{ formattedDate.toLocaleString() }}</small>
                    <small class="column has-text-grey has-text-right">{{ characterLength}} {{ characterLength > 1 ? 'characters' : 'character' }}</small>
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

const formattedDate = new Date(+props.note.date);
// console.log("formatted date:- ", formattedDate.toLocaleString());


const modals = reactive({
    deleteModal: false,
})

</script>

<style scoped>

</style>