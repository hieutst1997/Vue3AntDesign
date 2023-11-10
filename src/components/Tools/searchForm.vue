<template lang="html">
    <div>
        <form class = 'flex items-center'>
            <input 
                type="input" 
                name="input" 
                placeholder = "Search..."
                class = "h-10 border border-gray-1 rounded-md pl-2 mr-3" style = "width: calc(100% - 86px)">
            <button 
                type="submit"
                class = 'flex 
                items-center 
                justify-center 
                w-24 
                h-10 
                bg-main 
                text-white
                text-base
                font-bold
                rounded-md'>
                Submit
            </button>
        </form>
    </div>
</template>
<script>

import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: "SeachForm",
    setup(){
        return {

        }
    }
})
</script>
<style lang="">
    
</style>