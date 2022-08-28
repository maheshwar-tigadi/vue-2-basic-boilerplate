import { reactive } from "vue";

/* ============
 * basic store
 * ============
 *
 * The store were the data can be shared between components of the application.
 */
export const store = {
  // made reactive to update the UI when there is change in state
  state: reactive({
    userName: '',
    authenticated: false
  }),
  updateName(name) {
    this.state.userName = name;
  },
  logout() {
    this.state.authenticated = false
  }
};