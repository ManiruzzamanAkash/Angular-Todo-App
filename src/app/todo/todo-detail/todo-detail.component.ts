import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo : any;

  constructor() { }

  ngOnInit(): void {
  }

}
