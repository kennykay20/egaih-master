import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";


@Injectable()

export class GeneralService {

  constructor(private http: HttpClient) {

  }

  private baseUrl = environment.apiUrl;


  post(postValue: any, url:any): Observable<any> {

    let httpOptions = new HttpHeaders();
    httpOptions.append('Content-Type', 'json');

    let postingUrl = `${this.baseUrl}/${url}`;
      return this.http.post<any>(postingUrl, postValue, {
        headers: httpOptions
      });
  }

  get(url:any): Observable<any>{

    let httpOptions = new HttpHeaders();
    httpOptions.append('Content-Type', 'json');

    let getUrl = `${this.baseUrl}/${url}`;
    return this.http.get<any>(getUrl).pipe();
  }

  ValidationFir(tccNumber: any, tin: any)
  {
    return this.http.get(`${this.baseUrl}/Firs/PostTccValidationFir/${tccNumber}/${tin}`);
  }

  searchValidation(searchVal)
  {
    return this.http.get(`${this.baseUrl}/FIRS/SearchTinValidation/${searchVal}`);
  }
}
