<template>
  <div :class="cls" @click.capture="activeCurComp">
    <slot />
    <div class="handleArea bottom-0 right-0 text-light-50">
      <div><RiDragMove2Fill />{{ $t(`comps.${item.title}`) }}</div>
      <div v-if="sortBtn.left" @click="sortLeftClick">
        <el-icon>
          <Back />
        </el-icon>
      </div>
      <div v-if="sortBtn.top" @click="sortTopClick">
        <el-icon>
          <Top />
        </el-icon>
      </div>
      <div v-if="sortBtn.btm" @click="sortBtmClick">
        <el-icon>
          <Bottom />
        </el-icon>
      </div>
      <slot name="handle" />
      <div @click="removeCurItem">
        <el-icon>
          <Delete />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Back, Bottom, Delete, Top } from '@element-plus/icons-vue'
import RiDragMove2Fill from '~icons/ri/drag-move-2-fill'
import { ProvideFormGroup } from '@/composables/designer'
import type { IFormComp } from '@/enum/form/type'

const props = defineProps<{
  item: IFormComp
}>()
const formGroup = inject(ProvideFormGroup)!

const activeCurComp = () => {
  formGroup.changeActiveWidget(props.item.key)
}

const cls = computed(() => [
  'handle-comp',
  {
    'handle-comp--active':
      formGroup.curActionWidget.value?.key === props.item.key,
  },
  {
    'inline-block':
      props.item.form?.inline?.value || formGroup.formOptions.inline.value,
  },
])

const sortBtn = reactive({
  left: false,
  top: false,
  btm: false,
})
const parentChild = computed(() => {
  const parent = formGroup.findWidgetItem(props.item.parent!)
  return parent ? parent.children! : formGroup.widgetList.value
})

/**
 * 计算当前组件需要展示的排序按钮
 */
watch(
  () => parentChild,
  () => {
    const parent = props.item.parent || null
    function setTopAndBtm(index: number, list: any[]) {
      sortBtn.left = !!parent
      sortBtn.top = index !== 0
      sortBtn.btm = index < list.length - 1
    }
    // 没有父级，说明是在el-form的根目录，直接从widgetList排序
    if (!parent) {
      const itemIndex = formGroup.widgetList.value.indexOf(props.item)
      setTopAndBtm(itemIndex, formGroup.widgetList.value)
    } else {
      // 有父级，说明是在栅格系统下
      const parentChildren = formGroup.findWidgetItem(parent).children!
      const itemIndex = parentChildren.indexOf(props.item)
      setTopAndBtm(itemIndex, parentChildren)
    }
  },
  { immediate: true, deep: true },
)

/**
 * 聚焦当前组件的父级
 *
 */
const sortLeftClick = () => {
  const parent = props.item.parent!
  if (parent) {
    formGroup.changeActiveWidget(parent)
  }
}

/**
 * 与上一个组件交换位置
 */
const sortTopClick = () => {
  const oldIndex = parentChild.value.indexOf(props.item)
  ;[parentChild.value[oldIndex], parentChild.value[oldIndex - 1]] = [
    parentChild.value[oldIndex - 1],
    parentChild.value[oldIndex],
  ]
}

/**
 * 与下一个组件交换位置
 */
const sortBtmClick = () => {
  const oldIndex = parentChild.value.indexOf(props.item)
  ;[parentChild.value[oldIndex], parentChild.value[oldIndex + 1]] = [
    parentChild.value[oldIndex + 1],
    parentChild.value[oldIndex],
  ]
}

/**
 * 移除当前组件
 */
const removeCurItem = () => {
  const oldIndex = parentChild.value.indexOf(props.item)
  parentChild.value.splice(oldIndex, 1)
}
</script>

<style>
.handle-comp {
  border: 1px dashed transparent;
  position: relative;
}
.handle-comp .handleArea {
  display: none;
}
.handle-comp.handle-comp--active {
  border-color: var(--el-color-primary) !important;
}
.handle-comp.handle-comp--active > .handleArea {
  display: flex;
}
.handle-comp .el-button {
  margin-right: 12px;
}
.handleArea {
  position: absolute;
  z-index: 1;
  font-size: 12px;
  padding: 2px 4px;
  display: none;
  align-items: center;
  justify-content: center;
  height: 24px;
}
.handleArea > div {
  margin-left: 4px;
  cursor: pointer;
  background: #409eff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  height: 100%;
}
</style>
