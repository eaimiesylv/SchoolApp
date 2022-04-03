<template>

  <div class="q-pa-md justify-center q-gutter-md">
    <q-card class="my-card absolute-center" style="min-width:500px">
     

      <q-separator inset />

      <q-card-section>
          <q-form  class="q-gutter-md">
            
              <baseinput :inputlabel="inputlabel"/>
               <baseinput :inputlabel="closelabel"/>
            
           

            <div>
                 <basebutton :btnlabel="btnlabel"></basebutton>
            </div>
          </q-form>
      </q-card-section>
    </q-card>
  </div>
 
</template>

<script>
import Baseinput from 'src/components/Baseinput.vue';
import Basebutton from 'src/components/Basebutton.vue';
import { defineComponent,ref} from 'vue';

export default defineComponent({
  name: 'Resumption',
  components: { 
      Basebutton,
      Baseinput
  },
  setup() {
     const inputlabel=ref('Resumption Date')
    const closelabel=ref('Closing Date')
    const btnlabel=ref('Submit')
   const handleClick=()=>{
     console.log('welcome');
   }
   return {handleClick,closelabel,inputlabel,btnlabel}
  }
});
</script>
