<script setup lang="ts">
import Grid from '../components/Grid/Grid.vue'
import GridCol from '../components/Grid/GridCol.vue'
</script>

<template>
    <h1>Colours</h1>
    <Grid>
        <GridCol span="1/7">
            <div class="color" :style="{ backgroundColor: '#ffffff'}">
                <div>White</div>
                <div class="color__value">#FFFFFF</div>
            </div>
        </GridCol>
        <GridCol span="7/13">
            <div class="color" :style="{ backgroundColor: '#000000', color: '#ffffff'}">
                <div>Black</div>
                <div class="color__value">#000000</div>
            </div>
        </GridCol>
    </Grid>
</template>

<style scoped>
.color {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 2px;
}

.color__value{
    font-weight: bold;
}
</style>
