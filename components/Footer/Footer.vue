<template lang="html">
    <div class="footer">
        <div class="right">
            <a href="https://webtorrent.io/" target="_blank">
                <img src="https://webtorrent.io/img/webtorrent-small.png">
            </a>
            <a href="https://vuejs.org/" target="_blank"><img src="https://vuejs.org/images/logo.png"></a>
        </div>
    </div>
</template>

<script>
    import { bus, client } from '../../js/bus.js'
    import myLocal from '../../js/translation.js'
    
    export default{
        i18n: myLocal,
        methods: {
            switchLang: function(lang) {
                if (lang in this.$i18n.messages) {
                    this.$i18n.locale = lang
                }
            }
        }
    }
</script>
