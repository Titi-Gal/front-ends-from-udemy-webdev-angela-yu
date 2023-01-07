const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const cityName = req.body.cityName;
    const units = 'metric';
    const appid = '5f8ed55b2cc1bb65794c2759d275b617';

    const url = 'https://api.openweathermap.org/data/2.5/weather' +
    '?q=' + cityName +
    '&units=' + units +
    '&appid=' + appid;
    
    https.get(url, (urlRes) => {

        urlRes.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description
            const iconID = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + iconID + ".png";

            res.write("<h1>" + cityName + "</h1>");
            res.write("<p>Description: " + description + "</p>");
            res.write("<p>Temp: " + temp + "</p>");
            res.write('<p><img src="' + imgUrl + '"></p>');
            res.send();
        });
    });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});