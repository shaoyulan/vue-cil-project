<script>
export default {

}
</script>

<template>
    <div class="header">
        <h1 class="brand-txt">
            Vue
        </h1>
        <router-link to="/"  class="logout-btn">LOGOUT</router-link>
    </div>
</template>

<style scoped lang="scss">

    .logout-btn{
        position: absolute;
        top: 50%;
        right: 30px;
        padding: 5px 20px;
        background: #fff;
        color: #000;
        transform: translateY(-50%);

        text-decoration: none;

        font-weight: bold;
        color: #ed2553;
    }

    .header{
        position: relative;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ed2553;
        color: #fff;
        text-align: center;
    }

    .brand-txt{
        font-size: 24px;
        margin-right: auto;
        margin-left: 40px;
    }

</style>