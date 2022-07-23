<template>
  <van-card
      v-for="(user, index) in userList"
      :key="index"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatar"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="(tag, index) in tags" :key="index" style="margin-right: 8px; margin-top: 8px" >
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty v-if="!userList || userList.length === 0" description="搜索结果为空" />
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import qs from 'qs';

const route = useRoute();

const {tags} = route.query;

const userList = ref([]);

onMounted(async () => {
  console.log('我要请求。');
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    // param 序列化
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  }).then(function (response) {
    console.log('/user/search/tags success', response);
    Toast.success("请求成功.");
    console.log(response);
    return response.data?.data;
  }).catch(function (error) {
        console.error('/user/search/tags error' + error);
        Toast.fail("请求失败.");
  })
      // .then(function () {
      //   console.log("always executed");
      //   // always executed
      // });
  if (userListData) {
    console.log("get userListData");
    userList.value = userListData;
  }
})

const mockUser = ref({
  id: 1,
  userName: '鱼皮',
  userAccount: 'yupi',
  profile: '鱼皮的个人简介，全栈工程师，加油加油加油！！！！！',
  gender: '男',
  phone: '12345',
  email: '1253728@qq.com',
  planetCode: '123',
  avatar: 'https://img2.baidu.com/it/u=1790834130,1952230725&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  gmtCreate: new Date().toDateString()
})

</script>

<style scoped>

</style>