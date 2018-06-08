import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { HiddenDirective } from './movie.directive';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  id_movie: string = "";
  mv_Title: string = "";
  mv_Rated: string = "";
  mv_Released: string = "";
  mv_Director: string = "";
  mv_Actors: string = "";
  mv_Plot: string = "";

  sliderValue: number = 100;
  people: Array<any> = [{
      name: 'Justin Bieber',
      age: 21
    }, {
      name: 'Miley Cyrus',
      age: 23
    }, {
      name: 'John Legend',
      age: 37
    }, {
      name: 'Betty White',
      age: 94
    }, {
      name: 'Roger Waters',
      age: 72
    }, {
      name: 'Larry Page',
      age: 42
    }
  ];
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callMovieService() {
    this._sharedService.findMovie(this.id_movie)
      .subscribe(
        lstResult => {
          this.mv_Title = lstResult["Title"];
          this.mv_Rated = lstResult["Rated"];
          this.mv_Actors = lstResult["Actors"];
          this.mv_Director = lstResult["Director"];
          this.mv_Released = lstResult["Released"];
          this.mv_Plot = lstResult["Plot"];
        },
        error => {
          console.log("Error. The findMovie result JSON value is as follows");
          console.log("error");
        }
      );
  }

}
