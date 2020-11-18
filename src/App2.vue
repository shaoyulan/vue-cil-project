
<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';

export default {
  components:{Header, Main, Footer}
}
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style lang="scss">


html, body, #app{
    height: 100%;
}

body {
	background: #e9e9e9;
}

#app{
  display: flex;
  flex-direction: column;
}
.header, .footer{
  flex-shrink: 0;
}
.main{
  flex-grow: 1;
  padding: 15px;
}

// btn
.form-btn{
	border:0;
	box-shadow: 0;
	padding: 5px 20px;
	background: #fff;
	color: #000;
	text-decoration: none;

	font-weight: bold;
	color: #ed2553;
}
// btn /

$color-input-border: #fff;
$color-font-gray-opacity: #ccc;
$color-deco: lightblue;
$color-input-invalid: tomato;
.form-group{
	.form-label{
		color: #fff;
		font-weight: lighter;
	}
}
.input-group{
     /* border: 1px solid $color-input-border; */
    input, select, textarea {
        border: 0;
		background: none;
		color:#fff;
    }

	input, select, textarea{
		&:focus, &:active{
			box-shadow:none;
			outline:none;
			background: none;
		}
	}

	.form-control, .custom-select{
		color:#fff;
	}

     /* 底線 */
    &.sty-underline{
        position: relative;
        border: 0;
        border-bottom: 1px solid $color-input-border;
        .underline-b{
            content:'';
            display:block;
            position: absolute;
            right:0;
            left: auto;
            height: 1px;
            bottom:0;
            background: rgba($color-deco, .8);
            z-index: 5;
            pointer-events:0;
            transition: .3s;
            width: 0;
        }

         /* IE */
        input, select {
            min-height: 30px;
        }
         /* IE / */

        input {
            border:0;

            padding: 0.13rem 0rem;

            &::placeholder{
                color: rgba(0, 0, 0, .3)
            }

            &:focus {
                border-color: $color-input-border;
                ~ .underline-b{
                    left:0;
                    right:auto;
                    width: 100%;
                }
            }
        }
    }

     /* 方框 */
    &.sty-squarebox{
        border: 1px solid $color-input-border;
        input, select{
            min-height:40px;
        }


        &.sty-pwd{
            .input-group-append{
                padding-right: 18px;
                .show-pwd, .hide-pwd{
                    font-size: 26px;
                }
            }
        }
    }

     /* 蝦拉 */
    &.sty-select{
        position: relative;
        select{
            width: 100%;
            border: 0;
            outline: none;
            appearance:none;
            background: none;

            &:focus{
                box-shadow:none;
            }

			option{
				color:#212121;
			}
        }

        &:after{
            content:'▼';
            display: block;
            position: absolute;
            right: 19px;
            top: 50%;
            transform: translateY(-50%);
			color:#fff;
            pointer-events:none;
        }
    }

     /* 密碼 */
    &.sty-pwd{
        .hide-pwd, .show-pwd{
            display: flex;
			align-items: center;
			justify-content: center;
            display: none;
            height: 100%;
            cursor: pointer;
            font-size: 21px;
            color: $color-font-gray-opacity;
        }

        input[type="text"] ~ .input-group-append{
            .show-pwd{
                display: inline-flex;
            }
        }
        input[type="password"] ~ .input-group-append{
            .hide-pwd{
                display: inline-flex;
            }
        }
    }

     /* apend 1btn */
    &.sty-append-1btn{
        .input-group-append{
            .btn{
                height: auto;
                min-height: auto;
                padding-top: 0;
                padding-bottom: 0;
                transform: translateY(-3px);
                box-shadow: none;
            }
        }
    }

     /* 驗證樣式 */
    &.is-valid{
        padding-right: 35px;
        input{
        }
        &:after{
            content:'';
            display: block;
            position: absolute;
            right: 19px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            z-index: 5;
        }
    }
    &.is-invalid{
        border-color: $color-input-invalid;
        padding-right: 35px;

        &.sty-custom-control{
            border: 0;
        }

        input{
        }
        &:after{
            content:'';
            display: block;
            position: absolute;
            right: 19px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            z-index: 5;
            color:$color-input-invalid;
        }
    }

     /* custom-control */
    &.sty-custom-control{
        align-items: center;
        min-height: 41px;

        .custom-control-label{
            color: #fff;
        }


        /* 次樣式調整 */
        &.sty-squarebox-sibling{
            min-height: 58px;
        }

        &.sty-gap-narrow{
            .custom-control-inline{
                margin-right: 0.8rem;
            }
        }
    }

     /* 其他 */
     /* append */
    .input-group-append{
        margin-left: 5px;
    }
}

</style>