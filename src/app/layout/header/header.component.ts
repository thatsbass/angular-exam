import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private router = inject(Router);
  private navEnd = toSignal(
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
  );

  showAddButton = computed(() => {
    const event = this.navEnd();
    if (!event) return false;
    const url = (event as NavigationEnd).urlAfterRedirects;
    return url === '/approvisionnement';
  });
}
