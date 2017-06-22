<template>
    <div id="main">

        <div class="main-banner">
            <h1>DESENWORKS</h1>
            <p>The works and workings of Desen.</p>
        </div>
        <ul class="main-article">
            <li v-for='item in lists'>
                <a :href='item.url' v-text='item.title'></a>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">

export default {
    name: 'main',
    data() {
        return {
            lists: [{
                title: 'test',
                url: 'demo'
            }, {
                title: 'test'
            }, {
                title: 'test'
            }]
        }
    }
}
</script>
<style lang="less">
@import "../less/base.css";
.ol{
	font-size: 1111px;
}
.main-banner {
    max-width: 800px;
    margin: 100px auto 50px;
    text-align: center;
    h1 {
        font-family: 'logo';
        font-size: 100px;
        font-weight: bold;
    }
    p {
        font-style: italic;
        font-size: 40px;
    }
}

.main-article {
    max-width: 1200px;
    margin: 0 auto;
    font-size: 24px;
    text-align: center;
    list-style: disc;
    a {
        color: #802626;
    }
}
</style>
