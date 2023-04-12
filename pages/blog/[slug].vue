<template>
  <div class="article">
    <nuxt-img
      :src="article?.attributes.imagen.data.attributes.url"
      :alt="article?.attributes.imagen.data.attributes.alternativeText"
      class="article__image"
    />
    <h2 class="article__title">{{ article?.attributes.titulo }}</h2>
    <div class="article__description" v-html="markdown.render(article?.attributes.descripcion)"></div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "article",
});

// @ts-ignore
import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

const article = ref<Project.ArticlesData>();
const graphql = useStrapiGraphQL();
const { params } = useRoute();

try {
  const query = await graphql<Project.ArticlesRequest>(
    `
      query ($slug: String!) {
        articulos(filters: { slug: { eq: $slug } }) {
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
    `,
    {
      slug: params.slug,
    }
  );

  article.value = query.data.articulos.data[0];
} catch (error) {
  console.log("An error ocurred while fetching article: ", error);
}
</script>
