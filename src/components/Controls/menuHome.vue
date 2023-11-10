<template lang="">
    <div class = 'px-5 py-8'>
        <div class = 'flex flex-wrap -mr-2 -ml-2'>
            <div v-for="(item, index) in dataMenu" :key="index" class = 'col-3 px-2 pb-8'>
                <button
                    type="button"
                    @click = "redirect(item.link)">
                    <div
                        class = 'flex items-center justify-center rounded-full bg-white shadow-shadow-ct-1'
                        style = 'width: 72px; height: 72px'>
                        <img :src="item.icon" alt="icon">
                    </div>

                    <p class = 'pt-1 text-sm'>
                        {{item.title}}
                    </p>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import ic1 from '@/assets/images/ic1.svg'
import ic2 from '@/assets/images/ic2.svg'
import ic3 from '@/assets/images/ic3.svg'
import ic4 from '@/assets/images/ic4.svg'
import ic5 from '@/assets/images/ic5.svg'
import ic6 from '@/assets/images/ic6.svg'
import ic7 from '@/assets/images/ic7.svg'
import ic8 from '@/assets/images/ic8.svg'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'MenuHome',

  setup () {
    const router = useRouter()
    const dataMenu = ref([
      {
        icon: ic1,
        title: 'Report',
        link: '/overViewReport'
      },
      {
        icon: ic2,
        title: 'Bar Chart',
        link: '/ChartBar'
      },
      {
        icon: ic3,
        title: 'Menu 3',
        link: '/'
      },
      {
        icon: ic4,
        title: 'Menu 4',
        link: '/'
      },
      {
        icon: ic5,
        title: 'Menu 5',
        link: '/'
      },
      {
        icon: ic6,
        title: 'Pie Chart',
        link: '/ChartPie'
      },
      {
        icon: ic7,
        title: 'Menu 7',
        link: '/'
      },
      {
        icon: ic8,
        title: 'Progress',
        link: '/ProgressReport'
      }
    ])

    async function redirect (url) {
      await router.push(url)
    }

    return {
      dataMenu,
      redirect
    }
  }
})
</script>
<style lang="">

</style>
