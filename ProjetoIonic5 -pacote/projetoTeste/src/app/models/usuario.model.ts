import { endereco } from "./endereco.model";

export interface usuario{

    idUsers?: any,
    username: string,
    password: string,
    nameUsers: string,
    nascUsers: string,
    rgUsers: string,
    cpfUsers: string,
    imgUsers?: string,
    phoneUsers: number,
    celphoneUsers: number,  
    activeUsers: boolean, 
    endsUsers: endereco,
    
}



