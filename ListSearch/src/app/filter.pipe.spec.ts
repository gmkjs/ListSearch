import { FilteredPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilteredPipe();
    expect(pipe).toBeTruthy();
  });
});
