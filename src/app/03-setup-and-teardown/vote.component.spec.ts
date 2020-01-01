import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // arrange
  let component: VoteComponent;
  beforeEach(() => {
    // set up
    component = new VoteComponent();
  });

  //afterEach(()=>{//tear down}) // called after test using for cleanup
  // called once before and after all test
  //beforeAll
  //afterAll
  
  it('should increment totalVotes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});