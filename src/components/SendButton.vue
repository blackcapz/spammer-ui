<template>
  <button
    @click="$emit('onClick', true)"
    class="sendButton"
    type="click">SPAM!</button>
</template>

<style lang="scss" scoped>
.sendButton {
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 200px;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  background-color: rgba(231, 76, 60, 1.0);
  color: #fff;
  border-radius: 50%;
}
</style>
