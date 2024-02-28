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
                <div class="navbar-start">
                </div>
                <div class="navbar-end">
                    <RouterLink :to="{name: 'notes'}" active-class="is-active" class="navbar-item is-size-5 has-text-weight-semibold">Notes</RouterLink>
                    
                    <RouterLink :to="{name: 'stats'}" active-class="is-active" class="navbar-item is-size-5 has-text-weight-semibold">Stats</RouterLink>
                    <button v-if="!isLoggedIn" @click="logout"
                     class="button is-warning is-small mt-5 ml-3 has-text-weight-bold">Logout</button>
                     <button v-else @click="login"
                     class="button is-warning is-small mt-5 ml-3 has-text-weight-bold">Login</button>                     
                </div>
            </div>
        </div>
    </nav>

</template>



<script setup>

import {ref} from 'vue'
import HighlightText from '../Common/HighlightText.vue'
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const showNavBarMenu = ref(false);

const authStore = useAuthStore();

const logout = async() => {
    await authStore.logoutUser();
    router.push({name: 'auth'});
}

const router = useRouter();

const login = async() => {
    router.push({path: 'auth'});
}


const {isLoggedIn} = storeToRefs(authStore);


// const isLoggedIn = ref(true);
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