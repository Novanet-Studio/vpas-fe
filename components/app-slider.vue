<template>
  <div class="swiper">
    <swiper
      :slider-per-view="1"
      :space-between="0"
      loop
      navigation
      :modules="[Autoplay, Navigation, Pagination]"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="swiper__slide"
      >
        <nuxt-picture
          :src="slide.imagen.data.attributes.url"
          :alt="slide.imagen.data.attributes.alternativeText"
          sizes="xs:100vw sm:640 md:768 lg:1024 xl:1280 xxl:1920"
        />
        <div class="swiper__text" v-html="markdown.render(slide.texto)"></div>
      </swiper-slide>
    </swiper>
    <app-div altClass="app__div-slider" />
  </div>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MarkdownIt from 'markdown-it';
const markdown = new MarkdownIt();

type Props = {
  slides: any;
};

defineProps<Props>();
</script>
