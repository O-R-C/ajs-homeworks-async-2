import * as customRead from '../reader';
import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

describe('load()', () => {
  test('correct', async () => {
    const result = await GameSavingLoader.load();
    expect(result instanceof GameSaving).toBeTruthy();
  });

  test('error', () => {
    const mock = jest.spyOn(customRead, 'default');
    mock.mockImplementation(() => Promise.reject('error'));

    return expect(GameSavingLoader.load()).resolves.toEqual(new Error('error'));
  });
});
