import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsersEffects } from './users.effects';
import { UsersService } from '../services/users.service';
import { generateMockUser } from '../models/user';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('users effects', () => {
  let effects: UsersEffects;
  let usersService: any;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        UsersEffects,
        {
          provide: UsersService,
          useValue: { getUsers: jasmine.createSpyObj('usersService', ['get']) },
        },
        HttpClient,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(UsersEffects);
    usersService = TestBed.inject(UsersService);
    actions$ = TestBed.inject(Actions);
  });

  describe('loadUsers$', () => {
    it('should return a UsersActions.getUsersSuccess', () => {
      const users = [generateMockUser()];

      effects.loadUsers$.subscribe(action => {
        expect(action).toEqual({
          type: '[Users Page] Get Users Success',
          users,
        });
      });
    });
  });
});
