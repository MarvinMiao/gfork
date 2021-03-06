var express = require('express')
  , logger = require('morgan')
  , app = express()
  , path = require('path')
  , homepage = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
  , aboutpage = require('jade').compileFile(__dirname + '/source/templates/aboutpage.jade')
  , others = require('jade').compileFile(__dirname + '/source/templates/others.jade')



app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/node_modules'))


app.get('/', function (req, res, next) {
  try {
    var html = homepage({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/about', function(req, res, next) {
  try {
    var html = aboutpage({ title: 'About' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/others', function(req, res, next) {
  try {
    var html = others({ title: 'Others' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})