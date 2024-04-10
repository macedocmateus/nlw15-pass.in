let participantes = [
    {
        nome: 'Mateus Macedo',
        email: 'mateuscastromacedo@gmail.com',
        dataInscrição: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0),
    },

    {
        nome: 'Ana Silva',
        email: 'anasilva@gmail.com',
        dataInscrição: new Date(2024, 2, 23, 10, 0),
        dataCheckIn: new Date(2024, 2, 26, 14, 30),
    },
    
    {
        nome: 'João Oliveira',
        email: 'joao.oliveira@hotmail.com',
        dataInscrição: new Date(2024, 2, 24, 15, 40),
        dataCheckIn: new Date(2024, 2, 27, 18, 10),
    },
    
    {
        nome: 'Maria Santos',
        email: 'mariasantos@yahoo.com',
        dataInscrição: new Date(2024, 2, 25, 8, 20),
        dataCheckIn: new Date(2024, 2, 28, 11, 45),
    },
    
    {
        nome: 'Carlos Pereira',
        email: 'carlospereira@gmail.com',
        dataInscrição: new Date(2024, 2, 26, 12, 15),
        dataCheckIn: new Date(2024, 2, 29, 16, 20),
    },
    
    {
        nome: 'Juliana Costa',
        email: 'juliana.costa@gmail.com',
        dataInscrição: new Date(2024, 2, 27, 9, 30),
        dataCheckIn: new Date(2024, 3, 1, 13, 0),
    },
    
    {
        nome: 'Pedro Mendes',
        email: 'pedro.mendes@hotmail.com',
        dataInscrição: new Date(2024, 2, 28, 14, 10),
        dataCheckIn: new Date(2024, 3, 2, 17, 50),
    },
    
    {
        nome: 'Laura Fernandes',
        email: 'laura.fernandes@yahoo.com',
        dataInscrição: new Date(2024, 2, 29, 16, 0),
        dataCheckIn: new Date(2024, 3, 3, 19, 30),
    },
    
    {
        nome: 'Ricardo Almeida',
        email: 'ricardo.almeida@gmail.com',
        dataInscrição: new Date(2024, 2, 30, 11, 20),
        dataCheckIn: new Date(2024, 3, 4, 14, 45),
    },
    
    {
        nome: 'Fernanda Sousa',
        email: 'fernanda.sousa@hotmail.com',
        dataInscrição: new Date(2024, 3, 1, 10, 15),
        dataCheckIn: new Date(2024, 3, 5, 12, 30),
    },
]

const criarNovoParticipante = (participante) => {
    
   const dataInscricao = dayjs(Date.now())
   .to(participante.dataInscricao)
   
   let dataCheckIn = dayjs(Date.now())
   .to(participante.dataCheckIn)

   if(participante.dataCheckIn == null) {
    dataCheckIn = `
        <button
        data-email= '${participante.email}'
        onclick= 'fazerCheckIn(event)'
        >
            Confirmar check-in
        </button>
    `
   }
    
    return `
<tr>
    <td>
        <strong>
            ${participante.nome}
        </strong>

        <br>

        <small>
            ${participante.email}
        </small>
    </td>

    <td>
        ${dataInscricao}
    </td>

    <td>
        ${dataCheckIn}
    </td>
</tr>
`
}
    let output = ''

// estrutura de repetição - loop
    for(let participante of participantes) {
        output = output + criarNovoParticipante(participante)
    }
// substituir informação do HTML
const atualizarLista = (participantes) => {
    document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const participante = {
        nome: dadosDoFormulario.get('nome'),
        email: dadosDoFormulario.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null,
    }

    participantes = [participante, ...participantes]
    atualizarLista(participantes)
}

const fazerCheckIn = (event) => {
    alert('chegamos aqui')
}