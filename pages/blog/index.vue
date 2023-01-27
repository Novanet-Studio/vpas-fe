<template>
  <div class="blog">
    <section class="main-notice">
      <nuxt-img
        class="main-notice__image"
        src="/slides/vpas-mar-y-peces.webp"
        alt="Notice image"
      />
      <div class="main-notice__content">
        <div>
          <h2 class="main-notice__title">Titulo de noticia</h2>
          <p class="main-notice__description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <button class="btn btn--small btn--self-center">Click aquí</button>
      </div>
    </section>
    <h3 class="heading-2 text-center py-8 mt-12">Noticias</h3>
    <section class="blog__content">
      <div class="blog__cards-wrapper">
        <nuxt-link :to="`/blog/${index}`" v-for="(news, index) in noticias">
          <app-card
            :title="news.title"
            :image="news.image"
            :image-alt="news?.alternativeText ?? ''"
            :key="index"
          />
        </nuxt-link>
      </div>
    </section>
  </div>
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
