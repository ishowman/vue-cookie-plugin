/**
 * Augment the typings of Vue.js
 */

import Vue from "vue";
import cookie from "js-cookie";

declare module "vue/types/vue" {
  interface Vue {
    $JsCookie: typeof cookie;
    $AppName: string;
    $Version: string;
  }
}
