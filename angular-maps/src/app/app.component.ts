import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'server mappe';
  lat: number = 45.506738;
  lng: number =   9.190766;
  latitudine: number = 45.563314;
  longitudine: number = 9.270542;

  latCane: number = 45.506738;
  lngCane: number = 9.190766;

  latTartaruga: number = 45.023845;
  lngTartaruga: number = 9.19263;

  latCoccodrillo: number = 45.023841;
  lngCoccodrillo: number = 9.333333;

   colore="yellow";
   giallo(){
     this.colore="yellow";
   }
   rosso(){
     this.colore="red";
   }
   verde(){
     this.colore="green";
   }
   icon =  {
    url:'./assets/img/cane.jpg',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
 icon2 =  {
    url:'./assets/img/tartaruga.jpg',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
   icon3 =  {
    url:'./assets/img/coccodrillo.jpg',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  triangle: Array<Point> =
  [
    {lng:9.190766, lat:45.506738},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]
  rectangle: Array<Point> =
  [
   {lng:9.190766, lat:45.6},
    {lng:9.7, lat:45.6},
    {lng:9.7, lat:45.4},
    {lng:9.190766, lat:45.4},
  ]
 colore1="green";
   giallo1(){
     this.colore1="yellow";
   }
   rosso1(){
     this.colore1="red";
   }
   verde1(){
     this.colore1="green";
   }
}
