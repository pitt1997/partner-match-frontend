<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup>

import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const userAccount = ref();
const password = ref();

const onSubmit = async () => {
  console.log("用户登录");
  const res = await myAxios.post("/user/login", {
    userAccount: userAccount.value,
    userPassword: password.value
  });

  console.log("res -> ", res);

  if (res.code === 0 && res.data != null) {
    Toast.success("登录成功");
    router.replace("/")
  } else {
    Toast.fail("登录失败");
  }
};

</script>

<style scoped>

</style>