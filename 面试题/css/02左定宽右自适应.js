/*
    方案一
        左边设置浮动，右边宽度设置100%
        .left{
            float: left;
        }
        .right{
            width: 100%;
        }

    方案二
        左边设置浮动，右边用calc去补宽计算
        .left{
            float: left;
        }
        .right{
            width: calc(100vw-200px)
        }

    方案三
        父容器设置dispaly: flex; 右边部分设置flex: 1
    
*/