<template>
    <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
        <div class="startp-nav">

            <nav class="navbar navbar-expand navbar-light">
                <a href="/" v-scroll-to="'#myStory'">
                    <img width="40px" src="../assets/resources/myImage.png" alt="eb2 niw"/>
                </a>

                <BNavbarToggle target="navbarSupportedContent"></BNavbarToggle>

                <BCollapse id="navbarSupportedContent" class="collapse navbar-collapse mean-menu" is-nav>
                    <ul class="navbar-nav nav ml-auto">
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
                </BCollapse>
            </nav>

        </div>
    </header>
</template>


<script>
import { BNavbarToggle, BCollapse } from 'bootstrap-vue-next';

export default {
    name: 'MenuHeader',
    components: {
      BNavbarToggle,
      BCollapse
    },
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
            } else {
                that.isSticky = false;
            }
        })
    }
}
</script>
