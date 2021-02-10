<template>
  <div id="home">
    <slide-notice />

    <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      SlideNotice: () => import('@/components/client/Home/SlideNotice'),
      Articles: () => import('@/components/client/Home/Articles'),
      Banner: () => import('@/components/client/Home/Banner'),
      Social: () => import('@/components/client/Home/Social'),
      Subscribe: () => import('@/components/client/Home/Subscribe'),
    },
  }
</script>
