import { Component ,OnInit} from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


    bannerApiData:any=[]
    trendingMovieResult:any=[]
    actionMovieResult:any=[]
    advantourMovieResult:any=[]
    animeMovieResult:any=[]
    comedyMovieResult:any=[]
    documentryMovieResult:any=[]
    fictionMovieResult:any=[]
    thrillerMovieResult:any=[]

    constructor(private service:MovieApiServiceService){

    }
    ngOnInit():void{
      this.bannerData()
      this.trendingData()
      this.actionData()
      this.advantourData()
      this.animeData()
      this.comedyData()
      this.documenrtyData()
      this.frictionData()
      this.thrillerData()
    }
    
    bannerData(){
      this.service.bannerApiData().subscribe((result)=>{
        console.log(result,"resultof banneer")
        this.bannerApiData=result.results
      })
    }
    trendingData(){
      this.service.trendingMovieApiData().subscribe((result)=>{
        console.log(result,"trendingmovie")
        this.trendingMovieResult=result.results
      })
    }
    actionData(){
      this.service.fetchActionMovies().subscribe((result)=>{
        this.actionMovieResult=result.results
      })
    }
    advantourData(){
      this.service.fetchAdvantureMovies().subscribe((result)=>{

        this.advantourMovieResult=result.results
      })
    }
    animeData(){
      this.service.fetchAnimationMovies().subscribe((result)=>{
        this.animeMovieResult=result.results
      })
    }
    comedyData(){
      this.service.fetchComedyMovies().subscribe((result)=>{
        this.comedyMovieResult=result.results
      })
    }
    documenrtyData(){
      this.service.fetchDocumentryMovies().subscribe((result)=>{
        this.documentryMovieResult=result.results
      })
    }
    frictionData(){
      this.service.fetchScienceFictionMovies().subscribe((result)=>{
        this.fictionMovieResult=result.results
      })
    }
    thrillerData(){
      this.service.fetchThrilerMovies().subscribe((result)=>{
        this.thrillerMovieResult=result.results
      })
    }
}
