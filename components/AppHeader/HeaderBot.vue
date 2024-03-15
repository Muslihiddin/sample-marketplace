<script setup lang="ts">
const links = [
  { label: "Smartphones", to: 'category' },
  { label: "Housing" },
  { label: "Shipping" },
  { label: "Stores" },
  { label: "Electronics" },
  { label: "Headphones" },
  { label: "Shoes" },
  { label: "Health" },
  { label: "Laptops" },
  { label: "Accessories" },
  { label: "Mind kind" },
  { label: "Something" },
  { label: "Another thing" },
];
</script>

<template>
  <UHorizontalNavigation :links="links" />
</template>
