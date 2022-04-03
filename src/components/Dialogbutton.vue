<template>

      <q-card style="width:100%">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6"><slot name="title"></slot></div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form  class="q-gutter-md">
              <slot></slot>
            <div>

              <q-btn label="Continue" type="submit" color="primary"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>



</template>

<script>
import { defineComponent} from 'vue';


export default defineComponent({
  name: 'Dialogbutton',
props:{
  formlabel:{
    required:true,

  },
  icon:{
    required:true,

  }
}

});
// <q-dialog v-model="icon">
</script>
<style scoped>

</style>
