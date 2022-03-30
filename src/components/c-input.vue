<template>
    <div>
        <input
            v-model="value"
            :class="cls"
            type="text"
            placeholder="Escribeme..."
        />
    </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    cls: {
        type: String,
        default: '',
    },
});

const emits = defineEmits(['update:modelValue']);

const value = useVModel(props, 'modelValue', emits);
</script>
