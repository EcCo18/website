import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  currentRoute = '/';
  $event?: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(value => value instanceof NavigationEnd)).subscribe(() => {
      this.currentRoute = this.router.url
    });
  }

  ngOnDestroy(): void {
    if (this.$event) {
      this.$event.unsubscribe();
    }
  }

}
