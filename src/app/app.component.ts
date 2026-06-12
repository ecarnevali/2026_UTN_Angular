import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLinkWithHref, RouterOutlet, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private router = inject(Router);
  private storageService = inject(StorageService);

  ngOnInit(): void {
    const lastVisited = this.storageService.getLocal(LOCALSTORAGE_KEY);

    if (lastVisited && lastVisited !== '/') {
      this.router.navigateByUrl(lastVisited);
    }


    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects || event.url;
        this.storageService.setLocal(LOCALSTORAGE_KEY, currentUrl);
    });


  }



}

const LOCALSTORAGE_KEY = 'lastVisited';
