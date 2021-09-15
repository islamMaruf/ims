<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                  </div>
                  <form class="user" @submit.prevent="login">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="form.email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address"
                      />
                      <small v-if="errors.email" class="text-danger">
                        {{ errors.email[0] }}
                      </small>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="form.password"
                        placeholder="Password"
                      />
                      <small v-if="errors.password" class="text-danger">
                        {{ errors.password[0] }}
                      </small>
                    </div>
                    <div class="form-group">
                      <div
                        class="custom-control custom-checkbox small"
                        style="line-height: 1.5rem"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Login
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link to="/register" class="font-weight-bold small">
                      Create an Account!
                    </router-link>
                  </div>
                  <div class="text-center">
                    <router-link
                      class="font-weight-bold small"
                      to="/forget-password"
                    >
                      Forget Password!
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    login() {
      axios
        .post("/api/login", this.form)
        .then((response) => {
          User.responseAfterLogin(response.data);
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          //   Toast.fire({
          //     icon: "warning",
          //     title: "Email or Password mismatch",
          //   });
        });
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style>
</style>
