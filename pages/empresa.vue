<template>
  <div class="empresa">
    <app-hero
      titulo="Empresa"
      descripcion="Somos una organización del sector de alimentos especializada en el procesamiento y comercialización de pescados, mariscos, moluscos y demás especies marinas"
      textoBoton="Más información"
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
          <h3 class="empresa__entry-title">¿Quienes somos?</h3>

          <p>
            Una empresa del sector alimentos que se especializa en el
            procesamiento y comercialización de pescados, mariscos, moluscos y
            demás especies marinas. Desde nuestra fundación, en el año 2011, nos
            hemos dedicado a crecer de forma integral, para proveer los mercados
            nacionales e internacionales con productos de calidad. Contamos con
            cuatro plantas de procesamiento industrial en Venezuela, con más de
            200 trabajadores, conformado por profesionales, técnicos y personal
            especializado que labora en nuestras líneas de producción, control
            de calidad y comercialización. Acopiamos, procesamos y
            comercializamos nuestros productos con estrictos controles de
            calidad, basados en principios de sustentabilidad.
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
          <h3 class="empresa__entry-title">Misión</h3>

          <ul class="empresa__entry-list">
            <li class="empresa__entry-item">
              Convertirnos en la empresa venezolana por excelencia en el
              procesamiento, comercialización y exportación de recursos
              hidrobiológicos.
            </li>
            <li class="empresa__entry-item">
              Consolidar a Grupo V.P.A.S. C.A., en nuestros mercados cautivos y
              ampliar nuestra participación a nivel global.
            </li>
            <li class="empresa__entry-item">
              Ser una fuente importante de empleo y seguir aplicando tecnología
              de punta en nuestros procesos.
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
          <h3 class="empresa__entry-title">Visión</h3>

          <ul class="empresa__entry-list">
            <li class="empresa__entry-item">
              Proveer a nuestros clientes nacionales e internacionales productos
              de calidad.
            </li>
            <li class="empresa__entry-item">
              Participar de manera sostenida y creciente en el desarrollo de la
              industria alimentaria.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
