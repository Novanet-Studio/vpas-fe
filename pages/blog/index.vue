<template>
  <div class="blog">
    <app-highlight
      :titulo="articles[0]?.attributes.titulo"
      :descripcion="getExcerpt(articles[0]?.attributes.descripcion)"
      textoBoton="Más información"
      :imagen="articles[0]?.attributes.imagen.data.attributes.url"
    />

    <h3 class="noticias__titulo">Noticias</h3>
    <section class="blog__content">
      <div class="blog__cards-wrapper">
        <nuxt-link
          :to="`/blog/${article.attributes.slug}`"
          v-for="(article, index) in articles.slice(1)"
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

const getExcerpt = (text: string) => text.substring(0, 160).concat("...");

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
  console.log("An error occurred while fetching articles: ", error);
}
</script>
