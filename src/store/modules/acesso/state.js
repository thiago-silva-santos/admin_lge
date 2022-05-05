export default {
    nome: "",
    gestor: false,
    token: "",
    logado: false,
    dadosDeCadastro: {
        nome: "",
        email: "",
        acesso: "",
        dadosCadastro: {
            documentos: [],
            contatos: [],
            endereco: {
                numero: "",
                cEP: "",
                logradouro: "",
                cidade: "",
                bairro: "",
                estado: ""
            }
        },
        ativo: true,
        codigo: "",
        dataCadastro: ""
    },
    perfil: {
        nomeCompleto: "",
        email: "",
        telefone: "",
        celular: "",
        cpf: "",
        rg: "",
        cnh: "",
        dataNascimento: "",
        endereco: {
            numero: "",
            cep: "",
            logradouro: "",
            cidade: "",
            bairro: "",
            estado: ""
        },
        genero: 1,
        generoExtenso: "",
        emailValido: false,
        ativo: false,
        codigo: "",
        dataCadastro: ""
    }
}