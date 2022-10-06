import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

//apiData:any;
//dataToDisplay:any;

dogApiData:any;
apiMessage:any;
dog1:any;
dog2:any;

constructor(private httpClient: HttpClient) { 
//this.apiData=[];
this.dogApiData=[];

}

  ngOnInit()  {
 //this.getApiData()
 this.getdogApiData()
  }

/**getApiData(){
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
}**/

getdogApiData(){
this.httpClient.get('https://dog.ceo/api/breeds/list/all').subscribe((dogData:any)=>
{
console.log(dogData);
this.dogApiData= dogData;
const message= this.dogApiData.message; 
console.log(message);

let dataItem= Object.entries(message)
console.log(dataItem);

this.dog1 = dataItem.map((v)=>{
console.log(v)
return v;
})

this.dog2 = dataItem.map((v)=>{
console.log(v[1])
return v[1];
})
})

}



}




