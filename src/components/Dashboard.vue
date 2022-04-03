<template>

       
      
     <div class="row space-evenly">
     
        <div class="col-xs-12 col-sm-12 col-md-6" v-for="(stds, index) in std"  :key="index">
          <p style="display:none">{{count++}}</p>
          <!-- {{std}}
           <p  style="color:red" v-for="(pro, i) in stds" :key="i">{{pro}}</p> -->
              
                  <basetablemarkup  :colno="count" :clas="index" :obj="stds"></basetablemarkup>
              
            
        </div>
      
       </div>  
          



</template>

<script>
import {defineComponent,onMounted,computed,onBeforeMount} from 'vue';
import {useStore} from 'vuex';
import Basetablemarkup from 'src/components/Basetablemarkup.vue';


export default defineComponent({
  name: 'Dashboard',
  components: { Basetablemarkup },
  setup() {
     const store = useStore();
    
    let std = computed(() => store.getters["allstudent/allstdGetters"]['allcla']);
     let count=1;
    onMounted(() => {
         
        store.dispatch('allclass/classAction')
        store.dispatch('allstudent/allstudentAction')
        store.dispatch('allsubject/allsubjectAction')
        // console.log('this component is mounted')
        // std=store.getters["allstudent/allstdGetters"]
         //console.log(std);
        
    })
    onBeforeMount(()=>{
       
    })
    return{
      std,
      count
      
    }
  
  }
});

</script>
