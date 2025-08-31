
import { counterReducer, initialState } from './counter.reducer';
describe('counterReducer', () => {
  it('debe incrementar', () => {
    const s1 = counterReducer(initialState, { type: 'inc' });
    expect(s1.value).toBe(1);
  });
  it('debe decrementar', () => {
    const s1 = counterReducer({ value: 3 }, { type: 'dec' });
    expect(s1.value).toBe(2);
  });
  it('debe resetear', () => {
    const s1 = counterReducer({ value: 5 }, { type: 'reset' });
    expect(s1.value).toBe(0);
  });
});
