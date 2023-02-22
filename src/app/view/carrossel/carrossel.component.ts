import { Component,Input, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';
import { CarrosselAnimation, fadein, fadeout } from './carrossel.animations';
import{trigger, transition, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('void => fadein',[
        useAnimation(fadein, {params: {time: '1s'}})
      ]),
      transition('fade => void', [
        useAnimation(fadeout, {params: {time: '1s'}})
      ])
    ])
  ]
})
export class CarrosselComponent implements OnInit {
  @Input() animationType = CarrosselAnimation.Fade;

  public movies: any = [];
  public currentMovie = 0;

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



  public onPreviousClick(){
    const previous = this.currentMovie - 1;
    this.currentMovie = previous < 0 ? this.movies.length - 1 : previous;

  }
  public onNextClick(){
    const next = this.currentMovie + 1;
    this.currentMovie = next === this.movies.length ? 0: next;
  }



}


