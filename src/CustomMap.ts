import { Company } from './Company';
import { User } from "./User";

// Instructions to other classes how be an argument for "addMarker"
interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
}

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(selector: string) {
        this.googleMap = new google.maps.Map(document.getElementById('map'), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
  
    addMarker(mapable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapable.location.lat,
                lng: mapable.location.lng,
            },
        });
    }
}