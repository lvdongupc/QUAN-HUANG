export class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;

        this.pressed_keys = new Set();
        this.start();
    }

    start() {
         let outer = this;
        //这是必要的因为在 jQuery 的事件回调函数中，this 关键字指向的是触发事件的元素（即 $canvas），而不是 Controller 的实例。
        this.$canvas.keydown(function (e) {
            outer.pressed_keys.add(e.key);
        });

        this.$canvas.keyup(function (e) {
            outer.pressed_keys.delete(e.key);
        });
    }
}
