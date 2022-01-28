<template>
  <div class="hello">
    <h1>Vue-Django Example</h1>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <router-link :to="{name: 'Post', params: {id:product.id}}">
          {{ product.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      products: [],
    }
    
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      axios.get("http://localhost:8000/api/v1/products/")
        .then(res => {
          this.products = res.data
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
