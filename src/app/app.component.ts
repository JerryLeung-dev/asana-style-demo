import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Task } from 'src/assets/Task';
import { ViewModel } from 'src/assets/ViewModel';
import { AfterViewChecked, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  canEdit = true;
  isEditing = false;
  task: Task = {
    subject: 'New task',
  };
  viewModel: ViewModel = {
    action: {
      Priority: {
        Value: undefined,
      },
      AssignedTo: {
        Value: undefined,
      },
      Status: {
        Value: undefined,
      },
      DateOpened: {
        Value: null,
      },
      DateDue: {
        Value: null,
      },
      DateClosed: {
        Value: null,
      },
    },
    priorities: [
      { Text: 'Medium', Value: 2 },
      { Text: 'High', Value: 3 },
      { Text: 'Low', Value: 1 },
    ],
    users: [
      { Value: 19537, Text: 'Administrator' },
      { Value: 20374, Text: 'Aishar Hanington' },
      { Value: 19608, Text: 'Allison Hendricks' },
      { Value: 20382, Text: 'Andrea Shaw' },
      { Value: 20373, Text: 'Astrid Harriott' },
      { Value: 19892, Text: 'Belen' },
      { Value: 20021, Text: 'Caesareina' },
      { Value: 20370, Text: 'Carleen McConnell' },
      { Value: 20198, Text: 'Grant' },
      { Value: 20560, Text: 'Jerry' },
      { Value: 19539, Text: 'Johnny He' },
      { Value: 20866, Text: 'Lynne' },
      { Value: 19538, Text: 'Matthew Cooney' },
      { Value: 20865, Text: 'Monica' },
      { Value: 20524, Text: 'Monika Andersson' },
      { Value: 19605, Text: 'Monique Bollen' },
      { Value: 19914, Text: 'Prerna' },
      { Value: 20557, Text: 'Priya' },
      { Value: 20618, Text: 'PRIYA' },
      { Value: 20377, Text: 'Shobhna Pandaram' },
      { Value: 20372, Text: 'Stephen Bailey' },
      { Value: 20371, Text: 'Stephen Biddulph' },
      { Value: 20132, Text: 'Tara' },
      { Value: 20559, Text: 'Tony' },
      { Value: 19541, Text: 'Ye Yuan' },
    ],
    status: [
      { Value: 1, Text: 'Open' },
      { Value: 2, Text: 'Waiting' },
      { Value: 3, Text: 'Closed' },
      { Value: 4, Text: 'Cancelled' },
      { Value: 5, Text: 'Completed' },
    ],
  };

  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.form = fb.group({
      subject: 'New subject',
      priority: this.viewModel.action.Priority.Value,
      assignedTo: this.viewModel.action.AssignedTo.Value,
      status: this.viewModel.action.Status.Value,
      dateOpened: this.viewModel.action.DateOpened.Value,
      dateDue: this.viewModel.action.DateDue.Value,
      dateClosed: this.viewModel.action.DateClosed.Value,
    });
  }

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  get minDate() {
    return this.form.get('dateOpened')?.value;
  }
}
