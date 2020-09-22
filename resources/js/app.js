/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

const { default: Axios } = require('axios');

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        delete this.errors[field];
    }
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

const app = new Vue({
    el: '#app',
    data: {
        name: "",
        description: "",
        errors: new Errors()
    },
    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(this.onSuccess)
                .catch(error => this.errors.record(error.response.data.errors))
        },
        onSuccess(data) {
            alert(data.message); // temporary

            this.name = ''
            this.description = '';
        }

    }
});