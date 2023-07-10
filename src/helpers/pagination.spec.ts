import * as mdl from './pagination';

describe('helpers|pagination', () => {
  describe('getSkipTake', () => {
    it('should return (skip=0, take=10) for (page=1, size=10)', () => {
      const { skip, take } = mdl.getSkipTake(1, 10);

      expect(typeof skip).toBe('number');
      expect(skip).toBe(0);

      expect(typeof take).toBe('number');
      expect(take).toBe(10);
    });

    it('should return (skip=10, take=10) for (page=2, size=10)', () => {
      const { skip, take } = mdl.getSkipTake(2, 10);

      expect(typeof skip).toBe('number');
      expect(skip).toBe(10);

      expect(typeof take).toBe('number');
      expect(take).toBe(10);
    });
  });

  describe('getTotalPages', () => {
    it('should return (totalPages=0) for (totalItems=0, pageSize=10)', () => {
      const totalPages = mdl.getTotalPages(0, 10);

      expect(typeof totalPages).toBe('number');
      expect(totalPages).toBe(0);
    });

    it('should return (totalPages=1) for (totalItems=1, pageSize=10)', () => {
      const totalPages = mdl.getTotalPages(1, 10);

      expect(typeof totalPages).toBe('number');
      expect(totalPages).toBe(1);
    });

    it('should return (totalPages=1) for (totalItems=10, pageSize=10)', () => {
      const totalPages = mdl.getTotalPages(10, 10);

      expect(typeof totalPages).toBe('number');
      expect(totalPages).toBe(1);
    });

    it('should return (totalPages=2) for (totalItems=20, pageSize=10)', () => {
      const totalPages = mdl.getTotalPages(20, 10);

      expect(typeof totalPages).toBe('number');
      expect(totalPages).toBe(2);
    });

    it('should return (totalPages=2) for (totalItems=11, pageSize=10)', () => {
      const totalPages = mdl.getTotalPages(11, 10);

      expect(typeof totalPages).toBe('number');
      expect(totalPages).toBe(2);
    });
  });
});
