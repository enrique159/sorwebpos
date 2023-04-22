<template>
  <div class="order-side">
    <section class="selected-table mb-7">
      <div class="table-info">
        <span class="ts-b3 tw-medium">Mesa 1</span>
        <span class="ts-b5 tc-white-4">4 personas</span>
      </div>
      <v-btn
        icon
        size="small"
        class="bg-black-3 d-flex justify-center align-center"
      >
        <i class="ri-edit-line tc-white-3 ts-b2" style="margin-top: -3px"></i>
      </v-btn>
    </section>

    <section class="list-products">
      <div
        class="list-product-item"
        v-for="(item, index) in order"
        :key="`product-list-${index}`"
        @mousedown="startDragging()"
        @mouseup="leftDragging()"
        @click="removeEntireItem(item.item)"
      >
        <div class="product-info">
          <span class="ts-b4 tw-medium product-info-name">{{
            item.item.name
          }}</span>
          <span class="ts-b5 tc-white-4">x{{ item.quantity }}</span>
        </div>
        <div class="product-price">
          <span class="ts-b5 tw-bold tc-white-1">{{
            getTotalPrice(item.item.price, item.quantity)
          }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/composables/useOrder";
import { computed } from "vue";
const { order, removeEntireItem } = useOrder();

const getTotalPrice = (price: number, quantity: number) => {
  const totalPrice = price * quantity;
  // convert to decimal if it's an enteger
  if (Number.isInteger(totalPrice)) {
    return `$${totalPrice}.00`;
  }
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  if (totalPrice.toString().split(".")[1]?.length === 1) {
    return `$${totalPrice.toString().replace(regex, ",")}0`;
  }
  // only show 2 decimals if it's a float
  const priceString = totalPrice.toString().split(".")[1];
  const priceStringFixed = priceString?.slice(0, 2);
  return `$${totalPrice
    .toString()
    .split(".")[0]
    .replace(regex, ",")}.${priceStringFixed}`;
};

const startDragging = () => {
  console.log("start dragging");
};

const leftDragging = () => {
  console.log("left dragging");
};

</script>

<style lang="scss" scoped>
.order-side {
  height: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;

  .selected-table {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .table-info {
      display: flex;
      flex-direction: column;
    }
  }

  .list-products {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
    max-height: 400px;
    padding: 0.3rem;
    overflow-y: auto;

    .list-product-item {
      display: flex;
      background-color: $color-black-3;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 0.6rem;
      border-radius: 0.5rem;
      cursor: pointer;
      // not allow to select text
      user-select: none;

      &:hover {
        background-color: $color-black-2;
      }

      .product-info {
        display: flex;
        gap: 0.2rem;
        align-items: center;

        .product-info-name {
          max-width: 130px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .product-info-id {
          width: 1.2rem;
          height: 1.2rem;
          background-color: $color-white-2;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
