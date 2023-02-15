<template>
  <div class="especies">
    <app-highlight
      titulo="Especies en Venezuela"
      descripcion="Lorem ipsum dolor sit amet consectetur."
      textoBoton="Más información"
      imagen="https://res.cloudinary.com/novanet-studio/image/upload/v1676481165/vpas/uploads/vpas_bioma_marino_420d5fda84.webp"
    />
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
          <app-card
            :title="sub.nombre_subespecie"
            :image="sub.imagen.data.attributes.url"
            :image-alt="sub.imagen.data.attributes.alternativeText"
            v-for="(sub, i) in item.attributes.subespecie"
          />
        </template>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const categories = ref<Project.CategoriesData[]>([]);
const selected = ref<Project.CategoriesData>();
const graphql = useStrapiGraphQL();

function handleSelectCategory(category: Project.CategoriesData) {
  selected.value = category;
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
  // Default select first category
  selected.value = categories.value[0];
} catch (error) {
  console.log("An error occurred while fetching categories: ", error);
}
</script>
