<template>

  <div class="row justify-evenly">
    <div class="col-xs-10 col-sm-10 col-md-10 q-mt-md">
      <q-card>
          <q-card-section class="text-white">
            <div class="text-h6">
              <q-btn label="Allocation" color="primary" @click="icon = true" /></div>
              <q-dialog v-model="icon">
                  <dialogbutton>

                      <template v-slot:title>Allocate Subject</template>
                       <baseinput :inputlabel="inputlabel"/>




                  </dialogbutton>

                </q-dialog>
        </q-card-section>

        <basetablemarkup :Tcol="columns" :Trow="rows"/>
      </q-card>
    </div>

  </div>

</template>

<script>
import {defineComponent,ref} from 'vue';
import Basetablemarkup from 'src/components/Basetable.vue';
import Dialogbutton from 'src/components/Dialogbutton.vue';
import Baseinput from 'src/components/Baseinput.vue';


export default defineComponent({
  name: 'Allocation',
    components:{
        Basetablemarkup,
        Dialogbutton,
        Baseinput
    },
    setup () {

      const columns=([
        {
          name: 'name',
          required: true,
          label: 'Subject',
          align: 'left',

          field: '`${row => row.name}`',

          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Mergename', field: 'calories', sortable: true },
        { name: 'fat', label: 'Class', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Session', field: 'carbs' },
        { name: 'protein', label: 'Action', field: 'protein' },

      ]
      )
    const rows=([
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
          },



        ]
        );
    const inputlabel=ref('Resumption Date')
     return{

      columns,
      rows,
       icon: ref(false),
       inputlabel
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
