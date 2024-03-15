<script setup lang="ts">
const locationModal = ref(false);
const locations = ref([
  {
    value: "tashkent",
    label: "Tashkent",
  },
  {
    value: "andijan",
    label: "Andijan",
  },
  {
    value: "bukhara",
    label: "Bukhara",
  },
  {
    value: "fergana",
    label: "Fergana",
  },
  {
    value: "jizzakh",
    label: "Jizzakh",
  },
  {
    value: "nukus",
    label: "Nukus",
  },
  {
    value: "karshi",
    label: "Karshi",
  },
  {
    value: "urgench",
    label: "Urgench",
  },
  {
    value: "namangan",
    label: "Namangan",
  },
  {
    value: "navoiy",
    label: "Navoiy",
  },
  {
    value: "samarkand",
    label: "Samarkand",
  },
  {
    value: "termez",
    label: "Termez",
  },
]);
const selectedLocation = ref("fergana");
</script>

<template>
  <div
    class="text-brand-txt flex items-center justify-between py-3 text-sm font-medium"
  >
    <div>
      <p>About us</p>
    </div>
    <div class="flex items-center gap-x-3">
      <p
        class="cursor-pointer duration-200 hover:underline underline-offset-4"
        @click="locationModal = true"
      >
        Location ({{
          locations.find((x) => x.value === selectedLocation)?.label
        }})
      </p>
      <p>Language</p>
    </div>
  </div>

  <UModal v-model="locationModal" :transition="false" prevent-close>
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="font-semibold">Pick your location</h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="locationModal = false"
          />
        </div>
      </template>

      <div class="grid grid-cols-2 gap-y-3">
        <URadio
          v-for="location in locations"
          :key="location.value"
          v-model="selectedLocation"
          v-bind="location"
          @click="locationModal = false"
        />
      </div>
    </UCard>
  </UModal>
</template>
