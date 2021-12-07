<template>
  <div class="col-md-12 pt-5 pt-5">
    <div class="mycard card card-container">

      
      <img class="profile-img-card" src="https://i.imgur.com/iNFaRXx.jpg" />
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Email</label>
          <input
            type="text"
            class="form-control"
            name="email"
            v-model="user.email"
            v-validate="'required'"
          />
          <div
            class="alert alert-danger"
            role="alert"
            v-if="errors.has('email')"
          >Username is required!</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            v-model="user.password"
            v-validate="'required'"
          />
          <div
            class="alert alert-danger"
            role="alert"
            v-if="errors.has('password')"
          >Password is required!</div>
        </div>
        <div class="form-group d-flex justify-content-center">
          <button class="my-card-btn btn btn-danger btn-block mt-3" :disabled="loading">
            <span class="spinner-border spinner-border-sm" v-show="loading"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div class="alert alert-danger" role="alert" v-if="message">{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'login',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/listspace');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll();

      if (this.errors.any()) {
        this.loading = false;
        return;
      }

      if (this.user.email && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push('/listspace');
          },
          error => {
            this.loading = false;
            this.message = error.message;
          }
        );
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}
.my-card-btn {
    
    padding: 10px 28px;
    text-decoration: none;
    text-transform: capitalize;
    border-radius: 10px 0;
    transition: .5s
}
.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 40px 0;
  -webkit-border-radius: 40px 0;
  border-radius: 40px 0;
  -moz-box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
