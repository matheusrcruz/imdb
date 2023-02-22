import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImdbFilmeModel } from './models/imd-film.models';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private apikey: string = 'k_sl6qrbs9';
  private endPointMDB: string = `https://imdb-api.com/en/API/MostPopularMovies/${this.apikey}}`;
  private urlPostimg: string = `https://imdb-api.com/en/API/Posters/${this.apikey}`;

  private baseUrl:string = 'http://localhost:3000/items';

  constructor(
    private httpClient: HttpClient

  ) { }

    public getData(): Observable<ImdbFilmeModel[]> {
      return this.httpClient.get<ImdbFilmeModel[]>(this.baseUrl);
    }

    public getPosters(id: string): Observable<any>{
      return this.httpClient.get<any>(this.urlPostimg + id);
    }
    public putPosters(id: string, body: any ){
      return this.httpClient.put(`${this.baseUrl}/${id}`, body)
      .subscribe((data) =>{
        return;
      })

    }


}
