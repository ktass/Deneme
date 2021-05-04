import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards!: Card[];





  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) { }

  getCards(): void {
    this.http.get<Card[]>(this.apiUrl + '/cards', this.headers())
      .subscribe((res: Card[]) => {
        this.cards = res;

      });

  }

  addCard(card: Card): Observable<any> {
    return this.http.post(this.apiUrl + '/cards', card, this.headers());

  }

  updateCard(card: Card, cardId: number): Observable<any> {
    return this.http.put(this.apiUrl + '/cards/' + cardId, card);
  }

  deleteCard(cardId: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/cards/' + cardId);
  }

  headers(options?: any): Object {
    return {
      headers: {
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    };

  }


}



