import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//引入作为tab的页面
import { IdoPage } from '../pages/ido/ido';
import { AsidoPage } from '../pages/asido/asido';
import { IdoforPage } from '../pages/idofor/idofor';
import { WhatidoPage } from '../pages/whatido/whatido';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IdoPage,
    AsidoPage,
    IdoforPage,
    WhatidoPage
  ],
  imports: [
    BrowserModule,
    //IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      //二级页面tab栏隐藏
      tabsHideOnSubPages:'true',
      //返回上级文字'去掉'
      backButtonText:"",
      //返回上级图标''
      backButtonIcon: 'close',
      //图标模式
      iconMode: 'ios',
      //页面切入模式
      modalEnter: 'modal-slide-in',
      //页面切出模式
      modalLeave: 'modal-slide-out',
      //tabs在底部
      tabsPlacement: 'bottom',
      //页面切换使用'苹果'模式
      pageTransition: 'ios-transition',
      //选中的tab上有一段横线
      //tabsHighlight:'true',
      tabsLayout:"title-hide"
      })
      
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //'去组件化'作为tab的页面
    IdoPage,
    AsidoPage,
    IdoforPage,
    WhatidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
