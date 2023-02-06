<template>
  <template v-if="inverted">
    <img
      src="../assets/images/vpas-footer-forma-invertida.svg"
      alt="Divition"
      :class="altClass"
    />
  </template>
  <template v-else>
    <img
      src="../assets/images/vpas-footer-forma.svg"
      alt="Divition"
      :class="altClass"
    />
  </template>
</template>

<script lang="ts" setup>
type Props = {
  altClass?: string;
  inverted?: boolean;
};

defineProps<Props>();
</script>
