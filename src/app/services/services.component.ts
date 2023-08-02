import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../shared/contentful.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  entries: any[] = [];

  constructor(private router: Router,
              private contentful: ContentfulService) {}

  ngOnInit() {
    this.entries = this.contentful.entries;
  }

  onPackages() {
    this.router.navigate(['packages'])
  }

  onSelect(index: number) {
    this.router.navigate([index])
  }
}
