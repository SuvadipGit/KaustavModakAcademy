import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-gallery',
    templateUrl: 'gallery.html'
})
export class GalleryPage {
    images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    constructor(public navCtrl: NavController) {
 
    }
}
