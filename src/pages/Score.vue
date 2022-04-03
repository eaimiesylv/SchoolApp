<template>

  <div class="q-pa-md justify-center q-gutter-md">
    <q-card class="my-card absolute-center" style="min-width:500px">
     

      <q-separator inset />

      <q-card-section>
          <q-form  class="q-gutter-md">
            <q-select
              name="preferred_genre"
              color="primary"
              v-model="klasmodel"
              filled
              clearable
              label="Select Class"
              :options="filteredClas" 
            />
            <q-select
              name="preferred_genre"
              color="primary"
              v-model="submodel"
              filled
              clearable
              label="Select Subject"
              :options="filteredsub" 
            />
              <!--<baseselect :formlabel="select_subject" v-model="state"></baseselect>-->
           <div>
             <q-btn label="btnlabel" @click.stop="handleClick()"  color="primary"/>
            </div>
          </q-form>
      </q-card-section>
    </q-card>
  </div>
 
</template>

<script>

import Baseselect from 'src/components/Baseselect.vue';
//import Basebutton from 'src/components/Basebutton.vue';
//import { useRouter } from 'vue-router'
import {useStore} from 'vuex';
import { defineComponent,ref,computed} from 'vue';

export default defineComponent({
  name: 'Score',
  components: { 
    //  Basebutton,
      Baseselect
  },
  setup() {
     const state=ref('');
    const select_class=ref('Select Class');
    const select_subject=ref('Select Subject');
    const btnlabel=ref('Continue');
    let filteredClas =ref([])
    let filteredsub =ref([])
    const klasmodel=ref('')
     const submodel=ref('')
    //const router = useRouter()
    const store = useStore();
    let klas = computed(() => store.getters["allstudent/allstdGetters"]['klas']); 
     
    filteredClas= klas.value.map(x => {return {label: x.label, value: x}})
    

     let subj = computed(() => store.getters["allsubject/allsubjectGetters"]['allsubject']); 
     filteredsub= subj.value.map(x => {return {label: x.subject, value: x.id}})
     console.log(filteredsub)
    
    const handleClick = () => {
     /// await router.push('/Scoredetail');
     //let p=JSON.parse(JSON.stringify(model.value));
     //console.log(p.label);
    }

    return { handleClick,select_class,select_subject,btnlabel,klas,state,klasmodel,submodel,filteredClas,filteredsub,subj}
  }
});
</script>
