<template>
  <div class="github-graph">
    <svg :width="width" :height="height">
      <rect
        v-for="(item, index) in data"
        :key="index"
        :x="getX(index)"
        :y="getY(index)"
        :width="boxSize"
        :height="boxSize"
        :fill="getColor(item)"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
  },
  setup(props) {
    const boxSize = 10;
    const gap = 2;
    const rows = 7;
    const columns = 52;

    const width = computed(() => columns * (boxSize + gap));
    const height = computed(() => rows * (boxSize + gap));

    function getX(index: number): number {
      const col = Math.floor(index / rows);
      return col * (boxSize + gap);
    }

    function getY(index: number): number {
      const row = index % rows;
      return row * (boxSize + gap);
    }

    function getColor(value: number): string {
      if (value === 0) return '#ebedf0';
      if (value < 5) return '#9be9a8';
      if (value < 10) return '#40c463';
      if (value < 20) return '#30a14e';
      return '#216e39';
    }

    return {
      boxSize,
      gap,
      rows,
      columns,
      width,
      height,
      getX,
      getY,
      getColor,
    };
  },
});
</script>

<style scoped>
.github-graph {
  margin: 20px;
}
</style>
