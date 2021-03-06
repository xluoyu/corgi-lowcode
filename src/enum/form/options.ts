import type { IFormItemOptions } from './type'

export const FormOptions: IFormItemOptions = {
  'style.width': {
    label: '表单宽度',
    type: 'input',
    value: '',
  },
  'inline': {
    label: '行内模式',
    type: 'switch',
    value: false,
  },
  'label-width': {
    label: '标签宽度',
    type: 'input',
    value: 'auto',
  },
  'label-position': {
    label: '标签位置',
    type: 'labelPosition',
    value: 'left',
  },
  'size': {
    label: '组件大小',
    type: 'formSize',
    value: 'default',
  },
  'validate': {
    label: '开启验证',
    type: 'switch',
    value: false,
  },
}
