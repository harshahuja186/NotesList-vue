import { watch } from "vue";

export const useCharactersLimit = (value) => {
    watch(value, (newValue, oldValue) => {
        if(newValue.length === 100){
            alert("Sorry more than 100 characters are not allowed");
        }
    })    
}