<template>
    <div id="nav" class="flex flex-j-c flex-a-c">
        <div class="flex">
            <ul class="flex flex-a-c flex-j-sb gray">
                <li v-for="(item, index) in navList" :key="index" :title="item.msg"
                    :class="{title: index == 0, current: index == current, cursor: true}" @click="changePage(index)">
                    {{item.data}}</li>
            </ul>
            <nav></nav>
            <ul class="flex flex-a-c flex-j-sb">
                <li v-for="(item, index) in btnList" :key="index" class="cursor">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navList: [{
                    data: "幻猿论坛",
                    msg: "幻猿Blog在2021-7-20开始制作 制作人: 小小幻猿",
                    path: "/"
                }, {
                    data: "首页",
                    msg: "",
                    path: "/home"
                }, {
                    data: "沸点",
                    msg: "",
                    path: "/hot"
                }, {
                    data: "签到打卡",
                    msg: "",
                    path: "/SignIn"
                }, {
                    data: "关于我们",
                    msg: "",
                    path: "/about"
                }],
                btnList: ["发表文章", "登录", "注册"],
                current: this.$store.state.navCurrent,
                input: "",
            }
        },
        methods: {
            changePage(currentIndex) {
                this.current = currentIndex
                if (currentIndex === 0) this.current = 1
                this.$store.commit("setNavCurrent", this.current)
                this.$router.push(this.navList[currentIndex].path)

                // // 调用 store 中 mutations 的方法
                // this.$store.commit("addToCar", "efml")
            }
        }
    }
</script>

<style lang="scss" scoped>
    $navLiWidth: 100px;
    $navLiHeight: 40px;

    #nav {
        width: 100%;
        padding: 1rem 0;
        border-bottom: 1px solid $lineColor;
        margin-top: 3px;

        >div:first-of-type {
            width: $maxBoxWidth;
            margin: 0 auto;
            background-color: $boxBgcColor;

            >ul:nth-of-type(1) {
                flex: 5;

                >li {
                    font-weight: bold;
                    letter-spacing: .2rem;
                }

                >li:hover {
                    color: $themeRed;
                }

                >li:nth-of-type(1):hover {
                    color: $themeOrange;
                }
            }

            >nav {
                flex: 1;
            }

            >ul:nth-of-type(2) {
                flex: 3;
                font-size: .9rem;

                >li {
                    width: $navLiWidth;
                    height: $navLiHeight;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    box-shadow: rgba(0, 0, 0, .2) 3px 3px 10px;
                }

                >li:nth-of-type(1) {
                    color: white;
                    background-color: $themeGreen;
                    border: 1px solid #0d8863;
                }

                >li:nth-of-type(1):hover {
                    background-color: #0d8863;
                }

                >li:nth-of-type(2) {
                    color: white;
                    background-color: $themeRed;
                    border: 1px solid #c92121;
                }

                >li:nth-of-type(2):hover {
                    background-color: #c92121;
                }

                >li:nth-of-type(3) {
                    color: white;
                    background-color: $themeOrange;
                    border: 1px solid #b15602;
                }

                >li:nth-of-type(3):hover {
                    background-color: #b15602;
                }
            }
        }
    }

    .current {
        color: $themeRed;
    }

    .title {
        color: $themeOrange;
        font-size: 1.5rem;
        font-family: "Times New Roman", serif, Times;
        font-style: oblique;
        font-weight: 550;
        letter-spacing: 2px;
        float: right;
    }

    .cursor {
        cursor: pointer;
    }
</style>