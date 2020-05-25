<template>
    <div>
        <textarea cols="30" rows="7" v-model="content"></textarea>
        <br>
        <button @click="createContent">등록</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            item: [],
            content: '',
        }   
  },
  methods: {
      createContent(){
          const content = {  title : this.content };

          axios.post(`http://192.168.0.189:8082/api/v1/prods`, content)
            .then(() => {
                this.$router.push('/prods')
            })
            .catch((err) => {
                console.log(err);
            })

      }
  },

}
</script>

<style>

</style>