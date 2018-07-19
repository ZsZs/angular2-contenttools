import { TestBed, inject } from '@angular/core/testing';

import { ContenttoolsService } from './contenttools.service';

describe('ContentToolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContenttoolsService]
    });
  });

  it('should be created', inject([ContenttoolsService], (service: ContenttoolsService) => {
    expect(service).toBeTruthy();
  }));
});
