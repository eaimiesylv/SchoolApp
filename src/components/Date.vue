<template>
  <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
</template>

<script>
import {defineComponent} from 'vue';
//import { useRouter } from 'vue-router'


export default defineComponent({
  name: 'Date',
 
    
  
});
</script>



