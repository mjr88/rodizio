<template>
  <div id="editar-rodizio">
    <h3>Editar Rodizio</h3>
    <div class="row">
      <form @submit.prevent="editarRodizio" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="descricao" required>
          </div>
        </div>
        <button type="submit" class="btn blue">Gravar</button>
        <router-link to="/" class="btn grey">Cancelar</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  import db from './Firebase'
  export default {
    name: 'editar-rodizio',
    data () {
      return {
        rodizio: {
          descricao: null
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('rodizios').doc(to.params.id).get()
        .then(doc => next(vm => {
          let rodizio = doc.data()
          vm.id = to.params.id
          vm.rodizio.descricao = rodizio.descricao
        }))
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('rodizios').doc(this.$route.params.id).get()
          .then(doc => {
            let rodizio = doc.data()
            this.id = this.$route.params.id
            this.rodizio.descricao = rodizio.descricao
          })
      },
      editarRodizio () {
        db.collection('rodizios').doc(this.$route.params.id).get()
          .then(doc => {
            doc.ref.update(rodizio)
            .then(() => this.$router.push({ name: 'ver-rodizio', params: { id: this.id }}))
          })
      }
    }
  }
</script>