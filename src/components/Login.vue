<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card-panel blue white-text center">
            <h4>Login</h4>
            <form @submit.prevent="login" autocomplete="off">
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" v-model="email" required>
                <label class="white-text" for="email">E-mail</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="senha" v-model="senha" required>
                <label class="white-text" for="senha">Senha</label>
              </div>
              <button type="submit" class="btn btn-extended blue darken-3">Login</button>
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
  name: 'login',
  data: function() {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(
          user => this.$router.go({ path: this.$router.path }),
          err => alert(err.message)
        );
      e.preventDefault();
    }
  }
};
</script>

<style lang="less" scoped>
  .input-field i {
    margin-top: 5px;
  }

  .input-field .prefix.active {
    color: white;
  }

  input:focus {
    border-bottom: 1px solid #9e9e9e !important;
    box-shadow: none !important;
  }
</style>
