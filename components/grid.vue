<template>
    <table class="grid">
        <tr v-for="row_id in 11">
            <Cell v-for="column_id in 11">{{row_id - 1}}; {{column_id - 1}}</Cell>
        </tr>
    </table>
</template>

<style>
    * {
        --blue: #60a3bc;
        --red: #e55039;
        --green: #78e08f;
        --yellow:#f6b93b;
        --border_color: #0c2461;
    }
    .grid {
        height: fit-content;
        width: fit-content;
        border: 2px solid;
        border-color: var(--border_color);
    }
</style>