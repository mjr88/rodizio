<template>
  <div id="novo-rodizio">
    <h5>Novo Rodizio</h5>
    <div class="row">
    <form @submit.prevent="salvarRodizio" class="col s12">
      <div class="row">
        <div class="col s4">
          <div class="input-field">
            <input type="text" v-model="descricao" required>
            <label>Descrição</label>
          </div>
        </div>
        <div class="col s1">
          <div class="label center-align">Seg</div>
        </div>
        <div class="col s1">
          <div class="label center-align">Ter</div>
        </div>
        <div class="col s1">
          <div class="label center-align">Qua</div>
        </div>
        <div class="col s1">
          <div class="label center-align">Qui</div>
        </div>
        <div class="col s1">
          <div class="label center-align">Sex</div>
        </div>
        <div class="col s1">
          <div class="label center-align">Sáb</div>
        </div>
        <div class="col s1">
          <div class="label center-align">Dom</div>
        </div>
        <div class="col s1">
          <div class="label center-align">RJM</div>
        </div>
      </div>
      <div class="row">
        <div class="col s4">
          <div>
            <div class="property center-align">Dias de Serviço</div>
          </div>
        </div>
        <div class="col s1">
          <div class="switch center-align">
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </div>
        <div class="col s1">
          <div class="switch center-align">
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </div>
        <div class="col s1">
          <div class="switch center-align">
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </div>
        <div class="col s1">
          <div class="switch center-align">
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </div>
        <div class="col s1">
          <div class="switch center-align">
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </div>
        <div class="col s1">
          <div class="switch center-align">
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </div>
        <div class="col s1">
          <div class="switch center-align">
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </div>
        <div class="col s1">
          <div class="switch center-align">
            <label>
              <input type="checkbox">
              <span class="lever"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s4">
          <div>
            <div class="property center-align">Participantes</div>
          </div>
        </div>
        <div class="col s8">
          <div>
            <div class="property center-align">Disponibilidade</div>
          </div>
        </div>
      </div>
      <div class="row">
          <a class="btn-floating blue"><i class="material-icons">add</i></a>
      </div>
      <div class="buttons">
        <button type="submit" class="btn blue">Gravar</button>
        <router-link to="/" class="btn grey">Cancelar</router-link>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
    import db from './Firebase'
    export default {
      name: 'novo-rodizio',
      data () {
        return {
          rodizio: {
            descricao: null,
            dias: {
              seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, rjm: false
            },
            participantes: []
          }
        }
      },
      methods: {
        salvarRodizio () {
          db.collection('rodizios').add({
            employee_id: this.employee_id,
            name: this.name,
            dept: this.dept,
            position: this.position
          })
          .then(docRef => {
            this.$router.push('/')
          })
          .catch(error => {
            console.error(error)
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  .row:first-child {
    margin-bottom: 0px;
    margin-top: 10px;
  }

  .input-field {
    margin-top: 0px;
  }

  .label {
    margin-top: 10px;
    color: #9e9e9e;
  }

  .property {
    color: #9e9e9e;
  }

  .switch label .lever {
    margin: 0;
  }

  .buttons {
    margin-top: 20px;
  }
</style>