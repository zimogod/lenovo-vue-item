import { Component, Vue } from 'vue-property-decorator';
import Dialogue from '../../common/dialogue/index.vue';
import { DialogueOpts } from '../../../common/modelType';
@Component({
  // filters: { trim(val) {
  //   return val+1
  // } },
  name: 'dialogue',
  components: {
    Dialogue
  }
})
export default class Drive extends Vue {
  msg: String = '驱动管理';
  num: number = 20;
  arr: Array<any> = [1, 2, 3, 4];
  dialoguedata: DialogueOpts = {
    isShow: false,
    topContent: '1231',
    content: '1231231',
    width: '300px',
    height: '250px',
    zIndex: 11
  };
  isHide(data) {
    this.dialoguedata.isShow = data;
  }
  btnShow() {
    this.dialoguedata.isShow = true;
  }
  mounted() {
  }
}
