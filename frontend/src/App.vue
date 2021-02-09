<template>
  <v-app>
    <client-app />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    ClientApp: () => import("./components/client/ClientApp"),
  },
};
</script>
