import axios from 'axios'

const getUdemyCourses = async (options = {}) => {
  const clientId = 'TTwmoP1iGLmk2sfBEPnHVN38zVWV9MakOUhWTgW0';
  const clientSecret = 'XrMvWOpiQyrXpakbYrSllz70R5V6EPs66dmk5mhqOf1X56ceqXVAeqlevDtCEBVZm8AdZR06hYwGp3WIrJm88ojN3MbbDBzNTDcWvIwDDhPJt8K978OARD44pEoUcqXc';
  const authToken = `${clientId}:${clientSecret}`;
  const encodedToken = window.btoa(authToken);

  const defaultOptions = {
    search: '',
    price: 'price-free,price-paid',
    price_currency: 'brl',
    fields: 'course=@default,visible_instructors',
    ordering: '-price',
    language: 'pt',
    skip_price: 1,
    page: 1,
    page_size: 10,
  };

  const requestOptions = {
    ...defaultOptions,
    ...options,
  };

  const response = await axios.get('https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses/', {
    params: requestOptions,
    headers: {
      Authorization: `Basic ${encodedToken}`,
    },
    mode: 'cors',
  });


  const courses = response.data.results.filter(course => course.price.price <= 50);
  console.log(courses);
};

export default getUdemyCourses;
