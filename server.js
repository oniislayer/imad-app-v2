var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var art={
    title:'article one',
    heading:'Article one',
    date:'mar 23 2k17',
    content:`<p>
        Here is the goddamn content of article one
                Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one

    </p>
     <p>
        Here is the goddamn content of article one
                Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one

    </p>
     <p>
        Here is the goddamn content of article one
                Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one
        Here is the goddamn content of article one

    </p>`
};

function createtemp(d){
    
var title=d.title;
var heading=d.heading;
var date=d.date;
var content=d.content;

var htmltemp = `
<html>
<title>
    ${title}
</title>
<body>
    <link href="/ui/style.css" rel="stylesheet" />
<h1>${heading}</h1>
<div>
    <a href='/'>Home</a>
</div>
<div>
${date}
</div>
<hr>
<h3>Article one</h3>
<div class="art">
<div>
    ${content}
</div>
</div>
</body>
</html>
`;
return htmltemp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res)
{
res.send(createtemp(art))
    
});
app.get('/article-two',function(req,res)
{
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res)
{
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
