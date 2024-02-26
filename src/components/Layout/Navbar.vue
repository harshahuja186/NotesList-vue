<template>

    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <RouterLink :to="{name: 'notes'}"  
                class="navbar-burger is-active navbar-item is-size-2 is-family-monospace has-text-weight-bold">
                NotesList
            </RouterLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">

            <div class="navbar-end">
                <RouterLink :to="{name: 'notes'}" active-class="is-active" class="navbar-item is-size-5 has-text-weight-semibold">Notes</RouterLink>

                <RouterLink :to="{name: 'stats'}" active-class="is-active" class="navbar-item is-size-5 has-text-weight-semibold">Stats</RouterLink>
            </div>
        </div>
    </nav>

</template>



<script setup>

import {ref} from 'vue'

const showNavBarMenu = ref(false);

</script>