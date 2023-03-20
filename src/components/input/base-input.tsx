import { styledBaseInput } from './style'
export default defineComponent({
  name: 'baseInput',
  // emits已发送的事件  modelValue是默认的不可删除 可以更改（父组件的v-model===v-model:modelValue）
  emits: ['update:modelValue'],
  props: {
    // 父组件绑定的v-model
    modelValue: {
      type: String,
      default: '',
    },
  },
  components: {
    styledBaseInput
  },
  setup(props, { emit, attrs }) {
    const onInput = (event: Event) => {
      let value = (event.target as HTMLInputElement).value
      if (props.modelValue !== value) {
        emit('update:modelValue', value)
      }
    }
    return () => {
      return (
        <styled-baseInput type="text"
          value={props.modelValue}
          onInput={onInput}
          placeholder={attrs.placeholder as string}>
        </styled-baseInput>
      )
    }
  },
})
