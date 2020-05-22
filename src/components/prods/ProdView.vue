<template>
  <div>
    <!-- <div> {{ this.$route.params.id }}</div> -->
    <div> {{ item.id }}</div>
    <div> {{ item.title }}</div>
    <br>
    <button>Update</button>&nbsp;
    <button>Delete</button>
  </div>
</template>

<script>
import axios from 'axios'; 

export default {
  data() {
    // const contentId = Number(this.$route.params.id);
   return {
     item: []
   }   
  },
  created(){
    axios.get(`http://192.168.0.189:8082/api/v1/prods/${this.$route.params.id}`)
      .then( res => {
        this.item = res.data.data
      })
  },
}
</script>

<style>

</style>