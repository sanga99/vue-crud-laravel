<template>
  <div>
    <!-- <div> {{ this.$route.params.id }}</div> -->
    <div> {{ item.id }}</div>
    <div> {{ item.title }}</div>
    <br>
    <button @click="updateContent">Update</button>&nbsp;
    <button @click="deleteContent">Delete</button>
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
    axios.get(`http://192.168.0.189:8082/api/v1/vehicles/${this.$route.params.id}`)
      .then( res => {
        this.item = res.data.data
      })
  },
    methods: {
      updateContent(){
        this.$router.push({
          path: `/vehicles/update/${this.$route.params.id}`
        })
      },
      deleteContent(){
        axios.delete(`http://192.168.0.189:8082/api/v1/vehicles/${this.$route.params.id}`)
        .then(() => {
          this.$router.push({ path: '/vehicles'});
        })
        .catch(err => {
          throw err;
        })
      },

  },
}
</script>

<style>

</style>