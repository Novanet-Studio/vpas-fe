<template>
  <app-modal v-model="showModal">
    <div class="relative">
      <button
        class="text-2xl absolute right-4 top-0"
        @click="showModal = false"
      >
        &times;
      </button>
      <section class="product__main px-8 pb-8">
        <nuxt-picture
          :src="subEspecie?.imagen.data.attributes.url"
          :alt="subEspecie?.imagen.data.attributes.alternativeText"
          class="product__main-image"
        />
        <div class="pt-4 flex gap-4 justify-center">
          <span
            class="rounded-xl text-xs p-2"
            :class="
              subEspecie?.es_comerciable
                ? 'bg-platinum text-black'
                : 'bg-bdazzled text-white'
            "
            >{{
              subEspecie?.es_comerciable ? "Comerciable" : "No comerciable"
            }}</span
          >
          <span
            class="rounded-xl text-xs p-2"
            :class="
              subEspecie?.es_comerciable
                ? 'bg-platinum text-black'
                : 'bg-bdazzled text-white'
            "
            >{{ subEspecie?.en_venta ? "En venta" : "No disponible" }}</span
          >
          <p v-if="subEspecie?.nota" class="rounded-xl text-xs p-2 text-black">
            <font-awesome-icon :icon="['fas', 'thumbtack']" class="mr-2" />
            Prohibido por la temporada
          </p>
        </div>
        <app-separator class="product__separator" />
        <div class="product-info">
          <div class="product-info__name-wrapper">
            <h5 class="product-info__title">Nombre técnico</h5>
            <p class="product-info__content">
              {{ subEspecie?.nombre_tecnico }}
            </p>
          </div>
          <h5 class="product-info__title">Presentación</h5>
          <div class="product-info__presentation">
            <div
              class="product-card"
              v-for="(presentation, index) in subEspecie?.presentacion.data"
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
