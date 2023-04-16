<template>
  <div class="empresa">
    <app-hero
      :titulo="$t('enterprise.title')"
      :descripcion="$t('enterprise.description')"
      :texto-boton="$t('enterprise.btn-text')"
    />
    <section class="empresa__section">
      <div class="empresa__entry">
        <div class="empresa__entry-image-container">
          <nuxt-img
            class="empresa__entry-image"
            src="https://res.cloudinary.com/novanet-studio/image/upload/v1676309676/vpas/uploads/vpas_empresa_quienes_somos_652aa3183f.webp"
          />
        </div>

        <div class="empresa__entry-content">
          <h3 class="empresa__entry-title">
            {{ $t("enterprise.about.title") }}
          </h3>

          <p>
            {{ $t("enterprise.about.content") }}
          </p>
        </div>
      </div>

      <div class="empresa__entry">
        <div class="empresa__entry-image-container">
          <nuxt-img
            class="empresa__entry-image"
            src="https://res.cloudinary.com/novanet-studio/image/upload/v1676309676/vpas/uploads/vpas_empresa_mision_77115ad32b.webp"
          />
        </div>
        <div class="empresa__entry-content">
          <h3 class="empresa__entry-title">
            {{ $t("enterprise.mission.title") }}
          </h3>

          <ul class="empresa__entry-list">
            <li class="empresa__entry-item">
              {{ $t("enterprise.mission.item-1") }}
            </li>
            <li class="empresa__entry-item">
              {{ $t("enterprise.mission.item-2") }}
            </li>
            <li class="empresa__entry-item">
              {{ $t("enterprise.mission.item-3") }}
            </li>
          </ul>
        </div>
      </div>

      <div class="empresa__entry">
        <div class="empresa__entry-image-container">
          <nuxt-img
            class="empresa__entry-image"
            src="https://res.cloudinary.com/novanet-studio/image/upload/v1676309676/vpas/uploads/vpas_empresa_vision_49007482b7.webp"
          />
        </div>
        <div class="empresa__entry-content">
          <h3 class="empresa__entry-title">
            {{ $t("enterprise.vision.title") }}
          </h3>

          <ul class="empresa__entry-list">
            <li class="empresa__entry-item">
              {{ $t("enterprise.vision.item-1") }}
            </li>
            <li class="empresa__entry-item">
              {{ $t("enterprise.vision.item-2") }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
