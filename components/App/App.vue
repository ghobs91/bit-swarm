<template>
    <div id="preloaders" v-if="loader">
        <img src="assets/img/preloader.gif">
        <div>BitSwarm loading</div>
    </div>
    <div class="main" v-else>
        <headline></headline>
        <panel @upload="onUpload" @download="onDownload" @nSuccess="nSuccess" @nWarning="nWarning"></panel>
        <speed></speed>
        <div class="blocks">
            <download :down="down"></download>
        </div>
        <notice :notification="notification"></notice>
        <footline></footline>
    </div>
</template>

<script>
import headline from '../Header/Header.vue'
import panel from '../Panel/Panel.vue'
import speed from '../Speed/Speed.vue'
import upload from '../Upload/Upload.vue'
import download from '../Download/Download.vue'
import notice from '../Notice/Notice.vue'
import footline from '../Footer/Footer.vue'
import axios from 'axios';

export default {
    
    data() {
        return {
            loader: true,
            up: {},
            down: {},
            notification: {
                message: '',
                warning: false,
                success: false
            },
        }
    },
    components: {
        headline,
        panel,
        speed,
        upload,
        download,
        notice,
        footline
    },
    mounted: function () {
        axios.get("http://localhost:3000/api/torrentsearch", { params: { query: 'the simpsons' } })
        .then(response => {
            this.BLOG = response.data;
            console.log(this.BLOG)
        })
        .catch(error => {
            alert(error)
        })
        this.loader = false
    },
    methods: {
        onUpload: function(data) {
            this.up = data
        },
        onDownload: function(data) {
            this.down = data
        },
        nSuccess: function(text) {
            this.notification.message = text
            this.notification.success = true
        },
        nWarning: function(text) {
            this.notification.message = text
            this.notification.warning = true
        }
    }
}
</script>
