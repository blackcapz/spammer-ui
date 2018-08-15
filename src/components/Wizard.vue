<template>
  <ElCard class="box-card" style="width: 500px">
    <div slot="header" class="clearfix">
      <span>Fill in the fields below</span>
    </div>
    <ElForm
      ref="form"
      label-position="top"
      :model="form"
      label-width="80px">
      <ElFormItem
        :rules="[
          { required: true, message: 'Please fill this field', trigger: 'blur' }
        ]"
        label="User">
        <ElInput v-model="form.user" placeholder="User" />
      </ElFormItem>

      <ElFormItem
        :rules="[
          { required: true, message: 'Please fill this field', trigger: 'blur' }
        ]"
        label="Password">
        <ElInput v-model="form.password" type="password" placeholder="Password" auto-complete="off" />
      </ElFormItem>

      <ElFormItem
        :rules="[
          { required: true, message: 'Please fill this field', trigger: 'blur' }
        ]"
        label="Message">
        <ElInput v-model="form.text" type="textarea" placeholder="Message" />
      </ElFormItem>

      <ElFormItem
        :rules="[
          { required: true, message: 'Please fill this field', trigger: 'blur' }
        ]"
        label="Strategy">
        <ElSelect v-model="form.strategy" placeholder="Select" style="width: 100%">
          <ElOption
            label="Facebook"
            value="Facebook">
          </ElOption>
        </ElSelect>
      </ElFormItem>

      <ElFormItem>
        <ElButton
          @click="onSubmit"
          type="primary">Send!</ElButton>
      </ElFormItem>
    </ElForm>    
  </ElCard>
</template>

<script>
import api from '../services/api'

export default {
  name: 'Wizard',
  data: () => ({
    form: {
      user: '',
      password: '',
      text: '',
      strategy: 'Facebook'
    }
  }),
  methods: {
    onSubmit () {
      this.$refs['form'].validate(async (valid) => {
        if (!valid) {
          const message = {
            message: 'Please fill all fields correctly',
            type: 'warning'
          }  
          this.$message(message)
          return
        }

        try {
          const { data: { status, body } } = await api.sendSpam(this.form)

          if (status !== 200) return
          const message = {
            message: body,
            type: 'success'
          }
          this.$message(message)
        } catch (error) {
          this.$message.error('Oops, some error happen :(')
        }
      })
    }
  }
}
</script>
