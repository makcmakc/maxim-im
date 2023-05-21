<template>
  <div class="theme-switch">
    <nuxt-icon name="theme/dark" class="dark-icon"  @click="$colorMode.preference = 'dark'" /> 
    <nuxt-icon name="theme/light" class="light-icon"  @click="$colorMode.preference = 'light'" />
  </div>
</template>

<style lang="scss">
.nuxt-icon {
  display: block;
  margin-left: 3px;
  margin-top: 2px;

  &.dark-icon svg,
  &.light-icon svg {
    position: absolute;
    right: 0;
    transform: scale(1) rotate(0);
    transform-origin: center;
    transition: all .2s ease-in-out;
  }
}

.dark-mode {
  .dark-icon svg {
    transform: scale(0) rotate(90deg) translateY(5px);
  }
  .light-icon svg {
    transform: scale(1) rotate(0);
  }
}

.light-mode {
  .dark-icon svg {
    transform: scale(1) rotate(0);
  }
  .light-icon svg {
    transform: scale(0) rotate(90deg) translateY(5px);
  }
}
</style>