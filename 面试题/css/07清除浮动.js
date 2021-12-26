/*
    清除浮动

    方案一
        给父元素定义高度
    
    方案二
        让父元素也浮动

    方案三
        父元素设置 disply: table;

    方案四
        父元素设置 overflow: hidden;

    方案五
        .clearfix:after{
            content: '';
            dispaly: block;
            clear: both;
        }
*/