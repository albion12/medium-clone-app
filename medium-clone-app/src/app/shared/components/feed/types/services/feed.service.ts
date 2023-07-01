import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetFeedResponseInterface } from "../getFeedResponse.interface";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})

export class FeedService{
    constructor(private http:HttpClient){}

    getFeed(url:string):Observable<GetFeedResponseInterface>{
        const fullUrl = environment.apiUrl + url
        return this.http.get<GetFeedResponseInterface>(fullUrl)

    }
}