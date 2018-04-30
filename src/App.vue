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

<style lang="less">
  .btn-tiny {
    line-height: 14px;
    height: 16px;
    width: 16px;

    i {
      font-size: 0.8rem !important;
      line-height: 16px !important;
    }
  }

  .btn-small {
    line-height: 24px;
    height: 24px;
    width: 24px;

    i {
      font-size: 1.4rem !important;
      line-height: 24px !important;
      margin-top: 1px;
    }
  }

  @media screen and (max-width: 680px) {
    .row {
      margin-right: -0.2rem !important;
    }

    .switch label {
      input[type=checkbox]:checked+.lever::after {
        left: 13px;
      }

      .lever {
        height: 8px;
        width: 24px;
        margin: 0;

        &::before, &::after {
          height: 13px;
          width: 13px;
        }
      }
    }
  }
</style>
