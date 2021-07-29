import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  sub = {
    tasks : {
      STAGE: '',
      deadline: '',
      discription: '',
      file: '',
      guidelines: '',
      id: '',
      task: '',
      total_points: '',
      video: '',
    },
    det: []
  }

  constructor(private http: HttpClient,) { }

  ngOnInit() {
    var url = "https://api3.ecell.in/nec/taskdetail/"
    var body = new FormData();
    body.append('id', '1')
    this.http.post<any>(url, body).subscribe(
      data => {
        this.sub = data
        console.log(this.sub)
      },
      err => {
        console.log(err)
        // alert(err)
      }
    )
  }

}
