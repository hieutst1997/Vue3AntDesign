<template>
    <div class = 'loading-box'>
        <span class="loader"></span>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'LoadingOne',
})

</script>
<style lang="scss" scoped>
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 

    .loading-box{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #00000082;
        display: flex;
        align-items: center;
        justify-content: center;
        .loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: inline-block;
            border-top: 3px solid #FFF;
            border-right: 3px solid transparent;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
        }
    }
    
</style>