import * as fromUsers from './users.selectors';
import { generateMockUser } from '../models/user';

describe('users selectors', () => {
  const entities = {
    1: generateMockUser(),
  };

  it('should get all the users', () => {
    expect(
      fromUsers.getAllUsers.projector({ entities, ids: [entities[1].id] })
    ).toEqual([entities[1]]);
  });

  it('should get the selected id', () => {
    const selectedId = 1;
    expect(
      fromUsers.getSelectedUserId.projector(
        { entities, selectedUserId: selectedId },
        selectedId
      )
    ).toEqual(selectedId);
  });

  it('should get the selected user', () => {
    const selectedId = 1;
    expect(
      fromUsers.getSelectedUser.projector({ entities }, selectedId)
    ).toEqual(entities[1]);
  });
});
