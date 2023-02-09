<template>
  <footer class="footer">
    <app-div altClass="app__div-footer" />
    <div class="footer__container">
      <div class="footer__brand">
        <img
          src="../assets/images/vpas-emblema.svg"
          alt="VPAS emblema"
          class="footer__logo"
        />
        <p class="footer__legal">
          Grupo VPAS, C.A. - Derechos reservados © 2023.
        </p>
        <social-networks />
      </div>
      <div class="footer__developer">
        <p class="footer__developer-text">Sitio web realizado por:</p>
        <a
          href="https://novanet.studio"
          target="_blank"
          class="footer__developer-container"
        >
          <img
            src="../assets/images/novanet-logo.svg"
            alt="Novanet logo"
            class="footer__developer-logo"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
