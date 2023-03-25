export function axiosConnection () {
    const ol = document.querySelector("#lista_axios");
    const fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        // console.log(res);
        res.data.forEach(element => {
            const li = document.createElement("li");
            li.innerHTML = `${element.name} -- ${element.username}`;
            fragment.appendChild(li);
            });
        ol.appendChild(fragment);
    })
    .catch(error => {
        console.log(error.response);
        let message = error.response.statusText || "Ocurrio un error";
        ol.innerHTML = `Error${error.response.status}:${message}`;
    })
    .finally(() => {
        // console.log("Esto se ejecuta siempre");
    });
}
