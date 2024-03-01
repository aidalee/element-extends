/*
 * @Author: please
 * @Date: 2024-03-01 13:57:44
 * @LastEditors: please
 * @LastEditTime: 2024-03-01 14:00:32
 * @Description: 请填写简介
 */
import { resolve } from 'path'

export const CWD = process.cwd()

export const SRC_DIR = resolve(CWD, '../so-ui/components')
export const ES_DIR = resolve(CWD, '../so-ui/es')
export const LIB_DIR = resolve(CWD, '../so-ui/lib')
export const UMD_DIR = resolve(CWD, '../so-ui/umd')
export const TYPES_DIR = resolve(CWD, '../so-ui/types')
export const UI_PACKAGE_JSON = resolve(CWD, '../so-ui/package.json')
export const TESTS_DIR_NAME = 'test'
export const STYLE_DIR_NAME = 'style'
export const SCRIPTS_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js']
export const PUBLIC_DIR_INDEXES = [
  'index.vue',
  'index.tsx',
  'index.ts',
  'index.jsx',
  'index.js'
]
