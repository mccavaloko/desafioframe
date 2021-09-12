//Informações para posts
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const tableBody = document.getElementById("table-body");
    data.forEach((element) => {
      const userId = element.userId;
      const postId = element.id;
      const postTitle = element.title;
      const postText = element.body;
      const tableRow = `<tr><th scope="row">${userId}</th><td>${postId}</td><td>${postTitle}</td><td>${postText}</td></tr>`;
      tableBody.innerHTML += tableRow;
    });
  })
  .catch((err) => {
    console.log(err);
  });
