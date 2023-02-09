<template>
  <div>
    <app-slider :slides="carrusel" />
    <section class="contact-section">
      <header class="contact-section__header">
        <h2 class="contact-section__title">Contáctanos</h2>
      </header>
      <div class="contact-section__content">
        <contact-info />
        <contact-form />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const carrusel = ref<Project.CarouselImages[]>([]);
const graphql = useStrapiGraphQL();

try {
  const query = await graphql<Project.IndexRequest>(`
    query {
      carrusel(id: 1) {
        data {
          attributes {
            nombre
            imagenes {
              texto
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
  `);

  carrusel.value = query.data.carrusel.data.attributes.imagenes;
} catch (err: any) {
  console.error('An error occured while fetching images! ', err);
}
</script>

<style scoped>
.contact-section {
  @apply px-10 lg:px-36;
}

.contact-section__header {
  @apply w-full;
}

.contact-section__title {
  @apply heading-2 text-center;
}

.contact-section__content {
  @apply my-12 flex flex-col lg:flex-row;
}
</style>
