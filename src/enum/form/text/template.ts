import type { IFormItemOptions } from '../type'

export default function(options: IFormItemOptions) {
  return {
    template: `<div :style="{${options.block.value ? '' : 'display: inline-block,'}fontSize: var(--el-font-size-${options.size.value})}">${options.content.value}</div>`,
  }
}
