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
            // updtateContent: '',
        }   
  },
  created(){
    axios.get(`http://192.168.0.189:8082/api/v1/subscs/${this.$route.params.id}`)
      .then( res => {
        this.content = JSON.stringify(res.data.data.title).replace(/"/gi, "");
      })
  },
  methods: {
    updateContent(){
        const updateContent = { title: this.content };
                                // 객체 형태로 보내야함. ( laravel-tutorial 프로젝트의 Controller@update 와 연결)
      axios.patch(`http://192.168.0.189:8082/api/v1/subscs/${this.$route.params.id}`, updateContent)
        .then((res) => {
            alert(res.data);    // 하면 값이 True로 나온다. (patch의 결과는 T/F)
            this.$router.push(`/subscs/${this.$route.params.id}`);
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