<script>
export default {
    props: {
        html: {
            type: String,
            default: ''
        }
    },
    // computed: {
    //     code: function () {
    //         return this.$store.state.sitewide.site_code;
    //     },
    //     dynamicComponent() {
    //         return {
    //             template: this.html,
    //             props: [
    //                 /* define props as needed */
    //             ]
    //         }
    //     }
    // },
    render(h) {
        return h({
            template: `<div>${this.$store.state.sitewide.site_code.code_block}</div>`
        });
    }

}
</script>