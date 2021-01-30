import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  todoForm = this.formBuilder.group({
    title: '',
    description: ''
  });
  todos : Array<any>= [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.toastr.success('Congratulations', 'Your todo added successfully !');
    console.log('submit todo');
    this.todos.push(this.todoForm.value);
    this.todoForm = this.formBuilder.group({
      title: '',
      description: ''
    });
  }

}
