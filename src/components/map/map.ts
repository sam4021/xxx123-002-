import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  text: string;
  public map;
  constructor() {
    console.log('Hello MapComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit(){
    this.map = this.createMap();
  }

  // getCurrentLocation(){
  //
  //   let options = {timeout: 10000, enableHighAccuracy: true};
  //
  //   Geolocation.getCurrentPosition(options);
  // }

  createMap(location = new google.maps.LatLng(-4.036878, 39.669571)){
    let mapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }

    let MapEl = document.getElementById('map');
    let map = new google.maps.Map(MapEl, mapOptions);
  }


}
