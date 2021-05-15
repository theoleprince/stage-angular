import { TestBed } from '@angular/core/testing';

import { BlogCategorieService } from './blog-categorie.service';

describe('BlogCategorieService', () => {
  let service: BlogCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
