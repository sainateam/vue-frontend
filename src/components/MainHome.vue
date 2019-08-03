<template>
    <div>
        <div class="row singup-msg mb-4 mx-0">
            <div class="col-sm-12">
                <h5>هم اکنون ثبت‌نام کنید</h5>
                <h7>قبل از اینکه بقیه خبردار بشن ثبت‌نام کن و اولین درس آموزشی رو بگذرون!</h7>
                <a href="#" class="btns green">ثبت نام</a>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-12 analysis">
                <h3 class="mb-3"><font-awesome-icon icon="book"/> تحلیل‌ها <small><a href="#">بیش‌تر <font-awesome-icon icon="angle-down"/></a></small></h3>
                <div class="row">
                    <div class="col-sm-6" v-for="analysis in analysisArray" v-bind:key="analysis">
                        <div class="card mb-3">
                            <img class="card-img-top" alt="Card image cap" v-lazy="'https://picsum.photos/600/400/?random'">
                            <div class="card-body">
                                <figure class="profile">
                                    <img v-lazy="'https://picsum.photos/50/50/?random'" class="profile-avatar" alt="">
                                </figure>
                                <h5>{{analysis.Title}}</h5>
                                <p class="card-text">{{analysis.Summery}}</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center card-footer">
                                <div class="btn-group">
                                <router-link :to="'/analysis/'+analysis.ID_Symbol.$oid" tag="button" class="btn btn-sm btn-outline-secondary">دیدن</router-link>
                                <button type="button" class="btn btn-sm btn-outline-secondary" v-if="false">ویرایش</button>
                                </div>
                                <small class="text-muted">{{digitsEnToFa(9)}} دقیقه پیش</small>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="gooey" v-if="this.analysisArray.length == 0">
                <span class="dot"></span>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-12 analysis">
                <h3 class="mb-3"><font-awesome-icon icon="university"/> آموزشگاه <small><a href="#">بیش‌تر <font-awesome-icon icon="angle-down"/></a></small></h3>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card mb-3">
                            <img class="card-img-top" alt="Card image cap" src="http://127.0.0.1:8000/static/assets/placeholder.png">
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center card-footer">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">شرکت کردن</button>
                                </div>
                                <small class="text-muted">{{digitsEnToFa(20)}} جلسه</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import { digitsEnToFa } from "persian-tools";

export default {
  components: {
  },
  data () {
    return {
        analysisArray: []
    }
  },
  mounted() {
      axios
      .get('http://127.0.0.1:8000/api/v1/getLastAnalysis/4')
      .then(response => (this.analysisArray = response.data))
  },
  methods: {
    digitsEnToFa: digitsEnToFa,
    goToAnalysis: function() {
        //this.$route.push('/login')
    }
  }
}
</script>

<style scoped>
h3 {
    text-align: right;
}

.singup-msg {
    background-color: #C8E6C9;
    border-color: #66BB6A;
    border-width: 1rem;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
    color: #1B5E20;
}

.singup-msg h5 {
    margin-top: 20px;
}
/* button div */
#buttons {
  padding-top: 50px;
  text-align: center;
}

/* start da css for da buttons */
.btns {
    border-radius: 4px;
    padding: 7px 20px;
    font-size: 14px;
    text-decoration: none;
    margin: 24px;
    color: #fff;
    position: relative;
    display: inline-block;
}

.btns:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0px 2px 0px 0px #1B5E20;
}

.green {
  background-color: #2E7D32;
  box-shadow: 0px 5px 0px 0px #1B5E20;
}

.green:hover {
  background-color: #388E3C;
  color: #fff;
  text-decoration: none;
}

.analysis h3 small {
    font-size: 16px;
}

.analysis h3 small a {
    color: #212121;
    padding: 4px 15px;
    border-radius: 4px;
}

.analysis h3 small a:hover {
    color: #212121;
    background-color: #BDBDBD;
    color: #000;
    text-decoration: none;
}

.card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
}

.card-body {
    font-size: 10pt;
    text-align: right;
}

.card-body p {
    text-align: right;
}

.profile {
    position: absolute;
    top: 190px;
    right: 30px;
    display: inline-block !important;
    overflow: hidden;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin: 0;
    border: 1px solid #fff;
    border-radius: 50%;
}

.profile-avatar {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.gooey {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 142px;
  height: 40px;
  margin: -20px 0 0 -71px;
  background: #f5f5f5;
  filter: contrast(20);
}

.dot {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
    left: 15px;
    filter: blur(4px);
    background: #000;
    border-radius: 50%;
    transform: translateX(0);
    animation: dot 2.8s infinite;
}
.dots {
    transform: translateX(0);
    margin-top: 12px;
    margin-left: 31px;
    animation: dots 2.8s infinite;
}
span {
    display: block;
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 16px;
    filter: blur(4px);
    background: #000;
    border-radius: 50%;
}

@keyframes dot {
  50% {transform: translateX(96px)}
}
@keyframes dots {
  50% {transform: translateX(-31px)}
}

</style>