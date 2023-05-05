<template>
  <div class="especies">
    <app-highlight
      titulo="Especies en Venezuela"
      descripcion="Lorem ipsum dolor sit amet consectetur."
      imagen="https://res.cloudinary.com/novanet-studio/image/upload/v1682094938/vpas/uploads/vpas_especies_venezuela_peces_nadando_cerca_coral_d681fb7a4c.webp"
    />
    <section class="especies__info">
      <p class="especies__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
        accusantium amet voluptas quisquam totam fuga quod eaque omnis ipsum
        tenetur architecto explicabo odit dolores, impedit nihil accusamus
        consectetur repellat praesentium!
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
          @click="
            (e) => {
              e.preventDefault();
              handleSelectCategory(category);
            }
          "
          >{{ category.attributes.nombre }}</a
        >
      </div>
      <div class="especies__cards-wrapper">
        <template
          v-for="(item, index) in selected?.attributes.productos.data"
          :key="index"
        >
          <div
            v-for="(sub, i) in item.attributes.subespecie"
            @click="handleSelect(sub, item)"
            class="cursor-pointer"
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
    </section>
    <product-modal v-model="showModal" :sub-especie="subEspecie" />
  </div>
</template>

<script lang="ts" setup>
const categories = ref<Project.CategoriesData[]>([]);
const selected = ref<Project.CategoriesData>();
const subEspecie = ref<Project.SubEspecie>();
const graphql = useStrapiGraphQL();

const showModal = ref<boolean>(false);

function handleSelectCategory(category: Project.CategoriesData) {
  selected.value = category;
}

function handleSelect(sub: any, prod: any) {
  console.log("clicking: ", sub);
  console.log("prod: ", prod);
  subEspecie.value = sub;
  showModal.value = true;
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
            }
          }
        }
      }
    }
  `);

  categories.value = query.data.categorias.data;
  // Default select first category
  selected.value = categories.value[0];
} catch (error) {
  console.log("An error occurred while fetching categories: ", error);
}
</script>
