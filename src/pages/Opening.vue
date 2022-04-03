<template>

  <div class="q-pa-md justify-center q-gutter-md">
    <q-card class="my-card absolute-center" style="min-width:500px">
     

      <q-separator inset />

      <q-card-section>
          <q-form  class="q-gutter-md">
            
              <baseselect></baseselect>
              <baseselect></baseselect>
              <baseselect></baseselect>
           

            <div>
                 <basebutton></basebutton>
            </div>
          </q-form>
      </q-card-section>
    </q-card>
  </div>
 
</template>

<script>
import Baseselect from 'src/components/Baseselect.vue';
import Basebutton from 'src/components/Basebutton.vue';
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'Opening',
  components: { 
      Basebutton,
      Baseselect
  },
  setup() {
   console.log('welcome');
   const handleClick=()=>{
     console.log('welcome');
   }
   return {handleClick}
  }
});
</script>
