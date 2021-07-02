<template>
  <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="fields"
  ></vuetable>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default 
  {
    components: {
    Vuetable
  },
  data () {
    return {
      fields: [
        {
          name: 'name',
          title: 'DescriptionLog',
          sortField: 'name'
        },
        {
          name: 'email',
          title: 'User',
          sortField: 'name'
        },
        {
          name: 'birthdate',
          title: 'Date',
          sortField: 'birthdate',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        }
      ]
    }
  }
}
</script>