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
// import { fetchPkgView } from '../../api/index.js';     // (???) api/index.js 에서 ${this.$route.params.id} 를 부르면 인식안됨.
import axios from 'axios'; 

export default {
  data() {
    // const contentId = Number(this.$route.params.id);
   return {
     item: []
   }   
  },
  created(){
    // fetchPkgView()
    axios.get(`http://192.168.0.189:8082/api/v1/pkgs/${this.$route.params.id}`)
      .then( res => {
        this.item = res.data.data
      })
  },
}
</script>

<style>

</style>