<template>
    <button class="button" @click="pick_card">Pick card</button>
</template>
<style>
    * {
        --blue: #60a3bc;
        --red: #e55039;
        --green: #78e08f;
        --yellow:#f6b93b;
        --border_color: #0c2461;
        --hover_color: #0c2461;
    }

    .button {
        height: 64px;
        width: 64px;
        
        text-align: center;

        border: 2px solid;
        border-color: transparent;
    }

    .button:hover {
        border: 2px solid;
        border-radius: 5px;
        border-color: var(--hover_color);
    }

</style>
<script>
export default {
    data() {
        return {
        };
    },

    methods: {
        pick_card() {
            console.log('Clicked "Pick card" button.')
        }
    }
}
</script>
