import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  urlDynmic = 'http://154.27.79.62:8080';
  constructor(private http: HttpClient) { }

  getCallData(userData) {
    if(userData !== undefined){
      return this.http.get<any>(`http://203.110.84.237:803/monitorAPI/request/agentJSON?${userData}`);
    } else{
      return this.http.get<any>('http://203.110.84.237:803/monitorAPI/request/agentJSON');
    }

  }

  getCallHeadersData(userData) {
    if(userData !== undefined){
      return this.http.get<any>(`http://74.81.33.126:8080/monitorAPI/request/headerJSON?${userData}`);
    } else {
      return this.http.get<any>('http://74.81.33.126:8080/monitorAPI/request/headerJSON');
    }
    // return this.http.get<any>('http://154.27.79.62:8080/monitorAPI/request/headerJSON');

  }

  getCallDataWithSort(col,type,data) {
    debugger
    if(data !== undefined){
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/request/agentJSON?column=${type}&type=${col}&${data}`);
    } else {
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/request/agentJSON?column=${type}&type=${col}`);
    }

  }

  getCallDataWithSortForQueue(userData) {
    if(userData !== undefined){
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/channel/queueJSON?${userData}`);
    } else{
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/channel/queueJSON`);
    }

  }

  getCallDataWithSortForCampaign(userData) {
    if(userData !== undefined){
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/campaign/campaignJSON?${userData}`);
    } else{
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/campaign/campaignJSON`);
    }

  }

  getAgentData(col,type, userData){
    if(userData !== undefined){
      return this.http.get<any>(`${this.urlDynmic}/monitorAPI/channel/qChartJSON?column=${type}&type=${col}&${userData}`);
    } else{
      return this.http.get<any>(`${this.urlDynmic}/monitorAPI/channel/qChartJSON?column=${type}&type=${col}`);
    }

  }

  getChannelData(col,type,urldata){
    if(urldata !== undefined){
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/channel/channelJSON?column=${type}&type=${col}`);
    } else{
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/channel/channelJSON?column=${type}&type=${col}`);
    }

  }

  getChannelHeaderData(userData){
    if(userData !== undefined){
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/channel/cheaderJSON?${userData}`);
    } else{
      return this.http.get<any>(`http://154.27.79.62:8080/monitorAPI/channel/cheaderJSON`);
    }

  }
}
