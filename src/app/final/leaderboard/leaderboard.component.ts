import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})

export class LeaderboardComponent implements OnInit {
  isCollapsed = true;
  constructor() { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("presentation-page");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.add("bg-primary");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("product-page"); }
  
    ngOnDestroy() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("presentation-page");
      var navbar = document.getElementById("navbar-main");
      navbar.classList.remove("bg-primary");
    }
    name = '0';
    handleClick1() { 
      console.log("click1") 
     this.name="1";
    } 
    handleClick2() { 
      console.log("click2") 
      this.name="2";
    } 
    handleClick3() { 
      console.log("click3") 
      this.name="3";
    } 

}
