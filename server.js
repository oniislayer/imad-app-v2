var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var arts = {
  'article-one':{
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
},
  'article-two':{
    title:'article two',
    heading:'Article two',
    date:'mar 13 2k17',
    content:`<p>
        content of 2
        </p>`},
  'article-three':{ 
    title:'article three',
    heading:'Article three',
    date:'mar 12 2k17',
    content:`<p>
        content of 3

    </p>`}
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
<h3>Article</h3>
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
app.get('/:artname',function(req,res)
{
    var artname=req.params.artname;
res.send(createtemp(arts[artname]));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
