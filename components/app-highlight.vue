<template>
  <section class="app-highlight">
    <div class="app-highlight__wrapper">
      <nuxt-picture
        class="app-highlight__image"
        :src="imagen"
        alt="Notice image"
      />
      <div class="app-highlight__content">
        <h2 class="app-highlight__title">{{ titulo }}</h2>
        <p class="app-highlight__description">
          {{ descripcion }}
        </p>
        <button class="btn btn--small">{{ textoBoton }}</button>
      </div>
      <app-div class="app-div" inverted />
    </div>
  </section>
</template>

<script lang="ts" setup>
type Props = {
  titulo: string;
  descripcion: string;
  textoBoton: string;
  imagen: string;
};

defineProps<Props>();
</script>
