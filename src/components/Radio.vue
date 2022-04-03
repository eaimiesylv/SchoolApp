<template>

      <q-radio 
              :val="val"
              :value="value" 
              @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<script>
import {defineComponent} from 'vue';
//import { useRouter } from 'vue-router'


export default defineComponent({
  name: 'Radio',
  props:{
    value:{
      type:[String, Number],
      default: '',
       required:false
    },
     val:{
       required:true
    }
   
  },
  
  
});
</script>



