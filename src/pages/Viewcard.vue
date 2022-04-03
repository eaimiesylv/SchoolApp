<template>

  <div class="q-pa-md justify-center q-gutter-md">
    <q-card class="my-card absolute-center" style="min-width:500px">
     

      <q-separator inset />

      <q-card-section>
          <q-form  class="q-gutter-md">
            
              <baseselect :formlabel="formlabel"></baseselect>
           
           

            <div>
                 <basebutton :btnlabel="btnlabel" />
            </div>
          </q-form>
      </q-card-section>
    </q-card>
  </div>
 
</template>

<script>
import Baseselect from 'src/components/Baseselect.vue';
import Basebutton from 'src/components/Basebutton.vue';
import { defineComponent,ref} from 'vue';

export default defineComponent({
  name: 'Viewcard',
  components: { 
      Basebutton,
      Baseselect
  },
  setup() {
   console.log('welcome');
   const btnlabel=ref('VIEW CARD');
   const formlabel=ref('SELECT TYPE');
   const handleClick=()=>{
     console.log('welcome');
   }
   return {handleClick,btnlabel,formlabel}
  }
});
</script>
