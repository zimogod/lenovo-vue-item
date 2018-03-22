import {Component,Vue} from 'vue-property-decorator';
@Component
export default class Overview extends Vue {
    status:string='';
    back(){
        this.$router.push('/hardware/test');
    }
    mounted() { }
}