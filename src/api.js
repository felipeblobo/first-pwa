const params = {
  header: {
    Accept: 'application/json',
    "Content-type": "application/json"
  }
}
const URL = "https://stormy-brook-79548.herokuapp.com/api";

function getNews(subject) {
  return fetch(`${URL}/${subject}`, params)
       .then(res => res.json())
       .catch(e => console.log(`Ocorreu um erro: ${e}`))
}

function getNewsById(subject, id) {
  return fetch(`${URL}/${subject}/${id}`, params)
       .then(res => res.json())
       .catch(e => console.log(`Ocorreu um erro: ${e}`))
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getNews,
  getNewsById
}