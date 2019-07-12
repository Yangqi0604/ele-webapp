<template>
  <div :style="{backgroundColor:bodyBackGroundColor}" class="address-body">
    <address-header :title="title"></address-header>
    <add-address-form
      :formButton="formButton"
    ></add-address-form>
  </div>

</template>

<script>
  import AddressHeader from '@/components/public/AddressHeader.vue'
  import AddAddressForm from '@/components/address/add-address/add-address-form.vue'
    export default {
        name: "add-address",
        components:{
          "address-header":AddressHeader,
          "add-address-form":AddAddressForm
        },
      data(){
          return {
            bodyBackGroundColor:"#f5f5f5",
            title:"添加地址",
            formButton:"保存并使用"
          }
      }
    }
</script>

<style scoped>
 

</style>
