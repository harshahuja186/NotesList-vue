<template>
    <div class="tabs is-centered has-text-weight-bold is-size-5">
        <ul>
            <li :class="{ 'is-active': !register }">
                <a @click.prevent="register = false">Login</a>
            </li>
            <li :class="{ 'is-active': register }">
                <a @click.prevent="register = true">Register</a>
            </li>
        </ul>
    </div>

    <div class="card">
        <div class="card-content">
            <div class="title has-text-centered">{{ FormTitle }}</div>
            <div class="content">
                <LoginForm v-if="!register" />
                <RegisterForm v-else />
            </div>
        </div>
    </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import LoginForm from '../components/Auth/LoginForm.vue';
  import RegisterForm from '../components/Auth/RegisterForm.vue';
  
  const register = ref(false);

  const FormTitle = computed(() => {
        return register.value ? "Register" : "Login";
    });

</script>


<style scoped>

    .card{
        max-width: 500px;
        margin: auto;
        margin-top: 50px;
    }

    .tabs{
        margin-top: 80px;
    }

</style>