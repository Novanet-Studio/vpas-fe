<template>
  <section class="product__main">
    <h3 class="product__title">
      {{ especie?.attributes.nombre_especie }}
    </h3>
    <div class="product__actions">
      <button
        class="product__btn"
        :class="[
          subEspecieSelected?.nombre_subespecie ===
            subespecie.nombre_subespecie && 'product__btn--active',
        ]"
        v-for="(subespecie, index) in especie?.attributes.subespecie"
        @click="handleClick(subespecie)"
        :key="index"
      >
        {{ subespecie.nombre_subespecie }}
      </button>
    </div>
    <nuxt-picture
      :src="subEspecieSelected?.imagen.data.attributes.url"
      :alt="subEspecieSelected?.imagen.data.attributes.alternativeText"
      class="product__main-image"
    />
    <app-separator class="product__separator" />
    <div class="product-info">
      <div class="product-info__name-wrapper">
        <h5 class="product-info__title">Nombre técnico</h5>
        <p class="product-info__content">
          {{ subEspecieSelected?.nombre_tecnico }}
        </p>
      </div>
      <h5 class="product-info__title">Presentación</h5>
      <div class="product-info__presentation">
        <div
          class="product-card"
          v-for="(presentation, index) in subEspecieSelected?.presentacion.data"
          :key="index"
        >
          <nuxt-img
            v-if="presentation?.attributes"
            class="product-card__image"
            :src="presentation.attributes.url"
            :alt="presentation.attributes.alternativeText"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  especie: Project.ProductsData;
  subEspecie: Project.SubEspecie;
}

const props = defineProps<Props>();
const subEspecieSelected = ref<Project.SubEspecie>(props.subEspecie);

function handleClick(subspecie: Project.SubEspecie) {
  subEspecieSelected.value = subspecie;
}
</script>
