<template>
  <div class="especies">
    <section class="main-notice">
      <nuxt-img
        class="main-notice__image"
        src="/slides/vpas-mar-y-peces.webp"
        alt="Notice image"
      />
      <div class="main-notice__content">
        <div class="">
          <h2 class="main-notice__title">Especies en Venezuela</h2>
          <p class="main-notice__description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <button class="btn btn--small btn--self-center">Click aquí</button>
      </div>
    </section>
    <section class="especies__info">
      <p class="especies__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
        accusantium amet voluptas quisquam totam fuga quod eaque omnis ipsum
        tenetur architecto explicabo odit dolores, impedit nihil accusamus
        consectetur repellat praesentium!
      </p>
      <button class="btn btn--small btn--bdazzled">Más información</button>
    </section>
    <section class="especies__content">
      <div class="especies__content-header">
        <a class="especies__item-link especies__item-link--active" href="#"
          >Especies de mar</a
        >
        <a class="especies__item-link" href="#">Especies de agua dulce</a>
        <a class="especies__item-link" href="#">Mariscos</a>
      </div>
      <div class="especies__cards-wrapper">
        <app-card
          title="Especie"
          image="/vpas-especie-de-mar-pargo.webp"
          image-alt="image 1"
          v-for="i in 6"
          :key="i"
        />
      </div>
    </section>
  </div>
</template>
