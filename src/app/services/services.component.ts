import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  entries: any[] = [
    {
      title: 'Dermal Peel',
      featuredImage: 'data:image/jpeg;base64,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',
      serviceBenefit: 'This is the benefit of the service.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 100,
      detial: '1 hr'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {

  }

  onPackages() {
    this.router.navigate(['packages'])
  }

  onSelect(index: number) {
    alert('Click worked for index: ' + index);
  }
}
