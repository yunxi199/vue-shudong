<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-lg-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar.url" :alt="column.title" class="rounded-circle border border-light my-3">
          <h4 class="card-title">{{column.title}}</h4>
          <p class="card-text text-left">{{column.description}}</p>
          <router-link to="/article" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    data() {
      return {}
    },
    computed: {
      columnList() {
        this.list.map(column => {
          if (!column.avatar) {
            column.avatar = require('../assets/avatar.jpg')
          }
          return column
        })
        return this.list
      }
    }
  }
</script>

<style scoped>
  img .card-body {
    width: 50px;
    height: 50px;
  }
  a {
    text-decoration: none;
    }
  a:hover {
    color:#ffffff;
    text-decoration: none;
  }

</style>