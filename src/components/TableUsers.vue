<template lang="pug">
  div.container
    div.d-flex.justify-content-center.m-5(
      v-if="!loaded"
      )
      div.spinner-border.text-primary
      span.sr-only Loading...
    div.table-users(
      v-else
    )
      h1.table-users__header Table of users
      table.table.table-hover
        thead
          tr
            th(
              v-for="header in this.tableHeader"
            ) {{header}}
        tbody
          TableRow(
            v-for="row in getUsersData"
            :userData="row")

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import TableRow from './TableRow.vue';

export default {
  name: 'table-users',
  components: {
    TableRow,
  },
  computed: {
    ...mapGetters(['getUsersData', 'getUserSignals']),
    ...mapState({
      dataUsers: (state) => state.rawData,
      loaded: (state) => state.loaded,
    }),
  },
  created() {
    if (!this.dataUsers) {
      this.fetchData();
    }
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
