<template>
  <div class="app__hero">
    <div class="app__hero-content">
      <h2 class="app__hero-title">{{ titulo }}</h2>
      <p class="app__hero-description">
        {{ descripcion }}
      </p>
    </div>    
    <app-div class="app-div" inverted />
  </div>
</template>

<script lang="ts" setup>
type Props = {
  titulo: string;
  descripcion: string;

};

defineProps<Props>();
</script>
