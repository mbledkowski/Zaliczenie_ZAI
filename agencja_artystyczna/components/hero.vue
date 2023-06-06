<template>
  <div class="hero min-h-screen bg">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content flex flex-col flex-nowrap text-center text-neutral-content p-6.875">
      <slider class="max-w-fit rounded-lg shadow-2xl"/>
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{{ $t('comName') }}</h1>
        <p class="mb-5 text-justify">{{ $t('desc') }}</p>
      </div>
    </div>
  </div>
</template>
