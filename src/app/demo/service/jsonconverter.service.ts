import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonconverterService {
  rootURL = environment.backend.baseURL;
  constructor(private http: HttpClient) { }
  convert(body:any){
    return this.http.post(this.rootURL+'/bosk/xmttojson/convert',body)
  }
}
