import { Component, Vue, Watch,Inject } from 'vue-property-decorator';
import Draw from '../../../common/draw';

@Component
export default class Homepage extends Vue {
  $refs: {
    wrapper: HTMLDivElement;
  };
  message: string = '';
  cricle: any = '';
  isSkin:boolean=false;
  vw: string | number = '';
  vh: string | number = '';
  count: number = 0;
  timer: any = null;
  styles:Array<any> =[
    {
      val:0,checked:false
    },
    {
      val:1,checked:false
    },
    {
      val:2,checked:false
    },  
     {
      val:3,checked:false
    }
  ]
  physical() {
    this.$router.push('/home/examination');
  }
  activated() {
    // this.getNum()
    this.getLet();
  }
  shin(){
    this.isSkin=!this.isSkin;
  }
  getLet(): void {
    this.vh = this.$refs.wrapper.offsetHeight;
    this.vw = this.$refs.wrapper.offsetWidth;
    this.$nextTick(() => {
      Draw(30);
      // setInterval(()=>{
      //   Draw(this.count+=20)
      // },1000)
    });
    const that = this;
    window.onresize = ()=> {
      this.vh = this.$refs.wrapper.offsetHeight;
      this.vw = this.$refs.wrapper.offsetWidth;
      this.$nextTick(() => {
        Draw(30);
      });
    };
  }
}
