//Add / to show weather near me
//Add /manualEntry to show manual area weather
const express=require('express');
const bodyParser=require('body-parser');
const http = require('http');

const app=express();
app.use(bodyParser.urlencoded());

// const port=process.env.PORT;
const port=process.env.PORT || 3000;
// app.get('/',function(req,res)
// {
//     var url="http://api.openweathermap.org/data/2.5/weather?q=janakpuri,Delhi,India&units=metric&appid=7a5f07b9155910978ac982a93820bf70";
//     http.get(url,function(response)
//     {
//         // console.log(response.statusCode);
//         response.on('data',function(data1)
//         {
//             var weatherdata=JSON.parse(data1);
//             var description=weatherdata.weather[0].description;
//             var temprature=weatherdata.main.temp;
//             var icon=weatherdata.weather[0].icon;
//             res.write("<h1>In "+weatherdata.name+" :</h1>");
//             res.write("<h2>Today's Temparature :"+temprature+" *C</h1>");
//             res.write("<h3>weather description: "+description+"</h3>");
//             res.write("<img src=http://openweathermap.org/img/wn/"+icon+"@2x.png alt=weather image>")
//             res.send();    
//         })
//     })
//     // res.sendFile(__dirname+"/index.html")
// })
app.get('/',function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res)
{
    var City=req.body.city;
    // var State=req.body.state;
    // var Country=req.body.country;
    var url="http://api.openweathermap.org/data/2.5/weather?q="+City+"&units=metric&appid=7a5f07b9155910978ac982a93820bf70"
    http.get(url,function(response)
    {
        response.on("data",function(data)
        {
            var weatherdata=JSON.parse(data);
            var description=weatherdata.weather[0].description;
            var temprature=weatherdata.main.temp;
            var icon=weatherdata.weather[0].icon;
            res.write("<h1>In "+weatherdata.name+" :</h1>");
            res.write("<h2>Today's Temparature :"+temprature+"*C</h2>");
            res.write("<h3>weather description: "+description+"</h3>");
            res.write("<img src=http://openweathermap.org/img/wn/"+icon+"@2x.png alt=weather image>")
            res.send();   
        })
    })
});
app.listen(port)
{
    console.log("Server is listening to "+port);
}
