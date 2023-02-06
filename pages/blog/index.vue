<template>
  <div class="blog">
    <section class="main-notice">
      <nuxt-img
        class="main-notice__image"
        :src="articles[0]?.attributes.imagen.data.attributes.url"
        :alt="articles[0]?.attributes.imagen.data.attributes.alternativeText"
      />
      <div class="main-notice__content">
        <div>
          <h2 class="main-notice__title">
            {{ articles[0]?.attributes.titulo }}
          </h2>
          <p class="main-notice__description">
            {{ getSmallText(articles[0]?.attributes.descripcion) }}
          </p>
        </div>
        <button class="btn btn--small btn--self-center">Click aquí</button>
      </div>
      <app-div class="app-div" inverted />
    </section>
    <h3 class="heading-2 text-center py-8 mt-12">Noticias</h3>
    <section class="blog__content">
      <div class="blog__cards-wrapper">
        <nuxt-link
          :to="`/blog/${article.attributes.slug}`"
          v-for="(article, index) in articles"
          :key="index"
        >
          <app-card
            :title="article.attributes.titulo"
            :image="article.attributes.imagen.data.attributes.url"
            :image-alt="
              article.attributes.imagen.data.attributes.alternativeText
            "
            :key="index"
          />
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const articles = ref<Project.ArticlesData[]>([]);
const graphql = useStrapiGraphQL();

const getSmallText = (text: string) => text.substring(0, 160).concat('...');

try {
  const query = await graphql<Project.ArticlesRequest>(`
    query {
      articulos(sort: "id:asc") {
        data {
          attributes {
            titulo
            descripcion
            slug
            imagen {
              data {
                id
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
  `);

  articles.value = query.data.articulos.data;
} catch (error: any) {
  console.log('An error occurred while fetching articles: ', error);
}
</script>
