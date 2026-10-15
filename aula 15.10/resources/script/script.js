// arquivo != pasta 

// Arrays === lista 

// let compras = ["ovo","arroz","feijão branco","sabão","sabão em pó","sabão em barra"];

// let busca = prompt("Digite o item a buscar");

// let listaFiltrada = compras.find(compra =>
//     compra.toLowerCase().includes(busca.toLowerCase().trim())
// )
// let encontrar = compras.indexOf(listaFiltrada)
// console.log(encontrar);

// let users = ["Pedro","Ana","Joana","Diego","Davi","Messias","Cristiano"];

// let searchUser = prompt("Digite o nome de usuário que deseja buscar:")

// // lembrando que, meu usuário adm não pode mandar em branco a busca. Chamamos isso de tentativa de erros.

// if(searchUser === ""){
//     console.log("Não pode enviar em branco")
// }
// else{
//     // Retorna o usuário que foi encontrado
//     let user = users.find(user =>
//     user.toLowerCase().includes(searchUser.toLowerCase().trim)
//     )
// };
// // Devemos tratar também caso a busca não retorne nenhum resultado
// if(user.length === 0){
// // Usuário não encontrado
// console.log("User not found");
// }
// else{
//     console.log("usuário encontrado: ".concat(user));
//     // alterar o elemento
//     users[index] = "novo valor";
//     console.log(users)
// }


// let users = ["Pedro", "Ana", "Joana", "Diego", "Davi", "Messias", "Cristiano"];

// let searchUser = prompt("Digite o nome de usuário que deseja buscar:");

// if (searchUser === null || searchUser.trim() === "") {
//     console.log("Não pode enviar em branco");
// } else {
//     let user = users.find(user =>
//         user.toLowerCase().includes(searchUser.toLowerCase().trim())
//     );

//     if (user === undefined) {
//         console.log("User not found");
//     } else {
//         console.log("Usuário encontrado: " + user);

//         // Encontrar a posição do usuário na lista
//         let index = users.indexOf(user);

//         // Alterar o usuário
//         users[index] = "Novo valor";

//         console.log(users);
//     }
// }


let fila = ["Ana Maria","Ana Flávia", "Beatriz","Bianca","Carla","Carina","Dryane"] 
console.log("Fila inicial:", fila);

fila.push("Beatriz");

console.log("Após adicionar um cliente comum (push):", fila);

fila.unshift("Ana Maria - Prioritário");

console.log("Após adicionar um cliente prioritário (unshift):", fila);

let clienteAtendido = fila.shift();

console.log("Cliente atendido:", clienteAtendido);

console.log("Fila após o atendimento (shift):", fila);

let clienteDesistente = fila.pop();

console.log("Cliente que desistiu:", clienteDesistente);

console.log("Fila após a desistência (pop):", fila);