<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark nav-top">
            <a class="navbar-brand" href="#"><img src="./../assets/saina-logo-white.svg" width="30" height="30" class="d-inline-block align-top" alt=""><img src="./../assets/saina-text.svg" height="30" class="d-inline-block align-top text-logo" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="جست و جو" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">برو</button>
                </form>
                <div class="form-inline my-2 my-lg-0">
                <a class="btn btn-outline-success my-2 my-sm-0" type="submit">ثبت نام</a>
                <router-link to="/login" class="btn btn-outline-success my-2 my-sm-0">ورود</router-link>
                  </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-dark nav-buttom">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">خانه <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">تحلیل‌ها</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        آموزشگاه
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">دروس</a>
                            <a class="dropdown-item" href="#">آزمون‌ها</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">دیده‌بان</a>
                    </li>
                </ul>
        </nav>
    </header>

</template>

<script>
export default {
  components: {
  },
  data () {
    return {
        showModal: false
    }
  },
  mounted() {
  }
}
</script>

<style>

.nav-top {
    background-color: rgb(43, 24, 87);
}

.text-logo {
    margin-right: 10px;
}

.nav-buttom {
    background-color: rgb(20, 11, 48);
}

</style>