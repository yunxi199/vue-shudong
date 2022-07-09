<template>
  <div>

    <global-header :user="currentUser" v-if="$route.meta.cc"></global-header>
    <div class=".main">
        <router-view></router-view>
    </div>
    <footer class="text-center py-4 text-secondary bg-light mt-6" v-if="$route.meta.cc">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">@2022 树洞</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script>
  import GlobalHeader from './components/GlobalHeader.vue'

  export default {
    name: 'App',
    components: {
      GlobalHeader
    },
    data() {
      return {
        currentUser: {
          isLogin: false,
          userName: 'viking'
        }
      }
    }
  }
</script>

<style>

</style>