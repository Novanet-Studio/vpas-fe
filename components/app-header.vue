<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img
          src="~/assets/images/vpas-logo.svg"
          alt="Grupo VPAS logo"
          class="header__logo-image"
        />
        <div
          class="header__bars"
          @click="toggleMenu"
          :class="`header__bars ${isExpanded && 'header__bars--expanded'}`"
        >
          <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
        </div>
      </div>
      <nav
        :class="`header__nav ${isExpanded && 'header__nav--expanded'}`"
        @click="toggleMenu"
      >
        <nuxt-link to="/" class="header__link">Inicio</nuxt-link>
        <nuxt-link to="/" class="header__link">Empresa</nuxt-link>
        <nuxt-link to="/" class="header__link">Productos</nuxt-link>
        <nuxt-link to="/" class="header__link"
          >Especies en Venezuela</nuxt-link
        >
        <nuxt-link to="/" class="header__link">Blog</nuxt-link>
        <nuxt-link to="/" class="header__link">Contacto</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
const isExpanded = ref(false);

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
