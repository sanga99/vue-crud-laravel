<template>
  <div>
      <h2>Pkgs</h2>
       <router-link to="/pkgs/create" style="margin-left:250px;"  tag="button">Create</router-link>
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
                 <router-link :to="'/pkgs/'+item.id">
                            <!--  v-bind 해줘야함! -->
                    <td>{{ item.title }}</td>
                 </router-link>
             </tr>
         </tbody>
     </table>
  </div>
</template>

<script>
import { fetchPkgsList } from '../../api/index.js';
// import axios from 'axios';

export default {
    data() {
        return {
            datas: []
        }
    },
   created (){
    fetchPkgsList()
            .then( res => {
                console.log(res);
                this.datas = res.data.data;
            })
            .catch(err =>{
                console.log(err);
            });

   }

}
</script>

<style>

</style>