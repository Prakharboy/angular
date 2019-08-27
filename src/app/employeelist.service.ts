import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { iemployee } from './employee';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {

  private url:string="/assets/employee.json";
  constructor(private ht:HttpClient) { }

  getad():Observable<iemployee[]>
  {
    return this.ht.get<iemployee[]>(this.url).pipe(catchError(this.errorHandler));
  }
  getemployeep()
  {
return "this is working that is serveice";

  }
  errorHandler(error:HttpErrorResponse)
  {
return Observable.throw(error.message||"error message")
  }
}