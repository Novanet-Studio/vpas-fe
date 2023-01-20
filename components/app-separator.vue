<template>
  <div :class="altClass">
    <img
      src="../assets/images/vpas-separador.svg"
      alt="Novanet logo"
      class="app__separator-image"
    />
  </div>
</template>

<script lang="ts" setup>
type Props = {
  altClass?: string;
};

defineProps<Props>();
</script>
