<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'ClientApp',

    components: {
      CoreDrawer: () => import('./core/Drawer'),
      CoreFooter: () => import('./core/Footer'),
      CoreAppBar: () => import('./core/AppBar'),
      CoreView: () => import('./core/View'),
    },
  }
</script>
