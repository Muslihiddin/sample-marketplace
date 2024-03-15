<script setup lang="ts">
const slider = ref(0)
const value = ref(0)
watch(slider, (newVal) => {
  if(newVal) {
    value.value = newVal
  }
})

const items = [
  {
    label: "Price",
    slot: 'slider',
    defaultOpen: true,
  },
  {
    label: "Brand",
    items: [
      { title: "Samsung" },
      { title: "Apple" },
      { title: "Xiaomi" },
      { title: "Huawei" },
      { title: "Vivo" },
    ],
    slot: 'checkbox',
    defaultOpen: true,
  },
  {
    label: "Series",
    items: [
      { title: "Samsung S series" },
      { title: "Vivo Y series" },
      { title: "Xiaomi Honor series" },
      { title: "Huawei nova series" },
      { title: "Honor A series " },
    ],
    slot: 'checkbox',
    defaultOpen: true,
  },
  {
    label: "Screens",
    items: [
      { title: "2340x1080" },
      { title: "2400x1080" },
      { title: "2340x1080" },
      { title: "2556x1179" },
      { title: "2176x1080" },
    ],
    slot: 'checkbox',
    defaultOpen: true,
  },
  {
    label: "OS Type",
    items: [
      { title: "Android 14" },
      { title: "Android 13" },
      { title: "Android 12" },
      { title: "Android 11" },
      { title: "EMUI 12" },
      { title: "iOS 17" },
      { title: "iOS 15" },
    ],
    slot: 'checkbox',
    defaultOpen: true,
  },
]
</script>

<template>
  <div>
    <UAccordion
      :items="items"
      multiple
    >
      <template #default="{ item, open }">
        <UButton variant="ghost">
          <p class="text-brand-txt">
            {{ item.label }}
          </p>
          <template #trailing>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="text-brand-txt w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
            />
          </template>
        </UButton>
      </template>

      <template #checkbox="{ item }">
        <ul class="px-[10px] flex flex-col gap-y-1">
          <li
            v-for="el in item.items"
            :key="el.label"
          >
            <UCheckbox    
              :label="el.title"
            />
          </li>
        </ul>
      </template>
      
      <template #slider>
        <div class="px-[10px]">
          <div class="mb-2 flex items-center gap-x-2">
            <p class="w-1/3">
              Up to:
            </p>
            <UInput
              v-model="value"
              type="number"
            />
          </div>
          <URange
            v-model="slider"
            size="sm"
            :min="0"
            :max="10000000"
          />
        </div>
      </template>
      
      <template #item="{ item }">
        <p>{{ item }}</p>
      </template>
    </UAccordion>
  </div>
</template>
