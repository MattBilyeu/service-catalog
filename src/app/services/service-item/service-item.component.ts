import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  entry: any;

  constructor(private contentful: ContentfulService,
              private router: Router,
              private route: ActivatedRoute) {}
  
  ngOnInit() {
    const params = this.route.params.subscribe(
      (params: Params) => {
        this.entry = this.contentful.entries[params['id']]
      }
    )
  }

}
