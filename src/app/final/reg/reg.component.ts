import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  isCollapsed = true;

  college_list;
  college;
  address
  leader;
  track= 'basic';
  email;
  whatsapp;
  city;
  pin;
  state;
  country;
  years;
  refferal;
  mem;
  nec;

  other;
  chk: boolean = false;




  constructor(private http: HttpClient,) { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("account-settings");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("account-settings");
  }

  clg_input_change() {
    var url = "https://api.ecell.in/ca_program/colleges/"
    var body = new FormData();
    body.append('q', this.college);
    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data)
        this.college_list = data;
      }

    )
  }


  submit() {
    console.log(this.mem, this.nec)
    if (Number(this.nec)> 2 && this.track == 'basic'){
      alert(' please register as advance')
      return
    }
    var url = "https://api3.ecell.in/nec/appli/"
    var body = new FormData();
    body.append('email', this.email);
    body.append('leader', this.leader);
    body.append('whatsapp', this.whatsapp);
    body.append('college', this.college);
    body.append('address', this.address);
    body.append('city', this.city);
    body.append('pin', this.pin);
    body.append('state', this.state);
    body.append('country', this.country);
    body.append('year_active', this.years);
    body.append('referal', this.refferal);
    body.append('track', this.track);
    body.append('nec', this.nec);
    body.append('mem', this.mem)
    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data)
        this.other = data["all"]
        this.chk = true
      },
      err => {
        alert()
      }
    )

  }




}
