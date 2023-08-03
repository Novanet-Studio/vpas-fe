<template>
  <div>
    <app-slider :slides="carrusel" />

    <section class="especies">
      <ul class="especies__lista">
        <li
          v-for="(especie, index) in categorias"
          :key="index"
          class="especies__item"
        >
          <nuxt-img
            :src="especie.attributes.imagen.data.attributes.url"
            :alt="especie.attributes.imagen.data.attributes.alternativeText"
          />
          <h3 class="especies__titulo">{{ especie.attributes.nombre }}</h3>
          <nuxt-link :to="especie.attributes.link" class="especies__link"
            >Ver todas las especies</nuxt-link
          >
        </li>
      </ul>
    </section>

    <section class="mensaje">
      <app-separator altClass="app__separator-top" />
      <div v-html="mensaje" class="mensaje__text"></div>
      <ul class="mensaje__iconos">
        <li
          v-for="(icono, index) in iconos"
          :key="index"
          class="mensaje__icono-contenedor"
        >
          <nuxt-img
            :src="icono.image"
            :alt="icono.name"
            class="mensaje__icono-imagen"
          />
        </li>
      </ul>
      <app-separator altClass="app__separator-bottom" />
    </section>

    <section class="empresa">
      <ul class="empresa__lista">
        <li v-for="(item, index) in empresa" class="empresa__item" :key="index">
          <div class="empresa__item-container">
            <h4 class="empresa__valor">{{ item.titulo }}</h4>
            <p class="empresa__descripcion">{{ item.descripcion }}</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="noticias">
      <app-separator altClass="app__separator-bottom" />
      <h2 class="noticias__titulo">Noticias</h2>
      <ul class="noticias__lista">
        <li
          class="noticias__item"
          v-for="(item, index) in articles"
          :key="index"
        >
          <div class="noticias__item-container">
            <nuxt-img
              class="noticias__imagen"
              :src="item.attributes.imagen.data.attributes.url"
              :alt="item.attributes.imagen.data.attributes.alternativeText"
            />
            <h3 class="noticias__item-titulo">{{ item.attributes.titulo }}</h3>
          </div>
        </li>
      </ul>
    </section>

    <section class="contacto">
      <h2 class="contacto__titulo">Contáctanos</h2>
      <div class="contacto__contenedor">
        <div class="contacto__informacion">
          <p>
            Grupo VPAS se encuentra en Caracas y tiene operaciones también en Barcelona y Punto Fijo.
          </p>
          <div class="contacto__informacion-contenedor">
            <div class="contacto__texto">
              <div class="contacto__texto-contenedor">
                <font-awesome-icon
                  class="contacto__icono"
                  :icon="['fa', 'phone']"
                  size="lg"
                />
              </div>
              <p>+58 212 265 34 35</p>
            </div>
            <div class="contacto__texto">
              <div class="contacto__texto-contenedor">
                <font-awesome-icon
                  class="contacto__icono"
                  :icon="['fa', 'envelope']"
                  size="lg"
                />
              </div>
              <p>info@vpasgroup.com</p>
            </div>
          </div>
        </div>
        <div class="contacto__mapa">
          <nuxt-img
            class="contacto__mapa-imagen"
            src="https://res.cloudinary.com/novanet-studio/image/upload/v1676380474/vpas/uploads/vpas_mapa_venezuela_e02a5a89f4.svg"
            alt="Mapa de venezuela"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const config = useAppConfig();

useHead({
  titleTemplate() {
    return config.pwaManifest.name;
  },
  title() {
    return config.pwaManifest.short_name;
  },
});

const categorias = ref<Project.CategoriesData[]>([]);
const carrusel = ref<Project.CarouselImages[]>([]);
const articles = ref<Project.ArticlesData[]>([]);
const graphql = useStrapiGraphQL();

try {
  const query = await graphql<Project.IndexRequest>(`
    query {
      categorias(sort: "id:asc") {
        data {
          attributes {
            nombre
            link
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

      articulos(sort: "id:asc", pagination: { limit: 3 }) {
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

  categorias.value = query.data.categorias.data;
  articles.value = query.data.articulos.data;
  carrusel.value = query.data.carrusel.data.attributes.imagenes;
} catch (err) {
  console.error("An error occured while fetching home data! ", err);
}

const mensaje = `Proveemos los mercados <span class="mensaje__span">nacionales e internacionales</span> con productos  de calidad`;

const iconos = [
  {
    name: "Icono Pargo",
    image: "/vpas-icono-pargo.webp",
  },
  {
    name: "Icono Cachama",
    image: "/vpas-icono-cachama.webp",
  },
  {
    name: "Icono Langosta",
    image: "/vpas-icono-langosta.webp",
  },
];

const empresa = [
  {
    titulo: "¿Quiénes somos?",
    descripcion:
      "Una empresa del sector alimentos que se especializa en el procesamiento y comercia-lización de pescados, mariscos, moluscosy demás especies marinas.",
  },
  {
    titulo: "Misión",
    descripcion:
      "Convertirnos en la empresa venezolana por excelencia en el procesamiento, comercialización y exportación de recursos hidrobiológicos.",
  },
  {
    titulo: "Visión",
    descripcion:
      "Proveer a nuestros clientes nacionales e internacionales productos de calidad. Participar de manera sostenida y creciente en el desarrollo de la industria alimentaria.",
  },
];
</script>
