<template>
  <div class="c-navbar">
    <div class="c-cartWrapper">
      <div
        :class="{ 'c-cart-active': isMiniCartOn, 'c-cart': true }"
        @click="toggleMiniCart"
      >
        <span class="hidden-xs">My Cart</span>
        <span class="visible-xs"><i class="fa fa-shopping-cart"></i></span>
        <span>( {{ cartCount }} )</span>
        <div v-if="isMiniCartOn && cartCount > 0" class="c-miniCart">
          <ul class="c-miniCartList">
            <li v-for="item in customerCart" :key="item.name">
              <img
                :src="require('../assets/images/' + item.img)"
                :alt="item.name"
                class="miniCartImg"
              />
              <div class="c-miniCartContent">
                <span>{{ item.name }}</span>
                <span
                  >{{ item.qty }} x
                  <span class="c-miniCartPrice">${{ item.price }}</span></span
                >
                <span>Size: {{ item.size }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["cart"],
  data: function () {
    return {
      isMiniCartOn: false,
      customerCart: this.cart,
    };
  },
  methods: {
    toggleMiniCart() {
      this.isMiniCartOn = !this.isMiniCartOn;
    },
  },
  computed: {
    cartCount() {
      return this.customerCart.length ? this.customerCart.length : 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-navbar {
  width: 100%;
  background: $header-bg;
}

.c-cartWrapper {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
}

.c-cart {
  color: $font-color-2;
  font-size: 12px;
  color: #888888;
  padding: 12px;
  display: flex;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
  }
}

.c-cart-active {
  background: white;
  border-style: solid;
  border: 1px solid $border-light-grey;
  border-bottom: 0;
  border-top: 0;
  box-sizing: border-box;
  color: $font-color-1;
}

.c-miniCart {
  display: block;
  width: 100%;
  @media screen and (min-width: 380px) {
    width: 200px;
  }
  border: 1px $border-light-grey solid;
  padding: 20px;
  padding-right: 25px;
  padding-top: 0;
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  color: $font-color-1;
}

.c-miniCartList {
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    display: flex;
    margin-top: 20px;
  }

  .c-miniCartPrice {
    font-size: 15px;
  }

  .miniCartImg {
    width: 40%;
  }
}

.c-miniCartContent {
  display: flex;
  flex-wrap: wrap;

  > span {
    width: 100%;
    display: block;
    flex-wrap: wrap;
  }
}

.hidden-xs {
  display: none;
  @media screen and (min-width: 380px) {
    display: inherit;
  }
}

.visible-xs {
  display: none;
  @media screen and (max-width: 380px) {
    display: inherit;
    padding: 2px;
  }
}
</style>
