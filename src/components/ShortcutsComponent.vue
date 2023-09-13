<!-- ShortcutsComponent.vue -->
<template>
  <div class="shortcuts-component" style="background-color: lightgreen">
    <h1>Shortcuts Component</h1>
    <SimpleShortcutComponent imageName="list-ol.png" title="Clasificación" />
    <SimpleShortcutComponent imageName="list-ol.png" title="Otra cosa" />
  </div>
</template>

<script>
import SimpleShortcutComponent from "./SimpleShortcutComponent.vue";

export default {
  components: {
    SimpleShortcutComponent,
  },
};
</script>
