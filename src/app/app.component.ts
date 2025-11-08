import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-boilerplate';

    showAddButton = false;
    private routerSubscription!: Subscription;

    constructor(private router: Router) {}

    ngOnInit() {
        this.routerSubscription = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            this.showAddButton = event.url === '/supplies' || event.urlAfterRedirects === '/supplies';
        });
    }

    ngOnDestroy() {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }
}