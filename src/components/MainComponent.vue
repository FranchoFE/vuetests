<!-- MainComponent.vue -->
<template>
  <div class="main-component">
    <MenuComponent />
    <ApplicationComponent />
  </div>
</template>

<script>
import MenuComponent from "./MenuComponent.vue";
import ApplicationComponent from "./ApplicationComponent.vue";

export default {
  components: {
    MenuComponent,
    ApplicationComponent,
  },
};
</script>

<style scoped>
.main-component {
  display: flex;
  flex-direction: column;
  height: 98vh;
}

.content {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.shortcuts-component {
  flex: 1;
  background-color: lightgreen;
}

.board-component {
  flex: 3;
  background-color: lightcoral;
}
</style>
