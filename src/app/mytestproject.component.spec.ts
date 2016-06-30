import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MytestprojectAppComponent } from '../app/mytestproject.component';

beforeEachProviders(() => [MytestprojectAppComponent]);

describe('App: Mytestproject', () => {
  it('should create the app',
      inject([MytestprojectAppComponent], (app: MytestprojectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mytestproject works!\'',
      inject([MytestprojectAppComponent], (app: MytestprojectAppComponent) => {
    expect(app.title).toEqual('mytestproject works!');
  }));
});
