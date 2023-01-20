<template>
  <app-slider :slides="slides" />

  <section class="especies">
    <ul class="especies__lista">
      <li
        v-for="(especie, index) in especies"
        :key="index"
        class="especies__item"
      >
        <nuxt-img :src="especie.image" :alt="especie.alternativeText" />
        <h3 class="especies__titulo">{{ especie.title }}</h3>
        <nuxt-link :to="especie.link" class="especies__link"
          >Ver todas las especies</nuxt-link
        >
      </li>
    </ul>
  </section>

  <section class="mensaje">
    <app-separator altClass="app__separator-top" />
    <div v-html="mensaje" class="mensaje__text"></div>
    <app-separator altClass="app__separator-bottom" />
    <ul class="mensaje__iconos">
      <li
        v-for="(icono, index) in iconos"
        :key="index"
        class="mensaje__icono-contenedor"
      >
        <nuxt-img
          :src="icono.image"
          :alt="icono.name"
          class="mensaje__icono-imagen"
        />
      </li>
    </ul>
  </section>

  <section class="empresa">
    <ul class="empresa__lista">
      <li v-for="(item, index) in empresa" class="empresa__item">
        <div class="empresa__item-container">
          <h4 class="empresa__valor">{{ item.titulo }}</h4>
          <p class="empresa__descripcion">{{ item.descripcion }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const config = useAppConfig();

useHead({
  titleTemplate() {
    return config.pwaManifest.name;
  },
  title() {
    return config.pwaManifest.short_name;
  },
});

const slides = [
  {
    image: "/slides/vpas-fondo-mar-y-peces.webp",
    text: "<strong>Nos especializamos</strong> en el procesamiento y comercialización de pescados, mariscos, moluscos y demás especies marinas.",
    alternativeText: "Peces en aguas superficiales del océano",
  },
  {
    image: "/slides/vpas-mar-y- peces.webp",
    text: "Nos hemos dedicado a <strong>crecer</strong> de forma integral, para proveer los mercados nacionales e internacionales con productos de calidad",
    alternativeText: "Mar de aguas claras con peces en arrecife",
  },
];

const especies = [
  {
    image: "/vpas-especie-de-mar-pargo.webp",
    title: "Especies de mar",
    alternativetitle: "Pargo rojo",
    link: "/productos/especies-de-mar",
  },
  {
    image: "/vpas-especie-de-agua-dulce-cachama.webp",
    title: "Especies de agua dulce",
    alternativeText: "Cachama",
    link: "/productos/especies-de-agua-dulce",
  },
  {
    image: "/vpas-marisco-langosta.webp",
    title: "Mariscos",
    alternativeText: "Langosta",
    link: "/productos/mariscos",
  },
];

const mensaje = `Proveemos los mercados <span class="mensaje__span">nacionales e internacionales</span> con productos  de calidad`;

const iconos = [
  {
    name: "Icono Pargo",
    image: "/vpas-icono-pargo.webp",
  },
  {
    name: "Icono Cachama",
    image: "/vpas-icono-cachama.webp",
  },
  {
    name: "Icono Langosta",
    image: "/vpas-icono-langosta.webp",
  },
];

const empresa = [
  {
    titulo: "¿Quiénes somos?",
    descripcion:
      "Una empresa del sector alimentos que se especializa en el procesamiento y comercia-lización de pescados, mariscos, moluscosy demás especies marinas.",
  },
  {
    titulo: "Misión",
    descripcion:
      "Convertirnos en la empresa venezolana por excelencia en el procesamiento, comercialización y exportación de recursos hidrobiológicos.",
  },
  {
    titulo: "Visión",
    descripcion:
      "Proveer a nuestros clientes nacionales e internacionales productos de calidad. Participar de manera sostenida y creciente en el desarrollo de la industria alimentaria.",
  },
];
</script>
