<template></template>
<script>
import AppStorage from "../../helpers/AppStorage";
export default {
  created() {
    axios
      .post("/api/logout", {
        token: AppStorage.getToken(),
      })
      .then((response) => {
        console.log({ response });
        AppStorage.clear();

        Toast.fire({
          icon: "success",
          title: "Logout successfully",
        });

        this.$router.push({ name: "/" });
      })
      .catch((err) => {
        console.log({ err });
      });
  },
};
</script>
