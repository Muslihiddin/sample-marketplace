<script setup lang="ts">
const isLoginOpen = ref(false)
const isCatalogOpen = ref(false);
const handleToggle = (v: boolean) => (isCatalogOpen.value = v);
</script>

<template>
  <header>
    <UContainer class="relative z-10">
      <AppHeaderTop />
      <AppHeaderMid
        :is-catalog-open="isCatalogOpen"
        @toggle-catalog-state="handleToggle"
        @open-login-dialog="isLoginOpen = true"
      />
      <AppHeaderBot />
      <AppHeaderMenu :is-catalog-open="isCatalogOpen" />
    </UContainer>
    <UModal
      v-model="isLoginOpen"
    >
      <div class="py-6 px-6 flex flex-col">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-lg font-medium">
              Sign in with Phone number
            </p>
            <p class="text-sm text-muted">
              Make purchases without any hustle
            </p>
          </div>
          <div class="border rounded-full cursor-pointer p-1 flex items-center justify-center">
            <UIcon
              name="i-heroicons-x-mark"
              @click="isLoginOpen = false"
            />
          </div>
        </div>
        <UInput
          placeholder="Enter your phone number"
          size="xl"
          class="mt-6"
        />
        <UButton
          size="xl"
          class="flex justify-center mt-4"
        >
          Sign in
        </UButton>
      </div>
    </UModal>
  </header>
</template>
