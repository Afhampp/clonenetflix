import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
getMovieDetailResult:any
getMovieVediosResult:any
getMovieCastResult:any

  constructor(private serivce:MovieApiServiceService,private router:ActivatedRoute){}

  ngOnInit(): void {
    let getparamId=this.router.snapshot.paramMap.get('id')
    this.getMovie(getparamId)
    this.getvedios(getparamId)
    this.getCast(getparamId)
  }
  
  getMovie(id:any){
    this.serivce.getMovieDetails(id).subscribe((result)=>{
      console.log(result,"details")
      this.getMovieDetailResult=result

    })
  }

  getvedios(id:any){
    this.serivce.getMovieVedio(id).subscribe((result)=>{
      console.log(result,"vedios")
      result.results.forEach((element:any) => {
        if(element.type=="Trailer"){
          this.getMovieVediosResult=element.key
        }
      });
      

    })
  }

  getCast(id:any){
    this.serivce.getMovieCast(id).subscribe((result)=>{
      console.log(result,"cast")
      this.getMovieCastResult=result.cast

    })
  }

}
