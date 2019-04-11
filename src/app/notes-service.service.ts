import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NotesService {
  private headers: HttpHeaders;
  private url: string = 'https://localhost:44324/api/notes';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  public get() {
    return this.http.get(this.url, { headers: this.headers });
  }

  public add(payload) {
    return this.http.post(this.url, payload, { headers: this.headers });
  }

  public remove(payload) {
    return this.http.delete(this.url + '/' + payload.id, { headers: this.headers });
  }

  public update(payload) {
    return this.http.put(this.url + '/' + payload.id, payload, { headers: this.headers });
  }
}
