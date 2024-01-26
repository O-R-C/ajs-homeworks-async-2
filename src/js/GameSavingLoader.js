import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

/**
 * загружает сохранение,
 * возвращает экземпляр класса GameSaving
 * @class
 */
export default class GameSavingLoader {
  /**
   * загружает сохранение
   * @static
   * @returns {object} экземпляр класса GameSaving
   */
  static load() {
    return read()
      .then((data) => json(data))
      .then((save) => new GameSaving(JSON.parse(save)))
      .catch((error) => error);
  }
}
