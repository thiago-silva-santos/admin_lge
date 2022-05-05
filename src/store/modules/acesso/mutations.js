export default {
    SET_DADOS_ACESSO(state, payload) {        
        let usuarioValido = false;
        if (payload.usuario.gestor !== null && payload.usuario.gestor !== undefined)
            usuarioValido = true;
        if (payload.usuario.nome) {
            if (payload.usuario.nome !== '') usuarioValido = true;
            else usuarioValido = false;
        }
        else usuarioValido = false;
        if (payload.usuario.token) {
            if (payload.usuario.token !== '')
                usuarioValido = true;
            else
                usuarioValido = false;
        }
        if (usuarioValido) {
            state.gestor = payload.usuario.gestor;
            state.token = payload.usuario.token;
            state.nome = payload.usuario.nome;
            state.logado = true;            
        }
    },
    SET_PERFIL(state, payload) {
        if(payload) {
            state.perfil = payload;
        }
    },
    LIMPA_DADOS_ACESSO(state) {
        state.gestor = false;
        state.token = "";
        state.nome = "";
        state.logado = false;
        state.perfil = {
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
        };
    }
}