import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../model/Types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpTaskService {
  protected readonly httpClient = inject(HttpClient);

  getAllTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>('http://localhost:8080/api/v1/task');
  }

  getTaskById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`http://localhost:8080/api/v1/task/id/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>('http://localhost:8080/api/v1/task', task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>('http://localhost:8080/api/v1/task', task);
  }

  deleteTask(id: number) {
    return this.httpClient.delete(`http://localhost:8080/api/v1/task/id/${id}`);
  }
}
