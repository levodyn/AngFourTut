import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeImageList = [
    {
      image: "assets/images/nature/1.jpg", 
      title:"Ants crawling", 
      description: 'Why do ants crawl so much?',
      link: '/videos/item-1'
    },
    {
      image: "assets/images/nature/2.jpg", 
      title:"Tropical island", 
      description: 'Everyone likes the sun!!!',
      link: '/videos/item-2'
    },
    {
      image: "assets/images/nature/3.jpg", 
      title:"Fog crawling", 
      description: 'Fog boehoe boring',
      link: '/videos/item-3'
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  preventNormal(event:MouseEvent,image:any){
    event.preventDefault();
    this.router.navigate(['./videos']);
  }

}
