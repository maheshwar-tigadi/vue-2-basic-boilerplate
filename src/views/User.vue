<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        My Users
      </span>
      <div slot="body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                First Name
              </th>
              <th>
                Last Name
              </th>
              <th>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ firstName | capitalize }}
              </td>
              <td>
                {{ lastName }}
              </td>
              <td>
                {{ email }}
              </td>
            </tr>
          </tbody>
        </table>

       <div>
          currency filters via global filter
       </div>
        suffix filter
        {{233 | currency}}
        <br>
        prefix
        {{233 | currency(true)}}
      </div>


    </v-card>
  </v-layout>
</template>

<script>
/* ============
 * User Index Page
 * ============
 *
 * Page where the user can view the all user information.
 */

import VLayout from '@/layouts/Default.vue';
import VCard from '@/components/Card.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'User',

  data() {
    return {
      firstName: 'tom',
      lastName: 'last',
      email: 'm@m.com'
    }
  },

  /**
   * The local filter to capitalize.
   */
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    VCard,
  },
};
</script>
