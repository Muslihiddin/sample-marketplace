<script setup lang="ts">
const quantity = ref(1);
const items = [
  "/images/products/iphone_x_01.jpg",
  "/images/products/iphone_x_02.jpg",
  "/images/products/iphone_x_03.jpg",
  "/images/products/iphone_x_04.jpg",
];

const tabs = [
  {
    label: "Overview",
    description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    ova: "Key Features:",
    slot: 'overview',
    items: [
      "slim body with metal cover",
      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDD R5 graphics card",
      "backlit keyboard, touch-pad with gesture support",
    ],
  },
  {
    label: "Reviews",
    slot: 'reviews',
    comments: [
      {
        author: 'Lee Chang',
        comment: 'Ben questions why people cry. He himself, has never cried. It fascinates him.',
        time: '15:12 14.03.2024',
        rating: '4/5'
      },
      {
        author: 'Ben',
        comment: "He's framed as the point of connection. Coming between the two.",
        time: '15:14 14.93.2024',
        rating: '5/5'
      }
    ]
  },
];
</script>

<template>
  <main class="pb-24 pt-4">
    <UContainer>
      <section>
        <div class="grid grid-cols-2 gap-x-4">
          <div>
            <UCarousel
              :items="items"
              :ui="{
                item: 'basis-full',
                container: 'rounded-lg',
                indicators: {
                  wrapper: 'mt-8',
                },
              }"
              indicators
              class="w-72 mx-auto h-full flex flex-col justify-center items-center"
            >
              <template #default="{ item }">
                <img
                  :src="item"
                  class="w-full"
                  draggable="false"
                >
              </template>

              <template #indicator="{ onClick, page, active }">
                <UButton
                  :label="String(page)"
                  :variant="active ? 'solid' : 'outline'"
                  size="sm"
                  class="min-w-6 justify-center"
                  @click="onClick(page)"
                />
              </template>
            </UCarousel>
          </div>

          <div>
            <p class="font-medium text-xl">
              Apple iPhone X 64GB Silver Fully Unlocked
            </p>
            <p class="flex items-center gap-x-2 mt-2">
              Seller: <span>Infix uz</span>
            </p>

            <UDivider class="my-5" />
            <div class="grid grid-cols-2 gap-2">
              <p class="text-muted">
                Color
              </p>
              <span>Black</span>
              <p class="text-muted">
                Memory
              </p>
              <span>128GB</span>
              <p class="text-muted">
                CPU
              </p>
              <span>Apple A15 GPU</span>
              <p class="text-muted">
                Screen
              </p>
              <span>6.56", 1612 x 720, IPS, 90 Hz</span>
              <p class="text-muted">
                iOS
              </p>
              <span>17+</span>
              <p class="text-muted">
                Camera
              </p>
              <span>50 MP + 18 MP</span>
            </div>

            <UDivider class="my-5" />
            <div class="flex items-center gap-x-4 border rounded p-4">
              <div
                class="border px-2 py-2 flex items-center justify-between gap-x-4"
              >
                <UIcon
                  name="i-heroicons-minus"
                  :class="{
                    'text-muted': quantity <= 1,
                    'cursor-pointer': quantity > 1,
                  }"
                  @click="
                    () => {
                      if (quantity > 1) quantity--;
                      else quantity = 1;
                    }
                  "
                />
                <input
                  v-model="quantity"
                  class="outline-none w-6 text-center"
                  type="number"
                  min="1"
                  max="999"
                  oninput="validity.valid||(value=0);"
                  style="
                    -moz-appearance: textfield;
                    appearance: textfield;
                    margin: 0;
                  "
                >
                <UIcon
                  name="i-heroicons-plus"
                  class="cursor-pointer"
                  @click="quantity++"
                />
              </div>
              <UButton class="h-11 px-8">
                Add to cart
              </UButton>
              <UButton variant="link">
                <UIcon
                  name="i-heroicons-heart"
                  class="w-5 h-5"
                />
                Add to wishlist
              </UButton>
              <UButton variant="link">
                <UIcon
                  name="i-heroicons-arrow-path-rounded-square"
                  class="w-5 h-5"
                />
                Compare
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-12">
        <UTabs
          :items="tabs"
          :ui="{
            list: {
              background: 'bg-white',
              width: 'w-[320px]',
              marker: {
                wrapper:
                  'absolute top-1 left-1 duration-200 ease-out focus:outline-none border-b',
                background: 'bg-white',
                shadow: 'shadow-none',
              },
              tab: {
                font: 'font-medium',
                size: 'text-base',
              }
            },
            container: 'w-full',
          }"
        >
          <template #overview="{ item }">
            <div class="text-brand-txt">
              <p>{{ item.description }}</p>
            
              <p class="mt-5">
                {{ item.ova }}
              </p>
              <ul class="pl-4 flex flex-col gap-y-2 mt-3">
                <li
                  v-for="el in item.items"
                  :key="el"
                >
                  {{ el }}
                </li>
              </ul>
            </div>
          </template>

          <template #reviews="{ item }">
            <div>
              <p class="text-xl font-medium">
                All reviews
              </p>
              <ul class="mt-5 max-w-[780px]">
                <li
                  v-for="el in item.comments"
                  :key="el.author"
                >
                  <p class="font-medium">
                    {{ el.author }}
                  </p>
                  <p class="text-sm mt-1 text-muted">
                    {{ el.rating }} <span>{{ el.time }}</span>
                  </p>
                  <p class="mt-2">
                    {{ el.comment }}
                  </p>
                  <UDivider class="mb-3 mt-5" />
                </li>
              </ul>
            </div>
          </template>
        </UTabs>
      </section>
    </UContainer>
  </main>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
