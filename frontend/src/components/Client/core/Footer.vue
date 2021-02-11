<template>
  <v-footer padless height="auto" class="indigo w-100">
    <v-card flat tile class="indigo white--text text-center mx-auto">
      <v-card-text>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-card-text>
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
          
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Umjirang Dessert Cafe</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "CoreFooter",
  data: () => ({
    links: [
      "About us",
      "Directions",
      "Franchisor",
      "Site map"
    ],
    icons: ["mdi-google","mdi-facebook", "mdi-instagram"],
  }),
};
</script>

<i18n>
{
  "en": {
    "about": "About us",
    "roughmap": "Directions",
    "franchisor": "Franchisor",
    "sitemap": "Site map",
  },
  "ko": {
    "about": "엄지랑",
    "roughmap": "찾아오시는 길",
    "franchisor": "가맹 상담",
    "sitemap": "사이트 맵",
  }
}
</i18n>
