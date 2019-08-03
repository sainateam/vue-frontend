<template>
    <div class="k-grid k-grid--ver k-grid--root k-page">
			<div class="k-grid__item   k-grid__item--fluid k-grid  k-grid k-grid--hor k-login-v1" id="k_login_v1">

				<!--begin::Item-->
				<div class="k-grid__item  k-grid--hor">

					<!--begin::Heade-->
					<div class="k-login-v1__head">
						<div class="k-login-v1__head-logo">
							<a href="#">
								<img src="" alt="" />
							</a>
						</div>
						<div class="k-login-v1__head-signup">
							<h4>حساب کاربری ندارید؟</h4>
							<a href="#" class="k-link">ثبت نام</a>
						</div>
					</div>

					<!--begin::Head-->
				</div>

				<!--end::Item-->

				<!--begin::Item-->
				<div class="k-grid__item  k-grid  k-grid--ver  k-grid__item--fluid ">

					<!--begin::Body-->
					<div class="k-login-v1__body">

						<!--begin::Section-->
						<div class="k-login-v1__body-section">
							<div class="k-login-v1__body-section-info">
								<h3>فن‌آوری جدید در تحلیل بنیادی بورس</h3>
								<p>بیشتر در این باره بخونید...</p>
							</div>
						</div>

						<!--begin::Section-->

						<!--begin::Separator-->
						<div class="k-login-v1__body-seaprator"></div>

						<!--end::Separator-->

						<!--begin::Wrapper-->
						<div class="k-login-v1__body-wrapper">
							<div class="k-login-v1__body-container">
								<h3 class="k-login-v1__body-title">
									ورود به حساب
								</h3>

								<!--begin::Form-->
								<form class="k-login-v1__body-form k-form" autocomplete="off">
									<div class="form-group">
										<input class="form-control" v-model="username" type="text" placeholder="نام کاربری" name="username" autocomplete="off">
									</div>
									<div class="form-group">
										<input class="form-control" v-model="password" type="password" placeholder="رمز عبور" name="password" autocomplete="off">
									</div>
								</form>

								<!--end::Form-->

								<!--begin::Action-->
								<div class="k-login-v1__body-action">
									<a href="#" class="k-link">
										<span>رمز عبور را فراموش کرده‌اید؟</span>
									</a>
									<button type="submit" class="btn btn-pill btn-elevate" v-on:click="authenticate">ورود</button>
								</div>

								<!--end::Action-->

								<!--begin::Divider-->
								<div class="k-login-v1__body-divider">
									<div class="k-divider">
										<span></span>
										<span>یا</span>
										<span></span>
									</div>
								</div>

								<!--end::Divider-->

								<!--begin::Options-->
								<div class="k-login-v1__body-options">
									<a href="#" class="btn">
										<i class="fab fa-facebook-f"></i>
										فیسبوک
									</a>
									<a href="#" class="btn">
										<i class="fab fa-twitter"></i>
										توئیتر
									</a>
									<a href="#" class="btn">
										<i class="fab fa-google"></i>
										گوگل
									</a>
								</div>

								<!--end::Options-->
							</div>
						</div>

						<!--end::Wrapper-->
					</div>

					<!--begin::Body-->
				</div>

				<!--end::Item-->

				<!--begin::Item-->
				<div class="k-grid__item">
					<div class="k-login-v1__footer">
						<div class="k-login-v1__footer-link">
                            <router-link to="/" class="k-link">خانه</router-link>
							<a href="#" class="k-link">حریم خصوصی</a>
							<a href="#" class="k-link">قانونی</a>
							<a href="#" class="k-link">ارتباط</a>
						</div>
						<div class="k-login-v1__footer-info">
							<a href="#" class="k-link">&copy; 2019 SainaFund</a>
						</div>
					</div>
				</div>

				<!--end::Item-->
			</div>
		</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    authenticate () {
      const payload = {
        username: this.username,
        password: this.password
      }
      axios.post(this.$store.state.endpoints.obtainJWT, payload).then((response) => {
          this.$store.commit('updateToken', response.data.token)
          // get and set auth user
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
            // Set your Authorization to 'JWT', not Bearer!!!
              Authorization: `JWT ${this.$store.state.jwt}`,
              'Content-Type': 'application/json'
            },
            xhrFields: {
                withCredentials: true
            }
          }
          // Even though the authentication returned a user object that can be
          // decoded, we fetch it again. This way we aren't super dependant on
          // JWT and can plug in something else.
          const axiosInstance = axios.create(base)
          axiosInstance({
            url: "/user/",
            method: "get",
            params: {}
          })
            .then((response) => {
              this.$store.commit("setAuthUser",
                {authUser: response.data, isAuthenticated: true}
              )
              this.$router.push({name: 'Home'})
            })

        }).catch((error) => {
          this.console.log(error)
        })
    }
  }
}
</script>

<style>


</style>