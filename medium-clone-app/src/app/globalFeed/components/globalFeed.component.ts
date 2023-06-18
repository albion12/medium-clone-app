import { Component } from "@angular/core";
import { FeedComponent } from "src/app/shared/components/feed/feed.component";

@Component({
    selector:'mc-global-feed',
    templateUrl:'./globalFeed.component.html',
    standalone:true,
    imports:[FeedComponent]
})

export class GlobalFeedComponent{}