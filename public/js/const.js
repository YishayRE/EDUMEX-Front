const baseUrl = ( window.location.hostname.includes('localhost') )
    ? 'http://localhost:3000/'
    : 'https://edumex-3f447.web.app/';

const baseApi = ( window.location.hostname.includes('localhost') )
    ? 'http://localhost:8080/api/'
    : 'https://edumex.herokuapp.com/api/';
