<!-- ApplicationComponent.vue -->
<template>
  <div class="application-component" style="background-color: yellow">
    <ShortcutsComponent />
    <BoardComponent />
  </div>
</template>

<script>
import ShortcutsComponent from "./ShortcutsComponent.vue";
import BoardComponent from "./BoardComponent.vue";

export default {
  components: {
    ShortcutsComponent,
    BoardComponent,
  },
};
</script>

<style scoped>
.application-component {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.shortcuts-component {
  flex: 1;
  background-color: lightgreen;
}

.board-component {
  flex: 5;
  background-color: lightcoral;
}
</style>
