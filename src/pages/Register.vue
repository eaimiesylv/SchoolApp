<template>

  <div class="q-pa-md row justify-center q-gutter-md">
   
      <q-card class="my-card" style="width:500px;max-width:500px">
     

      <q-separator inset />

      <q-card-section>
          <q-form  class="q-gutter-md">
            
              <baseinput label="Surname name" v-model="surname"></baseinput>
               <baseinput label="Middle name" v-model="middlename"></baseinput>
                <baseinput label="First name" v-model="firstname"></baseinput>
                 <baseinput label="Username" v-model="username" v-on:change="search(username)"></baseinput>
                    <q-radio v-model="sex" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="m" label="Male" />
                     <q-radio v-model="sex" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="f" label="Female" />
                  
                   <baseinput label="Nationality" v-model="nationality"></baseinput>
                    <baseinput label="State" v-model="state"></baseinput>
                     <baseinput label="Lga" v-model="lga"></baseinput>
                      <baseinput label="Address" v-model="address"></baseinput>
                      
                          <q-input filled v-model="date" mask="date" :rules="['date']">
                            <template v-slot:append>
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
                          </q-input>
                    
                        <baseinput label="Email" v-model="email"></baseinput>
                        
                         <baseinput label="Password" v-model="password"></baseinput>
                         
                        

            
            
           

            <div class="row justify-between">
                 
                 <basebutton :btnlabel="btnlabel" :obj="{surname:surname,
                                                middlename:middlename,
                                                firstname:firstname,
                                                sex:sex,
                                                username:username,
                                                regno:'',
                                                nationality:nationality,
                                                state:state,
                                                lga:lga,
                                                address:address,
                                                dob:date,
                                                email:email,
                                                password:password,
                                                role:1,
                                                session_id:sessionid,
                                                }" 
                                              url="register"
                                              methodtype="post">
                </basebutton>
                <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm"  v-on:click="onreset()"  />
            </div>
          </q-form>
      </q-card-section>
    </q-card>

  </div>
 
</template>

<script>
import Baseselect from 'src/components/Baseselect.vue';
import Baseinput from 'src/components/Baseinput.vue';
import Basebutton from 'src/components/Basebutton.vue';
import {axiosGetid} from '../models/Function';
import { defineComponent,ref} from 'vue';
import { useQuasar } from 'quasar'


export default defineComponent({
  name: 'Register',
  components: { 
      Basebutton,
      Baseselect,
      Baseinput,
      
  },
  setup() {
      const $q = useQuasar()
      const surname=ref('');
      const middlename=ref('');
      const firstname=ref('');
      const username=ref('');
      const nationality=ref('');
      const state=ref('');
      const lga=ref('');
      const address=ref('');
      const email=ref('');
      const password=ref('');
      const btnlabel=ref('Register');
      const sessionid=ref('1');
      const date=ref('2019/02/01');
      
      function search(user){
      
        let url='register/username';
        axiosGetid(user,url)
          .then
          (function(result)
            {
             
              if(result >0)
                {
  
                 $q.notify({ message: `Username already exist`, type:`negative`, position:'top', multiLine: true,icon:`warning`,})
                 username.value=""
               }
            }
          )
        
      };
    function onreset(){
      surname.value=""
      middlename.value=""
      firstname.value=""
      username.value=""
      nationality.value=""
      state.value=""
      lga.value=""
      address.value=""
      email.value=""
      password.value=""

    }
     
  
   return {surname,middlename , firstname,username,nationality,
                  state,lga,address,email,password,btnlabel,date,sex: ref('m'),sessionid,search,onreset}
  }
});
</script>
