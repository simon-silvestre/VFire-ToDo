<template>
  <div id="app">
    <div class="navbar">
      <h2>VueFire To Do</h2>
    </div>
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .navbar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    background-color: #3EB3F6;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  }
  .navbar h2 {
    font-size: 30px;
    font-weight: 900;
    color: #fff;
    margin-left: 5%;
  }
</style>
