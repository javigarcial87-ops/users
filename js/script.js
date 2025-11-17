

fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())
.then(data =>{
    const usuariosConExtras= data.map(usuario=> {
        const age = Math.floor(Math.random()*60)+18;
        const img = `./assets/img/${usuario.id}.jpeg`;

        const {street,suite,city}=usuario.address;

        return{
            ...usuario,
            age,
            img,
            address:`${street},${suite},${city}`
        }

    })
    mostrarUsuarios(usuariosConExtras)
})
.catch(err=>console.error("Error",err))

function mostrarUsuarios(usuarios) {
    const lista = document.getElementById("listaUsuarios")

    usuarios.forEach(user => {
        const li =document.createElement("li")
        li.classList.add("usuario")

        li.innerHTML= `
        <img src="${user.img}" alt="${user.name}">
        <h2>${user.name} — ${user.age} años</h2>
        <p><strong>User:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Tel:</strong> ${user.phone}</p>
        <p><strong>Compañía:</strong> ${user.company.name}</p>
        <p><strong>Dirección:</strong> ${user.address}</p>
        `
        lista.appendChild(li);

    })  
}




