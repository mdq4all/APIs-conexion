export function fetchFunction ()  {
    const ol = document.querySelector("#lista_fetch");
    const fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.ok ? res.json(): Promise.reject(res))
       
    .then((json) => {
        // console.log(json);
        json.forEach(element => {
            const li = document.createElement("li");
            li.innerHTML = `${element.name} -- ${element.username}`;
            fragment.appendChild(li);
            });
        ol.appendChild(fragment);
        })
    .catch(error => {
        console.log("Estamos en el catch", error);
     })
    .finally("Esto se ejecuta siempre...siempre");
     }