<template>
  <div id="novo-rodizio">
    <h5>Novo Rodizio</h5>
    <div class="row">
      <form @submit.prevent="salvarRodizio">
        <div class="row">
          <div class="col s4">
            <div class="input-field">
              <input type="text" v-model="rodizio.descricao" required>
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
                <input type="checkbox" v-model="rodizio.dias.seg">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" v-model="rodizio.dias.ter">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" v-model="rodizio.dias.qua">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" v-model="rodizio.dias.qui">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" v-model="rodizio.dias.sex">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" v-model="rodizio.dias.sab">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" v-model="rodizio.dias.dom">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" v-model="rodizio.dias.rjm">
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
        <div class="row part" v-for="participante in rodizio.participantes" v-bind:key="participante.ordem">
          <div class="col s2">
            <div class="input-field">
              <input type="text" v-model="participante.nome" required>
              <label>Nome</label>
            </div>
          </div>
          <div class="col s2">
            <div class="input-field">
              <input type="text" v-model="participante.telefone" required>
              <label>Telefone</label>
            </div>
            <a class="btn-floating btn-small blue">
              <i class="material-icons">arrow_drop_down</i>
            </a>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" :disabled="!rodizio.dias.seg" v-model="participante.disponibilidade.seg">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" :disabled="!rodizio.dias.ter" v-model="participante.disponibilidade.ter">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" :disabled="!rodizio.dias.qua" v-model="participante.disponibilidade.qua">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" :disabled="!rodizio.dias.qui" v-model="participante.disponibilidade.qui">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" :disabled="!rodizio.dias.sex" v-model="participante.disponibilidade.sex">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" :disabled="!rodizio.dias.sab" v-model="participante.disponibilidade.sab">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" :disabled="!rodizio.dias.dom" v-model="participante.disponibilidade.dom">
                <span class="lever"></span>
              </label>
            </div>
          </div>
          <div class="col s1">
            <div class="switch center-align">
              <label>
                <input type="checkbox" :disabled="!rodizio.dias.rjm" v-model="participante.disponibilidade.rjm">
                <span class="lever"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a @click="novoParticipante" class="btn-floating blue"><i class="material-icons">add</i></a>
          </div>
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
              seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false, rjm: false
            },
            participantes: []
          }
        }
      },
      methods: {
        novoParticipante () {
          this.rodizio.participantes.push({
            orgem: this.rodizio.participantes.length + 1,
            nome: '',
            telefone: '',
            disponibilidade: JSON.parse(JSON.stringify(this.rodizio.dias))
          })
        },
        apagaParticipante () {

        },
        salvarRodizio () {
          db.collection('rodizios').add({

          })
          .then(docRef => {
            this.$router.push('/')
          })
          .catch(error => {
            console.error(error)
          })
        }
      },
      watch: {
        'rodizio.dias': {
          handler: function () {
            this.rodizio.participantes.forEach(part => {
              part.disponibilidade.seg = this.rodizio.dias.seg
              part.disponibilidade.ter = this.rodizio.dias.ter
              part.disponibilidade.qua = this.rodizio.dias.qua
              part.disponibilidade.qui = this.rodizio.dias.qui
              part.disponibilidade.sex = this.rodizio.dias.sex
              part.disponibilidade.sab = this.rodizio.dias.sab
              part.disponibilidade.dom = this.rodizio.dias.dom
              part.disponibilidade.rjm = this.rodizio.dias.rjm
            });
          },
          deep: true
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

    .part & {
      margin-top: 20px;
    }
  }

  .row.part {
    margin-bottom: 0px;
  }

  .buttons {
    margin-top: 40px;
  }
</style>
