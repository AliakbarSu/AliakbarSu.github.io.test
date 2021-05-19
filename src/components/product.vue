<template>
  <div class="c-productWrapper">
    <div class="c-product">
      <div class="c-productImage">
        <Image src="" />
      </div>
      <div class="c-productContent">
        <h1 class="c-productName">{{ product.name }}</h1>
        <p class="c-productPrice">${{ product.price }}</p>
        <p class="c-productDescription">{{ product.description }}</p>
        <div class="c-productSizes">
          <span class="c-productSizeTitle">Size <span>*</span></span>
          <span
            :class="{ isActive: isSelected(size), 'c-productSize': true }"
            v-for="size in product.sizes"
            :key="size"
            @click="selectSize(size)"
            >{{ size }}</span
          >
        </div>
        <div class="c-addToCart">
          <button @click="addToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "./image.vue";

export default {
  name: "Navbar",
  components: {
    Image,
  },
  props: {
    cart: { type: Array },
  },
  data: function () {
    return {
      product: {
        name: "Classic Tee",
        sizes: ["L", "M", "S"],
        img: "classic-tee.jpg",
        price: 12.22,
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      selectedSize: "",
    };
  },
  methods: {
    addToCart() {
      if (this.selectedSize.trim() == "") {
        alert("Please select a size first!");
        return;
      }
      this.$emit("addToCart", { ...this.product, size: this.selectedSize });
    },
    selectSize(size) {
      if (this.selectedSize.trim().toLowerCase() == size.trim().toLowerCase()) {
        this.selectedSize = "";
        return;
      }
      this.selectedSize = size;
    },
    isSelected(size) {
      return this.selectedSize.toLowerCase() === size.toLowerCase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-productWrapper {
  display: flex;
  align-content: center;
  width: 100%;
}

.c-product {
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  align-content: space-around;
  margin: auto;
}

.c-productContent {
  width: 100%;
  padding: 12px;
  @media screen and (min-width: 380px) {
    width: 50%;
  }
}

.c-productName {
  color: $font-color-1;
  font-size: 20px;
}

.c-productPrice {
  color: $font-color-1;
  border: 0.5px solid #eceaea;
  border-left: 0;
  border-right: 0;
  padding: 10px 0;
}

.c-productDescription {
  font-size: 12px;
  color: $font-color-2;
}
.c-productImage {
  width: 100%;
  @media screen and (min-width: 380px) {
    width: 50%;
  }
}

.c-productSizes {
  display: flex;
  flex-wrap: wrap;
  color: $font-color-2;

  .c-productSizeTitle {
    width: 100%;
    padding: 5px 0;
    text-transform: uppercase;

    > span {
      color: $required-star;
    }
  }
  .c-productSize {
    padding: 15px 18px;
    border: 1px solid $border-light-grey;
    &:hover {
      cursor: pointer;
      transition: 0.2s;
      color: $font-color-1;
    }
  }
}

.c-productSizeTitle {
  display: block;
  width: 100%;
  font-size: 12px;
}

.isActive {
  border: 1px solid $border-dark-grey !important;
  transition: 0.2s;
}

.c-addToCart {
  padding: 12px 0;
  > button {
    border: 2px solid $border-dark-grey;
    padding: 8px 28px;
    &:hover {
      background: $border-dark-grey;
      color: white;
      transition: 0.2s;
      cursor: pointer;
    }
  }
}
</style>
