<template>
  <div class="wrapper">
    <header class="header">
        <div class="header__logo">
          <NuxtLink to="/">Maxim.AM</NuxtLink>
        </div>
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__list-item">
              <NuxtLink to="/">Главная</NuxtLink>
            </li>
            <li class="header__list-item">
              <NuxtLink to="/notes">Заметки</NuxtLink>
            </li>
            <li class="header__list-item">
              <ColorModePicker />
            </li>
          </ul>
        </nav>
    </header>
  </div>

  <div class="wrapper">
    <main class="main">
      <slot />
    </main>
  </div>
</template>
