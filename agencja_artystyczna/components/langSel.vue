<template>
  <select class="select select-bordered w-full max-w-xs" v-model="locale">
    <option value="pl">polski</option>
    <option value="en">English</option>
  </select>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>
