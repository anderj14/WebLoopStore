import { Component, OnInit } from '@angular/core';
import { CreationDetailsService } from 'src/app/services/creation-details.service';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {

  constructor(private service: CreationDetailsService) { }

  creationData: any;

  ngOnInit(): void {
    this.creationData = this.service.CreationDetails;
    console.log(this.creationData);
    
  }

}
