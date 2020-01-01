import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //fixture.nativeElement // return html element which is the root dom element of the component template
    //fixture.debugElement // wrapper around the native element
    //fixture.changeDetectorRef// can change detection manually
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.vote-count'));//match first
    let el: HTMLElement = debugElement.nativeElement;
    //fixture.debugElement.queryAll(By.css('.vote-count'));//match all
    //By.directive // directive on element
    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();
    let debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(debugElement.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when I click the upvote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);// name of event & the object to pass by this event
    
    expect(component.totalVotes).toBe(1);
  });



});
