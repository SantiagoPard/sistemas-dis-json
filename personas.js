// const fs = require('fs');
// let data=fs.readFileSync("./personas.json")
// let personas = JSON.parse(data)
// console.log(personas)

// let jsonData=require('./personas.json')
// console.log(jsonData)

let personas = []

fetch("https://raw.githubusercontent.com/SantiagoPard/Sis-Dis/main/per.json")
    .then((res) => res.json())
    .then((data) => {
        personas = data;
        let data2 = []

        personas.forEach((persona, index) => {

            if (index % 2 == 0) {
                const list = document.querySelector(".lista")
                const li = document.createElement('td');
                //scope="col" class="px-6 py-3"

                li.innerHTML = "nombre: " + persona.nombre + "<br>cedula " + persona.cedula + "<br>fecha: " + persona.fecha + " <br>estatura: " + persona.estatura;
                list.appendChild(li)
                data2.push(persona)

            }

        }

        )
        const jsonString = JSON.stringify(data2);

        const blob = new Blob([jsonString], { type: 'application/json' });
    
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'data.json';
    
        document.body.appendChild(link);
        link.click();
    
        document.body.removeChild(link);
    
        console.log('Archivo JSON descargado con éxito.');

    });

