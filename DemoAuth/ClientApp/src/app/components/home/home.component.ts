import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get_current_user().subscribe(res => {
      console.log(res);
    }, err => {
        console.log(err);
    })
  }

}
