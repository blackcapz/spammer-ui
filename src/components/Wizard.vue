<template>
  <ElCard class="box-card" style="width: 500px">
    <div slot="header" class="clearfix">
      <span>Fill in the fields below</span>
    </div>
    <ElForm label-width="80px">
      <ElFormItem label="User">
        <ElInput placeholder="User" />
      </ElFormItem>

      <ElFormItem label="Password">
        <ElInput type="password" placeholder="Password" />
      </ElFormItem>

      <ElFormItem label="Message">
        <ElInput type="textarea" placeholder="Message" />
      </ElFormItem>

      <ElFormItem label="Strategy">
        <ElSelect value="Facebook" placeholder="Select" style="width: 100%">
          <ElOption
            label="Facebook"
            value="Facebook">
          </ElOption>
        </ElSelect>
      </ElFormItem>

      <ElFormItem>
        <ElButton type="primary">Send!</ElButton>
      </ElFormItem>
    </ElForm>    
  </ElCard>
</template>

<script>
export default {
  name: 'Wizard'
}
</script>
