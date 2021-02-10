<template>
  <v-app-bar app flat padless height="auto" align="center" min-height="60" color="orange lighten-2" class="fill-width">  
    <div max-width="1000px">
      <v-row align="left" class="my-auto">
        <v-img
          :src="require('../../../assets/logo_main.png')"
          class="mr-5 mx-5"
          contain
          height="48"
          width="96"
          max-width="196"
          max-height="128"
          @click="$vuetify.goTo(0)"
        />
        
        <v-btn
          v-for="link in links"
          :key="link"
          color="brown darken-3"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "CoreAppBar",
  data: () => ({
    links: ["About", "Menu", "Shop", "Event", "Q&A"],
    About: [],
    Menu: [],
    Shop: [],
    Event: [],
    Qna: [],
  }),
};
</script>
