var express = require('express');
var path = require('path');
var port = 3000;
var { engine } = require('express-handlebars');
var app = express();

app.use(express.static(path.join(__dirname, 'views')));

// 뷰 디렉토리 설정
app.set('views', path.join(__dirname, 'views', 'templates'));

// 추가로 views/static 경로를 정적 경로로 설정
app.use(express.static(path.join(__dirname, 'views', 'static')));

// Handlebars 엔진 설정
app.engine('handlebars', engine({
  extname: '.handlebars',
  partialsDir: path.join(__dirname, 'views', 'templates', 'include')  // 파셜 폴더 지정
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index', {  // index.handlebars
    layout: false  // 레이아웃을 사용하지 않도록 설정
  });
});

app.get('/apply', (req, res) => {
  res.render('apply/apply', {  // apply.handlebars
    layout: false  // 기본 레이아웃을 사용하지 않도록 설정
  });
});

app.get('/check', (req, res) => {
  res.render('check/check', {  // apply.handlebars
    layout: false  // 기본 레이아웃을 사용하지 않도록 설정
  });
});

app.get('/intro', (req, res) => {
  res.render('intro/intro', {  // apply.handlebars
    layout: false  // 기본 레이아웃을 사용하지 않도록 설정
  });
});

app.get('/svc', (req, res) => {
  res.render('svc/svc', {  // apply.handlebars
    layout: false  // 기본 레이아웃을 사용하지 않도록 설정
  });
});

app.get('/admin', (req, res) => {
  res.render('admin/admin', {  // apply.handlebars
    layout: false  // 기본 레이아웃을 사용하지 않도록 설정
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
