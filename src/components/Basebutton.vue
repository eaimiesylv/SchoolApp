<template>

     <q-btn :label="btnlabel" @click.stop="handleClick()" type="submit" color="primary"/>

     
</template>

<script>
import {defineComponent} from 'vue';
import {axiosPost} from '../models/Function';
import { useQuasar } from 'quasar'
//import { useRouter } from 'vue-router'


export default defineComponent({
  name: 'Basebutton',
  props:{
    btnlabel:{
       required:true
    },
    url:{
       required:true
    },
     obj:{
       type:Object,
       required:true
    },
    methodtype:{
       type:String,
       required:true
    },
   
  },
    setup(props) 
    {
      const $q = useQuasar()
      function handleClick()
      {
          let type='positive';
          let iconMsg='done';
          axiosPost(props.url,props.obj)
          .then
          (function(result)
            {
              if(result !=='201')
                {
                 type='negative';
                 iconMsg='warning';
                }
              else{result='Submission Successful'}
               $q.notify({ message: `${result}`, type: `${type}`, position:'top', multiLine: true,icon: `${iconMsg}`,})
            }
          )
          
        
      }
      return { handleClick}
    }
});
</script>



