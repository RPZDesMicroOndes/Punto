<template>
    <td class="cell" @click="display_coords"> 
    </td>
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

    .cell {
        height: 64px;
        width: 64px;
        
        text-align: center;

        border: 2px solid;
        border-color: transparent;
    }

    .cell:hover {
        border: 2px solid;
        border-radius: 5px;
        border-color: var(--hover_color);
    }

</style>
<script>
export default {
    data() {
        return {
            RowId: null,
            ColumnId: null,
        };
    },

    methods: {
        get_row_id() {
            // Get the row ID from the props
            const row_id = this.$attrs.row_id;
            return row_id;
        },
        get_column_id() {
            // Get the column ID from the props
            const column_id = this.$attrs.column_id;
            return column_id;
        },
        display_coords() {
            console.log('Clicked cell coords - Row: ' + this.get_row_id() + '; Column: ' + this.get_column_id() + '.')
        }
    }
}
</script>
