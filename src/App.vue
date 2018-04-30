<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import NovoRodizio from './components/NovoRodizio';

export default {
  name: 'app',
  components: {
    Navbar,
    NovoRodizio
  }
};
</script>
