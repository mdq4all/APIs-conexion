export function fetchAsyncFunction () {

    const ol = document.querySelector("#lista_fetch_async");
    const fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();
            // console.log(res, json);

            if (!res.ok) throw {status: res.status, statusText: res.statusText};

            json.forEach(element => {
                const li = document.createElement("li");
                li.innerHTML = `${element.name} -- ${element.username}`;
                fragment.appendChild(li);
                });
            ol.appendChild(fragment);
        } catch (error) {
            // console.log(error);
            let message = error.statusText || "Ocurrio un error";
            ol.innerHTML = `Error${error.status}:${message}`;
        } finally {

        }
    }
    getData();
}