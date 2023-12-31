<template>
   <div v-if="products.length > 0">
    <ProductsListItem 
    v-for="(product, i) in products"
    v-on:remove-from-cart="$emit('remove-from-cart', $event)"
    :key="i"
    :product="product" />
  </div>
  <p v-else>You haven't added anything to your cart yet</p>
</template>

<script>
import ProductsListItem from './ProductsListItem'
export default{
    name: 'ProductList',
    props: ['products'],
    components:{
        ProductsListItem,
    },
}
</script>