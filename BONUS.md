# Evaluacion

BONUS:

3. ¿Cómo haría una función en donde multipliques dos número dados sin usar * como operador?, es decir, sin usar por ejemplo let resultado = numero1* numero2

Haria una función en donde se sumen los números en dentro de un for

multiplicar(x: number, y: number){
  total = 0;
  for(i=0; i<y; i++){
    total = total + x;__
  }
  return total;
}

4. ¿Qué son los parámtros nombrados en JavaScripy y para qué sirven? da un ejemplo de como los usarías.

----- Crear objetos json definidos para pasarlos a través de funciones 

5. ¿Qué métodos de un array en JavaScript conoces?

const array = ["Manzana", "Platano", "Fresa"]

array.push("Melon"); para agregar un nuevo elementos
array.pop(); para eliminar el último elemento del array
array.slice(1, 3); te regresa los elementos del array en las posiciones 1 y 3
array.forEach(element, i) =>{
  para recorrer el array posición por posición
}
array.shift() eliminar el primer elementos del array
