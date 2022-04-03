<template>
  <q-page class="row items-center justify-evenly" padding>
    <dashboard-component></dashboard-component>
  </q-page>
</template>

<script>

import DashboardComponent from 'src/components/Dashboard.vue';
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { DashboardComponent },
  setup() {
   
  }
});
</script>
