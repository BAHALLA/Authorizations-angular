import { TestBed } from '@angular/core/testing';

import { GuardsService } from './guards.service';

describe('GuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardsService = TestBed.get(GuardsService);
    expect(service).toBeTruthy();
  });
});
