import $ from 'jquery'
const async = true // 异步
const call = () => {
}
const app = {
  ajax: (url, type, data, success, error = call, dataType, _async) => {
    app._start()
    let opt = {
      url: url,
      type,
      data,
      success: function (data) {
        app._end()
        if (data.code === 0 || data.code === 200 || data.signCode || data.result === 1 || data.code === 290000) {
          success(data)
        } else if (data.code === 170005 || data.code === 170006) {
          app._massage_error(data.msg ? data.msg : data.message, 3)
        } else if (data.code === 10008) {
          // app._massage_info(data.msg ? data.msg : data.message, 3)
          error(data, 1)
        } else if (data.code === 401) {
          app._push('/#/login')
        } else {
          app._massage_error(data.msg ? data.msg : data.message, 3)
          error(data, 1)
        }
      },
      error: function (err) {
        app._end()
        let info = JSON.parse(err.responseText)
        app._massage_error(info.message, 5)
        console.log(`%c 阿拉丁 ERROR \n%c ${info.message} > Code: ${info.status} > Time: ${info.timestamp} `, 'color: #fff; background: red; font-size: 20px', 'color: #fff; background: red;')
        error(err, 0)
      },
      dataType,
      async: _async === false ? _async : async
    }
    if (typeof data === 'string') {
      opt.contentType = 'application/json'
    }
    $.ajax(opt)
  },
  _start: () => {
    $('.table, .ivu-tree').addClass('div-loading')
  },
  _end: () => {
    $('.table, .ivu-tree').removeClass('div-loading')
  },
  _massage_error: (info, dur = 3) => {
    window._v.prototype.$Message.error({
      content: info,
      duration: dur
    })
  },
  _massage_info: (info, dur = 3) => {
    window._v.prototype.$Message.info({
      content: info,
      duration: dur
    })
  },
  _push: (path) => {
    setTimeout(function () {
      window.location.href = path
    }, 2000)
  }
}

export default app
