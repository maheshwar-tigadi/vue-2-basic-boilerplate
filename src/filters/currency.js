import Vue from 'vue';

/** ============
* global filter example
* ============
* NOTE: filter is removed in vue 3 version
* this is a global filter used render formated value in UI

* Method used to check if a Vue component has a slot.
*
* @param prefix The boolean value.
*
* @returns {string} with suffix or prefixed value.
*/
Vue.filter('currency', function (value, prefix) {
    if (!value) return ''
    value = value.toString()
    if (prefix) {
        return '$' + value
    }
    return value + '$'
})