import { Component, OnInit } from '@angular/core';
import Glide from "@glidejs/glide";
import Choices from 'choices.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {

  details = {
    rule: [],
    guide: []
  }
  focus;
  stg: number;
  task1 = []
  task2 = []
  task3 = []
  task4 = []
  task = []
  test = [{
    'name': '1',
  }]

  isCollapsed = true;
  constructor(private http: HttpClient,) { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("presentation-page");
    var navbar = document.getElementById("navbar-main");
    // navbar.classList.add("bg-primary");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("product-page");

    // new Glide('.testimonial-glide', {
    //   type: 'carousel',
    //   startAt: 0,
    //   focusAt: 2,
    //   perTouch: 1,
    //   perView: 4,
    //   responsive: [{
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         infinite: true,
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // }).mount();

    // new Choices('#choices-single-default', {
    //   searchEnabled: false,
    // });

    var url = "https://api3.ecell.in/nec/rule_guide/"

    this.http.get<any>(url).subscribe(
      data => {
        // console.log(data)
        this.details = data
      },
      err => {
        console.log(err)
        // alert(err)
      }
    )

    this.http.get<any>("https://api3.ecell.in/nec/stage/").subscribe(
      data => {
        this.stg = data["value"]
        console.log(this.stg)
      },
      err => {
        console.log(err)
      }
    )

    this.http.get<any>("https://api3.ecell.in/nec/task/").subscribe(
      data => {
        var i = 1
        this.task = this.task1 = data.filter(data => data.STAGE == '1')
        if (i<this.stg){
          this.task2 = data.filter(data => data.STAGE == '2')
          i += 1
        }
        if (i<this.stg){
          this.task3 = data.filter(data => data.STAGE == '3')
          i += 1
        }
        if (i<=this.stg){
          this.task4 = data.filter(data => data.STAGE == 'comprehensive')
        }
        console.log(data)

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

  show(id){
    console.log(id)
    if (id == 1){
      this.task =  this.task1
    }
    if (id == 2){
      this.task =  this.task2
    }
    if (id == 3){
      this.task =  this.task3
    }
    if (id == 4){
      this.task =  this.task4
    }
    console.log(this.task)

  }

}
