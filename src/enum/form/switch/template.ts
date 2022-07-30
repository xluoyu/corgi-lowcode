import { formatArrt } from '@/utils/renderTemplate'
import type { renderWidgetCode } from '@/core'

const run: renderWidgetCode = (options, widgetItem, formOptions) => {
  const attrs = ['activeText', 'inactiveText', 'activeColor', 'inactiveColor']
  const attrsStr = attrs
    .map(attr => formatArrt(attr, options[attr]))
    .filter(Boolean)
    .join('\n')

  return {
    formData: {
      [options._key]: options.value,
    },
    template: `<el-switch
        ${formOptions ? `v-model="${formOptions.key}.${options._key} "` : ''}
        ${attrsStr}
      />`,
  }
}

export default run
