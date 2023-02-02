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
        <accordion-list v-for="(category, index) in categories" :key="index">
          <accordion-item>
            <template #summary>{{ category.attributes.nombre }}</template>
            <accordion-list>
              <accordion-item
                v-for="(product, iter) in category.attributes.productos.data"
                :key="iter"
              >
                <template #summary>{{
                  product.attributes.nombre_especie
                }}</template>
                <ul
                  class="fish-list"
                  v-for="(subespecie, subindex) in product.attributes
                    .subespecie"
                  :key="subindex"
                >
                  <li
                    class="fish-item"
                    @click="handleSelectSubEspecie(product, subespecie)"
                  >
                    {{ subespecie.nombre_subespecie }}
                  </li>
                </ul>
              </accordion-item>
            </accordion-list>
          </accordion-item>
        </accordion-list>
      </aside>
      <section class="product__main">
        <h3 class="product__title">
          {{ selected?.attributes.nombre_especie }}
        </h3>
        <div class="product__actions">
          <button
            class="product__btn"
            :class="[
              subEspecie?.nombre_subespecie === subespecie.nombre_subespecie &&
                'product__btn--active',
            ]"
            v-for="(subespecie, index) in selected?.attributes.subespecie"
            @click="handleClick(subespecie)"
            :key="index"
          >
            {{ subespecie.nombre_subespecie }}
          </button>
        </div>
        <nuxt-img
          :src="subEspecie?.imagen.data.attributes.url"
          :alt="subEspecie?.imagen.data.attributes.alternativeText"
          class="product__main-image"
        />
        <app-separator class="product__separator" />
        <div class="product-info">
          <div class="product-info__name-wrapper">
            <h5 class="product-info__title">Nombre técnico</h5>
            <p class="product-info__content">
              {{ subEspecie?.nombre_tecnico }}
            </p>
          </div>
          <h5 class="product-info__title">Presentación</h5>
          <div class="product-info__presentation">
            <div
              class="product-card"
              v-for="(presentation, index) in subEspecie?.presentacion.data"
              :key="index"
            >
              <nuxt-img
                v-if="presentation?.attributes"
                class="product-card__image"
                :src="presentation.attributes.url"
                :alt="presentation.attributes.alternativeText"
              />
              <!-- <h6 class="product-card__title">Filete</h6> -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const categories = ref<Project.CategoriesData[]>([]);
const selected = ref<Project.ProductsData>();
const subEspecie = ref<Project.SubEspecie>();
const graphql = useStrapiGraphQL();

function handleSelectSubEspecie(
  product: Project.ProductsData,
  subspecie: Project.SubEspecie
) {
  selected.value = product;
  subEspecie.value = subspecie;
}

function handleClick(subspecie: Project.SubEspecie) {
  subEspecie.value = subspecie;
}

try {
  const query = await graphql<Project.CategoriesRequest>(`
    query {
      categorias {
        data {
          attributes {
            nombre
            imagen {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            productos {
              data {
                attributes {
                  nombre_especie
                  subespecie {
                    nombre_subespecie
                    nombre_tecnico
                    imagen {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                    presentacion {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  categories.value = query.data.categorias.data;
  selected.value = query.data.categorias.data[1].attributes.productos.data[0];
  subEspecie.value = selected.value.attributes.subespecie[0];
} catch (error) {
  console.log('An error occurred while fetching categories: ', error);
}
</script>

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

:deep(.p-aside > div:nth-child(2) > details:nth-child(1)) {
  @apply rounded-lg border border-[#767676] mt-8;
}

:deep(.p-aside > div:nth-child(3) > details:nth-child(1)) {
  @apply rounded-lg border border-[#767676] mt-8;
}

:deep(.accordion-list .accordion-item) {
  --content-height: 0px;
  height: calc(var(--summary-height) + 26px);
  /* overflow: hidden; */
  transition: height 300ms ease-in-out;
}

:deep(
    .p-aside > div:nth-child(1) > details:nth-child(1) > summary:nth-child(1)
  ) {
  @apply bg-gunmetal text-white text-xl font-extrabold rounded-md;
}

:deep(
    .p-aside > div:nth-child(2) > details:nth-child(1) > summary:nth-child(1)
  ) {
  @apply bg-bdazzled text-white text-xl font-extrabold rounded-md;
}

:deep(
    .p-aside > div:nth-child(3) > details:nth-child(1) > summary:nth-child(1)
  ) {
  @apply bg-cerulean text-white text-xl font-extrabold rounded-md;
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
  @apply p-2 pl-8 border-b border-b-[#898989] cursor-pointer;
}
</style>
