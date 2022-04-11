import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreationDetailsService } from 'src/app/services/creation-details.service';

CreationDetailsService

@Component({
  selector: 'app-creationspage',
  templateUrl: './creationspage.component.html',
  styleUrls: ['./creationspage.component.scss']
})
export class CreationspageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:CreationDetailsService) { }

  getMenuId:any
  creationData: any;


  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getMenu');
    
    if(this.getMenuId){
      this.creationData = this.service.CreationDetails.filter( (value) => {
        return value.id == this.getMenuId;
      });
      console.log(this.creationData, 'creationData');
      
    }
  }

}
