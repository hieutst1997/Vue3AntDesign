<template>
    <div class = "
        box-title
        w-full 
        flex 
        items-center 
        relative">
        <p class = 'pl-3 text-lg font-bold'>
            {{props.data.text}}
        </p>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'HeadTitle',
    props: {
        data: {
            colorBorder: '',
            text: 'HeadTitle'
        }
    },
    setup(props){
        return {
            props
        }
    }
})

</script>
<style lang="scss" scoped>
    .box-title{
        height: 21px;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            z-index: 10;
            background: #FF7868;
        }
    }
    
</style>