/*
 * @Author: please
 * @Date: 2024-02-29 14:02:53
 * @LastEditors: please
 * @LastEditTime: 2024-02-29 15:48:06
 * @Description: 请填写简介
 */
module.exports = {
  presets: [
    [
      '@soterea-f2e/cli/preset',
      {
        loose: process.env.NODE_ENV === 'compile'
      }
    ]
  ]
}
