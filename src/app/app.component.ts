import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public modalView: boolean = false;
  public popoverTitle: string = '';
  public popoverView: boolean = false;
}
