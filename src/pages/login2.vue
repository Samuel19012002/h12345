<template>
    <div class="columns is-justify-content-center">
        <div class="column is-4">
            <o-field>
                <o-input
                    value="12"
                    placeholder="Name"
                    icon="envelope"
                    icon-right="check"
                ></o-input>
            </o-field>

            <o-field>
                <o-input
                    value="123"
                    type="password"
                    maxlength="30"
                    placeholder="Password"
                    icon="lock"
                    password-reveal
                ></o-input>
            </o-field>

            <div class="field">
                <p class="control">
                    <button class="button is-success">Login</button>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const login = ref('');

const password = ref('');
</script>
