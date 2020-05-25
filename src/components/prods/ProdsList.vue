<template>
  <div>
      <h2>Prods</h2>
      <!-- <button @click="createContent">Create</button> -->
     <router-link to="/prods/create" style="margin-left:250px;"  tag="button">Create</router-link>
     <table style="margin-left:350px; text-align: center;">
         <thead>
             <tr>
                 <th>ID</th>
                 <th>TITLE</th>
             </tr>
         </thead>
         <tbody>
             <tr v-for="(item, index) in datas" :key="index">
                 <td>{{ item.id }}</td>
                <router-link :to="'/prods/'+item.id">
                            <!--  v-bind 해줘야함! -->
                    <td>{{ item.title }}</td>
                 </router-link>
             </tr>
         </tbody>
     </table>
  </div>
</template>

<script>
import { fetchProdsList } from '../../api/index.js';
// import { ProdCreate } from './ProdCreate';

export default {
    data() {
        return {
            datas: []
        }
    },
   created (){
    fetchProdsList()
            .then( (res) => {
                console.log(res);
                this.datas = res.data.data;
            })
            /*
                 만약, =>(화살표함수) 사용이 아닌,
                function으로 사용시엔 위에서 this를 명시 해줘야 한다!!

                var vm = this;
                
                .then( function(res) {  
                    vm.users = res.data;
                });
            
            */
            .catch(err =>{
                console.log(err);
            });

   },
   methods: {
    //    createContent(){
    //        this.$router.push({
    //            path: '/prods/create',
    //            component: ProdCreate,
    //        })
    //    }
   },

}
</script>

<style>

</style>