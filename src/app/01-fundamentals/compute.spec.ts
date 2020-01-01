import {compute} from './compute';

describe('compute', function () {
    // one or more it (specs or tests)  
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it('should incerement input if it is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});