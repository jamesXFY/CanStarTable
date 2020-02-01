import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let $restoreCansSubject: Subject<string> = new Subject<string>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    });

    $restoreCansSubject = new Subject<string>();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
