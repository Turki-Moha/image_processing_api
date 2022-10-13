import { isReadable } from 'stream';
import resizer from '../../utilities/imageSizer';

describe('resizer utilitiy testing', () => {
  describe('resizer funciton', () => {
    it('return path of the image', async () => {
      await expectAsync(
        resizer({
          filename: 'fjord',
          height: 200,
          width: 200,
        })
      ).toBeResolvedTo('assets/thumb/fjord-200-200.jpg');
    });
    it('retuen error if image is not found', async () => {
      await expectAsync(
        resizer({
          filename: 'hey',
          height: 200,
          width: 300,
        })
      ).toBeResolved('image is not found!');
    });
  });
});
