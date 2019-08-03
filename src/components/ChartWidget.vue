<template>
    <div class="row mb-4">
        <div class="col-sm-12">
            <h3 class="mb-3"><font-awesome-icon icon="chart-area"/> خلاصه بازار</h3>
            <ul class="nav nav-tabs main-tab">
                <li class="active"><a data-toggle="tab" href="#home">بورس</a></li>
                <li><a data-toggle="tab" href="#menu1">فرابورس</a></li>
                <li><a data-toggle="tab" href="#menu2">ارز</a></li>
                <li><a data-toggle="tab" href="#menu3">آتی</a></li>
            </ul>
            <h6 class="title-chart">{{indextitle}}</h6>
            <div class="small">
                <line-chart :chart-data="datacollection" :options="options" :height="250"></line-chart>
            </div>
            <ul class="nav nav-tabs time-tab">
                <li v-on:click="time_list_click('1D')"><a data-toggle="tab" href="#1D">امروز</a></li>
                <li v-on:click="time_list_click('1W')" class="active"><a data-toggle="tab" href="#1W">هفته</a></li>
                <li v-on:click="time_list_click('1MN')"><a data-toggle="tab" href="#1MN">ماه</a></li>
                <li v-on:click="time_list_click('1Y')"><a data-toggle="tab" href="#1Y">سال</a></li>
                <li v-on:click="time_list_click('ALL')"><a data-toggle="tab" href="#ALL">کل</a></li>
            </ul>
            <ul class="list-group list-index">
                <li class="list-group-item" v-for="(indice, index) in bourse_indices" v-bind:key="indice" v-bind:class="{ active: indice.active }" v-on:click="indice_list_click(index)">
                    <div class="row">
                        <div class="col-sm-8">{{indice.name}}</div>
                        <div class="col-sm-4">
                            <font-awesome-icon icon="caret-up" style="color: #14cc37;"/>
                            <span>{{indice.value}}%</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import LineChart from './LineChart'

    export default {
        components: {
            LineChart
        },
        data () {
            return {
                datacollection: null,
                options: null,
                indextitle: 'شاخص کل',
                bourse_indices: null,
           }
        },
        mounted () {
            this.fillData()
            // Select all tabs
            // window.$('.nav-tabs a').click(function(){
            // window.$(this).tab('show');
            // })

            // // Select tab by name
            // window.$('.nav-tabs a[href="#home"]').tab('show')

            // // Select first tab
            // window.$('.nav-tabs a:first').tab('show')

            // // Select last tab
            // window.$('.nav-tabs a:last').tab('show')

            // // Select fourth tab (zero-based)
            // window.$('.nav-tabs li:eq(3) a').tab('show')
            this.bourse_indices = [{name: 'شاخص کل', value: 100, active: true},
            {name: 'شاخص كل (هم وزن)', value: 100, active: false},
            {name: 'شاخص آزاد شناور', value: 100, active: false},
            {name: 'شاخص بازار اول', value: 100, active: false},
            {name: 'شاخص بازار دوم', value: 100, active: false},]
        },
        methods: {
            fillData () {
                this.datacollection = {
                    labels: this.getRandomArray(100),
                    datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#BBDEFB',
                        borderColor: '#1E88E5',
                        pointRadius: 0,
                        borderWidth: 2,
                        data: this.getRandomArray(100)
                    }]
                }
                this.options = {
                    responsive: true,
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: false
                    },
                    legend: {
                        display: false
                    },
					scales: {
						xAxes: [{
							gridLines:  {
                                display: false
                            }
						}],
						yAxes: [{
                            gridLines:  {
                                display: false
                            }
						}]
					}
                    
                    
                }
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            },
            getRandomArray (size)
            {
                var mainArray = []
                for(var i=0;i<size;i++)
                    mainArray.push(this.getRandomInt())
                return mainArray;
            },
            indice_list_click: function (index) {
                // this.$notify({
                //     group: 'foo',
                //     title: 'Important message',
                //     text: index
                // });
                this.select_indice_list(index);
            },
            select_indice_list: function(index) {
                this.bourse_indices.forEach(element => {
                    element.active = false;
                });
                this.bourse_indices[index].active = true;
                this.indextitle = this.bourse_indices[index].name;
                this.fillData();
            },
            time_list_click: function(time) {
                switch(time) {
                    case '1D':
                        this.fillData();
                        break;
                    case '1W':
                        this.fillData();
                        break;
                    case '1MN':
                        this.fillData();
                        break;
                    case '1Y':
                        this.fillData();
                        break;
                    case 'ALL':
                        this.fillData();
                        break;
                    default:
                        this.fillData();
                        break;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    text-align: right;
}

.small {
    max-width: 350px;
    max-height: 250px;
    margin:  0 auto;
}

.main-tab li {
    margin: 5px auto;
}

.main-tab li a {
    color:#505050;
}

.main-tab li a:hover {
    background-color: #ECEFF1;
    color:#1565C0;
    text-decoration: none;
}

.main-tab li.active a {
    color:#1565C0;
}

.list-index {
    margin-top: 10px;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
}

.list-index li {
    text-align: right;
    padding: 1rem .5rem;
}

.list-index li.active {
    z-index: 2;
    color: rgb(53, 53, 53);
    background-color:#ECEFF1;
    border-color: #ECEFF1;
}

.time-tab {
    border-bottom: none;
}

.time-tab li {
    margin: 3px 3px;
    padding: 2px 10px;
    border-radius: 3px;
}

.time-tab li.active {
    background-color:#CFD8DC;
    border-color: #CFD8DC;
}

.time-tab li a {
    color:#0D47A1;
}

.title-chart {
    margin: 10px auto;
}

</style>
