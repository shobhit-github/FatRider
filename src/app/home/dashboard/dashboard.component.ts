import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as animation from './dashboard.animation';
import {WindowRef} from '../../_shared/_helpers/window.ref';


@Component({
  templateUrl: './dashboard.component.html',
  animations: [
    animation.manageUser,
    animation.manageOrder,
    animation.manageDb,
    animation.visits,
    animation.acquisition,
    animation.monthlyStats,
    animation.newUser,
    animation.users,
    animation.specialization,
    animation.todayGr,
    animation.todayRed,
    animation.activity,
    animation.chat,
    animation.fadeInOut
  ],
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {


  constructor(public windowRef: WindowRef) {

  }

  ngAfterViewInit = () => {

    this.windowRef.nativeWindow.jQ.Index();
  }


}
