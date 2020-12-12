import Axios from "axios";
import { CarSearchResult } from "../models/CarSearchResult";

export class Veiculos {
    private baseUrl = 'https://apicarros.com/v1/consulta';

    public async ConsultarVeiculo(placa: string): Promise<CarSearchResult> {

        var carSearchResult: CarSearchResult = new CarSearchResult();
        console.log(`${this.baseUrl}/${placa}/json`);
        
        try {
            var result = await Axios.get<CarSearchResult>(`${this.baseUrl}/${placa}/json`);    
            carSearchResult = result.data;
        } catch (error) {
            console.log(error);
        }
        


        return carSearchResult;
    }
}