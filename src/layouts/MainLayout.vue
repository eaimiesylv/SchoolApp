
   
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg">
          <span class="q-ml-sm">News</span>
        </q-toolbar-title>

        <q-space />

        <q-input class="GNL__toolbar-input" 
            outlined dense v-model="search" 
            color="bg-grey-7 shadow-1" placeholder="Search for Staff or Student">
         
         
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
         
          <q-btn to="notification" round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notification</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item :to="link.path"  class="GNL__drawer-item" v-ripple v-for="link in links1" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item :to="link.path"   class="GNL__drawer-item" v-ripple v-for="link in links2" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item  :to="link.path"  class="GNL__drawer-item" v-ripple v-for="link in links3" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item  :to="link.path"  class="GNL__drawer-item" v-ripple v-for="link in links4" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container padding>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { fasGlobeAmericas, fasFlask } from '@quasar/extras/fontawesome-v5'
export default {
  name: 'GoogleNewsLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const showAdvanced = ref(false)
    const showDateOptions = ref(false)
    const exactPhrase = ref('')
    const hasWords = ref('')
    const excludeWords = ref('')
    const byWebsite = ref('')
    
    function onClear () {
      exactPhrase.value = ''
      hasWords.value = ''
      excludeWords.value = ''
      byWebsite.value = ''
    
    }
   
    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    return {
      leftDrawerOpen,
      search,
      showAdvanced,
      showDateOptions,
      exactPhrase,
      hasWords,
      excludeWords,
      byWebsite,
      
      links1: [
        { icon: 'flag', text: 'Dashboard',path:'/' },
        { icon: 'person', text: 'Users',path:'users' },
        { icon: 'web', text: 'Enter Score',path:'score' },
        { icon: 'star_border', text: 'Result',path:'result' },
        { icon: 'search', text: 'Broadsheet',path:'broadsheet' }
      ],
      links2: [
       
    
       
        { icon: 'flag', text: 'Merge Subject',path:'merge' },
        { icon: 'memory', text: 'Allocate Subject',path:'allocation' },
        { icon: 'local_movies', text: 'Assign Class Teacher',path:'classteacher' },
         { icon: fasGlobeAmericas, text: 'Add Subject' ,path:'subject'},
        
        
      ],
      links3: [
       { icon: 'directions_bike', text: 'Generate Card',path:'generatecard' },
        { icon: fasFlask, text: 'View Card',path:'viewcard' }
         
      ],

      links4: [
        { icon: 'directions_bike', text: 'Create Session',path:'session' },
         { icon: 'fitness_center', text: 'Create Assessment ' ,path:'assessment'},
        { icon: 'directions_bike', text: 'No of Time School Open',path:'schoolopen' },
        { icon: 'place', text: 'Resumption Date',path:'resumption' },
         { icon: 'memory', text: 'Register',path:'register' },
          { icon: 'flag', text: 'Class',path:'class' },
      
      ],
      onClear,
      
      toggleLeftDrawer
    }
  }
}
</script>

<style lang="sass">
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>

