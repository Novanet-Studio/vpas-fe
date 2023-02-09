<template>
  <div class="footer__rrss" :class="class">
    <a
      class="footer__link"
      :class="linkClass"
      href="https://instagram.com"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
    </a>
    <a
      class="footer__link"
      :class="linkClass"
      href="https://facebook.com"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'facebook']" size="xl" />
    </a>
    <a
      class="footer__link"
      :class="linkClass"
      href="https://whatsapp.me/+581241289"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'whatsapp']" size="xl" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  class?: CSSProperties;
  linkClass?: CSSProperties;
}>();
</script>
