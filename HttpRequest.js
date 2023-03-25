export function HttpReq () {
    const xhr = new XMLHttpRequest();
    const ol = document.querySelector("#lista");
    const fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        //console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            const json = JSON.parse(xhr.responseText);
            json.forEach(element => {
                const li = document.createElement("li");
                li.innerHTML = element.name;
                fragment.appendChild(li);
                });
                ol.appendChild(fragment);
           // console.log(json)
        } else {
            let message = xhr.statusText || "Ocurrio un error";
            ol.innerHTML = `Error${xhr.status}:${message}`;
        }
    })
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
}