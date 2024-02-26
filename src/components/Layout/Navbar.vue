<template>

    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
        <div class="container px-2">
            <div class="navbar-brand">
                <RouterLink :to="{name: 'notes'}"  
                    class="navbar-item is-size-3 is-size-2-tablet is-family-monospace has-text-weight-bold">
                    <HighlightText :text="'NotesList'"/>
                </RouterLink>

                <a role="button" :class="{'is-active': showNavBarMenu}" class="navbar-burger" 
                @click.prevent="showNavBarMenu = !showNavBarMenu"
                aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" :class="{'is-active': showNavBarMenu}" class="navbar-menu">

                <div class="navbar-end">
                    <RouterLink :to="{name: 'notes'}" active-class="is-active" class="navbar-item is-size-5 has-text-weight-semibold">Notes</RouterLink>

                    <RouterLink :to="{name: 'stats'}" active-class="is-active" class="navbar-item is-size-5 has-text-weight-semibold">Stats</RouterLink>
                </div>
            </div>
        </div>

    </nav>

</template>



<script setup>

import {ref} from 'vue'
import HighlightText from '../Common/HighlightText.vue'

const showNavBarMenu = ref(false);

</script>


<style scoped>
    @media (max-width: 1023px) {
        .navbar-menu{
            position: absolute;
            width: 100%;
        }

    }

    .navbar{
        height: 4.5rem;
        align-items: center;
    }
</style>