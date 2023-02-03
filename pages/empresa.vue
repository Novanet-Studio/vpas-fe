<template>
  <div class="empresa">
    <header class="empresa__header">
      <div class="empresa__header-content">
        <h2 class="empresa__header-title">Empresa</h2>
        <p class="empresa__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          saepe. Et debitis quam, soluta explicabo facere voluptas quasi. Cum,
          ut.
        </p>
      </div>
      <div class="empresa__header-action">
        <button class="btn">Más información</button>
      </div>
      <!-- <app-div class="absolute z-20" /> -->
    </header>
    <section class="empresa__container">
      <div class="empresa__inner-section">
        <nuxt-img class="empresa__image" src="/noticias/vpas-noticia-1.webp" />
        <div class="empresa__content">
          <h3 class="empresa__section-title">¿Quienes somos?</h3>
          <div class="empresa__title-divition" />
          <p class="empresa__section-content">
            Una empresa del sector alimentos que se especializa en el
            procesamiento y comercialización de pescados, mariscos, moluscos y
            demás especies marinas. Desde nuestra fundación, en el año 2011, nos
            hemos dedicado a crecer de forma integral, para proveer los mercados
            nacionales e internacionales con productos de calidad. Contamos con
            cuatro plantas de procesamiento industrial en Venezuela, con más de
            200 trabajadores, conformado por profesionales, técnicos y personal
            especializado que labora en nuestras líneas de producción, control
            de calidad y comercialización. Acopiamos, procesamos y
            comercializamos nuestros productos con estrictos controles de
            calidad, basados en principios de sustentabilidad.
          </p>
        </div>
      </div>

      <div class="empresa__inner-section">
        <nuxt-img class="empresa__image" src="/noticias/vpas-noticia-2.webp" />
        <div class="empresa__content">
          <h3 class="empresa__section-title">Misión</h3>
          <div class="empresa__title-divition" />
          <ul class="empresa__section-list">
            <li class="empresa__section-item">lorem ipsum 1</li>
            <li class="empresa__section-item">lorem ipsum 2</li>
            <li class="empresa__section-item">lorem ipsum 3</li>
          </ul>
        </div>
      </div>

      <div class="empresa__inner-section">
        <nuxt-img class="empresa__image" src="/noticias/vpas-noticia-3.webp" />
        <div class="empresa__content">
          <h3 class="empresa__section-title">Visión</h3>
          <div class="empresa__title-divition" />
          <ul class="empresa__section-list">
            <li class="empresa__section-item">lorem ipsum 1</li>
            <li class="empresa__section-item">lorem ipsum 2</li>
            <li class="empresa__section-item">lorem ipsum 3</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
