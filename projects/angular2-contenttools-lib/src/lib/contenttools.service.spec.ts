import { TestBed, inject } from '@angular/core/testing';

import { ContentToolsService } from './contenttools.service';

describe('ContentToolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentToolsService]
    });
  });

  it('should be created', inject([ContentToolsService], (service: ContentToolsService) => {
    expect(service).toBeTruthy();
  }));
});
