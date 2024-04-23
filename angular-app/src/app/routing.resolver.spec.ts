import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { routingResolver } from './routing.resolver';

describe('routingResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => routingResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
