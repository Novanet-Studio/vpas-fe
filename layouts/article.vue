<template>
  <transition name="fade" appear>
    <div>
      <app-header />
      <div class="article-header">
        <nuxt-picture
          provider="cloudinary"
          src="/v1675095252/vpas/uploads/vpas_fondo_mar_y_peces_854a29677a.webp"
          alt="Fondo mar y peces"
          sizes="xs:100vw sm:640 md:768 lg:1024 xl:1280 xxl:1920"
        />
        <div class="article-header__text">
          Noticias y artículos <br />
          de interés
        </div>
        <app-div altClass="app__div-slider" />
      </div>
      <div class="wrapper">
        <main class="main">
          <slot />
          <app-separator altClass="app__separator-bottom mt-4" />
        </main>
        <aside class="aside">
          <app-card
            v-for="(news, index) in noticias"
            :title="news.title"
            :image="news.image"
            :image-alt="news?.alternativeText ?? ''"
            :key="index"
          />
        </aside>
      </div>
      <app-footer />
    </div>
  </transition>
</template>

<script lang="ts" setup>
const noticias = [
  {
    image: '/noticias/vpas-noticia-1.webp',
    title:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
    alternativetitle: 'Pargo rojo',
  },
  {
    image: '/noticias/vpas-noticia-2.webp',
    title:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    alternativeText: 'Cachama',
  },
  {
    image: '/noticias/vpas-noticia-3.webp',
    title:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihi',
    alternativeText: 'Langosta',
  },
];
</script>

<style scoped>
.wrapper {
  @apply grid px-8  place-content-center md:(grid-cols-[70%,30%] px-48 my-24);
}

.aside {
  @apply flex flex-col gap-8 md:(pl-8 border-l-[1px] border-l-[#767676]);
}

.article-header {
  @apply relative;
}

.article-header__text {
  @apply absolute text-xl top-[40%] md:text-4xl text-left text-white hyphens-none px-16 font-bold;
}
</style>
