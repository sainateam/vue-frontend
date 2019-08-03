<template>
      <div>
    <div class="page-header">
      <MainNavBar></MainNavBar>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-sm-8">
          <MainHome></MainHome>
        </div>
        <div class="col-sm-4">
          <ChartWidget></ChartWidget>
          <div class="row mb-4">
            <div class="col-sm-12">
              <h3 class="mb-3"><font-awesome-icon icon="newspaper"/> آخرین اخبار</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row py-4 px-3 warning">
          معاملات بازارهای سرمایه گذاری دارای ریسک بسیار بالایی می‌باشد و امکان وجود ضرر است.
        </div>
        <div class="row">
          <div class="col-sm-4">
            test
          </div>
          <div class="col-sm-4">
            test
          </div>
          <div class="col-sm-4">
            test
          </div>
        </div>
      </div>
    </footer>
    <notifications group="foo" />
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>

</template>

<script>
require('chart.js')
import ChartWidget from './components/ChartWidget.vue'
import MainNavBar from './components/MainNavBar.vue'
import MainHome from './components/MainHome.vue'

export default {
  name: 'app',
  components: {
    ChartWidget,
    MainNavBar,
    MainHome
  },
  data () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style>

footer {
  background-color: rgb(20, 11, 48);
}

footer .container {
  background-color: rgb(43, 24, 87);
}

.warning {
  color: #9575CD;
  text-align: center;
  font-size: 10pt;
}
</style>
