import {Component,Vue} from 'vue-property-decorator';
@Component
export default class Test extends Vue {
    system:object=[
        { classID: 0, path: '/hardware/system/overview', des: '概览' },
        { classID: 1, path: '/hardware/system/cpu', des: 'CPU' }
    ]
    ind:Number= -1;
    id:Number=0;
    mounted() { };
    btnPath(id:number) {
        this.id = id;
    }
    mousemove(index:number) {
        this.ind = index;
    }
    mouseleave() {
        this.ind = -1;
    }
}