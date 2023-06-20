import { Component } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  constructor(private service:MovieApiServiceService){}

    searchResult:any
    filteredSearchResult: any

    searchForm=new FormGroup({
      'movieName':new FormControl(null)
    })

    submitForm(){
      console.log(this.searchForm.value,'searchform');
      this.service.searchMovieApi(this.searchForm.value).subscribe((result)=>{
        console.log(result)
        this.searchResult=result.results
      })
      this.filteredSearchResult = this.searchResult.filter((item:any) => item.poster_path);
      
    }
    
}
