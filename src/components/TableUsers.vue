<template lang="pug">
  div.container
    pre {{getUsersData}}
    h1.table-users__header Table of users
    table.table
      thead
        tr
          th.col(
            v-for="header in this.tableHeader"
          ) {{header}}

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'table-users',
  computed: {
    ...mapGetters(['getUsersData']),
    ...mapState({
      dataUsers: (state) => state.data,
    }),
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(['fetchData']),
  },
  data() {
    return {
      tableHeader: [
        'ФИО',
        'MAC',
        'Телефон',
      ],
    };
  },
};
</script>
