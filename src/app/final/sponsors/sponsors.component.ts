import { Component, OnInit } from '@angular/core';
import Glide from "@glidejs/glide";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  isCollapsed = true;
  details = {
    asso: [],
    spo: []
  }
  constructor(private http: HttpClient,) { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("presentation-page");
    var navbar = document.getElementById("navbar-main");
    // navbar.classList.add("bg-primary");


    var url = "https://api3.ecell.in/nec/asso_spo/"

    this.http.get<any>(url).subscribe(
      data => {
        console.log(data)
        this.details = data
      },
      err => {
        console.log(err)
        // alert(err)
      }
    )





  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("presentation-page");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.remove("bg-primary");
  }
}
