import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'nx-monorepo';
  constructor(private http: HttpClient) {
  }

 public ngOnInit() {
    this.http.get('http://localhost:3000/api').subscribe(data=>console.log(data))
  }
}
