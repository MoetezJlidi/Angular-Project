import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  secondes: number = 0;
  counterSubscription!: Subscription;

  ngOnInit() {
    const counter: Observable<number> = interval(1000);
    this.counterSubscription = counter.subscribe({
      next: (value) => {
        this.secondes = value;
      },
      error: (error) => {
        console.log('An error occurred! : ', error);
      },
      complete: () => {
        console.log('Observable complete!');
      }
    });
  }

  ngOnDestroy() {
      this.counterSubscription.unsubscribe();

  }
}
