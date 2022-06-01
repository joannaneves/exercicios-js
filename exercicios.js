// 1. Crie uma função que imprima este array ordenado em ordem crescente ou decrescente.

const numberArray = [15, 33, 2, 47, 9, 13, 72, 27, 83];
numberArray.sort((a, b) => a - b);
console.log(numberArray);

// 2. Crie uma função que imprima a soma dos itens deste array.

var numberArray = [15, 33, 2, 47, 9, 13, 72, 27, 83];
var sum = 0;
for(var i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
}
console.log(sum);

// 3. Crie uma função que receba um número como parâmetro e verifique se ele existe no array imprimindo o resultado.

var vetor = new Array(15, 33, 2, 47, 9, 13, 72, 27, 83);
var indice = vetor.indexOf(27);
console.log(indice);


// 4. Crie uma função que receba um número como parâmetro e imprima um array com todos os números maiores que ele.

var arr = [15, 33, 2, 47, 9, 13, 72, 27, 83];
var max = arr.reduce(function(a, b) {
  return Math.max(a, b);
}, -Infinity);
console.log(max);

// 5. Crie uma função que imprima as posições pares do array. Resultado: [15, 2, 9, 72, 83]

function evenPosition(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) { 
        if (i % 2 !== 0) { 
            str += " x ";
        } else { 
            str += arr[i];
        }
    }
    return str;
}
console.log(evenPosition([15, 33, 2, 47, 9, 13, 72, 27, 83]))


//

const arrayOfPeople = [
    {
        id: 1,
        name: "João da Silva",
        birthday: "2000-10-03",
        address: {
            street: "Rua A",
            addressNumber: "35",
            district: "Beija Flor",
            complement: null,
            postalcode: "13250-000",
            city: "JUNDIAÍ",
            state: "SP",
        },
    },
    {
        id: 2,
        name: "Antônio José",
        birthday: "1983-01-09",
        address: {
            street: "Rua de Trás",
            addressNumber: "798",
            district: "São José",
            complement: "Apto 21",
            postalcode: "13250-010",
            city: "Itatiba",
            state: "SP",
        },
    },
    {
        id: 3,
        name: "Maria Antônia",
        birthday: "1996-12-15",
        address: {
            street: "Rua Floriano Peixoto",
            addressNumber: "340",
            district: "Centro",
            complement: "Bloco A Apto 45",
            postalcode: "19800-010",
            city: "Assis",
            state: "SP",
        },
    },
    {
        id: 4,
        name: "Italo Alves",
        birthday: "2007-06-03",
        address: {
            street: "Rua Alagoas",
            addressNumber: "35",
            district: "Centro",
            complement: null,
            postalcode: "86300-000",
            city: "Cornélio Procópio",
            state: "PR",
        },
    },
    {
        id: 5,
        name: "Miguel",
        birthday: "2010-12-10",
        address: {
            street: "Rua da Pedreira",
            addressNumber: "10",
            district: "Vila Tortuga",
            complement: null,
            postalcode: "28951-806",
            city: "Armação dos Búzios",
            state: "RJ",
        },
    },
]

// 1. Crie uma função que imprima o nome e a idade de cada pessoa.

function printNameAndAge() {
    arrayOfPeople.forEach((element) => {
        const birthday = newDate(element.birthday).getTime()
        const todaysDate = newDate().getTime()
        const ageInMinutes = todaysDate - birthday
        const ageInYears = parseInt(ageInMinutes / (1000 * 60 * 60 * 24 * 365))
       
    })
     console.log(element.name, ageInYears)
}

// 2. Crie uma função que imprima quantas pessoas o endereço não tem complemento.

function printNumberWithoutComplement() {
    let number = 0;
    arrayOfPeople.forEach((element) => {
        if (element.address.complement == null) {
            number += 1;
        }
    })
    console.log(number)
}

// 3. Crie uma função que imprima o array ordenado pelo nome da pessoa.

function sortByName() {
    let orderly = arrayOfPeople.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })
    console.log(orderly)
}
sortByName()

// 4. Crie uma função que remova uma pessoa pelo id e imprima a pessoa removida.

function removeId(id) {
    const index = id - 1;
    let remove = arrayOfPeople.splice(index, 1)
    console.log(remove)
}

// 5. Crie uma função que imprima o nome da pessoa e em qual cidade ela reside.

function printNameCity() {
    arrayOfPeople.forEach((element) => {
        console.log(element.name, element.address.city)
    })
}