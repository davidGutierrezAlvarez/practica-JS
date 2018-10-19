// let empleados = [{
//   id: 1,
//   nombre: 'jaun'
// }, {
//   id: 2,
//   nombre: 'pedro'
// }, {
//   id: 3,
//   nombre: 'carlos'
// }];
//
// let salario = [{
//   id: 1,
//   salario: 1000
// }, {
//   id: 2,
//   salario: 2000
// }];
//
//
// let getEmpleado = (id, callback) => {
//   let empleadoDB = empleados.find( empleado => {
//     return empleado.id === id;
//   })
//   if (!empleadoDB) {
//     callback(`no existe un empleado con ese ID ${id}`)
//   }else {
//     console.log(empleadoDB);
//   }
// }
//
//
//
//
// let getSalario = (empleado, callback) => {
//   let salarioDB = salario.find( salario => {
//     return salario.id === empleado.id;
//   })
//   if (!salarioDB) {
//     callback(`no existe salario de el empleado ${empleado.nombre}`)
//   }else{
//     callback(null, {
//       nombre: empleado.nombre,
//       salario: salarioDB.salario,
//       id: empleado.id
//     })
//   }
// }
//
//
// getEmpleado(1, (err, empleado) => {
//   if (err) {
//     return console.log(err);
//   }
//
//   getSalario(empleado, (err, resp) => {
//     if (err) {
//       return console.log(err);
//     };
//     console.log(`el sALARIO DE ${resp.nombre} es de ${resp.salario}$`)
//   });
// });
//
//
//
//
//
//
// let inicio = function(valor, callback){
//   callback(valor);
// }
//
// inicio("david", function (valor){
//   console.log(`Bienvenido ${valor}`);
// })





let saludar = function(nombre, callback){
  callback(`hola ${nombre}`)
}

let getSaludo = function(saludo){
  console.log(saludo);
}


saludar('david', function(saludo){
  console.log(saludo);
})
