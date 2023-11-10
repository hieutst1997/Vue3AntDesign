<template>
    <div class = 'flex items-center justify-between bg-main px-6 py-2'>
        <div class = 'flex items-center'>
            <div class = 'user-card'>
                <img
                    src="@/assets/images/avatar_1.png"
                    alt="alt" />
            </div>

            <div class = 'pl-3 text-white text-base'>
                <p class = 'block w-32 truncate'>
                    John Smith
                </p>

                <p>
                    0972 123 123
                </p>
            </div>
        </div>
        <button type="button">
            <img src="@/assets/images/ic_noti.svg" alt="icon">
        </button>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardLogin',

  setup () {
    return {

    }
  }
})
</script>
<style lang="scss">
    .user-card{
        width: 62px;
        height: 62px;
        border-radius: 100%;
        overflow: hidden;
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>
