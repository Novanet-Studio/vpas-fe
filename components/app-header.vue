<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img
          src="~/assets/images/vpas-logo.svg"
          alt="Grupo VPAS logo"
          class="header__logo-image"
        />
      </div>
      <div class="header__nav">
        <nuxt-link to="/" class="header__link">Inicio</nuxt-link>
        <nuxt-link to="/empresa" class="header__link">Empresa</nuxt-link>
        <nuxt-link to="/productos" class="header__link">Productos</nuxt-link>
        <nuxt-link to="/especies" class="header__link"
          >Especies en Venezuela</nuxt-link
        >
        <nuxt-link to="/blog" class="header__link">Blog</nuxt-link>
        <nuxt-link to="/" class="header__link">Contacto</nuxt-link>
      </div>
    </div>
  </header>
</template>
