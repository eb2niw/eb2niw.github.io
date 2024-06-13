<template>
    <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
        <div class="startp-nav">

            <nav class="navbar navbar-expand-md navbar-light">
                <a href="/" v-scroll-to="'#home'">
                    <img width="40px" src="../assets/resources/myImage.png" alt="eb2 niw"/>
                </a>

                <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                <b-collapse class="collapse navbar-collapse mean-menu" is-nav>
                    <ul class="navbar-nav nav ml-auto">
                        <li class="nav-item">
                            <a href="/" v-scroll-to="'#home'" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" v-scroll-to="'#myStory'" class="nav-link">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" v-scroll-to="'#timeline'" class="nav-link">Timeline</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" v-scroll-to="'#selfPetitionUsa'" class="nav-link">🇺🇸 Apply Our Insights</a>
                        </li>
                    </ul>
                </b-collapse>
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
            // eslint-disable-next-line no-console
            if(scrollPos >= 100){
                that.isSticky = true;
                console.log("isSticky: " + this.isSticky)
            } else {
                that.isSticky = false;
                console.log("isSticky: " + this.isSticky)
            }
        })
    }
}
</script>
