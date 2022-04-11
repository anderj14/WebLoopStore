import { Component, OnInit } from '@angular/core';
import { CreationDetailsService } from 'src/app/services/creation-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: CreationDetailsService) { }

  creationData: any;

  ngOnInit(): void {
    this.creationData = this.service.CreationDetails;
    console.log(this.creationData);
    
  }

}
