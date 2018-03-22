import {Component,Vue} from 'vue-property-decorator';
@Component
export default class Test extends Vue {
    mounted() { }
    Test() {
        this.$router.push('/hardware/system');
    }
}