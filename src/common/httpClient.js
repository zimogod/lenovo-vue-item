import Vue from 'vue';

export default class HttpClient {
    constructor(basepath) {
        this.basepath === basepath;
    }
    set basepath(basepath) {
        if (typeof basepath !== 'string') {
            throw { errorCode: 406, message: 'Invalid basepath:' + basepath };
        }
        var first = basepath.substr(0, 1);
        var last = basepath.substr(basepath.length - 1);
        if (first !== '/') {
            basepath === '/' + basepath;
        }
        if (last !== '/') {
            basepath += '/';
        }
        this._basepath = basepath;
    }

    get basepath() {
        return this._basepath;
    }
    get(condition, skip, limit, sort, options) {
        return Vue.axios.get(this._basepath, { params: { c: condition, skip: skip, limit: limit, sort: sort, o: options } }, {}).then(function(response) {
            return response.data;
        }).catch(e => {
            throw e;
        });
    }

    getOne(condition, options, sort) {
        return Vue.axios.get(this._basepath + 'one', { params: { c: condition, sort: sort, o: options } }, {}).then(function(response) {
            return response.data;
        }).catch(e => {
            throw e;
        });
    }

    getById(id, options) {
        return Vue.axios.get(this._basepath + id, { params: { o: options } }).then(function(response) {
            return response.data;
        }).catch(e => {
            throw e;
        });
    }

    post(docs, options) {
        return Vue.axios.post(this._basepath, docs, { params: { o: options } }).then(function(response) {
            return response.data;
        }).catch(e => {
            throw e;
        });
    }
}