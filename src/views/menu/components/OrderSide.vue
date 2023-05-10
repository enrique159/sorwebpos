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
        @click="asyncMessage"
      >
        <i class="ri-edit-line tc-white-3 ts-b2 mt-n1" />
      </v-btn>
    </section>

    <section class="list-products" v-if="!isOrderEmpty">
      <div
        class="list-product-item"
        v-for="(item, index) in order"
        :key="`product-list-${index}`"
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

    <div v-else class="image-empty-order">
      <img src="@/assets/icons/OrderEmpty.svg" alt="Order Empty" class="mb-4">
      <span class="ts-b3 tw-bold tc-text-light">No hay productos</span>
      <p class="ts-b4 tc-text-dark">
        Agregue productos para ver la order
      </p>
    </div>

    <section class="checkout">
      <div>
        <div class="d-flex justify-between mb-2">
          <span class="tc-text-light ts-b4">Subtotal</span>
          <span class="tc-text ts-b4">{{ getSubtotal }}</span>
        </div>
        <div class="d-flex justify-between mb-2">
          <span class="tc-text-light ts-b4">Descuento</span>
          <span class="tc-text ts-b4">$ 0.00</span>
        </div>
        <div class="divider mb-2" />
        <div class="d-flex justify-between">
          <span class="tc-text-light ts-b4">Total</span>
          <span class="tc-text ts-b4">{{ getSubtotal }}</span>
        </div>
      </div>

      <div class="payment">
        <span class="ts-b5 tc-text-dark">Métodos de pago</span>
        <div class="d-flex justify-between align-center pt-2">
          <div class="d-flex flex-column align-center">
            <v-btn
              class="bg-black-2 bc-black-3"
              :class="{ 'bg-white-3 bc-white-3': selectedPayMethod === 'cash', }"
              variant="outlined"
              @click="selectPaymentMethod('cash')"
            >
              <i class="ri-coins-fill ts-b3" :class="[ selectedPayMethod === 'cash' ? 'tc-black-1' : 'tc-white-2']" />
            </v-btn>
            <span class="ts-b5 tc-text-light">Efectivo</span>
          </div>

          <div class="d-flex flex-column align-center">
            <v-btn
              class="bg-black-2 bc-black-3"
              :class="{ 'bg-white-3 bc-white-3': selectedPayMethod === 'card', }"
              variant="outlined"
              @click="selectPaymentMethod('card')"
            >
              <i class="ri-bank-card-fill ts-b3" :class="[ selectedPayMethod === 'card' ? 'tc-black-1' : 'tc-white-2']" />
            </v-btn>
            <span class="ts-b5 tc-text-light">Tarjeta</span>
          </div>

          <div class="d-flex flex-column align-center">
            <v-btn
              class="bg-black-2 bc-black-3"
              :class="{ 'bg-white-3 bc-white-3': selectedPayMethod === 'codi', }"
              variant="outlined"
              @click="selectPaymentMethod('codi')"
            >
              <i class="ri-qr-code-fill ts-b3" :class="[ selectedPayMethod === 'codi' ? 'tc-black-1' : 'tc-white-2']" />
            </v-btn>
            <span class="ts-b5 tc-text-light">CoDi</span>
          </div>
        </div>
        <div class="d-flex pt-4">
          <v-btn rounded="xl" class="bg-white-3 w-100" elevation="0" :disabled="isOrderEmpty">
            <span class="tc-black-2 ts-b4 text-capitalize ls-0">Pagar Orden</span>
          </v-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/composables/stores/useOrder"
import { computed, ref } from "vue"
const { order, removeEntireItem } = useOrder()

type PaymentMethod = "cash" | "card" | "codi" | null

const getTotalPrice = (price: number, quantity: number) => {
  const totalPrice = price * quantity
  // convert to decimal if it's an enteger
  if (Number.isInteger(totalPrice)) {
    return `$${totalPrice}.00`
  }
  const regex = /\B(?=(\d{3})+(?!\d))/g
  if (totalPrice.toString().split(".")[1]?.length === 1) {
    return `$${totalPrice.toString().replace(regex, ",")}0`
  }
  // only show 2 decimals if it's a float
  const priceString = totalPrice.toString().split(".")[1]
  const priceStringFixed = priceString?.slice(0, 2)
  return `$${totalPrice
    .toString()
    .split(".")[0]
    .replace(regex, ",")}.${priceStringFixed}`
}

const getSubtotal = computed(() => {
  let subtotal = 0
  order.value.forEach((item) => {
    subtotal += item.item.price * item.quantity
  })
  return getTotalPrice(subtotal, 1)
})

const isOrderEmpty = computed(() => {
  return order.value.length === 0
})

// drag and drop
// const startDragging = () => {
//   console.log("start dragging")
// }

// const leftDragging = () => {
//   console.log("left dragging")
// }

// Payment method
const selectedPayMethod = ref<PaymentMethod>('cash')

const selectPaymentMethod = (method: PaymentMethod) => {
  selectedPayMethod.value = method
}

// Electron
const asyncMessage = () => {
  console.log("Sending message to server")
  window.electron.asyncMessage('texto de ida', (event: any, message: string) => {
    receiveMessage(message)
  })
}

function receiveMessage(message: string) {
  console.log("Received message from server: " + message)
}
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
    margin-bottom: 1rem;

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

  .image-empty-order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 400px;
    margin-bottom: 1rem;

    img {
      width: 100%;
      max-width: 128px;
      object-fit: contain;
      opacity: 0.5;
    }
  }

  .checkout {
    height: 100%;
    background-color: $color-black-2;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .divider {
      border-bottom: 1px dashed $color-black-3;
    }
  }
}
</style>
