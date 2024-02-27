<template>

    <div class="mt-3">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Total Nots Count</td>
                    <td>{{ notesCount }}</td>
                </tr>

                <tr>
                    <td>Total Character Count</td>
                    <td>{{ totalCharacters }}</td>
                </tr>
            </tbody>
        </table>
    </div>


</template>


<script setup>
    import { useNotesStore } from '@/stores/NotesStore';


    const notesStore = useNotesStore();

    const notesCount = notesStore.totalNotesCount;


    const totalCharacters = notesStore.totalCharactersCount;

</script>