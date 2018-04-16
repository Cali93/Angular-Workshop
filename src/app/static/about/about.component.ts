import {
  Component,
  OnInit
} from '@angular/core';

import {
  ANIMATE_ON_ROUTE_ENTER
} from '@app/core';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  brandname = 'BeCode\'s roadmap';
  becode: string;

  tiles = [{
      icon: 'accessibility',
      title: 'Join us',
      desc: 'Register / Login',
      text: 'Hello',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      cols: 1,
      rows: 4,
      btn1: 'Register',
      btn2: 'Login',
      // color: '#1aa4b8',
      url: 'https://google.com',
      url2: '../examples',
    },
    {
      icon: 'insert_drive_file',
      title: 'Find ressources',
      desc: 'Pre-filtered content',
      text: 'Two',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      cols: 1,
      rows: 4,
      btn1: 'Check all',
      btn2: 'Find',
      // color: '#1a9cb8',
      url: '../features',
      url2: '../examples'
    },
    {
      icon: 'trending_up',
      title: 'Improve your skills',
      desc: 'Get better',
      text: 'Three',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      cols: 1,
      rows: 4,
      btn1: 'Tutorials',
      btn2: 'Exercices',
      // color: '#1a94b8',
      url: '../examples',
      url2: '../examples'
    },
    {
      icon: 'assignment',
      title: 'Contribute',
      desc: 'Make it better',
      text: 'Four',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      cols: 1,
      rows: 4,
      btn1: 'Add content',
      btn2: 'Add project',
      // color: '#1a8cb8',
      url: 'https://facebook.com',
      url2: '../examples',
    }
    // {text: 'Five', cols: 1, rows: 1, color: '#DDBDF1', url: 'https://facebook.com', desc: 'Plug yourself to the platform'},
    // {text: 'Six', cols: 1, rows: 1, color: '#DDBDF1', url: 'https://facebook.com', desc: 'Plug yourself to the platform'},
  ];
  constructor() {
    this.becode = '<BeCode/>';
  }

  ngOnInit() {}
}
