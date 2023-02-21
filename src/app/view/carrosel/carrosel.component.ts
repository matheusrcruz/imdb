import { Component } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent {

  public movies:any = [];

  constructor(

    private imdbService: ImdbService
  ){

  }

  ngOninit(): void{
    this.getMovies()

  }

  public getMovies(): void{
    this.imdbService.getData().subscribe((data) => {
      data.forEach((item)=>{
          this.movies.push(item);

          while(this.movies.length > 10 ){
            this.movies.pop();
          }
      })
      return;
    })
    console.log("ola " + this.movies);
  }


}
