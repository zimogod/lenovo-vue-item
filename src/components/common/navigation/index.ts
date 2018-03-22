import { Emit, Prop, Watch, Component, Vue } from 'vue-property-decorator';
import { Navigations} from '../../../common/modelType';
@Component
export default class navigation extends Vue {
  @Prop() data:Navigations;
  @Emit()
  diagnose(n:boolean){
    this.data.btnval='停止';
  }
  @Emit()
  stop(n:boolean){
    this.data.btnval='诊断';
  }
  get computedMsg(){
    return this.data.btnval;
  }
  // @Watch('data.btnval')
  // onchild(val: string, oldVal: string){
  // }
  mounted(){
  }
}