const userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  console.log(xhr.status);
  console.log(xhr.response);

  const xhrResponse = xhr.response;

  xhrResponse.forEach((user) => {
    const newLi = document.createElement('li');
    newLi.textContent = user.name;
    userList.appendChild(newLi);
  });
});

xhr.send();
