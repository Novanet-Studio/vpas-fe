<template>
  <div class="product">
    <app-hero
      titulo="Productos"
      descripcion="Expanda el acordeón para ver las especies que tenemos disponibles para la venta."
    />

    <div class="product__content">      
      <aside class="product__aside">        
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
                <ul class="fish-list">
                  <li
                    v-for="(subespecie, subindex) in product.attributes
                      .subespecie"
                    :key="subindex"
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
      <section class="product__main" v-if="selected?.attributes.nombre_especie">
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
        <nuxt-picture
          :src="subEspecie?.imagen.data.attributes.url"
          :alt="subEspecie?.imagen.data.attributes.alternativeText"
          class="product__main-image"
        />
        <div class="pt-4 flex gap-4 justify-center">
          <span
            class="rounded-xl text-xs p-2"
            :class="
              subEspecie?.es_comerciable
                ? 'bg-platinum text-black'
                : 'bg-bdazzled text-white'
            "
            >{{
              subEspecie?.es_comerciable ? "Comerciable" : "No comerciable"
            }}</span
          >
          <span
            class="rounded-xl text-xs p-2"
            :class="
              subEspecie?.es_comerciable
                ? 'bg-platinum text-black'
                : 'bg-bdazzled text-white'
            "
            >{{ subEspecie?.en_venta ? "En venta" : "No disponible" }}</span
          >
          <p v-if="subEspecie?.nota" class="rounded-xl text-xs p-2 text-black">
            <font-awesome-icon :icon="['fas', 'thumbtack']" class="mr-2" />
            {{ subEspecie?.nota }}
          </p>
        </div>
        <app-separator class="product__separator" />
        <div class="product-info">
          <div class="product-info__name-wrapper">
            <h5 class="product-info__title">Nombre ciéntifico</h5>
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
            </div>
          </div>
        </div>
      </section>
      <section class="product__main" v-else>      
        <nuxt-picture
          src="https://res.cloudinary.com/novanet-studio/image/upload/v1682090118/vpas/uploads/vpas_productos_lanchas_pesca_senital_0d7fe70da1.webp"
          alt="Imagen de carga inicial"
          class="product__main-image"
        />
        <app-separator class="product__separator" />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const categories = ref<Project.CategoriesData[]>([]);
const selected = ref<Project.ProductsData>();
const subEspecie = ref<Project.SubEspecie>();
const graphql = useStrapiGraphQL();

const isActive = true;

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
      categorias(sort: "id:asc") {
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
                    es_comerciable
                    en_venta
                    nota
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
  // selected.value = query.data.categorias.data[1].attributes.productos.data[0];
  // subEspecie.value = selected.value.attributes.subespecie[0];
} catch (error) {
  console.log("An error occurred while fetching categories: ", error);
}
</script>

<style scoped>
.summary-text {
  @apply text-white text-base font-extrabold;
}

:global(
    .product__aside > div:nth-child(1) > details:nth-child(1) > summary:nth-child(1)
  ) {
  @apply bg-gunmetal summary-text;
}

:global(
    .product__aside > div:nth-child(2) > details:nth-child(1) > summary:nth-child(1)
  ) {
  @apply bg-bdazzled summary-text;
}

:global(
    .product__aside > div:nth-child(3) > details:nth-child(1) > summary:nth-child(1)
  ) {
  @apply bg-cerulean summary-text;
}
:global(.accordion-list .accordion-item > .accordion-item__summary) {
  @apply p-3 cursor-pointer text-battleship  font-light text-sm;
}
:global(.accordion-list .accordion-item > .accordion-item__summary:hover) {
  @apply text-gunmetal font-semibold;
}

:global(
    .accordion-list
      .accordion-item
      > .accordion-item__summary
      > .accordion-item__summary-icon::before
  ) {
  content: "+";
}

:global(
    .accordion-list
      .accordion-item--open
      > .accordion-item__summary
      > .accordion-item__summary-icon::before
  ) {
  content: "-";
}

:global(
    .accordion-item__content
      > .accordion-list
      > .accordion-item--open
      > .accordion-item__summary
  ) {
  @apply bg-silver text-gunmetal font-semibold;
}

.fish-item {
  @apply cursor-pointer border-b border-b-silver text-sm py-2 hyphens-none;
}
</style>
