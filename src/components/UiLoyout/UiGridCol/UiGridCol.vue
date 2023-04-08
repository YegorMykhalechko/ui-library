<script setup lang="ts">
import { computed } from "vue";

type SmColumns = "1" | "2" | "3" | "4";
type Columns = SmColumns | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
type WithAuto<T,> = 'auto' | T

const smSpanClass: Record<SmColumns, string> = {
  "1": "grid-col--span-1",
  "2": "grid-col--span-2",
  "3": "grid-col--span-3",
  "4": "grid-col--span-4",
};

const mdSpanClass: Record<Columns, string> = {
  "1": "grid-col--md-span-1",
  "2": "grid-col--md-span-2",
  "3": "grid-col--md-span-3",
  "4": "grid-col--md-span-4",
  "5": "grid-col--md-span-5",
  "6": "grid-col--md-span-6",
  "7": "grid-col--md-span-7",
  "8": "grid-col--md-span-8",
  "9": "grid-col--md-span-9",
  "10": "grid-col--md-span-10",
  "11": "grid-col--md-span-11",
  "12": "grid-col--md-span-12",
};

const lgSpanClass: Record<Columns, string> = {
  "1": "grid-col--lg-span-1",
  "2": "grid-col--lg-span-2",
  "3": "grid-col--lg-span-3",
  "4": "grid-col--lg-span-4",
  "5": "grid-col--lg-span-5",
  "6": "grid-col--lg-span-6",
  "7": "grid-col--lg-span-7",
  "8": "grid-col--lg-span-8",
  "9": "grid-col--lg-span-9",
  "10": "grid-col--lg-span-10",
  "11": "grid-col--lg-span-11",
  "12": "grid-col--lg-span-12",
};

interface Props {
  span?: SmColumns;
  mdSpan?: Columns;
  lgSpan?: Columns;
  start?: WithAuto<SmColumns>;
  mdStart?: WithAuto<Columns>;
  lgStart?: WithAuto<Columns>;
}
const props = withDefaults(defineProps<Props>(), {
  start: 'auto',
  mdStart: 'auto',
  lgStart: 'auto',
});

const cssClasses = computed(() => {
  const smClasses = smSpanClass[props.span || "4"];
  const mdClasses = props.mdSpan ? mdSpanClass[props.mdSpan] : undefined;
  const lgClasses = props.lgSpan ? lgSpanClass[props.lgSpan] : undefined;

  const startClass =
    (props.start || props.mdStart || props.lgStart) && "grid-col--start";

  return [smClasses, mdClasses, lgClasses, startClass];
});
</script>

<template>
  <div :class="cssClasses" class="grid-col--start">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-col--span-1 {
  grid-column-end: span 1;
}
.grid-col--span-2 {
  grid-column-end: span 2;
}
.grid-col--span-3 {
  grid-column-end: span 3;
}
.grid-col--span-4 {
  grid-column-end: span 4;
}

.grid-col--start {
  grid-column-start: v-bind("start");
}

@media only screen and (min-width: 769px) {
  .grid-col--md-span-1 {
    grid-column-end: span 1;
  }
  .grid-col--md-span-2 {
    grid-column-end: span 2;
  }
  .grid-col--md-span-3 {
    grid-column-end: span 3;
  }
  .grid-col--md-span-4 {
    grid-column-end: span 4;
  }
  .grid-col--md-span-5 {
    grid-column-end: span 5;
  }
  .grid-col--md-span-6 {
    grid-column-end: span 6;
  }
  .grid-col--md-span-7 {
    grid-column-end: span 7;
  }
  .grid-col--md-span-8 {
    grid-column-end: span 8;
  }
  .grid-col--md-span-9 {
    grid-column-end: span 9;
  }
  .grid-col--md-span-10 {
    grid-column-end: span 10;
  }
  .grid-col--md-span-11 {
    grid-column-end: span 11;
  }
  .grid-col--md-span-12 {
    grid-column-end: span 12;
  }

  .grid-col--start {
    grid-column-start: v-bind("mdStart");
  }
}

@media only screen and (min-width: 1025px) {
  .grid-col--lg-span-1 {
    grid-column-end: span 1;
  }
  .grid-col--lg-span-2 {
    grid-column-end: span 2;
  }
  .grid-col--lg-span-3 {
    grid-column-end: span 3;
  }
  .grid-col--md-span-4 {
    grid-column-end: span 4;
  }
  .grid-col--md-span-5 {
    grid-column-end: span 5;
  }
  .grid-col--lg-span-6 {
    grid-column-end: span 6;
  }
  .grid-col--lg-span-7 {
    grid-column-end: span 7;
  }
  .grid-col--lg-span-8 {
    grid-column-end: span 8;
  }
  .grid-col--lg-span-9 {
    grid-column-end: span 9;
  }
  .grid-col--lg-span-10 {
    grid-column-end: span 10;
  }
  .grid-col--lg-span-11 {
    grid-column-end: span 11;
  }
  .grid-col--lg-span-12 {
    grid-column-end: span 12;
  }

  .grid-col--start {
    grid-column-start: v-bind("lgStart");
  }
}
</style>
