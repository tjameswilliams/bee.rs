import { addProviders, inject } from '@angular/core/testing';
​
import { provide } from '@angular/core';

import { UserService } from './user.service';

describe('User Service', () => {
  beforeEach(() => {
    addProviders([UserService]);
  });

  it('does stuff', inject([UserService], (user: UserService) => {
    // actual test

  }));
});
