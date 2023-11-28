<template lang="">
    <div class = "flex items-center justify-center pt-6">
        This is editor online of solution 2
    </div>
</template>
<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
export default defineComponent({
    name: '3DEdit',

    setup(){
        const project = getProject('My Project');
		
        onMounted(() => {
            studio.initialize()
            studio.ui.restore()
		    console.log(project)
        })

        onUnmounted(() => {
            studio.ui.hide();
        })

       

       

        return{ 
            project
        }
    }
})
</script>
<style lang="">
    
</style>