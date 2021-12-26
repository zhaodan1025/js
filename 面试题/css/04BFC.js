/*
    BFC
    理解：BFC是css布局的一个概念，是一块独立的渲染区域，一个环境，里面的元素不会影响到外部的元素

    如何生成BFC（脱离文档流）
        1.根元素，即html元素（最大的一个BFC）
        2.float的值不为none
        3.positon的值为absolute或fixed
        4.overflow的值不为visible（默认值，内容不会被修剪，会呈现在元素框之外）
        5.display的值为inline-block、tabele-cell、table-caption

    BFC布局规则：
        1.内部的Box会在垂直方向，一个接一个地放置。
        2.Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
        3.每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
        4.BFC的区域不会与float box重叠。
        5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
        6.计算BFC的高度时，浮动元素也参与计算

    BFC有哪些作用：
        1.自适应两栏布局
        2。可以阻止元素被浮动元素覆盖
        3。可以包含浮动元素——清除内部浮动
        4.分属于不同的BFC时可以阻止margin重叠

*/