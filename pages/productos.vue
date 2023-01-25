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
      <!-- <app-div class="absolute z-20" /> -->
    </header>
    <div class="product__content">
      <aside class="p-aside">
        <accordion-list>
          <accordion-item>
            <template #summary>Especies de mar</template>
            <!-- <template #icon>+</template> -->
            <accordion-list open-multiple-items>
              <accordion-item>
                <template #summary>Medregal</template>
                <!-- <template #icon></template> -->
                Some nested content
              </accordion-item>
              <accordion-item>
                <template #summary>Mero</template>
                <ul class="fish-list">
                  <li class="fish-item">fish-1</li>
                  <li class="fish-item">fish-2</li>
                  <li class="fish-item">fish-3</li>
                  <li class="fish-item">fish-4</li>
                  <li class="fish-item">fish-5</li>
                </ul>
              </accordion-item>
            </accordion-list>
          </accordion-item>
        </accordion-list>
      </aside>
      <section class="product__main">
        <h3 class="product__title">Pargo</h3>
        <div class="product__actions">
          <button
            class="product__btn product__btn--active product__btn--alt-tl"
          >
            Cebadal
          </button>
          <button class="product__btn">Conoro</button>
          <button class="product__btn">Cunaro</button>
          <button class="product__btn">Gallo</button>
          <button class="product__btn product__btn--alt-br">Guanapo</button>
        </div>
        <nuxt-img
          src="/slides/vpas-mar-y-peces.webp"
          class="product__main-image"
        />
        <app-separator class="product__separator" />
        <div class="product-info">
          <div class="product-info__name-wrapper">
            <h5 class="product-info__title">Nombre técnico</h5>
            <p class="product-info__content">Mutton Snapper</p>
          </div>
          <h5 class="product-info__title">Presentación</h5>
          <div class="product-info__presentation">
            <div class="product-card">
              <nuxt-img
                src="/slides/vpas-fondo-mar-y-peces.webp"
                class="product-card__image"
                alt="Image"
              />
              <h6 class="product-card__title">Filete</h6>
            </div>

            <div class="product-card">
              <nuxt-img
                src="/slides/vpas-fondo-mar-y-peces.webp"
                class="product-card__image"
                alt="Image"
              />
              <h6 class="product-card__title">Entero</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
:global(:root) {
  --acco-border-radius: 10px;
  --acco-light: #eeeeee;
  --acco-lightest: #ffffff;
  --acco-dark: #9e9e9e;
  --acco-darkest: #000000;
}

:deep(.accordion-list) {
  width: 100%;
  background: var(--acco-lightest);
}

:deep(.p-aside > div:nth-child(1) > details:nth-child(1)) {
  @apply rounded-lg border border-[#767676];
}

:deep(.accordion-list .accordion-item) {
  --content-height: 0px;
  height: calc(var(--summary-height) + 26px);
  overflow: hidden;
  transition: height 300ms ease-in-out;
}

:deep(
    .p-aside > div:nth-child(1) > details:nth-child(1) > summary:nth-child(1)
  ) {
  @apply bg-gunmetal text-white text-xl font-extrabold;
}

:deep(.accordion-list .accordion-item > .accordion-item__summary) {
  @apply p-3 cursor-pointer text-[#767676] flex justify-between items-center font-light text-base transition-colors duration-300 ease-in-out;
}

:deep(.accordion-list .accordion-item > .accordion-item__summary:hover) {
  @apply text-gunmetal text-opacity-80 transition-colors ease-in-out;
}

:deep(
    .accordion-list
      .accordion-item
      > .accordion-item__summary
      > .accordion-item__summary-icon
  ) {
  @apply transition-transform duration-300 ease-in-out;
}

:deep(
    .accordion-list
      .accordion-item
      > .accordion-item__summary
      > .accordion-item__summary-icon::before
  ) {
  content: '+';
  line-height: 22px;
}
:deep(.accordion-list .accordion-item--open) {
  height: calc(var(--summary-height) + var(--content-height) + 23px);
  background: var(--acco-lightest);
}
:deep(
    .accordion-list
      .accordion-item--open
      > .accordion-item__summary
      > .accordion-item__summary-icon::before
  ) {
  content: '-';
  line-height: 22px;
}

:deep(
    .accordion-item__content
      > .accordion-list
      > .accordion-item--open
      > .accordion-item__summary
  ) {
  @apply bg-[#c6c6c6];
}

:deep(
    .accordion-item__content
      > .accordion-list
      > .accordion-item--open
      > .accordion-item__summary
      > .accordion-item__summary-title
  ) {
  @apply text-gunmetal font-bold;
}

:deep(
    .accordion-item__content
      > .accordion-list
      > .accordion-item--open
      > .accordion-item__content
  ) {
  @apply bg-[#e5e5e5] border-b border-b-gray-300;
}

:deep(.accordion-list .accordion-item--disabled > .accordion-item__summary) {
  color: var(--acco-dark);
  cursor: default;
}
:deep(
    .accordion-list .accordion-item--disabled > .accordion-item__summary:hover
  ) {
  color: var(--acco-dark);
}
:deep(.accordion-list .accordion-item > .accordion-item__content) {
  background-color: var(--acco-lightest);
  border-top: none;
}

:deep(.accordion-item__content > .accordion-list > .accordion-item) {
  @apply border-b;
}

:deep(.accordion-item__content > .accordion-list > .accordion-item:last-child) {
  @apply rounded-b-2xl border-b-transparent;
}

:deep(
    .accordion-item__content
      > .accordion-list
      > .accordion-item
      > .accordion-item__summary
      > .accordion-item__summary-icon::before
  ) {
  content: '';
}

.fish-list {
  @apply mx-3;
}

.fish-item {
  @apply p-2 pl-8 border-b border-b-[#898989];
}
</style>
