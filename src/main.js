import Vue from 'vue'
/*import App from './components/App.vue'*/
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'

/*new Vue({
  el: '#app',
  render: a => a(App)
})*/

new Vue({
  el: '#nav',
  render: a => a(Nav)
})
new Vue({
  el: '#main',
  render: a => a(Main)
})

