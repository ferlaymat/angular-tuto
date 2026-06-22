import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Page, Person } from '../model/Types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpPersonService {
  protected readonly httpClient = inject(HttpClient);

  getAllPerson(
    page?: number,
    size?: number,
    sortBy?: string,
    sortOrder?: string,
    lastName?: string,
    firstName?: string,
    city?: string,
  ): Observable<Page<Person>> {
    const params = this.buildParams({
      page,
      size,
      sortBy,
      sortOrder,
      lastName,
      firstName,
      city,
    });
    return this.httpClient.get<Page<Person>>('http://localhost:8080/api/v1/person', { params });
  }

  private buildParams(filters: Record<string, any>): HttpParams {
    return Object.entries(filters)
      .filter(([_, value]) => value !== undefined)
      .reduce((params, [key, value]) => params.set(key, value), new HttpParams());
  }
}
