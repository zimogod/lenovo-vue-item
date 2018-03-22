export default function Draw(num2) {
    let rad = Math.PI * 1.5 / 100;
    let num = 0;
    let canvas = document.getElementById('circle');
    let cxt = canvas.getContext('2d');
    let dotEl = document.getElementById('dot');

    let canvas_width = canvas.offsetWidth;
    let radius = canvas_width / 2;

    function drawBg() {
        cxt.beginPath(); //起始一条路径
        cxt.arc(
            radius,
            radius,
            radius - 15, -5 * Math.PI / 4, -7 * Math.PI / 4,
            false
        );
        //cxt.arc(x,y,r,sAngle,eAngle,counterclockwise)创建圆形
        //x 圆的中心的X坐标
        //y 圆的中心的Y坐标
        //r 圆的半径
        //sAngle 起始角,以弧度计。弧的原型的三点钟位置是0度，十二点钟位置是-Math.PI/2
        //eAngle 结束角,以弧度计
        //counterclockwise 可选,False是顺时针,true是逆时针。顺逆时针都是以三点钟方向开始
        cxt.lineWidth = 30; //圆线宽
        cxt.strokeStyle = '#ccc'; //笔触的样式
        cxt.lineCap = 'round'; //线条的结束端点样式
        cxt.stroke(); //绘制已定义的路径
        cxt.closePath(); //创建从当前点回到起始点的路径
    }

    //----------------------------------------------------------
    // 绘制前景
    // var canvas_fore = document.getElementById('canvas_fore');
    // var context = canvas.getContext('2d');
    function drawForeRing(num) {
        cxt.beginPath();
        cxt.arc(
            radius,
            radius,
            radius - 15, -5 * Math.PI / 4, -5 * Math.PI / 4 + rad * num,
            false
        );
        cxt.lineWidth = 30;
        var grd = cxt.createLinearGradient(0, 0, canvas_width, 0); //设置线性渐变色
        //context.createLinearGradient(x0,y0,x1,y1);
        //x0  渐变开始点的 x 坐标
        //y0  渐变开始点的 y 坐标
        //x1  渐变结束点的 x 坐标
        //y1  渐变结束点的 y 坐标
        grd.addColorStop(0, 'green');
        grd.addColorStop('0.25', 'green');
        grd.addColorStop('0.5', 'yellow');
        grd.addColorStop('0.6', 'yellow');
        grd.addColorStop('0.75', 'red');
        grd.addColorStop('1', 'red');
        cxt.strokeStyle = grd;
        cxt.lineCap = 'round';
        cxt.stroke();
        cxt.closePath();
    }
    //假设当前值是40;
    const cpuNumEle = document.getElementById('cpu-num');
    let now_num = parseInt(cpuNumEle.innerHTML);

    function drawFrame() {
        if (num2 === now_num) {
            drawBg();
            drawForeRing(now_num);
            var dd = now_num * 2.63;
            dotEl.style.transform = 'rotate(' + dd + 'deg)';
            return;
        }
        if (num2 > now_num) {
            window.requestAnimationFrame(drawFrame);
            cxt.clearRect(0, 0, 500, 500); //在给定的矩形内清除指定的像素，当前是清除画布
            drawBg();
            drawForeRing(now_num);
            var dd1 = now_num * 2.63;
            dotEl.style.transform = 'rotate(' + dd1 + 'deg)';
            now_num += 1;
        } else if (num2 < now_num) {
            window.requestAnimationFrame(drawFrame);
            cxt.clearRect(0, 0, 500, 500); //在给定的矩形内清除指定的像素，当前是清除画布
            drawBg();
            drawForeRing(now_num);
            var dd2 = now_num * 2.63;
            dotEl.style.transform = 'rotate(' + dd2 + 'deg)';
            now_num = now_num - 1;
        }
    }
    cpuNumEle.innerHTML = num2;
    window.requestAnimationFrame(drawFrame);
}