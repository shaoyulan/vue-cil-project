<script>
import {ref, reactive, onMounted} from "vue";
import router from '@/router/'
import axios from 'axios'
import VueAxios from 'vue-axios'

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  },
  setup(){
      const url = 'https://script.google.com/macros/s/AKfycbzRgKHX0eSD0ZY_dvSxvXnUodWdGw4y_NLbzJvlLOM2bh5wjjIp/exec';
      const info_url = 'https://script.google.com/macros/s/AKfycbwQnbfmDLHTwUZn2QC7FE0P639_87flQKaItgqTzl8iqW7PEJ55/exec'

      let userData =  JSON.parse(sessionStorage.getItem('vue-cil-project'))
      let gender_info= reactive({arr:[]});
      let learn_from_there_info = reactive({arr: []});

      onMounted(() => {
        var data = JSON.stringify({
            action: 'getInfo',
        });

        axios.post( info_url , data)
        .then(function(res) {
          gender_info.arr = res.data.res_data.gendeer;
          learn_from_there_info.arr = res.data.res_data.learned_from_there;
        })
        .catch(function(error) {
            console.log(error);
        });
      })

      // modify
      let modifyData = reactive({
          name: userData.name,
          phone: userData.phone,
          birthYear: (new Date(userData.birthday)).getFullYear(),
          birthMonth: (new Date(userData.birthday)).getMonth() + 1,
          birthDate: (new Date(userData.birthday)).getDate(),
          address: userData.address,
          gender: userData.gender,
          about: userData.about,
      })

      var modifyHandler = function() {
          var data = JSON.stringify({
              action: 'modify_member_info',
              time: `${(new Date).toLocaleDateString()} ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`,

              id: modifyData.id,
              name: modifyData.name,
              phone: modifyData.phone,
              birthday: modifyData.birthYear + '/' + modifyData.birthMonth + '/' + modifyData.birthDate,
              address: modifyData.address,
              gender: modifyData.gender,
              where: [0,1,2],
              about: modifyData.about,
          });
          console.log('modify sumbit', modifyData)

          axios.post(url , data)
          .then(function(res) {
              console.log('modify data success',res.data);
          })
          .catch(function(error) {
              console.log('modify data fail',error);
          });
      }


      // modify pwd
      let modifyPwdData = reactive({
          pwd: null,
          confirmdation_pwd: null,
      })

      var modifyPwdHandler = function() {
          var data = JSON.stringify({
              action: 'modify_pwd',
              time: `${(new Date).toLocaleDateString()} ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`,

              id: modifyData.id,
              pwd: modifyData.pwd,
              confirmdation_pwd: modifyData.confirmdation_pwd,
          });
          console.log('modify pwd submit', modifyData)

          axios.post(url , data)
          .then(function(res) {
              console.log('modify pwd success',res.data);
          })
          .catch(function(error) {
              console.log('modify pwd fail',error);
          });
      }

      return {
          gender_info,
          learn_from_there_info,

          modifyData,
          modifyHandler,

          modifyPwdData,
          modifyPwdHandler,
      }
    }
}
</script>

<template>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png" class="vue-logo"> -->
    <div class="py-4"></div>
    <form @submit.prevent="modifyHandler" class="form-block">
      <h2>會員資料修改</h2>
      <div class="form-group">
        <label class="form-label" for="#{label}">Username</label>
        <div class="input-group sty-squarebox">
          <input class="form-control" type="#{type}" id="#{label}"  v-model="modifyData.name"/>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="#{label}">Phone</label>
        <div class="input-group sty-squarebox">
          <input class="form-control" type="#{type}" id="#{label}"  v-model="modifyData.phone"/>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="#{label}">Birthday</label>
        <div class="form-row">
          <div class="col-4">
            <div class="input-group sty-squarebox sty-select" >
              <select name="" id="" class="custom-select" v-model="modifyData.birthYear">
                <option :value="2021 - idx" v-for="idx in 50">
                  {{ 2021 - idx }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group sty-squarebox sty-select">
              <select name="" id="" class="custom-select" v-model="modifyData.birthMonth">
                <option :value="idx" v-for="idx in 12">
                  {{ idx }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group sty-squarebox sty-select">
              <select name="" id="" class="custom-select" v-model="modifyData.birthDate">
                <option :value="idx" v-for="idx in 31" >
                  {{ idx }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="#{label}">Address</label>
        <div class="input-group sty-squarebox">
          <input class="form-control" type="#{type}" id="#{label}"  v-model="modifyData.address"/>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="#{label}">Gender</label>
        <div class="input-group sty-custom-control">
          <div class="custom-control custom-radio mr-sm-2" v-for="(item, idx) in gender_info.arr" :key="idx">
            <input type="radio" class="custom-control-input" :id="'gender-' + idx" name="gender" :value="idx" v-model="modifyData.gender">
            <label class="custom-control-label" :for="'gender-' + idx">{{item}}</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="#{label}">About</label>
        <div class="input-group sty-squarebox">
          <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="modifyData.about"></textarea>
        </div>
      </div>
      <div class="button-container">
        <button class="form-btn"><span>修改會員資料</span></button>
      </div>
    </form>

    <div class="py-4"></div>

    <form @submit.prevent="modifyPwdHandler" class="form-block">
      <h2>密碼修改</h2>
      <div class="form-group">
        <label class="form-label" for="#{label}">Password</label>
        <div class="input-group sty-squarebox">
          <input class="form-control" type="#{type}" id="#{label}"  v-model="modifyPwdData.pwd"/>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="#{label}">Confirm Password</label>
        <div class="input-group sty-squarebox">
          <input class="form-control" type="#{type}" id="#{label}"  v-model="modifyPwdData.confirmdation_pwd"/>
        </div>
      </div>
      <div class="button-container">
        <button class="form-btn"><span>修改會員密碼</span></button>
      </div>
    </form>

    <div class="py-4"></div>
  </div>
</template>

<style lang="scss" scoped >

.vue-logo { 
  display:block;
  margin:auto;
}

.form-block{
    background: #ed2553;
    padding: 40px;
    color: #fff;
}

form{
  width: 400px;
  margin:auto;
}

</style>
