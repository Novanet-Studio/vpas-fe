<template>
  <app-modal v-model="showModal">
    <div class="modal">
      <button class="modal__button-close" @click="showModal = false">
        &times;
      </button>
      <section class="product__main">
        <nuxt-picture
          :src="subEspecie?.imagen.data.attributes.url"
          :alt="subEspecie?.imagen.data.attributes.alternativeText"
          class="product__main-image"
        />
        <div class="product__tags">
          <span
            :class="
              subEspecie?.mercado_nacional
                ? 'border-1 border-jade text-jade'
                : 'border-1 border-vermillon text-vermillon'
            "
            >{{
              subEspecie?.mercado_nacional
                ? "Disponible en el mercado nacional"
                : "No disponible en el mercado nacional"
            }}</span
          >

          <span
            :class="
              subEspecie?.mercado_exportacion
                ? 'border-1 border-jade text-jade'
                : 'border-1 border-selyellow text-selyellow'
            "
            >{{
              subEspecie?.mercado_exportacion
                ? "Disponible en el mercado de exportación"
                : "No disponible en el mercado de exportación"
            }}</span
          >

          <span
            :class="
              subEspecie?.exportable
                ? 'border-1 border-jade text-jade'
                : 'border-1 border-vermillon text-vermillon'
            "
            >{{
              subEspecie?.exportable
                ? "Disponible para la exportación"
                : "No disponible para la exportación"
            }}</span
          >
        </div>
        <app-separator class="product__separator" />
        <div class="product-info">
          <div class="product-info__name-wrapper">
            <h5 class="product-info__title">Nombre en inglés</h5>
            <p class="product-info__content">
              {{ subEspecie?.nombre_ingles }}
            </p>
          </div>
          <div class="product-info__name-wrapper">
            <h5 class="product-info__title">Nombre ciéntifico</h5>
            <p class="product-info__content">
              {{ subEspecie?.nombre_tecnico }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </app-modal>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: boolean;
  subEspecie: Project.SubEspecie | undefined;
}

interface Emit {
  (e: "update:modelValue", value: boolean): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const showModal = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit("update:modelValue", val),
});
</script>

<style scoped>
.modal {
  @apply relative rounded-xl;
}

.modal__button-close {
  @apply text-2xl absolute right-4 top-0;
}

.product__main {
  @apply px-12 pb-8;
}

.product__tags {
  @apply flex gap-4 justify-center pt-4 pb-2;
}

.product__tags span {
  @apply rounded-xl text-xs p-3;
}

.product__tags p {
  @apply rounded-xl border-1 text-xs text-battleship border-battleship pt-3 px-3;
}
</style>
