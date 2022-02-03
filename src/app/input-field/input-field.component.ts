import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/assets/Task';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit, OnDestroy {

  @Input() task: Task = {subject: 'New task'};
  @Output() updateSubject = new EventEmitter<string>();

  isEditing = false;

  @ViewChildren('subject', { read: ElementRef }) subject: QueryList<ElementRef>;

  private subjectChangeSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.subjectChangeSubscription = this.subject.changes.subscribe((next: QueryList<ElementRef>) => {
      // this.subject?.destroy();
      const subject = next.first.nativeElement;
      subject.focus();
    })
  }

  ngOnDestroy() {
    this.subjectChangeSubscription.unsubscribe();
  }


  setEditMode(mode: boolean) {
    this.isEditing = mode;
  }

  save(subject: string) {
    this.updateSubject.emit(subject);
  }

}
