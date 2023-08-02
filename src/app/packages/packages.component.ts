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
    this.packages = this.contentful.packages;
  }

}
