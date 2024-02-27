<template>

    <div class="my-4 p-4" :class="`has-background-${bgColor}-dark`">
        <div class="field">
            <label class="label is-size-4 has-text-white">{{label}}</label>
            <div class="control">
                <textarea class="textarea" 
                    placeholder="Enter a Note...." 
                    :value="modelValue" 
                    @input="$emit('update:modelValue', $event.target.value)" 
                    ref="textareaRef"
                    maxlength="100"
                    v-autofocus>
                </textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="button"></slot>
            </div>
        </div>          
    </div> 

</template>



<script setup>
    import { ref } from 'vue';
    import {vAutofocus} from '../../directives/vAutoFocus'


    const props = defineProps({
        modelValue: {
            type: String,
            required: true,
        },
        bgColor: {
            type: String,
            default: 'danger',
        },
        label: {
            type: String,
            default: "Add Note"
        }
    });
    const emit = defineEmits(['update:modelValue']);

    const textareaRef = ref(null);
    const focusTextArea = () => {
        textareaRef.value.focus();
    }

    defineExpose({
        focusTextArea,
    })

</script>