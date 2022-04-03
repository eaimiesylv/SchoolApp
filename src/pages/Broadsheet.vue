<template>

  <div class="q-pa-md justify-center q-gutter-md">
    <q-card class="my-card absolute-center" style="min-width:500px">
     

      <q-separator inset />

      <q-card-section>
          <q-form  class="q-gutter-md">
            
              <baseselect :formlabel="select_class"></baseselect>
              <baseselect :formlabel="select_category"></baseselect>
            
           

            <div>
                 <basebutton :btnlabel="btnlabel"></basebutton>
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
  name: 'Broadsheet',
  components: { 
      Basebutton,
      Baseselect
  },
  setup() {
   const select_class=ref('Select Class');
   const select_category=ref('Select Type of Broadsheet');
   const btnlabel=ref('CHECK');
   const handleClick=()=>{
     console.log('welcome');
   }
   return {handleClick,select_class,select_category,btnlabel}
  }
});
</script>
