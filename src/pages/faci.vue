<template>
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="columns is-justify-content-center">
        <nav class="panel">
            <p class="panel-heading">Mine</p>
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
                <a v-for="l in visible" :key="l" class="panel-block is-active">
                    <img alt="Vue logo" src="../assets/logo.png" />
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
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const search = ref('')

const mostrar = ref(false)

const visible = computed(() => {
    // eslint-disable-next-line prefer-regex-literals
    const re = new RegExp('^[0-9]*$')
    if (re.test(search.value)) {
        return parseInt(search.value)
    }
    return ""
})

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
