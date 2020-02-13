<template lang="pug">
  router-link(
    tag="tr"
    :to='`/user-page/${userData.id}`'
    )
    td {{`${userData.userData.first_name} ${userData.userData.last_name}`}}
    td {{userData.userData.mac}}
    td {{userData.userData.phone}}
    //- pre {{userData.userData.signals}}
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
