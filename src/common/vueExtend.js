import Vue from 'vue';

//Array 随机排序
Vue.prototype.randomArr = function(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    var res = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var j = Math.floor(Math.random() * arr.length);
        res[i] = arr[j];
        arr.splice(j, 1);
    }
    return res;
};

// 根据数组中对象的某一个属性值进行排序
Vue.prototype.compare = function(property) {
    return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    };
};