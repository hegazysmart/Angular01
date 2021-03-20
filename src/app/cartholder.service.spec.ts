import { TestBed } from '@angular/core/testing';

import { CartholderService } from './cartholder.service';

describe('CartholderService', () => {
  let service: CartholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
