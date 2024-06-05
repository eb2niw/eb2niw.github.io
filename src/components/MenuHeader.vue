<template>
    <header :class="['headroom', {'is-sticky': isSticky}]">
        <div class="startp-nav">

            <nav class="navbar navbar-expand-md navbar-light">

                <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>


                <b-collapse class="collapse navbar-collapse mean-menu" is-nav>
                    <ul class="navbar-nav nav ml-auto">

                        <li class="nav-item">
                            <a href="/" v-scroll-to="'#home'" style="display: flex; align-items: flex-end; height: 20px;">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" v-scroll-to="'#myStory'" style="display: flex; align-items: flex-end; height: 20px;">Our Story</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" v-scroll-to="'#timeline'" style="display: flex; align-items: flex-end; height: 20px;">Our Timeline</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" v-scroll-to="'#selfPetitionUsa'" style="display: flex; align-items: flex-end; height: 20px;">Access our Experience</a>
                        </li>

                        
                    </ul>
                </b-collapse>

                <div class="others-option"></div>
            </nav>

        </div>
    </header>
</template>

<script>

export default {
    name: 'MenuHeader',
    data(){
        return {
            isSticky: false,
        }
    },
    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            that.isSticky = scrollPos >= 100;
        })
    },
}
</script>
