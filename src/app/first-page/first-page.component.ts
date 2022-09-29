import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

apiData:any;
dataToDisplay:any;
constructor(private httpClient: HttpClient) { 
this.apiData=[];

}

  ngOnInit()  {
 this.getApiData()
  }

  getApiData(){
 this.httpClient.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').subscribe((result:any)=>
{
	console.log(result);

this.apiData = result.data;
console.log(this.apiData);
this.dataToDisplay = this.apiData.map((v:any)=>{
console.log(v);
let apiInfo = v;
return apiInfo;
})
console.log(this.dataToDisplay);
})

}
}
