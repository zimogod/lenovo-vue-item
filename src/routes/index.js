export default [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: r => require.ensure([], () => r(require('../components/home/index.vue')), 'home'),
        children: [{
                name: 'home',
                path: '',
                redirect: '/home/homepage'
            },
            {
                name: 'homepage',
                path: 'homepage',
                component: r => require.ensure([], () => r(require('../components/home/homepage/index.vue')), 'homepage'),
                meta: { KeepAlive: true }
            }, {
                name: 'examination',
                path: 'examination',
                component: r => require.ensure([], () => r(require('../components/home/examination/index.vue')), 'examination'),
                meta: { KeepAlive: true }
            }
        ]
    },
    {
        path: '/optimization',
        component: r => require.ensure([], () => r(require('../components/optimization/index.vue')), 'optimization'),
        children: [{
                name: "optimization",
                path: '',
                redirect: '/optimization/optimize'
            },
            {
                name: 'optimize',
                path: 'optimize',
                component: r => require.ensure([], () => r(require('../components/optimization/optimize/index.vue')), 'optimize'),
                meta: { KeepAlive: true }
            }
        ]
    }, {
        path: '/hardware',
        component: r => require.ensure([], () => r(require('../components/hardware/index.vue')), 'hardware'),
        children: [{
            name: "hardware",
            path: "",
            redirect: "/hardware/test"
        }, {
            name: 'test',
            path: 'test',
            component: r => require.ensure([], () => r(require('../components/hardware/test/index.vue')), 'test'),
            meta: { KeepAlive: true }
        }, {
            path: 'system',
            component: r => require.ensure([], () => r(require('../components/hardware/system/index.vue')), 'system'),
            meta: { KeepAlive: true },
            children: [{
                    name: "system",
                    path: '',
                    redirect: '/hardware/system/overview'
                },
                {
                    name: 'overview',
                    path: 'overview',
                    component: r => require.ensure([], () => r(require('../components/hardware/system/overview/index.vue')), 'overview'),
                    meta: { KeepAlive: true },
                }, {
                    name: 'cpu',
                    path: 'cpu',
                    component: r => require.ensure([], () => r(require('../components/hardware/system/cpu/index.vue')), 'cpu'),
                    meta: { KeepAlive: true },
                }
            ]
        }]
    }, {
        path: '/drive',
        component: r => require.ensure([], () => r(require('../components/drive/index.vue')), 'drive'),
        children: [{
            name: "drive",
            path: '',
            redirect: '/drive/powered'
        }, {
            name: 'powered',
            path: 'powered',
            component: r => require.ensure([], () => r(require('../components/drive/powered/index.vue')), 'powered'),
            meta: { KeepAlive: true }
        }]
    }
]