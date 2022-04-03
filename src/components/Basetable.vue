
<template>

    <q-table
         title="Treats"
           :rows="Trow"
           :columns="Tcol"
            row-key="name"

    ></q-table>

</template>








<script>


import { defineComponent, ref} from 'vue';
export default defineComponent({
  name: 'Users',
  components: {

  },
  props:{


   },
  setup() {




   console.log('welcome');
  const tab=ref('mails');
    return{
      tab
    }
  }
});
</script>
