<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar  >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          TaskTrove
        </q-toolbar-title>

        <div> <q-icon
          v-for="size in ['xl']"
          :key="size"
          :size="size"
          name="task"
        /></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoints="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-4"
        >
        Navigation
        </q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>

          <q-item-section >
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
    </q-drawer>


    <q-footer elevated class="my-footer">
      <q-toolbar >
        <q-toolbar-title>
          <q-tabs >
          <q-route-tab 
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to" 
          :icon="nav.icon" 
          :label="nav.label" />
          
        </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '#/settings'
  },

]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      // essentialLinks: linksData,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/',
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings',
        }

      ]

    }
  }
}
</script>

<style lang="scss">
  @media screen and (max-width: 768px){
    .q-footer {
      display: none;
    }
  }
  .q-drawer {
    .q-router-link--exact-active{
      color: white !important;
    }
  }
  
</style>