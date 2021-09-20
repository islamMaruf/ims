<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                  </div>
                  <form
                    @submit.prevent="insertEmployee"
                    enctype="multipart/form-data"
                  >
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.name"
                            id="name"
                            placeholder="Enter Full Name"
                          />
                          <small v-if="errors.name" class="text-danger">
                            {{ errors.name[0] }}
                          </small>
                        </div>
                        <div class="col-md-6">
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
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.address"
                            id="address"
                            placeholder="Enter Address"
                          />
                          <small v-if="errors.address" class="text-danger">
                            {{ errors.address[0] }}
                          </small>
                        </div>
                        <div class="col-md-6">
                          <input
                            type="number"
                            class="form-control"
                            id="salary"
                            v-model="form.salary"
                            placeholder="Enter Salary"
                          />
                          <small v-if="errors.salary" class="text-danger">
                            {{ errors.salary[0] }}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="date"
                            class="form-control"
                            id="joining_date"
                            placeholder="Enter Joining Date"
                            v-model="form.joining_date"
                          />
                          <small v-if="errors.joining_date" class="text-danger">
                            {{ errors.joining_date[0] }}
                          </small>
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="nid"
                            v-model="form.nid"
                            name="nid"
                            placeholder="Enter NID"
                          />
                          <small v-if="errors.nid" class="text-danger">
                            {{ errors.nid[0] }}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.phone"
                            id="phone"
                            placeholder="Enter Phone Number"
                          />
                          <small v-if="errors.phone" class="text-danger">
                            {{ errors.phone[0] }}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="customFile"
                              @change="onFileSelected"
                            />
                            <label class="custom-file-label" for="customFile"
                              >Choose file</label
                            >
                          </div>
                          <small v-if="errors.photo" class="text-danger">
                            {{ errors.photo[0] }}
                          </small>
                        </div>
                        <div class="col-md-6">
                          <img
                            v-show="form.photo"
                            id="profile-image"
                            :src="form.photo"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="col-sm-3 col-md-2 btn btn-primary btn-block"
                    >
                      Submit
                    </button>
                  </form>
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
        name: "",
        email: "",
        address: "",
        salary: "",
        joining_date: "",
        nid: "",
        phone: "",
        photo: "",
        image_name: "",
      },
      errors: {},
    };
  },
  methods: {
    insertEmployee() {
      axios
        .post("/api/employee", this.form)
        .then((response) => {
          Notification.success("Employee created successfully");
          this.$router.push({ name: "employees" });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
    onFileSelected(event) {
      let selectedFile = event.target.files[0];
      if (selectedFile) {
        $(".custom-file-label").text(selectedFile.name);
        if (selectedFile.size > 1048770) {
          Notification.error("Upload file size must be less than 1 MB");
        } else {
          var reader = new FileReader();
          reader.onload = (event) => {
            this.form.photo = event.target.result;
          };
          this.form.image_name = selectedFile.name;
          reader.readAsDataURL(selectedFile);
        }
      }
    },
  },
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "/" });
    }
  },
};
</script>

<style>
#profile-image {
  margin-left: 25px;
  margin-top: -50px;
  height: 100px;
  width: 120px;
  border-radius: 50%;
}
</style>
