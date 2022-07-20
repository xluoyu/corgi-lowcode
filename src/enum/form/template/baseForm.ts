import type { ITemplateOptions } from '../type'

const data: ITemplateOptions = {
  title: '基础模板',
  type: 'template',
  key: 'base',
  photo: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t1.png',
  uuId: 8,
  formOptions: {
    'style.width': { label: '表单宽度', type: 'input', value: 'auto' },
    'inline': { label: '行内模式', type: 'switch', value: false },
    'label-width': { label: '标签宽度', type: 'input', value: 'auto' },
    'label-position': {
      label: '标签位置',
      type: 'labelPosition',
      value: 'left',
    },
    'size': { label: '组件大小', type: 'formSize', value: 'default' },
    'validate': { label: '开启验证', type: 'switch', value: false },
  },
  widgetList: [
    {
      title: 'text',
      type: 'text',
      key: 'text_0',
      component: 'cg-text',
      noForm: true,
      form: {
        content: { label: '内容', type: 'input', value: '表单' },
        size: { label: '字体大小', type: 'textSizeSelect', value: 'large' },
        block: { label: '块级', type: 'switch', value: true },
      },
    },
    {
      title: 'divider',
      type: 'divider',
      key: 'divider_1',
      component: 'cg-divider',
      noForm: true,
      form: { content: { label: '分割线文案', type: 'input', value: '' } },
    },
    {
      title: 'input',
      type: 'input',
      key: 'input_2',
      component: 'cg-input',
      form: {
        _key: { label: '绑定key', type: 'input', value: 'name' },
        value: { label: '默认值', type: 'input', value: '' },
        label: { label: '标签文本', type: 'input', value: '姓名' },
        type: { label: '输入框类型', type: 'inputTypeSelect', value: 'text' },
        placeholder: { label: '占位内容', type: 'input', value: '请输入内容' },
        clearable: { label: '可清空', type: 'switch', value: false },
        required: { label: '必填', type: 'switch', value: false },
        validate: { label: '校验规则', type: 'validateSelect', value: '' },
        maxlength: { label: '最大长度', type: 'input', value: '' },
        minlength: { label: '最小长度', type: 'input', value: '' },
        showWordLimit: { label: '显示字数限制', type: 'switch', value: false },
      },
    },
    {
      title: 'radio',
      type: 'radio',
      key: 'radio_3',
      component: 'cg-radio',
      form: {
        _key: { label: '绑定key', type: 'input', value: 'sex' },
        value: { label: '默认值', type: 'input', value: '1' },
        label: { label: '标签文本', type: 'input', value: '性别' },
        options: {
          label: '选项配置',
          type: 'selectOptions',
          value: [
            { label: '男', value: '1' },
            { label: '女', value: '2' },
          ],
        },
      },
    },
    {
      title: 'input',
      type: 'input',
      key: 'input_4',
      component: 'cg-input',
      form: {
        _key: { label: '绑定key', type: 'input', value: 'age' },
        value: { label: '默认值', type: 'input', value: '' },
        label: { label: '标签文本', type: 'input', value: '年龄' },
        type: { label: '输入框类型', type: 'inputTypeSelect', value: 'number' },
        placeholder: { label: '占位内容', type: 'input', value: '请输入内容' },
        clearable: { label: '可清空', type: 'switch', value: false },
        required: { label: '必填', type: 'switch', value: false },
        validate: { label: '校验规则', type: 'validateSelect', value: '' },
        maxlength: { label: '最大长度', type: 'input', value: '' },
        minlength: { label: '最小长度', type: 'input', value: '' },
        showWordLimit: { label: '显示字数限制', type: 'switch', value: false },
      },
    },
    {
      title: 'textarea',
      type: 'textarea',
      key: 'textarea_5',
      component: 'cg-textarea',
      form: {
        _key: { label: '绑定key', type: 'input', value: 'mark' },
        value: { label: '默认值', type: 'input', value: '' },
        label: { label: '标签文本', type: 'input', value: '个性宣言' },
        placeholder: { label: '占位内容', type: 'input', value: '请输入内容' },
        clearable: { label: '可清空', type: 'switch', value: false },
        required: { label: '必填', type: 'switch', value: false },
        maxlength: { label: '最大长度', type: 'input', value: '99' },
        minlength: { label: '最小长度', type: 'input', value: '' },
        showWordLimit: { label: '显示字数限制', type: 'switch', value: true },
        rows: { label: '行数', type: 'input', value: '3' },
        autosize: {
          label: '自动调整大小',
          type: 'switch',
          value: false,
          tooltip: '如需设置范围，请传入对象，设置 minRows 和 maxRows',
        },
        resize: { label: '用户控制缩放', type: 'resizeSelect', value: 'both' },
      },
    },
    {
      title: 'color',
      type: 'color',
      key: 'color_6',
      component: 'cg-color',
      form: {
        _key: { label: '绑定key', type: 'input', value: 'color' },
        value: { label: '默认值', type: 'color', value: '#409EFF' },
        label: { label: '标签文本', type: 'input', value: '主题色' },
        showAlpha: { label: '支持透明度', type: 'switch', value: false },
      },
    },
    {
      title: 'button',
      type: 'button',
      key: 'button_7',
      component: 'cg-button',
      noForm: true,
      form: {
        type: { label: '按钮类型', type: 'buttonType', value: 'primary' },
        content: { label: '内容', type: 'input', value: '提交' },
        size: { label: '尺寸', type: 'formSize', value: 'default' },
        inline: {
          label: '内联',
          type: 'switch',
          value: true,
        },
      },
    },
    {
      title: 'button',
      type: 'button',
      key: 'button_8',
      component: 'cg-button',
      noForm: true,
      form: {
        type: { label: '按钮类型', type: 'buttonType', value: 'default' },
        content: { label: '内容', type: 'input', value: '取消' },
        size: { label: '尺寸', type: 'formSize', value: 'default' },
        inline: {
          label: '内联',
          type: 'switch',
          value: true,
        },
      },
    },
  ],
}

export default data
