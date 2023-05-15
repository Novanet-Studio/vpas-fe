<template>
  <div class="especies">
    <app-highlight
      titulo="Especies en Venezuela"
      descripcion="Lorem ipsum dolor sit amet consectetur."
      imagen="https://res.cloudinary.com/novanet-studio/image/upload/v1684169245/vpas/uploads/vpas_especies_venezuela_peces_nadando_cerca_coral_d681fb7a4c.webp"
    />
    <section class="especies__info">
      <p class="especies__description">
        Aquí encontraras algunas especies de mar, especies de agua dulce y
        mariscos que existen en Venezuela. También podras saber si están
        actualmente comercializadas en nuestro mercado nacional, si son parte
        del mercado de exportación o si podrían ser exportadas. Si tienes alguna
        duda o comentario, puedes contactarnos a través de nuestro correo
        electronico o
        <nuxt-link to="/contacto"><b>formulario de contacto.</b></nuxt-link>
      </p>
    </section>
    <section class="especies__content">
      <div class="especies__content-header">
        <a
          class="especies__item-link"
          :class="[
            selected?.attributes.nombre === category.attributes.nombre &&
              'especies__item-link--active',
          ]"
          href="#"
          v-for="(category, index) in categories"
          :key="index"
          @click.prevent="handleSelectCategory(category)"
          >{{ category.attributes.nombre }}</a
        >
      </div>
      <div class="especies__cards-wrapper relative">
        <div
          class="absolute flex w-full justify-center h-full items-center filter-drop-shadow z-10 blur-0"
          v-if="isLoading"
        >
          <app-loader />
        </div>
        <template v-for="(item, index) in products" :key="index">
          <div
            v-for="(sub, i) in item.attributes.subespecie"
            @click="handleSelect(sub, item)"
            class="cursor-pointer"
            :class="[isLoading && 'filter blur-2']"
          >
            <app-card
              :title="sub.nombre_subespecie"
              :image="sub.imagen.data.attributes.url"
              :image-alt="sub.imagen.data.attributes.alternativeText"
              :key="i"
            />
          </div>
        </template>
      </div>
      <div class="flex w-full justify-center pb-24">
        <app-pagination
          :current-page="page"
          :per-page="perPage"
          :total="total"
          @change="setPageInvoice"
          :disabled="isLoading"
          v-if="total"
          :key="page"
        />
      </div>
    </section>
    <product-modal v-model="showModal" :sub-especie="subEspecie" />
  </div>
</template>

<script lang="ts" setup>
const categories = ref<Project.CategoriesData[]>([]);
const products = ref<Project.ProductsData[]>([]);
const selected = ref<Project.CategoriesData>();
const subEspecie = ref<Project.SubEspecie>();
const graphql = useStrapiGraphQL();

const showModal = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const total = ref<number>(0);
const perPage = ref<number>(5);
const page = ref<number>(1);
const pageCount = ref<number>(0);

function handleSelectCategory(category: Project.CategoriesData) {
  page.value = 1;
  selected.value = category;
  fetchProducts();
}

function handleSelect(sub: any, prod: any) {
  subEspecie.value = sub;
  showModal.value = true;
}

const setPageInvoice = (pageNumber: number) => (page.value = pageNumber);

async function fetchProducts() {
  try {
    isLoading.value = true;

    const variables = {
      id: selected.value?.id,
      page: page.value,
      pageSize: perPage.value,
    };

    const productsQuery: any = await graphql(
      `
        query Products($id: ID, $page: Int, $pageSize: Int) {
          productos(
            filters: { categoria: { id: { eq: $id } } }
            sort: "nombre_especie:asc"
            pagination: { page: $page, pageSize: $pageSize }
          ) {
            data {
              attributes {
                nombre_especie
                subespecie {
                  nombre_subespecie
                  nombre_ingles
                  nombre_tecnico
                  mercado_nacional
                  mercado_exportacion
                  exportable
                  imagen {
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
            meta {
              pagination {
                total
                pageCount
              }
            }
          }
        }
      `,
      variables
    );

    products.value = productsQuery.data.productos.data;
    total.value = productsQuery.data.productos.meta.pagination.total;
    pageCount.value = productsQuery.data.productos.meta.pagination.pageCount;
  } catch (error) {
    console.log("An error occurred while fetching products: ", error);
  } finally {
    isLoading.value = false;
  }
}

async function fetchData() {
  try {
    isLoading.value = true;
    const query: Project.CategoriesRequest = await graphql(`
      query {
        categorias(sort: "id:asc") {
          data {
            id
            attributes {
              nombre
            }
          }
        }
      }
    `);

    categories.value = query.data.categorias.data;

    // Default select first category
    selected.value = categories.value[0];

    // Fetch products
    await fetchProducts();
  } catch (error) {
    console.log("An error occurred while fetching categories: ", error);
  } finally {
    isLoading.value = false;
  }
}

fetchData();

watch(page, (page) => {
  if (Number(page) > pageCount.value) return;

  fetchProducts();
});
</script>
