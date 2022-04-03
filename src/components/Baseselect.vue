<template>

   <q-select
              name="preferred_genre"
              color="primary"
              filled
              clearable
              :label="formlabel"
            />

</template>

<script>
import { defineComponent} from 'vue';


export default defineComponent({
  name: 'Baseselect',
props:{
  formlabel:{
    required:true,
 }
}

});
</script>
<style scoped>

</style>
