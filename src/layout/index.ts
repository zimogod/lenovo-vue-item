import {Component,Vue} from 'vue-property-decorator';
@Component
export default class Layout extends Vue {
  pcmviews: Object = [
    { id: 'tabhome', classID: 0, path: '/home', des: '管家主页' },
    { id: 'tabcleanup', classID: 1, path: '/optimization', des: '优化加速' },
    { id: 'tabhardware', classID: 2, path: '/hardware', des: '系统硬件' },
    { id: 'tabdrivermng', classID: 3, path: '/drive', des: '驱动管理' }
  ];
  id: Number = 0;
  ind: Number = -1;
  skipRouter(classID:Number) {
    this.id = classID;
  }
  mousemove(index:Number) {
    this.ind = index;
  }
  mouseleave() {
    this.ind = -1;
  }

}
