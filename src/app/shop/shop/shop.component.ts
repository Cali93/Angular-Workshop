import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'anms-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [routerTransition]
})
export class ShopComponent implements OnInit {
  shop = [
    { link: 'projects', label: 'Introduction' },
    { link: 'preorders', label: 'Tutoriel' },
    { link: 'orders', label: 'Conclusion' }
  ];

  constructor() {}

  ngOnInit() {}
}
