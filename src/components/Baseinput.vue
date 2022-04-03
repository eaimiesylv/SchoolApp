<template>


      <q-input filled  
              
              :value="value" 
              @input="$emit('update:value', $event.target.value)"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              
              />

         



</template>

<script>
import {
  defineComponent,

} from 'vue';


export default defineComponent({
  name: 'Baseinput',
  props:{
    
    value:{
      type:[String, Number],
      default: '',
       required:false
    }
  },
  
});
</script>
