import { Emit, Prop, Watch, Component, Vue } from 'vue-property-decorator';
import { DialogueOpts} from '../../../common/modelType';

@Component
export default class Dialogue extends Vue {
  @Prop() data: DialogueOpts;
  @Emit()
  dialogueClose(n: boolean) {}
  mounted() {
    // console.log(this.computedMsg)
  }
  get computedMsg(){
    return this.data.width;
  }

}
