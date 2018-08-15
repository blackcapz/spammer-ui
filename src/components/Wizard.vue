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

      <!-- <ElFormItem> -->
      <!-- </ElFormItem> -->
      <ElFormItem
        label="Group Ids">
        <ElTag
          v-for="(groupId, index) in form.groups"
          :key="index"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{ groupId }}
        </ElTag>
        <ElInput
          class="input-new-tag"
          v-if="inputVisible"
          v-model="form.groupId"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="addNewGroupId"
          @blur="addNewGroupId">
        </ElInput>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput">+ New group id</el-button>
      </ElFormItem>

      <ElFormItem>
        <ElButton
          :disabled="isLoading"
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
      strategy: 'Facebook',
      groupId: '',
      groups: []
    },
    inputVisible: false,
    isLoading: false,
  }),
  methods: {
    addNewGroupId () {
      if (!this.form.groupId) return
      this.form.groups.push(this.form.groupId)
      this.form.groupId = ''
      this.form.groups = [...new Set(this.form.groups)]
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleClose(tag) {
      this.form.groups.splice(this.form.groups.indexOf(tag), 1)
    },
    onSubmit () {
      this.isLoading = true
      this.$refs['form'].validate(async (valid) => {
        if (!valid) {
          const message = {
            message: 'Please fill all fields correctly',
            type: 'warning'
          }  
          this.$message(message)
          this.isLoading = false
          return
        }

        try {
          const { data: { status, body } } = await api.sendSpam(this.form)

          if (status !== 200) {
            this.isLoading = false
            return
          }

          const message = {
            message: body,
            type: 'success'
          }
          this.$message(message)
          this.isLoading = false
        } catch (error) {
          this.$message.error('Oops, some error happen :(')
          this.isLoading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
