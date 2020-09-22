<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">

    </head>
    <body class="antialiased">
        <div class="box" id="app">
            <form method="POST" action="projects" @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Project Name</label>
                    <div class="control">
                      <input id="name" class="input" type="text" v-model="name" placeholder=""  @keydown="errors.clear('name')">
                      <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>

                    </div>
                  </div>
                  
                  <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                      <input id="description" class="input" type="text" v-model="description" placeholder="" @keydown="errors.clear('description')">
                      <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>
                    </div>
                  </div>
                  <div class="control">
                      <button class="button is-primary" :disabled="errors.any()">Create</button>
                  </div>
            </form>
        </div>
        <script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
