import { defer } from 'rxjs';

import { UsersService } from './users.service';
import { generateMockUser } from '../models/user';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('users service', () => {
  let service: UsersService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsersService(httpClientSpy as any);
  });

  const expectedUsers = [generateMockUser()];
  it('should call the search api and return the results', () => {
    httpClientSpy.get.and.returnValue(asyncData(expectedUsers));

    service
      .getUsers()
      .subscribe(
        users => expect(users).toEqual(users, 'expected heroes'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
