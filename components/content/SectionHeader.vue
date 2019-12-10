<template>
    <div class="site__section">
        <div class="section__header" v-html="$md.render(header)">asdf</div>
    </div>
</template>

<script>

export default {
    props: {
        header: String
    }
}
</script>

<style>
    .section__header {
        text-align: center;
    }
    .section__header h2 {
        
    }
    .section__header p {
        margin: 10px auto;
        max-width: 800px;
    }

</style>
