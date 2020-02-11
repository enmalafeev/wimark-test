<template lang="pug">
  div.table-users
    h1.table-users__header Table of users
    table.table
      thead
        tr
          th(
            v-for="header in this.tableHeader"
          ) {{header}}

</template>

<script>
export default {
  name: 'table-users',
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
