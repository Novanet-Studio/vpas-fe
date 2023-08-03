<template>
  <transition name="fade" appear>
    <div>
      <app-header />
      <main class="main">
        <app-hero
          titulo="Noticias de interés"
          textoBoton="Más información"
        />
        <div class="article__wrapper">
          <slot />
          <aside class="aside" v-if="slug">
            <nuxt-link
              v-for="(article, index) in articles.filter(
                (art) => art.attributes.slug !== slug
              )"
              :to="`/blog/${article.attributes.slug}`"
              :key="index"
            >
              <app-card
                :title="article.attributes.titulo"
                :image="article.attributes.imagen.data.attributes.url"
                :image-alt="
                  article?.attributes.imagen.data.attributes.alternativeText ??
                  ''
                "
              />
            </nuxt-link>
          </aside>
          <app-separator altClass="app__separator-bottom mt-4" />
        </div>
      </main>
      <app-footer />
    </div>
  </transition>
</template>

<script lang="ts" setup>
const articles = ref<Project.ArticlesData[]>([]);
const graphql = useStrapiGraphQL();
const route = useRoute();
const slug = ref<string>("");

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

  slug.value = route.path.split("/").at(-1) as string;
} catch (error: any) {
  console.log("An error occurred while fetching articles: ", error);
}

watch(
  () => route.path,
  () => {
    if (!route.path.split("/")?.at(-1)) return;

    slug.value = route.path.split("/").at(-1) as string;
  }
);
</script>
