<template lang="pug">
  div.container
    //- pre {{getUserSignals}}
    h1.table-users__header Table of users
    table.table
      thead
        tr
          th(
            v-for="header in this.tableHeader"
          ) {{header}}
      tbody
        tr(
            v-for="cell in getUsersData"
          )
          td {{`${cell.userData.first_name} ${cell.userData.last_name}`}}
          td {{cell.userData.mac}}
          td {{cell.userData.phone}}

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'table-users',
  computed: {
    ...mapGetters(['getUsersData', 'getUserSignals']),
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
