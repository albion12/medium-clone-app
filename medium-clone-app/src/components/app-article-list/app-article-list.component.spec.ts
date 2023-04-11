import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppArticleListComponent } from './app-article-list.component';

describe('AppArticleListComponent', () => {
  let component: AppArticleListComponent;
  let fixture: ComponentFixture<AppArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppArticleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
