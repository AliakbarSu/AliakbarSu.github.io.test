<template>
  <Navbar :cart="updatedCart" />
  <div class="home">
    <Product v-on:addToCart="addToCart" />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Product from "./components/product.vue";

export default {
  name: "App",
  data: function () {
    return {
      cart: [
        // {
        //   name: "Cassic Tee",
        //   img: "classic-tee.jpg",
        //   qty: 2,
        //   size: "L",
        //   price: 75.4,
        // },
        // {
        //   name: "Cassic Tee 1",
        //   img: "classic-tee.jpg",
        //   qty: 1,
        //   size: "M",
        //   price: 65.4,
        // }
      ],
    };
  },
  components: {
    Product,
    Navbar,
  },
  computed: {
    updatedCart() {
      return this.cart;
    },
  },
  methods: {
    addToCart(product) {
      const itemIndex = this.cart.findIndex(
        (it) =>
          it.name.toLowerCase() == product.name.toLowerCase() &&
          it.size.toLowerCase() == product.size.toLowerCase()
      );
      if (itemIndex !== -1) {
        let toUpdate = this.cart[itemIndex];
        toUpdate = { ...toUpdate, qty: 1 + toUpdate.qty };
        this.cart.splice(itemIndex, 1, toUpdate);
        return;
      }

      this.cart.push({ ...product, qty: 1 });
    },
  },
};
</script>

<style lang="scss">
.home {
  padding-top: 20px;
  max-width: 1280px;
  margin: auto;
}

body {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 0;
  margin: 0;
  color: $font-color-1;
  font-family: "Inv Maison Neue", "Maison Neue", -apple-system,
    BlinkMacSystemFont, "Open Sans", open-sans, sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
