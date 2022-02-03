import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/assets/Task';

@Component({
  selector: 'app-input-field-two',
  templateUrl: './input-field-two.component.html',
  styleUrls: ['./input-field-two.component.scss']
})
export class InputFieldTwoComponent implements OnInit {
  @Input() task: Task = {subject: '---'};
  @Output() updateSubject = new EventEmitter<string>();


  isEditing = false;

  // @ViewChildren('subject', { read: ElementRef }) subject: QueryList<ElementRef>;

  // private subjectChangeSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
  }


  setEditMode(mode: boolean) {
    this.isEditing = mode;
  }

  save(subject: string) {
    this.updateSubject.emit(subject);
  }
}
