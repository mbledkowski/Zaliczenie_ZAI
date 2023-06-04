<template>
  <header class="h-0">
    <div class="sticky left-0 top-0 p-4 flex">
      <div class="navbar bg-base-100 rounded-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <ul class="menu menu-horizontal px-1">
                <li>
                  <NuxtLink to="/about">{{ $t('about') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/organization">{{ $t('organization') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/technique">{{ $t('technique') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/service">{{ $t('service') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/events">{{ $t('events') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">{{ $t('contact') }}</NuxtLink>
                </li>
              </ul>
            </ul>
          </div>
          <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">{{ $t('comName') }}</NuxtLink>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NuxtLink to="/about">{{ $t('about') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/organization">{{ $t('organization') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/technique">{{ $t('technique') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/service">{{ $t('service') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events">{{ $t('events') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">{{ $t('contact') }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.navbar {
  margin-top: 14px;
}
</style>
