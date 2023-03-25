export function axiosConnectionAsync () {
    const ol = document.querySelector("#lista_axios_async");
    const fragment = document.createDocumentFragment();

    
    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/user")

            res.data.forEach(element => {
                const li = document.createElement("li");
                li.innerHTML = `${element.name} -- ${element.username}`;
                fragment.appendChild(li);
                });
            ol.appendChild(fragment);

        } catch (error) {
            console.log(error);
            let message = error.response.statusText || "Ocurrio un error";
            ol.innerHTML = `Error${error.response.status}: ${message}`;
        } finally {
            console.log("Esto se ejecuta siempre");
        }
    }
    getData();
}