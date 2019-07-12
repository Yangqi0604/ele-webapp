<template>
  <div>
    <address-header :title="title"></address-header>
    <address-list></address-list>
    <add-address-bottom :addTitle="addTitle"></add-address-bottom>
  </div>
    
</template>

<script>
  import AddressHeader from '@/components/public/AddressHeader.vue'
  import AddAddressBottom from '@/components/address/search-address/add-address-bottom.vue'
  import AddressList from '@/components/address/search-address/address-list.vue'


  export default {
        name: "search-address",
        components:{
          "address-header":AddressHeader,
          "add-address-bottom":AddAddressBottom,
          "address-list":AddressList
        },
        data(){
          return {
            title:"选择地址",
            addTitle:"新增收货地址"
          }
        }

    }
</script>

<style scoped>


</style>
