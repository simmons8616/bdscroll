/*!
 * BdScroll v1.0.0
 * git@github.com:simmons8616/bdscroll.git
 *
 * Copyright (c) 2017-2018
 * Released under the MIT license
 */
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

/**
 * @file BdScroll插件主文件
 * @author simmons8616(simmons0616@gmail.com)
 */

var BdScroll = function BdScroll() {
    var options =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, BdScroll);

    console.log(options);
};

export default BdScroll;