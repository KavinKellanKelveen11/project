import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = [
    '../../../assets/images/About.png',
    '../../../assets/images/Banner2.jpeg',
    '../../../assets/images/ps.jpeg',
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  gotoLogin(): void {
    this.route.navigate(['/client-login']);
  }
}
