<template>
  <section class="app-highlight">
    <div class="app-highlight__wrapper">
      <nuxt-picture
        class="app-highlight__image"
        :src="imagen"
        alt="Notice image"
      />
      <div class="app-highlight__content">
        <h2 class="app-highlight__title">{{ titulo }}</h2>
        <p class="app-highlight__description">
          {{ descripcion }}
        </p>
        <button
          @click.prevent="$emit('clickButton')"
          @click="clickButton(url)"
          v-if="textoBoton"
          class="btn btn--small"
          :type="type"
        >
          {{ textoBoton }}
        </button>
      </div>
      <app-div class="app-div" inverted />
    </div>
  </section>
</template>

<script lang="ts" setup>
type Props = {
  titulo: string;
  descripcion: string;
  textoBoton?: string;
  url?: string;
  imagen: string;
  type?: "button" | "reset" | "submit";
};

type Emits = {
  (e: "click"): string;
};

withDefaults(defineProps<Props>(), {
  type: "button",
});

defineEmits<Emits>();

const router = useRouter();

const clickButton = (url) => {
  router.push({
    path: `${url}`,
  });
};
</script>
