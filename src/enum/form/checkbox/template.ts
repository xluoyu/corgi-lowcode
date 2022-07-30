// import { formatArrt } from '@/utils/renderTemplate'

import type { renderWidgetCode } from '@/core'

const run: renderWidgetCode = (options, widgetItem, formOptions) => {
  const privateVar: Record<string, any> = {}
  let optionsStr = ''
  if (options.options.length >= 3) {
    optionsStr = `<el-checkbox
          v-for="item in ${options._key}SelectList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />`
    privateVar[`${options._key}CheckboxList`] = options.options
  } else {
    optionsStr = options.options.reduce(
      (pre: string, cur: { value: any; label: any }) => {
        return `${pre}<el-checkbox :value="${cur.value}" label="${cur.label}"/>`
      },
      '',
    )
  }

  return {
    formData: {
      [options._key]: options.value.split(','),
    },
    template: `<el-checkbox-group
    ${formOptions ? `v-model="${formOptions.key}.${options._key} "` : ''}
      >
        ${optionsStr}
      </el-checkbox-group>`,
    privateVar,
  }
}

export default run
