import { Component, Vue } from 'vue-property-decorator';
import Navigation from '../../../common/navigation/index.vue';
import { Navigations } from '../../../../common/modelType';
@Component({
  name: 'navigation',
  components: {
    Navigation
  }
})
export default class cpu extends Vue {
  isShow:boolean= true
  navigationdata: Navigations = {
    message: 37,
    btnval: '诊断'
  };
  valbtn(data) {
    this.isShow = data;
  }
  valstop(data){
    this.isShow=data;
  }
}
