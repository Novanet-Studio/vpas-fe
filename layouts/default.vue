<template>
  <transition name="fade" appear>
    <div>
      <app-header />
      <main class="main">
        <slot />
      </main>
      <app-footer />
    </div>
  </transition>
</template>
