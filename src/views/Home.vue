<template>
    <div id="home" class="flex flex-j-sb">
        <div>
            <div>动态</div>
            <div>
                <ul>
                    <li v-for="(item, index) in dynamicList" :key="index" class="flex">
                        <!-- <img :src="item.avatar"> -->
                        <div><img src="../assets/images/vueFile.png"></div>
                        <div class="flex flex-j-sb fle-flex-d-c">
                            <p @click="linkTo(item.type)">{{ item.title }}</p>
                            <p class="flex flex-a-c">
                                <span
                                    :class="{signIn:true, recommend:item.type==1, comment: item.type==2}">{{ item.type | typeChange }}</span>
                                <span>{{ item.user }}</span>
                                <span>{{ item.date }}</span>
                            </p>
                        </div>
                    </li>
                </ul>
                <div>
                    翻页内容
                </div>
            </div>
        </div>
        <div>
            <div>社区签到</div>
            <div>
                <p><span>{{ msg }}</span> 是一个主张友好、分享、自由的技术交流社区。</p>
                <p>我们坚信 <span>技术改变世界</span></p>
            </div>
            <div class="flex flex-j-c flex-a-c">
                <button>发帖交流</button>
                <button>签到打卡</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        created() {},
        data() {
            return {
                dynamic: [{
                    user: "张三",
                    avatar: "../assets/images/vueFile.png",
                    title: "学习没有捷径！加油吧！",
                    type: "1",
                    date: "1626853646855"
                }, {
                    user: "李四",
                    avatar: "../assets/images/vueFile.png",
                    title: "来了来了各位，签到晚了",
                    type: "1",
                    date: "1626853646855"
                }, {
                    user: "王五",
                    avatar: "../assets/images/vueFile.png",
                    title: "支持论坛，来签到了",
                    type: "3",
                    date: "1626853646855"
                }, {
                    user: "赵六",
                    avatar: "../assets/images/vueFile.png",
                    title: "打卡前端开始",
                    type: "2",
                    date: "1626853646855"
                }, {
                    user: "孙七",
                    avatar: "../assets/images/vueFile.png",
                    title: "星期三，又是适合扣JS的一天",
                    type: "3",
                    date: "1626853646855"
                }, {
                    user: "周八",
                    avatar: "../assets/images/vueFile.png",
                    title: "希望河南的暴雨能够早点结束",
                    type: "4",
                    date: "1626853646855"
                }, {
                    user: "吴九",
                    avatar: "../assets/images/vueFile.png",
                    title: "加油！~加油！~加油！~加油！~加油！~",
                    type: "4",
                    date: "1626853646855"
                }, {
                    user: "邓十",
                    avatar: "../assets/images/vueFile.png",
                    title: "1111111111111111111111111111",
                    type: "4",
                    date: "1626853646855"
                }],
                msg: "幻猿论坛 ",
            }
        },
        computed: {
            dynamicList() {
                let newDynamic = this.dynamic.map(item => {
                    return {
                        ...item,
                        date: this.getDateDiff(item.date)
                    }
                })
                return newDynamic
            }
        },
        methods: {
            getDateDiff(dateTimeStamp) {
                if (!dateTimeStamp) return;
                var minute = 1000 * 60;
                var hour = minute * 60;
                var day = hour * 24;
                var month = day * 30;
                var now = new Date().getTime();
                var diffValue = now - dateTimeStamp;
                if (diffValue < 0) return;
                var monthC = diffValue / month;
                var weekC = diffValue / (7 * day);
                var dayC = diffValue / day;
                var hourC = diffValue / hour;
                var minC = diffValue / minute;
                let result;
                if (monthC >= 1) {
                    result = "" + parseInt(monthC) + "月前";
                } else if (weekC >= 1) {
                    result = "" + parseInt(weekC) + "周前";
                } else if (dayC >= 1) {
                    result = "" + parseInt(dayC) + "天前";
                } else if (hourC >= 1) {
                    result = "" + parseInt(hourC) + "小时前";
                } else if (minC >= 1) {
                    result = "" + parseInt(minC) + "分钟前";
                } else
                    result = "刚刚";
                return result;
            },
            linkTo(typeNumber) {
                switch (parseInt(typeNumber)) {
                    case 1:
                        break;
                    case 2:
                        this.$store.commit("setNavCurrent", 3)
                        this.$router.push({
                            path: "/hot"
                        })
                        break;
                    default:
                        this.$store.commit("setNavCurrent", 3)
                        this.$router.push({
                            path: "/hot"
                        })
                }
            }
        },
        filters: {
            typeChange(typeNumber) {
                let type = ""
                switch (parseInt(typeNumber)) {
                    case 1:
                        type = "推荐"
                        break
                    case 2:
                        type = "评论"
                        break
                    default:
                        type = "每日签到"
                }
                return type
            }
        },
        // beforeRouterEnter(to, form, next) {},
        // beforeRouterUpdate(to, form, next) {},
        // beforeRouterLeave(to, from, next) {}
    }
