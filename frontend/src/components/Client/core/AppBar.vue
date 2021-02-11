<template>
  <v-app-bar app flat padless height="auto" class="fill-width">
    <v-container
      style="width: fill-width;">
    </v-container>
      <v-container
        style="width: 1000px; margin: 2px;"
        align="center"
        justify="center"
      >
        <v-row align="right">
        </v-row>
      </v-container>
    <v-container
      style="width: fill-width;">
      <v-container
        style="width: 1000px; margin: 4px;"
        align="center"
        justify="center"
      >
        <v-row align="left">
          <v-img
            :src="require('@/assets/logo_main.png')"
            contain
            class="mr-5"
            height="48"
            width="96"
            max-width="196"
            max-height="128"
            :to="`/`"
          />
          <v-btn
            v-for="link in links"
            :key="link.name"
            color="brown darken-3"
            text
            class="my-2"
            :to="link.href"
          >
            {{ link.name }}
          </v-btn>
          <v-btn
            v-for="sign in signs"
            :key="sign"
            color="brown darken-3"
            text
            align="right"
            class="my-2"
          >
            {{ sign }}
          </v-btn>
          <v-btn icon class="my-2">
            <v-icon size="24px"> fas fa-search </v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "CoreAppBar",
  data: () => ({
    links: [
      { name: "About", href: "/About" },
      { name: "Menu", href: "/Menu" },
      { name: "Shop", href: "/Shop" },
      { name: "Event", href: "/Event" },
      { name: "Q&A", href: "/QnA" },
    ],
    About: [],
    Menu: [
      { name: "Dessert", href: "/Menu/Dessert" },
      { name: "Coffee", href: "/Menu/Coffee" },
    ],
    Shop: [],
    Event: [],
    Qna: [],
    signs: ["Sign in", "Sign up"],
  }),
};
</script>
