import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
//引入作为tab的页面
import { IdoPage } from '../ido/ido';
import { AsidoPage } from '../asido/asido';
import { IdoforPage } from '../idofor/idofor';
import { WhatidoPage } from '../whatido/whatido';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  //申明tab页面变量
  tab1Root = IdoPage;
  tab2Root = AsidoPage;
  tab3Root = IdoforPage;
  tab4Root = WhatidoPage;
  constructor() {

  }
}