</script>

<style lang="scss" scoped>
    $BoxPadding : 1rem;
    $width: 3rem;

    #home {
        width: $maxBoxWidth;
        margin: 0 auto;
        margin-top: 1.5rem;
        display: flex;

        >div:nth-of-type(1) {
            width: 75%;
            margin-right: $margin;
            border: 1px solid $lineColor;
            border-radius: $borderRadius;

            >div:nth-of-type(1) {
                border-bottom: 1px solid $lineColor;
                padding: $BoxPadding;
            }

            >div:nth-of-type(2) {
                border-top: none;

                >ul {

                    >li {
                        border-bottom: 1px solid $lineColor;
                        margin: $BoxPadding;
                        padding-bottom: $BoxPadding;

                        >div:nth-of-type(1) {
                            width: $width;
                            height: $width;
                            margin-right: $margin;

                            >img {
                                width: $width;
                                height: $width;
                                border-radius: $imgBorderR;
                            }
                        }

                        >div:nth-of-type(2) {
                            height: $width;
                            width: 100%;

                            >p:nth-of-type(1) {
                                color: $fontColor;
                                width: 80%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                cursor: pointer;
                            }

                            >p:nth-of-type(2) {
                                font-size: .8rem;

                                >span {
                                    display: block;
                                    margin-right: .3rem;
                                }

                                >span:nth-of-type(1) {
                                    padding: 2px 5px;
                                    color: white;
                                    border-radius: $borderRadius;
                                }

                                >span:nth-of-type(2) {
                                    cursor: pointer;
                                }

                                >span:nth-of-type(2):hover {
                                    color: $hoverColor;
                                }

                                >span:nth-of-type(3) {
                                    color: $fontColor;
                                }
                            }
                        }
                    }
                }
            }
        }

        >div:nth-of-type(2) {
            flex: 1;

            >div:nth-of-type(1) {
                width: 100%;
                border: 1px solid $lineColor;
                border-radius: $borderRadius $borderRadius 0 0;
                padding: $BoxPadding;
            }

            >div:nth-of-type(2) {
                border-top: none;
                padding: $BoxPadding;
                border: 1px solid $lineColor;
                border-top: none;

                >p {
                    font-size: .9rem;
                    line-height: 2rem;
                }

                >p>span {
                    color: $themeRed;
                    font-weight: bold;
                }
            }

            >div:nth-of-type(3) {
                width: 100%;
                padding: $BoxPadding;
                background-color: #f4f6fa;
                border: 1px solid $lineColor;
                border-top: none;
                border-radius: 0 0 $borderRadius $borderRadius;

                >button {
                    padding: .4rem .8rem;
                    color: white;
                    border-radius: $borderRadius;
                    cursor: pointer;
                }

                >button:nth-of-type(1) {
                    margin-right: $margin;
                    background-color: #4299e1;
                    border: 1px solid #498ec8;
                }

                >button:nth-of-type(1):hover {
                    background-color: #498ec8;
                }

                >button:nth-of-type(2) {
                    background-color: #2fb344;
                    border: 1px solid #38a04d;
                }

                >button:nth-of-type(2):hover {
                    background-color: #38a04d;
                }
            }
        }
    }

    .signIn {
        background-color: $themeGreen;
    }

    .recommend {
        background-color: $themeRed;
    }

    .comment {
        background-color: $themeOrange;
    }
</style>