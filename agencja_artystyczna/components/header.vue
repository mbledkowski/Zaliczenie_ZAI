<template>
  <header class="h-0 sticky left-0 top-0 z-10">
    <div class="p-4 flex">
      <div class="navbar bg-base-100 rounded-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
          <NuxtLink id="home" class="btn btn-ghost normal-case text-xl truncate" to="/">{{ $t('shortComName') }}</NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
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
        <div class="navbar-end">
        <select class="select select-info w-32 max-w-xs" v-model="$i18n.locale">
          <option disabled selected>Select language</option>
          <option v-for="(langValue, i) in langValues" :key="`Lang${i}`" :value="langValue">
            {{ lang[i] }}
          </option>
        </select></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return { langValues: ['pl', 'en'], lang: ['🇵🇱 polski', '🇬🇧 English'] };
  }
};
</script>

<style lang="css" scoped>
</style>