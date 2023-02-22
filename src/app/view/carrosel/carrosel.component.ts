import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent implements OnInit {

  public movies: any = [];

  constructor(private imdbService: ImdbService){

  }

  ngOnInit(): void {
   this.getMovies();
  }


  public getMovies(): void{
    this.imdbService.getData().subscribe((data)=> {
      data.forEach((item) =>{
        this.movies.push(item)

        while(this.movies.length > 10){
          this.movies.pop();
        }
        return;
      });
      //limite de 100 req por dia
      // this.movies.forEach((movie: any) => {
      //   this.imdbService.getPosters(movie.id).subscribe((data)=> {
      //     movie.image = data.posters[0].link;
      //     this.imdbService.putPosters(movie.id, movie);
      //     return;
      //   })

      // });
    })
  }






}


