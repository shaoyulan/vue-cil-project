<script>
import {ref, reactive} from "vue";
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

      // modify
      let modifyData = reactive({
          name: null,
          phone: null,
          birthday: null,
          address: null,
          gender: null,
          about: '<p>test</p><h2>TITLE</h2>',
      })

      var modifyHandler = function() {
          var data = JSON.stringify({
              action: 'modify_member_info',
              time: `${(new Date).toLocaleDateString()} ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`,

              id: modifyData.id,
              name: modifyData.name,
              phone: modifyData.phone,
              birthday: modifyData.birthday,
              address: modifyData.address,
              gender: modifyData.gender,
              where: [0,1,2],
              about: modifyData.about,
          });
          console.log('submit', modifyData)
          axios.post(url , data)
          .then(function(res) {
              console.log(res.data);
          })
          .catch(function(error) {
              console.log(error);
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
          console.log('submit', modifyData)
          axios.post(url , data)
          .then(function(res) {
              console.log(res.data);
          })
          .catch(function(error) {
              console.log(error);
          });
      }

      return {
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
            <div class="input-group sty-squarebox sty-select">
              <select name="" id="" class="custom-select">
                <option value="" v-for="idx in 50">
                  {{ 2021 - idx }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group sty-squarebox sty-select">
              <select name="" id="" class="custom-select">
                <option value="" v-for="idx in 12">
                  {{ idx }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group sty-squarebox sty-select">
              <select name="" id="" class="custom-select">
                <option value="" v-for="idx in 31">
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
          <div class="custom-control custom-radio mr-sm-2">
            <input type="radio" class="custom-control-input" id="male" name="gender" v-model="modifyData.gender">
            <label class="custom-control-label" for="male">男</label>
          </div>
          <div class="custom-control custom-radio mr-sm-2">
            <input type="radio" class="custom-control-input" id="female" name="gender" v-model="modifyData.gender">
            <label class="custom-control-label" for="female">女</label>
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
        <button class="btn btn-primary"><span>修改會員資料</span></button>
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
        <button class="btn btn-primary"><span>修改會員密碼</span></button>
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
