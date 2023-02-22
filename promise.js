const metodo1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Método 1 finalizado');
      resolve();
    }, 2000);
  });
};

const metodo2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Método 2 finalizado');
      resolve();
    }, 3000);
  });
};

Promise.all([metodo1(), metodo2()]).then(() => {
  console.log('Os dois métodos terminaram sua execução.');
}).catch((erro) => {
  console.error('Ocorreu um erro durante a execução dos métodos:', erro);
});
