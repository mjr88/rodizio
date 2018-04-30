<template>
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <router-link to="/" class="brand-logo">Rodízios</router-link>
        <span v-if="logado" data-activates="sidebar" class="button-collapse hide-on-large-only link"><i class="material-icons">menu</i></span>
        <ul class="right hide-on-med-and-down">
          <li v-if="logado"><router-link to="/">Dashboard</router-link></li>
          <li v-if="logado"><router-link to="/registrar">Registrar</router-link></li>
          <li v-if="logado"><span class="usuario white-text">{{usuario}}</span></li>
          <li v-if="logado"><span v-on:click="logout" class="btn red lighten-1">Sair</span></li>
        </ul>
        <ul class="side-nav" id="sidebar">
          <li v-if="logado">
            <div class="user-view blue">
              <span class="white-text email">{{usuario}}</span>
              <span v-on:click="logout" class="btn red lighten-1">Sair</span>
            </div>
          </li>
          <li v-if="logado"><router-link to="/">Dashboard</router-link></li>
          <li v-if="!logado"><router-link to="/">Login</router-link></li>
          <li v-if="logado"><router-link to="/registrar">Registrar</router-link></li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'navbar',
  data() {
    return {
      logado: false,
      usuario: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.logado = true;
      this.usuario = firebase.auth().currentUser.email;
    }
  },
  mounted() {
    $(".button-collapse").sideNav({ closeOnClick: true });
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => this.$router.go({ path: '/' }));
    }
  }
};
</script>

<style lang="less" scoped>
  nav {
    margin-bottom: 10px;
  }

  span.link {
    cursor: pointer;
  }

  span.email {
    position: relative;
    left: 0px;
    top: 0px;
  }

  .user-view > span.btn {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .usuario {
    margin-right: 20px;
    margin-left: 30px;
  }
</style>
