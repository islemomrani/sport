import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }
weather(obj:any){
  return this.httpClient.post<{apiRes:any}>("http://localhost:3000/api/weather",obj);
}



}
