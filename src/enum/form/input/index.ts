import type { IFormComp } from '../type'
import IconoirInputField from '~icons/iconoir/input-field'

const data: IFormComp = {
  title: 'input',
  type: 'input',
  key: '',
  icon: IconoirInputField,
  component: 'cg-input',
  form: {
    _key: {
      label: '绑定key',
      type: 'input',
      value: '',
    },
    value: {
      label: '默认值',
      type: 'input',
      value: '',
    },
    label: {
      label: '标签文本',
      type: 'input',
      value: '输入框',
    },
    type: {
      label: '输入框类型',
      type: 'inputTypeSelect',
      value: 'text',
    },
    placeholder: {
      label: '占位内容',
      type: 'input',
      value: '请输入内容',
    },
    clearable: {
      label: '可清空',
      type: 'switch',
      value: false,
    },
    required: {
      label: '必填',
      type: 'switch',
      value: false,
    },
    validate: {
      label: '校验规则',
      type: 'validateSelect',
      value: '',
    },
    maxlength: {
      label: '最大长度',
      type: 'input',
      value: '',
    },
    minlength: {
      label: '最小长度',
      type: 'input',
      value: '',
    },
    showWordLimit: {
      label: '显示字数限制',
      type: 'switch',
      value: false,
    },
  },
}

export default data
