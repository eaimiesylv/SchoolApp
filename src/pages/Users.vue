<template>
  <div class="q-pa-md">
    <q-table
      title="Students Details"
      :rows="check"
      :columns="columns"
      :filter="filter"
      color="primary"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>

      <template v-slot:top-left>
        <q-input  dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { exportFile, useQuasar } from 'quasar'
import {computed,ref} from 'vue';
import {useStore} from 'vuex';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Username',
    align: 'left',
    field: row => row.username,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'image', label: 'Image', field: 'image'},
  { name: 'surname', label: 'Surname', field: 'surname', sortable: true },
  { name: 'middlename', label: 'Middlename', field: 'middlename'},
  { name: 'firstname', label: 'Firstname', field: 'firstname', sortable: true },
  { name: 'sex', label: 'Sex', field: 'sex', sortable: true },
  { name: 'clas',   label: 'Class',    field: 'clas', sortable: true },
  { name: 'armname', label: 'Armname', field: 'armname' },
  { name: 'address', label: 'Address', field: 'address'},
  { name: 'regno', label: 'Regno', field: 'regno', sortable: true },
  { name: 'nationality', label: 'Nationality', field: 'nationality', sortable: true },
  { name: 'state', label: 'State', field: 'state', sortable: true },
  { name: 'lga', label: 'LGA', field: 'lga', sortable: true },
 
  { name: 'email', label: 'Email', field: 'email', sortable: true, align: 'left' },
  { name: 'dateenrolled', label: 'Date Enrolled', field: 'dateenrolled', sortable: true,align: 'left' },
  
  
 
 


  



 
]

let rows = [
  {
    address: "002m",
    armname: "A",
    clas: "J.s.s 1",
    clasid: 1,
    dateenrolled: "2022-03-07T14:03:42.000000Z",
    email: "okomemmanuel1@gmail.com",
    firstname: "emmanuel",
    image: "0001m.jpg",
    lga: "0001m.jpg",
    middlename: "chinedu",
    nationality: "chinedu",
    regno: "002m",
    sex: "m",
    state: "emmanuel",
    surname: "okom",
    username: "okom",
  },
]

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

export default {
  setup () {
    const $q = useQuasar()
    const store = useStore();
    let std = computed(() => store.getters["allstudent/alluserGetters"]);
   // rows.push(std.value['allstd'])
   let check=std.value['allstd']
    //console.log(std.value['allstd']);
    return {
      columns,
      rows,
      std,
      check,
      filter: ref(''),
      exportTable () {
        // naive encoding to csv format
        const content = [columns.map(col => wrapCsvValue(col.label))].concat(
          rows.map(row => columns.map(col => wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format
          )).join(','))
        ).join('\r\n')

        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )

        if (status !== true) {
          $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
          })
        }
      }
    }
  }
}
</script>
