require('./bootstrap');

window.Vue = require('vue');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

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

        onSuccess(response) {
            alert(response.data.message); // temporary
            this.name = ''
            this.description = '';
        }
    }
});