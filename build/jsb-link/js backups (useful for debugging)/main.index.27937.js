window.__require = function t(e, o, i) {
function r(c, l) {
if (!o[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var u = "function" == typeof __require && __require;
if (!l && u) return u(s, !0);
if (n) return n(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var a = o[c] = {
exports: {}
};
e[c][0].call(a.exports, function(t) {
return r(e[c][1][t] || t);
}, a, a.exports, t, e, o, i);
}
return o[c].exports;
}
for (var n = "function" == typeof __require && __require, c = 0; c < i.length; c++) r(i[c]);
return r;
}({
CellShader: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8f6a2qLTmRGvb5rpDL56jyx", "CellShader");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), n = this && this.__decorate || function(t, e, o, i) {
var r, n = arguments.length, c = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (c = (n < 3 ? r(c) : n > 3 ? r(e, o, c) : r(e, o)) || c);
return n > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, l = c.ccclass, s = (c.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
var t = this;
this.scheduleOnce(function() {
var e = t.node.getComponent(cc.Sprite).spriteFrame.uv, o = e[0], i = e[6], r = e[5], n = e[3], c = i - o;
o -= .001 * c;
i += .001 * c;
r -= .001 * c;
n += .001 * c;
t.node.getComponent(cc.Sprite).getMaterial(0).setProperty("rect", [ o, i, r, n ]);
});
};
e.prototype.start = function() {};
return n([ l ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
Cell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "48449fhKMBH2YJfP7zHFLy9", "Cell");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), n = this && this.__decorate || function(t, e, o, i) {
var r, n = arguments.length, c = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (c = (n < 3 ? r(c) : n > 3 ? r(e, o, c) : r(e, o)) || c);
return n > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./Config"), l = cc._decorator, s = l.ccclass, u = l.property, a = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = null;
e.x = null;
e.y = null;
e._cellId = null;
e._value = 0;
e._matrix = null;
e._touched = !1;
e._preTouchCell = null;
e._graphics = null;
e.movedPos = null;
e.origin = null;
e.config = {
2: cc.color().fromHEX("#ff7778"),
4: cc.color().fromHEX("#a976f3"),
8: cc.color().fromHEX("#ffc700"),
16: cc.color().fromHEX("#81cd64"),
32: cc.color().fromHEX("#63c7ff"),
64: cc.color().fromHEX("#feb178"),
128: cc.color().fromHEX("#598bdb"),
256: cc.color().fromHEX("#ff8c00"),
512: cc.color().fromHEX("#ff4500"),
1024: cc.color().fromHEX("#cd5c5c"),
2048: cc.color().fromHEX("#7b68ee")
};
return e;
}
e.prototype.start = function() {};
Object.defineProperty(e.prototype, "touched", {
get: function() {
return this._touched;
},
set: function(t) {
this._touched = t;
if (this._touched) cc.tween(this.node).to(.1, {
scale: 1.07
}, {
easing: "cubicOut"
}).start(); else {
this.graphics = null;
cc.tween(this.node).to(.1, {
scale: 1
}, {
easing: "cubicIn"
}).start();
}
},
enumerable: !1,
configurable: !0
});
e.prototype.update = function() {
this.checkMovedPos();
};
e.prototype.checkMovedPos = function() {
if (this.movedPos) {
cc.tween(this.node).to(.2, {
position: cc.v3(this.movedPos)
}).start();
this.movedPos = null;
}
};
e.prototype.updatePos = function(t) {
void 0 === t && (t = !1);
var e = this.getPosFromMatrix();
t ? this.movedPos = e : this.node.setPosition(e);
};
Object.defineProperty(e.prototype, "graphics", {
get: function() {
return this._graphics;
},
set: function(t) {
if (t) this._graphics = t; else if (this._graphics) {
this._graphics.clear();
this._graphics.node.destroy();
this._graphics = null;
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "cellId", {
get: function() {
return this._cellId;
},
set: function(t) {
this._cellId = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "preTouchCell", {
get: function() {
return this._preTouchCell;
},
set: function(t) {
this._preTouchCell = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "matrix", {
get: function() {
return this._matrix;
},
set: function(t) {
this.origin || (this.origin = t);
this._matrix = t;
this.x.string = this._matrix.x.toString();
this.y.string = this._matrix.y.toString();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "value", {
get: function() {
return this._value;
},
set: function(t) {
if (this.config[t]) {
this._value = t;
this.text.string = this.formatNumber(t);
this.node.color = this.config[t];
} else {
this._value = t;
this.text.string = this.formatNumber(t);
this.node.color = this.config[2048];
}
},
enumerable: !1,
configurable: !0
});
e.prototype.getPosFromMatrix = function() {
var t = this.node.getContentSize(), e = cc.Vec2.ZERO;
e.x = this.calculateFromMatrix(this._matrix.x, c.Config.MAX_COL, c.Config.CELL_SPACING, t.width);
e.y = this.calculateFromMatrix(this._matrix.y, c.Config.MAX_ROW, c.Config.CELL_SPACING, t.height);
return e;
};
e.prototype.calculateFromMatrix = function(t, e, o, i) {
var r = e % 2, n = Math.floor(e / 2);
if (0 != r) return (t - n) * (o + i);
var c = n - .5;
return (.5 * i + o / 2) * (t > c ? 1 : -1) + (t > c ? Math.floor(t - c) : Math.ceil(t - c)) * (o + i);
};
e.prototype.onDestroy = function() {
if (this._graphics) {
this._graphics.clear();
this._graphics.node.destroy();
}
};
e.prototype.formatNumber = function(t) {
return t < 1e3 ? t.toString() : t < 1e6 ? (t / 1e3).toFixed(1) + "k" : t < 1e9 ? (t / 1e6).toFixed(1) + "m" : (t / 1e9).toFixed(1) + "b";
};
n([ u(cc.Label) ], e.prototype, "text", void 0);
n([ u(cc.Label) ], e.prototype, "x", void 0);
n([ u(cc.Label) ], e.prototype, "y", void 0);
return n([ s ], e);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {
"./Config": "Config"
} ],
Config: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "af3c0tLWItBLogpdtZzQ95I", "Config");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Config = void 0;
(function(t) {
t.MAX_ROW = 7;
t.MAX_COL = 5;
t.CELL_SPACING = 13;
t.LINE_COLOR = new cc.Color().fromHEX("#ffbd31");
t.LINE_WIDTH = 10;
})(o.Config || (o.Config = {}));
cc._RF.pop();
}, {} ],
Game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c747ej1a4NDQoq2XwJBnhzI", "Game");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), n = this && this.__decorate || function(t, e, o, i) {
var r, n = arguments.length, c = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (c = (n < 3 ? r(c) : n > 3 ? r(e, o, c) : r(e, o)) || c);
return n > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../XYUtils/XYUtils"), l = t("./Cell"), s = t("./Config"), u = cc._decorator, a = u.ccclass, h = u.property, f = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cellPrefab = null;
e.mainNode = null;
e.graphicsNode = null;
e.sumCell = null;
e.todayScoreLabel = null;
e.matrix = [];
e.touchSum = 0;
e.showSum = 0;
e.touchEnable = !1;
e.lastTouchCell = null;
e.touchNodeList = [];
e.score = null;
e.cells = [];
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved.bind(this), this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnded.bind(this), this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnded.bind(this), this);
};
e.prototype.start = function() {
this.createGame();
};
e.prototype.addScore = function(t) {
this.setScore(this.score + t);
};
e.prototype.setScore = function(t) {
this.score = t;
this.todayScoreLabel.string = this.score.toString();
};
e.prototype.drawLine = function(t, e) {
var o = new cc.Node(), i = o.addComponent(cc.Graphics);
i.lineWidth = s.Config.LINE_WIDTH;
i.strokeColor = s.Config.LINE_COLOR;
i.moveTo(t.x, t.y);
i.lineTo(e.x, e.y);
i.stroke();
o.parent = this.graphicsNode;
return i;
};
e.prototype.createGame = function() {
this.setScore(0);
for (var t = 0; t < s.Config.MAX_ROW; t++) {
for (var e = [], o = 0; o < s.Config.MAX_COL; o++) {
var i = this.createRandomCell(7), r = i.getComponent(l.default);
r.matrix = cc.v2(o, t);
i.parent = this.mainNode;
r.updatePos();
this.cells.push(r);
e.push({
node: i
});
}
this.matrix.push(e);
}
};
e.prototype.createRandomCell = function(t) {
var e = cc.instantiate(this.cellPrefab), o = e.getComponent(l.default);
o.cellId = c.XY.generateId();
o.value = Math.pow(2, this.getRandomIntInclusive(1, t));
return e;
};
e.prototype.getRandomIntInclusive = function(t, e) {
t = Math.ceil(t);
e = Math.floor(e);
return Math.floor(Math.random() * (e - t + 1)) + t;
};
e.prototype.addTouchCell = function(t) {
this.touchNodeList.push(t.node);
t.touched = !0;
this.touchSum += t.value;
this.showSum = this.getShowSum(this.touchSum);
this.sumCell.value = this.showSum;
this.sumCell.node.active = !0;
if (cc.isValid(this.lastTouchCell)) {
t.preTouchCell = this.lastTouchCell;
t.graphics = this.drawLine(t.node.getPosition(), this.lastTouchCell.node.getPosition());
}
this.lastTouchCell = t;
};
e.prototype.removeTouchCell = function() {
var t = this.touchNodeList[this.touchNodeList.length - 1].getComponent(l.default);
if (cc.isValid(t.preTouchCell)) {
this.touchNodeList.pop();
t.touched = !1;
t.graphics = null;
this.lastTouchCell = t.preTouchCell;
t.preTouchCell = null;
this.touchSum -= t.value;
this.showSum = this.getShowSum(this.touchSum);
this.sumCell.value = this.showSum;
}
};
e.prototype.getShowSum = function(t) {
return Math.pow(2, Math.floor(Math.log2(t)));
};
e.prototype.touchStart = function(t) {
for (var e = 0; e < this.cells.length; e++) {
var o = this.cells[e];
if (o.node.getBoundingBoxToWorld().contains(t.getLocation())) {
this.touchEnable = !0;
cc.log("touch id: " + o.cellId + " (" + o.origin.x + ", " + o.origin.y + ")");
this.addTouchCell(o);
return;
}
}
};
e.prototype.touchMoved = function(t) {
if (this.touchEnable && cc.isValid(this.lastTouchCell)) for (var e = this.lastTouchCell.matrix.y - 1; e <= this.lastTouchCell.matrix.y + 1; e++) for (var o = this.lastTouchCell.matrix.x - 1; o <= this.lastTouchCell.matrix.x + 1; o++) if (!(e < 0 || e >= s.Config.MAX_ROW || o < 0 || o >= s.Config.MAX_COL)) {
var i = this.matrix[e][o].node;
if (cc.isValid(i)) {
var r = i.getComponent(l.default);
if (i.getBoundingBoxToWorld().contains(t.getLocation())) {
if (cc.isValid(this.lastTouchCell.preTouchCell) && this.lastTouchCell.preTouchCell.cellId === r.cellId) {
this.removeTouchCell();
return;
}
if (this.checkLinkCell(r)) {
this.addTouchCell(r);
return;
}
}
}
}
};
e.prototype.checkLinkCell = function(t) {
return !t.touched && (!(!cc.isValid(this.lastTouchCell) || this.lastTouchCell.value !== t.value) || t.value === this.showSum || void 0);
};
e.prototype.updateMatrix = function() {
for (var t = 0; t < this.matrix.length; t++) for (var e = this.matrix[t], o = 0; o < e.length; o++) e[o].node = null;
for (var i = 0; i < this.cells.length; i++) {
e = this.cells[i];
cc.isValid(e) && (this.matrix[e.matrix.y][e.matrix.x].node = e.node);
}
};
e.prototype.touchEnded = function() {
if (1 === this.touchNodeList.length) {
this.lastTouchCell.touched = !1;
this.lastTouchCell.preTouchCell = null;
} else for (var t = function(t) {
var o = e.touchNodeList[t], i = o.getComponent(l.default);
if (i.cellId === e.lastTouchCell.cellId) {
e.addScore(e.showSum);
e.lastTouchCell.value = e.showSum;
e.lastTouchCell.touched = !1;
e.lastTouchCell.preTouchCell = null;
} else {
e.cells = e.cells.filter(function(t) {
return t.cellId != o.getComponent(l.default).cellId;
});
var r = o.getComponent(l.default).matrix.y, n = o.getComponent(l.default).matrix.x;
o.destroy();
var c = e.createRandomCell(7), u = c.getComponent(l.default);
u.matrix = cc.v2(n, s.Config.MAX_ROW);
u.updatePos();
u.matrix = cc.v2(n, s.Config.MAX_ROW - 1);
u.updatePos(!0);
c.parent = e.mainNode;
e.cells.push(u);
for (var a = r + 1; a < e.matrix.length; a++) {
var h = e.matrix[a][n].node;
if (cc.isValid(h) && h.getComponent(l.default).matrix.y > i.matrix.y) {
h.getComponent(l.default).matrix = cc.v2(h.getComponent(l.default).matrix.x, h.getComponent(l.default).matrix.y - 1);
h.getComponent(l.default).updatePos(!0);
}
}
e.updateMatrix();
}
}, e = this, o = 0; o < this.touchNodeList.length; o++) t(o);
this.touchSum = 0;
this.showSum = 0;
this.touchEnable = !1;
this.lastTouchCell = null;
this.touchNodeList = [];
this.sumCell.node.active = !1;
};
n([ h(cc.Prefab) ], e.prototype, "cellPrefab", void 0);
n([ h(cc.Node) ], e.prototype, "mainNode", void 0);
n([ h(cc.Node) ], e.prototype, "graphicsNode", void 0);
n([ h(l.default) ], e.prototype, "sumCell", void 0);
n([ h(cc.Label) ], e.prototype, "todayScoreLabel", void 0);
return n([ a ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../XYUtils/XYUtils": "XYUtils",
"./Cell": "Cell",
"./Config": "Config"
} ],
XYUtils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "476d0Yv6XhG/6LmzwClYTHi", "XYUtils");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.XY = void 0;
(o.XY || (o.XY = {})).generateId = function() {
return Date.now().toString(36) + "-" + Math.random().toString(36).substring(2, 8);
};
cc._RF.pop();
}, {} ]
}, {}, [ "Cell", "CellShader", "Config", "Game", "XYUtils" ]);