import Axios from "axios";
import { CarSearchResult } from "../models/CarSearchResult";

export class Veiculos {
    private baseUrl = 'https://apicarros.com/v1/consulta';

    public async ConsultarVeiculo(placa: string): Promise<CarSearchResult> {

        var carSearchResult: CarSearchResult = new CarSearchResult();
        
        try {
            // await Axios.get('https://api.megabrain-enem.com.br/healthcheck');
            var result = await Axios.get(`${this.baseUrl}/${placa}/json`);
            carSearchResult = await result.data;
        } catch (error) {
            console.error(error);
        }

        return carSearchResult;
    }
}