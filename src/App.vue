<template>
  <el-container id="app">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
  import Header from '@/components/Header/Header.vue'

  export default {
    components: {
      Header
    }
  }
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  transition: opacity .3s;
  opacity: 1;
}



.fade-leave-to {
  transition: opacity .3s;
  opacity: 0;
}
  
</style>