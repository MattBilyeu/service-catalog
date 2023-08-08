import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../shared/contentful.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages: any;

  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
    this.contentful.getPackages().then(
      packages => {
        this.packages = packages
      }
    );
  }

}
