import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public categories: any[] = [];
  private categorySubscribe: any;

  constructor(private databaseService:DatabaseService) {}

  ngOnInit() {
    this.getAllCategories();
  }

  ngOnDestroy() {
    this.categorySubscribe.unsubscribe();
  }

  getAllCategories() {
    this.categorySubscribe = this.databaseService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    })
  }

  slides = [
    { img: '/assets/img/1-slider-img.png' },
    { img: '/assets/img/2-slider-img.png' },
    { img: '/assets/img/3-slider-img.png' },
  ];
  
  slideConfig = { 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {

  }
  breakpoint(e: any) {

  }
  afterChange(e: any) {

  }
  beforeChange(e: any) {

  }
  

}
