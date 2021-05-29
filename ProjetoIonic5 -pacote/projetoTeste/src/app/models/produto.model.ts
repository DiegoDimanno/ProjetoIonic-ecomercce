import {imagem} from '../models/imagem.model';


export interface produto{

    idProducts?: any,
    nameProducts?: string,
    typeProducts?: string,
    qtdProducts?: number,
    pCostProducts?: string,
    pSaleProducts?: number,
    preDescProducts?: string,
    descProducts?: string,
    availableProducts?: string,
    highProducts?: string, 
    imgProducts?: imagem,
    
}


