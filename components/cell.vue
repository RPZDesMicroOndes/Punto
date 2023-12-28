<template>
    <td class="cell"> 
        <slot> </slot>
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