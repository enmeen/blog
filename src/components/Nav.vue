<template>
    <nav id='nav'>
        <div class='nav-box'>
            <ul class='ul-box'>
                <li v-for='list in lists' :class={logo:list.isfirst}>
                    <a :href="list.url" v-text='list.text'></a>
                </li>
            </ul>
        </div>
    </nav>

</template>
<script type="text/javascript">

export default {
    name: 'nav',
    data() {
        return {
            lists: [{
                text: 'DESENWORKS',
                url: 'index.html',
                isfirst: true
            }, {
                text: 'About',
                url: 'index.html'
            }, {
                text: 'Tools & Resources',
                url: 'index.html'
            }, {
                text: 'git',
                url: 'https://github.com/enmeen'
            }]
        }
    }
}
</script>
<style lang='less'>

#nav {
    width: 100%;
    background-color: #802626;
}

.nav-box {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.ul-box {
    display: table;
    font-size: 24px;
    table-layout: fixed;
    li {
        display: table-cell;
        width: 20%;
        text-align: center;
        vertical-align: middle;
        a {
            color: #fff;
        }
    }
}

.logo {
    font-family: logo;
    width: 30%;
    font-size: 36px;
    font-weight: bold;
}
</style>
