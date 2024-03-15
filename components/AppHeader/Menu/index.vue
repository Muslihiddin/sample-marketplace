<script setup lang="ts">
import { catalogMenu } from "./catalogMenu";

const availableCategories = ["Smartphone", "Beauty", "Clothes"];
const currentOpenCategory = ref("Smartphone");
const openSubmenu = computed(() =>
  catalogMenu.find((el) => el.category === currentOpenCategory.value)
);

defineProps<{
  isCatalogOpen: boolean;
}>();
</script>

<template>
  <div
    v-if="isCatalogOpen"
    class="absolute left-0 right-0 px-8"
  >
    <div 
      class="flex shadow-lg bg-white pb-5"
    >
      <div class="w-1/6">
        <ul class="p-1">
          <li
            v-for="item in availableCategories"
            :key="item"
            class="group px-2 py-3 flex items-center justify-between cursor-pointer hover:bg-blue-50 duration-200"
            @mouseover="currentOpenCategory = item"
          >
            <div class="flex items-center gap-x-2">
              <UIcon
                name="i-heroicons-light-bulb"
                class="w-5 h-5"
              />
              <p class="font-light text-sm">
                {{ item }}
              </p>
            </div>
            <UIcon
              name="i-heroicons-chevron-right"
              class="text-gray-400 group-hover:text-brand-txt duration-200"
            />
          </li>
        </ul>
      </div>
      <div class="flex-1 px-2 py-3 overflow-y-scroll h-[75vh]">
        <div>
          <p class="font-medium text-lg mt-1">
            {{ openSubmenu?.category }}
          </p>
          <div class="flex items-start justify-start flex-wrap gap-y-4 mt-2">
            <template
              v-for="(subcategory, index) in openSubmenu?.subcategories"
              :key="index"
            >
              <div
                v-if="index % 3 === 0"
                class="w-1/3"
              >
                <p class="text-base font-medium">
                  {{ subcategory.title }}
                </p>
                <ul class="mt-2 flex flex-col gap-1">
                  <li
                    v-for="el in subcategory.items"
                    :key="el.label"
                    class="text-sm text-gray-500 hover:text-primary cursor-pointer duration-200"
                  >
                    {{ el.label }}
                  </li>
                </ul>
              </div>
              <div
                v-if="index % 3 === 1"
                class="w-1/3"
              >
                <p class="text-base font-medium">
                  {{ subcategory.title }}
                </p>
                <ul class="mt-2 flex flex-col gap-1">
                  <li
                    v-for="el in subcategory.items"
                    :key="el.label"
                    class="text-sm text-gray-500 hover:text-primary cursor-pointer duration-200"
                  >
                    {{ el.label }}
                  </li>
                </ul>
              </div>
              <div
                v-if="index % 3 === 2"
                class="w-1/3"
              >
                <p class="text-base font-medium">
                  {{ subcategory.title }}
                </p>
                <ul class="mt-2 flex flex-col gap-1">
                  <li
                    v-for="el in subcategory.items"
                    :key="el.label"
                    class="text-sm text-gray-500 hover:text-primary cursor-pointer duration-200"
                  >
                    {{ el.label }}
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
