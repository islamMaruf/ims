<template>
  <div>
    <div class="row">
      <router-link to="/add-employee" class="btn btn-primary">
        Add Employee
      </router-link>
    </div>

    <div class="row mt-2 p-0">
      <input
        type="text"
        class="form-control col-md-3"
        v-model="search_term"
        placeholder="Search Here"
        @keyup="filterEmployee"
      />

      <select v-model="field" class="form-control ml-2 col-md-3">
        <option>name</option>
        <option>phone</option>
        <option>salary</option>
        <option>join_date</option>
      </select>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-3">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">All Employee</h1>
                  </div>
                  <div class="text-center">
                    <div class="table-responsive">
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Phone</th>
                            <th>Salary</th>
                            <th>Join Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="employee in employees" :key="employee.id">
                            <td>
                              <a href="#">{{ employee.name }}</a>
                            </td>
                            <td>
                              <img
                                height="35px"
                                width="35px"
                                :src="
                                  employee.photo
                                    ? employee.photo
                                    : 'backend/uploads/default_image.jpg'
                                "
                                class="rounded"
                                alt="..."
                              />
                            </td>
                            <td>{{ employee.phone }}</td>
                            <td>{{ employee.salary }}</td>
                            <td>{{ employee.join_date }}</td>

                            <td>
                              <router-link
                                :to="{
                                  name: 'edit-employee',
                                  params: { id: employee.id },
                                }"
                                class="btn btn-sm btn-primary"
                              >
                                Edit
                              </router-link>
                              <button
                                class="btn btn-sm btn-danger"
                                @click="deleteEmployee(employee.id)"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
      employees: [],
      search_term: "",
      field: "phone",
    };
  },
  methods: {
    fetchEmployee() {
      axios
        .get("/api/employee")
        .then((response) => {
          console.log(response.data);
          this.employees = response.data;
        })
        .catch((err) => {});
    },
    deleteEmployee(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.employees = this.employees.filter((employee) => {
            return employee.id != id;
          });
          axios
            .delete("/api/employee/" + id)
            .then()
            .catch((err) => {
              this.$router.push({ name: "employee" });
            });

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    filterEmployee() {
      if (this.search_term) {
        this.employees = this.employees.filter((employee) => {
          let accessField = this.field;
          return employee[accessField]
            .toLowerCase()
            .match(this.search_term.toLowerCase());
        });
      } else {
        this.fetchEmployee();
      }
    },
  },
  computed: {
    retriveUserImage: function (image) {
      if (image) {
        return image;
      }
      return "backend/uploads/default_image.jpg";
    },
  },

  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "/" });
    } else {
      this.fetchEmployee();
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
