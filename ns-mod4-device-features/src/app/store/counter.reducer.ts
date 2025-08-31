
import { CounterAction } from './counter.actions';
export interface CounterState { value: number; }
export const initialState: CounterState = { value: 0 };
export function counterReducer(state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'inc': return { value: state.value + 1 };
    case 'dec': return { value: state.value - 1 };
    case 'reset': return { value: 0 };
    default: return state;
  }
}
