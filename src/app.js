import Vue from 'vue/dist/vue'

const app = new Vue({
  el: '#app',
  data: {
    user: 'Jonbe',
    latitude: 0,
    longitude: 0
  },
  created () {
    console.log('hello')
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
      'enableHighAccuracy': false,
      'timeout': 8000,
      'maximumAge': 5000
    })

    function successFunc (position) {
      // 緯度をアラート表示
      app.latitude = position.coords.latitude

      // 経度をアラート表示
      app.longitude = position.coords.longitude
    }

    function errorFunc (error) {
      // エラーコードのメッセージを定義
      var errorMessage = {
        0: '原因不明のエラーが発生しました…。',
        1: '位置情報の取得が許可されませんでした…。',
        2: '電波状況などで位置情報が取得できませんでした…。',
        3: '位置情報の取得に時間がかかり過ぎてタイムアウトしました…。'
      }

      // エラーコードに合わせたエラー内容をアラート表示
      window.alert(errorMessage[error.code])
    }
  },
  methods: {
    favoriteSendData: function () {
      navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
        'enableHighAccuracy': false,
        'timeout': 8000,
        'maximumAge': 5000
      })

      function successFunc (position) {
        app.latitude = position.coords.latitude
        app.longitude = position.coords.longitude

        const request = new XMLHttpRequest()
        request.open('POST', `https://raise-up.now.sh/favorite?user=${app.longitude}&longitude=${app.longitude}&latitude=${app.latitude}`)
        request.send()
      }

      function errorFunc (error) {
        // エラーコードのメッセージを定義
        var errorMessage = {
          0: '原因不明のエラーが発生しました…。',
          1: '位置情報の取得が許可されませんでした…。',
          2: '電波状況などで位置情報が取得できませんでした…。',
          3: '位置情報の取得に時間がかかり過ぎてタイムアウトしました…。'
        }

        // エラーコードに合わせたエラー内容をアラート表示
        window.alert(errorMessage[error.code])
      }
    },
    routeSendData: function () {
      navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
        'enableHighAccuracy': false,
        'timeout': 8000,
        'maximumAge': 5000
      })

      function successFunc (position) {
        app.latitude = position.coords.latitude
        app.longitude = position.coords.longitude

        const request = new XMLHttpRequest()
        request.open('POST', `https://raise-up.now.sh/route?user=${app.user}&longitude=${app.longitude}&latitude=${app.latitude}`)
        request.send()
      }

      function errorFunc (error) {
        // エラーコードのメッセージを定義
        var errorMessage = {
          0: '原因不明のエラーが発生しました…。',
          1: '位置情報の取得が許可されませんでした…。',
          2: '電波状況などで位置情報が取得できませんでした…。',
          3: '位置情報の取得に時間がかかり過ぎてタイムアウトしました…。'
        }

        // エラーコードに合わせたエラー内容をアラート表示
        window.alert(errorMessage[error.code])
      }
    }
  }
})
