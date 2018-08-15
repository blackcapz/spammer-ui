<template>
  <div
    id="app"
    class="container">
    
    <transition name="fade">
      <SendButton
        @onClick="showSpamButton = !showSpamButton"
        v-if="showSpamButton" />
    </transition>
    
    <transition name="fade">
      <Wizard v-if="!showSpamButton"/>
    </transition>
  </div>
</template>

<script>
import api from './services/api'
import SendButton from './components/SendButton'
import Wizard from './components/Wizard'

export default {
  name: 'App',
  components: {
    SendButton,
    Wizard
  },
  data: () => ({
    showSpamButton: true
  }),
  async mounted () {
    try {
      console.log(await api.checkStatus())
    } catch (error) {
      console.log('err', error)
    }
  }
}
</script>

<style lang="scss">
* { margin: 0; padding: 0; box-sizing: border-box; outline: none; }

html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter, .fade-leave-to {
  transition: all ease-in .1s;
  opacity: 0;
}
</style>

