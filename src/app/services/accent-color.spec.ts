import { TestBed } from '@angular/core/testing';

import { AccentColor } from './accent-color';

describe('AccentColor', () => {
  let service: AccentColor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccentColor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
