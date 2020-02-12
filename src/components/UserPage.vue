<template lang="pug">
  div.container
    h1 {{$route.params.id}} Page
    button(@click="goBack") Назад
    pre {{$route.params}}
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
