/*
    方案一
        父盒子设置 
            dispaly: flex；
            justify-content: center;
            align-items: center;

    方案二
        父盒子设置
            position: relative;
        子盒子设置
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
    
    方案三
        父盒子设置
            dispaly: table-cell;
            text-align: center;
            vertical-align: middle;
        子盒子设置
            dispaly: inline-block;
            vertical-align: middle;
*/