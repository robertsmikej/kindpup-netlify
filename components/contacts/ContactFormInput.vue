<template>
    <fieldset>
        <p>{{ input.text }}</p>
        <input :aria-label="input.text" :name="input.short_name" :placeholder="input.placeholder" :type="input.field_type">
    </fieldset>
</template>

<script>
export default {
    props: {
        input: Object
    }
}
</script>

<style>

</style>
