let students = [
    {
        name: "Lucas",
        grade1: Math.floor(Math.random() * 11),
        grade2: Math.floor(Math.random() * 11),
        average: null,
    },
    {
        name: "Maria",
        grade1: Math.floor(Math.random() * 11),
        grade2: Math.floor(Math.random() * 11),
        average: null,
    },
    {
        name: "João",
        grade1: Math.floor(Math.random() * 11),
        grade2: Math.floor(Math.random() * 11),
        average: null,
    },
    {
        name: "Ana",
        grade1: Math.floor(Math.random() * 11),
        grade2: Math.floor(Math.random() * 11),
        average: null,
    },
    {
        name: "Pedro",
        grade1: Math.floor(Math.random() * 11),
        grade2: Math.floor(Math.random() * 11),
        average: null,
    }
];

function average(students){
    for(let student of students){
         student.average = (student.grade1 + student.grade2) / 2;
         if(student.average >= 7){
            alert(`A média do(a) aluno(a) ${student.name} é: ${student.average.toFixed(2)} \n
            Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)
         }else{
            alert(`A média do(a) aluno(a) ${student.name} é: ${student.average.toFixed(2)} \n
            Não foi dessa vez, ${student.name}! Tente novamente!`)
         }
    }
}

average(students);