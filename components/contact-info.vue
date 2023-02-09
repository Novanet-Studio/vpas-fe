<template>
  <div class="contact-info">
    <div class="info-item">
      <h5 class="info-item__title">Ubicación</h5>
      <p class="info-item__description">
        La empresa del sector de alimentos especializada en el procesamiento y
        comercialización de pescados, mariscos, moluscos y demás especies
        marinas
      </p>
    </div>
    <div class="info-item">
      <h5 class="info-item__title">Correo electrónico</h5>
      <p class="info-item__description">grupovpas@gmail.com</p>
    </div>
    <div class="info-item">
      <h5 class="info-item__title">Teléfono</h5>
      <p class="info-item__description">+58 212 123 45 67</p>
    </div>
    <div class="info-item">
      <h5 class="info-item__title">Redes sociales</h5>
      <p class="info-item__description">
        <social-networks class="pl-0" link-class="first:pl-0" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  @apply p-8 flex flex-col gap-4 flex-basis-[75%] rounded-l-lg bg-gradient-to-tr from-[#1d2b37] to-[#39556e];
}

.info-item {
  @apply flex flex-col;
}

.info-item__title {
  @apply heading-5 text-white;
}

.info-item__description {
  @apply text-[#D9D9D9];
}
</style>
