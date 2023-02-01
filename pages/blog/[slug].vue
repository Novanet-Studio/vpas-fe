<template>
  <div class="w-[680px]">
    <header>
      <nuxt-img
        :src="article?.attributes.imagen.data.attributes.url"
        :alt="article?.attributes.imagen.data.attributes.alternativeText"
        class="rounded-tl-[20px] rounded-br-[15px]"
      />
      <h2 class="my-4 heading-2">{{ article?.attributes.titulo }}</h2>
    </header>
    <div v-html="markdown.render(article?.attributes.descripcion)"></div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'article',
});

// @ts-ignore
import MarkdownIt from 'markdown-it';
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
  console.log('An error ocurred while fetching article: ', error);
}
</script>
