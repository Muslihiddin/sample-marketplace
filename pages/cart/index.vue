<script setup lang="ts">
const quantity = ref(1);
const liked = ref(false);
</script>

<template>
  <main class="pb-24">
    <UContainer>
      <h3 class="text-2xl font-medium flex items-center justify-between">
        Cart <span class="text-muted">2 products</span>
      </h3>
      <div class="flex gap-x-4 mt-6">
        <div class="w-2/3 border p-4 rounded">
          <ul>
            <li class="flex gap-x-3">
              <div class="flex items-start">
                <NuxtImg
                  src="/images/products/iphone_x_01.jpg"
                  class="w-32 h-32"
                  format="webp"
                />
                <div class="flex flex-col gap-6">
                  <div>
                    <p class="font-medium">
                      Washing machine Beko WSPEROH616, 7.5kg, 1200 rpm, automatic
                    </p>
                    <p class="text-muted mt-1">
                      Seller: <span class="text-brand-txt">X Patron</span>
                    </p>
                  </div>
                  <div class="flex items-center gap-x-5">
                    <div
                      class="border px-2 py-2 flex items-center justify-between gap-x-4 w-32"
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
                        max="99"
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
                    <p class="text-2xl font-medium">
                      19 000 000 so'm
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-1 flex flex-col items-end justify-between">
                <div>
                  <UButton
                    v-show="liked"
                    icon="i-heroicons-heart-solid"
                    variant="soft"
                    size="xl"
                    @click="liked = false"
                  />
                  <UButton
                    v-show="!liked"
                    icon="i-heroicons-heart"
                    variant="soft"
                    size="xl"
                    @click="liked = true"
                  />
                </div>
                <div>
                  <UButton
                    icon="i-heroicons-trash"
                    variant="soft"
                    size="xl"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-between w-1/3 border p-4 rounded">
          <p class="font-medium">
            Payment
          </p>
          <div class="flex flex-col gap-y-2">
            <p class="flex items-center justify-between">
              Total: <span class="text-lg font-medium">19 000 000 so'm</span>
            </p>
            <UButton class="flex items-center justify-center p-3">
              Proceed with payment
            </UButton>
          </div>
        </div>
      </div>
      <div class="mt-24">
        <h4 class="text-2xl font-medium">
          Related products
        </h4>
        <div class="flex items-center gap-x-4 mt-4">
          <ProductCard
            v-for="item in 4"
            :key="item"
          />
        </div>
      </div>
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
