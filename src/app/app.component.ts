import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message: string;

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.probar();
  }

  probar(): void {
    setInterval(() =>
      this.httpClient.get<any>("https://api.icndb.com/jokes/random").subscribe(x => this.message = x.value.joke)
      , 5000
    );
  }
}
