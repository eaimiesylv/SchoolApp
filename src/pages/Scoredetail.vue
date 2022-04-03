<template>
  <div class="q-pa-md vertical-middle q-gutter-md" style="width:  100%">
    

    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-none">
           <q-linear-progress size="25px" :value="progress1" color="accent">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="accent" :label="progressLabel1" />
              </div>
            </q-linear-progress>
      </q-card-section>

       <q-separator inset />

      <q-card-section>
         

    <q-list bordered class="rounded-borders" >
      

      <q-separator spaced />

      

      <q-item>
        <q-item-section  top>
                  <q-img
              src="../assets/passport/test.jpg"
              spinner-color="white"
              style="height: 50px; max-width: 50px"
            />
        </q-item-section>

        <q-item-section top>
             <q-item-label lines="1">
            <span class="text-weight-medium">Okom Emmanuel</span>
           
          </q-item-label>
        </q-item-section>

        <q-item-section top>
        
               <q-input />
          
         
        
          
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-7 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
           
         
          </div>
        </q-item-section>
      </q-item>
      







    </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

import { defineComponent,ref,computed} from 'vue';

export default defineComponent({
  name: 'Scoredetail',
  components: { 

  },
  setup() {
    const progress1 = ref(0.3)
   

    return {
      progress1,
      progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + '%'),

    
    }
  }
});
</script>
