<script>
	export let value;
	export let min;
	export let max;
	export let disabled = false;

	function mousedown() {
	    if (value === 0) {
	        value = 1;
	    }
	}
</script>

<style lang="scss">
    @import '../style/theme';

    $track-color: $primary;
    $thumb-color: darken($secondary, 30%);
    $track-border-width: 0;
    $track-shadow-blur: 2px;
    $contrast: 10% !default;

    @import '../../node_modules/input-range-scss/inputrange';

    input[type='range']:not([disabled]) {
        &::-webkit-slider-thumb {
            cursor: ew-resize;
        }
        &::-moz-range-thumb {
            cursor: ew-resize;
        }
        &::-ms-thumb {
            cursor: ew-resize;
        }
        &::-webkit-slider-runnable-track {
            cursor: ew-resize;
        }
        &::-ms-fill-lower {
            cursor: ew-resize;
        }
        &::-ms-fill-upper  {
            cursor: ew-resize;
        }
    }

    input[type='range'].empty {
        opacity: .5;
        &::-webkit-slider-thumb {
            opacity: 0 !important;
        }
        &::-moz-range-thumb {
            opacity: 0 !important;
        }
        &::-ms-thumb {
            opacity: 0 !important;
        }
    }
</style>

<div>
    <input type='range' {min} {max} bind:value={value} {disabled} class:empty={value === 0} on:mousedown={mousedown}/>
</div>
