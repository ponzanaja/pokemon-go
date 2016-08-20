new Vue({
  el: '#app',
  data: {
    msg: 'Pokemon Ranger',
    list: []
  },
  methods : {
    getAPI: function(){
      var url = 'http://www.pokesnipers.com/api/v1/pokemon.json'
      var that = this
      this.$http.get(url).then(function (res) {
        that.list = res.data.results
        console.log(that.list);
      })
    }
  },
    ready: function(){
      this.getAPI()
      var that = this
      setInterval(function(){
        that.getAPI()
        console.log('อิอิส์')
      },400 )
}
  })

console.log(app);
