<template>
    <img alt="Vue logo" src="../assets/logo.png" />
    <p class="has-text-primary is-size-1">Hola</p>
    <button class="button is-primary" @click="go">Button</button>
    <button class="button is-primary" @click="gou">Button</button>
    <button class="button is-primary" @click="generateRandomNumber(16, 25)">
        Cambiar ref
    </button>
    <div class="notification is-primary">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor sit amet, consectetur adipiscing elit
    </div>
    <div class="columns">
        <div class="column">
            <c-input v-model="name" cls="input" />
        </div>
        <div class="column">
            <o-input v-model="name" type="password" password-reveal />
        </div>
        <div class="column">
            <input
                v-model="name"
                class="input"
                type="text"
                placeholder="Text input"
            />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <a href="/login">Login</a>
        </div>

        <div class="column">
            {{ edad }}
        </div>
        <div class="column">
            <router-link to="/login?ref=xavier">Login Link</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('18')

const generateRandomNumber = (min: number, max: number) => {
    name.value = Math.floor(Math.random() * (max - min) + min).toString()
}

const edad = computed(() => {
    // eslint-disable-next-line prefer-regex-literals
    const re = new RegExp('^[0-9]*$')
    if (re.test(name.value)) {
        return name.value
    }
    return 21
})

const go = () => {
    router.push({
        path: '/login',
        query: {
            ref: edad.value,
        },
    })
}

const gou = () => {
    router.push({
        path: '/search',
    })
}
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
