<script setup lang="ts">
import { type } from "os";
import { computed } from "vue";

type SmColumns = "1" | "2" | "3" | "4";
type Columns =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

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
}
const props = defineProps<Props>();

const cssClasses = computed(() => {
  const smClasses = smSpanClass[props.span || "4"];
  const mdClasses = props.mdSpan ? mdSpanClass[props.mdSpan] : undefined;
  const lgClasses = props.lgSpan ? lgSpanClass[props.lgSpan] : undefined;

  return [smClasses, mdClasses, lgClasses];
});
</script>

<template>
  <div :class="cssClasses">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-col--span-1 {
  grid-column: span 1;
}
.grid-col--span-2 {
  grid-column: span 2;
}
.grid-col--span-3 {
  grid-column: span 3;
}
.grid-col--span-4 {
  grid-column: span 4;
}

@media only screen and (min-width: 769px) {
  .grid-col--md-span-1 {
    grid-column: span 1;
  }
  .grid-col--md-span-2 {
    grid-column: span 2;
  }
  .grid-col--md-span-3 {
    grid-column: span 3;
  }
  .grid-col--md-span-4 {
    grid-column: span 4;
  }
  .grid-col--md-span-5 {
    grid-column: span 5;
  }
  .grid-col--md-span-6 {
    grid-column: span 6;
  }
  .grid-col--md-span-7 {
    grid-column: span 7;
  }
  .grid-col--md-span-8 {
    grid-column: span 8;
  }
  .grid-col--md-span-9 {
    grid-column: span 9;
  }
  .grid-col--md-span-10 {
    grid-column: span 10;
  }
  .grid-col--md-span-11 {
    grid-column: span 11;
  }
  .grid-col--md-span-12 {
    grid-column: span 12;
  }
}

@media only screen and (min-width: 1025px) {
  .grid-col--lg-span-1 {
    grid-column: span 1;
  }
  .grid-col--lg-span-2 {
    grid-column: span 2;
  }
  .grid-col--lg-span-3 {
    grid-column: span 3;
  }
  .grid-col--md-span-4 {
    grid-column: span 4;
  }
  .grid-col--md-span-5 {
    grid-column: span 5;
  }
  .grid-col--lg-span-6 {
    grid-column: span 6;
  }
  .grid-col--lg-span-7 {
    grid-column: span 7;
  }
  .grid-col--lg-span-8 {
    grid-column: span 8;
  }
  .grid-col--lg-span-9 {
    grid-column: span 9;
  }
  .grid-col--lg-span-10 {
    grid-column: span 10;
  }
  .grid-col--lg-span-11 {
    grid-column: span 11;
  }
  .grid-col--lg-span-12 {
    grid-column: span 12;
  }
}
</style>
