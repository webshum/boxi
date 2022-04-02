<template>
    <router-view/>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --akcent: #f73a4a;
    }

    body {
        font: 300 14px/1.2 'Open Sans', sans-serif;
        background: #f8f8f8;
    }

    .start-preloader {
        position: relative;
        z-index: 99;

        &:before {
            content: '';
            display: block;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 99;
            background: rgba(0,0,0,1);
            animation: fade 0.6s ease-in-out both;
        }
    }

    .preloader {
        position: relative;
        .fade-right {
            animation: fade-right 0.6s ease-in-out both;
        }
        .fade-top {
            animation: fade-top 0.6s ease-in-out both;
        }
    }

    @keyframes fade {
        0% {opacity: 1;}
        100% {opacity: 0; visibility: hidden;}
    }

    @keyframes fade-right {
        0% {
            transform: translateX(0);
            opacity: 0;
        }

        100% {
            transform: translateX(100px);
            opacity: 1;
        }
    }

    @keyframes fade-top {
        0% {
            transform: translateY(-50px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    a {text-decoration: none;}  
    a:hover {color: var(--akcent);}

    img {
        max-width: 100%;
        height: auto;
    }

    .btn {
        background: var(--akcent);
        padding: 12px 30px;
        display: inline-block;
        border-radius: 30px;
        color: #fff;
        text-align: center;
        transition: all 0.3s;
    }
    .btn:hover {
        background: #f6081d;
        color: #fff;
    }
    .btn svg {
        width: 18px;
        height: 18px;
        fill: #fff;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    }
    .btn span {
        display: inline-block;
        vertical-align: middle;
    }

    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .box .inner {
        max-width: 1024px;
        width: 100%;
        margin: auto;
        border: 5px solid #ededed;
        box-shadow: 0 7px 15px 0 rgba(0,0,0,.05);
    }
    .box .head {
        padding: 15px 20px;
        font-weight: 300;
        font-size: 16px;
        color: #363636;
        border-bottom: 1px solid #dddddd;
    }
    .box .body {padding: 15px 20px;}
    .box h1 {
        font-weight: 500;
        font-size: 20px;
        color: #373535;
    }

    .cards {margin-top: 10px;}
    .card-item {
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid #ebebeb;
        cursor: pointer;
        transition: all 0.3s;
    }
    .card-item:hover {border-color: var(--akcent);}
    .card-item .image {display: flex;}
    .card-item .name {
        padding: 15px 20px;
        color: #000;
    }

    .box .foot {
        border-top: 1px solid #dddddd;
        padding: 15px 20px;
        display: flex;
        justify-content: flex-end;
    }

    .back {
        width: 43px;
        height: 43px;
        display: inline-block;
        border: 1px solid #dddddd;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        svg {
            width: 18px;
            height: 18px;
            fill: #897f7f;
        }
    }

    @media screen and (max-width: 1200px) {
        .box .inner {
            max-width: 100%;
            width: 100%;
            height: 100%;
            border: none;
            box-shadow: none;
            display: flex;
            flex-direction: column;
        }
        .box .foot {margin-top: auto;}

        .order .inner > div {
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        aside {
            padding: 15px 19px !important;
            width: 100% !important;
            order: -1;
        }
        aside .manager .avatar {
            width: 40px !important;
            min-width: 40px !important;
            height: 40px !important;
        }
        aside .manager .avatar img {
            width: 40px !important;
            height: 40px !important;
        }
        aside .manager .avatar:after {
            right: -3px !important;
        }
        aside .manager h3 {font-size: 14px !important;}
    }

    @media screen and (max-width: 700px) {
        .home {
            background-position: center !important;
            background-size: cover !important;
        }
        .home .content {
            width: 100% !important;
            border-left: none !important;
            justify-content: center;
            text-align: center;
        }
        .home h1:before {
            left: 50% !important;
            transform: translateX(-50%);
        }

        .links-list {
            display: block !important;
            margin-right: 0 !important;
            margin-left: 0 !important;
        }
        .links-list li {
            width: 100% !important;
            padding: 0 0 !important;
        }

        .products .cards {
            flex-wrap: wrap;
            margin-left: -10px !important;
            margin-right: -10px !important;
        }
        .products .card-item {
            width: 46% !important;
            margin: 2% !important;
        }
    }
</style>
