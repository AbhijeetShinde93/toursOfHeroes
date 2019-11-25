import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css']
})
export class JsonDataComponent implements OnInit {

  demoData: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getdata().subscribe(data => this.demoData = data as string[])
    //console.log(data)
  }

  getdata(): Observable<any> {
    return this.http.get<any>('https://gitlab.com/api/v4/projects');

  }

}
