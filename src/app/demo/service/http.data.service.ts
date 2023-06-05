import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  private rootURL = environment.backend.baseURL 
  constructor(private http: HttpClient) { 
  }
  getAllProjects(body:any){
    return this.http.post(this.rootURL+'/bosk/xmttojson/all',body);
  }
}
