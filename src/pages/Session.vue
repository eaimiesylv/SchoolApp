<template>

    <div class="row justify-evenly">
      <div class="col-xs-10 col-sm-10 col-md-10 q-mt-md">
          <q-card>
              <q-card-section class="text-white">
                  <div class="text-h6"> <q-btn label="Create Session" color="primary" @click="icon = true" /></div>
    <q-dialog v-model="icon">
      <q-card style="width:100%">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Select Subjects To Merge</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form  class="q-gutter-md">
            <q-select
              name="preferred_genre"
            
            
              color="primary"
              filled
              clearable
              label="Session"
            />

            <q-select
              name="preferred_genre"
            
            
              color="primary"
              filled
              clearable
              label="Class"
            />

            <q-select
              name="accepted_genres"
              
              color="primary"
              filled
              clearable
              label="Type"
            />

            <div>
              <q-btn label="Continue" @click="handleClick()" type="submit" color="primary"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
            </q-card-section>

              <q-markup-table>
                <thead>
                  <tr>
                    <th class="text-left">#</th>
                    <th class="text-right">Subject</th>
                    <th class="text-right">Merge Name</th>
                  
                    <th class="text-right">Class</th>
                     <th class="text-right">Session</th>
                  
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">A</td>
                    <td class="text-right">10</td>
                    <td class="text-right">6</td>
                    <td class="text-right">24</td>
                      <td class="text-right">6</td>
                    <td class="text-right">24</td>
                    
                  
                  </tr>
                  <tr>
                    <td class="text-left">B</td>
                    <td class="text-right">159</td>
                    <td class="text-right">6</td>
                    <td class="text-right">24</td>
                      <td class="text-right">6</td>
                    <td class="text-right">24</td>
                  </tr>
                  <tr>
                    <td class="text-left">TOTAL</td>
                    <td class="text-right">159</td>
                    <td class="text-right">6</td>
                    <td class="text-right">24</td>
                      <td class="text-right">6</td>
                    <td class="text-right">24</td>
                  </tr>
                  
                </tbody>
              </q-markup-table>
            </q-card>
      </div>
      
    </div>
     
</template>

<script>
import {defineComponent,ref} from 'vue';


export default defineComponent({
  name: 'Session',
    setup () {
    const handleClick=()=>{console.log('ue')}
    return {
      icon: ref(false),
      handleClick

    }
  }
});
</script>
<style scoped>
.wrap{
  background:black !important;
  height:100% !important;
}
</style>


