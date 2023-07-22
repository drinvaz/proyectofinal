 function calcularCalorias() {
            var edad = parseInt(document.getElementById("edad").value);
            var genero = document.getElementById("genero").value;
            var peso = parseFloat(document.getElementById("peso").value);
            var altura = parseFloat(document.getElementById("altura").value);
            var actividad =document.getElementById("actividad").value;
            console.log(actividad) 
            
            
            
                 
            var tasaMetabolicaBasal = 0;

            // Fórmula de Harris-Benedict según el género
            if (genero === "hombre") {
                tasaMetabolicaBasal = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
            } else if (genero === "mujer") {
                tasaMetabolicaBasal = 447.593 + (9.247 *peso) + (3.098 * altura) - (4.330 * edad);
            }
            // Multiplicar por el nivel de actividad
            var requerimientoCaloricoTotal = tasaMetabolicaBasal * ValorActividad();

            // Mostrar el resultado
            var resultadoElement = document.getElementById("resultado");
            resultadoElement.innerHTML = "Tu requerimiento calórico diario es: " + requerimientoCaloricoTotal.toFixed(2) + " calorías.";
            
        }
        function ValorActividad() {
          
            let ValorActividad = 0
            if(actividad.value == "Sedentario"){
                ValorActividad = 1.25 ;
            }else if(actividad.value  == "Ligero"){
                ValorActividad = 1.375 ;
            }else if(actividad.value  == "Moderado"){
                ValorActividad = 1.55;   }
            else if(actividad.value  == "Intenso"){
                    ValorActividad = 1.725   
            }else {
                ValorActividad = 1.9
            }
             return ValorActividad ; 
             console.log(actividad.value)
              }
             