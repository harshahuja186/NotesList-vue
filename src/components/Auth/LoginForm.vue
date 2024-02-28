<template>

    <form @submit.prevent="submitHandler">
        <div class="field">
            <label class="label">Email <span>*</span></label>
            <div class="control">
                <input v-model="formCredentials.email" class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
        </div>        
        <div class="field">
            <label class="label">Password <span>*</span></label>
            <div class="control">
                <input v-model="formCredentials.password" class="input" type="password" placeholder="Enter password...">
            </div>
        </div>

        <div class="control">
            <button class="button is-primary has-text-weight-bold is-size-5">Login</button>
        </div>
        
    </form>    

</template>


<script setup>

    import {reactive} from 'vue';
    import {useAuthStore} from '../../stores/AuthStore'
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const formCredentials = reactive({
        email: '',
        password: '',
    });

    
    
    const authStore = useAuthStore();
    
    const submitHandler = async () => {
        if (!formCredentials.email || !formCredentials.password) {
            alert('All Fields are required');
            return;
        }

        try {
            await authStore.loginUser(formCredentials);
            console.log('Login successful');
            // Navigate to the notes page
            // You can replace the next line with the appropriate route
            // For example, if the notes route name is 'notes', you can use:
            router.push({ name: 'notes' });
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error if needed
        }

        console.log('Login Form Submitted');
        console.log(formCredentials);
     };
</script>


<style scoped>


    button{
        width: 100%;
    }

    button{
        margin-top: 20px;
    }

    span{
        color: rgb(227, 128, 128);
    }

</style>