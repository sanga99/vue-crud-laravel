<template>
    <div>
        <textarea cols="30" rows="7" v-model="content"></textarea>
        <br>
        <button @click="updateContent">등록</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            item: [],
            content: '',
            updtateContent: '',
        }   
  },
  created(){
    axios.get(`http://192.168.0.189:8082/api/v1/prods/${this.$route.params.id}`)
      .then( res => {
        this.content = JSON.stringify(res.data.data.title).replace(/"/gi, "");
      })
  },
  methods: {
    updateContent(){
      this.updtateContent = this.content;

    },
  },

}
</script>

<style>

</style>