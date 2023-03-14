const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { Buffer } = require('buffer');
require('dotenv').config();

const clientId = "TTwmoP1iGLmk2sfBEPnHVN38zVWV9MakOUhWTgW0"
const clientSecret = "XrMvWOpiQyrXpakbYrSllz70R5V6EPs66dmk5mhqOf1X56ceqXVAeqlevDtCEBVZm8AdZR06hYwGp3WIrJm88ojN3MbbDBzNTDcWvIwDDhPJt8K978OARD44pEoUcqXc"

console.log(clientId)
console.log(clientSecret)
const app = express();

app.use(cors());

app.get('/cursos', async (req, res) => {
  try {
    const authToken = `${clientId}:${clientSecret}`;
    const encodedToken = Buffer.from(authToken).toString('base64');

    const response = await axios.get(`https://www.udemy.com/api-2.0/courses/?search=&price=price-free,price-paid&price_currency=brl&fields[course]=@default,visible_instructors&ordering=-price&language=pt&skip_price=1&page=1&page_size=10`, {
      headers: {
        Authorization: `Basic ${encodedToken}`
      }
    });

    const courses = response.data.results;
    const filteredCourses = courses.filter((course) => course.price === 'Free');
   console.log(filteredCourses, "filtered")
    const courseData = filteredCourses.map((course) => {
      return {
        title: course.title,
        link: course.url,
        image: course.image_480x270
      }
    });

    res.json(courseData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao recuperar os cursos da Udemy.');
  }
});

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001.');
});
