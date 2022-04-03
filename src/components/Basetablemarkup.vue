<template>

    <div class="q-pa-sm">
      <q-card>
        <q-card-section v-bind:class="[color, 'text-white']">
        <div class="text-h6">{{clas}} </div>
       
      </q-card-section>

              <q-markup-table>
                <thead>
                  <tr>
                    <th class="text-left">Arms</th>
                    <th class="text-right">Males</th>
                    <th class="text-right">Female</th>

                    <th class="text-right">Total</th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(arm, index) in allarms" :key="index">
                    <p style="display:none">{{mtotal=mtotal+(obj[arm]['m'] || 0)}} {{ftotal=ftotal+(obj[arm]['f'] || 0)}}</p>
                    <td class="text-left">{{arm}}</td>
                    <td class="text-right">{{obj[arm]['m'] || 0}}</td>
                    <td class="text-right">{{obj[arm]['f'] || 0}}</td>
                    <td class="text-right">{{(obj[arm]['m']|| 0)+(obj[arm]['f']||0)}}</td>


                  </tr>
                 
                  <tr>
                    <td class="text-left">TOTAL</td>
                    <td class="text-right">{{mtotal}}</td>
                    <td class="text-right">{{ftotal}}</td>
                    <td class="text-right">{{mtotal+ftotal}}</td>
                  </tr>

                </tbody>
              </q-markup-table>
            </q-card>
   </div>
</template>

<script>
import {defineComponent,onMounted} from 'vue';
//import {useStore} from 'vuex';


export default defineComponent({
  name: 'Basetablemarkup',
  props:{
   
     obj:{
       type:Object,
       required:true
    },
     clas:{
       type:String,
       required:true
    },
     colno:{
       type:Number,
       required:true
    },
   
   
  },
    setup(props){
  let colobj={"1":"bg-primary","2":"bg-purple","3":"bg-teal","4":"bg-red","5":"bg-indigo","6":"bg-blue",
              "7":"bg-cyan","8":"bg-orange","9":"bg-brown","10":"bg-green","11":"bg-blue-10","12":"bg-black", 
            }
  //console.log(props.colno)
   let color=colobj[props.colno];
   let mtotal=0;
   let ftotal=0;
   
   let allarms = Object.keys(props.obj);
   allarms.sort()
  onMounted(() => {})
    return{
      allarms,
      mtotal,
      ftotal,
      color,
      colobj
    }
  
  }

});
</script>
<style scoped>

</style>
