<template>
  <div class="product">
    <header class="product__header">
      <div class="product__header-content">
        <h2 class="product__header-title">Productos</h2>
        <p class="product__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          saepe. Et debitis quam, soluta explicabo facere voluptas quasi. Cum,
          ut.
        </p>
      </div>
      <div class="product__header-action">
        <button class="btn">Más información</button>
      </div>
    </header>
    <h3 class="product__header">Pargo</h3>
    <div class="product__content">
      <aside class="product__aside"></aside>
      <section class="product__main">
        <div class="product__actions">
          <button>Cebadal</button>
          <button>Conoro</button>
          <button>Cunaro</button>
          <button>Gallo</button>
          <button>Guanapo</button>
        </div>
        <nuxt-img class="product__main-image" />
        <app-separator />
        <div class="product__information">
          <div class="product__name-wrapper">
            <h5>Nombre técnico</h5>
            <p>Mutton Snapper</p>
          </div>
          <div class="product__presentation">
            <div class="product-card">
              <nuxt-img class="product-card__image" src="" alt="Image" />
              <h6 class="product-card__title">Filete</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
