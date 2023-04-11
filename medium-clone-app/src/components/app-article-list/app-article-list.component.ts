import { Component, OnInit } from '@angular/core';
import { ConduitService } from 'src/services/conduit.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-app-article-list',
  templateUrl: './app-article-list.component.html',
  styleUrls: ['./app-article-list.component.css']
})
export class AppArticleListComponent implements OnInit {

    // articles: any[] | undefined;
    apiData: any;

    constructor(private conduitService: ConduitService,private http: HttpClient) { }

    // ngOnInit(): void {
    //   this.conduitService.getArticles().subscribe(
    //     articles => this.articles = articles
    //   );
    // }
    ngOnInit(): void {
      // this.http.get<any>('https://conduit.productionready.io/api/articles')
      //   .subscribe((response:any) => {
      //     this.apiData = response;
      //   });
    }

}
