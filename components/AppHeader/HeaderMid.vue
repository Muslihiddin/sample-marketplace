<script setup lang="ts">
const search = ref("");
defineProps<{
  isCatalogOpen: boolean;
}>();
const emit = defineEmits(["toggleCatalogState", 'openLoginDialog']);
</script>

<template>
  <div class="py-2 flex items-center justify-between gap-x-6">
    <AppLogo />

    <UButton
      variant="soft"
      @click="emit('toggleCatalogState', !isCatalogOpen)"
    >
      <p>Catalog</p>
      <UIcon
        v-if="!isCatalogOpen"
        name="i-heroicons-squares-2x2"
        class="w-6 h-6"
      />
      <UIcon
        v-else
        name="i-heroicons-x-mark"
        class="w-6 h-6"
      />
    </UButton>

    <UInput
      v-model="search"
      class="flex-1"
      size="lg"
      placeholder="Search..."
      name="search"
    />

    <div class="flex items-center gap-x-1">
      <UButton
        variant="ghost"
        class="group"
        @click="emit('openLoginDialog')"
      >
        <p class="text-brand-txt group-hover:text-primary">
          Sign in
        </p>
        <UIcon
          name="i-heroicons-user"
          class="text-brand-txt w-6 h-6 group-hover:text-primary"
        />
      </UButton>
      <UButton
        variant="ghost"
        class="group"
      >
        <p class="text-brand-txt group-hover:text-primary">
          Likes
        </p>
        <UIcon
          name="i-heroicons-heart"
          class="text-brand-txt w-6 h-6 group-hover:text-primary"
        />
      </UButton>
      <NuxtLink to="cart">
        <UButton
          variant="ghost"
          class="group"
        >
          <p class="text-brand-txt group-hover:text-primary">
            Cart
          </p>
          <UChip
            text="2"
            size="2xl"
          >
            <UIcon
              name="i-heroicons-shopping-bag"
              class="text-brand-txt w-6 h-6 group-hover:text-primary"
            />
          </UChip>
        </UButton>
      </NuxtLink>
    </div>
  </div>
</template>
