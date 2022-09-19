import { Injectable } from '@angular/core';
// import { Task } from 'src/app/Task';
import { HttpClient, HttpHeaders} from '@angular/common/http' 
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
// import { TASKS } from 'src/app/mock-tasks';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = ' http://localhost:5000/tasks'

  constructor(
    private http:HttpClient
  ) { }


  getTasks(): Observable<Task[]>{
   
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    //avisa al backend que estamps pasando un json
    return this.http.put<Task>(url, task, httpOptions)
  }

}