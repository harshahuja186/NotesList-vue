<template>

    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card" ref="deleteModalRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note?</p>
                <button class="delete" aria-label="close"  @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                Are you sure you want to Delete?
            </section>
            <footer class="modal-card-foot has-text-right">
                <button class="button is-danger" @click="deleteNote">Delete</button>
                <button class="button" @click="closeModal">Cancel</button>
            </footer>
        </div>
    </div>

</template>



<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useNotesStore } from '@/stores/NotesStore';


const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
    noteId: {
        type: String,
        required: true,
    },
});

const notesStore = useNotesStore();


const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
}


const handleCloseKeyUp = (event) => {
    console.log('Key close event');
    if(event.key === 'Escape'){
        closeModal();
    }
}

const deleteModalRef = ref(null);
onClickOutside(deleteModalRef, closeModal);


onMounted(() => {
    document.addEventListener('keyup', handleCloseKeyUp);
});


onUnmounted(() => {
    document.removeEventListener('keyup', handleCloseKeyUp)
});

const deleteNote = () => {
    notesStore.deleteNote(props.noteId);
}


</script>

