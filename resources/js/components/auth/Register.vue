<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Register</h1>
                  </div>
                  <form @submit.prevent="register">
                    <div class="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="from.name"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                      <small v-if="errors.name" class="text-danger">
                        {{ errors.name[0] }}
                      </small>
                    </div>

                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="from.email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address"
                      />
                      <small v-if="errors.email" class="text-danger">
                        {{ errors.email[0] }}
                      </small>
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="from.password"
                        placeholder="Password"
                      />
                      <small v-if="errors.password" class="text-danger">
                        {{ errors.password[0] }}
                      </small>
                    </div>
                    <div class="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password_confirmation"
                        v-model="from.password_confirmation"
                        placeholder="Confirm Password"
                      />
                      <small v-if="errors.confirm_password" class="text-danger">
                        {{ errors.confirm_password[0] }}
                      </small>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Register
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link to="/" class="font-weight-bold small">
                      Already have an account?
                    </router-link>
                  </div>
                  <div class="text-center"></div>
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
      from: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    register() {
      axios
        .post("/api/sign-up", this.from)
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
          //     title: "Something went wrong",
          //   });
        });
    },
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
