/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 
import { debug } from 'util';

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });

  it('should highlight the first element with cyan', () => {
    let debugElement = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(debugElement.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with the default color', () => {
    let debugElement = fixture.debugElement.queryAll(By.css('p'))[1];
    let directive = debugElement.injector.get(HighlightDirective);
    expect(debugElement.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });

});
