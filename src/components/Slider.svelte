<script>
	export let value;
	export let min;
	export let max;
	export let disabled = false;
</script>

<style lang="scss">
    @import '../style/theme';

    $track-color: $primary;
    $thumb-color: darken($secondary, 30%);
    $track-border-width: 0;
    $track-shadow-blur: 2px;
    $contrast: 10% !default;

    @import '../../node_modules/input-range-scss/inputrange';

    input[type='range']:not(disabled) {
        &::-webkit-slider-thumb,
        &::-moz-range-thumb,
        &::-ms-thumb,
        &::-webkit-slider-runnable-track,
        &::-ms-fill-lower,
        &::-ms-fill-upper {
            cursor: ew-resize;
        }
    }
</style>

<div>
    <input type='range' {min} {max} bind:value={value} {disabled}/>
</div>
