<template>
  <div class="ToDo">
    <div class="ToDo__input">
      <input type="text" v-model="newItem" @keyup.enter="addItem">
      <span @click="addItem">ADD</span>
    </div>
      <ul class="list">
        <li v-for="ToDo in ToDos" :key="ToDo.id">
          <p class="list__text">{{ ToDo.name }}</p>
          <img src="@/assets/delete.webp" alt="poubelle" @click="deleteItem(ToDo.id)">
        </li>
      </ul>
      <div class="Accueil" v-show="Accueil()">
        <h2>Ajouter une To-Do !</h2>
        <p>+</p>
      </div>
  </div>
</template>

<script>
import {db} from '../firebase/db'
export default {
  data() {
    return {
      ToDos: [],
      newItem: ''

    }
  },
  methods: {
    async addItem() {
      if(this.newItem) {
        await db.collection('ToDos').add({ name: this.newItem });
        this.newItem = "";
      }
    },
    deleteItem(id) {
      db.collection('ToDos').doc(id).delete();
    },
    Accueil() {
      if(this.ToDos == false) {
        return true
      }
    }
  },
  firestore: {
    ToDos: db.collection("ToDos")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ToDo {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .ToDo__input {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .ToDo input {
    width: 50%;
    height: 50px;
    border: 2px solid #bdc4c9;
    border-radius: 5px;
    outline-color: #3EB3F6;
    font-size: 16px;
    font-weight: 800;
    color: #6a6f72;
    padding-left: 10px;
  }
  .ToDo span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 45px;
    font-weight: 700;
    color: #fff;
    border-radius: 5px;
    background-color: #3EB3F6;
    margin-left: 15px;
    cursor: pointer;
    transition: all .3s ease-in-out;
  }
  .ToDo span:hover {
    background-color: rgb(45, 129, 179);
  }
  .ToDo span:active {
    width: 98px;
    height: 43px;
  }
  ul {
    margin-top: 40px;
    width: calc(50% + 125px);
    list-style: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #E0EDF4;
    border-left: solid 4px #3EB3F6;
    margin-bottom: 10px;
  }
  li img {
    cursor: pointer;
    width: 20px;
    margin-right: 10px;
  }
  .list__text {
    width: 80%;
    margin-left: 5px;
    color: #3E5252;
    font-size: 16px;
    font-weight: 500;
  }
  .Accueil {
    position: absolute;
    top: calc(50% - 50px);
  }
  .Accueil h2 {
    font-size: 30px;
    font-weight: 900;
    color: #3EB3F6;
  }
  .Accueil p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 5px solid #3EB3F6;
    border-radius: 50%;
    color: #3EB3F6;
    font-size: 50px;
    font-weight: 900;
    margin: 20px auto;
  }
</style>
