<template>
    <table class="grid">
        <tr v-for="row_id in 11" :key="row_id">
            <Cell v-for="column_id in 11" :key="column_id" :row_id="row_id" :column_id="column_id"> </Cell>
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
        border-radius: 5px;
    }
</style>

<script>
    
</script>