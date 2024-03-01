import { pathExistsSync } from 'fs-extra'
import { mergeWith } from 'lodash'
import { outputFileSyncOnChange } from '../shared/fsUtils'

interface SoConfig {
  name?: string
}

export function getSoConfig(emit = false): any {
  let config: any = {}
}

export function defineConfig(conf: SoConfig) {
  return conf
}
