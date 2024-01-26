/**
 * данные персонажа
 * @class
 */
export default class GameSaving {
  /**
   *@constructor
   * @param {object} param0 данные персонажа
   */
  constructor({ id, created, userInfo }) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}
