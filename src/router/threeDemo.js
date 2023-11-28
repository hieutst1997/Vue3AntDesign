const ThreeJsRoutes = [
    {
        path: '/ThreeJS',
        name: 'ThreeJS',
        component: () => import('@/pages/threeJS/index.vue')
    },

    {
        path: '/3DEdit',
        name: '3DEdit',
        component: () => import('@/pages/3DEdit/index.vue')
    }
]

export default ThreeJsRoutes
