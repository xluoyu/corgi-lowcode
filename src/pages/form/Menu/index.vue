<template>
  <el-aside class="h-full w-1/6 max-w-300px min-w-246px bg-$theme-bg pr-2">
    <el-tabs tab-position="left" class="h-full aside-tabs">
      <el-tab-pane>
        <template #label>
          <GgComponents />
        </template>
        <h3 class="text-base py-2 text-$el-color-primary">
          {{ $t('page.components') }}
        </h3>
        <el-scrollbar>
          <el-collapse v-model="actionCollapse">
            <el-collapse-item
              v-for="item in compList"
              :key="item.title"
              :title="$t('page.' + item.title)"
              :name="item.title"
            >
              <draggable
                :list="item.children"
                item-key="type"
                :sort="false"
                :clone="cloneFn"
                :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                class="flex justify-between flex-wrap"
              >
                <template #item="{ element }">
                  <div
                    class="cursor-pointer w-[48%] mb-3 flex justify-start items-center border border-$el-border-color py-1 px-2 rounded-md hover:(border-$el-color-primary text-$el-color-primary)"
                  >
                    <component
                      :is="element.icon"
                      class="mr-2 text-$el-color-primary"
                    />
                    {{ $t(`comps.${element.title}`) }}
                  </div>
                </template>
              </draggable>
            </el-collapse-item>
          </el-collapse>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane lazy>
        <template #label>
          <GgTemplate />
        </template>
        <h3 class="text-base py-2 text-$el-color-primary">
          {{ $t('page.templates') }}
        </h3>
        <el-scrollbar>
          <div
            v-for="item in templateList"
            :key="item.key"
            class="cursor-pointer mb-3 text-center border border-$el-border-color py-1 px-2 rounded-md hover:(border-$el-color-primary text-$el-color-primary)"
            @click="renderTemplate(item)"
          >
            <el-popover
              placement="right"
              width="600px"
              :offset="20"
              :show-after="500"
            >
              <template #reference>
                <div>
                  <img
                    :src="item.photo"
                    alt=""
                    class="object-cover max-h-160px mx-auto"
                  >
                  {{ item.title }}
                </div>
              </template>
              <img :src="item.photo" alt="" class="mx-auto">
            </el-popover>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane lazy>
        <template #label>
          <CodiconListTree />
        </template>
        <h3 class="text-base py-2 text-$el-color-primary">
          {{ $t('page.tree') }}
        </h3>
        <el-scrollbar>
          <el-tree
            :data="treeData"
            default-expand-all
            class="node-tree"
            :props="treeDefaultProps"
            @node-click="handleNodeClick"
          />
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable'
import { cloneDeep } from 'lodash'
import { GetCompList } from '@/enum/form'
import type { IFormComp, ITemplateOptions } from '@/enum/form/type'
import { ProvideFormGroup, addNewWidget, uuId } from '@/composables/designer'
import { templateList } from '@/composables/template'
import GgComponents from '~icons/gg/components'
import GgTemplate from '~icons/gg/template'
import CodiconListTree from '~icons/codicon/list-tree'
const compList = GetCompList()
const actionCollapse = ref(compList.slice(0, 2).map(e => e.title))

const formGroup = inject(ProvideFormGroup)!

/**
 * 对选中的组件进行拷贝
 */
const cloneFn = (item: any) => {
  const newObj = addNewWidget(item)
  formGroup.curCloneWidgetKey.value = newObj.key
  return newObj
}

const renderTemplate = (item: ITemplateOptions) => {
  ElMessageBox.confirm(`是否使用${item.title}替换当前配置?`)
    .then(() => {
      Object.keys(item.formOptions).forEach((key) => {
        formGroup.updateFormOptions({ key, value: item.formOptions[key].value })
      })
      formGroup.widgetList.value = cloneDeep(item.widgetList)
      uuId.value = item.uuId
    })
    .catch(() => {})
}

const { widgetList: treeData } = formGroup
const treeDefaultProps = {
  label: (data: IFormComp) =>
    (data.form.label ? `${data.form.label.value} - ` : '') + data.type,
  children: 'children',
  class: (data: IFormComp) =>
    formGroup.activeWidgetKey.value === data.key ? 'text-$el-color-primary' : '',
}
const handleNodeClick = (data: IFormComp) => {
  formGroup.changeActiveWidget(data.key)
}
</script>

<style>
.el-collapse-item__content {
  padding-bottom: 0;
}
.node-tree .el-tree-node {
  position: relative;
  padding-left: 12px;
}
.node-tree .el-tree-node__content {
  padding-left: 5px !important;
}
.node-tree .el-tree-node__expand-icon.is-leaf {
  display: none;
}
.node-tree .el-tree-node__expand-icon {
  margin-left: -3px;
  padding: 6px 6px 6px 0;
  font-size: 16px;
}
.node-tree .el-tree-node::before {
  content: '';
  border-left: 1px dashed #4386c6;
  bottom: 0px;
  height: 100%;
  top: -6px;
  width: 1px;
  left: 0px;
  position: absolute;
  right: auto;
}
.node-tree .el-tree-node::after {
  content: '';
  border-top: 1px dashed #4386c6;
  height: 20px;
  top: 12px;
  width: 16px;
  left: -4px;
  position: absolute;
  right: auto;
}
.aside-tabs .el-tabs__content,
.aside-tabs .el-tab-pane {
  height: 100%;
}
.aside-tabs .el-tab-pane .el-scrollbar {
  height: calc(100% - 40px);
}
</style>
