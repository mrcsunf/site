window.onload = function () {
    //图片轮播
    var imgs = document.querySelectorAll(".img");  //获取图片
    var dots = document.querySelector(".dots").querySelectorAll("span");    //获取小圆点

    //遍历 img 图片 自定义属性 data-index，方便判断当前的图片
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("data-index", i);
    }

    //获取当前图片和图片的index
    var currentImg = document.querySelector(".current");
    var currentIndex = currentImg.getAttribute("data-index");

    // 每隔三秒图片自动轮播一次
    var timer = setInterval(changeImg, 3000);

    // 图片自动轮播
    function changeImg() {
        if (currentIndex < imgs.length - 1) {
            // 将之前的图片隐藏
            imgs[currentIndex].classList.remove("current");
            // 将之前高亮显示的小圆点不高亮显示
            dots[currentIndex].classList.remove("square");
            // 将下一张图片显示，将下一个小圆点高亮
            imgs[++currentIndex].classList.add("current");
            dots[currentIndex].classList.add("square");
        } else {
            // 将之前的图片隐藏
            imgs[currentIndex].classList.remove("current");
            // 将之前高亮显示的小圆点不高亮显示
            dots[currentIndex].classList.remove("square");
            currentIndex = 0
            // 将当前的图片隐藏
            imgs[currentIndex].classList.add("current");
            // 将之前高亮显示的小圆点不高亮显示
            dots[currentIndex].classList.add("square");
        }
    }

    //遍历小圆点，绑定事件
    for (var j = 0; j < dots.length; j++) {
        //给所有小圆点设置属性
        dots[j].setAttribute("data-index", j);
        dots[j].addEventListener("click", function () {
            //获取当前小圆点的索引
            var index = this.getAttribute("data-index");
            // 如果当前点击小圆点的 index 索引与之前索引不一致，切换图片，否则不做任何操作
            if (index != currentIndex) {
                // 将点击之前显示的图片隐藏，即将当前的 img 上的 current 类删除
                imgs[currentIndex].classList.remove("current");
                // 将之前高亮的原点取消高亮显示
                dots[currentIndex].classList.remove("square");
                // 将当前图片显示出来
                imgs[index].classList.add("current");
                // 将当前小圆点高亮显示
                dots[index].classList.add("square");
                // 改变 currentIndex 的值，让他和 index 相等
                currentIndex = index;
            }
        })
    }

    // tab 切换
    // 获取点击城市列表，以及要切换的房源信息
    var aList = document.getElementsByClassName("list_nav"),
        aTab = document.getElementsByClassName("productBox"),
        cityIndex = 0;  //  用来存储上一次高亮显示的元素索引

    // 遍历所有城市列表
    for (var a = 0; a < aList.length; a++) {
        // 闭包函数自执行
        (function (a) {
            // 给每一个城市列表 li 绑定事件
            aList[a].onclick = function () {
                // 上一次高亮显示的城市及内容隐藏
                aList[cityIndex].classList.remove("current_option");
                aTab[cityIndex].classList.remove("on");
                // 改变cityIndex,让它等于刚点击的 a
                cityIndex = a;
                // 将当前点击的城市及内容高亮显示
                aList[a].classList.add("current_option");
                aTab[a].classList.add("on");
            }
        })(a)
    }
}