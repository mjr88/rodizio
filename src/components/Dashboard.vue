<template>
  <div id="home">
    <ul class="collection">
      <li v-for="rodizio in rodizios" v-bind:key="rodizio.id" class="collection-item">
        <div class="chip">{{rodizio.participantes}}</div>
        {{rodizio.descricao}}
        <router-link class="secondary-content" v-bind:to="{ name: 'ver-rodizio', params: { id: rodizio.id }}"><i class="small material-icons">visibility</i></router-link>
      </li>
      <li v-if="rodizios.length === 0" class="collection-item center-align grey-text darken-7">
        Clique no botão abaixo para adicionar um novo rodízio
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/novo" class="btn-floating btn-large blue">
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './Firebase';
export default {
  name: 'dashboard',
  data() {
    return {
      rodizios: [],
      loading: true
    };
  },
  created() {
    db
      .collection('rodizios')
      .orderBy('descricao')
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            descricao: doc.data().descricao,
            participantes: doc.data().participantes.length
          };
          this.rodizios.push(data);
        });
      });
  }
};
</script>