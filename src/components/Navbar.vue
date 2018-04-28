 <template>
  <nav>
      <div class="nav-wrapper blue">
        <div class="container">
          <router-link to="/" class="brand-logo">Rodízios</router-link>    
          <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-small-only">
            <li v-if="logado"><router-link to="/">Dashboard</router-link></li>
            <li v-if="!logado"><router-link to="/login">Login</router-link></li>
            <li v-if="logado"><router-link to="/registrar">Registrar</router-link></li>
            <li v-if="logado"><span class="email white-text">{{usuario}}</span></li>
            <li v-if="logado"><span v-on:click="logout" class="btn red lighten-1">Sair</span></li>
          </ul>
          <ul class="side-nav" id="mobile-nav">
            <li v-if="logado"><router-link to="/">Dashboard</router-link></li>
            <li v-if="!logado"><router-link to="/login">Login</router-link></li>
            <li v-if="logado"><router-link to="/registrar">Registrar</router-link></li>
            <li v-if="logado"><span v-on:click="logout">Sair</span></li>
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
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style scoped>
.email {
  padding-right: 20px;
  padding-left: 30px;
}
</style>