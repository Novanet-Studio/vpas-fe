<template>
  <img
    src="../assets/images/vpas-footer-forma.svg"
    alt="Novanet logo"
    :class="altClass"
  />
</template>

<script lang="ts" setup>
type Props = {
  altClass?: string;
};

defineProps<Props>();
</script>
