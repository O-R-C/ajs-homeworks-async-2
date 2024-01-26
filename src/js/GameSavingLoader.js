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
  static async load() {
    try {
      const response = await read();
      const data = await json(response);
      return new GameSaving(JSON.parse(data));
    } catch (error) {
      return new Error(error);
    }
  }
}
