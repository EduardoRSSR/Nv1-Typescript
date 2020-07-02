/**
 * Para criar o usuário vamos precisar:
 * name, email, password
 */
interface techObject{
    title: string;
    experience: number;
}


 interface CreateUserData{     // aqui estamos definindo os tipos das variáveis para criar usuário.
    name?: string;              // a interrogação antes dos dois pontos indicam que o nome não é obrigarório.
    email: string;
    password: string;
    techs: Array<string | techObject>;
}

export default function createUser({name, email, password }:CreateUserData) { // aqui definimos os tipos

    const user = {
        name,
        email,
        password,
    }

    return user;

}