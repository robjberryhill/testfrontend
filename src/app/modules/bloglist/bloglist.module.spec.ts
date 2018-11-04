import { BloglistModule } from './bloglist.module';

describe('BloglistModule', () => {
  let bloglistModule: BloglistModule;

  beforeEach(() => {
    bloglistModule = new BloglistModule();
  });

  it('should create an instance', () => {
    expect(bloglistModule).toBeTruthy();
  });
});
