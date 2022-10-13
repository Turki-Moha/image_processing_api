import supertest from 'supertest';
import app from '../index';

const req = supertest(app);

describe('endpoit testing ', () => {
  describe('api/image response', () => {
    it('send new image 200x200', async () => {
      const res = await req.get(
        '/api/image?filename=fjord&height=200&width=200'
      );
      expect(res.status).toBe(200);
    });

    describe('api/image response with 200x300', () => {
      it('send new image', async () => {
        const res = await req.get(
          '/api/image?filename=fjord&height=200&width=300'
        );
        expect(res.status).toBe(200);
      });
      it('show an error message', async () => {
        const res = await req.get('/api/image?height=200&width=300');
        expect(res.status).toBe(500);
      });
    });
  });
});
