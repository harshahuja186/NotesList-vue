<template>

    <form @submit.prevent="submitHandler">
        <div style="display: flex; gap: 10px; justify-content: space-between;">
            <div class="field" style="width:220px;">
                <label class="label">First Name <span>*</span></label>
                <div class="control">
                    <input v-model="formCredentials.firstName" class="input" type="text" placeholder="Harsh">
                </div>
            </div>
            <div class="field" style="width:220px;">
                <label class="label">Last Name <span>*</span></label>
                <div class="control">
                    <input v-model="formCredentials.lastName" class="input" type="text" placeholder="Ahuja">
                </div>
            </div>                
        </div>
        <div class="field">
            <label class="label">Email <span>*</span></label>
            <div class="control">
                <input v-model="formCredentials.email" class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
        </div>        
        <div style="display: flex; gap: 10px; justify-content: space-between;">
            <div class="field" style="width:220px;">
                <label class="label">Password <span>*</span></label>
                <div class="control">
                    <input v-model="formCredentials.password" class="input" type="password" placeholder="Enter password">
                </div>
            </div>
            <div class="field" style="width:220px;">
                <label class="label">Confirm Password <span>*</span></label>
                <div class="control">
                    <input v-model="formCredentials.confirmPassword" class="input" type="password" placeholder="Confirm Password">
                </div>
            </div>        
        </div>

        <div class="control">
            <button class="button is-primary has-text-weight-bold is-size-5">Register</button>
        </div>
        
    </form>    

</template>


<script setup>
    import { useAuthStore } from '@/stores/AuthStore';
    import {reactive} from 'vue';
    
    const formCredentials = reactive({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const authStore = useAuthStore();

    const submitHandler = () => {
        if(!formCredentials.email || !formCredentials.password 
            || !formCredentials.firstName || !formCredentials.lastName 
            || !formCredentials.confirmPassword){
            alert('All Fields are required');
            return;
        }  
        authStore.registerUser(formCredentials);      
        console.log("Register Form Submitted");
        console.log(formCredentials)
    }
    
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