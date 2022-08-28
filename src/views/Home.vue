<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        {{ $t('general.welcome') }}
      </span>
      <div slot="body">
        <p>
          Get started with the Vue 2 boilerplate
        </p>
        {{storestate.username}}
      </div>
      <div slot="footer">
        Made with love by webtutorials.dev
      </div>
    </v-card>
  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VLayout from '@/layouts/Default.vue';
import VCard from '@/components/Card.vue';
import {store} from '@/store/authStore'
export default {
  /**
   * The name of the page.
   */
  name: 'HomeIndex',
  data() {
    console.log(store.state)
    return {
      storestate: store.state
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
