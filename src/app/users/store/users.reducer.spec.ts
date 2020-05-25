import {
  reducer,
  UsersState,
  initialState as reducerInitialState,
} from './users.reducer';
import * as fromUsers from './users.selectors';
import * as UsersActions from './users.actions';
import { generateMockUser, User } from '../models/user';

describe('users reducer', () => {
  const user1 = generateMockUser();
  const user2 = { ...user1, id: 2 };
  const initialState: UsersState = {
    ids: [user1.id, user2.id],
    entities: {
      [user1.id]: user1,
      [user2.id]: user2,
    },
    selectedUserId: null,
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = reducer(undefined, {} as any);
      expect(result).toEqual({
        ids: [],
        entities: {},
        selectedUserId: undefined,
      });
    });

    it('should delete the user', () => {
      const expectedResult = {
        ids: [],
        entities: {},
        selectedUserId: undefined,
      };
      const action = UsersActions.deleteUser({ userId: user1.id });
      const result = reducer(reducerInitialState, action);
      expect(result).toEqual(expectedResult);
    });

    it('should update the user', () => {
      const expectedResult = {
        ids: [user1.id, user2.id],
        entities: {
          [user1.id]: { ...user1, name: 'user12345' },
          [user2.id]: user2,
        },
        selectedUserId: null,
      };

      const action = UsersActions.updateUser({
        payload: { id: user1.id, changes: { ...user1, name: 'user12345' } },
      });
      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });

    it('should set the selectedId', () => {
      const expectedResult = {
        ids: [user1.id, user2.id],
        entities: {
          [user1.id]: user1,
          [user2.id]: user2,
        },
        selectedUserId: 1,
      };

      const action = UsersActions.setSelectedUserId({ userId: 1 });
      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });
  });
});
