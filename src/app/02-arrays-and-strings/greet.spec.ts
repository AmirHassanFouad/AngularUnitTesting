import { greet } from "./greet";

describe('greet', function () {
    // one or more it (specs or tests)  
    it('should include the name in the message', () => {
        expect(greet("Amir")).toContain("Amir");
    });
});


   