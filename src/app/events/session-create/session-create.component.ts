import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'src/app/types/session.type';
import { restrictedWords } from 'src/app/shared/validators/restrictedWords.validator';

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css'],
})
export class SessionCreateComponent implements OnInit {
  @Output() saveNewSession: EventEmitter<Session> = new EventEmitter<Session>();
  @Output() cancelSession = new EventEmitter();
  public newSessionForm: FormGroup;
  public name: FormControl;
  public presenter: FormControl;
  public duration: FormControl;
  public level: FormControl;
  public abstract: FormControl;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo', 'bar']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues: any): void {
    const values: Session = {
      id: 0,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.duration,
      abstract: formValues.abstract,
      voters: [],
    };

    if (this.newSessionForm.valid) {
      this.saveNewSession.emit(values);
    }
  }

  cancel(): void {
    this.cancelSession.emit();
  }
}
