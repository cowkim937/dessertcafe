<template>
  <v-container id="home"
    style="max-width: 1000px; margin-top:60px;"> 

    <slide-notice />

    <articles>    
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      SlideNotice: () => import('@/components/Client/Home/SlideNotice'),
      Articles: () => import('@/components/Client/Home/Articles'),
      Banner: () => import('@/components/Client/Home/Banner'),
      Social: () => import('@/components/Client/Home/Social'),
      Subscribe: () => import('@/components/Client/Home/Subscribe'),
    },
  }
</script>
