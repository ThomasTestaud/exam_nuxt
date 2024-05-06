<template>
  <div class="min-h-screen">

    <div class="px-4 py-4 pb-12 flex flex-col items-center">
      <!--

        <NuxtLink to="/">Home</NuxtLink>
      -->
      <div class="mb-4">

        <NuxtLink to="/persons">
          <Button content="Persons" class="mr-1"/>
        </NuxtLink>
        <NuxtLink to="/posts">
          <Button content="Posts" class="mr-1"/>
        </NuxtLink>
        <NuxtLink to="/books">
          <Button content="Books" class="mr-1"/>
        </NuxtLink>
      </div>
        <slot />
    </div>
  </div>
  </template>

<script setup>

</script>
