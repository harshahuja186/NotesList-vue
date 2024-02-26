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
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>

</template>


<script setup>

import { computed } from 'vue';

const props = defineProps({
    note: {
        type: Object,
        required: true,
    }
});

const characterLength = computed(() => {
    return props.note.content.length;
});

</script>

<style scoped>

</style>