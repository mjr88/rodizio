<template>
  <div id="registrar">
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel blue white-text center">
            <h4>Registrar</h4>
            <form action="/">
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" v-model="email">
                <label class="white-text" for="email">E-mail</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="senha" v-model="senha">
                <label class="white-text" for="senha">Senha</label>
              </div>
              <button v-on:click="registrar" class="btn btn-extended blue darken-4">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'registrar',
  data: function() {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    registrar: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.senha)
        .then(
          user => this.$router.go({ path: this.$router.path }),
          err => alert(err.message)
        );
      e.preventDefault();
    }
  }
};
</script>

<style>
  .input-field i {
    margin-top: 5px;
  }

  .input-field .prefix.active {
    color: white;
  }

  input:focus {
    border-bottom: 1px solid #9e9e9e !important;
  }
</style>
