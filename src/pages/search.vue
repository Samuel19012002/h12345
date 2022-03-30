<template>
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="columns is-justify-content-center">
        <div class="column is-6">
            <nav class="panel">
                <p class="panel-heading">SamuelSearch</p>
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input
                            v-model="search"
                            class="input"
                            type="text"
                            placeholder="Search"
                            @keyup.enter="buscar"
                        />
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <template v-if="mostrar">
                    <a
                        v-for="l in lista"
                        :key="l"
                        class="panel-block is-active"
                    >
                        <span class="panel-icon">
                            <i class="fas fa-star has-text-primary"></i>
                        </span>
                        {{ l }}: {{ search }}
                    </a>
                </template>
                <div class="panel-block">
                    <button
                        class="button is-link is-outlined is-fullwidth"
                        @click="buscar"
                    >
                        {{ mostrar ? 'Borrar' : 'Buscar' }}
                    </button>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()

const search = ref('')

const mostrar = ref(false)

const lista = ['Wikipedia', 'Reddit', 'Youtube', 'Facebook', 'Instagram']

const buscar = () => {
    if (search.value) {
        mostrar.value = !mostrar.value
        if (!mostrar.value) {
            search.value = ''
        }
    }
}

watch(search, () => {
    if (!search.value) {
        mostrar.value = false
    }
})
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
