import { Directive, OnInit } from '@angular/core';

/**
 * Generated class for the MapDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[map]' // Attribute selector
})
export class MapDirective implements OnInit {

  public map;
  constructor() {

  }

  ngOnInit(){
    this.map = this.createMap();
  }

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
