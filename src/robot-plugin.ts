import Robot from './cqnode-robot';

export default class CQNodePlugin {
  /**
   * @param {object} data 发送消息数据
   * @param {string} data.msg 消息内容
   * @param {number} data.act 消息类型
   * @param {string} data.to 发送目标
   */
  beforeSendMessage(data: { msg: string; act: number; to: string }) {}
  onRegister(cqnode: Robot) {}
}
