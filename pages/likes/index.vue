<template>
  <UContainer>
    <p class="text-xl font-medium mt-10">
      Your liked products
    </p>
    <ul class="flex items-center gap-4 mt-4 mb-14">
      <li
        v-for="item in 4"
        :key="item"
      >
        <ProductCard />
      </li>
    </ul>
  </UContainer>
</template>