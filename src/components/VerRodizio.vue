<template>
  <div id="ver-rodizio">
    <ul class="collection with-header">
      <li class="collection-header"><h4>{{rodizio.descricao}}</h4></li>
    </ul>
    <router-link to="/" class="btn grey">Voltar</router-link>
    <button @click="apagarRodizio" class="btn red">Apagar</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{ name: 'editarRodizio', params: { id: rodizio.id }}" class="btn-floating blue">
        <i class="material-icons">edit</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './Firebase';
export default {
  name: 'ver-rodizio',
  data() {
    return {
      rodizio: {
        id: null,
        descricao: null,
        participantes: null,
        dias: null
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    db
      .collection('rodizios')
      .doc(to.params.id)
      .get()
      .then(doc => next(vm => {
        let rodizio = doc.data()
        vm.rodizio.id = rodizio.id
        vm.rodizio.descricao = rodizio.descricao
        vm.rodizio.participantes = rodizio.participantes
        vm.rodizio.dias = rodizio.dias
      }));
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      db
        .collection('rodizios')
        .doc(this.$route.params.id)
        .get()
        .then(doc => {
          let rodizio = doc.data()
          this.rodizio.id = rodizio.id
          this.rodizio.descricao = rodizio.descricao
          this.rodizio.participantes = rodizio.participantes
          this.rodizio.dias = rodizio.dias
        });
    },
    apagarRodizio() {
      if (confirm('Tem certeza?')) {
        db
          .collection('rodizios')
          .doc(this.$route.params.id)
          .delete();
        this.$router.push('/');
      }
    }
  }
};
</script>
