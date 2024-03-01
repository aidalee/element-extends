/*
 * @Author: please
 * @Date: 2024-02-29 16:47:13
 * @LastEditors: please
 * @LastEditTime: 2024-02-29 17:01:17
 * @Description: 请填写简介
 */
import execa from 'execa'
import ora from 'ora'
import { resolve } from 'path'

const CWD = process.cwd()
const PKG_CLI = resolve(CWD, './packages/so-cli')
const PKG_UI = resolve(CWD, './packages/so-ui')

export const buildCli = () => execa('pnpm', ['build'], { cwd: PKG_CLI })
export const buildUI = noUmd =>
  execa('pnpm', ['compile', noUmd ? '--noUmd' : ''], { cwd: PKG_UI })

export async function runTask(taskName, task) {
  const s = ora().start(`Building ${taskName}`)
  try {
    await task()
    s.succeed(`Build ${taskName} completed!`)
  } catch (e) {
    s.fail(`Build ${taskName} failed!`)
    console.error(e.toString())
  }
}
