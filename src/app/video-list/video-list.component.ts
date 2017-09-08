import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  private req:any;
  title:string = 'Video List';
  todayDate:Date;
  videoList:any[]; //= [ //json objects
    /* {
      name: 'item 1',
      slug: 'item-1',
      embed: 'IqOqbtBAIvQ'
    },
    {
      name: 'item 2',
      slug: 'item-2',
      embed: 'IqOqbtBAIvQ'
    },
    {
      name: 'item 3',
      slug: 'item-3',
      embed: null
    }
  ]; */
  constructor(private http:Http) { }

  ngOnInit() {
    this.todayDate = new Date();
    this.req = this.http.get('/assets/json/videos.json').subscribe(data=>{
      this.videoList = data.json() as [any];
    });
  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }

  getEmbedUrl(item){
    return "https://www.youtube.com/embed/" + item;
  }
}
