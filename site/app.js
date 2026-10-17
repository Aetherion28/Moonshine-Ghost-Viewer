var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p2 = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p2 && !s && (target = target.prototype), k < 5 && (k > 3 || !p2) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p2 && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p2, access = ctx.access = { has: p2 ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p2 ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p2 ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p2 ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p2 ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// node_modules/gl-matrix/esm/common.js
var EPSILON, ARRAY_TYPE, RANDOM, degree;
var init_common = __esm({
  "node_modules/gl-matrix/esm/common.js"() {
    EPSILON = 1e-6;
    ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
    RANDOM = Math.random;
    degree = Math.PI / 180;
    if (!Math.hypot) Math.hypot = function() {
      var y = 0, i = arguments.length;
      while (i--) {
        y += arguments[i] * arguments[i];
      }
      return Math.sqrt(y);
    };
  }
});

// node_modules/gl-matrix/esm/mat3.js
function create() {
  var out = new ARRAY_TYPE(9);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
var init_mat3 = __esm({
  "node_modules/gl-matrix/esm/mat3.js"() {
    init_common();
  }
});

// node_modules/gl-matrix/esm/mat4.js
var mat4_exports = {};
__export(mat4_exports, {
  add: () => add,
  adjoint: () => adjoint,
  clone: () => clone,
  copy: () => copy,
  create: () => create2,
  determinant: () => determinant,
  equals: () => equals,
  exactEquals: () => exactEquals,
  frob: () => frob,
  fromQuat: () => fromQuat,
  fromQuat2: () => fromQuat2,
  fromRotation: () => fromRotation,
  fromRotationTranslation: () => fromRotationTranslation,
  fromRotationTranslationScale: () => fromRotationTranslationScale,
  fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
  fromScaling: () => fromScaling,
  fromTranslation: () => fromTranslation,
  fromValues: () => fromValues,
  fromXRotation: () => fromXRotation,
  fromYRotation: () => fromYRotation,
  fromZRotation: () => fromZRotation,
  frustum: () => frustum,
  getRotation: () => getRotation,
  getScaling: () => getScaling,
  getTranslation: () => getTranslation,
  identity: () => identity,
  invert: () => invert,
  lookAt: () => lookAt,
  mul: () => mul,
  multiply: () => multiply,
  multiplyScalar: () => multiplyScalar,
  multiplyScalarAndAdd: () => multiplyScalarAndAdd,
  ortho: () => ortho,
  orthoNO: () => orthoNO,
  orthoZO: () => orthoZO,
  perspective: () => perspective,
  perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
  perspectiveNO: () => perspectiveNO,
  perspectiveZO: () => perspectiveZO,
  rotate: () => rotate,
  rotateX: () => rotateX,
  rotateY: () => rotateY,
  rotateZ: () => rotateZ,
  scale: () => scale,
  set: () => set,
  str: () => str,
  sub: () => sub,
  subtract: () => subtract,
  targetTo: () => targetTo,
  translate: () => translate,
  transpose: () => transpose
});
function create2() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
function clone(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function transpose(out, a) {
  if (out === a) {
    var a01 = a[1], a02 = a[2], a03 = a[3];
    var a12 = a[6], a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}
function invert(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function adjoint(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
function determinant(a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
function translate(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
function scale(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function rotate(out, a, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len5 = Math.hypot(x, y, z);
  var s, c, t2;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len5 < EPSILON) {
    return null;
  }
  len5 = 1 / len5;
  x *= len5;
  y *= len5;
  z *= len5;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t2 = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];
  b00 = x * x * t2 + c;
  b01 = y * x * t2 + z * s;
  b02 = z * x * t2 - y * s;
  b10 = x * y * t2 - z * s;
  b11 = y * y * t2 + c;
  b12 = z * y * t2 + x * s;
  b20 = x * z * t2 + y * s;
  b21 = y * z * t2 - x * s;
  b22 = z * z * t2 + c;
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotation(out, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len5 = Math.hypot(x, y, z);
  var s, c, t2;
  if (len5 < EPSILON) {
    return null;
  }
  len5 = 1 / len5;
  x *= len5;
  y *= len5;
  z *= len5;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t2 = 1 - c;
  out[0] = x * x * t2 + c;
  out[1] = y * x * t2 + z * s;
  out[2] = z * x * t2 - y * s;
  out[3] = 0;
  out[4] = x * y * t2 - z * s;
  out[5] = y * y * t2 + c;
  out[6] = z * y * t2 + x * s;
  out[7] = 0;
  out[8] = x * z * t2 + y * s;
  out[9] = y * z * t2 - x * s;
  out[10] = z * z * t2 + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotationTranslation(out, q, v) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}
function fromRotationTranslationScale(out, q, v, s) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
function fromQuat(out, q) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}
function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
  var xScale = 2 / (leftTan + rightTan);
  var yScale = 2 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = yScale;
  out[6] = 0;
  out[7] = 0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near / (near - far);
  out[15] = 0;
  return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len5;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len5 = 1 / Math.hypot(z0, z1, z2);
  z0 *= len5;
  z1 *= len5;
  z2 *= len5;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len5 = Math.hypot(x0, x1, x2);
  if (!len5) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len5 = 1 / len5;
    x0 *= len5;
    x1 *= len5;
    x2 *= len5;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len5 = Math.hypot(y0, y1, y2);
  if (!len5) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len5 = 1 / len5;
    y0 *= len5;
    y1 *= len5;
    y2 *= len5;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
function targetTo(out, eye, target, up) {
  var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
  var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
  var len5 = z0 * z0 + z1 * z1 + z2 * z2;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
    z0 *= len5;
    z1 *= len5;
    z2 *= len5;
  }
  var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
  len5 = x0 * x0 + x1 * x1 + x2 * x2;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
    x0 *= len5;
    x1 *= len5;
    x2 *= len5;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
function multiplyScalarAndAdd(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  out[2] = a[2] + b[2] * scale6;
  out[3] = a[3] + b[3] * scale6;
  out[4] = a[4] + b[4] * scale6;
  out[5] = a[5] + b[5] * scale6;
  out[6] = a[6] + b[6] * scale6;
  out[7] = a[7] + b[7] * scale6;
  out[8] = a[8] + b[8] * scale6;
  out[9] = a[9] + b[9] * scale6;
  out[10] = a[10] + b[10] * scale6;
  out[11] = a[11] + b[11] * scale6;
  out[12] = a[12] + b[12] * scale6;
  out[13] = a[13] + b[13] * scale6;
  out[14] = a[14] + b[14] * scale6;
  out[15] = a[15] + b[15] * scale6;
  return out;
}
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
  var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
  var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
  var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
  var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
}
var perspective, ortho, mul, sub;
var init_mat4 = __esm({
  "node_modules/gl-matrix/esm/mat4.js"() {
    init_common();
    perspective = perspectiveNO;
    ortho = orthoNO;
    mul = multiply;
    sub = subtract;
  }
});

// node_modules/gl-matrix/esm/vec3.js
var vec3_exports = {};
__export(vec3_exports, {
  add: () => add2,
  angle: () => angle,
  bezier: () => bezier,
  ceil: () => ceil,
  clone: () => clone2,
  copy: () => copy2,
  create: () => create3,
  cross: () => cross,
  dist: () => dist,
  distance: () => distance,
  div: () => div,
  divide: () => divide,
  dot: () => dot,
  equals: () => equals2,
  exactEquals: () => exactEquals2,
  floor: () => floor,
  forEach: () => forEach,
  fromValues: () => fromValues2,
  hermite: () => hermite,
  inverse: () => inverse,
  len: () => len,
  length: () => length,
  lerp: () => lerp,
  max: () => max,
  min: () => min,
  mul: () => mul2,
  multiply: () => multiply2,
  negate: () => negate,
  normalize: () => normalize,
  random: () => random,
  rotateX: () => rotateX2,
  rotateY: () => rotateY2,
  rotateZ: () => rotateZ2,
  round: () => round,
  scale: () => scale2,
  scaleAndAdd: () => scaleAndAdd,
  set: () => set2,
  sqrDist: () => sqrDist,
  sqrLen: () => sqrLen,
  squaredDistance: () => squaredDistance,
  squaredLength: () => squaredLength,
  str: () => str2,
  sub: () => sub2,
  subtract: () => subtract2,
  transformMat3: () => transformMat3,
  transformMat4: () => transformMat4,
  transformQuat: () => transformQuat,
  zero: () => zero
});
function create3() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
function clone2(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
function fromValues2(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function copy2(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function set2(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function add2(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract2(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function multiply2(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
function scale2(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
function scaleAndAdd(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  out[2] = a[2] + b[2] * scale6;
  return out;
}
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
function inverse(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  return out;
}
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len5 = x * x + y * y + z * z;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = a[0] * len5;
  out[1] = a[1] * len5;
  out[2] = a[2] * len5;
  return out;
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2];
  var bx = b[0], by = b[1], bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
function lerp(out, a, b, t2) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t2 * (b[0] - ax);
  out[1] = ay + t2 * (b[1] - ay);
  out[2] = az + t2 * (b[2] - az);
  return out;
}
function hermite(out, a, b, c, d, t2) {
  var factorTimes2 = t2 * t2;
  var factor1 = factorTimes2 * (2 * t2 - 3) + 1;
  var factor2 = factorTimes2 * (t2 - 2) + t2;
  var factor3 = factorTimes2 * (t2 - 1);
  var factor4 = factorTimes2 * (3 - 2 * t2);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function bezier(out, a, b, c, d, t2) {
  var inverseFactor = 1 - t2;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t2 * t2;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t2 * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t2;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function random(out, scale6) {
  scale6 = scale6 || 1;
  var r = RANDOM() * 2 * Math.PI;
  var z = RANDOM() * 2 - 1;
  var zScale = Math.sqrt(1 - z * z) * scale6;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale6;
  return out;
}
function transformMat4(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
function transformMat3(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
function transformQuat(out, a, q) {
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var x = a[0], y = a[1], z = a[2];
  var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
  var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
function rotateX2(out, a, b, rad) {
  var p2 = [], r = [];
  p2[0] = a[0] - b[0];
  p2[1] = a[1] - b[1];
  p2[2] = a[2] - b[2];
  r[0] = p2[0];
  r[1] = p2[1] * Math.cos(rad) - p2[2] * Math.sin(rad);
  r[2] = p2[1] * Math.sin(rad) + p2[2] * Math.cos(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateY2(out, a, b, rad) {
  var p2 = [], r = [];
  p2[0] = a[0] - b[0];
  p2[1] = a[1] - b[1];
  p2[2] = a[2] - b[2];
  r[0] = p2[2] * Math.sin(rad) + p2[0] * Math.cos(rad);
  r[1] = p2[1];
  r[2] = p2[2] * Math.cos(rad) - p2[0] * Math.sin(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateZ2(out, a, b, rad) {
  var p2 = [], r = [];
  p2[0] = a[0] - b[0];
  p2[1] = a[1] - b[1];
  p2[2] = a[2] - b[2];
  r[0] = p2[0] * Math.cos(rad) - p2[1] * Math.sin(rad);
  r[1] = p2[0] * Math.sin(rad) + p2[1] * Math.cos(rad);
  r[2] = p2[2];
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function angle(a, b) {
  var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}
function str2(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals2(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals2(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2];
  var b0 = b[0], b1 = b[1], b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
}
var sub2, mul2, div, dist, sqrDist, len, sqrLen, forEach;
var init_vec3 = __esm({
  "node_modules/gl-matrix/esm/vec3.js"() {
    init_common();
    sub2 = subtract2;
    mul2 = multiply2;
    div = divide;
    dist = distance;
    sqrDist = squaredDistance;
    len = length;
    sqrLen = squaredLength;
    forEach = (function() {
      var vec = create3();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
          stride = 3;
        }
        if (!offset) {
          offset = 0;
        }
        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }
        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
        }
        return a;
      };
    })();
  }
});

// node_modules/gl-matrix/esm/vec4.js
var vec4_exports = {};
__export(vec4_exports, {
  add: () => add3,
  ceil: () => ceil2,
  clone: () => clone3,
  copy: () => copy3,
  create: () => create4,
  cross: () => cross2,
  dist: () => dist2,
  distance: () => distance2,
  div: () => div2,
  divide: () => divide2,
  dot: () => dot2,
  equals: () => equals3,
  exactEquals: () => exactEquals3,
  floor: () => floor2,
  forEach: () => forEach2,
  fromValues: () => fromValues3,
  inverse: () => inverse2,
  len: () => len2,
  length: () => length2,
  lerp: () => lerp2,
  max: () => max2,
  min: () => min2,
  mul: () => mul3,
  multiply: () => multiply3,
  negate: () => negate2,
  normalize: () => normalize2,
  random: () => random2,
  round: () => round2,
  scale: () => scale3,
  scaleAndAdd: () => scaleAndAdd2,
  set: () => set3,
  sqrDist: () => sqrDist2,
  sqrLen: () => sqrLen2,
  squaredDistance: () => squaredDistance2,
  squaredLength: () => squaredLength2,
  str: () => str3,
  sub: () => sub3,
  subtract: () => subtract3,
  transformMat4: () => transformMat42,
  transformQuat: () => transformQuat2,
  zero: () => zero2
});
function create4() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}
function clone3(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function fromValues3(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function copy3(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function set3(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function add3(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
function subtract3(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
function multiply3(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
function divide2(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
function ceil2(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
function floor2(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
function min2(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
function max2(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
function round2(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
function scale3(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
function scaleAndAdd2(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  out[2] = a[2] + b[2] * scale6;
  out[3] = a[3] + b[3] * scale6;
  return out;
}
function distance2(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
function squaredDistance2(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
function length2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
function squaredLength2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
function negate2(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
function inverse2(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  out[3] = 1 / a[3];
  return out;
}
function normalize2(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len5 = x * x + y * y + z * z + w * w;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = x * len5;
  out[1] = y * len5;
  out[2] = z * len5;
  out[3] = w * len5;
  return out;
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function cross2(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D2 = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D2;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D2) + H * B - I * A;
  return out;
}
function lerp2(out, a, b, t2) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t2 * (b[0] - ax);
  out[1] = ay + t2 * (b[1] - ay);
  out[2] = az + t2 * (b[2] - az);
  out[3] = aw + t2 * (b[3] - aw);
  return out;
}
function random2(out, scale6) {
  scale6 = scale6 || 1;
  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = RANDOM() * 2 - 1;
    v2 = RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = RANDOM() * 2 - 1;
    v4 = RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);
  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale6 * v1;
  out[1] = scale6 * v2;
  out[2] = scale6 * v3 * d;
  out[3] = scale6 * v4 * d;
  return out;
}
function transformMat42(out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
function transformQuat2(out, a, q) {
  var x = a[0], y = a[1], z = a[2];
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
function zero2(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}
function str3(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function exactEquals3(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals3(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
}
var sub3, mul3, div2, dist2, sqrDist2, len2, sqrLen2, forEach2;
var init_vec4 = __esm({
  "node_modules/gl-matrix/esm/vec4.js"() {
    init_common();
    sub3 = subtract3;
    mul3 = multiply3;
    div2 = divide2;
    dist2 = distance2;
    sqrDist2 = squaredDistance2;
    len2 = length2;
    sqrLen2 = squaredLength2;
    forEach2 = (function() {
      var vec = create4();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
          stride = 4;
        }
        if (!offset) {
          offset = 0;
        }
        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }
        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          vec[3] = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
          a[i + 3] = vec[3];
        }
        return a;
      };
    })();
  }
});

// node_modules/gl-matrix/esm/quat.js
var quat_exports = {};
__export(quat_exports, {
  add: () => add4,
  calculateW: () => calculateW,
  clone: () => clone4,
  conjugate: () => conjugate,
  copy: () => copy4,
  create: () => create5,
  dot: () => dot3,
  equals: () => equals4,
  exactEquals: () => exactEquals4,
  exp: () => exp,
  fromEuler: () => fromEuler,
  fromMat3: () => fromMat3,
  fromValues: () => fromValues4,
  getAngle: () => getAngle,
  getAxisAngle: () => getAxisAngle,
  identity: () => identity2,
  invert: () => invert2,
  len: () => len3,
  length: () => length3,
  lerp: () => lerp3,
  ln: () => ln,
  mul: () => mul4,
  multiply: () => multiply4,
  normalize: () => normalize3,
  pow: () => pow,
  random: () => random3,
  rotateX: () => rotateX3,
  rotateY: () => rotateY3,
  rotateZ: () => rotateZ3,
  rotationTo: () => rotationTo,
  scale: () => scale4,
  set: () => set4,
  setAxes: () => setAxes,
  setAxisAngle: () => setAxisAngle,
  slerp: () => slerp,
  sqlerp: () => sqlerp,
  sqrLen: () => sqrLen3,
  squaredLength: () => squaredLength3,
  str: () => str4
});
function create5() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}
function identity2(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2;
  var s = Math.sin(rad / 2);
  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}
function getAngle(a, b) {
  var dotproduct = dot3(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply4(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
function rotateX3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
function rotateY3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var by = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
function rotateZ3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bz = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
function calculateW(out, a) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
  return out;
}
function exp(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
function ln(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t2 = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t2;
  out[1] = y * t2;
  out[2] = z * t2;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
function pow(out, a, b) {
  ln(out, a);
  scale4(out, out, b);
  exp(out, out);
  return out;
}
function slerp(out, a, b, t2) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  var omega, cosom, sinom, scale0, scale1;
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  if (cosom < 0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  if (1 - cosom > EPSILON) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1 - t2) * omega) / sinom;
    scale1 = Math.sin(t2 * omega) / sinom;
  } else {
    scale0 = 1 - t2;
    scale1 = t2;
  }
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
function random3(out) {
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
  return out;
}
function invert2(out, a) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var dot5 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot5 ? 1 / dot5 : 0;
  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
function fromMat3(out, m) {
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;
  if (fTrace > 0) {
    fRoot = Math.sqrt(fTrace + 1);
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
function str4(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone4, fromValues4, copy4, set4, add4, mul4, scale4, dot3, lerp3, length3, len3, squaredLength3, sqrLen3, normalize3, exactEquals4, equals4, rotationTo, sqlerp, setAxes;
var init_quat = __esm({
  "node_modules/gl-matrix/esm/quat.js"() {
    init_common();
    init_mat3();
    init_vec3();
    init_vec4();
    clone4 = clone3;
    fromValues4 = fromValues3;
    copy4 = copy3;
    set4 = set3;
    add4 = add3;
    mul4 = multiply4;
    scale4 = scale3;
    dot3 = dot2;
    lerp3 = lerp2;
    length3 = length2;
    len3 = length3;
    squaredLength3 = squaredLength2;
    sqrLen3 = squaredLength3;
    normalize3 = normalize2;
    exactEquals4 = exactEquals3;
    equals4 = equals3;
    rotationTo = (function() {
      var tmpvec3 = create3();
      var xUnitVec3 = fromValues2(1, 0, 0);
      var yUnitVec3 = fromValues2(0, 1, 0);
      return function(out, a, b) {
        var dot5 = dot(a, b);
        if (dot5 < -0.999999) {
          cross(tmpvec3, xUnitVec3, a);
          if (len(tmpvec3) < 1e-6) cross(tmpvec3, yUnitVec3, a);
          normalize(tmpvec3, tmpvec3);
          setAxisAngle(out, tmpvec3, Math.PI);
          return out;
        } else if (dot5 > 0.999999) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 1;
          return out;
        } else {
          cross(tmpvec3, a, b);
          out[0] = tmpvec3[0];
          out[1] = tmpvec3[1];
          out[2] = tmpvec3[2];
          out[3] = 1 + dot5;
          return normalize3(out, out);
        }
      };
    })();
    sqlerp = (function() {
      var temp1 = create5();
      var temp2 = create5();
      return function(out, a, b, c, d, t2) {
        slerp(temp1, a, d, t2);
        slerp(temp2, b, c, t2);
        slerp(out, temp1, temp2, 2 * t2 * (1 - t2));
        return out;
      };
    })();
    setAxes = (function() {
      var matr = create();
      return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return normalize3(out, fromMat3(out, matr));
      };
    })();
  }
});

// node_modules/gl-matrix/esm/vec2.js
var vec2_exports = {};
__export(vec2_exports, {
  add: () => add5,
  angle: () => angle2,
  ceil: () => ceil3,
  clone: () => clone5,
  copy: () => copy5,
  create: () => create6,
  cross: () => cross3,
  dist: () => dist3,
  distance: () => distance3,
  div: () => div3,
  divide: () => divide3,
  dot: () => dot4,
  equals: () => equals5,
  exactEquals: () => exactEquals5,
  floor: () => floor3,
  forEach: () => forEach3,
  fromValues: () => fromValues5,
  inverse: () => inverse3,
  len: () => len4,
  length: () => length4,
  lerp: () => lerp4,
  max: () => max3,
  min: () => min3,
  mul: () => mul5,
  multiply: () => multiply5,
  negate: () => negate3,
  normalize: () => normalize4,
  random: () => random4,
  rotate: () => rotate2,
  round: () => round3,
  scale: () => scale5,
  scaleAndAdd: () => scaleAndAdd3,
  set: () => set5,
  sqrDist: () => sqrDist3,
  sqrLen: () => sqrLen4,
  squaredDistance: () => squaredDistance3,
  squaredLength: () => squaredLength4,
  str: () => str5,
  sub: () => sub4,
  subtract: () => subtract4,
  transformMat2: () => transformMat2,
  transformMat2d: () => transformMat2d,
  transformMat3: () => transformMat32,
  transformMat4: () => transformMat43,
  zero: () => zero3
});
function create6() {
  var out = new ARRAY_TYPE(2);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}
function clone5(a) {
  var out = new ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function fromValues5(x, y) {
  var out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
function copy5(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function set5(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
function add5(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
function subtract4(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
function multiply5(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
function divide3(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
function ceil3(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
function floor3(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
function min3(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
function max3(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
function round3(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
function scale5(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
function scaleAndAdd3(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  return out;
}
function distance3(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return Math.hypot(x, y);
}
function squaredDistance3(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return x * x + y * y;
}
function length4(a) {
  var x = a[0], y = a[1];
  return Math.hypot(x, y);
}
function squaredLength4(a) {
  var x = a[0], y = a[1];
  return x * x + y * y;
}
function negate3(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
function inverse3(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  return out;
}
function normalize4(out, a) {
  var x = a[0], y = a[1];
  var len5 = x * x + y * y;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = a[0] * len5;
  out[1] = a[1] * len5;
  return out;
}
function dot4(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function cross3(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
function lerp4(out, a, b, t2) {
  var ax = a[0], ay = a[1];
  out[0] = ax + t2 * (b[0] - ax);
  out[1] = ay + t2 * (b[1] - ay);
  return out;
}
function random4(out, scale6) {
  scale6 = scale6 || 1;
  var r = RANDOM() * 2 * Math.PI;
  out[0] = Math.cos(r) * scale6;
  out[1] = Math.sin(r) * scale6;
  return out;
}
function transformMat2(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
function transformMat2d(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
function transformMat32(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
function transformMat43(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
function rotate2(out, a, b, rad) {
  var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
function angle2(a, b) {
  var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero3(out) {
  out[0] = 0;
  out[1] = 0;
  return out;
}
function str5(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
function exactEquals5(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
function equals5(a, b) {
  var a0 = a[0], a1 = a[1];
  var b0 = b[0], b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
}
var len4, sub4, mul5, div3, dist3, sqrDist3, sqrLen4, forEach3;
var init_vec2 = __esm({
  "node_modules/gl-matrix/esm/vec2.js"() {
    init_common();
    len4 = length4;
    sub4 = subtract4;
    mul5 = multiply5;
    div3 = divide3;
    dist3 = distance3;
    sqrDist3 = squaredDistance3;
    sqrLen4 = squaredLength4;
    forEach3 = (function() {
      var vec = create6();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
          stride = 2;
        }
        if (!offset) {
          offset = 0;
        }
        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }
        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
        }
        return a;
      };
    })();
  }
});

// node_modules/gl-matrix/esm/index.js
var init_esm = __esm({
  "node_modules/gl-matrix/esm/index.js"() {
    init_mat4();
    init_quat();
    init_vec2();
    init_vec3();
    init_vec4();
  }
});

// noclip/util.ts
function assert(b, message = "") {
  if (!b) {
    console.error(new Error().stack);
    throw new Error(`Assert fail: ${message}`);
  }
}
function assertExists(v, name = "") {
  if (v !== void 0 && v !== null)
    return v;
  else
    throw new Error(`Missing object ${name}`);
}
function nullify(v) {
  return v === void 0 ? null : v;
}
function readString(buffer, offs, length5 = -1, nulTerminated = true, encoding = null) {
  const buf = buffer.createTypedArray(Uint8Array, offs);
  if (length5 < 0)
    length5 = buf.byteLength;
  let byteLength = 0;
  while (true) {
    if (byteLength >= length5)
      break;
    if (nulTerminated && buf[byteLength] === 0)
      break;
    byteLength++;
  }
  if (byteLength === 0)
    return "";
  if (encoding !== null) {
    return decodeString(buffer, offs, byteLength, encoding);
  } else {
    return copyBufferToString(buffer, offs, byteLength);
  }
}
function copyBufferToString(buffer, offs, byteLength) {
  const buf = buffer.createTypedArray(Uint8Array, offs);
  let S = "";
  for (let i = 0; i < byteLength; i++)
    S += String.fromCharCode(buf[i]);
  return S;
}
function decodeString(buffer, offs = void 0, byteLength = void 0, encoding = "utf8") {
  return new TextDecoder(encoding).decode(buffer.copyToBuffer(offs, byteLength));
}
function align(n, multiple) {
  const mask = multiple - 1;
  return n + mask & ~mask;
}
function nArray(n, c) {
  const d = new Array(n);
  for (let i = 0; i < n; i++)
    d[i] = c(i);
  return d;
}
function leftPad(S, spaces, ch = "0") {
  return S.padStart(spaces, ch);
}
function hexzero(n, spaces) {
  let S = (n >>> 0).toString(16);
  return leftPad(S, spaces);
}
function fallbackUndefined(v, fallback) {
  return v !== null && v !== void 0 ? v : fallback;
}
function setBitFlagEnabled(v, mask, enabled) {
  if (enabled)
    v |= mask;
  else
    v &= ~mask;
  return v;
}
var init_util = __esm({
  "noclip/util.ts"() {
  }
});

// noclip/endian.ts
function getSystemEndianness() {
  return systemEndianness;
}
var test, testView, systemEndianness;
var init_endian = __esm({
  "noclip/endian.ts"() {
    test = new Uint16Array([65279]);
    testView = new DataView(test.buffer);
    systemEndianness = testView.getUint8(0) === 255 ? 0 /* LITTLE_ENDIAN */ : 1 /* BIG_ENDIAN */;
  }
});

// noclip/ArrayBufferSlice.ts
function isAligned(n, m) {
  return (n & m - 1) === 0;
}
var ArrayBufferSlice;
var init_ArrayBufferSlice = __esm({
  "noclip/ArrayBufferSlice.ts"() {
    init_util();
    init_endian();
    ArrayBufferSlice = class _ArrayBufferSlice {
      constructor(arrayBuffer, byteOffset = 0, byteLength = arrayBuffer.byteLength - byteOffset) {
        this.arrayBuffer = arrayBuffer;
        this.byteOffset = byteOffset;
        this.byteLength = byteLength;
        assert(byteOffset >= 0 && byteLength >= 0 && byteOffset + byteLength <= this.arrayBuffer.byteLength);
      }
      arrayBuffer;
      byteOffset;
      byteLength;
      static fromView(view) {
        return new _ArrayBufferSlice(view.buffer, view.byteOffset, view.byteLength);
      }
      /**
       * Detach this ArrayBufferSlice from its underlying contents, in the hope that the underlying
       * ArrayBuffer storage can be GC'd. Note that this will break any type-safety that the ArrayBufferSlice
       * has. It is a quick fix for where it might be difficult to break reference cycles elswhere.
       * Use with caution!
       */
      destroy() {
        this.arrayBuffer = null;
      }
      /**
       * Return a sub-section of the buffer starting at byte offset {@param begin} and ending at byte
       * offset {@param end}. If no value is provided for end, or it is {@constant 0}, then the end is
       * the same as this {@see ArrayBufferSlice}.
       *
       * If you want a sub-section from a begin and *length* pair, see {@see subarray}.
       *
       * Note that by default, this sub-section is not a copy like {@see ArrayBuffer.prototype.slice},
       * it is a new {@see ArrayBufferSlice} object with the same underlying {@see ArrayBuffer}. However,
       * {@param copyData} can be passed in which will force a copy of the underlying {@see ArrayBuffer}.
       * This can be useful if there are plans to modify the underlying data, or if one wishes to save
       * off a small section of a larger buffer, letting the larger buffer get garbage collected.
       */
      slice(begin, end = 0, copyData = false) {
        const absBegin = this.byteOffset + begin;
        const absEnd = this.byteOffset + (end !== 0 ? end : this.byteLength);
        const byteLength = absEnd - absBegin;
        assert(byteLength >= 0 && byteLength <= this.byteLength);
        if (copyData)
          return new _ArrayBufferSlice(this.arrayBuffer.slice(absBegin, absEnd));
        else
          return new _ArrayBufferSlice(this.arrayBuffer, absBegin, byteLength);
      }
      /**
       * Return a sub-section of the buffer starting at byte offset {@param begin} and ending at byte
       * offset {@param end}. If no value is provided for end, or it is {@constant 0}, then the end is
       * the same as this {@see ArrayBufferSlice}.
       *
       * If you want a sub-section from a begin and *end* byte offset pair, see {@see slice}.
       *
       * Note that by default, this sub-section is not a copy like {@see ArrayBuffer.prototype.slice},
       * it is a new {@see ArrayBufferSlice} object with the same underlying {@see ArrayBuffer}. However,
       * {@param copyData} can be passed in which will force a copy of the underlying {@see ArrayBuffer}.
       * This can be useful if there are plans to modify the underlying data, or if one wishes to save
       * off a small section of a larger buffer, letting the larger buffer get garbage collected.
       */
      subarray(begin, byteLength, copyData = false) {
        const absBegin = this.byteOffset + begin;
        if (byteLength === void 0)
          byteLength = this.byteLength - begin;
        assert(byteLength >= 0 && byteLength <= this.byteLength);
        if (copyData)
          return new _ArrayBufferSlice(this.arrayBuffer.slice(absBegin, absBegin + byteLength));
        else
          return new _ArrayBufferSlice(this.arrayBuffer, absBegin, byteLength);
      }
      /**
       * Return a copy of the sub-section of the array starting at byte offset {@param begin} and with
       * length {@param byteLength}. If no value is provided for {@param begin}, then the sub-section
       * will start where this {@see ArrayBufferSlice} does. If no value is provided for
       * {@param byteLength}, then this sub-section will end where this {@see ArrayBufferSlice} does.
       *
       * Note that this will make a copy of the underlying ArrayBuffer. This should be used sparingly.
       *
       * A good use case for this is if you wish to save off a smaller portion of a larger buffer while
       * letting the larger buffer be garbage collected.
       */
      copyToBuffer(begin = 0, byteLength) {
        const absBegin = this.byteOffset + begin;
        if (byteLength === void 0)
          byteLength = this.byteLength - begin;
        return this.arrayBuffer.slice(absBegin, absBegin + byteLength);
      }
      createDataView(offs = 0, length5) {
        if (offs === 0 && length5 === void 0) {
          return new DataView(this.arrayBuffer, this.byteOffset, this.byteLength);
        } else {
          return this.subarray(offs, length5).createDataView();
        }
      }
      bswap16() {
        assert(this.byteLength % 2 === 0);
        const a = this.createTypedArray(Uint8Array);
        const o = new Uint8Array(this.byteLength);
        for (let i = 0; i < a.byteLength; i += 2) {
          o[i + 0] = a[i + 1];
          o[i + 1] = a[i + 0];
        }
        return new _ArrayBufferSlice(o.buffer);
      }
      bswap32() {
        assert(this.byteLength % 4 === 0);
        const a = this.createTypedArray(Uint8Array);
        const o = new Uint8Array(a.byteLength);
        for (let i = 0; i < a.byteLength; i += 4) {
          o[i + 0] = a[i + 3];
          o[i + 1] = a[i + 2];
          o[i + 2] = a[i + 1];
          o[i + 3] = a[i + 0];
        }
        return new _ArrayBufferSlice(o.buffer);
      }
      bswap(componentSize) {
        if (componentSize === 2) {
          return this.bswap16();
        } else if (componentSize === 4) {
          return this.bswap32();
        } else {
          throw new Error("Invalid componentSize");
        }
      }
      convertFromEndianness(endianness, componentSize) {
        if (componentSize !== 1 && endianness !== getSystemEndianness())
          return this.bswap(componentSize);
        else
          return this;
      }
      createTypedArray(clazz, offs = 0, count, endianness = 0 /* LITTLE_ENDIAN */) {
        const begin = this.byteOffset + offs;
        let byteLength;
        if (count !== void 0) {
          byteLength = clazz.BYTES_PER_ELEMENT * count;
        } else {
          byteLength = this.byteLength - offs;
          count = byteLength / clazz.BYTES_PER_ELEMENT;
          assert((count | 0) === count);
        }
        const componentSize = clazz.BYTES_PER_ELEMENT;
        const needsEndianSwap = componentSize > 1 && endianness !== getSystemEndianness();
        if (needsEndianSwap) {
          const componentSize_ = componentSize;
          const copy6 = this.subarray(offs, byteLength).bswap(componentSize_);
          return copy6.createTypedArray(clazz);
        } else if (isAligned(begin, componentSize)) {
          return new clazz(this.arrayBuffer, begin, count);
        } else {
          return new clazz(this.copyToBuffer(offs, byteLength), 0);
        }
      }
    };
  }
});

// noclip/gfx/platform/GfxPlatformFormat.ts
function getFormatCompFlagsComponentCount(n) {
  return n;
}
function makeFormat(type, comp, flags) {
  return type << 16 | comp << 8 | flags;
}
function getFormatCompFlags(fmt) {
  return fmt >>> 8 & 255;
}
function getFormatTypeFlags(fmt) {
  return fmt >>> 16 & 255;
}
function getFormatFlags(fmt) {
  return fmt & 255;
}
function getFormatTypeFlagsByteSize(typeFlags) {
  switch (typeFlags) {
    case 8 /* F32 */:
    case 3 /* U32 */:
    case 6 /* S32 */:
      return 4;
    case 2 /* U16 */:
    case 5 /* S16 */:
    case 7 /* F16 */:
      return 2;
    case 1 /* U8 */:
    case 4 /* S8 */:
      return 1;
    default:
      throw new Error("whoops");
  }
}
function getFormatCompByteSize(fmt) {
  return getFormatTypeFlagsByteSize(getFormatTypeFlags(fmt));
}
function getFormatComponentCount(fmt) {
  return getFormatCompFlagsComponentCount(getFormatCompFlags(fmt));
}
function getFormatByteSize(fmt) {
  const typeFlags = getFormatTypeFlags(fmt);
  switch (typeFlags) {
    case 97 /* U16_PACKED_5551 */:
    case 98 /* U16_PACKED_565 */:
      return 2;
    case 65 /* BC1 */:
    case 66 /* BC2 */:
    case 67 /* BC3 */:
    case 68 /* BC4_UNORM */:
    case 69 /* BC4_SNORM */:
    case 70 /* BC5_UNORM */:
    case 71 /* BC5_SNORM */:
    case 74 /* BC7 */:
      throw new Error("whoops");
    // Not valid to call on compressed texture formats...
    default:
      const typeByteSize = getFormatTypeFlagsByteSize(typeFlags);
      const componentCount = getFormatCompFlagsComponentCount(getFormatCompFlags(fmt));
      return typeByteSize * componentCount;
  }
}
function getFormatSamplerKind(fmt) {
  const flags = getFormatFlags(fmt);
  if (!!(flags & 4 /* Depth */))
    return 4 /* Depth */;
  if (!!(flags & 1 /* Normalized */))
    return 0 /* Float */;
  const typeFlags = getFormatTypeFlags(fmt);
  if (typeFlags === 8 /* F32 */)
    return 1 /* UnfilterableFloat */;
  else if (typeFlags === 7 /* F16 */)
    return 0 /* Float */;
  else if (typeFlags === 1 /* U8 */ || typeFlags === 2 /* U16 */ || typeFlags === 3 /* U32 */)
    return 2 /* Uint */;
  else if (typeFlags === 4 /* S8 */ || typeFlags === 5 /* S16 */ || typeFlags === 6 /* S32 */)
    return 3 /* Sint */;
  else
    throw new Error("whoops");
}
var GfxFormat;
var init_GfxPlatformFormat = __esm({
  "noclip/gfx/platform/GfxPlatformFormat.ts"() {
    init_GfxPlatform();
    GfxFormat = ((GfxFormat3) => {
      GfxFormat3[GfxFormat3["F16_R"] = makeFormat(7 /* F16 */, 1 /* R */, 0 /* None */)] = "F16_R";
      GfxFormat3[GfxFormat3["F16_RG"] = makeFormat(7 /* F16 */, 2 /* RG */, 0 /* None */)] = "F16_RG";
      GfxFormat3[GfxFormat3["F16_RGB"] = makeFormat(7 /* F16 */, 3 /* RGB */, 0 /* None */)] = "F16_RGB";
      GfxFormat3[GfxFormat3["F16_RGBA"] = makeFormat(7 /* F16 */, 4 /* RGBA */, 0 /* None */)] = "F16_RGBA";
      GfxFormat3[GfxFormat3["F32_R"] = makeFormat(8 /* F32 */, 1 /* R */, 0 /* None */)] = "F32_R";
      GfxFormat3[GfxFormat3["F32_RG"] = makeFormat(8 /* F32 */, 2 /* RG */, 0 /* None */)] = "F32_RG";
      GfxFormat3[GfxFormat3["F32_RGB"] = makeFormat(8 /* F32 */, 3 /* RGB */, 0 /* None */)] = "F32_RGB";
      GfxFormat3[GfxFormat3["F32_RGBA"] = makeFormat(8 /* F32 */, 4 /* RGBA */, 0 /* None */)] = "F32_RGBA";
      GfxFormat3[GfxFormat3["U8_R"] = makeFormat(1 /* U8 */, 1 /* R */, 0 /* None */)] = "U8_R";
      GfxFormat3[GfxFormat3["U8_R_NORM"] = makeFormat(1 /* U8 */, 1 /* R */, 1 /* Normalized */)] = "U8_R_NORM";
      GfxFormat3[GfxFormat3["U8_RG"] = makeFormat(1 /* U8 */, 2 /* RG */, 0 /* None */)] = "U8_RG";
      GfxFormat3[GfxFormat3["U8_RG_NORM"] = makeFormat(1 /* U8 */, 2 /* RG */, 1 /* Normalized */)] = "U8_RG_NORM";
      GfxFormat3[GfxFormat3["U8_RGB"] = makeFormat(1 /* U8 */, 3 /* RGB */, 0 /* None */)] = "U8_RGB";
      GfxFormat3[GfxFormat3["U8_RGBA"] = makeFormat(1 /* U8 */, 4 /* RGBA */, 0 /* None */)] = "U8_RGBA";
      GfxFormat3[GfxFormat3["U8_RGBA_NORM"] = makeFormat(1 /* U8 */, 4 /* RGBA */, 1 /* Normalized */)] = "U8_RGBA_NORM";
      GfxFormat3[GfxFormat3["U8_RGBA_SRGB"] = makeFormat(1 /* U8 */, 4 /* RGBA */, 3)] = "U8_RGBA_SRGB";
      GfxFormat3[GfxFormat3["U16_R"] = makeFormat(2 /* U16 */, 1 /* R */, 0 /* None */)] = "U16_R";
      GfxFormat3[GfxFormat3["U16_R_NORM"] = makeFormat(2 /* U16 */, 1 /* R */, 1 /* Normalized */)] = "U16_R_NORM";
      GfxFormat3[GfxFormat3["U16_RG"] = makeFormat(2 /* U16 */, 2 /* RG */, 0 /* None */)] = "U16_RG";
      GfxFormat3[GfxFormat3["U16_RG_NORM"] = makeFormat(2 /* U16 */, 2 /* RG */, 1 /* Normalized */)] = "U16_RG_NORM";
      GfxFormat3[GfxFormat3["U16_RGB"] = makeFormat(2 /* U16 */, 3 /* RGB */, 0 /* None */)] = "U16_RGB";
      GfxFormat3[GfxFormat3["U16_RGBA"] = makeFormat(2 /* U16 */, 4 /* RGBA */, 0 /* None */)] = "U16_RGBA";
      GfxFormat3[GfxFormat3["U16_RGBA_NORM"] = makeFormat(2 /* U16 */, 4 /* RGBA */, 1 /* Normalized */)] = "U16_RGBA_NORM";
      GfxFormat3[GfxFormat3["U32_R"] = makeFormat(3 /* U32 */, 1 /* R */, 0 /* None */)] = "U32_R";
      GfxFormat3[GfxFormat3["U32_RG"] = makeFormat(3 /* U32 */, 2 /* RG */, 0 /* None */)] = "U32_RG";
      GfxFormat3[GfxFormat3["S8_R"] = makeFormat(4 /* S8 */, 1 /* R */, 0 /* None */)] = "S8_R";
      GfxFormat3[GfxFormat3["S8_RG"] = makeFormat(4 /* S8 */, 2 /* RG */, 0 /* None */)] = "S8_RG";
      GfxFormat3[GfxFormat3["S8_RGBA"] = makeFormat(4 /* S8 */, 4 /* RGBA */, 0 /* None */)] = "S8_RGBA";
      GfxFormat3[GfxFormat3["S8_R_NORM"] = makeFormat(4 /* S8 */, 1 /* R */, 1 /* Normalized */)] = "S8_R_NORM";
      GfxFormat3[GfxFormat3["S8_RG_NORM"] = makeFormat(4 /* S8 */, 2 /* RG */, 1 /* Normalized */)] = "S8_RG_NORM";
      GfxFormat3[GfxFormat3["S8_RGB_NORM"] = makeFormat(4 /* S8 */, 3 /* RGB */, 1 /* Normalized */)] = "S8_RGB_NORM";
      GfxFormat3[GfxFormat3["S8_RGBA_NORM"] = makeFormat(4 /* S8 */, 4 /* RGBA */, 1 /* Normalized */)] = "S8_RGBA_NORM";
      GfxFormat3[GfxFormat3["S16_R"] = makeFormat(5 /* S16 */, 1 /* R */, 0 /* None */)] = "S16_R";
      GfxFormat3[GfxFormat3["S16_RG"] = makeFormat(5 /* S16 */, 2 /* RG */, 0 /* None */)] = "S16_RG";
      GfxFormat3[GfxFormat3["S16_R_NORM"] = makeFormat(5 /* S16 */, 1 /* R */, 1 /* Normalized */)] = "S16_R_NORM";
      GfxFormat3[GfxFormat3["S16_RG_NORM"] = makeFormat(5 /* S16 */, 2 /* RG */, 1 /* Normalized */)] = "S16_RG_NORM";
      GfxFormat3[GfxFormat3["S16_RGB_NORM"] = makeFormat(5 /* S16 */, 3 /* RGB */, 1 /* Normalized */)] = "S16_RGB_NORM";
      GfxFormat3[GfxFormat3["S16_RGBA"] = makeFormat(5 /* S16 */, 4 /* RGBA */, 0 /* None */)] = "S16_RGBA";
      GfxFormat3[GfxFormat3["S16_RGBA_NORM"] = makeFormat(5 /* S16 */, 4 /* RGBA */, 1 /* Normalized */)] = "S16_RGBA_NORM";
      GfxFormat3[GfxFormat3["S32_R"] = makeFormat(6 /* S32 */, 1 /* R */, 0 /* None */)] = "S32_R";
      GfxFormat3[GfxFormat3["U16_RGBA_5551"] = makeFormat(97 /* U16_PACKED_5551 */, 4 /* RGBA */, 1 /* Normalized */)] = "U16_RGBA_5551";
      GfxFormat3[GfxFormat3["U16_RGB_565"] = makeFormat(98 /* U16_PACKED_565 */, 3 /* RGB */, 1 /* Normalized */)] = "U16_RGB_565";
      GfxFormat3[GfxFormat3["BC1"] = makeFormat(65 /* BC1 */, 4 /* RGBA */, 1 /* Normalized */)] = "BC1";
      GfxFormat3[GfxFormat3["BC1_SRGB"] = makeFormat(65 /* BC1 */, 4 /* RGBA */, 3)] = "BC1_SRGB";
      GfxFormat3[GfxFormat3["BC2"] = makeFormat(66 /* BC2 */, 4 /* RGBA */, 1 /* Normalized */)] = "BC2";
      GfxFormat3[GfxFormat3["BC2_SRGB"] = makeFormat(66 /* BC2 */, 4 /* RGBA */, 3)] = "BC2_SRGB";
      GfxFormat3[GfxFormat3["BC3"] = makeFormat(67 /* BC3 */, 4 /* RGBA */, 1 /* Normalized */)] = "BC3";
      GfxFormat3[GfxFormat3["BC3_SRGB"] = makeFormat(67 /* BC3 */, 4 /* RGBA */, 3)] = "BC3_SRGB";
      GfxFormat3[GfxFormat3["BC4_UNORM"] = makeFormat(68 /* BC4_UNORM */, 1 /* R */, 1 /* Normalized */)] = "BC4_UNORM";
      GfxFormat3[GfxFormat3["BC4_SNORM"] = makeFormat(69 /* BC4_SNORM */, 1 /* R */, 1 /* Normalized */)] = "BC4_SNORM";
      GfxFormat3[GfxFormat3["BC5_UNORM"] = makeFormat(70 /* BC5_UNORM */, 2 /* RG */, 1 /* Normalized */)] = "BC5_UNORM";
      GfxFormat3[GfxFormat3["BC5_SNORM"] = makeFormat(71 /* BC5_SNORM */, 2 /* RG */, 1 /* Normalized */)] = "BC5_SNORM";
      GfxFormat3[GfxFormat3["BC6H_UNORM"] = makeFormat(72 /* BC6H_UNORM */, 3 /* RGB */, 1 /* Normalized */)] = "BC6H_UNORM";
      GfxFormat3[GfxFormat3["BC6H_SNORM"] = makeFormat(73 /* BC6H_SNORM */, 3 /* RGB */, 1 /* Normalized */)] = "BC6H_SNORM";
      GfxFormat3[GfxFormat3["BC7"] = makeFormat(74 /* BC7 */, 4 /* RGBA */, 1 /* Normalized */)] = "BC7";
      GfxFormat3[GfxFormat3["BC7_SRGB"] = makeFormat(74 /* BC7 */, 4 /* RGBA */, 3)] = "BC7_SRGB";
      GfxFormat3[GfxFormat3["D24"] = makeFormat(129 /* D24 */, 1 /* R */, 4 /* Depth */)] = "D24";
      GfxFormat3[GfxFormat3["D24_S8"] = makeFormat(131 /* D24S8 */, 2 /* RG */, 12)] = "D24_S8";
      GfxFormat3[GfxFormat3["D32F"] = makeFormat(130 /* D32F */, 1 /* R */, 4 /* Depth */)] = "D32F";
      GfxFormat3[GfxFormat3["D32F_S8"] = makeFormat(132 /* D32FS8 */, 2 /* RG */, 12)] = "D32F_S8";
      GfxFormat3[GfxFormat3["U8_RGB_RT"] = makeFormat(1 /* U8 */, 3 /* RGB */, 17)] = "U8_RGB_RT";
      GfxFormat3[GfxFormat3["U8_RGBA_RT"] = makeFormat(1 /* U8 */, 4 /* RGBA */, 17)] = "U8_RGBA_RT";
      GfxFormat3[GfxFormat3["U8_RGBA_RT_SRGB"] = makeFormat(1 /* U8 */, 4 /* RGBA */, 19)] = "U8_RGBA_RT_SRGB";
      return GfxFormat3;
    })(GfxFormat || {});
  }
});

// noclip/gfx/platform/GfxPlatform.ts
function makeTextureDescriptor2D(pixelFormat, width, height, numLevels) {
  const dimension = 0 /* n2D */, depth = 1;
  const usage = 1 /* Sampled */;
  return { dimension, pixelFormat, width, height, depthOrArrayLayers: depth, numLevels, usage };
}
var init_GfxPlatform = __esm({
  "noclip/gfx/platform/GfxPlatform.ts"() {
    init_GfxPlatformFormat();
  }
});

// noclip/rustlib.ts
function expand(bits, n) {
  if (bits === 3) return (n << 5 | n << 2 | n >> 1) & 255;
  return (n << 8 - bits | n >> bits * 2 - 8) & 255;
}
function rgb5a3(dst, o, p2) {
  if (p2 & 32768) {
    dst[o] = expand(5, p2 >> 10 & 31);
    dst[o + 1] = expand(5, p2 >> 5 & 31);
    dst[o + 2] = expand(5, p2 & 31);
    dst[o + 3] = 255;
  } else {
    dst[o] = expand(4, p2 >> 8 & 15);
    dst[o + 1] = expand(4, p2 >> 4 & 15);
    dst[o + 2] = expand(4, p2 & 15);
    dst[o + 3] = expand(3, p2 >> 12 & 7);
  }
}
function rgb565(dst, o, p2) {
  dst[o] = expand(5, p2 >> 11 & 31);
  dst[o + 1] = expand(6, p2 >> 5 & 63);
  dst[o + 2] = expand(5, p2 & 31);
  dst[o + 3] = 255;
}
function tiled(src, w, h, bw, bh, px) {
  const dst = new Uint8Array(w * h * 4);
  let idx = 0;
  for (let yy = 0; yy < h; yy += bh)
    for (let xx = 0; xx < w; xx += bw)
      for (let y = 0; y < bh; y++)
        for (let x = 0; x < bw; x++, idx++)
          if (xx + x < w && yy + y < h) px(src, idx, dst, ((yy + y) * w + (xx + x)) * 4);
  return dst;
}
function rgba8(src, w, h) {
  const dst = new Uint8Array(w * h * 4);
  let s = 0;
  for (let yy = 0; yy < h; yy += 4)
    for (let xx = 0; xx < w; xx += 4) {
      for (let y = 0; y < 4; y++)
        for (let x = 0; x < 4; x++, s += 2)
          if (xx + x < w && yy + y < h) {
            const o = ((yy + y) * w + xx + x) * 4;
            dst[o + 3] = src[s];
            dst[o] = src[s + 1];
          }
      for (let y = 0; y < 4; y++)
        for (let x = 0; x < 4; x++, s += 2)
          if (xx + x < w && yy + y < h) {
            const o = ((yy + y) * w + xx + x) * 4;
            dst[o + 1] = src[s];
            dst[o + 2] = src[s + 1];
          }
    }
  return dst;
}
function cmpr(src, w, h) {
  const dst = new Uint8Array(w * h * 4), t2 = new Uint8Array(16);
  const s3 = (a, b) => a * 3 + b * 5 >> 3 & 255, half = (a, b) => a + b >> 1;
  let s = 0;
  for (let yy = 0; yy < h; yy += 8)
    for (let xx = 0; xx < w; xx += 8)
      for (let yb = 0; yb < 8; yb += 4)
        for (let xb = 0; xb < 8; xb += 4) {
          const b = s;
          s += 8;
          const c1 = be16(src, b), c2 = be16(src, b + 2);
          rgb565(t2, 0, c1);
          rgb565(t2, 4, c2);
          if (c1 > c2) {
            for (let k = 0; k < 3; k++) {
              t2[8 + k] = s3(t2[4 + k], t2[k]);
              t2[12 + k] = s3(t2[k], t2[4 + k]);
            }
            t2[11] = 255;
            t2[15] = 255;
          } else {
            for (let k = 0; k < 3; k++) {
              t2[8 + k] = half(t2[k], t2[4 + k]);
              t2[12 + k] = t2[8 + k];
            }
            t2[11] = 255;
            t2[15] = 0;
          }
          for (let y = 0; y < 4; y++) {
            let bits = src[b + 4 + y];
            for (let x = 0; x < 4; x++, bits <<= 2) {
              if (xx + xb + x >= w || yy + yb + y >= h) continue;
              const o = ((yy + yb + y) * w + xx + xb + x) * 4, c = (bits >> 6 & 3) * 4;
              dst[o] = t2[c];
              dst[o + 1] = t2[c + 1];
              dst[o + 2] = t2[c + 2];
              dst[o + 3] = t2[c + 3];
            }
          }
        }
  return dst;
}
function palette(fmt, p2) {
  const n = p2.length >> 1, dst = new Uint8Array(n * 4);
  for (let i = 0; i < n; i++) {
    if (fmt === 0 /* IA8 */) {
      dst[i * 4] = dst[i * 4 + 1] = dst[i * 4 + 2] = p2[i * 2 + 1];
      dst[i * 4 + 3] = p2[i * 2];
    } else if (fmt === 1 /* RGB565 */) rgb565(dst, i * 4, be16(p2, i * 2));
    else rgb5a3(dst, i * 4, be16(p2, i * 2));
  }
  return dst;
}
function decode_texture(fmt, paletteFmt, src, paletteSrc, w, h) {
  const copy6 = (pal, dst, o, i) => {
    dst[o] = pal[i * 4];
    dst[o + 1] = pal[i * 4 + 1];
    dst[o + 2] = pal[i * 4 + 2];
    dst[o + 3] = pal[i * 4 + 3];
  };
  switch (fmt) {
    case 0 /* I4 */:
      return tiled(src, w, h, 8, 8, (s, i, d, o) => {
        d[o] = d[o + 1] = d[o + 2] = d[o + 3] = expand(4, s[i >> 1] >> (i & 1 ? 0 : 4) & 15);
      });
    case 1 /* I8 */:
      return tiled(src, w, h, 8, 4, (s, i, d, o) => {
        d[o] = d[o + 1] = d[o + 2] = d[o + 3] = s[i];
      });
    case 2 /* IA4 */:
      return tiled(src, w, h, 8, 4, (s, i, d, o) => {
        d[o] = d[o + 1] = d[o + 2] = expand(4, s[i] & 15);
        d[o + 3] = expand(4, s[i] >> 4);
      });
    case 3 /* IA8 */:
      return tiled(src, w, h, 4, 4, (s, i, d, o) => {
        d[o] = d[o + 1] = d[o + 2] = s[i * 2 + 1];
        d[o + 3] = s[i * 2];
      });
    case 4 /* RGB565 */:
      return tiled(src, w, h, 4, 4, (s, i, d, o) => rgb565(d, o, be16(s, i * 2)));
    case 5 /* RGB5A3 */:
      return tiled(src, w, h, 4, 4, (s, i, d, o) => rgb5a3(d, o, be16(s, i * 2)));
    case 6 /* RGBA8 */:
      return rgba8(src, w, h);
    case 7 /* CMPR */:
      return cmpr(src, w, h);
    case 8 /* C4 */: {
      const pal = palette(paletteFmt, paletteSrc);
      return tiled(src, w, h, 8, 8, (s, i, d, o) => copy6(pal, d, o, s[i >> 1] >> (i & 1 ? 0 : 4) & 15));
    }
    case 9 /* C8 */: {
      const pal = palette(paletteFmt, paletteSrc);
      return tiled(src, w, h, 8, 4, (s, i, d, o) => copy6(pal, d, o, s[i]));
    }
    case 10 /* C14X2 */: {
      const pal = palette(paletteFmt, paletteSrc);
      return tiled(src, w, h, 4, 4, (s, i, d, o) => copy6(pal, d, o, be16(s, i * 2) & 16383));
    }
  }
}
function yaz0dec(src) {
  const size = (src[4] << 24 | src[5] << 16 | src[6] << 8 | src[7]) >>> 0;
  const dst = new Uint8Array(size);
  let s = 16, d = 0;
  while (d < size) {
    const cmd = src[s++];
    for (let i = 7; i >= 0 && d < size; i--) {
      if (cmd & 1 << i) {
        dst[d++] = src[s++];
        continue;
      }
      const b0 = src[s++], b1 = src[s++];
      const back = ((b0 & 15) << 8 | b1) + 1;
      let n = b0 >> 4;
      n = n === 0 ? src[s++] + 18 : n + 2;
      for (let k = 0; k < n; k++, d++) dst[d] = dst[d - back];
    }
  }
  return dst;
}
var PixelFormat, PaletteFormat, be16, ConvexHull, rust;
var init_rustlib = __esm({
  "noclip/rustlib.ts"() {
    PixelFormat = /* @__PURE__ */ ((PixelFormat2) => {
      PixelFormat2[PixelFormat2["I4"] = 0] = "I4";
      PixelFormat2[PixelFormat2["I8"] = 1] = "I8";
      PixelFormat2[PixelFormat2["IA4"] = 2] = "IA4";
      PixelFormat2[PixelFormat2["IA8"] = 3] = "IA8";
      PixelFormat2[PixelFormat2["RGB565"] = 4] = "RGB565";
      PixelFormat2[PixelFormat2["RGB5A3"] = 5] = "RGB5A3";
      PixelFormat2[PixelFormat2["RGBA8"] = 6] = "RGBA8";
      PixelFormat2[PixelFormat2["CMPR"] = 7] = "CMPR";
      PixelFormat2[PixelFormat2["C4"] = 8] = "C4";
      PixelFormat2[PixelFormat2["C8"] = 9] = "C8";
      PixelFormat2[PixelFormat2["C14X2"] = 10] = "C14X2";
      return PixelFormat2;
    })(PixelFormat || {});
    PaletteFormat = /* @__PURE__ */ ((PaletteFormat2) => {
      PaletteFormat2[PaletteFormat2["IA8"] = 0] = "IA8";
      PaletteFormat2[PaletteFormat2["RGB565"] = 1] = "RGB565";
      PaletteFormat2[PaletteFormat2["RGB5A3"] = 2] = "RGB5A3";
      return PaletteFormat2;
    })(PaletteFormat || {});
    be16 = (s, o) => s[o] << 8 | s[o + 1];
    ConvexHull = class _ConvexHull {
      p = [];
      // nx, ny, nz, d per plane, normalized
      clear() {
        this.p.length = 0;
      }
      free() {
      }
      copy() {
        const c = new _ConvexHull();
        c.p = this.p.slice();
        return c;
      }
      push_plane(x, y, z, d) {
        const m = Math.hypot(x, y, z) || 1;
        this.p.push(x / m, y / m, z / m, d / m);
      }
      js_intersect_aabb(x0, y0, z0, x1, y1, z1) {
        let r = 0;
        const p2 = this.p;
        for (let i = 0; i < p2.length; i += 4) {
          const nx = p2[i], ny = p2[i + 1], nz = p2[i + 2], d = p2[i + 3];
          if (nx * (nx >= 0 ? x1 : x0) + ny * (ny >= 0 ? y1 : y0) + nz * (nz >= 0 ? z1 : z0) + d < 0) return 1;
          if (nx * (nx >= 0 ? x0 : x1) + ny * (ny >= 0 ? y0 : y1) + nz * (nz >= 0 ? z0 : z1) + d < 0) r = 2;
        }
        return r;
      }
      js_contains_aabb(x0, y0, z0, x1, y1, z1) {
        const p2 = this.p;
        for (let i = 0; i < p2.length; i += 4) {
          const nx = p2[i], ny = p2[i + 1], nz = p2[i + 2], d = p2[i + 3];
          if (nx * (nx >= 0 ? x1 : x0) + ny * (ny >= 0 ? y1 : y0) + nz * (nz >= 0 ? z1 : z0) + d < 0) return false;
        }
        return true;
      }
      js_contains_sphere(x, y, z, r) {
        const p2 = this.p;
        for (let i = 0; i < p2.length; i += 4) if (p2[i] * x + p2[i + 1] * y + p2[i + 2] * z + p2[i + 3] < -r) return false;
        return true;
      }
      js_contains_point(v) {
        const p2 = this.p;
        for (let i = 0; i < p2.length; i += 4) if (p2[i] * v[0] + p2[i + 1] * v[1] + p2[i + 2] * v[2] + p2[i + 3] < 0) return false;
        return true;
      }
      js_transform(m) {
        const a = m, inv = new Float64Array(16);
        const b00 = a[0] * a[5] - a[1] * a[4], b01 = a[0] * a[6] - a[2] * a[4], b02 = a[0] * a[7] - a[3] * a[4], b03 = a[1] * a[6] - a[2] * a[5];
        const b04 = a[1] * a[7] - a[3] * a[5], b05 = a[2] * a[7] - a[3] * a[6], b06 = a[8] * a[13] - a[9] * a[12], b07 = a[8] * a[14] - a[10] * a[12];
        const b08 = a[8] * a[15] - a[11] * a[12], b09 = a[9] * a[14] - a[10] * a[13], b10 = a[9] * a[15] - a[11] * a[13], b11 = a[10] * a[15] - a[11] * a[14];
        const det = 1 / (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06);
        inv[0] = (a[5] * b11 - a[6] * b10 + a[7] * b09) * det;
        inv[1] = (a[2] * b10 - a[1] * b11 - a[3] * b09) * det;
        inv[2] = (a[13] * b05 - a[14] * b04 + a[15] * b03) * det;
        inv[3] = (a[10] * b04 - a[9] * b05 - a[11] * b03) * det;
        inv[4] = (a[6] * b08 - a[4] * b11 - a[7] * b07) * det;
        inv[5] = (a[0] * b11 - a[2] * b08 + a[3] * b07) * det;
        inv[6] = (a[14] * b02 - a[12] * b05 - a[15] * b01) * det;
        inv[7] = (a[8] * b05 - a[10] * b02 + a[11] * b01) * det;
        inv[8] = (a[4] * b10 - a[5] * b08 + a[7] * b06) * det;
        inv[9] = (a[1] * b08 - a[0] * b10 - a[3] * b06) * det;
        inv[10] = (a[12] * b04 - a[13] * b02 + a[15] * b00) * det;
        inv[11] = (a[9] * b02 - a[8] * b04 - a[11] * b00) * det;
        inv[12] = (a[5] * b07 - a[4] * b09 - a[6] * b06) * det;
        inv[13] = (a[0] * b09 - a[1] * b07 + a[2] * b06) * det;
        inv[14] = (a[13] * b01 - a[12] * b03 - a[14] * b00) * det;
        inv[15] = (a[8] * b03 - a[9] * b01 + a[10] * b00) * det;
        const p2 = this.p;
        for (let i = 0; i < p2.length; i += 4) {
          const x = p2[i], y = p2[i + 1], z = p2[i + 2], w = p2[i + 3];
          p2[i] = inv[0] * x + inv[1] * y + inv[2] * z + inv[3] * w;
          p2[i + 1] = inv[4] * x + inv[5] * y + inv[6] * z + inv[7] * w;
          p2[i + 2] = inv[8] * x + inv[9] * y + inv[10] * z + inv[11] * w;
          p2[i + 3] = inv[12] * x + inv[13] * y + inv[14] * z + inv[15] * w;
        }
      }
    };
    rust = { PixelFormat, PaletteFormat, decode_texture, yaz0dec, ConvexHull };
  }
});

// noclip/MathHelpers.ts
function computeModelMatrixS(dst, scaleX, scaleY = scaleX, scaleZ = scaleX) {
  dst[0] = scaleX;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = scaleY;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = scaleZ;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
}
function computeModelMatrixR(dst, rotationX, rotationY, rotationZ) {
  const sinX = Math.sin(rotationX), cosX = Math.cos(rotationX);
  const sinY = Math.sin(rotationY), cosY = Math.cos(rotationY);
  const sinZ = Math.sin(rotationZ), cosZ = Math.cos(rotationZ);
  dst[0] = cosY * cosZ;
  dst[1] = cosY * sinZ;
  dst[2] = -sinY;
  dst[3] = 0;
  dst[4] = sinX * cosZ * sinY - cosX * sinZ;
  dst[5] = sinX * sinZ * sinY + cosX * cosZ;
  dst[6] = sinX * cosY;
  dst[7] = 0;
  dst[8] = cosX * cosZ * sinY + sinX * sinZ;
  dst[9] = cosX * sinZ * sinY - sinX * cosZ;
  dst[10] = cosY * cosX;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
}
function transformVec3Mat4w1(dst, m, v) {
  const x = v[0], y = v[1], z = v[2];
  dst[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
  dst[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
  dst[2] = m[2] * x + m[6] * y + m[10] * z + m[14];
}
function transformVec3Mat4w0(dst, m, v) {
  const x = v[0], y = v[1], z = v[2];
  dst[0] = m[0] * x + m[4] * y + m[8] * z;
  dst[1] = m[1] * x + m[5] * y + m[9] * z;
  dst[2] = m[2] * x + m[6] * y + m[10] * z;
}
function computeMatrixWithoutTranslation(dst, m) {
  mat4_exports.copy(dst, m);
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
}
function clamp(v, min4, max4) {
  return Math.max(min4, Math.min(v, max4));
}
function saturate(v) {
  return clamp(v, 0, 1);
}
function clampRange(v, lim) {
  return clamp(v, -lim, lim);
}
function lerp5(a, b, t2) {
  return a + (b - a) * t2;
}
function smoothstep(t2) {
  return t2 * t2 * (3 - t2 * 2);
}
function projectionMatrixForFrustum(m, left, right, bottom, top, near, far) {
  const rl = 1 / (right - left);
  const tb = 1 / (top - bottom);
  m[0] = near * 2 * rl;
  m[1] = 0;
  m[2] = 0;
  m[3] = 0;
  m[4] = 0;
  m[5] = near * 2 * tb;
  m[6] = 0;
  m[7] = 0;
  m[8] = (right + left) * rl;
  m[9] = (top + bottom) * tb;
  m[11] = -1;
  m[12] = 0;
  m[13] = 0;
  m[15] = 0;
  if (far !== Infinity) {
    const nf = 1 / (near - far);
    m[10] = (far + near) * nf;
    m[14] = far * near * 2 * nf;
  } else {
    m[10] = -1;
    m[14] = -2 * near;
  }
}
function projectionMatrixForCuboid(m, left, right, bottom, top, near, far) {
  const rl = 1 / (right - left);
  const tb = 1 / (top - bottom);
  const nf = 1 / (near - far);
  m[0] = 2 * rl;
  m[1] = 0;
  m[2] = 0;
  m[3] = 0;
  m[4] = 0;
  m[5] = 2 * tb;
  m[6] = 0;
  m[7] = 0;
  m[8] = 0;
  m[9] = 0;
  m[10] = 2 * nf;
  m[11] = 0;
  m[12] = -(right + left) * rl;
  m[13] = -(top + bottom) * tb;
  m[14] = (far + near) * nf;
  m[15] = 1;
}
function isNearZeroVec3(v, min4) {
  return v[0] > -min4 && v[0] < min4 && v[1] > -min4 && v[1] < min4 && v[2] > -min4 && v[2] < min4;
}
function quatFromEulerRadians(dst, x, y, z) {
  const sx = Math.sin(0.5 * x), cx = Math.cos(0.5 * x);
  const sy = Math.sin(0.5 * y), cy = Math.cos(0.5 * y);
  const sz = Math.sin(0.5 * z), cz = Math.cos(0.5 * z);
  dst[0] = sx * cy * cz - cx * sy * sz;
  dst[1] = cx * sy * cz + sx * cy * sz;
  dst[2] = cx * cy * sz - sx * sy * cz;
  dst[3] = cx * cy * cz + sx * sy * sz;
}
function getMatrixAxisX(dst, m) {
  vec3_exports.set(dst, m[0], m[1], m[2]);
}
function getMatrixAxisY(dst, m) {
  vec3_exports.set(dst, m[4], m[5], m[6]);
}
function getMatrixAxisZ(dst, m) {
  vec3_exports.set(dst, m[8], m[9], m[10]);
}
function getMatrixAxis(dstX, dstY, dstZ, m) {
  if (dstX !== null)
    vec3_exports.set(dstX, m[0], m[1], m[2]);
  if (dstY !== null)
    vec3_exports.set(dstY, m[4], m[5], m[6]);
  if (dstZ !== null)
    vec3_exports.set(dstZ, m[8], m[9], m[10]);
}
function setMatrixAxis(m, axisX, axisY, axisZ) {
  if (axisX !== null) {
    m[0] = axisX[0];
    m[1] = axisX[1];
    m[2] = axisX[2];
  }
  if (axisY !== null) {
    m[4] = axisY[0];
    m[5] = axisY[1];
    m[6] = axisY[2];
  }
  if (axisZ !== null) {
    m[8] = axisZ[0];
    m[9] = axisZ[1];
    m[10] = axisZ[2];
  }
}
function getMatrixTranslation(dst, m) {
  vec3_exports.set(dst, m[12], m[13], m[14]);
}
function setMatrixTranslation(dst, v) {
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
}
function vec3SetAll(dst, v) {
  vec3_exports.set(dst, v, v, v);
}
function vec3FromBasis2(dst, pt, b0, s0, b1, s1) {
  dst[0] = pt[0] + b0[0] * s0 + b1[0] * s1;
  dst[1] = pt[1] + b0[1] * s0 + b1[1] * s1;
  dst[2] = pt[2] + b0[2] * s0 + b1[2] * s1;
}
function vec3FromBasis3(dst, pt, b0, s0, b1, s1, b2, s2) {
  dst[0] = pt[0] + b0[0] * s0 + b1[0] * s1 + b2[0] * s2;
  dst[1] = pt[1] + b0[1] * s0 + b1[1] * s1 + b2[1] * s2;
  dst[2] = pt[2] + b0[2] * s0 + b1[2] * s1 + b2[2] * s2;
}
function calcBillboardMatrix(dst, m, flags, axisY = null) {
  const mx = Math.hypot(m[0], m[1], m[2]);
  const my = Math.hypot(m[4], m[5], m[6]);
  const mz = Math.hypot(m[8], m[9], m[10]);
  if (flags === (1 /* UseRollGlobal */ | 0 /* PriorityZ */ | 0 /* UseZPlane */)) {
    dst[0] = mx;
    dst[1] = 0;
    dst[2] = 0;
    dst[4] = 0;
    dst[5] = my;
    dst[6] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = mz;
  } else if (flags === (1 /* UseRollGlobal */ | 2 /* PriorityY */ | 0 /* UseZPlane */)) {
    vec3_exports.set(scratchVec3a, 0, -m[6], m[5]);
    vec3_exports.normalize(scratchVec3a, scratchVec3a);
    dst[0] = mx;
    dst[1] = 0;
    dst[2] = 0;
    dst[4] = m[4];
    dst[5] = m[5];
    dst[6] = m[6];
    dst[8] = 0;
    dst[9] = scratchVec3a[1] * mz;
    dst[10] = scratchVec3a[2] * mz;
  } else if (flags === (0 /* UseRollLocal */ | 0 /* PriorityZ */ | 0 /* UseZPlane */)) {
    vec3_exports.set(scratchVec3a, m[4], m[5], 0);
    vec3_exports.normalize(scratchVec3a, scratchVec3a);
    dst[0] = mx * scratchVec3a[1];
    dst[1] = mx * -scratchVec3a[0];
    dst[2] = 0;
    dst[4] = my * scratchVec3a[0];
    dst[5] = my * scratchVec3a[1];
    dst[6] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = mz;
  } else {
    const InputZ = scratchVec3a;
    if (!!(flags & 4 /* UseZSphere */)) {
      vec3_exports.set(InputZ, -m[12], -m[13], -m[14]);
      vec3_exports.normalize(InputZ, InputZ);
    } else {
      vec3_exports.set(InputZ, 0, 0, 1);
    }
    const InputYRoll = scratchVec3b;
    if (!!(flags & 1 /* UseRollGlobal */))
      vec3_exports.set(InputYRoll, 0, 1, 0);
    else if (axisY !== null)
      vec3_exports.copy(InputYRoll, axisY);
    else
      vec3_exports.set(InputYRoll, m[4] / my, m[5] / my, m[6] / my);
    const Z = InputZ;
    const X = InputYRoll;
    vec3_exports.cross(X, InputYRoll, Z);
    vec3_exports.normalize(X, X);
    const Y = scratchVec3c;
    if (!!(flags & 2 /* PriorityY */)) {
      if (axisY !== null)
        vec3_exports.copy(Y, axisY);
      else
        vec3_exports.set(Y, m[4] / my, m[5] / my, m[6] / my);
      vec3_exports.cross(Z, X, Y);
      vec3_exports.normalize(Z, Z);
    } else {
      vec3_exports.cross(Y, Z, X);
      vec3_exports.normalize(Y, Y);
    }
    dst[0] = mx * X[0];
    dst[1] = mx * X[1];
    dst[2] = mx * X[2];
    dst[4] = my * Y[0];
    dst[5] = my * Y[1];
    dst[6] = my * Y[2];
    dst[8] = mz * Z[0];
    dst[9] = mz * Z[1];
    dst[10] = mz * Z[2];
  }
  dst[12] = m[12];
  dst[13] = m[13];
  dst[14] = m[14];
  dst[3] = 0;
  dst[7] = 0;
  dst[11] = 0;
  dst[15] = 1;
}
var Vec3Zero, Vec3One, Vec3UnitX, Vec3UnitY, Vec3UnitZ, Vec3NegX, Vec3NegY, Vec3NegZ, Mat4Identity, scratchVec3a, scratchVec3b, scratchVec3c, scratchVec3d, scratchVec3e, baseBuffer, asFloat32, asUint32;
var init_MathHelpers = __esm({
  "noclip/MathHelpers.ts"() {
    init_esm();
    Vec3Zero = vec3_exports.fromValues(0, 0, 0);
    Vec3One = vec3_exports.fromValues(1, 1, 1);
    Vec3UnitX = vec3_exports.fromValues(1, 0, 0);
    Vec3UnitY = vec3_exports.fromValues(0, 1, 0);
    Vec3UnitZ = vec3_exports.fromValues(0, 0, 1);
    Vec3NegX = vec3_exports.fromValues(-1, 0, 0);
    Vec3NegY = vec3_exports.fromValues(0, -1, 0);
    Vec3NegZ = vec3_exports.fromValues(0, 0, -1);
    Mat4Identity = mat4_exports.fromValues(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    scratchVec3a = vec3_exports.create();
    scratchVec3b = vec3_exports.create();
    scratchVec3c = vec3_exports.create();
    scratchVec3d = vec3_exports.create();
    scratchVec3e = vec3_exports.create();
    baseBuffer = new ArrayBuffer(4);
    asFloat32 = new Float32Array(baseBuffer);
    asUint32 = new Uint32Array(baseBuffer);
  }
});

// noclip/Geometry.ts
var scratchVec4, scratchMatrix, Plane, scratchVec3a2, scratchVec3b2, AABB, Frustum;
var init_Geometry = __esm({
  "noclip/Geometry.ts"() {
    init_esm();
    init_GfxPlatform();
    init_util();
    init_rustlib();
    init_MathHelpers();
    scratchVec4 = vec4_exports.create();
    scratchMatrix = mat4_exports.create();
    Plane = class _Plane {
      constructor(x = 0, y = 0, z = 0, d = 0) {
        this.d = d;
        vec3_exports.set(this.n, x, y, z);
      }
      d;
      static scratchVec3 = nArray(2, () => vec3_exports.create());
      n = vec3_exports.create();
      set(n, d) {
        vec3_exports.copy(this.n, n);
        this.d = d;
      }
      copy(o) {
        this.set(o.n, o.d);
      }
      negate() {
        vec3_exports.negate(this.n, this.n);
        this.d *= -1;
      }
      distance(x, y, z) {
        const nx = this.n[0], ny = this.n[1], nz = this.n[2];
        const dot5 = x * nx + y * ny + z * nz;
        return dot5 + this.d;
      }
      distanceVec3(p2) {
        return vec3_exports.dot(p2, this.n) + this.d;
      }
      // Assumes input normal is not normalized.
      set4Unnormalized(nx, ny, nz, d) {
        const h = Math.hypot(nx, ny, nz);
        vec3_exports.set(this.n, nx / h, ny / h, nz / h);
        this.d = d / h;
      }
      getVec4v(dst) {
        vec4_exports.set(dst, this.n[0], this.n[1], this.n[2], this.d);
      }
      setVec4v(v) {
        vec3_exports.set(this.n, v[0], v[1], v[2]);
        this.d = v[3];
      }
      setTri(p0, p1, p2) {
        const scratch = _Plane.scratchVec3;
        vec3_exports.sub(scratch[0], p1, p0);
        vec3_exports.sub(scratch[1], p2, p0);
        vec3_exports.cross(this.n, scratch[0], scratch[1]);
        vec3_exports.normalize(this.n, this.n);
        this.d = -vec3_exports.dot(this.n, p0);
      }
      projectToPlane(dst, pt) {
        vec3_exports.scaleAndAdd(dst, pt, this.n, -this.distanceVec3(pt));
      }
      intersectLine(dst, p0, dir) {
        const t2 = -this.distanceVec3(p0) / vec3_exports.dot(this.n, dir);
        vec3_exports.scaleAndAdd(dst, p0, dir, t2);
      }
      // Compute point where line segment intersects plane
      intersectLineSegment(dst, p0, p1) {
        const dir = _Plane.scratchVec3[1];
        vec3_exports.sub(dir, p1, p0);
        this.intersectLine(dst, p0, dir);
      }
      transform(mtx) {
        this.getVec4v(scratchVec4);
        mat4_exports.invert(scratchMatrix, mtx);
        mat4_exports.transpose(scratchMatrix, scratchMatrix);
        vec4_exports.transformMat4(scratchVec4, scratchVec4, scratchMatrix);
        this.setVec4v(scratchVec4);
      }
    };
    scratchVec3a2 = vec3_exports.create();
    scratchVec3b2 = vec3_exports.create();
    AABB = class _AABB {
      min = vec3_exports.create();
      max = vec3_exports.create();
      constructor(minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity) {
        vec3_exports.set(this.min, minX, minY, minZ);
        vec3_exports.set(this.max, maxX, maxY, maxZ);
      }
      /**
       * Sets this AABB to the result after transforming {@param src} by the matrix {@param m}.
       * Note that information loss is expected if rotated by non-90 degree increments, as an AABB
       * can grow larger when rotated and will never shrink; this loss can build up if repeatedly
       * transformed. As such, if wanting to transform an AABB by a chain of transformations, it is
       * always better to combine the transformations together and transform the AABB once, instead
       * of repeatedly transforming the AABB one at a time.
       */
      transform(src, m) {
        getMatrixTranslation(scratchVec3a2, m);
        getMatrixTranslation(scratchVec3b2, m);
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            const a = m[i * 4 + j] * src.min[i];
            const b = m[i * 4 + j] * src.max[i];
            scratchVec3a2[j] += Math.min(a, b);
            scratchVec3b2[j] += Math.max(a, b);
          }
        }
        vec3_exports.copy(this.min, scratchVec3a2);
        vec3_exports.copy(this.max, scratchVec3b2);
      }
      offset(src, offset) {
        vec3_exports.add(this.min, src.min, offset);
        vec3_exports.add(this.max, src.max, offset);
      }
      expandByExtent(src, extent) {
        vec3_exports.sub(this.min, src.min, extent);
        vec3_exports.add(this.max, src.max, extent);
      }
      set(minX, minY, minZ, maxX, maxY, maxZ) {
        vec3_exports.set(this.min, minX, minY, minZ);
        vec3_exports.set(this.max, maxX, maxY, maxZ);
      }
      reset() {
        vec3SetAll(this.min, Infinity);
        vec3SetAll(this.max, -Infinity);
      }
      copy(other) {
        vec3_exports.copy(this.min, other.min);
        vec3_exports.copy(this.max, other.max);
      }
      clone() {
        const aabb = new _AABB();
        aabb.copy(this);
        return aabb;
      }
      /**
       * Sets this AABB to the union of {@param a} and {@param b}.
       */
      union(a, b) {
        vec3_exports.min(this.min, a.min, b.min);
        vec3_exports.max(this.max, a.max, b.max);
      }
      /**
       * Sets this AABB to be the AABB formed by the set of all points given in {@param points}.
       */
      setFromPoints(points) {
        this.reset();
        for (let i = 0; i < points.length; i++) {
          const p2 = points[i];
          vec3_exports.min(this.min, this.min, p2);
          vec3_exports.max(this.max, this.max, p2);
        }
      }
      /**
       * Adds the point {@param v} to the AABB.
       * If the point was outside the AABB, the AABB is updated to contain the point and {@constant true} is returned.
       * Otherwise, the AABB is unchanged, and this function returns {@constant false}.
       */
      unionPoint(v) {
        let changed = false;
        if (v[0] < this.min[0]) {
          this.min[0] = v[0];
          changed = true;
        }
        if (v[1] < this.min[1]) {
          this.min[1] = v[1];
          changed = true;
        }
        if (v[2] < this.min[2]) {
          this.min[2] = v[2];
          changed = true;
        }
        if (v[0] > this.max[0]) {
          this.max[0] = v[0];
          changed = true;
        }
        if (v[1] > this.max[1]) {
          this.max[1] = v[1];
          changed = true;
        }
        if (v[2] > this.max[2]) {
          this.max[2] = v[2];
          changed = true;
        }
        return changed;
      }
      /**
       * Returns whether the two AABBs given by {@param a} and {@param b} overlap at all.
       */
      static intersect(a, b) {
        return !(a.min[0] > b.max[0] || b.min[0] > a.max[0] || a.min[1] > b.max[1] || b.min[1] > a.max[1] || a.min[2] > b.max[2] || b.min[2] > a.max[2]);
      }
      /**
       * Returns whether a point {@param v} is inside the bounds of this box.
       */
      containsPoint(v) {
        const pX = v[0], pY = v[1], pZ = v[2];
        return !(pX < this.min[0] || pX > this.max[0] || pY < this.min[1] || pY > this.max[1] || pZ < this.min[2] || pZ > this.max[2]);
      }
      containsSphere(v, rad) {
        const pX = v[0], pY = v[1], pZ = v[2];
        return !(pX < this.min[0] - rad || pX > this.max[0] + rad || pY < this.min[1] - rad || pY > this.max[1] + rad || pZ < this.min[2] - rad || pZ > this.max[2] + rad);
      }
      /**
       * Retrieves the half-extents of this AABB into {@param dst}.
       */
      getHalfExtents(dst) {
        dst[0] = Math.max((this.max[0] - this.min[0]) * 0.5, 0);
        dst[1] = Math.max((this.max[1] - this.min[1]) * 0.5, 0);
        dst[2] = Math.max((this.max[2] - this.min[2]) * 0.5, 0);
      }
      /**
       * Returns the diagonal length.
       */
      diagonalLengthSquared() {
        const dx = this.max[0] - this.min[0];
        const dy = this.max[1] - this.min[1];
        const dz = this.max[2] - this.min[2];
        return dx * dx + dy * dy + dz * dz;
      }
      /**
       * Returns the center point of this AABB into {@param dst}.
       */
      centerPoint(dst) {
        dst[0] = (this.min[0] + this.max[0]) / 2;
        dst[1] = (this.min[1] + this.max[1]) / 2;
        dst[2] = (this.min[2] + this.max[2]) / 2;
      }
      /**
       * Constructs an AABB given a center point {@param center} and a half-extents vector {@param halfExtents}.
       */
      setFromCenterAndHalfExtents(center, halfExtents) {
        vec3_exports.sub(this.min, center, halfExtents);
        vec3_exports.add(this.max, center, halfExtents);
      }
      /**
       * Returns a corner of the AABB, the specific one being given by {@param i}.
       * The corners will be returned in an arbitrary order.
       */
      cornerPoint(dst, i) {
        assert(i < 8, "An AABB only has eight corner points");
        dst[0] = i & 1 ? this.min[0] : this.max[0];
        dst[1] = i & 2 ? this.min[1] : this.max[1];
        dst[2] = i & 4 ? this.min[2] : this.max[2];
      }
      /**
       * Returns the length of the half-diagonal vector of the AABB, which is also
       * the smallest radius of a sphere that surrounds this box.
       */
      boundingSphereRadius() {
        const extX = this.max[0] - this.min[0];
        const extY = this.max[1] - this.min[1];
        const extZ = this.max[2] - this.min[2];
        const chord = Math.hypot(extX, extY, extZ);
        return chord / 2;
      }
      maxCornerRadius() {
        const x = Math.max(this.max[0], -this.min[0]);
        const y = Math.max(this.max[1], -this.min[1]);
        const z = Math.max(this.max[2], -this.min[2]);
        return Math.hypot(x, y, z);
      }
      /**
       * Returns whether an AABB has zero length on *all* axes. Does not necessarily imply it has 3D volume.
       */
      isEmpty() {
        return this.min[0] >= this.max[0] && this.min[1] >= this.max[1] && this.min[2] >= this.max[2];
      }
      /**
       * Returns the distance from the center of this AABB to an arbitrary point {@param v}.
       */
      distFromCenter(v) {
        this.centerPoint(scratchVec3a2);
        return vec3_exports.distance(v, scratchVec3a2);
      }
      /**
       * Returns the squared distance from {@param v} to the point closest to {@param v} on this AABB.
       * Will be 0 if the point is inside the AABB.
       */
      sqDistFromClosestPoint(v) {
        const pX = v[0], pY = v[1], pZ = v[2];
        let sqDist = 0;
        if (pX < this.min[0])
          sqDist += (this.min[0] - pX) ** 2;
        else if (pX > this.max[0])
          sqDist += (pX - this.max[0]) ** 2;
        if (pY < this.min[1])
          sqDist += (this.min[1] - pY) ** 2;
        else if (pY > this.max[1])
          sqDist += (pY - this.max[1]) ** 2;
        if (pZ < this.min[2])
          sqDist += (this.min[2] - pZ) ** 2;
        else if (pZ > this.max[2])
          sqDist += (pZ - this.max[2]) ** 2;
        return sqDist;
      }
      /**
       * Returns the distance from {@param v} to the point closest to {@param v} on this AABB.
       * Will return 0 if the point is inside the AABB.
       */
      distFromClosestPoint(v) {
        return Math.sqrt(this.sqDistFromClosestPoint(v));
      }
    };
    Frustum = class _Frustum {
      convexHull;
      constructor(convexHull) {
        this.convexHull = convexHull ?? new rust.ConvexHull();
      }
      updateClipFrustum(m, clipSpaceNearZ) {
        const h = this.convexHull;
        h.clear();
        h.push_plane(m[3] + m[0], m[7] + m[4], m[11] + m[8], m[15] + m[12]);
        h.push_plane(m[3] + m[1], m[7] + m[5], m[11] + m[9], m[15] + m[13]);
        h.push_plane(m[3] - m[0], m[7] - m[4], m[11] - m[8], m[15] - m[12]);
        h.push_plane(m[3] - m[1], m[7] - m[5], m[11] - m[9], m[15] - m[13]);
        if (clipSpaceNearZ === -1 /* NegativeOne */) {
          h.push_plane(m[3] + m[2], m[7] + m[6], m[11] + m[10], m[15] + m[14]);
        } else if (clipSpaceNearZ === 0 /* Zero */) {
          h.push_plane(m[2], m[6], m[10], m[14]);
        }
        h.push_plane(m[3] - m[2], m[7] - m[6], m[11] - m[10], m[15] - m[14]);
      }
      copy(o) {
        this.convexHull.free();
        this.convexHull = o.convexHull.copy();
      }
      clone() {
        return new _Frustum(this.convexHull.copy());
      }
      intersect(aabb) {
        return this.convexHull.js_intersect_aabb(aabb.min[0], aabb.min[1], aabb.min[2], aabb.max[0], aabb.max[1], aabb.max[2]);
      }
      contains(aabb) {
        return this.convexHull.js_contains_aabb(aabb.min[0], aabb.min[1], aabb.min[2], aabb.max[0], aabb.max[1], aabb.max[2]);
      }
      containsSphere(v, radius) {
        return this.convexHull.js_contains_sphere(v[0], v[1], v[2], radius);
      }
      containsPoint(v) {
        return this.convexHull.js_contains_point(v);
      }
      transform(src, m) {
        this.copy(src);
        return this.convexHull.js_transform(m);
      }
      getRust() {
        return this.convexHull;
      }
    };
  }
});

// noclip/gfx/helpers/ProjectionHelpers.ts
function projectionMatrixOpenGLFromD3D(m) {
  mat4_exports.mul(m, mtxOpenGLFromD3D, m);
}
function projectionMatrixD3DFromOpenGL(m) {
  mat4_exports.mul(m, mtxD3DFromOpenGL, m);
}
function projectionMatrixConvertClipSpaceNearZ(m, dst, src) {
  if (dst === src)
    return;
  if (dst === -1 /* NegativeOne */)
    projectionMatrixOpenGLFromD3D(m);
  else if (dst === 0 /* Zero */)
    projectionMatrixD3DFromOpenGL(m);
}
var mtxOpenGLFromD3D, mtxD3DFromOpenGL;
var init_ProjectionHelpers = __esm({
  "noclip/gfx/helpers/ProjectionHelpers.ts"() {
    init_esm();
    init_GfxPlatform();
    mtxOpenGLFromD3D = mat4_exports.fromValues(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      2,
      0,
      0,
      0,
      -1,
      1
    );
    mtxD3DFromOpenGL = mat4_exports.fromValues(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0.5,
      0,
      0,
      0,
      0.5,
      1
    );
  }
});

// noclip/gfx/helpers/ReversedDepthHelpers.ts
function projectionMatrixReverseDepth(m, isDepthReversed = IsDepthReversed) {
  if (isDepthReversed)
    mat4_exports.mul(m, reverseDepthMatrix, m);
}
function reverseDepthForCompareMode(compareMode, isDepthReversed = IsDepthReversed) {
  if (isDepthReversed) {
    switch (compareMode) {
      case 1 /* Less */:
        return 4 /* Greater */;
      case 3 /* LessEqual */:
        return 6 /* GreaterEqual */;
      case 6 /* GreaterEqual */:
        return 3 /* LessEqual */;
      case 4 /* Greater */:
        return 1 /* Less */;
      default:
        return compareMode;
    }
  } else {
    return compareMode;
  }
}
function reverseDepthForClearValue(n, isDepthReversed = IsDepthReversed) {
  if (isDepthReversed) {
    return 1 - n;
  } else {
    return n;
  }
}
var IsDepthReversed, reverseDepthMatrix;
var init_ReversedDepthHelpers = __esm({
  "noclip/gfx/helpers/ReversedDepthHelpers.ts"() {
    init_esm();
    init_GfxPlatform();
    IsDepthReversed = true;
    reverseDepthMatrix = mat4_exports.fromValues(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      -1,
      0,
      0,
      0,
      0,
      1
    );
  }
});

// stubs/SaveManager.ts
var GlobalSaveManager;
var init_SaveManager = __esm({
  "stubs/SaveManager.ts"() {
    GlobalSaveManager = {
      loadSetting(_k, def) {
        return def;
      },
      saveSetting(_k, _v2) {
      },
      addSettingListener(_k, _f) {
      }
    };
  }
});

// stubs/Studio.ts
var init_Studio = __esm({
  "stubs/Studio.ts"() {
  }
});

// noclip/Camera.ts
function computeViewSpaceDepthFromWorldSpaceAABB(viewMatrix, aabb, v = scratchVec3a3) {
  aabb.centerPoint(v);
  return computeViewSpaceDepthFromWorldSpacePoint(viewMatrix, v);
}
function computeViewSpaceDepthFromWorldSpacePoint(viewMatrix, v) {
  return -(viewMatrix[2] * v[0] + viewMatrix[6] * v[1] + viewMatrix[10] * v[2] + viewMatrix[14]);
}
function mat33mul(dst, a, b) {
  const b00 = b[0], b10 = b[1], b20 = b[2], b01 = b[4], b11 = b[5], b21 = b[6], b02 = b[8], b12 = b[9], b22 = b[10];
  const a00 = a[0], a01 = a[4], a02 = a[8];
  dst[0] = a00 * b00 + a01 * b10 + a02 * b20;
  dst[4] = a00 * b01 + a01 * b11 + a02 * b21;
  dst[8] = a00 * b02 + a01 * b12 + a02 * b22;
  const a10 = a[1], a11 = a[5], a12 = a[9];
  dst[1] = a10 * b00 + a11 * b10 + a12 * b20;
  dst[5] = a10 * b01 + a11 * b11 + a12 * b21;
  dst[9] = a10 * b02 + a11 * b12 + a12 * b22;
  const a20 = a[2], a21 = a[6], a22 = a[10];
  dst[2] = a20 * b00 + a21 * b10 + a22 * b20;
  dst[6] = a20 * b01 + a21 * b11 + a22 * b21;
  dst[10] = a20 * b02 + a21 * b12 + a22 * b22;
}
function texProjCamera(dst, clipFromViewMatrix, scaleS, scaleT, transS, transT) {
  const projMtx = clipFromViewMatrix;
  dst[0] = projMtx[0] * scaleS;
  dst[4] = 0;
  dst[8] = projMtx[8] * scaleS + projMtx[11] * transS;
  dst[12] = projMtx[12] * scaleS + projMtx[15] * transS;
  dst[1] = 0;
  dst[5] = projMtx[5] * scaleT;
  dst[9] = projMtx[9] * scaleT + projMtx[11] * transT;
  dst[13] = projMtx[12] * scaleT + projMtx[15] * transT;
  dst[2] = 0;
  dst[6] = 0;
  dst[10] = projMtx[11];
  dst[14] = projMtx[15];
  dst[3] = 9999;
  dst[7] = 9999;
  dst[11] = 9999;
  dst[15] = 9999;
}
function texProjCameraSceneTex(dst, clipFromViewMatrix, flipYScale) {
  let scaleS = 0.5, scaleT = -0.5 * flipYScale, transS = 0.5, transT = 0.5;
  texProjCamera(dst, clipFromViewMatrix, scaleS, scaleT, transS, transT);
}
var Camera, scratchVec3a3, scratchVec3b3, scratchVec3c2, scratchVec3d2, scratchVec3e2, scratchVec3f, scratchMat4, scratchQuat, FPS, FPSCameraController;
var init_Camera = __esm({
  "noclip/Camera.ts"() {
    init_esm();
    init_Geometry();
    init_ProjectionHelpers();
    init_ReversedDepthHelpers();
    init_GfxPlatform();
    init_MathHelpers();
    init_SaveManager();
    init_Studio();
    init_util();
    Camera = class _Camera {
      clipSpaceNearZ;
      // Converts to view space from world space.
      // Should be called viewFromWorldMatrix
      viewMatrix = mat4_exports.create();
      // The world matrix is the camera's model matrix -- that is, it converts from
      // view space to the abstract world space.
      // Should be called worldFromViewMatrix
      worldMatrix = mat4_exports.create();
      // Converts to (OpenGL) NDC/clip space from view space.
      // Should be called clipFromViewMatrix
      projectionMatrix = mat4_exports.create();
      // Combined view/projection matrix, using our new naming convention.
      clipFromWorldMatrix = mat4_exports.create();
      // Camera's linear (aka positional) velocity. Instantaneous for the frame.
      linearVelocity = vec3_exports.create();
      frustum = new Frustum();
      static DefaultFovY = 6.283185307179586 /* TAU */ / 6;
      fovY = _Camera.DefaultFovY;
      aspect;
      isOrthographic = false;
      // Frustum configuration.
      left;
      right;
      bottom;
      top;
      near;
      far;
      forceInfiniteFarPlane = false;
      identity() {
        mat4_exports.identity(this.worldMatrix);
        mat4_exports.identity(this.viewMatrix);
      }
      worldMatrixUpdated() {
        mat4_exports.invert(this.viewMatrix, this.worldMatrix);
        this.updateClipFromWorld();
      }
      setPerspective(fovY, aspect, n, f = Infinity) {
        this.fovY = fovY;
        this.aspect = aspect;
        this.isOrthographic = false;
        if (this.forceInfiniteFarPlane)
          f = Infinity;
        const nearY = Math.tan(fovY * 0.5) * n;
        const nearX = nearY * aspect;
        this.setFrustum(-nearX, nearX, -nearY, nearY, n, f);
      }
      setOrthographic(orthoScaleY, aspect, n, f) {
        this.aspect = aspect;
        this.isOrthographic = true;
        const nearY = orthoScaleY;
        const nearX = orthoScaleY * aspect;
        this.setFrustum(-nearX, nearX, -nearY, nearY, n, f);
      }
      setClipPlanes(n, f = Infinity) {
        if (this.isOrthographic) {
        } else {
          this.setPerspective(this.fovY, this.aspect, n, f);
        }
      }
      updateClipFromWorld() {
        mat4_exports.mul(this.clipFromWorldMatrix, this.projectionMatrix, this.viewMatrix);
        this.frustum.updateClipFrustum(this.clipFromWorldMatrix, this.clipSpaceNearZ);
      }
      updateProjectionMatrix() {
        if (this.isOrthographic)
          projectionMatrixForCuboid(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
        else
          projectionMatrixForFrustum(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
        projectionMatrixReverseDepth(this.projectionMatrix);
        projectionMatrixConvertClipSpaceNearZ(this.projectionMatrix, this.clipSpaceNearZ, -1 /* NegativeOne */);
        this.updateClipFromWorld();
      }
      setFrustum(left, right, bottom, top, near, far) {
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.top = top;
        this.near = near;
        this.far = far;
        this.updateProjectionMatrix();
      }
      newFrame() {
      }
    };
    scratchVec3a3 = vec3_exports.create();
    scratchVec3b3 = vec3_exports.create();
    scratchVec3c2 = vec3_exports.create();
    scratchVec3d2 = vec3_exports.create();
    scratchVec3e2 = vec3_exports.create();
    scratchVec3f = vec3_exports.create();
    scratchMat4 = mat4_exports.create();
    scratchQuat = quat_exports.create();
    FPS = 1e3 / 60;
    FPSCameraController = class {
      camera;
      forceUpdate = false;
      useWorldUp = true;
      onkeymovespeed = () => {
      };
      linearMoveDir = vec3_exports.create();
      rotateAngles = vec3_exports.create();
      keyMoveSpeed = 60;
      keyMoveFastMult = 5;
      keyMoveSlowMult = 0.1;
      linearMoveAcceleration = 1 / 5;
      keyMoveDrag = 0.8;
      keyAngleChangeVelFast = 0.1;
      keyAngleChangeVelSlow = 0.02;
      isHoverModeAvailable = true;
      isInHoverMode = false;
      mouseLookSpeed = 500;
      isMoving = false;
      sceneMoveSpeedMult = 1;
      cameraUpdateForced() {
        vec3_exports.zero(this.linearMoveDir);
      }
      setSceneMoveSpeedMult(v) {
        this.sceneMoveSpeedMult = v;
      }
      setKeyMoveSpeed(speed2) {
        this.keyMoveSpeed = Math.max(speed2, 1);
      }
      getKeyMoveSpeed() {
        return this.keyMoveSpeed;
      }
      update(inputManager, dt) {
        const camera2 = this.camera;
        let updated = false;
        if (inputManager.isKeyDown("KeyB")) {
          mat4_exports.identity(camera2.worldMatrix);
          this.cameraUpdateForced();
          updated = true;
        }
        const isShiftPressed = inputManager.isKeyDown("ShiftLeft") || inputManager.isKeyDown("ShiftRight");
        const isSlashPressed = inputManager.isKeyDown("IntlBackslash") || inputManager.isKeyDown("Backslash");
        const keyMoveMult = isShiftPressed ? this.keyMoveFastMult : isSlashPressed ? this.keyMoveSlowMult : 1;
        const keyMoveSpeedCap = this.keyMoveSpeed * keyMoveMult;
        const linearMoveVelocity = keyMoveSpeedCap * this.linearMoveAcceleration;
        const linearMoveDir = this.linearMoveDir;
        const keyMoveThreshold = 0.1;
        if (inputManager.isKeyDown("KeyW") || inputManager.isKeyDown("ArrowUp") || (inputManager.buttons & 3) === 3) {
          linearMoveDir[2] = clampRange(linearMoveDir[2] - linearMoveVelocity, keyMoveSpeedCap);
        } else if (inputManager.isKeyDown("KeyS") || inputManager.isKeyDown("ArrowDown")) {
          linearMoveDir[2] = clampRange(linearMoveDir[2] + linearMoveVelocity, keyMoveSpeedCap);
        } else if (Math.abs(linearMoveDir[2]) >= keyMoveThreshold) {
          linearMoveDir[2] *= this.keyMoveDrag;
          if (Math.abs(linearMoveDir[2]) < keyMoveThreshold) {
            linearMoveDir[2] = 0;
          }
        }
        linearMoveDir[2] += -inputManager.getPinchDeltaDist() * linearMoveVelocity;
        if (inputManager.isKeyDown("KeyA") || inputManager.isKeyDown("ArrowLeft")) {
          linearMoveDir[0] = clampRange(linearMoveDir[0] - linearMoveVelocity, keyMoveSpeedCap);
        } else if (inputManager.isKeyDown("KeyD") || inputManager.isKeyDown("ArrowRight")) {
          linearMoveDir[0] = clampRange(linearMoveDir[0] + linearMoveVelocity, keyMoveSpeedCap);
        } else if (Math.abs(linearMoveDir[0]) >= keyMoveThreshold) {
          linearMoveDir[0] *= this.keyMoveDrag;
          if (Math.abs(linearMoveDir[0]) < keyMoveThreshold) linearMoveDir[0] = 0;
        }
        linearMoveDir[0] += -inputManager.getTouchDeltaX() * linearMoveVelocity;
        const swapQE = GlobalSaveManager.loadSetting("SwapQE", false);
        const keyDownQE = swapQE ? "KeyE" : "KeyQ";
        const keyUpQE = swapQE ? "KeyQ" : "KeyE";
        if (inputManager.isKeyDown(keyDownQE) || inputManager.isKeyDown("PageDown") || inputManager.isKeyDown("ControlLeft") && inputManager.isKeyDown("Space") || inputManager.isKeyDown("KeyC")) {
          linearMoveDir[1] = clampRange(linearMoveDir[1] - linearMoveVelocity, keyMoveSpeedCap);
        } else if (inputManager.isKeyDown(keyUpQE) || inputManager.isKeyDown("PageUp") || inputManager.isKeyDown("Space")) {
          linearMoveDir[1] = clampRange(linearMoveDir[1] + linearMoveVelocity, keyMoveSpeedCap);
        } else if (Math.abs(linearMoveDir[1]) >= keyMoveThreshold) {
          linearMoveDir[1] *= this.keyMoveDrag;
          if (Math.abs(linearMoveDir[1]) < keyMoveThreshold) linearMoveDir[1] = 0;
        }
        linearMoveDir[1] += inputManager.getTouchDeltaY() * linearMoveVelocity;
        const viewRight = scratchVec3b3;
        const upAxis = scratchVec3c2;
        const viewForward = scratchVec3d2;
        getMatrixAxis(viewRight, upAxis, viewForward, camera2.worldMatrix);
        if (this.useWorldUp) {
          vec3_exports.copy(upAxis, Vec3UnitY);
        }
        if (this.isHoverModeAvailable) {
          if (inputManager.isKeyDownEventTriggered("KeyX")) {
            this.isInHoverMode = !this.isInHoverMode;
          }
          if (this.isInHoverMode) {
            viewForward[1] = viewRight[1] = 0;
            vec3_exports.normalize(viewForward, viewForward);
            vec3_exports.normalize(viewRight, viewRight);
          }
        }
        const linearVelocity = camera2.linearVelocity;
        if (!vec3_exports.exactEquals(linearMoveDir, Vec3Zero)) {
          vec3_exports.scale(linearVelocity, viewRight, linearMoveDir[0]);
          vec3_exports.scaleAndAdd(linearVelocity, linearVelocity, viewForward, linearMoveDir[2]);
          vec3_exports.scaleAndAdd(linearVelocity, linearVelocity, upAxis, linearMoveDir[1]);
          vec3_exports.scale(linearVelocity, linearVelocity, this.sceneMoveSpeedMult * (dt / FPS));
          camera2.worldMatrix[12] += linearVelocity[0];
          camera2.worldMatrix[13] += linearVelocity[1];
          camera2.worldMatrix[14] += linearVelocity[2];
          updated = true;
        } else {
          vec3_exports.copy(linearVelocity, Vec3Zero);
        }
        const invertXMult = inputManager.invertX ? -1 : 1;
        const invertYMult = inputManager.invertY ? -1 : 1;
        const dx = inputManager.getMouseDeltaX() * (-1 / this.mouseLookSpeed) * invertXMult;
        const dy = inputManager.getMouseDeltaY() * (-1 / this.mouseLookSpeed) * invertYMult;
        const rotateAngles = this.rotateAngles;
        vec3_exports.zero(rotateAngles);
        rotateAngles[0] += dx;
        rotateAngles[1] += dy;
        const keyAngleChangeVel = isShiftPressed ? this.keyAngleChangeVelFast : this.keyAngleChangeVelSlow;
        if (inputManager.isKeyDown("KeyJ"))
          rotateAngles[0] += keyAngleChangeVel * invertXMult;
        else if (inputManager.isKeyDown("KeyL"))
          rotateAngles[0] -= keyAngleChangeVel * invertXMult;
        if (inputManager.isKeyDown("KeyI"))
          rotateAngles[1] += keyAngleChangeVel * invertYMult;
        else if (inputManager.isKeyDown("KeyK"))
          rotateAngles[1] -= keyAngleChangeVel * invertYMult;
        if (inputManager.isKeyDown("KeyU"))
          rotateAngles[2] -= keyAngleChangeVel;
        else if (inputManager.isKeyDown("KeyO"))
          rotateAngles[2] += keyAngleChangeVel;
        if (!vec3_exports.exactEquals(rotateAngles, Vec3Zero)) {
          mat4_exports.rotate(scratchMat4, Mat4Identity, rotateAngles[0], upAxis);
          mat4_exports.rotate(scratchMat4, scratchMat4, rotateAngles[1], viewRight);
          mat4_exports.rotate(scratchMat4, scratchMat4, rotateAngles[2], viewForward);
          mat33mul(camera2.worldMatrix, scratchMat4, camera2.worldMatrix);
          updated = true;
          if (Math.abs(rotateAngles[0]) < 1e-4) rotateAngles[0] = 0;
          if (Math.abs(rotateAngles[1]) < 1e-4) rotateAngles[1] = 0;
        }
        if (updated)
          this.isMoving = true;
        let important = false;
        if (this.isMoving && vec3_exports.exactEquals(rotateAngles, Vec3Zero) && vec3_exports.exactEquals(camera2.linearVelocity, Vec3Zero)) {
          important = true;
          this.isMoving = false;
        }
        this.camera.isOrthographic = false;
        this.camera.worldMatrixUpdated();
        this.forceUpdate = false;
        return important ? 2 /* ImportantChange */ : updated ? 1 /* Changed */ : 0 /* Unchanged */;
      }
    };
  }
});

// noclip/Common/Compression/Yaz0.ts
function decompressSW(srcBuffer) {
  const srcView = srcBuffer.createDataView();
  assert(readString(srcBuffer, 0, 4) === "Yaz0");
  let uncompressedSize = srcView.getUint32(4, false);
  const dstBuffer = new Uint8Array(uncompressedSize);
  let srcOffs = 16;
  let dstOffs = 0;
  while (true) {
    const commandByte = srcView.getUint8(srcOffs++);
    let i = 8;
    while (i--) {
      if (commandByte & 1 << i) {
        uncompressedSize--;
        dstBuffer[dstOffs++] = srcView.getUint8(srcOffs++);
      } else {
        const tmp = srcView.getUint16(srcOffs, false);
        srcOffs += 2;
        const windowOffset = (tmp & 4095) + 1;
        let windowLength = (tmp >> 12) + 2;
        if (windowLength === 2) {
          windowLength += srcView.getUint8(srcOffs++) + 16;
        }
        assert(windowLength >= 3 && windowLength <= 273);
        let copyOffs = dstOffs - windowOffset;
        uncompressedSize -= windowLength;
        while (windowLength--)
          dstBuffer[dstOffs++] = dstBuffer[copyOffs++];
      }
      if (uncompressedSize <= 0)
        return new ArrayBufferSlice(dstBuffer.buffer);
    }
  }
}
function decompress(srcBuffer) {
  const bufView = rust.yaz0dec(srcBuffer.createTypedArray(Uint8Array));
  return ArrayBufferSlice.fromView(bufView);
}
var init_Yaz0 = __esm({
  "noclip/Common/Compression/Yaz0.ts"() {
    init_util();
    init_ArrayBufferSlice();
    init_rustlib();
  }
});

// noclip/Color.ts
function colorNewFromRGBA(r, g, b, a = 1) {
  return { r, g, b, a };
}
function colorFromRGBA(dst, r, g, b, a = 1) {
  dst.r = r;
  dst.g = g;
  dst.b = b;
  dst.a = a;
}
function colorCopy(dst, src, a = src.a) {
  dst.r = src.r;
  dst.g = src.g;
  dst.b = src.b;
  dst.a = a;
}
function colorNewCopy(src, a = src.a) {
  return { r: src.r, g: src.g, b: src.b, a };
}
function colorFromRGBA8(dst, n) {
  dst.r = (n >>> 24 & 255) / 255;
  dst.g = (n >>> 16 & 255) / 255;
  dst.b = (n >>> 8 & 255) / 255;
  dst.a = (n >>> 0 & 255) / 255;
}
function colorNewFromRGBA8(n) {
  const dst = colorNewFromRGBA(0, 0, 0, 0);
  colorFromRGBA8(dst, n);
  return dst;
}
function colorClampLDR(dst, a) {
  dst.r = saturate(a.r);
  dst.g = saturate(a.g);
  dst.b = saturate(a.b);
  dst.a = saturate(a.a);
}
function colorClamp(dst, a, min4, max4) {
  dst.r = clamp(a.r, min4, max4);
  dst.g = clamp(a.g, min4, max4);
  dst.b = clamp(a.b, min4, max4);
  dst.a = clamp(a.a, min4, max4);
}
function colorMult(dst, a, b) {
  dst.g = a.g * b.g;
  dst.r = a.r * b.r;
  dst.b = a.b * b.b;
  dst.a = a.a * b.a;
}
function colorToRGBA8(src) {
  return (src.r * 255 << 24 | src.g * 255 << 16 | src.b * 255 << 8 | src.a * 255 << 0) >>> 0;
}
var TransparentBlack, OpaqueBlack, TransparentWhite, White, Red, Green, Blue, Magenta, Yellow, Cyan;
var init_Color = __esm({
  "noclip/Color.ts"() {
    init_MathHelpers();
    init_util();
    TransparentBlack = colorNewFromRGBA(0, 0, 0, 0);
    OpaqueBlack = colorNewFromRGBA(0, 0, 0, 1);
    TransparentWhite = colorNewFromRGBA(1, 1, 1, 0);
    White = colorNewFromRGBA(1, 1, 1, 1);
    Red = colorNewFromRGBA(1, 0, 0, 1);
    Green = colorNewFromRGBA(0, 1, 0, 1);
    Blue = colorNewFromRGBA(0, 0, 1, 1);
    Magenta = colorNewFromRGBA(1, 0, 1, 1);
    Yellow = colorNewFromRGBA(1, 1, 0, 1);
    Cyan = colorNewFromRGBA(0, 1, 1, 1);
  }
});

// noclip/gfx/platform/GfxPlatformUtil.ts
function assert2(b, message = "") {
  if (!b) {
    console.error(new Error().stack);
    throw new Error(`Assert fail: ${message}`);
  }
}
function assertExists2(v) {
  if (v !== void 0 && v !== null)
    return v;
  else
    throw new Error("Missing object");
}
function range(start, count) {
  const L = [];
  for (let i = start; i < start + count; i++)
    L.push(i);
  return L;
}
function leftPad2(S, spaces, ch = "0") {
  return S.padStart(spaces, ch);
}
function nArray2(n, c) {
  const d = new Array(n);
  for (let i = 0; i < n; i++)
    d[i] = c();
  return d;
}
function nullify2(v) {
  return v === void 0 ? null : v;
}
function align2(n, multiple) {
  const mask = multiple - 1;
  return n + mask & ~mask;
}
function alignNonPowerOfTwo(n, multiple) {
  return ((n + multiple - 1) / multiple | 0) * multiple;
}
function fallbackUndefined2(v, fallback) {
  return v !== null && v !== void 0 ? v : fallback;
}
function findall(haystack, needle) {
  const results = [];
  while (true) {
    const result = needle.exec(haystack);
    if (!result)
      break;
    results.push(result);
  }
  return results;
}
var init_GfxPlatformUtil = __esm({
  "noclip/gfx/platform/GfxPlatformUtil.ts"() {
  }
});

// noclip/gfx/render/GfxRenderGraph.ts
function fillArray(L, n, v) {
  L.length = n;
  L.fill(v);
}
var GfxrRenderTargetDescription, noopClearDescriptor, PassImpl, GraphImpl, RenderTarget, SingleSampledTexture, GfxrDebugThumbnailDesc, GfxrRenderGraphImpl;
var init_GfxRenderGraph = __esm({
  "noclip/gfx/render/GfxRenderGraph.ts"() {
    init_GfxPlatform();
    init_GfxPlatformUtil();
    GfxrRenderTargetDescription = class {
      constructor(pixelFormat) {
        this.pixelFormat = pixelFormat;
      }
      pixelFormat;
      width = 0;
      height = 0;
      numLevels = 1;
      sampleCount = 0;
      clearColor = "load";
      clearDepth = "load";
      clearStencil = "load";
      /**
       * Set the dimensions of a render target description.
       */
      setDimensions(width, height, sampleCount) {
        this.width = width;
        this.height = height;
        this.sampleCount = sampleCount;
      }
      copyDimensions(desc) {
        this.width = desc.width;
        this.height = desc.height;
        this.sampleCount = desc.sampleCount;
      }
    };
    noopClearDescriptor = {
      clearColor: "load",
      clearDepth: "load",
      clearStencil: "load"
    };
    PassImpl = class {
      constructor(passType) {
        this.passType = passType;
      }
      passType;
      debugName = "";
      debugGroups = [];
      // Input state used for scheduling.
      // Attachment information. Either one of attachmentRenderTargetID or attachmentTexture should be set for a given slot.
      attachmentRenderTargetID = [];
      attachmentTexture = [];
      attachmentClearDescriptor = [];
      attachmentView = [];
      // Resolve information. Either one of resolveTextureOutputIDs or resolveTextureOutputExternalTexture should be set for a given slot.
      resolveOutputIDs = [];
      resolveOutputExternalTexture = [];
      resolveOutputExternalTextureView = [];
      // List of resolveTextureIDs that we have a reference to.
      resolveTextureInputIDs = [];
      // GfxrAttachmentSlot => refcount.
      renderTargetExtraRefs = [];
      resolveTextureInputTextures = [];
      renderTargets = [];
      // Execution state computed by scheduling.
      descriptor = {
        colorAttachments: [],
        depthStencilAttachment: null,
        occlusionQueryPool: null
      };
      viewportX = 0;
      viewportY = 0;
      viewportW = 1;
      viewportH = 1;
      // Execution callback from user.
      execFunc = null;
      postFunc = null;
      setDebugName(debugName) {
        this.debugName = debugName;
        this.debugGroups.push(debugName);
      }
      setViewport(x, y, w, h) {
        this.viewportX = x;
        this.viewportY = y;
        this.viewportW = w;
        this.viewportH = h;
      }
      attachRenderTargetID(attachmentSlot, renderTargetID, view = null) {
        assert2(this.attachmentRenderTargetID[attachmentSlot] === void 0 && this.attachmentTexture[attachmentSlot] === void 0);
        this.attachmentRenderTargetID[attachmentSlot] = renderTargetID;
        this.attachmentView[attachmentSlot] = view !== null ? view : { level: 0, z: 0 };
      }
      attachTexture(attachmentSlot, texture, view = null, clearDescriptor = noopClearDescriptor) {
        assert2(this.attachmentRenderTargetID[attachmentSlot] === void 0 && this.attachmentTexture[attachmentSlot] === void 0);
        this.attachmentTexture[attachmentSlot] = texture;
        this.attachmentClearDescriptor[attachmentSlot] = clearDescriptor;
        this.attachmentView[attachmentSlot] = view !== null ? view : { level: 0, z: 0 };
      }
      attachResolveTexture(resolveTextureID) {
        this.resolveTextureInputIDs.push(resolveTextureID);
      }
      attachOcclusionQueryPool(queryPool) {
        this.descriptor.occlusionQueryPool = queryPool;
      }
      exec(func) {
        assert2(this.execFunc === null);
        this.execFunc = func;
      }
      post(func) {
        assert2(this.postFunc === null);
        this.postFunc = func;
      }
      addExtraRef(slot) {
        this.renderTargetExtraRefs[slot] = true;
      }
    };
    GraphImpl = class {
      [Symbol.species];
      // Used for determining scheduling.
      renderTargetDescriptions = [];
      resolveTextureRenderTargetIDs = [];
      passes = [];
      // Debugging.
      renderTargetDebugNames = [];
      debugThumbnails = [];
    };
    RenderTarget = class {
      debugName = "";
      dimension = 0 /* n2D */;
      depthOrArrayLayers = 1;
      pixelFormat;
      width = 0;
      height = 0;
      numLevels = 1;
      sampleCount = 0;
      usage = 2 /* RenderTarget */;
      needsClear = true;
      texture = null;
      renderTarget;
      age = 0;
      constructor(device2, desc) {
        this.pixelFormat = desc.pixelFormat;
        this.width = desc.width;
        this.height = desc.height;
        this.numLevels = desc.numLevels;
        this.sampleCount = desc.sampleCount;
        assert2(this.sampleCount >= 1);
        if (this.sampleCount > 1) {
          this.renderTarget = device2.createRenderTarget(this);
        } else {
          this.texture = device2.createTexture(this);
          this.renderTarget = device2.createRenderTargetFromTexture(this.texture);
        }
      }
      setDebugName(device2, debugName) {
        this.debugName = debugName;
        if (this.texture !== null)
          device2.setResourceName(this.texture, this.debugName);
        device2.setResourceName(this.renderTarget, this.debugName);
      }
      matchesDescription(desc) {
        return this.pixelFormat === desc.pixelFormat && this.width === desc.width && this.height === desc.height && this.numLevels === desc.numLevels && this.sampleCount === desc.sampleCount;
      }
      reset() {
        this.age = 0;
      }
      destroy(device2) {
        if (this.texture !== null)
          device2.destroyTexture(this.texture);
        device2.destroyRenderTarget(this.renderTarget);
      }
    };
    SingleSampledTexture = class {
      dimension = 0 /* n2D */;
      depthOrArrayLayers = 1;
      numLevels = 1;
      usage = 2 /* RenderTarget */;
      pixelFormat;
      width = 0;
      height = 0;
      texture;
      age = 0;
      constructor(device2, desc) {
        this.pixelFormat = desc.pixelFormat;
        this.width = desc.width;
        this.height = desc.height;
        this.texture = device2.createTexture(this);
      }
      matchesDescription(desc) {
        return this.pixelFormat === desc.pixelFormat && this.width === desc.width && this.height === desc.height;
      }
      reset() {
        this.age = 0;
      }
      destroy(device2) {
        device2.destroyTexture(this.texture);
      }
    };
    GfxrDebugThumbnailDesc = class {
      constructor(renderTargetID, pass, attachmentSlot, debugLabel) {
        this.renderTargetID = renderTargetID;
        this.pass = pass;
        this.attachmentSlot = attachmentSlot;
        this.debugLabel = debugLabel;
      }
      renderTargetID;
      pass;
      attachmentSlot;
      debugLabel;
    };
    GfxrRenderGraphImpl = class {
      constructor(device2) {
        this.device = device2;
      }
      device;
      currentPass = null;
      //#region GfxrRenderGraph
      newGraphBuilder() {
        this.beginGraphBuilder();
        return this;
      }
      execute() {
        const graph = assertExists2(this.currentGraph);
        this.execGraph(graph);
        this.currentGraph = null;
      }
      destroy() {
        for (let i = 0; i < this.renderTargetAliveForID.length; i++)
          assert2(this.renderTargetAliveForID[i] === void 0);
        for (let i = 0; i < this.singleSampledTextureForResolveTextureID.length; i++)
          assert2(this.singleSampledTextureForResolveTextureID[i] === void 0);
        for (let i = 0; i < this.renderTargetDeadPool.length; i++)
          this.renderTargetDeadPool[i].destroy(this.device);
        for (let i = 0; i < this.singleSampledTextureDeadPool.length; i++)
          this.singleSampledTextureDeadPool[i].destroy(this.device);
      }
      //#endregion
      //#region GfxrGraphBuilder
      currentGraph = null;
      debugGroups = [];
      beginGraphBuilder() {
        assert2(this.currentGraph === null);
        this.currentGraph = new GraphImpl();
      }
      pushPass(setupFunc) {
        const pass = new PassImpl("render");
        pass.debugGroups = this.debugGroups.slice();
        setupFunc(pass);
        this.currentGraph.passes.push(pass);
      }
      pushComputePass(setupFunc) {
        const pass = new PassImpl("compute");
        pass.debugGroups = this.debugGroups.slice();
        setupFunc(pass);
        this.currentGraph.passes.push(pass);
      }
      createRenderTargetID(desc, debugName) {
        this.currentGraph.renderTargetDebugNames.push(debugName);
        return this.currentGraph.renderTargetDescriptions.push(desc) - 1;
      }
      createResolveTextureID(renderTargetID) {
        return this.currentGraph.resolveTextureRenderTargetIDs.push(renderTargetID) - 1;
      }
      findMostRecentPassThatAttachedRenderTarget(renderTargetID) {
        for (let i = this.currentGraph.passes.length - 1; i >= 0; i--) {
          const pass = this.currentGraph.passes[i];
          if (pass.attachmentRenderTargetID.includes(renderTargetID))
            return pass;
        }
        return null;
      }
      findPassForResolveRenderTarget(renderTargetID) {
        const renderPass = assertExists2(this.findMostRecentPassThatAttachedRenderTarget(renderTargetID));
        const attachmentSlot = renderPass.attachmentRenderTargetID.indexOf(renderTargetID);
        assert2(renderPass.resolveOutputExternalTexture[attachmentSlot] === void 0);
        return renderPass;
      }
      resolveRenderTargetPassAttachmentSlot(pass, attachmentSlot) {
        const renderPass = pass;
        if (renderPass.resolveOutputIDs[attachmentSlot] === void 0) {
          const renderTargetID = renderPass.attachmentRenderTargetID[attachmentSlot];
          const resolveTextureID = this.createResolveTextureID(renderTargetID);
          renderPass.resolveOutputIDs[attachmentSlot] = resolveTextureID;
        }
        return renderPass.resolveOutputIDs[attachmentSlot];
      }
      resolveRenderTarget(renderTargetID) {
        const renderPass = this.findPassForResolveRenderTarget(renderTargetID);
        const attachmentSlot = renderPass.attachmentRenderTargetID.indexOf(renderTargetID);
        return this.resolveRenderTargetPassAttachmentSlot(renderPass, attachmentSlot);
      }
      resolveRenderTargetToExternalTexture(renderTargetID, texture, view = null) {
        const renderPass = this.findPassForResolveRenderTarget(renderTargetID);
        const attachmentSlot = renderPass.attachmentRenderTargetID.indexOf(renderTargetID);
        assert2(renderPass.resolveOutputIDs[attachmentSlot] === void 0);
        renderPass.resolveOutputExternalTexture[attachmentSlot] = texture;
        renderPass.resolveOutputExternalTextureView[attachmentSlot] = view !== null ? view : { level: 0, z: 0 };
      }
      getRenderTargetDescription(renderTargetID) {
        return assertExists2(this.currentGraph.renderTargetDescriptions[renderTargetID]);
      }
      pushDebugThumbnail(renderTargetID, debugLabel) {
        const renderPass = this.findPassForResolveRenderTarget(renderTargetID);
        const attachmentSlot = renderPass.attachmentRenderTargetID.indexOf(renderTargetID);
        if (debugLabel === void 0) {
          const renderTargetDebugName = this.currentGraph.renderTargetDebugNames[renderTargetID];
          const debugGroups = renderPass.debugGroups.length !== 0 ? renderPass.debugGroups.join("\n") + "\n" : "";
          debugLabel = `${debugGroups}${renderTargetDebugName}`;
        }
        this.currentGraph.debugThumbnails.push(new GfxrDebugThumbnailDesc(renderTargetID, renderPass, attachmentSlot, debugLabel));
      }
      pushDebugGroup(name) {
        this.debugGroups.push(name);
      }
      popDebugGroup() {
        this.debugGroups.pop();
      }
      getDebug() {
        return this;
      }
      //#endregion
      //#region GfxrGraphBuilderDebug
      getDebugThumbnails() {
        return this.currentGraph.debugThumbnails;
      }
      //#endregion
      //#region GfxrPassScope
      getResolveTextureForID(resolveTextureID) {
        const currentGraphPass = this.currentPass;
        const i = currentGraphPass.resolveTextureInputIDs.indexOf(resolveTextureID);
        assert2(i >= 0);
        return assertExists2(currentGraphPass.resolveTextureInputTextures[i]);
      }
      getRenderTargetTexture(slot) {
        const currentGraphPass = this.currentPass;
        const renderTarget = currentGraphPass.renderTargets[slot];
        if (!renderTarget)
          return null;
        return renderTarget.texture;
      }
      //#endregion
      //#region Resource Creation & Caching
      renderTargetDeadPool = [];
      singleSampledTextureDeadPool = [];
      acquireRenderTargetForDescription(desc) {
        for (let i = 0; i < this.renderTargetDeadPool.length; i++) {
          const freeRenderTarget = this.renderTargetDeadPool[i];
          if (freeRenderTarget.matchesDescription(desc)) {
            freeRenderTarget.reset();
            this.renderTargetDeadPool.splice(i--, 1);
            return freeRenderTarget;
          }
        }
        return new RenderTarget(this.device, desc);
      }
      acquireSingleSampledTextureForDescription(desc) {
        for (let i = 0; i < this.singleSampledTextureDeadPool.length; i++) {
          const freeSingleSampledTexture = this.singleSampledTextureDeadPool[i];
          if (freeSingleSampledTexture.matchesDescription(desc)) {
            freeSingleSampledTexture.reset();
            this.singleSampledTextureDeadPool.splice(i--, 1);
            return freeSingleSampledTexture;
          }
        }
        return new SingleSampledTexture(this.device, desc);
      }
      //#endregion
      //#region Scheduling
      renderTargetOutputCount = [];
      renderTargetResolveCount = [];
      resolveTextureUseCount = [];
      renderTargetAliveForID = [];
      singleSampledTextureForResolveTextureID = [];
      scheduleAddUseCount(graph, pass) {
        for (let slot = 0; slot < pass.attachmentRenderTargetID.length; slot++) {
          const renderTargetID = pass.attachmentRenderTargetID[slot];
          if (renderTargetID === void 0)
            continue;
          this.renderTargetOutputCount[renderTargetID]++;
          if (pass.renderTargetExtraRefs[slot])
            this.renderTargetOutputCount[renderTargetID]++;
        }
        for (let i = 0; i < pass.resolveTextureInputIDs.length; i++) {
          const resolveTextureID = pass.resolveTextureInputIDs[i];
          if (resolveTextureID === void 0)
            continue;
          this.resolveTextureUseCount[resolveTextureID]++;
          const renderTargetID = graph.resolveTextureRenderTargetIDs[resolveTextureID];
          this.renderTargetResolveCount[renderTargetID]++;
        }
      }
      acquireRenderTargetForID(graph, renderTargetID) {
        assert2(this.renderTargetOutputCount[renderTargetID] > 0);
        if (!this.renderTargetAliveForID[renderTargetID]) {
          const desc = graph.renderTargetDescriptions[renderTargetID];
          const newRenderTarget = this.acquireRenderTargetForDescription(desc);
          newRenderTarget.setDebugName(this.device, graph.renderTargetDebugNames[renderTargetID]);
          this.renderTargetAliveForID[renderTargetID] = newRenderTarget;
        }
        return this.renderTargetAliveForID[renderTargetID];
      }
      externalTextureRenderTargetPool = [];
      acquireRenderTargetForTexture(graph, texture) {
        const p2 = this.device.createRenderTargetFromTexture(texture);
        this.externalTextureRenderTargetPool.push(p2);
        return p2;
      }
      releaseRenderTargetForID(renderTargetID, forOutput) {
        if (renderTargetID === void 0)
          return null;
        const renderTarget = assertExists2(this.renderTargetAliveForID[renderTargetID]);
        if (forOutput) {
          assert2(this.renderTargetOutputCount[renderTargetID] > 0);
          this.renderTargetOutputCount[renderTargetID]--;
        } else {
          assert2(this.renderTargetResolveCount[renderTargetID] > 0);
          this.renderTargetResolveCount[renderTargetID]--;
        }
        if (this.renderTargetOutputCount[renderTargetID] === 0 && this.renderTargetResolveCount[renderTargetID] === 0) {
          renderTarget.needsClear = true;
          delete this.renderTargetAliveForID[renderTargetID];
          this.renderTargetDeadPool.push(renderTarget);
        }
        return renderTarget;
      }
      acquireResolveTextureInputTextureForID(graph, resolveTextureID) {
        const renderTargetID = graph.resolveTextureRenderTargetIDs[resolveTextureID];
        assert2(this.resolveTextureUseCount[resolveTextureID] > 0);
        this.resolveTextureUseCount[resolveTextureID]--;
        const renderTarget = assertExists2(this.releaseRenderTargetForID(renderTargetID, false));
        if (this.singleSampledTextureForResolveTextureID[resolveTextureID] !== void 0) {
          const singleSampledTexture = this.singleSampledTextureForResolveTextureID[resolveTextureID];
          if (this.resolveTextureUseCount[resolveTextureID] === 0) {
            this.singleSampledTextureDeadPool.push(singleSampledTexture);
          }
          return singleSampledTexture.texture;
        } else {
          return assertExists2(renderTarget.texture);
        }
      }
      determineResolveParam(graph, pass, slot) {
        const renderTargetID = pass.attachmentRenderTargetID[slot];
        assert2(renderTargetID !== void 0);
        const resolveTextureOutputID = pass.resolveOutputIDs[slot];
        const externalTexture = pass.resolveOutputExternalTexture[slot];
        const hasResolveTextureOutputID = resolveTextureOutputID !== void 0;
        const hasExternalTexture = externalTexture !== void 0;
        assert2(!(hasResolveTextureOutputID && hasExternalTexture));
        let resolveTo = null;
        let store = false;
        let resolveView = null;
        if (this.renderTargetOutputCount[renderTargetID] > 1) {
          store = true;
        }
        if (hasResolveTextureOutputID) {
          assert2(graph.resolveTextureRenderTargetIDs[resolveTextureOutputID] === renderTargetID);
          assert2(this.resolveTextureUseCount[resolveTextureOutputID] > 0);
          assert2(this.renderTargetOutputCount[renderTargetID] > 0);
          const renderTarget = assertExists2(this.renderTargetAliveForID[renderTargetID]);
          if (renderTarget.texture !== null && this.renderTargetOutputCount[renderTargetID] === 1) {
            resolveTo = null;
            store = true;
          } else {
            if (!this.singleSampledTextureForResolveTextureID[resolveTextureOutputID]) {
              const desc = assertExists2(graph.renderTargetDescriptions[renderTargetID]);
              this.singleSampledTextureForResolveTextureID[resolveTextureOutputID] = this.acquireSingleSampledTextureForDescription(desc);
              this.device.setResourceName(this.singleSampledTextureForResolveTextureID[resolveTextureOutputID].texture, renderTarget.debugName + ` (Resolve ${resolveTextureOutputID})`);
            }
            resolveTo = this.singleSampledTextureForResolveTextureID[resolveTextureOutputID].texture;
            resolveView = { level: 0, z: 0 };
          }
        } else if (hasExternalTexture) {
          resolveTo = externalTexture;
          resolveView = pass.resolveOutputExternalTextureView[slot];
        } else {
          resolveTo = null;
        }
        return { resolveTo, resolveView, store };
      }
      determinePassAttachment(graph, pass, slot) {
        const renderTargetID = pass.attachmentRenderTargetID[slot];
        const texture = pass.attachmentTexture[slot];
        const view = pass.attachmentView[slot];
        if (renderTargetID !== void 0) {
          const graphRenderTarget = this.acquireRenderTargetForID(graph, renderTargetID);
          const width = graphRenderTarget.width, height = graphRenderTarget.height, sampleCount = graphRenderTarget.sampleCount;
          const { resolveTo, resolveView, store } = this.determineResolveParam(graph, pass, slot);
          const renderTarget = graphRenderTarget.renderTarget;
          const clearColor = graphRenderTarget.needsClear ? graph.renderTargetDescriptions[renderTargetID].clearColor : "load";
          const clearDepth = graphRenderTarget.needsClear ? graph.renderTargetDescriptions[renderTargetID].clearDepth : "load";
          const clearStencil = graphRenderTarget.needsClear ? graph.renderTargetDescriptions[renderTargetID].clearStencil : "load";
          return { graphRenderTarget, renderTarget, view, clearColor, clearDepth, clearStencil, resolveTo, resolveView, store, width, height, sampleCount };
        } else if (texture !== void 0) {
          const graphRenderTarget = null;
          const width = texture.width, height = texture.height, sampleCount = 1;
          const resolveTo = null;
          const resolveView = null;
          const store = true;
          const renderTarget = this.acquireRenderTargetForTexture(graph, texture);
          const clearDescriptor = pass.attachmentClearDescriptor[slot];
          const clearColor = clearDescriptor.clearColor;
          const clearDepth = clearDescriptor.clearDepth;
          const clearStencil = clearDescriptor.clearStencil;
          return { graphRenderTarget, renderTarget, view, clearColor, clearDepth, clearStencil, resolveTo, resolveView, store, width, height, sampleCount };
        } else {
          return null;
        }
      }
      schedulePass(graph, pass) {
        let rtWidth = 0, rtHeight = 0, rtSampleCount = 0;
        for (let slot = 0 /* Color0 */; slot <= 4 /* DepthStencil */; slot++) {
          const attachment = this.determinePassAttachment(graph, pass, slot);
          if (attachment === null) {
            pass.renderTargets[slot] = null;
            if (slot === 4 /* DepthStencil */)
              pass.descriptor.depthStencilAttachment = null;
            else
              pass.descriptor.colorAttachments[slot] = null;
          } else {
            const level = attachment.view.level;
            const width = attachment.width >>> level;
            const height = attachment.height >>> level;
            if (rtWidth === 0) {
              rtWidth = width;
              rtHeight = height;
              rtSampleCount = attachment.sampleCount;
            }
            assert2(width === rtWidth);
            assert2(height === rtHeight);
            assert2(attachment.sampleCount === rtSampleCount);
            if (attachment.graphRenderTarget !== null)
              attachment.graphRenderTarget.needsClear = false;
            pass.renderTargets[slot] = attachment.graphRenderTarget;
            if (slot === 4 /* DepthStencil */)
              pass.descriptor.depthStencilAttachment = attachment;
            else
              pass.descriptor.colorAttachments[slot] = attachment;
          }
        }
        if (rtWidth > 0 && rtHeight > 0) {
          const x = rtWidth * pass.viewportX;
          const y = rtHeight * pass.viewportY;
          const w = rtWidth * pass.viewportW;
          const h = rtHeight * pass.viewportH;
          pass.viewportX = x;
          pass.viewportY = y;
          pass.viewportW = w;
          pass.viewportH = h;
        }
        for (let i = 0; i < pass.resolveTextureInputIDs.length; i++) {
          const resolveTextureID = pass.resolveTextureInputIDs[i];
          pass.resolveTextureInputTextures[i] = this.acquireResolveTextureInputTextureForID(graph, resolveTextureID);
        }
        for (let i = 0; i < pass.attachmentRenderTargetID.length; i++)
          this.releaseRenderTargetForID(pass.attachmentRenderTargetID[i], true);
        for (let slot = 0; slot < pass.renderTargetExtraRefs.length; slot++)
          if (pass.renderTargetExtraRefs[slot])
            this.releaseRenderTargetForID(pass.attachmentRenderTargetID[slot], true);
      }
      scheduleGraph(graph) {
        assert2(this.renderTargetOutputCount.length === 0);
        assert2(this.renderTargetResolveCount.length === 0);
        assert2(this.resolveTextureUseCount.length === 0);
        assert2(this.debugGroups.length === 0);
        for (let i = 0; i < this.renderTargetDeadPool.length; i++)
          this.renderTargetDeadPool[i].age++;
        for (let i = 0; i < this.singleSampledTextureDeadPool.length; i++)
          this.singleSampledTextureDeadPool[i].age++;
        fillArray(this.renderTargetOutputCount, graph.renderTargetDescriptions.length, 0);
        fillArray(this.renderTargetResolveCount, graph.renderTargetDescriptions.length, 0);
        fillArray(this.resolveTextureUseCount, graph.resolveTextureRenderTargetIDs.length, 0);
        for (let i = 0; i < graph.passes.length; i++)
          this.scheduleAddUseCount(graph, graph.passes[i]);
        for (let i = 0; i < graph.passes.length; i++)
          this.schedulePass(graph, graph.passes[i]);
        for (let i = 0; i < this.renderTargetOutputCount.length; i++)
          assert2(this.renderTargetOutputCount[i] === 0);
        for (let i = 0; i < this.renderTargetResolveCount.length; i++)
          assert2(this.renderTargetResolveCount[i] === 0);
        for (let i = 0; i < this.resolveTextureUseCount.length; i++)
          assert2(this.resolveTextureUseCount[i] === 0);
        for (let i = 0; i < this.renderTargetAliveForID.length; i++)
          assert2(this.renderTargetAliveForID[i] === void 0);
        const ageThreshold = 1;
        for (let i = 0; i < this.renderTargetDeadPool.length; i++) {
          if (this.renderTargetDeadPool[i].age >= ageThreshold) {
            this.renderTargetDeadPool[i].destroy(this.device);
            this.renderTargetDeadPool.splice(i--, 1);
          }
        }
        for (let i = 0; i < this.singleSampledTextureDeadPool.length; i++) {
          if (this.singleSampledTextureDeadPool[i].age >= ageThreshold) {
            this.singleSampledTextureDeadPool[i].destroy(this.device);
            this.singleSampledTextureDeadPool.splice(i--, 1);
          }
        }
        for (let i = 0; i < this.externalTextureRenderTargetPool.length; i++)
          this.device.destroyRenderTarget(this.externalTextureRenderTargetPool[i]);
        this.externalTextureRenderTargetPool.length = 0;
        this.renderTargetResolveCount.length = 0;
        this.renderTargetOutputCount.length = 0;
        this.resolveTextureUseCount.length = 0;
      }
      //#endregion
      //#region Execution
      currentDebugGroups = [];
      adjustDebugGroups(debugCommands, debugGroups) {
        for (let i = this.currentDebugGroups.length - 1; i >= 0; i--) {
          if (this.currentDebugGroups[i] !== debugGroups[i]) {
            for (let j = i; j < this.currentDebugGroups.length; j++) {
              debugCommands.popDebugGroup();
              this.currentDebugGroups.pop();
            }
          }
        }
        for (let i = this.currentDebugGroups.length; i < debugGroups.length; i++) {
          debugCommands.pushDebugGroup(debugGroups[i]);
          this.currentDebugGroups.push(debugGroups[i]);
        }
      }
      execRenderPass(pass) {
        this.adjustDebugGroups(this.device, pass.debugGroups);
        const renderPass = this.device.createRenderPass(pass.descriptor);
        renderPass.setViewport(pass.viewportX, pass.viewportY, pass.viewportW, pass.viewportH);
        if (pass.execFunc !== null)
          pass.execFunc(renderPass, this);
        this.device.submitPass(renderPass);
        if (pass.postFunc !== null)
          pass.postFunc(this);
      }
      execComputePass(pass) {
        this.adjustDebugGroups(this.device, pass.debugGroups);
        const computePass = this.device.createComputePass();
        if (pass.execFunc !== null)
          pass.execFunc(computePass, this);
        this.device.submitPass(computePass);
        if (pass.postFunc !== null)
          pass.postFunc(this);
      }
      execPass(pass) {
        assert2(this.currentPass === null);
        this.currentPass = pass;
        if (pass.passType === "render")
          this.execRenderPass(pass);
        else if (pass.passType === "compute")
          this.execComputePass(pass);
        this.currentPass = null;
      }
      execGraph(graph) {
        this.scheduleGraph(graph);
        for (let i = 0; i < graph.passes.length; i++)
          this.execPass(graph.passes[i]);
        this.adjustDebugGroups(this.device, []);
        this.singleSampledTextureForResolveTextureID.length = 0;
      }
      //#endregion
    };
  }
});

// noclip/gfx/helpers/GfxMegaStateDescriptorHelpers.ts
function copyChannelBlendState(dst, src) {
  dst.blendDstFactor = src.blendDstFactor;
  dst.blendSrcFactor = src.blendSrcFactor;
  dst.blendMode = src.blendMode;
}
function copyAttachmentState(dst, src) {
  if (dst === void 0) {
    dst = {
      rgbBlendState: {},
      alphaBlendState: {},
      channelWriteMask: 0
    };
  }
  copyChannelBlendState(dst.rgbBlendState, src.rgbBlendState);
  copyChannelBlendState(dst.alphaBlendState, src.alphaBlendState);
  dst.channelWriteMask = src.channelWriteMask;
  return dst;
}
function copyAttachmentsState(dst, src) {
  if (dst.length !== src.length)
    dst.length = src.length;
  for (let i = 0; i < src.length; i++)
    dst[i] = copyAttachmentState(dst[i], src[i]);
}
function setMegaStateFlags(dst, src) {
  if (src.attachmentsState !== void 0)
    copyAttachmentsState(dst.attachmentsState, src.attachmentsState);
  dst.depthCompare = fallbackUndefined2(src.depthCompare, dst.depthCompare);
  dst.depthWrite = fallbackUndefined2(src.depthWrite, dst.depthWrite);
  dst.stencilCompare = fallbackUndefined2(src.stencilCompare, dst.stencilCompare);
  dst.stencilWrite = fallbackUndefined2(src.stencilWrite, dst.stencilWrite);
  dst.stencilPassOp = fallbackUndefined2(src.stencilPassOp, dst.stencilPassOp);
  dst.cullMode = fallbackUndefined2(src.cullMode, dst.cullMode);
  dst.frontFace = fallbackUndefined2(src.frontFace, dst.frontFace);
  dst.polygonOffset = fallbackUndefined2(src.polygonOffset, dst.polygonOffset);
  dst.wireframe = fallbackUndefined2(src.wireframe, dst.wireframe);
}
function copyMegaState(src) {
  const dst = { ...src, attachmentsState: [] };
  copyAttachmentsState(dst.attachmentsState, src.attachmentsState);
  return dst;
}
function makeMegaState(other = null, src = defaultMegaState) {
  const dst = copyMegaState(src);
  if (other !== null)
    setMegaStateFlags(dst, other);
  return dst;
}
function copyAttachmentStateFromSimple(dst, src) {
  if (src.channelWriteMask !== void 0)
    dst.channelWriteMask = src.channelWriteMask;
  if (src.blendMode !== void 0) {
    dst.rgbBlendState.blendMode = src.blendMode;
    dst.alphaBlendState.blendMode = src.blendMode;
  }
  if (src.blendSrcFactor !== void 0) {
    dst.rgbBlendState.blendSrcFactor = src.blendSrcFactor;
    dst.alphaBlendState.blendSrcFactor = src.blendSrcFactor;
  }
  if (src.blendDstFactor !== void 0) {
    dst.rgbBlendState.blendDstFactor = src.blendDstFactor;
    dst.alphaBlendState.blendDstFactor = src.blendDstFactor;
  }
}
function setAttachmentStateSimple(dst, simple) {
  if (dst.attachmentsState === void 0) {
    dst.attachmentsState = [];
    copyAttachmentsState(dst.attachmentsState, defaultMegaState.attachmentsState);
  }
  copyAttachmentStateFromSimple(dst.attachmentsState[0], simple);
  return dst;
}
var defaultBlendState, defaultMegaState, fullscreenMegaState;
var init_GfxMegaStateDescriptorHelpers = __esm({
  "noclip/gfx/helpers/GfxMegaStateDescriptorHelpers.ts"() {
    init_GfxPlatform();
    init_ReversedDepthHelpers();
    init_GfxPlatformUtil();
    defaultBlendState = {
      blendMode: 0 /* Add */,
      blendSrcFactor: 1 /* One */,
      blendDstFactor: 0 /* Zero */
    };
    defaultMegaState = {
      attachmentsState: [{
        channelWriteMask: 7 /* RGB */,
        rgbBlendState: defaultBlendState,
        alphaBlendState: defaultBlendState
      }],
      depthCompare: reverseDepthForCompareMode(3 /* LessEqual */),
      depthWrite: true,
      stencilCompare: 7 /* Always */,
      stencilWrite: false,
      stencilPassOp: 0 /* Keep */,
      cullMode: 0 /* None */,
      frontFace: 0 /* CCW */,
      polygonOffset: false,
      wireframe: false
    };
    fullscreenMegaState = makeMegaState({ depthCompare: 7 /* Always */, depthWrite: false }, defaultMegaState);
  }
});

// noclip/gfx/helpers/GfxShaderLibrary.ts
function glslGenerateFloat(v) {
  let s = v.toString();
  if (!s.includes("."))
    s += ".0";
  if (s.includes("e"))
    s = v.toFixed(5);
  return s;
}
var GfxShaderLibrary;
var init_GfxShaderLibrary = __esm({
  "noclip/gfx/helpers/GfxShaderLibrary.ts"() {
    ((GfxShaderLibrary2) => {
      GfxShaderLibrary2.MatrixLibrary = `
struct Mat2x4 { vec4 mx; vec4 my; };
struct Mat3x4 { vec4 mx; vec4 my; vec4 mz; };
struct Mat4x4 { vec4 mx; vec4 my; vec4 mz; vec4 mw; };

mat4x2 UnpackMatrix(Mat2x4 m) { return mat4x2(transpose(mat4(m.mx, m.my, vec4(0, 0, 0, 0), vec4(0, 0, 0, 1)))); }
mat4x3 UnpackMatrix(Mat3x4 m) { return mat4x3(transpose(mat4(m.mx, m.my, m.mz, vec4(0, 0, 0, 1)))); }
mat4 UnpackMatrix(Mat4x4 m) { return transpose(mat4(m.mx, m.my, m.mz, m.mw)); }
`;
      GfxShaderLibrary2.saturate = `
float saturate(float v) { return clamp(v, 0.0, 1.0); }
vec2 saturate(vec2 v) { return clamp(v, vec2(0.0), vec2(1.0)); }
vec3 saturate(vec3 v) { return clamp(v, vec3(0.0), vec3(1.0)); }
vec4 saturate(vec4 v) { return clamp(v, vec4(0.0), vec4(1.0)); }
`;
      GfxShaderLibrary2.invlerp = `
float invlerp(float a, float b, float v) { return (v - a) / (b - a); }
`;
      GfxShaderLibrary2.MulNormalMatrix = `
vec3 MulNormalMatrix(mat4x3 t_Matrix, vec3 t_Value) {
    // Pull out the squared scaling.
    vec3 t_SqScale = vec3(dot(t_Matrix[0], t_Matrix[0]), dot(t_Matrix[1], t_Matrix[1]), dot(t_Matrix[2], t_Matrix[2]));
    return normalize(t_Matrix * vec4(t_Value / t_SqScale, 0.0));
}
`;
      GfxShaderLibrary2.CalcScaleBias = `
vec2 CalcScaleBias(in vec2 t_Pos, in vec4 t_SB) {
    return t_Pos.xy * t_SB.xy + t_SB.zw;
}
`;
      function makeFullscreenVS(z = `1.0`, w = `1.0`) {
        return `
out vec2 v_TexCoord;

void main() {
    v_TexCoord.x = (gl_VertexID == 1) ? 2.0 : 0.0;
    v_TexCoord.y = (gl_VertexID == 2) ? 2.0 : 0.0;
    gl_Position.xy = v_TexCoord * vec2(2) - vec2(1);
    gl_Position.zw = vec2(${z}, ${w});

#if GFX_CLIPSPACE_NEAR_ZERO()
    gl_Position.z = (gl_Position.z + gl_Position.w) * 0.5;
#endif

#if GFX_VIEWPORT_ORIGIN_TL()
    v_TexCoord.y = 1.0 - v_TexCoord.y;
#endif
}
`;
      }
      GfxShaderLibrary2.makeFullscreenVS = makeFullscreenVS;
      GfxShaderLibrary2.fullscreenVS = makeFullscreenVS();
      GfxShaderLibrary2.fullscreenBlitOneTexPS = `
uniform sampler2D u_Texture;
in vec2 v_TexCoord;

void main() {
    gl_FragColor = texture(SAMPLER_2D(u_Texture), v_TexCoord);
}
`;
      GfxShaderLibrary2.MonochromeNTSC = `
float MonochromeNTSC(vec3 t_Color) {
    // NTSC primaries. Note that this is designed for gamma-space values.
    return dot(t_Color.rgb, vec3(0.299, 0.587, 0.114));
}
`;
      GfxShaderLibrary2.MonochromeNTSCLinear = `
float MonochromeNTSCLinear(vec3 t_Color) {
    // NTSC primaries. Note that this is designed for linear-space values.
    return dot(t_Color.rgb, vec3(0.2125, 0.7154, 0.0721));
}
`;
    })(GfxShaderLibrary || (GfxShaderLibrary = {}));
  }
});

// noclip/gfx/shaderc/GfxShaderCompiler.ts
function defineStr(k, v) {
  return `#define ${k} ${v}`;
}
function parseBinding(layout) {
  if (layout === void 0)
    return null;
  const g = /binding\s*=\s*(\d+)/.exec(layout);
  if (g !== null) {
    const bindingNum = parseInt(g[1], 10);
    if (!Number.isNaN(bindingNum))
      return bindingNum;
  }
  return null;
}
function getSeparateSamplerTypes(combinedSamplerType) {
  let samplerType = ``, textureType = combinedSamplerType;
  if (combinedSamplerType.endsWith(`Shadow`)) {
    textureType = textureType.slice(0, -6);
    samplerType = `Shadow`;
  }
  return [textureType, samplerType];
}
function preprocessShader_GLSL(vendorInfo, type, source, defines = null, maxSamplerBinding = -1) {
  const lines = source.split("\n").map((n) => {
    return n.replace(/\s*[/][/].*$/, "");
  }).filter((n) => {
    const isEmpty = !n || /^\s+$/.test(n);
    return !isEmpty;
  });
  let definesString = "";
  if (defines !== null)
    definesString = [...defines.entries()].map(([k, v]) => defineStr(k, v)).join("\n");
  let precision = lines.filter((line) => line.startsWith("precision")).join("\n") || "precision highp float;";
  let rest = lines.filter((line) => !line.startsWith("precision")).join("\n");
  let extraDefines = `
#define GFX_CLIPSPACE_NEAR_Z()     (${glslGenerateFloat(vendorInfo.clipSpaceNearZ)})
#define GFX_CLIPSPACE_NEAR_ZERO()  (${vendorInfo.clipSpaceNearZ === 0 /* Zero */ ? "1" : "0"})
#define GFX_VIEWPORT_ORIGIN_TL()   (${vendorInfo.viewportOrigin === 1 /* UpperLeft */ ? "1" : "0"})
#define GFX_PLATFORM_WEBGPU()      (${vendorInfo.platform === 1 /* WebGPU */ ? "1" : "0"})
`;
  if (vendorInfo.explicitBindingLocations) {
    let set6 = 0, implicitBinding = 0, location = 0;
    assert2(vendorInfo.separateSamplerTextures);
    rest = rest.replace(/^(layout\((.*)\))?\s*uniform sampler(\w+) (.*);/gm, (substr, cap, layout, combinedSamplerType, samplerName) => {
      let binding = parseBinding(layout);
      if (binding === null)
        binding = implicitBinding++;
      maxSamplerBinding = Math.max(maxSamplerBinding, binding);
      const [textureType, samplerType] = getSeparateSamplerTypes(combinedSamplerType);
      return `
layout(set = ${set6}, binding = ${binding * 2 + 0}) uniform texture${textureType} T_${samplerName};
layout(set = ${set6}, binding = ${binding * 2 + 1}) uniform sampler${samplerType} S_${samplerName};`.trim();
    });
    let bufferBinding = maxSamplerBinding * 2 + 2;
    rest = rest.replace(/^(layout\((.*)\))?\s*uniform(.+{)$/gm, (substr, cap, layout, rest2) => {
      const layout2 = layout ? `${layout}, ` : ``;
      return `layout(${layout2}set = ${set6}, binding = ${bufferBinding++}) uniform ${rest2}`;
    });
    rest = rest.replace(type === "frag" ? /^\b(flat\W+)?(varying|in)\b/gm : /^\b(flat\W+)?(varying|out)\b/gm, (tok) => {
      return `layout(location = ${location++}) ${tok}`;
    });
    extraDefines += `${defineStr(`gl_VertexID`, `gl_VertexIndex`)}
`;
    extraDefines += `${defineStr(`gl_InstanceID`, `gl_InstanceIndex`)}
`;
    precision = precision.replace(/^precision (.*) sampler(.*);$/gm, "");
  } else {
    let implicitBinding = 0;
    rest = rest.replace(/^(layout\((.*)\))?\s*uniform sampler(\w+) (.*);/gm, (substr, cap, layout, combinedSamplerType, samplerName) => {
      let binding = parseBinding(layout);
      if (binding === null)
        binding = implicitBinding++;
      return `uniform sampler${combinedSamplerType} ${samplerName}; // BINDING=${binding}`;
    });
  }
  rest = rest.replace(/\bPU_SAMPLER_(\w+)\((.*?)\)/g, (substr, combinedSamplerType, samplerName) => {
    return `SAMPLER_${combinedSamplerType}(P_${samplerName})`;
  });
  rest = rest.replace(/\bPF_SAMPLER_(\w+)\((.*?)\)/g, (substr, combinedSamplerType, samplerName) => {
    return `PP_SAMPLER_${combinedSamplerType}(P_${samplerName})`;
  });
  rest = rest.replace(/\bPU_TEXTURE\((.*?)\)/g, (substr, samplerName) => {
    return `TEXTURE(P_${samplerName})`;
  });
  if (vendorInfo.separateSamplerTextures) {
    rest = rest.replace(/\bPD_SAMPLER_(\w+)\((.*?)\)/g, (substr, combinedSamplerType, samplerName) => {
      const [textureType, samplerType] = getSeparateSamplerTypes(combinedSamplerType);
      return `texture${textureType} T_P_${samplerName}, sampler${samplerType} S_P_${samplerName}`;
    });
    rest = rest.replace(/\bPP_SAMPLER_(\w+)\((.*?)\)/g, (substr, combinedSamplerType, samplerName) => {
      return `T_${samplerName}, S_${samplerName}`;
    });
    rest = rest.replace(/\bSAMPLER_(\w+)\((.*?)\)/g, (substr, combinedSamplerType, samplerName) => {
      return `sampler${combinedSamplerType}(T_${samplerName}, S_${samplerName})`;
    });
    rest = rest.replace(/\bTEXTURE\((.*?)\)/g, (substr, samplerName) => {
      return `T_${samplerName}`;
    });
  } else {
    rest = rest.replace(/\bPD_SAMPLER_(\w+)\((.*?)\)/g, (substr, combinedSamplerType, samplerName) => {
      return `sampler${combinedSamplerType} P_${samplerName}`;
    });
    rest = rest.replace(/\bPP_SAMPLER_(\w+)\((.*?)\)/g, (substr, combinedSamplerType, samplerName) => {
      return samplerName;
    });
    rest = rest.replace(/\bSAMPLER_(\w+)\((.*?)\)/g, (substr, combinedSamplerType, samplerName) => {
      return samplerName;
    });
    rest = rest.replace(/\bTEXTURE\((.*?)\)/g, (substr, samplerName) => {
      return samplerName;
    });
  }
  const hasFragColor = rest.includes("gl_FragColor");
  return `
${vendorInfo.glslVersion}
${precision}
#define ${type.toUpperCase()}
#define attribute in
#define varying ${type === "vert" ? "out" : "in"}
#define main${type === "vert" ? "VS" : "PS"} main
${extraDefines}
${hasFragColor ? `
#define gl_FragColor o_color
${type === "frag" ? `layout(location = 0) out vec4 o_color;` : ""}
` : ``}
${definesString}
${rest}
`.trim();
}
function preprocessProgram_GLSL(vendorInfo, vert, frag, defines = null) {
  const preprocessedVert = preprocessShader_GLSL(vendorInfo, "vert", vert, defines);
  const preprocessedFrag = preprocessShader_GLSL(vendorInfo, "frag", frag, defines);
  return { vert, frag, preprocessedVert, preprocessedFrag };
}
var init_GfxShaderCompiler = __esm({
  "noclip/gfx/shaderc/GfxShaderCompiler.ts"() {
    init_GfxPlatform();
    init_GfxPlatformUtil();
    init_GfxShaderLibrary();
  }
});

// noclip/gfx/passes/FXAA.ts
function createProgram(cache3) {
  const vert = GfxShaderLibrary.fullscreenVS;
  const frag = `
uniform sampler2D u_Texture;
in vec2 v_TexCoord;

${GfxShaderLibrary.MonochromeNTSC}

vec4 FXAA(PD_SAMPLER_2D(t_Texture), in vec2 t_PixelCenter, in vec2 t_InvResolution) {
    // FXAA v2, based on implementations:
    // http://www.geeks3d.com/20110405/fxaa-fast-approximate-anti-aliasing-demo-glsl-opengl-test-radeon-geforce/
    // https://github.com/mitsuhiko/webgl-meincraft

    float lumaMM = MonochromeNTSC(texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy).rgb);

#if 1
    vec2 t_PixelTopLeft = t_PixelCenter.xy - t_InvResolution.xy * 0.5;
    float lumaNW = MonochromeNTSC(texture      (PU_SAMPLER_2D(t_Texture), t_PixelTopLeft.xy)             .rgb);
    float lumaNE = MonochromeNTSC(textureOffset(PU_SAMPLER_2D(t_Texture), t_PixelTopLeft.xy, ivec2(1, 0)).rgb);
    float lumaSW = MonochromeNTSC(textureOffset(PU_SAMPLER_2D(t_Texture), t_PixelTopLeft.xy, ivec2(0, 1)).rgb);
    float lumaSE = MonochromeNTSC(textureOffset(PU_SAMPLER_2D(t_Texture), t_PixelTopLeft.xy, ivec2(1, 1)).rgb);
#else
    // We're at the pixel center -- pixel edges are 0.5 units away.
    // NOTE(jstpierre): mitsuhiko's port seems to get this wrong?
    vec2 t_PixelSize = t_InvResolution.xy * 0.5;

    float lumaNW = MonochromeNTSC(texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy + t_PixelSize * vec2(-1.0, -1.0)).rgb);
    float lumaNE = MonochromeNTSC(texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy + t_PixelSize * vec2( 1.0, -1.0)).rgb);
    float lumaSW = MonochromeNTSC(texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy + t_PixelSize * vec2(-1.0,  1.0)).rgb);
    float lumaSE = MonochromeNTSC(texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy + t_PixelSize * vec2( 1.0,  1.0)).rgb);
#endif

    vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    const float FXAA_REDUCE_MIN = 1.0/128.0;
    const float FXAA_REDUCE_MUL = 1.0/8.0;
    const float FXAA_SPAN_MAX = 8.0;

    float dirReduce = max(
        (lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL),
        FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0/(min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin)) * t_InvResolution.xy;

    float lumaMin = min(lumaMM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaMM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    vec4 rgbA = (1.0/2.0) * (
        texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy + dir * (1.0/3.0 - 0.5)) +
        texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy + dir * (2.0/3.0 - 0.5)));
    vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (
        texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy + dir * (0.0/3.0 - 0.5)) +
        texture(PU_SAMPLER_2D(t_Texture), t_PixelCenter.xy + dir * (3.0/3.0 - 0.5)));
    float lumaB = MonochromeNTSC(rgbB.rgb);

    vec4 rgbOutput = ((lumaB < lumaMin) || (lumaB > lumaMax)) ? rgbA : rgbB;
    return rgbOutput;
}

void main() {
    vec2 t_InvResolution = 1.0 / vec2(textureSize(TEXTURE(u_Texture), 0));
    gl_FragColor.rgba = FXAA(PP_SAMPLER_2D(u_Texture), v_TexCoord.xy, t_InvResolution);
}
`;
  const program = preprocessProgram_GLSL(cache3.device.queryVendorInfo(), vert, frag);
  return cache3.createProgramSimple(program);
}
var FXAA;
var init_FXAA = __esm({
  "noclip/gfx/passes/FXAA.ts"() {
    init_GfxMegaStateDescriptorHelpers();
    init_GfxShaderLibrary();
    init_GfxPlatform();
    init_GfxRenderGraph();
    init_GfxShaderCompiler();
    FXAA = class {
      gfxProgram;
      gfxSampler;
      constructor(renderCache) {
        this.gfxProgram = createProgram(renderCache);
        this.gfxSampler = renderCache.createSampler({
          wrapS: 1 /* Repeat */,
          wrapT: 1 /* Repeat */,
          minFilter: 0 /* Point */,
          magFilter: 0 /* Point */,
          mipFilter: 0 /* Nearest */
        });
      }
      pushPasses(builder, renderHelper, mainColorTargetID) {
        builder.pushPass((pass) => {
          pass.setDebugName("FXAA");
          pass.attachRenderTargetID(0 /* Color0 */, mainColorTargetID);
          const mainColorResolveTextureID = builder.resolveRenderTarget(mainColorTargetID);
          pass.attachResolveTexture(mainColorResolveTextureID);
          const renderInst = renderHelper.renderInstManager.newRenderInst();
          renderInst.setUniformBuffer(renderHelper.uniformBuffer);
          renderInst.setAllowSkippingIfPipelineNotReady(false);
          renderInst.setMegaStateFlags(fullscreenMegaState);
          renderInst.setBindingLayouts([{ numUniformBuffers: 0, numSamplers: 1 }]);
          renderInst.setDrawCount(3);
          renderInst.setGfxProgram(this.gfxProgram);
          pass.exec((passRenderer, scope) => {
            renderInst.setSamplerBindingsFromTextureMappings([
              { gfxTexture: scope.getResolveTextureForID(mainColorResolveTextureID), gfxSampler: this.gfxSampler }
            ]);
            renderInst.drawOnPass(renderHelper.renderCache, passRenderer);
          });
        });
      }
    };
  }
});

// noclip/gfx/helpers/RenderGraphHelpers.ts
function makeAttachmentClearDescriptor(clearColor) {
  return {
    clearColor,
    clearDepth: reverseDepthForClearValue(1),
    clearStencil: 0
  };
}
function selectFormatSimple(slot) {
  if (slot === 0 /* Color0 */)
    return GfxFormat.U8_RGBA_RT;
  else if (slot === 4 /* DepthStencil */)
    return GfxFormat.D24;
  else
    throw new Error("whoops");
}
function selectSampleCount(renderInput) {
  if (renderInput.antialiasingMode === 2 /* MSAAx4 */)
    return 4;
  else
    return 1;
}
function setBackbufferDescSimple(desc, renderInput) {
  const sampleCount = selectSampleCount(renderInput);
  desc.setDimensions(renderInput.backbufferWidth, renderInput.backbufferHeight, sampleCount);
}
function makeBackbufferDescSimple(slot, renderInput, clearDescriptor) {
  const pixelFormat = selectFormatSimple(slot);
  const desc = new GfxrRenderTargetDescription(pixelFormat);
  setBackbufferDescSimple(desc, renderInput);
  if (clearDescriptor !== null) {
    desc.clearColor = clearDescriptor.clearColor;
    desc.clearDepth = clearDescriptor.clearDepth;
    desc.clearStencil = clearDescriptor.clearStencil;
  }
  return desc;
}
var standardFullClearRenderPassDescriptor, opaqueBlackFullClearRenderPassDescriptor, AntialiasingSupport;
var init_RenderGraphHelpers = __esm({
  "noclip/gfx/helpers/RenderGraphHelpers.ts"() {
    init_GfxPlatform();
    init_Color();
    init_ReversedDepthHelpers();
    init_GfxRenderGraph();
    init_FXAA();
    standardFullClearRenderPassDescriptor = makeAttachmentClearDescriptor(colorNewFromRGBA(0.88, 0.88, 0.88, 1));
    opaqueBlackFullClearRenderPassDescriptor = makeAttachmentClearDescriptor(OpaqueBlack);
    AntialiasingSupport = class {
      constructor(renderHelper) {
        this.renderHelper = renderHelper;
      }
      renderHelper;
      fxaa = null;
      pushPasses(builder, renderInput, mainColorTargetID) {
        if (renderInput.antialiasingMode === 1 /* FXAA */) {
          if (this.fxaa === null)
            this.fxaa = new FXAA(this.renderHelper.renderCache);
          this.fxaa.pushPasses(builder, this.renderHelper, mainColorTargetID);
        }
      }
    };
  }
});

// noclip/gfx/platform/GfxPlatformObjUtil.ts
function arrayCopy(a, copyFunc) {
  const b = Array(a.length);
  for (let i = 0; i < a.length; i++)
    b[i] = copyFunc(a[i]);
  return b;
}
function arrayEqual(a, b, e) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (!e(a[i], b[i]))
      return false;
  return true;
}
function gfxSamplerBindingCopy(a) {
  return { ...a };
}
function gfxSamplerBindingNew() {
  return { gfxSampler: null, gfxTexture: null };
}
function gfxBufferBindingCopy(a) {
  return { ...a };
}
function gfxBindingsDescriptorCopy(a) {
  const bindingLayout = a.bindingLayout;
  const samplerBindings = arrayCopy(a.samplerBindings, gfxSamplerBindingCopy);
  const uniformBufferBindings = arrayCopy(a.uniformBufferBindings, gfxBufferBindingCopy);
  return { bindingLayout, samplerBindings, uniformBufferBindings };
}
function gfxBindingLayoutSamplerDescriptorCopy(a) {
  return { ...a };
}
function gfxBindingLayoutDescriptorCopy(a) {
  const numSamplers = a.numSamplers;
  const numUniformBuffers = a.numUniformBuffers;
  const samplerEntries = a.samplerEntries !== void 0 ? arrayCopy(a.samplerEntries, gfxBindingLayoutSamplerDescriptorCopy) : void 0;
  return { numSamplers, numUniformBuffers, samplerEntries };
}
function gfxRenderPipelineDescriptorCopy(a) {
  const bindingLayouts2 = arrayCopy(a.bindingLayouts, gfxBindingLayoutDescriptorCopy);
  const inputLayout = a.inputLayout;
  const program = a.program;
  const topology = a.topology;
  const megaStateDescriptor = copyMegaState(a.megaStateDescriptor);
  const colorAttachmentFormats = a.colorAttachmentFormats.slice();
  const depthStencilAttachmentFormat = a.depthStencilAttachmentFormat;
  const sampleCount = a.sampleCount;
  return { bindingLayouts: bindingLayouts2, inputLayout, megaStateDescriptor, program, topology, colorAttachmentFormats, depthStencilAttachmentFormat, sampleCount };
}
function gfxVertexAttributeDescriptorCopy(a) {
  return { ...a };
}
function gfxInputLayoutBufferDescriptorCopy(a) {
  return a !== null ? { ...a } : null;
}
function gfxInputLayoutDescriptorCopy(a) {
  const vertexAttributeDescriptors = arrayCopy(a.vertexAttributeDescriptors, gfxVertexAttributeDescriptorCopy);
  const vertexBufferDescriptors = arrayCopy(a.vertexBufferDescriptors, gfxInputLayoutBufferDescriptorCopy);
  const indexBufferFormat = a.indexBufferFormat;
  return { vertexAttributeDescriptors, vertexBufferDescriptors, indexBufferFormat };
}
function gfxBufferBindingEquals(a, b) {
  return a.buffer === b.buffer && a.byteSize === b.byteSize;
}
function gfxSamplerBindingEquals(a, b) {
  if (a === null) return b === null;
  if (b === null) return false;
  return a.gfxSampler === b.gfxSampler && a.gfxTexture === b.gfxTexture;
}
function gfxBindingsDescriptorEquals(a, b) {
  if (a.samplerBindings.length !== b.samplerBindings.length) return false;
  if (!arrayEqual(a.samplerBindings, b.samplerBindings, gfxSamplerBindingEquals)) return false;
  if (!arrayEqual(a.uniformBufferBindings, b.uniformBufferBindings, gfxBufferBindingEquals)) return false;
  if (!gfxBindingLayoutEquals(a.bindingLayout, b.bindingLayout)) return false;
  return true;
}
function gfxChannelBlendStateEquals(a, b) {
  return a.blendMode === b.blendMode && a.blendSrcFactor === b.blendSrcFactor && a.blendDstFactor === b.blendDstFactor;
}
function gfxAttachmentStateEquals(a, b) {
  if (!gfxChannelBlendStateEquals(a.rgbBlendState, b.rgbBlendState)) return false;
  if (!gfxChannelBlendStateEquals(a.alphaBlendState, b.alphaBlendState)) return false;
  if (a.channelWriteMask !== b.channelWriteMask) return false;
  return true;
}
function gfxMegaStateDescriptorEquals(a, b) {
  if (!arrayEqual(a.attachmentsState, b.attachmentsState, gfxAttachmentStateEquals))
    return false;
  return a.depthCompare === b.depthCompare && a.depthWrite === b.depthWrite && a.stencilCompare === b.stencilCompare && a.stencilWrite === b.stencilWrite && a.stencilPassOp === b.stencilPassOp && a.cullMode === b.cullMode && a.frontFace === b.frontFace && a.polygonOffset === b.polygonOffset;
}
function gfxBindingLayoutEquals(a, b) {
  return a.numSamplers === b.numSamplers && a.numUniformBuffers === b.numUniformBuffers;
}
function gfxProgramEquals(a, b) {
  return a.ResourceUniqueId === b.ResourceUniqueId;
}
function gfxFormatEquals(a, b) {
  return a === b;
}
function gfxRenderPipelineDescriptorEquals(a, b) {
  if (a.topology !== b.topology) return false;
  if (a.inputLayout !== b.inputLayout) return false;
  if (a.sampleCount !== b.sampleCount) return false;
  if (!gfxMegaStateDescriptorEquals(a.megaStateDescriptor, b.megaStateDescriptor)) return false;
  if (!gfxProgramEquals(a.program, b.program)) return false;
  if (!arrayEqual(a.bindingLayouts, b.bindingLayouts, gfxBindingLayoutEquals)) return false;
  if (!arrayEqual(a.colorAttachmentFormats, b.colorAttachmentFormats, gfxFormatEquals)) return false;
  if (a.depthStencilAttachmentFormat !== b.depthStencilAttachmentFormat) return false;
  return true;
}
function gfxVertexAttributeDescriptorEquals(a, b) {
  return a.bufferIndex === b.bufferIndex && a.bufferByteOffset === b.bufferByteOffset && a.location === b.location && a.format === b.format;
}
function gfxInputLayoutBufferDescriptorEquals(a, b) {
  if (a === null) return b === null;
  if (b === null) return false;
  return a.byteStride === b.byteStride && a.frequency === b.frequency;
}
function gfxInputLayoutDescriptorEquals(a, b) {
  if (a.indexBufferFormat !== b.indexBufferFormat) return false;
  if (!arrayEqual(a.vertexBufferDescriptors, b.vertexBufferDescriptors, gfxInputLayoutBufferDescriptorEquals)) return false;
  if (!arrayEqual(a.vertexAttributeDescriptors, b.vertexAttributeDescriptors, gfxVertexAttributeDescriptorEquals)) return false;
  return true;
}
function gfxSamplerDescriptorEquals(a, b) {
  return a.wrapS === b.wrapS && a.wrapT === b.wrapT && a.wrapQ === b.wrapQ && a.minFilter === b.minFilter && a.magFilter === b.magFilter && a.mipFilter === b.mipFilter && a.minLOD === b.minLOD && a.maxLOD === b.maxLOD && a.maxAnisotropy === b.maxAnisotropy && a.compareMode === b.compareMode;
}
function gfxRenderAttachmentViewEquals(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  return a.level === b.level && a.z === b.z;
}
var init_GfxPlatformObjUtil = __esm({
  "noclip/gfx/platform/GfxPlatformObjUtil.ts"() {
    init_GfxMegaStateDescriptorHelpers();
  }
});

// noclip/Common/Compression/Yay0.ts
function decompress2(srcBuffer) {
  const srcView = srcBuffer.createDataView();
  assert(readString(srcBuffer, 0, 4) === "Yay0");
  let uncompressedSize = srcView.getUint32(4, false);
  let lengthsOffs = srcView.getUint32(8, false);
  let dataOffs = srcView.getUint32(12, false);
  let flagsOffs = 16;
  const dstBuffer = new Uint8Array(uncompressedSize);
  let dstOffs = 0;
  while (true) {
    const commandByte = srcView.getUint8(flagsOffs++);
    let i = 8;
    while (i--) {
      if (commandByte & 1 << i) {
        uncompressedSize--;
        dstBuffer[dstOffs++] = srcView.getUint8(dataOffs++);
      } else {
        const tmp = srcView.getUint16(lengthsOffs, false);
        lengthsOffs += 2;
        const windowOffset = (tmp & 4095) + 1;
        let windowLength = (tmp >> 12) + 2;
        if (windowLength === 2) {
          windowLength += srcView.getUint8(dataOffs++) + 16;
        }
        assert(windowLength >= 3 && windowLength <= 273);
        let copyOffs = dstOffs - windowOffset;
        uncompressedSize -= windowLength;
        while (windowLength--)
          dstBuffer[dstOffs++] = dstBuffer[copyOffs++];
      }
      if (uncompressedSize <= 0)
        return new ArrayBufferSlice(dstBuffer.buffer);
    }
  }
}
var init_Yay0 = __esm({
  "noclip/Common/Compression/Yay0.ts"() {
    init_util();
    init_ArrayBufferSlice();
  }
});

// noclip/Common/JSYSTEM/JKRArchive.ts
function findFileInDir(dir, filename) {
  const file = dir.files.find((file2) => file2.name.toLowerCase() === filename.toLowerCase());
  return file || null;
}
function decompress3(src, type) {
  if (type === 2 /* Yaz0 */)
    return decompress(src);
  else if (type === 1 /* Yay0 */)
    return decompress2(src);
  else
    throw new Error("whoops");
}
function parse(buffer, name = "") {
  const view = buffer.createDataView();
  const magic = readString(buffer, 0, 4);
  assert(magic === "RARC" || magic === "CRAR");
  const littleEndian = magic === "CRAR";
  const size = view.getUint32(4, littleEndian);
  const dataHeaderOffs = view.getUint32(8, littleEndian);
  assert(dataHeaderOffs === 32);
  const dataHeaderSize = view.getUint32(12, littleEndian);
  const totalDataSize = view.getUint32(16, littleEndian);
  const mramDataSize = view.getUint32(20, littleEndian);
  const aramDataSize = view.getUint32(24, littleEndian);
  const dataOffs = dataHeaderOffs + dataHeaderSize;
  const nodeCount = view.getUint32(32, littleEndian);
  const nodeTableOffs = view.getUint32(36, littleEndian) + dataHeaderOffs;
  const fileEntryCount = view.getUint32(40, littleEndian);
  const fileEntryTableOffs = view.getUint32(44, littleEndian) + dataHeaderOffs;
  const strTableOffs = view.getUint32(52, littleEndian) + dataHeaderOffs;
  let dirTableIdx = nodeTableOffs;
  const dirEntries = [];
  const allFiles = [];
  for (let i = 0; i < nodeCount; i++) {
    let type = readString(buffer, dirTableIdx + 0, 4, false);
    if (littleEndian)
      type = type[3] + type[2] + type[1] + type[0];
    const nameOffs = view.getUint32(dirTableIdx + 4, littleEndian);
    const name2 = readString(buffer, strTableOffs + nameOffs, -1, true);
    const nameHash = view.getUint16(dirTableIdx + 8, littleEndian);
    const fileEntryCount2 = view.getUint16(dirTableIdx + 10, littleEndian);
    const fileEntryFirstIndex = view.getUint32(dirTableIdx + 12, littleEndian);
    const files = [];
    const subdirIndexes = [];
    let fileEntryIdx = fileEntryTableOffs + fileEntryFirstIndex * 20;
    for (let j = 0; j < fileEntryCount2; j++) {
      const index = (fileEntryIdx - fileEntryTableOffs) / 20;
      const id = view.getUint16(fileEntryIdx + 0, littleEndian);
      const nameHash2 = view.getUint16(fileEntryIdx + 2, littleEndian);
      const flagsAndNameOffs = view.getUint32(fileEntryIdx + 4, littleEndian);
      let flags = flagsAndNameOffs >>> 24 & 255;
      const nameOffs2 = flagsAndNameOffs & 16777215;
      const name3 = readString(buffer, strTableOffs + nameOffs2, -1, true);
      const entryDataOffs = view.getUint32(fileEntryIdx + 8, littleEndian);
      const entryDataSize = view.getUint32(fileEntryIdx + 12, littleEndian);
      fileEntryIdx += 20;
      if (name3 === "." || name3 === "..")
        continue;
      const isDirectory = !!(flags & 2 /* Directory */);
      if (isDirectory) {
        const subdirEntryIndex = entryDataOffs;
        subdirIndexes.push(subdirEntryIndex);
      } else {
        const offs = dataOffs + entryDataOffs;
        const rawFileBuffer = buffer.slice(offs, offs + entryDataSize);
        let compressionType = 0 /* None */;
        let fileBuffer;
        if (!!(flags & 4 /* Compressed */))
          compressionType = flags & 128 /* CompressionType */ ? 2 /* Yaz0 */ : 1 /* Yay0 */;
        if (compressionType !== 0 /* None */) {
          fileBuffer = decompress3(rawFileBuffer, compressionType);
        } else {
          fileBuffer = rawFileBuffer;
        }
        fileBuffer.name = name3;
        const file = { index, id, name: name3, flags, compressionType, buffer: fileBuffer };
        files.push(file);
        allFiles.push(file);
      }
    }
    dirEntries.push({ name: name2, type, files, subdirIndexes });
    dirTableIdx += 16;
  }
  const dirs = [];
  function translateDirEntry(i) {
    if (dirs[i] !== void 0)
      return dirs[i];
    const dirEntry = dirEntries[i];
    const name2 = dirEntry.name, type = dirEntry.type, files = dirEntry.files;
    const subdirs = dirEntry.subdirIndexes.map((i2) => translateDirEntry(i2));
    const dir = { name: name2, type, files, subdirs };
    dirs[i] = dir;
    return dir;
  }
  const root = translateDirEntry(0);
  assert(root.type === "ROOT");
  return new JKRArchive(allFiles, root, name);
}
var JKRArchive;
var init_JKRArchive = __esm({
  "noclip/Common/JSYSTEM/JKRArchive.ts"() {
    init_util();
    init_Yay0();
    init_Yaz0();
    JKRArchive = class {
      constructor(files, root, name) {
        this.files = files;
        this.root = root;
        this.name = name;
      }
      files;
      root;
      name;
      findDirParts(parts) {
        let dir = this.root;
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          dir = dir.subdirs.find((subdir) => subdir.name.toLowerCase() === part);
          if (dir === void 0)
            return null;
        }
        return dir;
      }
      findDir(path) {
        return this.findDirParts(path.toLowerCase().split("/"));
      }
      findFile(path) {
        path = path.toLowerCase();
        const parts = path.split("/");
        const filename = parts.pop();
        const dir = this.findDirParts(parts);
        if (dir === null)
          return null;
        return findFileInDir(dir, filename);
      }
      findFileData(path) {
        const file = this.findFile(path);
        if (file === null)
          return null;
        return file.buffer;
      }
      findFilenameData(name) {
        for (let i = 0; i < this.files.length; i++)
          if (this.files[i].name.toLowerCase() === name.toLowerCase())
            return this.files[i].buffer;
        return null;
      }
    };
  }
});

// noclip/HashMap.ts
function hashCodeNumberUpdate(hash, v) {
  hash += v;
  hash += hash << 10;
  hash += hash >>> 6;
  return hash >>> 0;
}
function hashCodeNumberFinish(hash) {
  hash += hash << 3;
  hash ^= hash >>> 11;
  hash += hash << 15;
  return hash >>> 0;
}
function nullHashFunc(k) {
  return 0;
}
var HashBucket, HashMap;
var init_HashMap = __esm({
  "noclip/HashMap.ts"() {
    HashBucket = class {
      keys = [];
      values = [];
    };
    HashMap = class {
      constructor(keyEqualFunc, keyHashFunc) {
        this.keyEqualFunc = keyEqualFunc;
        this.keyHashFunc = keyHashFunc;
      }
      keyEqualFunc;
      keyHashFunc;
      buckets = /* @__PURE__ */ new Map();
      findBucketIndex(bucket, k) {
        for (let i = 0; i < bucket.keys.length; i++)
          if (this.keyEqualFunc(k, bucket.keys[i]))
            return i;
        return -1;
      }
      get(k) {
        const bw = this.keyHashFunc(k);
        const bucket = this.buckets.get(bw);
        if (bucket === void 0) return null;
        const bi = this.findBucketIndex(bucket, k);
        if (bi < 0) return null;
        return bucket.values[bi];
      }
      add(k, v) {
        const bw = this.keyHashFunc(k);
        if (this.buckets.get(bw) === void 0) this.buckets.set(bw, new HashBucket());
        const bucket = this.buckets.get(bw);
        bucket.keys.push(k);
        bucket.values.push(v);
      }
      delete(k) {
        const bw = this.keyHashFunc(k);
        const bucket = this.buckets.get(bw);
        if (bucket === void 0) return;
        const bi = this.findBucketIndex(bucket, k);
        if (bi === -1) return;
        bucket.keys.splice(bi, 1);
        bucket.values.splice(bi, 1);
        if (bucket.keys.length === 0)
          this.buckets.delete(bw);
      }
      clear() {
        this.buckets.clear();
      }
      size() {
        let acc = 0;
        for (const bucket of this.buckets.values())
          acc += bucket.values.length;
        return acc;
      }
      *values() {
        for (const bucket of this.buckets.values())
          for (let j = bucket.values.length - 1; j >= 0; j--)
            yield bucket.values[j];
      }
      *items() {
        for (const bucket of this.buckets.values())
          for (let j = bucket.keys.length - 1; j >= 0; j--)
            yield [bucket.keys[j], bucket.values[j]];
      }
    };
  }
});

// noclip/gx/gx_enum.ts
var TexFormat, TexPalette;
var init_gx_enum = __esm({
  "noclip/gx/gx_enum.ts"() {
    TexFormat = /* @__PURE__ */ ((TexFormat2) => {
      TexFormat2[TexFormat2["I4"] = 0] = "I4";
      TexFormat2[TexFormat2["I8"] = 1] = "I8";
      TexFormat2[TexFormat2["IA4"] = 2] = "IA4";
      TexFormat2[TexFormat2["IA8"] = 3] = "IA8";
      TexFormat2[TexFormat2["RGB565"] = 4] = "RGB565";
      TexFormat2[TexFormat2["RGB5A3"] = 5] = "RGB5A3";
      TexFormat2[TexFormat2["RGBA8"] = 6] = "RGBA8";
      TexFormat2[TexFormat2["C4"] = 8] = "C4";
      TexFormat2[TexFormat2["C8"] = 9] = "C8";
      TexFormat2[TexFormat2["C14X2"] = 10] = "C14X2";
      TexFormat2[TexFormat2["CMPR"] = 14] = "CMPR";
      return TexFormat2;
    })(TexFormat || {});
    TexPalette = /* @__PURE__ */ ((TexPalette2) => {
      TexPalette2[TexPalette2["IA8"] = 0] = "IA8";
      TexPalette2[TexPalette2["RGB565"] = 1] = "RGB565";
      TexPalette2[TexPalette2["RGB5A3"] = 2] = "RGB5A3";
      return TexPalette2;
    })(TexPalette || {});
  }
});

// noclip/gx/gx_displaylist.ts
function getAttrInputForAttr(attrib) {
  if (attrib === 9 /* POS */)
    return 2 /* POS */;
  else if (attrib === 10 /* NRM */)
    return 3 /* NRM */;
  else if (attrib === 11 /* CLR0 */)
    return 6 /* CLR0 */;
  else if (attrib === 12 /* CLR1 */)
    return 7 /* CLR1 */;
  else
    throw new Error("whoops");
}
function getAttributeComponentByteSizeRaw(compType) {
  switch (compType) {
    case 0 /* U8 */:
    case 1 /* S8 */:
    case 5 /* RGBA8 */:
      return 1;
    case 2 /* U16 */:
    case 3 /* S16 */:
      return 2;
    case 4 /* F32 */:
      return 4;
  }
}
function isVtxAttribMtxIdx(vtxAttrib) {
  return vtxAttrib === 0 /* PNMTXIDX */ || isVtxAttribTexMtxIdx(vtxAttrib);
}
function isVtxAttribTexMtxIdx(vtxAttrib) {
  switch (vtxAttrib) {
    case 1 /* TEX0MTXIDX */:
    case 2 /* TEX1MTXIDX */:
    case 3 /* TEX2MTXIDX */:
    case 4 /* TEX3MTXIDX */:
    case 5 /* TEX4MTXIDX */:
    case 6 /* TEX5MTXIDX */:
    case 7 /* TEX6MTXIDX */:
    case 8 /* TEX7MTXIDX */:
      return true;
    default:
      return false;
  }
}
function isVtxAttribColor(vtxAttrib) {
  switch (vtxAttrib) {
    case 11 /* CLR0 */:
    case 12 /* CLR1 */:
      return true;
    default:
      return false;
  }
}
function isVtxAttribTex(vtxAttrib) {
  switch (vtxAttrib) {
    case 13 /* TEX0 */:
    case 14 /* TEX1 */:
    case 15 /* TEX2 */:
    case 16 /* TEX3 */:
    case 17 /* TEX4 */:
    case 18 /* TEX5 */:
    case 19 /* TEX6 */:
    case 20 /* TEX7 */:
      return true;
    default:
      return false;
  }
}
function getAttributeComponentByteSize(vtxAttrib, vatFormat) {
  if (isVtxAttribMtxIdx(vtxAttrib))
    return 1;
  return getAttributeComponentByteSizeRaw(vatFormat.compType);
}
function getAttributeByteSizeRaw(vtxAttrib, vatFormat) {
  if (isVtxAttribMtxIdx(vtxAttrib))
    return 1;
  if (isVtxAttribColor(vtxAttrib)) {
    switch (vatFormat.compType) {
      case 0 /* RGB565 */:
        return 2;
      case 1 /* RGB8 */:
        return 3;
      case 2 /* RGBX8 */:
        return 4;
      case 3 /* RGBA4 */:
        return 2;
      case 4 /* RGBA6 */:
        return 3;
      case 5 /* RGBA8 */:
        return 4;
    }
  }
  const compSize = getAttributeComponentByteSize(vtxAttrib, vatFormat);
  const compCount = getAttributeComponentCount(vtxAttrib, vatFormat);
  return compSize * compCount;
}
function getAttributeByteSize(vat, vtxAttrib) {
  return getAttributeByteSizeRaw(vtxAttrib, vat[vtxAttrib]);
}
function getAttributeFormatCompFlagsRaw(vtxAttrib, compCnt) {
  switch (vtxAttrib) {
    case 9 /* POS */:
      if (compCnt === 0 /* POS_XY */)
        return 2 /* RG */;
      else if (compCnt === 1 /* POS_XYZ */)
        return 3 /* RGB */;
    case 10 /* NRM */:
      return 3 /* RGB */;
    case 11 /* CLR0 */:
    case 12 /* CLR1 */:
      if (compCnt === 0 /* CLR_RGB */)
        return 3 /* RGB */;
      else if (compCnt === 1 /* CLR_RGBA */)
        return 4 /* RGBA */;
    case 13 /* TEX0 */:
    case 14 /* TEX1 */:
    case 15 /* TEX2 */:
    case 16 /* TEX3 */:
    case 17 /* TEX4 */:
    case 18 /* TEX5 */:
    case 19 /* TEX6 */:
    case 20 /* TEX7 */:
      if (compCnt === 0 /* TEX_S */)
        return 1 /* R */;
      else if (compCnt === 1 /* TEX_ST */)
        return 2 /* RG */;
    case 255 /* NULL */:
    default:
      throw new Error("whoops");
  }
}
function getAttributeFormatCompFlags(vtxAttrib, vatFormat) {
  if (isVtxAttribMtxIdx(vtxAttrib))
    return 1 /* R */;
  return getAttributeFormatCompFlagsRaw(vtxAttrib, vatFormat.compCnt);
}
function getAttributeComponentCount(vtxAttrib, vatFormat) {
  if (vtxAttrib === 10 /* NRM */ && vatFormat.compCnt === 1 /* NRM_NBT */)
    return 9;
  else
    return getFormatCompFlagsComponentCount(getAttributeFormatCompFlags(vtxAttrib, vatFormat));
}
function getComponentShiftRaw(compType, compShift) {
  switch (compType) {
    case 4 /* F32 */:
    case 5 /* RGBA8 */:
      return 0;
    case 0 /* U8 */:
    case 2 /* U16 */:
    case 1 /* S8 */:
    case 3 /* S16 */:
      return compShift;
  }
}
function getComponentShift(vtxAttrib, vatFormat) {
  if (isVtxAttribMtxIdx(vtxAttrib))
    return 0;
  if (vtxAttrib === 10 /* NRM */) {
    if (vatFormat.compType === 0 /* U8 */ || vatFormat.compType === 1 /* S8 */)
      return 6;
    else if (vatFormat.compType === 2 /* U16 */ || vatFormat.compType === 3 /* S16 */)
      return 14;
    else
      throw new Error("whoops");
  }
  return getComponentShiftRaw(vatFormat.compType, vatFormat.compShift);
}
function getComponentType(vtxAttrib, vatFormat) {
  if (isVtxAttribMtxIdx(vtxAttrib))
    return 0 /* U8 */;
  return vatFormat.compType;
}
function getIndexNumComponents(vtxAttrib, vatFormat) {
  if (vtxAttrib === 10 /* NRM */ && vatFormat.compCnt === 2 /* NRM_NBT3 */)
    return 3;
  else
    return 1;
}
function getAttrName(vtxAttrib) {
  switch (vtxAttrib) {
    case 0 /* PNMTXIDX */:
      return `PNMTXIDX`;
    case 1 /* TEX0MTXIDX */:
      return `TEX0MTXIDX`;
    case 2 /* TEX1MTXIDX */:
      return `TEX1MTXIDX`;
    case 3 /* TEX2MTXIDX */:
      return `TEX2MTXIDX`;
    case 4 /* TEX3MTXIDX */:
      return `TEX3MTXIDX`;
    case 5 /* TEX4MTXIDX */:
      return `TEX4MTXIDX`;
    case 6 /* TEX5MTXIDX */:
      return `TEX5MTXIDX`;
    case 7 /* TEX6MTXIDX */:
      return `TEX6MTXIDX`;
    case 8 /* TEX7MTXIDX */:
      return `TEX7MTXIDX`;
    case 9 /* POS */:
      return `POS`;
    case 10 /* NRM */:
      return `NRM`;
    case 11 /* CLR0 */:
      return `CLR0`;
    case 12 /* CLR1 */:
      return `CLR1`;
    case 13 /* TEX0 */:
      return `TEX0`;
    case 14 /* TEX1 */:
      return `TEX1`;
    case 15 /* TEX2 */:
      return `TEX2`;
    case 16 /* TEX3 */:
      return `TEX3`;
    case 17 /* TEX4 */:
      return `TEX4`;
    case 18 /* TEX5 */:
      return `TEX5`;
    case 19 /* TEX6 */:
      return `TEX6`;
    case 20 /* TEX7 */:
      return `TEX7`;
    default:
      throw new Error("whoops");
  }
}
function translateSourceVatLayout(vatFormat, vcd) {
  let srcVertexSize = 0;
  for (let vtxAttrib = 0; vtxAttrib < vcd.length; vtxAttrib++) {
    const vtxAttrDesc = vcd[vtxAttrib];
    const vtxAttrFmt = vatFormat[vtxAttrib];
    if (!vtxAttrDesc || vtxAttrDesc.type === 0 /* NONE */ || vtxAttrDesc.type === 4 /* ZERO */)
      continue;
    const srcIndexComponentCount = getIndexNumComponents(vtxAttrib, vtxAttrFmt);
    if (isVtxAttribMtxIdx(vtxAttrib))
      assert(vtxAttrDesc.type === 1 /* DIRECT */);
    if (vtxAttrDesc.type === 1 /* DIRECT */)
      srcVertexSize += getAttributeByteSizeRaw(vtxAttrib, vtxAttrFmt);
    else if (vtxAttrDesc.type === 2 /* INDEX8 */)
      srcVertexSize += 1 * srcIndexComponentCount;
    else if (vtxAttrDesc.type === 3 /* INDEX16 */)
      srcVertexSize += 2 * srcIndexComponentCount;
  }
  return { srcVertexSize, vatFormat, vcd };
}
function compileLoadedVertexLayout(vcd, useNBT = false) {
  const bufferIndex = 0;
  function getFormatForAttrInput(attrInput) {
    switch (attrInput) {
      case 0 /* TEX0123MTXIDX */:
      case 1 /* TEX4567MTXIDX */:
        return GfxFormat.U8_RGBA_NORM;
      case 2 /* POS */:
        return GfxFormat.F32_RGBA;
      // Also can include PNMTXIDX if the material requests it; assume it does.
      case 3 /* NRM */:
      case 4 /* BINRM */:
      case 5 /* TANGENT */:
        return GfxFormat.F32_RGB;
      case 6 /* CLR0 */:
      case 7 /* CLR1 */:
        return GfxFormat.U8_RGBA_NORM;
      case 8 /* TEX01 */:
      case 9 /* TEX23 */:
      case 10 /* TEX45 */:
      case 11 /* TEX67 */:
        return GfxFormat.F32_RGBA;
      default:
        throw new Error("whoops");
    }
  }
  function allocateVertexInput(attrInput, format = getFormatForAttrInput(attrInput)) {
    const existingInput = singleVertexInputLayouts.find((layout) => layout.attrInput === attrInput);
    if (existingInput !== void 0) {
      return existingInput;
    } else {
      const formatComponentSize = getFormatCompByteSize(format);
      const formatComponentCount = getFormatComponentCount(format);
      dstVertexSize = align(dstVertexSize, formatComponentSize);
      const bufferOffset = dstVertexSize;
      dstVertexSize += formatComponentSize * formatComponentCount;
      const input2 = { attrInput, bufferIndex, bufferOffset, format };
      singleVertexInputLayouts.push(input2);
      return input2;
    }
  }
  let dstVertexSize = 0;
  const singleVertexInputLayouts = [];
  const vertexAttributeOffsets = [];
  const vertexAttributeFormats = [];
  for (let vtxAttrib = 0; vtxAttrib < vcd.length; vtxAttrib++) {
    const vtxAttrDesc = vcd[vtxAttrib];
    if (!vtxAttrDesc || vtxAttrDesc.type === 0 /* NONE */)
      continue;
    const outputMode = fallbackUndefined(vtxAttrDesc.outputMode, 0 /* VertexData */);
    if (outputMode === 2 /* None */)
      continue;
    let input2;
    let fieldFormat;
    let fieldCompOffset = 0;
    if (outputMode === 1 /* Index */) {
      const attrInput = getAttrInputForAttr(vtxAttrib);
      input2 = allocateVertexInput(attrInput, GfxFormat.U16_R);
      fieldFormat = input2.format;
    } else if (isVtxAttribTexMtxIdx(vtxAttrib)) {
      const attrInput = vtxAttrib < 5 /* TEX4MTXIDX */ ? 0 /* TEX0123MTXIDX */ : 1 /* TEX4567MTXIDX */;
      input2 = allocateVertexInput(attrInput);
      fieldCompOffset = vtxAttrib - 1 /* TEX0MTXIDX */ & 3;
      fieldFormat = GfxFormat.U8_RGBA;
    } else if (vtxAttrib === 9 /* POS */) {
      input2 = allocateVertexInput(2 /* POS */);
      fieldFormat = GfxFormat.F32_RGB;
    } else if (vtxAttrib === 0 /* PNMTXIDX */) {
      input2 = allocateVertexInput(2 /* POS */);
      fieldCompOffset = 3;
      fieldFormat = GfxFormat.F32_R;
    } else if (vtxAttrib === 10 /* NRM */ && useNBT) {
      input2 = allocateVertexInput(3 /* NRM */);
      allocateVertexInput(4 /* BINRM */);
      allocateVertexInput(5 /* TANGENT */);
      fieldFormat = input2.format;
    } else if (vtxAttrib === 10 /* NRM */) {
      input2 = allocateVertexInput(3 /* NRM */);
      fieldFormat = input2.format;
    } else if (isVtxAttribTex(vtxAttrib)) {
      const texAttr = vtxAttrib - 13 /* TEX0 */;
      const attrInput = 8 /* TEX01 */ + (texAttr >>> 1);
      input2 = allocateVertexInput(attrInput);
      fieldCompOffset = (texAttr & 1) * 2;
      fieldFormat = GfxFormat.F32_RG;
    } else if (isVtxAttribColor(vtxAttrib)) {
      const attrInput = getAttrInputForAttr(vtxAttrib);
      input2 = allocateVertexInput(attrInput);
      fieldFormat = input2.format;
    } else {
      throw new Error("whoops");
    }
    const fieldByteOffset = getFormatCompByteSize(input2.format) * fieldCompOffset;
    vertexAttributeOffsets[vtxAttrib] = input2.bufferOffset + fieldByteOffset;
    vertexAttributeFormats[vtxAttrib] = fieldFormat;
  }
  dstVertexSize = align(dstVertexSize, 4);
  const vertexBufferStrides = [dstVertexSize];
  const indexFormat = GfxFormat.U16_R;
  return { indexFormat, vertexBufferStrides, singleVertexInputLayouts, vertexAttributeOffsets, vertexAttributeFormats };
}
function generateRunVertices(loadedVertexLayout, vatLayout) {
  function compileVtxArrayViewName(vtxAttrib) {
    return `vtxArrayViews[${vtxAttrib}]`;
  }
  function compileVatLayoutAttribute(vtxAttrib) {
    const vtxAttrFmt = vatLayout.vatFormat[vtxAttrib];
    const vtxAttrDesc = vatLayout.vcd[vtxAttrib];
    if (!vtxAttrDesc || vtxAttrDesc.type === 0 /* NONE */)
      return "";
    const outputMode = fallbackUndefined(vtxAttrDesc.outputMode, 0 /* VertexData */);
    const dstFormat = loadedVertexLayout.vertexAttributeFormats[vtxAttrib];
    const dstBaseOffs = loadedVertexLayout.vertexAttributeOffsets[vtxAttrib];
    let srcAttrByteSize = -1;
    if (vtxAttrDesc.type === 1 /* DIRECT */)
      srcAttrByteSize = getAttributeByteSizeRaw(vtxAttrib, vtxAttrFmt);
    function compileShift(n) {
      const srcAttrCompShift = getComponentShift(vtxAttrib, vtxAttrFmt);
      const divisor = 1 << srcAttrCompShift;
      if (divisor === 1)
        return n;
      else
        return `(${n} / ${divisor})`;
    }
    function compileReadOneComponent(viewName, attrOffset) {
      switch (getComponentType(vtxAttrib, vtxAttrFmt)) {
        case 4 /* F32 */:
          return `${viewName}.getFloat32(${attrOffset})`;
        case 0 /* U8 */:
          return compileShift(`${viewName}.getUint8(${attrOffset})`);
        case 2 /* U16 */:
          return compileShift(`${viewName}.getUint16(${attrOffset})`);
        case 1 /* S8 */:
          return compileShift(`${viewName}.getInt8(${attrOffset})`);
        case 3 /* S16 */:
          return compileShift(`${viewName}.getInt16(${attrOffset})`);
        default:
          throw new Error("whoops");
      }
    }
    function compileWriteOneComponentF32(offs, value) {
      const littleEndian = getSystemEndianness() === 0 /* LITTLE_ENDIAN */;
      const dstOffs = `dstVertexDataOffs + ${offs}`;
      return `dstVertexDataView.setFloat32(${dstOffs}, ${value}, ${littleEndian})`;
    }
    function compileWriteOneComponentU16(offs, value) {
      const littleEndian = getSystemEndianness() === 0 /* LITTLE_ENDIAN */;
      const dstOffs = `dstVertexDataOffs + ${offs}`;
      return `dstVertexDataView.setUint16(${dstOffs}, ${value}, ${littleEndian})`;
    }
    function compileWriteOneComponentU8Norm(offs, value) {
      const dstOffs = `dstVertexDataOffs + ${offs}`;
      return `dstVertexDataView.setUint8(${dstOffs}, ${value} * 0xFF)`;
    }
    function compileWriteOneComponentU8(offs, value) {
      const dstOffs = `dstVertexDataOffs + ${offs}`;
      return `dstVertexDataView.setUint8(${dstOffs}, ${value})`;
    }
    function compileWriteOneComponent(offs, value) {
      const typeFlags = getFormatTypeFlags(dstFormat);
      const isNorm = getFormatFlags(dstFormat) & 1 /* Normalized */;
      if (typeFlags === 8 /* F32 */)
        return compileWriteOneComponentF32(offs, value);
      else if (typeFlags === 1 /* U8 */ && isNorm)
        return compileWriteOneComponentU8Norm(offs, value);
      else if (typeFlags === 1 /* U8 */)
        return compileWriteOneComponentU8(offs, value);
      else
        throw new Error("whoops");
    }
    function compileOneAttribColor(viewName, attrOffs) {
      const dstOffs = dstBaseOffs;
      assert(getFormatComponentCount(dstFormat) === 4);
      const temp = `_T${vtxAttrib}`;
      const componentType = getComponentType(vtxAttrib, vtxAttrFmt);
      if (componentType === 0 /* RGB565 */) {
        return `
    var ${temp} = ${viewName}.getUint16(${attrOffs});
    ${compileWriteOneComponent(dstOffs + 0, `(((${temp} >>> 11) & 0x1F) / 0x1F)`)};
    ${compileWriteOneComponent(dstOffs + 1, `(((${temp} >>>  5) & 0x3F) / 0x3F)`)};
    ${compileWriteOneComponent(dstOffs + 2, `(((${temp} >>>  0) & 0x1F) / 0x1F)`)};
    ${compileWriteOneComponent(dstOffs + 3, `1.0`)};
`;
      } else if (componentType === 1 /* RGB8 */ || componentType === 2 /* RGBX8 */) {
        return `
    ${compileWriteOneComponent(dstOffs + 0, `${viewName}.getUint8(${attrOffs} + 0) / 0xFF`)};
    ${compileWriteOneComponent(dstOffs + 1, `${viewName}.getUint8(${attrOffs} + 1) / 0xFF`)};
    ${compileWriteOneComponent(dstOffs + 2, `${viewName}.getUint8(${attrOffs} + 2) / 0xFF`)};
    ${compileWriteOneComponent(dstOffs + 3, `1.0`)};
`;
      } else if (componentType === 3 /* RGBA4 */) {
        return `
    var ${temp} = ${viewName}.getUint16(${attrOffs});
    ${compileWriteOneComponent(dstOffs + 0, `(((${temp} >>> 12) & 0x0F) / 0x0F)`)};
    ${compileWriteOneComponent(dstOffs + 1, `(((${temp} >>>  8) & 0x0F) / 0x0F)`)};
    ${compileWriteOneComponent(dstOffs + 2, `(((${temp} >>>  4) & 0x0F) / 0x0F)`)};
    ${compileWriteOneComponent(dstOffs + 3, `(((${temp} >>>  0) & 0x0F) / 0x0F)`)};
`;
      } else if (componentType === 4 /* RGBA6 */) {
        return `
    var ${temp} = (${viewName}.getUint8(${attrOffs} + 0) << 16) | (${viewName}.getUint8(${attrOffs} + 1) << 8) | (${viewName}.getUint8(${attrOffs} + 2));
    ${compileWriteOneComponent(dstOffs + 0, `(((${temp} >>> 18) & 0x3F) / 0x3F)`)};
    ${compileWriteOneComponent(dstOffs + 1, `(((${temp} >>> 12) & 0x3F) / 0x3F)`)};
    ${compileWriteOneComponent(dstOffs + 2, `(((${temp} >>>  6) & 0x3F) / 0x3F)`)};
    ${compileWriteOneComponent(dstOffs + 3, `(((${temp} >>>  0) & 0x3F) / 0x3F)`)};
`;
      } else if (componentType === 5 /* RGBA8 */) {
        return `
    ${compileWriteOneComponent(dstOffs + 0, `${viewName}.getUint8(${attrOffs} + 0) / 0xFF`)};
    ${compileWriteOneComponent(dstOffs + 1, `${viewName}.getUint8(${attrOffs} + 1) / 0xFF`)};
    ${compileWriteOneComponent(dstOffs + 2, `${viewName}.getUint8(${attrOffs} + 2) / 0xFF`)};
    ${compileWriteOneComponent(dstOffs + 3, `${viewName}.getUint8(${attrOffs} + 3) / 0xFF`)};
`;
      } else {
        throw new Error("whoops");
      }
    }
    function compileOneAttribMtxIdx(viewName, attrOffs) {
      let S2 = ``;
      const srcAttrCompSize = getAttributeComponentByteSize(vtxAttrib, vtxAttrFmt);
      const srcAttrCompCount = getAttributeComponentCount(vtxAttrib, vtxAttrFmt);
      assertExists(srcAttrCompSize === 1 && srcAttrCompCount === 1);
      const dstOffs = dstBaseOffs;
      const srcOffs = `${attrOffs}`;
      const value = compileReadOneComponent(viewName, srcOffs);
      S2 += `
    ${compileWriteOneComponent(dstOffs, `(${value} / 3)`)};`;
      return S2;
    }
    function compileOneAttribOther(viewName, attrOffs) {
      let S2 = ``;
      const srcAttrCompSize = getAttributeComponentByteSize(vtxAttrib, vtxAttrFmt);
      const srcAttrCompCount = getAttributeComponentCount(vtxAttrib, vtxAttrFmt);
      const dstComponentSize = getFormatCompByteSize(dstFormat);
      for (let i = 0; i < srcAttrCompCount; i++) {
        const dstOffs = dstBaseOffs + i * dstComponentSize;
        const srcOffs = `${attrOffs} + ${i * srcAttrCompSize}`;
        const value = compileReadOneComponent(viewName, srcOffs);
        S2 += `
    ${compileWriteOneComponent(dstOffs, value)};`;
      }
      const dstComponentCount = getFormatComponentCount(dstFormat);
      for (let i = srcAttrCompCount; i < dstComponentCount; i++) {
        const dstOffs = dstBaseOffs + i * dstComponentSize;
        S2 += `
    ${compileWriteOneComponent(dstOffs, "0.0")};`;
      }
      return S2;
    }
    function compileOneAttrib(viewName, attrOffsetBase) {
      if (outputMode === 0 /* VertexData */) {
        if (isVtxAttribMtxIdx(vtxAttrib))
          return compileOneAttribMtxIdx(viewName, attrOffsetBase);
        else if (isVtxAttribColor(vtxAttrib))
          return compileOneAttribColor(viewName, attrOffsetBase);
        else
          return compileOneAttribOther(viewName, attrOffsetBase);
      } else if (outputMode === 1 /* Index */) {
        throw new Error("whoops");
      } else {
        return ``;
      }
    }
    function compileZero() {
      let S2 = ``;
      const dstComponentSize = getFormatCompByteSize(dstFormat);
      const dstComponentCount = getFormatComponentCount(dstFormat);
      for (let i = 0; i < dstComponentCount; i++) {
        const dstOffs = dstBaseOffs + i * dstComponentSize;
        S2 += `
    ${compileWriteOneComponent(dstOffs, "0.0")};`;
      }
      return S2;
    }
    function compileOneIndex(viewName, readIndex, drawCallIdxIncr, uniqueSuffix = "") {
      if (outputMode === 0 /* VertexData */) {
        const stride = `vtxArrayStrides[${vtxAttrib}]`;
        const attrOffsetBase = `(${readIndex}) * ${stride}`;
        const arrayOffsetVarName = `arrayOffset${vtxAttrib}${uniqueSuffix}`;
        return `
    const ${arrayOffsetVarName} = ${attrOffsetBase};${compileOneAttrib(viewName, arrayOffsetVarName)}
    drawCallIdx += ${drawCallIdxIncr};`;
      } else if (outputMode === 1 /* Index */) {
        return `
    // ${getAttrName(vtxAttrib)} - Index
    ${compileWriteOneComponentU16(dstBaseOffs, readIndex)};
    drawCallIdx += ${drawCallIdxIncr};`;
      } else {
        return `
    // ${getAttrName(vtxAttrib)} - None
    drawCallIdx += ${drawCallIdxIncr};`;
      }
    }
    function compileAttribIndex(viewName, readIndex, drawCallIdxIncr) {
      if (vtxAttrib === 10 /* NRM */ && vtxAttrFmt.compCnt === 2 /* NRM_NBT3 */) {
        return `
    // NRM
    ${compileOneIndex(viewName, readIndex, drawCallIdxIncr, `_N`)}
    // BINRM
    ${compileOneIndex(viewName, readIndex, drawCallIdxIncr, `_B`)}
    // TANGENT
    ${compileOneIndex(viewName, readIndex, drawCallIdxIncr, `_T`)}`;
      } else {
        return `
    // ${getAttrName(vtxAttrib)}
    ${compileOneIndex(viewName, readIndex, drawCallIdxIncr)}`;
      }
    }
    if (vtxAttrDesc.type === 1 /* DIRECT */) {
      return `
    // ${getAttrName(vtxAttrib)}
    ${compileOneAttrib(`dlView`, `drawCallIdx`)}
    drawCallIdx += ${srcAttrByteSize};`;
    } else if (vtxAttrDesc.type === 2 /* INDEX8 */) {
      return compileAttribIndex(compileVtxArrayViewName(vtxAttrib), `dlView.getUint8(drawCallIdx)`, 1);
    } else if (vtxAttrDesc.type === 3 /* INDEX16 */) {
      return compileAttribIndex(compileVtxArrayViewName(vtxAttrib), `dlView.getUint16(drawCallIdx)`, 2);
    } else if (vtxAttrDesc.type === 4 /* ZERO */) {
      return `
    // ${getAttrName(vtxAttrib)} - ZERO
    ${compileZero()}`;
    } else {
      throw new Error("whoops");
    }
  }
  let S = "";
  for (let vtxAttrib = 0; vtxAttrib <= 20 /* MAX */; vtxAttrib++)
    S += compileVatLayoutAttribute(vtxAttrib);
  return S;
}
function compileFunction(source, entryPoint) {
  const fullSource = `
"use strict";

${source}

return function() {
    return ${entryPoint};
}();
`;
  const generator = new Function(fullSource);
  const func = generator();
  return func;
}
function compileSingleVtxLoader(loadedVertexLayout, srcLayout) {
  const runVertices = generateRunVertices(loadedVertexLayout, srcLayout);
  const source = `
function run(dstVertexDataView, dstVertexDataOffs, dlView, drawCallIdx, vtxArrayViews, vtxArrayStrides) {
    ${runVertices}
    return drawCallIdx;
}
`;
  return compileFunction(source, `run`);
}
function compileSingleVatLoader(loadedVertexLayout, srcLayout) {
  const runVertices = generateRunVertices(loadedVertexLayout, srcLayout);
  const source = `
function run(dstVertexDataView, dstVertexDataOffs, loadedVertexLayout, dlView, drawCalls, vtxArrayViews, vtxArrayStrides) {
    for (let i = 0; i < drawCalls.length; i++) {
        const drawCall = drawCalls[i];

        let drawCallIdx = drawCall.srcOffs;
        for (let j = 0; j < drawCall.vertexCount; j++) {
            ${runVertices}
            dstVertexDataOffs += loadedVertexLayout.vertexBufferStrides[0];
        }
    }
}
`;
  return compileFunction(source, `run`);
}
function getSingleVatIndex(vat) {
  let singleVatIndex = -1;
  for (let i = 0; i < vat.length; i++) {
    const vatLayout = vat[i];
    if (vatLayout === void 0)
      continue;
    if (singleVatIndex >= 0)
      return null;
    singleVatIndex = i;
  }
  assert(singleVatIndex >= 0);
  return singleVatIndex;
}
function vtxAttrFmtCopy(a) {
  if (a === void 0)
    return void 0;
  else
    return { compCnt: a.compCnt, compShift: a.compShift, compType: a.compType };
}
function vtxAttrFmtEqual(a, b) {
  if (a === void 0 || b === void 0) return a === b;
  return a.compCnt === b.compCnt && a.compShift === b.compShift && a.compType === b.compType;
}
function vatCopy(a) {
  if (a === void 0)
    return void 0;
  else
    return arrayCopy(a, vtxAttrFmtCopy);
}
function vatEqual(a, b) {
  if (a === void 0 || b === void 0) return a === b;
  return arrayEqual(a, b, vtxAttrFmtEqual);
}
function vcdCopy(a) {
  if (a === void 0)
    return void 0;
  else
    return { outputMode: a.outputMode, type: a.type };
}
function vcdEqual(a, b) {
  if (a === void 0 || b === void 0) return a === b;
  return a.outputMode === b.outputMode && a.type === b.type;
}
function vtxLoaderDescEqual(a, b) {
  if (!arrayEqual(a.vat, b.vat, vatEqual)) return false;
  if (!arrayEqual(a.vcd, b.vcd, vcdEqual)) return false;
  return true;
}
function vatUsesNBT(vat) {
  for (let i = 0; i < vat.length; i++) {
    const vatLayout = vat[i];
    if (vatLayout === void 0)
      continue;
    const fmt = vatLayout[10 /* NRM */];
    if (fmt === void 0)
      continue;
    const compCnt = fmt.compCnt;
    if (compCnt === 1 /* NRM_NBT */ || compCnt === 2 /* NRM_NBT3 */)
      return true;
  }
  return false;
}
function compileVtxLoaderDesc(desc) {
  let loader = cache.get(desc);
  if (loader === null) {
    const { vat, vcd } = desc;
    const useNBT = vatUsesNBT(vat);
    const loadedVertexLayout = compileLoadedVertexLayout(vcd, useNBT);
    const loaderImpl = new VtxLoaderImpl(vat, vcd, loadedVertexLayout);
    cache.add(loaderImpl, loaderImpl);
    loader = loaderImpl;
  }
  return loader;
}
function compileVtxLoader(vatFormat, vcd) {
  const vat = [vatFormat];
  const desc = { vat, vcd };
  return compileVtxLoaderDesc(desc);
}
var VtxLoaderImpl, cache;
var init_gx_displaylist = __esm({
  "noclip/gx/gx_displaylist.ts"() {
    init_util();
    init_HashMap();
    init_endian();
    init_GfxPlatformFormat();
    init_GfxPlatformObjUtil();
    init_gx_enum();
    VtxLoaderImpl = class {
      constructor(vat, vcd, loadedVertexLayout) {
        this.loadedVertexLayout = loadedVertexLayout;
        const singleVat = getSingleVatIndex(vat);
        if (singleVat !== null) {
          const sourceLayout = translateSourceVatLayout(vat[singleVat], vcd);
          this.sourceLayouts[singleVat] = sourceLayout;
          this.singleVatLoader = compileSingleVatLoader(loadedVertexLayout, sourceLayout);
        } else {
          for (let i = 0; i < vat.length; i++) {
            const vatLayout = vat[i];
            if (vatLayout === void 0)
              continue;
            const sourceLayout = translateSourceVatLayout(vat[i], vcd);
            this.sourceLayouts[i] = sourceLayout;
            this.vtxLoaders[i] = compileSingleVtxLoader(loadedVertexLayout, sourceLayout);
          }
        }
        this.vat = arrayCopy(vat, vatCopy);
        this.vcd = arrayCopy(vcd, vcdCopy);
      }
      loadedVertexLayout;
      vat;
      vcd;
      sourceLayouts = [];
      vtxLoaders = [];
      // For Single VAT cases (optimization).
      singleVatLoader = null;
      parseDisplayList(srcBuffer, loadOptions) {
        function newDraw(indexOffset) {
          return {
            indexOffset,
            indexCount: 0,
            posMatrixTable: Array(10).fill(65535),
            texMatrixTable: Array(10).fill(65535)
          };
        }
        const dlView = srcBuffer.createDataView();
        const drawCalls = [];
        const draws = [];
        let totalVertexCount = 0;
        let totalIndexCount = 0;
        let drawCallIdx = 0;
        let currentDraw = null;
        let currentXfmem = null;
        while (true) {
          if (drawCallIdx >= srcBuffer.byteLength)
            break;
          const cmd = dlView.getUint8(drawCallIdx);
          if (cmd === 0)
            break;
          switch (cmd) {
            case 32 /* LOAD_INDX_A */: {
              currentDraw = null;
              if (currentXfmem === null)
                currentXfmem = newDraw(totalIndexCount);
              const memoryElemSize = 3 * 4;
              const memoryBaseAddr = 0;
              const table = currentXfmem.posMatrixTable;
              const arrayIndex = dlView.getUint16(drawCallIdx + 1);
              const addrLen = dlView.getUint16(drawCallIdx + 3);
              const len5 = (addrLen >>> 12) + 1;
              const addr = addrLen & 4095;
              const tableIndex = (addr - memoryBaseAddr) / memoryElemSize | 0;
              if (len5 !== memoryElemSize)
                throw Error();
              table[tableIndex] = arrayIndex;
              drawCallIdx += 5;
              continue;
            }
            case 48 /* LOAD_INDX_C */: {
              currentDraw = null;
              if (currentXfmem === null)
                currentXfmem = newDraw(totalIndexCount);
              const memoryElemSize = 3 * 4;
              const memoryBaseAddr = 120;
              const table = currentXfmem.texMatrixTable;
              const arrayIndex = dlView.getUint16(drawCallIdx + 1);
              const addrLen = dlView.getUint16(drawCallIdx + 3);
              const len5 = (addrLen >>> 12) + 1;
              const addr = addrLen & 4095;
              const tableIndex = (addr - memoryBaseAddr) / memoryElemSize | 0;
              if (len5 !== memoryElemSize)
                throw Error();
              table[tableIndex] = arrayIndex;
              drawCallIdx += 5;
              continue;
            }
            case 40 /* LOAD_INDX_B */:
            // Normal Matrices
            case 56 /* LOAD_INDX_D */:
              drawCallIdx += 5;
              continue;
          }
          const primType = cmd & 248;
          const vertexFormat = cmd & 7;
          const vertexCount = dlView.getUint16(drawCallIdx + 1);
          drawCallIdx += 3;
          const srcOffs = drawCallIdx;
          totalVertexCount += vertexCount;
          if (currentDraw === null) {
            if (currentXfmem !== null) {
              currentDraw = currentXfmem;
              currentXfmem = null;
            } else {
              currentDraw = newDraw(totalIndexCount);
            }
            draws.push(currentDraw);
          }
          let indexCount = 0;
          switch (primType) {
            case 144 /* DRAW_TRIANGLES */:
              indexCount = vertexCount;
              break;
            case 128 /* DRAW_QUADS */:
            case 136 /* DRAW_QUAD_STRIP */:
              indexCount = vertexCount * 6 / 4;
              break;
            case 160 /* DRAW_TRIANGLE_FAN */:
            case 152 /* DRAW_TRIANGLE_STRIP */:
              indexCount = (vertexCount - 2) * 3;
              break;
            default:
              throw new Error(`Invalid data at ${hexzero(srcBuffer.byteOffset, 8)} / ${hexzero(drawCallIdx - 3, 4)} cmd ${hexzero(cmd, 2)}`);
          }
          drawCalls.push({ primType, vertexFormat, srcOffs, vertexCount });
          currentDraw.indexCount += indexCount;
          totalIndexCount += indexCount;
          const srcLayout = this.sourceLayouts[vertexFormat];
          drawCallIdx += srcLayout.srcVertexSize * vertexCount;
        }
        const firstVertexId = loadOptions !== void 0 && loadOptions.firstVertexId !== void 0 ? loadOptions.firstVertexId : 0;
        let indexDataIdx = 0;
        const dstIndexData = new Uint16Array(totalIndexCount);
        let baseVertex = firstVertexId;
        for (let z = 0; z < drawCalls.length; z++) {
          const drawCall = drawCalls[z];
          switch (drawCall.primType) {
            case 144 /* DRAW_TRIANGLES */:
              for (let i = 0; i < drawCall.vertexCount; i++)
                dstIndexData[indexDataIdx++] = baseVertex + i;
              break;
            case 128 /* DRAW_QUADS */:
            case 136 /* DRAW_QUAD_STRIP */:
              for (let i = 0; i < drawCall.vertexCount; i += 4) {
                dstIndexData[indexDataIdx++] = baseVertex + i + 0;
                dstIndexData[indexDataIdx++] = baseVertex + i + 1;
                dstIndexData[indexDataIdx++] = baseVertex + i + 2;
                dstIndexData[indexDataIdx++] = baseVertex + i + 0;
                dstIndexData[indexDataIdx++] = baseVertex + i + 2;
                dstIndexData[indexDataIdx++] = baseVertex + i + 3;
              }
              break;
            case 152 /* DRAW_TRIANGLE_STRIP */:
              for (let i = 2; i < drawCall.vertexCount; i++) {
                dstIndexData[indexDataIdx++] = baseVertex + i - 2;
                dstIndexData[indexDataIdx++] = baseVertex + i - (~i & 1);
                dstIndexData[indexDataIdx++] = baseVertex + i - (i & 1);
              }
              break;
            case 160 /* DRAW_TRIANGLE_FAN */:
              for (let i = 2; i < drawCall.vertexCount; i++) {
                dstIndexData[indexDataIdx++] = baseVertex;
                dstIndexData[indexDataIdx++] = baseVertex + i - 1;
                dstIndexData[indexDataIdx++] = baseVertex + i;
              }
              break;
          }
          baseVertex += drawCall.vertexCount;
        }
        const dstVertexDataSize = this.loadedVertexLayout.vertexBufferStrides[0] * totalVertexCount;
        const dstVertexData = new ArrayBuffer(dstVertexDataSize);
        const vertexBuffers = [dstVertexData];
        const indexData = dstIndexData.buffer;
        return { indexData, totalIndexCount, totalVertexCount, draws, vertexId: baseVertex, vertexBuffers, dlView, drawCalls, endOffs: drawCallIdx };
      }
      loadVertexDataInto(dst, dstOffs, loadedVertexData, vtxArrays) {
        const vtxArrayViews = [];
        const vtxArrayStrides = [];
        for (let i = 0; i <= 20 /* MAX */; i++) {
          if (vtxArrays[i] !== void 0) {
            vtxArrayViews[i] = vtxArrays[i].buffer.createDataView(vtxArrays[i].offs);
            vtxArrayStrides[i] = vtxArrays[i].stride;
          }
        }
        const dlView = assertExists(loadedVertexData.dlView);
        const drawCalls = assertExists(loadedVertexData.drawCalls);
        const dstVertexDataSize = this.loadedVertexLayout.vertexBufferStrides[0] * loadedVertexData.totalVertexCount;
        assert(dst.byteLength >= dstVertexDataSize);
        let dstVertexDataOffs = dstOffs;
        if (this.singleVatLoader !== null) {
          this.singleVatLoader(dst, dstVertexDataOffs, this.loadedVertexLayout, dlView, drawCalls, vtxArrayViews, vtxArrayStrides);
        } else {
          for (let i = 0; i < drawCalls.length; i++) {
            const drawCall = drawCalls[i];
            let drawCallIdx = drawCall.srcOffs;
            for (let j = 0; j < drawCall.vertexCount; j++) {
              drawCallIdx = this.vtxLoaders[drawCall.vertexFormat](dst, dstVertexDataOffs, dlView, drawCallIdx, vtxArrayViews, vtxArrayStrides);
              dstVertexDataOffs += this.loadedVertexLayout.vertexBufferStrides[0];
            }
          }
        }
      }
      loadVertexData(loadedVertexData, vtxArrays) {
        const dstVertexData = assertExists(loadedVertexData.vertexBuffers[0]);
        const dstVertexDataView = new DataView(dstVertexData);
        return this.loadVertexDataInto(dstVertexDataView, 0, loadedVertexData, vtxArrays);
      }
      runVertices(vtxArrays, srcBuffer, loadOptions) {
        const loadedVertexData = this.parseDisplayList(srcBuffer, loadOptions);
        this.loadVertexData(loadedVertexData, vtxArrays);
        return loadedVertexData;
      }
    };
    cache = new HashMap(vtxLoaderDescEqual, nullHashFunc);
  }
});

// noclip/CodeEditor.ts
function visibleRAF(elem, func) {
  const window2 = elem.ownerDocument.defaultView;
  let isRunning = false;
  function setRunning(running) {
    if (isRunning === running)
      return;
    isRunning = running;
    if (isRunning)
      window2.requestAnimationFrame(update2);
  }
  function update2(t2) {
    func(t2);
    if (isRunning)
      window2.requestAnimationFrame(update2);
  }
  function callback(entries) {
    const { intersectionRatio } = entries[entries.length - 1];
    const shouldBeRunning = intersectionRatio > 0;
    setRunning(shouldBeRunning);
  }
  const observer = new IntersectionObserver(callback);
  observer.observe(elem);
}
function colorLerp(ca, cb, t2) {
  console.assert(ca[0] === "#" && ca.length === 7);
  const ar = parseInt(ca.slice(1, 3), 16), ag = parseInt(ca.slice(3, 5), 16), ab = parseInt(ca.slice(5, 7), 16);
  console.assert(cb[0] === "#" && cb.length === 7);
  const br = parseInt(cb.slice(1, 3), 16), bg = parseInt(cb.slice(3, 5), 16), bb = parseInt(cb.slice(5, 7), 16);
  const nr = ar + (br - ar) * t2, ng = ag + (bg - ag) * t2, nb = ab + (bb - ab) * t2;
  const r = (nr | 0).toString(16), g = (ng | 0).toString(16), b = (nb | 0).toString(16);
  return `#${r}${g}${b}`;
}
function colorGrayscale(c) {
  console.assert(c[0] === "#" && c.length === 7);
  const r = parseInt(c.slice(1, 3), 16), g = parseInt(c.slice(3, 5), 16), b = parseInt(c.slice(5, 7), 16);
  const ny = r * 0.299 + g * 0.587 + b * 0.114;
  const y = (ny | 0).toString(16);
  return `#${y}${y}${y}`;
}
function formatDecimal(value, places = 2) {
  let valueStr = value.toFixed(places);
  while (valueStr.includes(".") && ".0".includes(valueStr.slice(-1)))
    valueStr = valueStr.slice(0, -1);
  if (!valueStr.includes("."))
    valueStr += ".0";
  return valueStr;
}
function expensiveMeasureTextMargin(document2, width, height, font) {
  const canvas2 = document2.createElement("canvas");
  canvas2.width = width;
  canvas2.height = height;
  const ctx = canvas2.getContext("2d");
  ctx.font = font;
  ctx.textBaseline = "top";
  ctx.fillStyle = "black";
  ctx.fillText("l", 0, 0);
  const image = ctx.getImageData(0, 0, width, height);
  for (let y = 0; y < image.height; y++)
    for (let x = 0; x < image.width; x++)
      if (image.data[4 * (y * image.width + x) + 3])
        return y;
  throw new Error("wtf");
}
var MONOSPACE, CursorOverride, NumberDragger, CodeEditor;
var init_CodeEditor = __esm({
  "noclip/CodeEditor.ts"() {
    MONOSPACE = '"Source Code Pro", "Droid Sans Mono", monospace';
    CursorOverride = class {
      constructor(_document) {
        this._document = _document;
        this._styleElem = this._document.createElement("style");
        this._document.head.appendChild(this._styleElem);
        this._style = this._styleElem.sheet;
        this._owner = null;
      }
      _document;
      _styleElem;
      _style;
      _owner;
      setCursor(owner, cursor) {
        if (this._owner && owner !== this._owner)
          return;
        if (this._style.cssRules.length)
          this._style.deleteRule(0);
        if (cursor) {
          const rule = `* { cursor: ${cursor} !important; }`;
          this._style.insertRule(rule, 0);
          this._owner = owner;
        } else {
          this._owner = null;
        }
      }
    };
    NumberDragger = class {
      constructor(_document, _cursorOverride) {
        this._document = _document;
        this._cursorOverride = _cursorOverride;
        this.onvalue = null;
        this.onend = null;
        this._toplevel = this._document.createElement("div");
        this._toplevel.style.position = "absolute";
        this._toplevel.style.transform = "translate(0, 0)";
        this._toplevel.style.fontFamily = MONOSPACE;
        this._toplevel.style.backgroundColor = "#232323";
        this._toplevel.style.color = "#c93";
        this._toplevel.style.border = "2px solid #c93";
        this._toplevel.style.lineHeight = "2em";
        this._toplevel.style.marginLeft = "1em";
        this._toplevel.style.borderRadius = "6px";
        this._toplevel.style.boxShadow = "rgba(0, 0, 0, .4) 0px 4px 16px";
        this._toplevel.style.zIndex = "9999";
        this._segments = [];
        for (let exp2 = 2; exp2 >= -2; exp2--) {
          const incr = Math.pow(10, exp2);
          const segment = this._document.createElement("div");
          segment._incr = incr;
          segment.style.padding = ".5em 1em";
          segment.textContent = "" + incr;
          this._toplevel.appendChild(segment);
          this._segments.push(segment);
        }
        this._anchorMouseX = 0;
        this._anchorValue = void 0;
        this._value = void 0;
      }
      _document;
      _cursorOverride;
      onvalue = null;
      onend = null;
      _toplevel;
      _segments;
      _anchorMouseX;
      _anchorValue;
      _value;
      _currentIncr;
      _showTimeout;
      _onMouseMove = (e) => {
        e.stopPropagation();
        const accel = 15;
        const dx = Math.round((e.clientX - this._anchorMouseX) / accel);
        const newValue = this._anchorValue + dx * this._currentIncr;
        if (this._value !== newValue) {
          this._value = newValue;
          this.onvalue(this._value);
        }
        const y = e.clientY;
        for (const segment of this._segments) {
          const bbox = segment.getBoundingClientRect();
          if (y < bbox.bottom) {
            if (this._selectSegment(segment)) {
              if (this._anchorValue !== this._value) {
                this._anchorMouseX = e.clientX;
                this._anchorValue = this._value;
              }
            }
            break;
          }
        }
      };
      _onMouseUp = (e) => {
        this._cursorOverride.setCursor(this, "");
        this._document.documentElement.removeEventListener("mouseup", this._onMouseUp);
        this.onend();
        if (this._showTimeout) {
          clearTimeout(this._showTimeout);
          this._showTimeout = 0;
          return;
        }
        this._document.documentElement.removeEventListener("mousemove", this._onMouseMove, { capture: true });
        this._document.body.removeChild(this._toplevel);
      };
      _selectSegment(segment) {
        const incr = segment._incr;
        if (this._currentIncr === incr)
          return false;
        this._currentIncr = incr;
        for (const seg of this._segments) {
          const hilite = seg === segment;
          seg.style.backgroundColor = hilite ? "#c93" : "";
          seg.style.color = hilite ? "#222" : "";
          seg.style.fontWeight = hilite ? "bold" : "";
        }
        return true;
      }
      _show() {
        this._showTimeout = 0;
        this._document.body.appendChild(this._toplevel);
        this._document.documentElement.addEventListener("mousemove", this._onMouseMove, { capture: true });
      }
      setPosition(x, y) {
        this._toplevel.style.left = x + "px";
        this._toplevel.style.top = y + "px";
      }
      show(value, e) {
        this._anchorMouseX = e.clientX;
        this._anchorValue = value;
        let segmentExp = 0;
        for (let exp2 = -2; exp2 <= 2; exp2++) {
          const incr = Math.pow(10, exp2 + 1);
          if (value > -incr && value < incr) {
            segmentExp = exp2;
            break;
          }
        }
        const segmentIdx = 4 - (segmentExp + 2);
        this._selectSegment(this._segments[segmentIdx]);
        const pcts = ["-10.5%", "-30%", "-50%", "-70%", "-89.5%"];
        this._toplevel.style.transform = `translate(0, ${pcts[segmentIdx]}`;
        this._document.documentElement.addEventListener("mouseup", this._onMouseUp);
        this._showTimeout = window.setTimeout(this._show.bind(this), 100);
        this._cursorOverride.setCursor(this, "e-resize");
      }
    };
    CodeEditor = class {
      constructor(_document) {
        this._document = _document;
        this.onvaluechanged = null;
        this._prefix = "";
        this._suffix = "";
        this._paddingTop = 0.2;
        this._paddingBottom = 1.5;
        this._toplevel = this._document.createElement("div");
        this._toplevel.style.position = "relative";
        this._document.body.appendChild(this._toplevel);
        this._document.addEventListener("scroll", this._onScroll);
        this._canvas = this._document.createElement("canvas");
        this._toplevel.appendChild(this._canvas);
        this._textarea = this._document.createElement("textarea");
        this._textarea.style.fontFamily = MONOSPACE;
        this._textarea.oninput = this._onInput;
        this._textarea.onkeydown = this._onKeyDown;
        this._toplevel.appendChild(this._textarea);
        this._canvas.onmousedown = this._onMouseDown;
        this._canvas.onmouseleave = this._onMouseLeave;
        this._canvas.onmousemove = this._onMouseMove;
        this._textarea.style.whiteSpace = "pre-wrap";
        this._textarea.style.wordBreak = "break-all";
        this._textarea.style.position = "absolute";
        this._textarea.style.left = "-99999px";
        this._textarea.style.overflow = "hidden";
        this._canvas.style.position = "fixed";
        this._cursorOverride = new CursorOverride(this._document);
        this._numberDragger = new NumberDragger(this._document, this._cursorOverride);
        this._numberDragger.onvalue = this._onNumberDraggerValue;
        this._numberDragger.onend = this._onNumberDraggerEnd;
        this.elem = this._toplevel;
        visibleRAF(this._canvas, this._redraw);
      }
      _document;
      onvaluechanged = null;
      elem;
      _toplevel;
      _textarea;
      _canvas;
      _numberDragger;
      _cursorOverride;
      _prefix;
      _suffix;
      _paddingTop;
      _paddingBottom;
      _width;
      _minHeight;
      _lineFlairs;
      _prefixLines;
      _suffixLines;
      _valueChanged = false;
      _valueChangedImmediate = false;
      _needsRecalculate = false;
      _cols;
      _height;
      _charWidth;
      _rowHeight;
      _charMarginTop;
      _gutterMargin;
      _gutterWidth;
      _textMargin;
      _lineModel;
      _syntaxRuns;
      _textareaStyle;
      _draggableNumbers;
      // Redraw-internal state.
      _redraw_cursorPosition;
      _redraw_cursorBlinkStart;
      _mouseX;
      _mouseY;
      _mouseIdx;
      _dragging = false;
      _dragStartIdx;
      _draggingNumber = null;
      _setNeedsRecalculate() {
        this._needsRecalculate = true;
      }
      _setValueChanged(immediate = false) {
        this._valueChanged = true;
        this._valueChangedImmediate = immediate;
        this._needsRecalculate = true;
      }
      // Sets a chunk of text at the beginning and end that the user cannot modify.
      setPrefixSuffix(prefix, suffix) {
        this._prefix = prefix;
        this._suffix = suffix;
        this._setNeedsRecalculate();
      }
      setFontSize(size) {
        this._textarea.style.fontSize = size;
        this._setNeedsRecalculate();
      }
      setLineFlairs(lineFlairs) {
        this._lineFlairs = lineFlairs;
      }
      // Sets the size. The height here is actually a minimum height. Since we don't
      // yet have scrolling, the Editor always expands to fill however many lines it
      // takes up...
      setSize(w, h) {
        if (h !== void 0)
          this._minHeight = h;
        if (w !== void 0) {
          this._width = w;
          this._canvas.style.width = `${w}px`;
          this._toplevel.style.width = `${w}px`;
          this._cols = this._xyToRowCol(w, 0).col;
          this._textarea.style.width = `${this._cols}ch`;
        }
        if (w !== void 0 || h !== void 0)
          this._setNeedsRecalculate();
      }
      getValue() {
        return this._textarea.value;
      }
      setValue(t2) {
        this._textarea.value = t2;
        this._setValueChanged(true);
      }
      getFullText() {
        return this._prefix + this._textarea.value + this._suffix;
      }
      _isLineLocked(line) {
        if (line.lineno < this._prefixLines)
          return true;
        if (line.lineno >= this._suffixLines)
          return true;
        return false;
      }
      _recalculate() {
        if (!this._needsRecalculate)
          return;
        if (!this._toplevel.parentNode)
          return;
        const chars = this.getFullText() + "\n";
        const lineModel = [];
        let idx = 0, row = 0, lineno = 0;
        while (true) {
          let newIdx = chars.indexOf("\n", idx);
          if (newIdx < 0)
            break;
          const start = idx, end = newIdx + 1;
          const length5 = end - start - 1;
          const startRow = row;
          const rows = Math.max(Math.ceil(length5 / this._cols), 1);
          lineModel.push({ start, end, length: length5, rows, startRow, lineno });
          row += rows;
          lineno++;
          idx = end;
        }
        this._lineModel = lineModel;
        this._prefixLines = this._prefix.split("\n").length - 1;
        this._suffixLines = this._lineModel.length - (this._suffix.split("\n").length - 1);
        const syntaxRuns = [];
        const draggableNumbers = [];
        let match;
        const keywords = /\b(function|for|while|if|else|break|continue|in|out|attribute|uniform|varying|return|struct|layout|precision|mediump|lowp|highp|discard)\b/g;
        while ((match = keywords.exec(chars)) !== null)
          syntaxRuns.push({ start: match.index, end: match.index + match[0].length, color: "#c26230" });
        const types = /\b(void|bool|float|[ui]?vec[234]|mat[234]|mat[234]x[234]|[u]?int|sampler[23]D)\b/g;
        while ((match = types.exec(chars)) !== null)
          syntaxRuns.push({ start: match.index, end: match.index + match[0].length, color: "#6d9cbe" });
        const comments = /\/\/.*$/gm;
        while ((match = comments.exec(chars)) !== null)
          syntaxRuns.push({ start: match.index, end: match.index + match[0].length, color: "#bc9458", style: "italic" });
        const numbers = /\W-?\d+(\.\d+)?\b/g;
        while ((match = numbers.exec(chars)) !== null) {
          const start = match.index + 1, end = start + match[0].length - 1;
          if (syntaxRuns.some((run) => start >= run.start && end <= run.end))
            continue;
          draggableNumbers.push({ start, end });
          syntaxRuns.push({ start, end, color: "#a5c261" });
        }
        syntaxRuns.sort((a, b) => a.start - b.start);
        this._syntaxRuns = syntaxRuns;
        this._draggableNumbers = draggableNumbers;
        const textareaStyle = this._document.defaultView.getComputedStyle(this._textarea);
        this._textareaStyle = textareaStyle;
        const ctx = this._canvas.getContext("2d");
        ctx.font = `${textareaStyle.fontSize} ${textareaStyle.fontFamily}`;
        this._charWidth = ctx.measureText(" ").width;
        const rowHeight = textareaStyle.lineHeight;
        let rowHeightN;
        if (rowHeight === "normal")
          rowHeightN = 1.15 * parseFloat(textareaStyle.fontSize);
        else
          rowHeightN = parseFloat(rowHeight);
        this._rowHeight = Math.ceil(rowHeightN);
        if (this._charMarginTop === void 0) {
          const stdMargin = 4;
          this._charMarginTop = stdMargin - expensiveMeasureTextMargin(this._document, this._charWidth, this._rowHeight, ctx.font);
        }
        const numLines = this._lineModel.length;
        const gutterChars = ("" + numLines).length;
        this._gutterMargin = 10;
        this._gutterWidth = this._charWidth * Math.max(gutterChars, 2) + this._gutterMargin * 2;
        this._textMargin = 10;
        const lastRow = this._lineModel[this._lineModel.length - 1];
        const numRows = lastRow.startRow + lastRow.rows - 1;
        const newHeight = Math.ceil(Math.max(this._minHeight, this._rowHeight * (numRows + this._paddingTop + this._paddingBottom)));
        if (newHeight !== this._height) {
          this._height = newHeight;
          this._toplevel.style.height = `${this._height}px`;
          this._textarea.style.height = this._height - this._rowHeight + "px";
        }
        this._needsRecalculate = false;
        this._recalculateMouseIdx();
        if (this._valueChanged && this.onvaluechanged)
          this.onvaluechanged(this._valueChangedImmediate);
        this._valueChanged = false;
        this._valueChangedImmediate = false;
      }
      _recalculateMouseIdx() {
        if (this._mouseX === void 0 || this._mouseY === void 0) {
          this._mouseIdx = void 0;
        } else {
          const { row, col } = this._xyToRowCol(this._mouseX, this._mouseY);
          const { line, idx } = this._rowColToLineIdx(row, col, false);
          const isLineLocked = this._isLineLocked(line);
          this._mouseIdx = isLineLocked ? void 0 : idx;
        }
      }
      _calculateIndentedLineStart(line) {
        const chars = this.getFullText();
        let idx = line.start;
        while (chars.charAt(idx) === " " && idx <= line.end)
          idx++;
        return idx;
      }
      _onInput = () => {
        this._setValueChanged();
      };
      _onKeyDown = (e) => {
        if (e.key === "Tab" && !e.shiftKey) {
          if (!this._hasSelection()) {
            this._insertAtCursor("    ");
          }
          e.preventDefault();
        } else if (e.key === "Tab" && e.shiftKey) {
          e.preventDefault();
        } else if (e.key === "Home") {
          const cursorIdx = this._getCursorIdx();
          const { line, lineIdx } = this._getCharPos(cursorIdx);
          const indentedIdx = this._calculateIndentedLineStart(line);
          if (cursorIdx !== indentedIdx) {
            if (e.shiftKey) {
              const [selectionPoint] = this._getSelection();
              this._setSelection(this._idxToTextarea(selectionPoint), this._idxToTextarea(indentedIdx));
            } else {
              this._setCursor(this._idxToTextarea(indentedIdx));
            }
            e.preventDefault();
          }
        }
      };
      _onMouseDown = (e) => {
        e.preventDefault();
        const defaultView = this._document.defaultView;
        const mouseX = e.offsetX + defaultView.scrollX;
        const mouseY = e.offsetY + defaultView.scrollY;
        const { row, col } = this._xyToRowCol(mouseX, mouseY);
        const { line } = this._rowColToLineIdx(row, 0, true);
        if (this._isLineLocked(line)) {
          this._textarea.blur();
        } else if (col === -1) {
          this._setSelection(this._idxToTextarea(line.start), this._idxToTextarea(line.end));
          this._textarea.focus();
        } else {
          const { idx } = this._rowColToLineIdx(row, col, true);
          const { idx: exactIdx } = this._rowColToLineIdx(row, col, false);
          const draggableNumber = this._findDraggableNumber(exactIdx);
          if (!e.shiftKey && draggableNumber) {
            const start = this._idxToTextarea(draggableNumber.start);
            const end = this._idxToTextarea(draggableNumber.end);
            const value = +this.getValue().slice(start, end);
            this._draggingNumber = { start, end, value };
            this._syncNumberDraggerPosition();
            this._setCursor(this._idxToTextarea(idx));
            this._numberDragger.show(value, e);
          } else {
            if (e.shiftKey) {
              if (!this._hasSelection())
                this._dragStartIdx = this._textarea.selectionStart;
              this._setSelection(this._dragStartIdx, this._idxToTextarea(idx));
            } else {
              this._dragStartIdx = this._idxToTextarea(idx);
              this._setCursor(this._dragStartIdx);
            }
            this._dragging = true;
            this._document.documentElement.addEventListener("mousemove", this._onMouseMove, { capture: true });
            this._document.documentElement.addEventListener("mouseup", this._onMouseUp);
          }
          this._textarea.focus();
        }
      };
      _onMouseUp = (e) => {
        this._dragging = false;
        this._document.documentElement.removeEventListener("mousemove", this._onMouseMove, { capture: true });
        this._document.documentElement.removeEventListener("mouseup", this._onMouseUp);
      };
      _onMouseMove = (e) => {
        e.stopPropagation();
        const defaultView = this._document.defaultView;
        this._mouseX = e.offsetX + defaultView.scrollX;
        this._mouseY = e.offsetY + defaultView.scrollY;
        this._recalculateMouseIdx();
        const { row, col } = this._xyToRowCol(this._mouseX, this._mouseY);
        const { line, idx } = this._rowColToLineIdx(row, col, true);
        if (this._dragging) {
          this._setSelection(this._dragStartIdx, this._idxToTextarea(idx));
          this._textarea.focus();
        }
        const { idx: exactIdx } = this._rowColToLineIdx(row, col, false);
        const isLineLocked = this._isLineLocked(line);
        let cursor;
        if (this._dragging) {
          cursor = "text";
        } else if (col === -1 || isLineLocked) {
          cursor = "default";
        } else if (!e.shiftKey && this._findDraggableNumber(exactIdx)) {
          cursor = "e-resize";
        } else {
          cursor = "text";
        }
        this._canvas.style.cursor = cursor;
        if (this._dragging)
          this._cursorOverride.setCursor(this, cursor);
        else
          this._cursorOverride.setCursor(this, "");
      };
      _onMouseLeave = (e) => {
        this._mouseX = void 0;
        this._mouseY = void 0;
        this._mouseIdx = void 0;
      };
      _onScroll = () => {
        this._setNeedsRecalculate();
      };
      _onNumberDraggerValue = (newValue) => {
        const { start, end } = this._draggingNumber;
        const newValueString = formatDecimal(newValue);
        this.setValue(this._spliceValue(start, end, newValueString));
        this._draggingNumber.end = start + newValueString.length;
        this._syncNumberDraggerPosition();
      };
      _onNumberDraggerEnd = () => {
        this._draggingNumber = null;
      };
      _syncNumberDraggerPosition() {
        const { end } = this._draggingNumber;
        const endPos = this._getCharPos(this._textareaToIdx(end));
        const { x, y } = this._rowColToXY(endPos.row, endPos.col);
        const bbox = this._toplevel.getBoundingClientRect();
        const absX = bbox.left + x;
        const absY = bbox.top + y + this._rowHeight / 2 + this._document.defaultView.scrollY;
        this._numberDragger.setPosition(absX, absY);
      }
      _spliceValue(start, end, v) {
        const chars = this.getValue();
        return chars.slice(0, start) + v + chars.slice(end);
      }
      _findDraggableNumber(idx) {
        this._recalculate();
        return this._draggableNumbers.find(({ start, end }) => {
          return idx >= start && idx <= end;
        });
      }
      _idxToTextarea(idx) {
        return idx - this._prefix.length;
      }
      _textareaToIdx(idx) {
        return idx + this._prefix.length;
      }
      _rowColToLineIdx(row, col, clampIdx) {
        this._recalculate();
        let line = this._lineModel[0];
        for (line of this._lineModel)
          if (row >= line.startRow && row < line.startRow + line.rows)
            break;
        let lineIdx;
        if (line.rows === 1) {
          lineIdx = col;
        } else {
          lineIdx = (row - line.startRow) * this._cols + col;
        }
        let idx;
        if (clampIdx)
          idx = line.start + Math.min(Math.max(lineIdx, 0), line.length);
        else if (lineIdx > line.length)
          idx = -1;
        else
          idx = line.start + lineIdx;
        return { line, idx };
      }
      _xyToRowCol(x, y) {
        this._recalculate();
        y -= this._paddingTop * this._rowHeight;
        const row = Math.floor(y / this._rowHeight);
        let col;
        if (x < this._gutterWidth)
          col = -1;
        x -= this._gutterWidth;
        if (col === void 0 && x < this._textMargin)
          col = 0;
        x -= this._textMargin;
        if (col === void 0)
          col = Math.round(x / this._charWidth);
        return { row, col };
      }
      _rowColToXY(row, col) {
        const x = this._gutterWidth + this._textMargin + col * this._charWidth;
        const y = (this._paddingTop + row) * this._rowHeight;
        return { x, y };
      }
      _getRowLength(row) {
        this._recalculate();
        let line = this._lineModel[0];
        for (line of this._lineModel)
          if (row >= line.startRow && row < line.startRow + line.rows)
            break;
        if (line.rows === 1)
          return line.length;
        if (row === line.startRow + line.rows - 1)
          return line.length % this._cols;
        else
          return this._cols;
      }
      _getCharPos(idx) {
        this._recalculate();
        let line = this._lineModel[0];
        for (line of this._lineModel)
          if (idx >= line.start && idx < line.end)
            break;
        const lineIdx = idx - line.start;
        if (line.rows === 1)
          return { line, lineIdx, row: line.startRow, col: lineIdx };
        const col = lineIdx % this._cols;
        const row = line.startRow + Math.min(lineIdx / this._cols | 0, line.rows);
        return { line, lineIdx, row, col };
      }
      _hasSelection() {
        return this._textarea.selectionStart !== this._textarea.selectionEnd;
      }
      _getSelection() {
        const selStartIdx = this._textareaToIdx(this._textarea.selectionStart);
        const selEndIdx = this._textareaToIdx(this._textarea.selectionEnd);
        if (this._textarea.selectionDirection === "forward")
          return [selStartIdx, selEndIdx];
        else
          return [selEndIdx, selStartIdx];
      }
      _getCursorIdx() {
        const [selectionPointIdx, cursorIdx] = this._getSelection();
        return cursorIdx;
      }
      _setSelection(a, b) {
        const start = Math.min(a, b), end = Math.max(a, b);
        const direction = a < b ? "forward" : "backward";
        this._textarea.setSelectionRange(start, end, direction);
      }
      _setCursor(a) {
        this._textarea.setSelectionRange(a, a);
      }
      _insertAtCursor(s) {
        this._textarea.focus();
        if (!this._document.execCommand("insertText", false, s)) {
          const value = this._textarea.value;
          const selStart = this._textarea.selectionStart;
          const selEnd = this._textarea.selectionEnd;
          this._textarea.value = value.slice(0, selStart) + s + value.slice(selEnd);
          this._textarea.focus();
        }
        this._setValueChanged();
      }
      _redraw = (t2) => {
        const hasFocus = this._document.hasFocus();
        if (!this._needsRecalculate && !hasFocus)
          return;
        this._recalculate();
        const defaultView = this._document.defaultView;
        const viewportWidth = defaultView.innerWidth;
        const viewportHeight = defaultView.innerHeight;
        const scrollX = defaultView.scrollX;
        const scrollY = defaultView.scrollY;
        const ratio = defaultView.devicePixelRatio;
        const canvasWidth = viewportWidth * ratio;
        const canvasHeight = viewportHeight * ratio;
        let sizeChanged = false;
        if (this._canvas.width !== canvasWidth || this._canvas.height !== canvasHeight) {
          this._canvas.width = canvasWidth;
          this._canvas.height = canvasHeight;
          sizeChanged = true;
        }
        const scissorX1 = Math.max(0, scrollX);
        const scissorY1 = Math.max(0, scrollY);
        const clipRectX = scissorX1;
        const clipRectY = scissorY1;
        const clipRectW = viewportWidth;
        const clipRectH = viewportHeight;
        const vizRow0 = Math.floor(clipRectY / this._rowHeight - this._paddingTop);
        const vizRow1 = Math.ceil((clipRectY + clipRectH) / this._rowHeight - this._paddingTop);
        const isRowVisible = (row) => {
          return row >= vizRow0 && row <= vizRow1;
        };
        const getRowY = (row) => {
          return (this._paddingTop + row) * this._rowHeight - clipRectY;
        };
        const ctx = this._canvas.getContext("2d");
        ctx.save();
        if (!sizeChanged) {
          ctx.rect(clipRectX, clipRectY, clipRectW, clipRectH);
          ctx.clip();
        }
        ctx.scale(ratio, ratio);
        const bgcolor = "#232323";
        ctx.fillStyle = bgcolor;
        ctx.fillRect(0, 0, this._width, this._height);
        if (hasFocus) {
          const cursorPosition = this._idxToTextarea(this._getCursorIdx());
          if (this._redraw_cursorPosition !== cursorPosition) {
            this._redraw_cursorPosition = cursorPosition;
            this._redraw_cursorBlinkStart = t2;
          }
        } else {
          this._redraw_cursorPosition = void 0;
        }
        const textareaStyleFontSize = this._textareaStyle.fontSize;
        const textareaStyleFontFamily = this._textareaStyle.fontFamily;
        ctx.font = `${textareaStyleFontSize} ${textareaStyleFontFamily}`;
        const drawFlair = (line, flair) => {
          const y = getRowY(line.startRow);
          const height = this._rowHeight * line.rows;
          ctx.fillStyle = flair.color;
          ctx.fillRect(0, y, this._canvas.width, height);
        };
        if (this._redraw_cursorPosition) {
          const { line } = this._getCharPos(this._textareaToIdx(this._redraw_cursorPosition));
          drawFlair(line, { color: "#2f2a34", lineno: -1 });
        }
        if (this._lineFlairs) {
          for (const flair of this._lineFlairs) {
            const line = this._lineModel[flair.lineno];
            if (!line)
              continue;
            drawFlair(line, flair);
          }
        }
        ctx.save();
        ctx.fillStyle = "#445";
        ctx.fillRect(0, 0, this._gutterWidth, this._canvas.height);
        ctx.restore();
        for (let i = 0; i < this._lineModel.length; i++) {
          const line = this._lineModel[i];
          if (!isRowVisible(line.startRow))
            continue;
          const no = line.lineno + 1;
          const y = getRowY(line.startRow);
          ctx.fillStyle = this._isLineLocked(line) ? "#888" : "#ccc";
          ctx.textBaseline = "top";
          ctx.textAlign = "right";
          const noString = "" + no;
          ctx.fillText(noString, this._gutterWidth - this._gutterMargin, this._charMarginTop + y);
        }
        const chars = this.getFullText() + "\n";
        ctx.save();
        ctx.translate(this._gutterWidth + this._textMargin, 0);
        if (this._hasSelection()) {
          const startPos = this._getCharPos(this._textareaToIdx(this._textarea.selectionStart));
          const endPos = this._getCharPos(this._textareaToIdx(this._textarea.selectionEnd));
          for (let row = startPos.row; row <= endPos.row; row++) {
            let colStart = row === startPos.row ? startPos.col : 0;
            let colEnd = row === endPos.row ? endPos.col : this._getRowLength(row);
            const selectionColor = hasFocus ? "#336" : "#333";
            const startX = colStart * this._charWidth;
            const endX = colEnd * this._charWidth;
            const y = getRowY(row);
            ctx.fillStyle = selectionColor;
            ctx.fillRect(startX, y, endX - startX, this._rowHeight);
          }
        }
        const syntaxRuns = this._syntaxRuns;
        let currentSyntaxRun = 0;
        let draggableNumber;
        if (this._draggingNumber !== null) {
          const { start, end } = this._draggingNumber;
          draggableNumber = { start: this._textareaToIdx(start), end: this._textareaToIdx(end) };
        } else if (!this._dragging && this._mouseIdx > -1) {
          draggableNumber = this._findDraggableNumber(this._mouseIdx);
        }
        let currentFont;
        for (let m = 0; m < this._lineModel.length; m++) {
          const line = this._lineModel[m];
          let row = line.startRow, col = 0;
          for (let i = line.start; i < line.end; i++) {
            if (col === this._cols && row - line.startRow < line.rows - 1) {
              row++;
              col = 0;
            }
            if (!isRowVisible(row))
              continue;
            const char = chars.charAt(i);
            const x = col * this._charWidth, y = getRowY(row);
            if (i === this._textareaToIdx(this._redraw_cursorPosition)) {
              ctx.save();
              ctx.fillStyle = "#fff";
              const blinkAnimationT = (t2 - this._redraw_cursorBlinkStart) / 1e3;
              const blinkAlpha = Math.sin(blinkAnimationT * 6) + 1;
              ctx.globalAlpha = blinkAlpha;
              ctx.fillRect(Math.floor(x), y, 2, this._rowHeight);
              ctx.restore();
            }
            if (char === "\n")
              break;
            if (draggableNumber !== void 0 && i >= draggableNumber.start && i < draggableNumber.end) {
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(x | 0, y + this._rowHeight);
              ctx.lineTo(x + this._charWidth | 0, y + this._rowHeight);
              ctx.setLineDash([1, 1]);
              ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
              ctx.lineWidth = 1;
              ctx.stroke();
              ctx.restore();
            }
            let color = "#e6e1dc";
            let style = "";
            while (currentSyntaxRun < syntaxRuns.length && i >= syntaxRuns[currentSyntaxRun].end)
              currentSyntaxRun++;
            if (currentSyntaxRun < syntaxRuns.length) {
              const run = syntaxRuns[currentSyntaxRun];
              if (i >= run.start && i < run.end) {
                if (run.color)
                  color = run.color;
                if (run.style)
                  style = run.style;
              }
            }
            if (this._isLineLocked(line)) {
              color = colorLerp(color, colorGrayscale(color), 0.75);
            }
            ctx.textBaseline = "top";
            ctx.textAlign = "left";
            ctx.fillStyle = color;
            const newFont = `${style} ${textareaStyleFontSize} ${textareaStyleFontFamily}`;
            if (currentFont !== newFont) {
              ctx.font = newFont;
              currentFont = newFont;
            }
            ctx.fillText(char, x, y + this._charMarginTop);
            col++;
          }
        }
        ctx.restore();
        ctx.restore();
      };
    };
  }
});

// noclip/Program.ts
var DeviceProgram;
var init_Program = __esm({
  "noclip/Program.ts"() {
    init_CodeEditor();
    init_util();
    init_GfxShaderCompiler();
    DeviceProgram = class {
      name = "(unnamed DeviceProgram)";
      // Compiled program.
      preprocessedVert = "";
      preprocessedFrag = "";
      // Inputs.
      both = "";
      vert = "";
      frag = "";
      defines = /* @__PURE__ */ new Map();
      maxSamplerBinding = -1;
      definesChanged() {
        this.preprocessedVert = "";
        this.preprocessedFrag = "";
      }
      setDefineString(name, v) {
        if (v !== null) {
          if (this.defines.get(name) === v)
            return false;
          this.defines.set(name, v);
        } else {
          if (!this.defines.has(name))
            return false;
          this.defines.delete(name);
        }
        this.definesChanged();
        return true;
      }
      setDefineBool(name, v) {
        return this.setDefineString(name, v ? "1" : null);
      }
      getDefineString(name) {
        return nullify(this.defines.get(name));
      }
      getDefineBool(name) {
        const str6 = this.getDefineString(name);
        if (str6 !== null)
          assert(str6 === "1");
        return str6 !== null;
      }
      ensurePreprocessed(vendorInfo) {
        if (this.preprocessedVert === "") {
          this.preprocessedVert = preprocessShader_GLSL(vendorInfo, "vert", this.both + this.vert, this.defines, this.maxSamplerBinding);
          this.preprocessedFrag = preprocessShader_GLSL(vendorInfo, "frag", this.both + this.frag, this.defines, this.maxSamplerBinding);
        }
      }
      _gfxDevice = null;
      _gfxProgram = null;
      associate(device2, program) {
        this._gfxDevice = device2;
        this._gfxProgram = program;
        if (this.name === "(unnamed DeviceProgram)")
          this.name = this.constructor.name;
        this._gfxDevice.setResourceName(program, this.name);
      }
      _editShader(n) {
        const win = assertExists(window.open("about:blank", void 0, `location=off, resizable, alwaysRaised, left=20, top=20, width=1200, height=900`));
        const init = () => {
          const editor = new CodeEditor(win.document);
          const document2 = win.document;
          const title = n === "vert" ? `${this.name} - Vertex Shader` : `${this.name} - Fragment Shader`;
          document2.title = title;
          document2.body.style.margin = "0";
          const shader = this[n];
          editor.setValue(shader);
          editor.setFontSize("16px");
          let timeout = 0;
          const tryCompile = () => {
            timeout = 0;
            this[n] = editor.getValue();
            if (this._gfxDevice !== null && this._gfxProgram !== null) {
              this.preprocessedVert = "";
              this.ensurePreprocessed(this._gfxDevice.queryVendorInfo());
              this._gfxDevice.programPatched(this._gfxProgram, this);
            }
          };
          editor.onvaluechanged = function(immediate) {
            if (timeout > 0)
              clearTimeout(timeout);
            if (immediate) {
              tryCompile();
            } else {
              timeout = window.setTimeout(tryCompile, 500);
            }
          };
          const onresize = win.onresize = () => {
            editor.setSize(document2.body.offsetWidth, window.innerHeight);
          };
          onresize();
          win.editor = editor;
          window.editor = editor;
          win.document.body.appendChild(editor.elem);
          window.addEventListener("beforeunload", () => {
            win.close();
          });
          window.addEventListener("loadNewScene", () => {
            win.close();
          });
        };
        if (win.document.readyState === "complete")
          init();
        else
          win.onload = init;
      }
      editb() {
        this._editShader("both");
      }
      editv() {
        this._editShader("vert");
      }
      editf() {
        this._editShader("frag");
      }
    };
  }
});

// noclip/gx/gx_material.ts
function getVertexInputLocation(attrInput) {
  return vtxAttributeGenDefs.findIndex((genDef) => genDef.attrInput === attrInput);
}
function colorChannelsEqual(a, b) {
  if (a.lightingEnabled !== b.lightingEnabled) return false;
  if (a.litMask !== b.litMask) return false;
  if (a.ambColorSource !== b.ambColorSource) return false;
  if (a.matColorSource !== b.matColorSource) return false;
  if (a.attenuationFunction !== b.attenuationFunction) return false;
  if (a.diffuseFunction !== b.diffuseFunction) return false;
  return true;
}
function materialHasPostTexMtxBlock(material) {
  return material.hasPostTexMtxBlock !== void 0 ? material.hasPostTexMtxBlock : true;
}
function materialHasLightsBlock(material) {
  return material.hasLightsBlock !== void 0 ? material.hasLightsBlock : true;
}
function materialHasFogBlock(material) {
  return material.hasFogBlock !== void 0 ? material.hasFogBlock : false;
}
function materialUsePnMtxIdx(material) {
  return material.usePnMtxIdx !== void 0 ? material.usePnMtxIdx : true;
}
function materialUseTexMtxIdx(material, i) {
  return material.useTexMtxIdx !== void 0 ? material.useTexMtxIdx[i] : false;
}
function materialHasDynamicAlphaTest(material) {
  return material.hasDynamicAlphaTest !== void 0 ? material.hasDynamicAlphaTest : false;
}
function generateBindingsDefinition(material) {
  return `
${GfxShaderLibrary.MatrixLibrary}

// Expected to be constant across the entire scene.
layout(std140) uniform ub_SceneParams {
    Mat4x4 u_Projection;
    vec4 u_Misc0;
};

#define u_SceneTextureLODBias u_Misc0[0]

struct Light {
    vec4 Color;
    vec4 Position;
    vec4 Direction;
    vec4 DistAtten;
    vec4 CosAtten;
};

struct FogBlock {
    // A, B, C, Center
    vec4 Param;
    // 10 items
    vec4 AdjTable[3];
    // Fog color is RGB
    vec4 Color;
};

// Expected to change with each material.
layout(std140) uniform ub_MaterialParams {
    vec4 u_ColorMatReg[2];
    vec4 u_ColorAmbReg[2];
    vec4 u_KonstColor[4];
    vec4 u_Color[4];
    Mat3x4 u_TexMtx[10];
    vec4 u_TextureSizes[4];
    vec4 u_TextureBiases[2];
    Mat2x4 u_IndTexMtx[3];

    // Optional parameters.
${materialHasPostTexMtxBlock(material) ? `
    Mat3x4 u_PostTexMtx[20];
` : ``}
${materialHasLightsBlock(material) ? `
    Light u_LightParams[8];
` : ``}
${materialHasFogBlock(material) ? `
    FogBlock u_FogBlock;
` : ``}
${materialHasDynamicAlphaTest(material) ? `
    vec4 u_DynamicAlphaParams;
` : ``}
};

// Expected to change with each shape draw.
layout(std140) uniform ub_DrawParams {
${materialUsePnMtxIdx(material) ? `
    Mat3x4 u_PosMtx[10];
` : `
    Mat3x4 u_PosMtx[1];
`}
};

uniform sampler2D u_Texture0;
uniform sampler2D u_Texture1;
uniform sampler2D u_Texture2;
uniform sampler2D u_Texture3;
uniform sampler2D u_Texture4;
uniform sampler2D u_Texture5;
uniform sampler2D u_Texture6;
uniform sampler2D u_Texture7;
`;
}
function getMaterialParamsBlockSize(material) {
  let size = 4 * 2 + 4 * 2 + 4 * 4 + 4 * 4 + 4 * 3 * 10 + 4 * 4 + 4 * 2 + 4 * 2 * 3;
  if (materialHasPostTexMtxBlock(material))
    size += 4 * 3 * 20;
  if (materialHasLightsBlock(material))
    size += 4 * 5 * 8;
  if (materialHasFogBlock(material))
    size += 4 * 5;
  if (materialHasDynamicAlphaTest(material))
    size += 4 * 1;
  return size;
}
function getDrawParamsBlockSize(material) {
  let size = 0;
  if (materialUsePnMtxIdx(material))
    size += 4 * 3 * 10;
  else
    size += 4 * 3 * 1;
  return size;
}
function getRasColorChannelID(v) {
  switch (v) {
    case 0 /* COLOR0 */:
    case 2 /* ALPHA0 */:
    case 4 /* COLOR0A0 */:
      return 0 /* COLOR0A0 */;
    case 1 /* COLOR1 */:
    case 3 /* ALPHA1 */:
    case 5 /* COLOR1A1 */:
      return 1 /* COLOR1A1 */;
    case 7 /* ALPHA_BUMP */:
      return 5 /* ALPHA_BUMP */;
    case 8 /* ALPHA_BUMP_N */:
      return 6 /* ALPHA_BUMP_N */;
    case 6 /* COLOR_ZERO */:
    case 255 /* COLOR_NULL */:
      return 7 /* COLOR_ZERO */;
    default:
      throw new Error("whoops");
  }
}
function lightSetWorldPosition(light, viewMatrix, v) {
  transformVec3Mat4w1(light.Position, viewMatrix, v);
}
function fogBlockSet(fog, type, startZ, endZ, nearZ, farZ) {
  const proj = !!(type >>> 3);
  assert(Number.isFinite(farZ));
  if (proj) {
    fog.A = (farZ - nearZ) / (endZ - startZ);
    fog.B = 0;
    fog.C = (startZ - nearZ) / (endZ - startZ);
  } else {
    fog.A = farZ * nearZ / ((farZ - nearZ) * (endZ - startZ));
    fog.B = farZ / (farZ - nearZ);
    fog.C = startZ / (endZ - startZ);
  }
}
var EFB_WIDTH, EFB_HEIGHT, GXShaderLibrary, Light, FogBlock, TevDefaultSwapTables, vtxAttributeGenDefs, GX_Program;
var init_gx_material = __esm({
  "noclip/gx/gx_material.ts"() {
    init_gx_enum();
    init_Color();
    init_GfxPlatformFormat();
    init_esm();
    init_util();
    init_ReversedDepthHelpers();
    init_MathHelpers();
    init_gx_displaylist();
    init_Program();
    init_GfxShaderLibrary();
    EFB_WIDTH = 640;
    EFB_HEIGHT = 528;
    ((GXShaderLibrary2) => {
      GXShaderLibrary2.TevOverflow = `
float TevOverflow(float a) { return float(int(a * 255.0) & 255) / 255.0; }
vec3 TevOverflow(vec3 a) { return vec3(TevOverflow(a.r), TevOverflow(a.g), TevOverflow(a.b)); }
vec4 TevOverflow(vec4 a) { return vec4(TevOverflow(a.r), TevOverflow(a.g), TevOverflow(a.b), TevOverflow(a.a)); }
`;
      GXShaderLibrary2.GXIntensity = `
float GXIntensity(vec3 t_Color) {
    // https://github.com/dolphin-emu/dolphin/blob/4cd48e609c507e65b95bca5afb416b59eaf7f683/Source/Core/VideoCommon/TextureConverterShaderGen.cpp#L237-L241
    return dot(t_Color, vec3(0.257, 0.504, 0.098)) + 16.0/255.0;
}
`;
      function generateBlurFunction(functionName, tapCount, radiusStr, intensityPerTapStr, angleOffset = 0) {
        let S = `
vec3 ${functionName}(PD_SAMPLER_2D(t_Texture), in vec2 t_TexCoord, in vec2 t_Aspect) {
    vec3 c = vec3(0.0);
`;
        for (let i = 0; i < tapCount; i++) {
          const theta = angleOffset + 6.283185307179586 /* TAU */ * (i / tapCount);
          const x = Math.cos(theta), y = -Math.sin(theta);
          S += `
    c += (texture(PU_SAMPLER_2D(t_Texture), t_TexCoord + t_Aspect * vec2(${glslGenerateFloat(x)} * ${radiusStr}, ${glslGenerateFloat(y)} * ${radiusStr})).rgb * ${intensityPerTapStr});`;
        }
        S += `
    return c;
}
`;
        return S;
      }
      GXShaderLibrary2.generateBlurFunction = generateBlurFunction;
    })(GXShaderLibrary || (GXShaderLibrary = {}));
    Light = class {
      Position = vec3_exports.create();
      Direction = vec3_exports.create();
      DistAtten = vec3_exports.create();
      CosAtten = vec3_exports.create();
      Color = colorNewCopy(TransparentBlack);
      constructor() {
        this.reset();
      }
      reset() {
        vec3_exports.zero(this.Position);
        vec3_exports.set(this.Direction, 0, 0, -1);
        vec3_exports.set(this.DistAtten, 1, 0, 0);
        vec3_exports.set(this.CosAtten, 1, 0, 0);
        colorFromRGBA(this.Color, 0, 0, 0, 1);
      }
      copy(o) {
        vec3_exports.copy(this.Position, o.Position);
        vec3_exports.copy(this.Direction, o.Direction);
        vec3_exports.copy(this.DistAtten, o.DistAtten);
        vec3_exports.copy(this.CosAtten, o.CosAtten);
        colorCopy(this.Color, o.Color);
      }
    };
    FogBlock = class {
      Color = colorNewCopy(TransparentBlack);
      A = 0;
      B = 0;
      C = 0;
      AdjTable = new Uint16Array(10);
      AdjCenter = 0;
      reset() {
        colorFromRGBA(this.Color, 0, 0, 0, 0);
        this.A = 0;
        this.B = 0;
        this.C = 0;
        this.AdjTable.fill(0);
        this.AdjCenter = 0;
      }
      copy(o) {
        colorCopy(this.Color, o.Color);
        this.A = o.A;
        this.B = o.B;
        this.C = o.C;
        this.AdjTable.set(o.AdjTable);
        this.AdjCenter = o.AdjCenter;
      }
    };
    TevDefaultSwapTables = [
      [0 /* R */, 1 /* G */, 2 /* B */, 3 /* A */],
      [0 /* R */, 0 /* R */, 0 /* R */, 3 /* A */],
      [1 /* G */, 1 /* G */, 1 /* G */, 3 /* A */],
      [2 /* B */, 2 /* B */, 2 /* B */, 3 /* A */]
    ];
    vtxAttributeGenDefs = [
      { attrInput: 2 /* POS */, name: "Position", format: GfxFormat.F32_RGBA },
      { attrInput: 0 /* TEX0123MTXIDX */, name: "TexMtx0123Idx", format: GfxFormat.F32_RGBA },
      { attrInput: 1 /* TEX4567MTXIDX */, name: "TexMtx4567Idx", format: GfxFormat.F32_RGBA },
      { attrInput: 3 /* NRM */, name: "Normal", format: GfxFormat.F32_RGB },
      { attrInput: 4 /* BINRM */, name: "Binormal", format: GfxFormat.F32_RGB },
      { attrInput: 5 /* TANGENT */, name: "Tangent", format: GfxFormat.F32_RGB },
      { attrInput: 6 /* CLR0 */, name: "Color0", format: GfxFormat.F32_RGBA },
      { attrInput: 7 /* CLR1 */, name: "Color1", format: GfxFormat.F32_RGBA },
      { attrInput: 8 /* TEX01 */, name: "Tex01", format: GfxFormat.F32_RGBA },
      { attrInput: 9 /* TEX23 */, name: "Tex23", format: GfxFormat.F32_RGBA },
      { attrInput: 10 /* TEX45 */, name: "Tex45", format: GfxFormat.F32_RGBA },
      { attrInput: 11 /* TEX67 */, name: "Tex67", format: GfxFormat.F32_RGBA }
    ];
    GX_Program = class extends DeviceProgram {
      constructor(material, hacks = null) {
        super();
        this.material = material;
        this.hacks = hacks;
        this.name = material.name;
        this.generateShaders();
      }
      material;
      hacks;
      static ub_SceneParams = 0;
      static ub_MaterialParams = 1;
      static ub_DrawParams = 2;
      name;
      generateFloat(v) {
        return glslGenerateFloat(v);
      }
      // Color Channels
      generateMaterialSource(chan, i) {
        if (this.hacks !== null && this.hacks.disableVertexColors && chan.matColorSource === 1 /* VTX */)
          return `vec4(1.0, 1.0, 1.0, 1.0)`;
        switch (chan.matColorSource) {
          case 1 /* VTX */:
            return `a_Color${i}`;
          case 0 /* REG */:
            return `u_ColorMatReg[${i}]`;
        }
      }
      generateAmbientSource(chan, i) {
        if (this.hacks !== null && this.hacks.disableVertexColors && chan.ambColorSource === 1 /* VTX */)
          return `vec4(1.0, 1.0, 1.0, 1.0)`;
        switch (chan.ambColorSource) {
          case 1 /* VTX */:
            return `a_Color${i}`;
          case 0 /* REG */:
            return `u_ColorAmbReg[${i}]`;
        }
      }
      generateColorChannel(chan, i) {
        const matSource = this.generateMaterialSource(chan, i);
        const ambSource = this.generateAmbientSource(chan, i);
        let lightingEnabled = chan.lightingEnabled;
        if (this.hacks !== null && this.hacks.disableLighting)
          lightingEnabled = false;
        if (lightingEnabled && this.hacks !== null && this.hacks.lightingFudge) {
          const vtx = `a_Color${i}`;
          const amb = `u_ColorAmbReg[${i}]`;
          const mat = `u_ColorMatReg[${i}]`;
          const fudged = this.hacks.lightingFudge({ vtx, amb, mat, ambSource, matSource });
          return `vec4(${fudged})`;
        }
        if (lightingEnabled) {
          if (chan.litMask !== 0)
            assert(materialHasLightsBlock(this.material));
          return `${matSource} * clamp(${ambSource} + ApplyLightChannel(${chan.litMask}, LightingParams(${chan.attenuationFunction}, ${chan.diffuseFunction}, t_Position.xyz, t_Normal.xyz)), 0.0, 1.0)`;
        } else {
          return matSource;
        }
      }
      generateLightChannel(lightChannel, outputName, i) {
        if (colorChannelsEqual(lightChannel.colorChannel, lightChannel.alphaChannel)) {
          return `
    ${outputName} = ${this.generateColorChannel(lightChannel.colorChannel, i)};`;
        } else {
          return `
    ${outputName}.rgb = (${this.generateColorChannel(lightChannel.colorChannel, i)}).rgb;
    ${outputName}.a = (${this.generateColorChannel(lightChannel.alphaChannel, i)}).a;`;
        }
      }
      generatePosition() {
        return `vec3 t_Position = ${this.generateMul(`a_Position`, true, false)};`;
      }
      generateLightChannels() {
        return this.material.lightChannels.map((lightChannel, i) => {
          return this.generateLightChannel(lightChannel, `v_Color${i}`, i);
        }).join("\n");
      }
      // Output is a vec3, src is a vec4.
      generateMulPntMatrixStatic(pnt, src, nrm = false) {
        if (pnt === 60 /* IDENTITY */) {
          return `${src}.xyz`;
        } else if (pnt >= 30 /* TEXMTX0 */) {
          const texMtxIdx = (pnt - 30 /* TEXMTX0 */) / 3;
          return nrm ? `MulNormalMatrix(UnpackMatrix(u_TexMtx[${texMtxIdx}]), ${src})` : `(UnpackMatrix(u_TexMtx[${texMtxIdx}]) * ${src})`;
        } else if (pnt >= 0 /* PNMTX0 */) {
          const pnMtxIdx = (pnt - 0 /* PNMTX0 */) / 3;
          return nrm ? `MulNormalMatrix(UnpackMatrix(u_PosMtx[${pnMtxIdx}]), ${src})` : `(UnpackMatrix(u_PosMtx[${pnMtxIdx}]) * ${src})`;
        } else {
          throw new Error("whoops");
        }
      }
      // Output is a vec3, src is a vec4.
      generateMulPntMatrixDynamic(attrStr, src, nrm = false) {
        return nrm ? `MulNormalMatrix(GetPosTexMatrix(${attrStr}), ${src})` : `(GetPosTexMatrix(${attrStr}) * ${src})`;
      }
      generateTexMtxIdxAttr(index) {
        if (index === 0 /* TEXCOORD0 */) return `(a_TexMtx0123Idx.x * 256.0)`;
        if (index === 1 /* TEXCOORD1 */) return `(a_TexMtx0123Idx.y * 256.0)`;
        if (index === 2 /* TEXCOORD2 */) return `(a_TexMtx0123Idx.z * 256.0)`;
        if (index === 3 /* TEXCOORD3 */) return `(a_TexMtx0123Idx.w * 256.0)`;
        if (index === 4 /* TEXCOORD4 */) return `(a_TexMtx4567Idx.x * 256.0)`;
        if (index === 5 /* TEXCOORD5 */) return `(a_TexMtx4567Idx.y * 256.0)`;
        if (index === 6 /* TEXCOORD6 */) return `(a_TexMtx4567Idx.z * 256.0)`;
        if (index === 7 /* TEXCOORD7 */) return `(a_TexMtx4567Idx.w * 256.0)`;
        throw new Error("whoops");
      }
      // TexGen
      // Output is a vec4.
      generateTexGenSource(src) {
        switch (src) {
          case 0 /* POS */:
            return `vec4(a_Position.xyz, 1.0)`;
          case 1 /* NRM */:
            return `vec4(a_Normal.xyz, 1.0)`;
          case 2 /* BINRM */:
            return `vec4(a_Binormal.xyz, 1.0)`;
          case 3 /* TANGENT */:
            return `vec4(a_Tangent.xyz, 1.0)`;
          case 19 /* COLOR0 */:
            return `v_Color0`;
          case 20 /* COLOR1 */:
            return `v_Color1`;
          case 4 /* TEX0 */:
            return `vec4(a_Tex01.xy, 1.0, 1.0)`;
          case 5 /* TEX1 */:
            return `vec4(a_Tex01.zw, 1.0, 1.0)`;
          case 6 /* TEX2 */:
            return `vec4(a_Tex23.xy, 1.0, 1.0)`;
          case 7 /* TEX3 */:
            return `vec4(a_Tex23.zw, 1.0, 1.0)`;
          case 8 /* TEX4 */:
            return `vec4(a_Tex45.xy, 1.0, 1.0)`;
          case 9 /* TEX5 */:
            return `vec4(a_Tex45.zw, 1.0, 1.0)`;
          case 10 /* TEX6 */:
            return `vec4(a_Tex67.xy, 1.0, 1.0)`;
          case 11 /* TEX7 */:
            return `vec4(a_Tex67.zw, 1.0, 1.0)`;
          // Use a previously generated texcoordgen.
          case 12 /* TEXCOORD0 */:
            return `vec4(t_TexCoord0, 1.0)`;
          case 13 /* TEXCOORD1 */:
            return `vec4(t_TexCoord1, 1.0)`;
          case 14 /* TEXCOORD2 */:
            return `vec4(t_TexCoord2, 1.0)`;
          case 15 /* TEXCOORD3 */:
            return `vec4(t_TexCoord3, 1.0)`;
          case 16 /* TEXCOORD4 */:
            return `vec4(t_TexCoord4, 1.0)`;
          case 17 /* TEXCOORD5 */:
            return `vec4(t_TexCoord5, 1.0)`;
          case 18 /* TEXCOORD6 */:
            return `vec4(t_TexCoord6, 1.0)`;
          default:
            throw new Error("whoops");
        }
      }
      // Output is a vec3, src is a vec4.
      generatePostTexGenMatrixMult(texCoordGen, src) {
        if (texCoordGen.postMatrix === 125 /* PTIDENTITY */) {
          return `${src}.xyz`;
        } else if (texCoordGen.postMatrix >= 64 /* PTTEXMTX0 */) {
          const texMtxIdx = (texCoordGen.postMatrix - 64 /* PTTEXMTX0 */) / 3;
          return `(UnpackMatrix(u_PostTexMtx[${texMtxIdx}]) * ${src})`;
        } else {
          throw new Error("whoops");
        }
      }
      // Output is a vec3, src is a vec3.
      generateTexGenMatrixMult(texCoordGenIndex, src) {
        if (materialUseTexMtxIdx(this.material, texCoordGenIndex)) {
          const attrStr = this.generateTexMtxIdxAttr(texCoordGenIndex);
          return this.generateMulPntMatrixDynamic(attrStr, src);
        } else {
          return this.generateMulPntMatrixStatic(this.material.texGens[texCoordGenIndex].matrix, src);
        }
      }
      // Output is a vec3, src is a vec4.
      generateTexGenBump(texCoordGenIndex, src) {
        const texCoordGen = this.material.texGens[texCoordGenIndex];
        assert(texCoordGen.type >= 2 /* BUMP0 */ && texCoordGen.type <= 9 /* BUMP7 */);
        const lightIdx = texCoordGen.type - 2 /* BUMP0 */;
        const lightDir = `normalize(u_LightParams[${lightIdx}].Position.xyz - v_Position.xyz)`;
        const t2 = this.generateMul(`a_Tangent`, false, false);
        const b = this.generateMul(`a_Binormal`, false, false);
        return `${src}.xyz + vec3(dot(${lightDir}, ${t2}.xyz), dot(${lightDir}, ${b}.xyz), 0.0)`;
      }
      // Output is a vec3, src is a vec4.
      generateTexGenType(texCoordGenIndex) {
        const texCoordGen = this.material.texGens[texCoordGenIndex];
        const src = this.generateTexGenSource(texCoordGen.source);
        if (texCoordGen.type === 10 /* SRTG */)
          return `vec3(${src}.xy, 1.0)`;
        else if (texCoordGen.type === 1 /* MTX2x4 */)
          return `vec3(${this.generateTexGenMatrixMult(texCoordGenIndex, src)}.xy, 1.0)`;
        else if (texCoordGen.type === 0 /* MTX3x4 */)
          return `${this.generateTexGenMatrixMult(texCoordGenIndex, src)}`;
        else
          return `${this.generateTexGenBump(texCoordGenIndex, src)}`;
      }
      // Output is a vec3.
      generateTexGenNrm(texCoordGenIndex) {
        const texCoordGen = this.material.texGens[texCoordGenIndex];
        const src = this.generateTexGenType(texCoordGenIndex);
        if (texCoordGen.normalize)
          return `normalize(${src})`;
        else
          return src;
      }
      // Output is a vec3.
      generateTexGenPost(texCoordGenIndex) {
        const texCoordGen = this.material.texGens[texCoordGenIndex];
        const src = this.generateTexGenNrm(texCoordGenIndex);
        if (texCoordGen.postMatrix === 125 /* PTIDENTITY */) {
          return src;
        } else {
          return this.generatePostTexGenMatrixMult(texCoordGen, `vec4(${src}, 1.0)`);
        }
      }
      generateTexGen(i) {
        const tg = this.material.texGens[i];
        let suffix;
        if (tg.type === 1 /* MTX2x4 */ || tg.type === 10 /* SRTG */)
          suffix = `.xy`;
        else
          suffix = `.xyz`;
        return `
    // TexGen ${i} Type: ${tg.type} Source: ${tg.source} Matrix: ${tg.matrix}
    vec3 t_TexCoord${i} = ${this.generateTexGenPost(i)};
    v_TexCoord${i} = t_TexCoord${i}${suffix};`;
      }
      generateTexGens() {
        return this.material.texGens.map((tg, i) => {
          return this.generateTexGen(i);
        }).join("");
      }
      generateColorVaryings() {
        return `
varying vec4 v_Color0;
varying vec4 v_Color1;
`;
      }
      generateTexCoordVaryings() {
        return this.material.texGens.map((tg, i) => {
          if (tg.type === 1 /* MTX2x4 */ || tg.type === 10 /* SRTG */)
            return `varying vec2 v_TexCoord${i};
`;
          else
            return `varying highp vec3 v_TexCoord${i};
`;
        }).join("");
      }
      generateTexCoordGetters() {
        return this.material.texGens.map((tg, i) => {
          if (tg.type === 1 /* MTX2x4 */ || tg.type === 10 /* SRTG */)
            return `vec2 ReadTexCoord${i}() { return v_TexCoord${i}.xy; }
`;
          else
            return `vec2 ReadTexCoord${i}() { return v_TexCoord${i}.xy / v_TexCoord${i}.z; }
`;
        }).join("");
      }
      // IndTex
      generateIndTexStageScaleN(scale6) {
        switch (scale6) {
          case 0 /* _1 */:
            return `1.0`;
          case 1 /* _2 */:
            return `1.0/2.0`;
          case 2 /* _4 */:
            return `1.0/4.0`;
          case 3 /* _8 */:
            return `1.0/8.0`;
          case 4 /* _16 */:
            return `1.0/16.0`;
          case 5 /* _32 */:
            return `1.0/32.0`;
          case 6 /* _64 */:
            return `1.0/64.0`;
          case 7 /* _128 */:
            return `1.0/128.0`;
          case 8 /* _256 */:
            return `1.0/256.0`;
          default:
            throw new Error("whoops");
        }
      }
      generateIndTexStageScale(stage) {
        const baseCoord = `ReadTexCoord${stage.texCoordId}()`;
        if (stage.scaleS === 0 /* _1 */ && stage.scaleT === 0 /* _1 */)
          return baseCoord;
        else
          return `${baseCoord} * vec2(${this.generateIndTexStageScaleN(stage.scaleS)}, ${this.generateIndTexStageScaleN(stage.scaleT)})`;
      }
      generateTextureSample(index, coord) {
        return `texture(SAMPLER_2D(u_Texture${index}), ${coord}, TextureLODBias(${index}))`;
      }
      generateIndTexStage(indTexStageIndex) {
        const stage = this.material.indTexStages[indTexStageIndex];
        return `
    // Indirect ${indTexStageIndex}
    vec3 t_IndTexCoord${indTexStageIndex} = 255.0 * ${this.generateTextureSample(stage.texture, this.generateIndTexStageScale(stage))}.abg;`;
      }
      generateIndTexStages() {
        return this.material.indTexStages.map((stage, i) => {
          if (stage.texCoordId >= this.material.texGens.length)
            return "";
          return this.generateIndTexStage(i);
        }).join("");
      }
      // TEV
      generateKonstColorSel(konstColor) {
        switch (konstColor) {
          case 0 /* KCSEL_1 */:
            return "vec3(8.0/8.0)";
          case 1 /* KCSEL_7_8 */:
            return "vec3(7.0/8.0)";
          case 2 /* KCSEL_6_8 */:
            return "vec3(6.0/8.0)";
          case 3 /* KCSEL_5_8 */:
            return "vec3(5.0/8.0)";
          case 4 /* KCSEL_4_8 */:
            return "vec3(4.0/8.0)";
          case 5 /* KCSEL_3_8 */:
            return "vec3(3.0/8.0)";
          case 6 /* KCSEL_2_8 */:
            return "vec3(2.0/8.0)";
          case 7 /* KCSEL_1_8 */:
            return "vec3(1.0/8.0)";
          case 12 /* KCSEL_K0 */:
            return "s_kColor0.rgb";
          case 16 /* KCSEL_K0_R */:
            return "s_kColor0.rrr";
          case 20 /* KCSEL_K0_G */:
            return "s_kColor0.ggg";
          case 24 /* KCSEL_K0_B */:
            return "s_kColor0.bbb";
          case 28 /* KCSEL_K0_A */:
            return "s_kColor0.aaa";
          case 13 /* KCSEL_K1 */:
            return "s_kColor1.rgb";
          case 17 /* KCSEL_K1_R */:
            return "s_kColor1.rrr";
          case 21 /* KCSEL_K1_G */:
            return "s_kColor1.ggg";
          case 25 /* KCSEL_K1_B */:
            return "s_kColor1.bbb";
          case 29 /* KCSEL_K1_A */:
            return "s_kColor1.aaa";
          case 14 /* KCSEL_K2 */:
            return "s_kColor2.rgb";
          case 18 /* KCSEL_K2_R */:
            return "s_kColor2.rrr";
          case 22 /* KCSEL_K2_G */:
            return "s_kColor2.ggg";
          case 26 /* KCSEL_K2_B */:
            return "s_kColor2.bbb";
          case 30 /* KCSEL_K2_A */:
            return "s_kColor2.aaa";
          case 15 /* KCSEL_K3 */:
            return "s_kColor3.rgb";
          case 19 /* KCSEL_K3_R */:
            return "s_kColor3.rrr";
          case 23 /* KCSEL_K3_G */:
            return "s_kColor3.ggg";
          case 27 /* KCSEL_K3_B */:
            return "s_kColor3.bbb";
          case 31 /* KCSEL_K3_A */:
            return "s_kColor3.aaa";
        }
      }
      generateKonstAlphaSel(konstAlpha) {
        switch (konstAlpha) {
          case 0 /* KASEL_1 */:
            return "(8.0/8.0)";
          case 1 /* KASEL_7_8 */:
            return "(7.0/8.0)";
          case 2 /* KASEL_6_8 */:
            return "(6.0/8.0)";
          case 3 /* KASEL_5_8 */:
            return "(5.0/8.0)";
          case 4 /* KASEL_4_8 */:
            return "(4.0/8.0)";
          case 5 /* KASEL_3_8 */:
            return "(3.0/8.0)";
          case 6 /* KASEL_2_8 */:
            return "(2.0/8.0)";
          case 7 /* KASEL_1_8 */:
            return "(1.0/8.0)";
          case 16 /* KASEL_K0_R */:
            return "s_kColor0.r";
          case 20 /* KASEL_K0_G */:
            return "s_kColor0.g";
          case 24 /* KASEL_K0_B */:
            return "s_kColor0.b";
          case 28 /* KASEL_K0_A */:
            return "s_kColor0.a";
          case 17 /* KASEL_K1_R */:
            return "s_kColor1.r";
          case 21 /* KASEL_K1_G */:
            return "s_kColor1.g";
          case 25 /* KASEL_K1_B */:
            return "s_kColor1.b";
          case 29 /* KASEL_K1_A */:
            return "s_kColor1.a";
          case 18 /* KASEL_K2_R */:
            return "s_kColor2.r";
          case 22 /* KASEL_K2_G */:
            return "s_kColor2.g";
          case 26 /* KASEL_K2_B */:
            return "s_kColor2.b";
          case 30 /* KASEL_K2_A */:
            return "s_kColor2.a";
          case 19 /* KASEL_K3_R */:
            return "s_kColor3.r";
          case 23 /* KASEL_K3_G */:
            return "s_kColor3.g";
          case 27 /* KASEL_K3_B */:
            return "s_kColor3.b";
          case 31 /* KASEL_K3_A */:
            return "s_kColor3.a";
        }
      }
      generateIndTexCoordBase(stage) {
        return `(t_IndTexCoord${stage.indTexStage})`;
      }
      generateAlphaBumpSelChannel(stage) {
        const baseCoord = this.generateIndTexCoordBase(stage);
        switch (stage.indTexAlphaSel) {
          case 1 /* S */:
            return `${baseCoord}.x`;
          case 2 /* T */:
            return `${baseCoord}.y`;
          case 3 /* U */:
            return `${baseCoord}.z`;
          default:
            throw new Error("whoops");
        }
      }
      generateAlphaBumpSel(stage) {
        const baseCoord = this.generateAlphaBumpSelChannel(stage);
        switch (stage.indTexFormat) {
          case 0 /* _8 */:
            return `TevMask(${baseCoord}, 0xF8)`;
          case 1 /* _5 */:
            return `TevMask(${baseCoord}, 0xE0)`;
          case 2 /* _4 */:
            return `TevMask(${baseCoord}, 0xF0)`;
          case 3 /* _3 */:
            return `TevMask(${baseCoord}, 0xF8)`;
          default:
            throw new Error("whoops");
        }
      }
      generateRas(stage) {
        switch (stage.channelId) {
          case 0 /* COLOR0A0 */:
            return `v_Color0`;
          case 1 /* COLOR1A1 */:
            return `v_Color1`;
          case 5 /* ALPHA_BUMP */:
            return `vec4(${this.generateAlphaBumpSel(stage)})`;
          case 6 /* ALPHA_BUMP_N */:
            return `vec4(${this.generateAlphaBumpSel(stage)} * (255.0/248.0))`;
          case 7 /* COLOR_ZERO */:
            return `vec4(0, 0, 0, 0)`;
          default:
            throw new Error(`whoops ${stage.channelId}`);
        }
      }
      stageUsesSimpleCoords(stage) {
        return stage.indTexMatrix === 0 /* OFF */ && !stage.indTexAddPrev;
      }
      generateTexAccess(stage) {
        if (stage.texMap === 255 /* TEXMAP_NULL */)
          return "vec4(1.0, 1.0, 1.0, 1.0)";
        if (this.hacks !== null && this.hacks.disableTextures)
          return "vec4(1.0, 1.0, 1.0, 1.0)";
        const texScale = this.stageUsesSimpleCoords(stage) ? `` : ` * TextureInvScale(${stage.texMap})`;
        return this.generateTextureSample(stage.texMap, `t_TexCoord${texScale}`);
      }
      generateComponentSwizzle(swapTable, channel) {
        const suffixes = ["r", "g", "b", "a"];
        if (swapTable)
          channel = swapTable[channel];
        return suffixes[channel];
      }
      generateColorSwizzle(swapTable, colorIn) {
        const swapR = this.generateComponentSwizzle(swapTable, 0 /* R */);
        const swapG = this.generateComponentSwizzle(swapTable, 1 /* G */);
        const swapB = this.generateComponentSwizzle(swapTable, 2 /* B */);
        const swapA = this.generateComponentSwizzle(swapTable, 3 /* A */);
        switch (colorIn) {
          case 8 /* TEXC */:
          case 10 /* RASC */:
            return `${swapR}${swapG}${swapB}`;
          case 9 /* TEXA */:
          case 11 /* RASA */:
            return `${swapA}${swapA}${swapA}`;
          default:
            throw new Error("whoops");
        }
      }
      generateColorIn(stage, colorIn) {
        switch (colorIn) {
          case 0 /* CPREV */:
            return `t_ColorPrev.rgb`;
          case 1 /* APREV */:
            return `t_ColorPrev.aaa`;
          case 2 /* C0 */:
            return `t_Color0.rgb`;
          case 3 /* A0 */:
            return `t_Color0.aaa`;
          case 4 /* C1 */:
            return `t_Color1.rgb`;
          case 5 /* A1 */:
            return `t_Color1.aaa`;
          case 6 /* C2 */:
            return `t_Color2.rgb`;
          case 7 /* A2 */:
            return `t_Color2.aaa`;
          case 8 /* TEXC */:
            return `t_TexSample.${this.generateColorSwizzle(stage.texSwapTable, colorIn)}`;
          case 9 /* TEXA */:
            return `t_TexSample.${this.generateColorSwizzle(stage.texSwapTable, colorIn)}`;
          case 10 /* RASC */:
            return `saturate(${this.generateRas(stage)}.${this.generateColorSwizzle(stage.rasSwapTable, colorIn)})`;
          case 11 /* RASA */:
            return `saturate(${this.generateRas(stage)}.${this.generateColorSwizzle(stage.rasSwapTable, colorIn)})`;
          case 12 /* ONE */:
            return `vec3(1)`;
          case 13 /* HALF */:
            return `vec3(1.0/2.0)`;
          case 14 /* KONST */:
            return `${this.generateKonstColorSel(stage.konstColorSel)}`;
          case 15 /* ZERO */:
            return `vec3(0)`;
        }
      }
      generateAlphaIn(stage, alphaIn) {
        switch (alphaIn) {
          case 0 /* APREV */:
            return `t_ColorPrev.a`;
          case 1 /* A0 */:
            return `t_Color0.a`;
          case 2 /* A1 */:
            return `t_Color1.a`;
          case 3 /* A2 */:
            return `t_Color2.a`;
          case 4 /* TEXA */:
            return `t_TexSample.${this.generateComponentSwizzle(stage.texSwapTable, 3 /* A */)}`;
          case 5 /* RASA */:
            return `saturate(${this.generateRas(stage)}.${this.generateComponentSwizzle(stage.rasSwapTable, 3 /* A */)})`;
          case 6 /* KONST */:
            return `${this.generateKonstAlphaSel(stage.konstAlphaSel)}`;
          case 7 /* ZERO */:
            return `0.0`;
          default:
            throw new Error("whoops");
        }
      }
      generateTevInputs(stage) {
        return `
    t_TevA = TevOverflow(vec4(${this.generateColorIn(stage, stage.colorInA)}, ${this.generateAlphaIn(stage, stage.alphaInA)}));
    t_TevB = TevOverflow(vec4(${this.generateColorIn(stage, stage.colorInB)}, ${this.generateAlphaIn(stage, stage.alphaInB)}));
    t_TevC = TevOverflow(vec4(${this.generateColorIn(stage, stage.colorInC)}, ${this.generateAlphaIn(stage, stage.alphaInC)}));
    t_TevD = vec4(${this.generateColorIn(stage, stage.colorInD)}, ${this.generateAlphaIn(stage, stage.alphaInD)});
`.trim();
      }
      generateTevRegister(regId) {
        switch (regId) {
          case 0 /* PREV */:
            return `t_ColorPrev`;
          case 1 /* REG0 */:
            return `t_Color0`;
          case 2 /* REG1 */:
            return `t_Color1`;
          case 3 /* REG2 */:
            return `t_Color2`;
        }
      }
      generateTevOpBiasScaleClamp(value, bias, scale6) {
        let v = value;
        if (bias === 1 /* ADDHALF */)
          v = `TevBias(${v}, 0.5)`;
        else if (bias === 2 /* SUBHALF */)
          v = `TevBias(${v}, -0.5)`;
        if (scale6 === 1 /* SCALE_2 */)
          v = `(${v}) * 2.0`;
        else if (scale6 === 2 /* SCALE_4 */)
          v = `(${v}) * 4.0`;
        else if (scale6 === 3 /* DIVIDE_2 */)
          v = `(${v}) * 0.5`;
        return v;
      }
      generateTevOp(op, bias, scale6, a, b, c, d, zero4) {
        switch (op) {
          case 0 /* ADD */:
          case 1 /* SUB */:
            const neg = op === 1 /* SUB */ ? "-" : "";
            const v = `${neg}mix(${a}, ${b}, ${c}) + ${d}`;
            return this.generateTevOpBiasScaleClamp(v, bias, scale6);
          case 8 /* COMP_R8_GT */:
            return `((t_TevA.r >  t_TevB.r) ? ${c} : ${zero4}) + ${d}`;
          case 9 /* COMP_R8_EQ */:
            return `((t_TevA.r == t_TevB.r) ? ${c} : ${zero4}) + ${d}`;
          case 10 /* COMP_GR16_GT */:
            return `((TevPack16(t_TevA.rg) >  TevPack16(t_TevB.rg)) ? ${c} : ${zero4}) + ${d}`;
          case 11 /* COMP_GR16_EQ */:
            return `((TevPack16(t_TevA.rg) == TevPack16(t_TevB.rg)) ? ${c} : ${zero4}) + ${d}`;
          case 12 /* COMP_BGR24_GT */:
            return `((TevPack24(t_TevA.rgb) >  TevPack24(t_TevB.rgb)) ? ${c} : ${zero4}) + ${d}`;
          case 13 /* COMP_BGR24_EQ */:
            return `((TevPack24(t_TevA.rgb) == TevPack24(t_TevB.rgb)) ? ${c} : ${zero4}) + ${d}`;
          case 14 /* COMP_RGB8_GT */:
            return `(TevPerCompGT(${a}, ${b}) * ${c}) + ${d}`;
          case 15 /* COMP_RGB8_EQ */:
            return `(TevPerCompEQ(${a}, ${b}) * ${c}) + ${d}`;
          default:
            debugger;
            throw new Error("whoops");
        }
      }
      generateTevOpValue(op, bias, scale6, clamp2, a, b, c, d, zero4) {
        const expr = this.generateTevOp(op, bias, scale6, a, b, c, d, zero4);
        if (clamp2)
          return `saturate(${expr})`;
        else
          return `clamp(${expr}, -4.0, 4.0)`;
      }
      generateColorOp(stage) {
        const a = `t_TevA.rgb`, b = `t_TevB.rgb`, c = `t_TevC.rgb`, d = `t_TevD.rgb`, zero4 = `vec3(0)`;
        const value = this.generateTevOpValue(stage.colorOp, stage.colorBias, stage.colorScale, stage.colorClamp, a, b, c, d, zero4);
        return `${this.generateTevRegister(stage.colorRegId)}.rgb = ${value};`;
      }
      generateAlphaOp(stage) {
        const a = `t_TevA.a`, b = `t_TevB.a`, c = `t_TevC.a`, d = `t_TevD.a`, zero4 = "0.0";
        const value = this.generateTevOpValue(stage.alphaOp, stage.alphaBias, stage.alphaScale, stage.alphaClamp, a, b, c, d, zero4);
        return `${this.generateTevRegister(stage.alphaRegId)}.a = ${value};`;
      }
      generateTevTexCoordWrapN(texCoord, wrap) {
        switch (wrap) {
          case 0 /* OFF */:
            return texCoord;
          case 6 /* _0 */:
            return "0.0";
          case 1 /* _256 */:
            return `mod(${texCoord}, 256.0)`;
          case 2 /* _128 */:
            return `mod(${texCoord}, 128.0)`;
          case 3 /* _64 */:
            return `mod(${texCoord}, 64.0)`;
          case 4 /* _32 */:
            return `mod(${texCoord}, 32.0)`;
          case 5 /* _16 */:
            return `mod(${texCoord}, 16.0)`;
        }
      }
      generateTevTexCoordWrap(stage) {
        if (stage.texCoordId === 255 /* TEXCOORD_NULL */ || stage.texMap === 255 /* TEXMAP_NULL */)
          return ``;
        const lastTexGenId = this.material.texGens.length - 1;
        let texGenId = stage.texCoordId;
        if (texGenId >= lastTexGenId)
          texGenId = lastTexGenId;
        if (texGenId < 0)
          return `vec2(0.0, 0.0)`;
        const texScale = this.stageUsesSimpleCoords(stage) ? `` : ` * TextureScale(${stage.texMap})`;
        const baseCoord = `ReadTexCoord${texGenId}()${texScale}`;
        if (stage.indTexWrapS === 0 /* OFF */ && stage.indTexWrapT === 0 /* OFF */)
          return baseCoord;
        else
          return `vec2(${this.generateTevTexCoordWrapN(`${baseCoord}.x`, stage.indTexWrapS)}, ${this.generateTevTexCoordWrapN(`${baseCoord}.y`, stage.indTexWrapT)})`;
      }
      generateTevTexCoordIndTexCoordBias(stage) {
        const bias = stage.indTexFormat === 0 /* _8 */ ? "-128.0" : `1.0`;
        switch (stage.indTexBiasSel) {
          case 0 /* NONE */:
            return ``;
          case 1 /* S */:
            return ` + vec3(${bias}, 0.0, 0.0)`;
          case 3 /* ST */:
            return ` + vec3(${bias}, ${bias}, 0.0)`;
          case 5 /* SU */:
            return ` + vec3(${bias}, 0.0, ${bias})`;
          case 2 /* T */:
            return ` + vec3(0.0, ${bias}, 0.0)`;
          case 6 /* TU */:
            return ` + vec3(0.0, ${bias}, ${bias})`;
          case 4 /* U */:
            return ` + vec3(0.0, 0.0, ${bias})`;
          case 7 /* STU */:
            return ` + vec3(${bias})`;
        }
      }
      generateTevTexCoordIndTexCoord(stage) {
        const baseCoord = this.generateIndTexCoordBase(stage);
        switch (stage.indTexFormat) {
          case 0 /* _8 */:
            return baseCoord;
          default:
          case 1 /* _5 */:
            throw new Error("whoops");
        }
      }
      generateTevTexCoordIndirectMtx(stage) {
        const indTexCoord = `(${this.generateTevTexCoordIndTexCoord(stage)}${this.generateTevTexCoordIndTexCoordBias(stage)})`;
        const indTexMtxIdx = (stage.indTexMatrix & 3) - 1;
        switch (stage.indTexMatrix) {
          case 1 /* _0 */:
          case 2 /* _1 */:
          case 3 /* _2 */:
            return `UnpackMatrix(u_IndTexMtx[${indTexMtxIdx}]) * vec4(${indTexCoord}, 0.0)`;
          case 5 /* S0 */:
          case 6 /* S1 */:
          case 7 /* S2 */:
            return `(u_IndTexMtx[${indTexMtxIdx}].mx.w * ReadTexCoord${stage.texCoordId}() * ${indTexCoord}.xx)`;
          case 9 /* T0 */:
          case 10 /* T1 */:
          case 11 /* T2 */:
            return `(u_IndTexMtx[${indTexMtxIdx}].mx.w * ReadTexCoord${stage.texCoordId}() * ${indTexCoord}.yy)`;
          default:
            throw new Error("whoops");
        }
      }
      generateTevTexCoordIndirectTranslation(stage) {
        if (stage.indTexMatrix !== 0 /* OFF */ && stage.indTexStage < this.material.indTexStages.length)
          return `${this.generateTevTexCoordIndirectMtx(stage)}`;
        else
          return ``;
      }
      generateTevTexCoordIndirect(stage) {
        const baseCoord = this.generateTevTexCoordWrap(stage);
        const indCoord = this.generateTevTexCoordIndirectTranslation(stage);
        if (baseCoord !== `` && indCoord !== ``)
          return `${baseCoord} + ${indCoord}`;
        else if (baseCoord !== ``)
          return baseCoord;
        else
          return indCoord;
      }
      generateTevTexCoord(stage) {
        const finalCoord = this.generateTevTexCoordIndirect(stage);
        if (finalCoord !== ``) {
          if (stage.indTexAddPrev) {
            return `t_TexCoord += ${finalCoord};`;
          } else {
            return `t_TexCoord = ${finalCoord};`;
          }
        } else {
          return ``;
        }
      }
      generateTevStage(tevStageIndex) {
        const stage = this.material.tevStages[tevStageIndex];
        return `
    // TEV Stage ${tevStageIndex}
    ${this.generateTevTexCoord(stage)}
    // Color Combine
    // colorIn: ${stage.colorInA} ${stage.colorInB} ${stage.colorInC} ${stage.colorInD}  colorOp: ${stage.colorOp} colorBias: ${stage.colorBias} colorScale: ${stage.colorScale} colorClamp: ${stage.colorClamp} colorRegId: ${stage.colorRegId}
    // alphaIn: ${stage.alphaInA} ${stage.alphaInB} ${stage.alphaInC} ${stage.alphaInD}  alphaOp: ${stage.alphaOp} alphaBias: ${stage.alphaBias} alphaScale: ${stage.alphaScale} alphaClamp: ${stage.alphaClamp} alphaRegId: ${stage.alphaRegId}
    // texCoordId: ${stage.texCoordId} texMap: ${stage.texMap} channelId: ${stage.channelId}
    t_TexSample = ${this.generateTexAccess(stage)};
    ${this.generateTevInputs(stage)}
    ${this.generateColorOp(stage)}
    ${this.generateAlphaOp(stage)}`;
      }
      generateTevStages() {
        return this.material.tevStages.map((s, i) => this.generateTevStage(i)).join(`
`);
      }
      generateTevStagesLastMinuteFixup() {
        const tevStages = this.material.tevStages;
        const lastTevStage = tevStages[tevStages.length - 1];
        const colorReg = this.generateTevRegister(lastTevStage.colorRegId);
        const alphaReg = this.generateTevRegister(lastTevStage.alphaRegId);
        if (colorReg === alphaReg) {
          return `
    vec4 t_TevOutput = ${colorReg};`;
        } else {
          return `
    vec4 t_TevOutput = vec4(${colorReg}.rgb, ${alphaReg}.a);`;
        }
      }
      generateAlphaTestCompare(compare, ref) {
        switch (compare) {
          case 0 /* NEVER */:
            return `false`;
          case 1 /* LESS */:
            return `t_PixelOut.a <  ${ref}`;
          case 2 /* EQUAL */:
            return `t_PixelOut.a == ${ref}`;
          case 3 /* LEQUAL */:
            return `t_PixelOut.a <= ${ref}`;
          case 4 /* GREATER */:
            return `t_PixelOut.a >  ${ref}`;
          case 5 /* NEQUAL */:
            return `t_PixelOut.a != ${ref}`;
          case 6 /* GEQUAL */:
            return `t_PixelOut.a >= ${ref}`;
          case 7 /* ALWAYS */:
            return `true`;
        }
      }
      generateAlphaTestOp(op) {
        switch (op) {
          case 0 /* AND */:
            return `t_AlphaTestA && t_AlphaTestB`;
          case 1 /* OR */:
            return `t_AlphaTestA || t_AlphaTestB`;
          case 2 /* XOR */:
            return `t_AlphaTestA != t_AlphaTestB`;
          case 3 /* XNOR */:
            return `t_AlphaTestA == t_AlphaTestB`;
        }
      }
      generateAlphaTest() {
        const alphaTest = this.material.alphaTest;
        if (alphaTest.op === 1 /* OR */ && (alphaTest.compareA === 7 /* ALWAYS */ || alphaTest.compareB === 7 /* ALWAYS */))
          return "";
        const referenceA = materialHasDynamicAlphaTest(this.material) ? `u_DynamicAlphaParams.x` : this.generateFloat(alphaTest.referenceA);
        const referenceB = materialHasDynamicAlphaTest(this.material) ? `u_DynamicAlphaParams.y` : this.generateFloat(alphaTest.referenceB);
        return `
    bool t_AlphaTestA = ${this.generateAlphaTestCompare(alphaTest.compareA, referenceA)};
    bool t_AlphaTestB = ${this.generateAlphaTestCompare(alphaTest.compareB, referenceB)};
    if (!(${this.generateAlphaTestOp(alphaTest.op)}))
        discard;`;
      }
      generateFogZCoord() {
        const isDepthReversed = IsDepthReversed;
        if (isDepthReversed)
          return `(1.0 - gl_FragCoord.z)`;
        else
          return `gl_FragCoord.z`;
      }
      generateFogBase() {
        const isProjection = `(u_FogBlock.Param.y != 0.0)`;
        const A = `u_FogBlock.Param.x`;
        const B = `u_FogBlock.Param.y`;
        const z = this.generateFogZCoord();
        return `(${isProjection}) ? (${A} / (${B} - ${z})) : (${A} * ${z})`;
      }
      generateFogAdj(base) {
        if (this.material.ropInfo.fogAdjEnabled) {
          return ``;
        } else {
          return ``;
        }
      }
      generateFogFunc(base) {
        const fogType = this.material.ropInfo.fogType & 7;
        if (fogType === 2 /* PERSP_LIN */) {
          return base;
        } else if (fogType === 4 /* PERSP_EXP */) {
          return `1.0 - exp2(-8.0 * ${base});`;
        } else if (fogType === 5 /* PERSP_EXP2 */) {
          return `1.0 - exp2(-8.0 * ${base} * ${base});`;
        } else if (fogType === 14 /* ORTHO_REVEXP */) {
          return `1.0 - exp2(-8.0 * (1.0 - ${base}));`;
        } else if (fogType === 15 /* ORTHO_REVEXP2 */) {
          return `1.0 - exp2(-8.0 * (1.0 - ${base}) * (1.0 - ${base}));`;
        } else {
          throw new Error("whoops");
        }
      }
      generateFog() {
        const ropInfo = this.material.ropInfo;
        if (ropInfo.fogType === 0 /* NONE */)
          return "";
        const C = `u_FogBlock.Param.z`;
        return `
    float t_FogBase = ${this.generateFogBase()};
${this.generateFogAdj(`t_FogBase`)}
    float t_FogZ = saturate(t_FogBase - ${C});
    float t_Fog = ${this.generateFogFunc(`t_FogZ`)};
    t_PixelOut.rgb = mix(t_PixelOut.rgb, u_FogBlock.Color.rgb, t_Fog);
`;
      }
      generateDstAlpha() {
        const ropInfo = this.material.ropInfo;
        if (ropInfo.dstAlpha === void 0)
          return "";
        return `
    t_PixelOut.a = ${this.generateFloat(ropInfo.dstAlpha)};
`;
      }
      generateAttributeStorageType(fmt) {
        switch (fmt) {
          case GfxFormat.F32_R:
            return "float";
          case GfxFormat.F32_RG:
            return "vec2";
          case GfxFormat.F32_RGB:
            return "vec3";
          case GfxFormat.F32_RGBA:
            return "vec4";
          default:
            throw new Error("whoops");
        }
      }
      usesColorChannel(c) {
        return c.matColorSource === 1 /* VTX */ || c.ambColorSource === 1 /* VTX */;
      }
      usesLightChannel(c) {
        if (c === void 0)
          return false;
        return this.usesColorChannel(c.colorChannel) || this.usesColorChannel(c.alphaChannel);
      }
      usesNormalColorChannel(c) {
        if (!c.lightingEnabled || c.litMask === 0)
          return false;
        if (c.diffuseFunction !== 0 /* NONE */)
          return true;
        if (c.attenuationFunction === 0 /* SPEC */)
          return true;
        return false;
      }
      usesNormal() {
        return this.material.lightChannels.some((c) => {
          return this.usesNormalColorChannel(c.colorChannel) || this.usesNormalColorChannel(c.alphaChannel);
        });
      }
      usesTexGenInput(s) {
        return this.material.texGens.some((g) => {
          return g.source === s;
        });
      }
      usesBump() {
        return this.material.texGens.some((g) => {
          return g.type >= 2 /* BUMP0 */ && g.type <= 9 /* BUMP7 */;
        });
      }
      usesAttrib(a) {
        switch (a.attrInput) {
          case 2 /* POS */:
            return true;
          case 0 /* TEX0123MTXIDX */:
            return materialUseTexMtxIdx(this.material, 0) || materialUseTexMtxIdx(this.material, 1) || materialUseTexMtxIdx(this.material, 2) || materialUseTexMtxIdx(this.material, 3);
          case 1 /* TEX4567MTXIDX */:
            return materialUseTexMtxIdx(this.material, 4) || materialUseTexMtxIdx(this.material, 5) || materialUseTexMtxIdx(this.material, 6) || materialUseTexMtxIdx(this.material, 7);
          case 3 /* NRM */:
            return this.usesNormal() || this.usesTexGenInput(1 /* NRM */);
          case 5 /* TANGENT */:
            return this.usesTexGenInput(3 /* TANGENT */) || this.usesBump();
          case 4 /* BINRM */:
            return this.usesTexGenInput(2 /* BINRM */) || this.usesBump();
          case 6 /* CLR0 */:
            return this.usesLightChannel(this.material.lightChannels[0]);
          case 7 /* CLR1 */:
            return this.usesLightChannel(this.material.lightChannels[1]);
          case 8 /* TEX01 */:
            return this.usesTexGenInput(4 /* TEX0 */) || this.usesTexGenInput(5 /* TEX1 */);
          case 9 /* TEX23 */:
            return this.usesTexGenInput(6 /* TEX2 */) || this.usesTexGenInput(7 /* TEX3 */);
          case 10 /* TEX45 */:
            return this.usesTexGenInput(8 /* TEX4 */) || this.usesTexGenInput(9 /* TEX5 */);
          case 11 /* TEX67 */:
            return this.usesTexGenInput(10 /* TEX6 */) || this.usesTexGenInput(11 /* TEX7 */);
          default:
            return false;
        }
      }
      generateVertAttributeDefs() {
        return vtxAttributeGenDefs.map((a, i) => {
          if (!this.usesAttrib(a))
            return ``;
          return `layout(location = ${i}) in ${this.generateAttributeStorageType(a.format)} a_${a.name};`;
        }).join("\n");
      }
      generateMul(attr, pos, nrm) {
        const src = nrm ? attr : `vec4(${attr}.xyz, ${pos ? `1.0` : `0.0`})`;
        const gen = materialUsePnMtxIdx(this.material) ? this.generateMulPntMatrixDynamic(`a_Position.w`, src, nrm) : this.generateMulPntMatrixStatic(0 /* PNMTX0 */, src, nrm);
        return pos ? gen : `normalize(${gen}.xyz)`;
      }
      generateShaders() {
        const bindingsDefinition = generateBindingsDefinition(this.material);
        const both = `
// ${this.material.name}
precision highp float;
${bindingsDefinition}
${GfxShaderLibrary.saturate}
${GXShaderLibrary.TevOverflow}

varying vec3 v_Position;
${this.generateColorVaryings()}
${this.generateTexCoordVaryings()}
`;
        this.vert = `
${both}
${this.generateVertAttributeDefs()}

mat4x3 GetPosTexMatrix(float t_MtxIdxFloat) {
    uint t_MtxIdx = uint(t_MtxIdxFloat);
    if (t_MtxIdx == 20u)
        return mat4x3(1.0);
    else if (t_MtxIdx >= 10u)
        return UnpackMatrix(u_TexMtx[(t_MtxIdx - 10u)]);
    else
        return UnpackMatrix(u_PosMtx[t_MtxIdx]);
}

${GfxShaderLibrary.MulNormalMatrix}

float ApplyAttenuation(vec3 t_Coeff, float t_Value) {
    return dot(t_Coeff, vec3(1.0, t_Value, t_Value*t_Value));
}

struct LightingParams {
    int AttnFn;
    int DiffFn;
    vec3 Position;
    vec3 Normal;
};

vec4 ApplyLight(in Light t_Light, in LightingParams t_LightingParams) {
    vec3 t_LightDelta = t_Light.Position.xyz - t_LightingParams.Position.xyz;
    float t_LightDeltaDist2 = dot(t_LightDelta, t_LightDelta);
    float t_LightDeltaDist = sqrt(t_LightDeltaDist2);
    vec3 t_LightDeltaDir = t_LightDelta / t_LightDeltaDist;

    float t_Attenuation = 1.0;
    if (t_LightingParams.AttnFn == ${1 /* SPOT */}) {
        float t_CosAttenV = max(0.0, dot(t_LightDeltaDir, t_Light.Direction.xyz));
        float t_CosAtten = max(0.0, ApplyAttenuation(t_Light.CosAtten.xyz, t_CosAttenV));
        float t_DistAtten = dot(t_Light.DistAtten.xyz, vec3(1.0, t_LightDeltaDist, t_LightDeltaDist2));
        t_Attenuation = max(0.0, t_CosAtten / t_DistAtten);
    } else if (t_LightingParams.AttnFn == ${0 /* SPEC */}) {
        float t_Attn = (dot(t_LightingParams.Normal.xyz, t_LightDeltaDir) >= 0.0) ? max(0.0, dot(t_LightingParams.Normal.xyz, t_Light.Direction.xyz)) : 0.0;
        float t_CosAtten = ApplyAttenuation(t_Light.CosAtten.xyz, t_Attenuation);
        vec3 t_DistAttenV = t_Light.DistAtten.xyz;
        if (t_LightingParams.DiffFn != ${0 /* NONE */})
            t_DistAttenV = normalize(t_DistAttenV);
        float t_DistAtten = max(0.0, ApplyAttenuation(t_DistAttenV, t_Attenuation));
        t_Attenuation = max(0.0, t_CosAtten / t_DistAtten);
    }

    float t_Diffuse = 1.0;
    if (t_LightingParams.AttnFn != ${0 /* SPEC */}) {
        if (t_LightingParams.DiffFn == ${1 /* SIGN */})
            t_Diffuse = dot(t_LightingParams.Normal.xyz, t_LightDeltaDir);
        else if (t_LightingParams.DiffFn == ${2 /* CLAMP */})
            t_Diffuse = max(dot(t_LightingParams.Normal.xyz, t_LightDeltaDir), 0.0);
    }

    return t_Diffuse * t_Attenuation * t_Light.Color;
}

vec4 ApplyLightChannel(in int t_LightMask, in LightingParams t_LightingParams) {
    vec4 t_LightAccum = vec4(0.0);
${materialHasLightsBlock(this.material) ? `
    for (int i = 0; i < 8; i++) {
        if ((t_LightMask & (1 << i)) != 0) {
            t_LightAccum += ApplyLight(u_LightParams[i], t_LightingParams);
        }
    }
` : ``}
    return t_LightAccum;
}

${this.generateExtraVertexGlobal()}

void main() {
    ${this.generatePosition()}
    v_Position = t_Position;
    vec3 t_Normal = ${this.usesNormal() ? this.generateMul(`a_Normal`, false, true) : `vec3(0.0)`};

${this.generateLightChannels()}
${this.generateTexGens()}
    gl_Position = UnpackMatrix(u_Projection) * vec4(t_Position, 1.0);
}
`;
        this.frag = `
${both}
${this.generateTexCoordGetters()}

float TextureLODBias(int index) {
    vec4 elem = u_TextureBiases[index / 4]; // 01
    int sub = index % 4; // 0123
    return u_SceneTextureLODBias + elem[sub];
}
vec2 TextureScale(int index) {
    vec4 elem = u_TextureSizes[index / 2];
    int sub = 2 * (index % 2);
    return vec2(elem[sub + 0], elem[sub + 1]);
}
vec2 TextureInvScale(int index) { return 1.0 / TextureScale(index); }

vec3 TevBias(vec3 a, float b) { return a + vec3(b); }
float TevBias(float a, float b) { return a + b; }
float TevPack16(vec2 a) { return dot(a, vec2(1.0, 256.0)); }
float TevPack24(vec3 a) { return dot(a, vec3(1.0, 256.0, 256.0 * 256.0)); }
float TevPerCompGT(float a, float b) { return float(a >  b); }
float TevPerCompEQ(float a, float b) { return float(a == b); }
vec3 TevPerCompGT(vec3 a, vec3 b) { return vec3(greaterThan(a, b)); }
vec3 TevPerCompEQ(vec3 a, vec3 b) { return vec3(equal(a, b)); }
float TevMask(float n, int mask) { return float(int((n * 255.0)) & mask) / 255.0; }

${this.generateExtraPixelGlobal()}

vec4 MainColor() {
    vec4 s_kColor0   = u_KonstColor[0];
    vec4 s_kColor1   = u_KonstColor[1];
    vec4 s_kColor2   = u_KonstColor[2];
    vec4 s_kColor3   = u_KonstColor[3];

    vec4 t_ColorPrev = u_Color[0];
    vec4 t_Color0    = u_Color[1];
    vec4 t_Color1    = u_Color[2];
    vec4 t_Color2    = u_Color[3];

${this.generateIndTexStages()}

    vec2 t_TexCoord = vec2(0.0);
    vec4 t_TexSample = vec4(0.0);
    vec4 t_TevA, t_TevB, t_TevC, t_TevD;
${this.generateTevStages()}

${this.generateTevStagesLastMinuteFixup()}
    vec4 t_PixelOut = TevOverflow(t_TevOutput);
${this.generateAlphaTest()}
${this.generateFog()}
${this.generateDstAlpha()}

    return t_PixelOut;
}

layout(location = 0) out vec4 o_OutColor0;

void main() {
    o_OutColor0 = MainColor();
${this.generateExtraPixelMain()}
}
`;
      }
      generateExtraVertexGlobal() {
        return "";
      }
      generateExtraVertexMain() {
        return "";
      }
      generateExtraPixelGlobal() {
        return "";
      }
      generateExtraPixelMain() {
        return "";
      }
      generateExtraPixelMainColor() {
        return "";
      }
    };
  }
});

// noclip/gx/gx_texture.ts
function calcTextureSize(format, width, height) {
  const blockInfo = texBlockInfo[format];
  const numPixels = align(width, blockInfo.blockWidth) * align(height, blockInfo.blockHeight);
  if (blockInfo.bytesPerPixelShift > 0)
    return numPixels >>> blockInfo.bytesPerPixelShift;
  else
    return numPixels << -blockInfo.bytesPerPixelShift;
}
function calcMipChain(texture, mipCount = texture.mipCount) {
  const mipLevels = [];
  const name = texture.name;
  let mipOffs = 0;
  let mipLevel = 0;
  const format = texture.format;
  let width = texture.width;
  let height = texture.height;
  while (mipLevel < mipCount) {
    const data = texture.data !== null ? texture.data.subarray(mipOffs) : null;
    const paletteFormat = texture.paletteFormat;
    const paletteData = texture.paletteData;
    const mipSize = calcTextureSize(format, width, height);
    if (data && mipSize > data.byteLength)
      break;
    mipLevels.push({ name: `${texture.name} mip level ${mipLevel}`, format, width, height, data, paletteFormat, paletteData, mipCount: 1 });
    mipLevel++;
    mipOffs += Math.max(mipSize, 32);
    width /= 2;
    height /= 2;
  }
  return { name, mipLevels, fullTextureSize: mipOffs };
}
function decode_Dummy(texture) {
  const pixels = new Uint8Array(texture.width * texture.height * 4);
  pixels.fill(255);
  return { pixels };
}
function getPaletteFormatName(paletteFormat) {
  return TexPalette[assertExists(paletteFormat)];
}
function getFormatName(format, paletteFormat) {
  switch (format) {
    case 0 /* I4 */:
    case 1 /* I8 */:
    case 2 /* IA4 */:
    case 3 /* IA8 */:
    case 4 /* RGB565 */:
    case 5 /* RGB5A3 */:
    case 6 /* RGBA8 */:
    case 14 /* CMPR */:
      return TexFormat[format];
    case 8 /* C4 */:
      return `C4 (${getPaletteFormatName(paletteFormat)})`;
    case 9 /* C8 */:
      return `C8 (${getPaletteFormatName(paletteFormat)})`;
    case 10 /* C14X2 */:
      return `C14X2 (${getPaletteFormatName(paletteFormat)})`;
    default:
      return "invalid";
  }
}
async function decodeRust(texture) {
  const fmt = texture.format === 0 /* I4 */ ? rust.PixelFormat.I4 : texture.format === 1 /* I8 */ ? rust.PixelFormat.I8 : texture.format === 2 /* IA4 */ ? rust.PixelFormat.IA4 : texture.format === 3 /* IA8 */ ? rust.PixelFormat.IA8 : texture.format === 4 /* RGB565 */ ? rust.PixelFormat.RGB565 : texture.format === 5 /* RGB5A3 */ ? rust.PixelFormat.RGB5A3 : texture.format === 6 /* RGBA8 */ ? rust.PixelFormat.RGBA8 : texture.format === 14 /* CMPR */ ? rust.PixelFormat.CMPR : texture.format === 8 /* C4 */ ? rust.PixelFormat.C4 : texture.format === 9 /* C8 */ ? rust.PixelFormat.C8 : texture.format === 10 /* C14X2 */ ? rust.PixelFormat.C14X2 : void 0;
  const palette_fmt = texture.paletteFormat === 0 /* IA8 */ ? rust.PaletteFormat.IA8 : texture.paletteFormat === 1 /* RGB565 */ ? rust.PaletteFormat.RGB565 : texture.paletteFormat === 2 /* RGB5A3 */ ? rust.PaletteFormat.RGB5A3 : void 0;
  const src = texture.data.createTypedArray(Uint8Array, 0, calcTextureSize(texture.format, texture.width, texture.height));
  const palette_src = texture.paletteData ? texture.paletteData.createTypedArray(Uint8Array) : void 0;
  const pixels = rust.decode_texture(fmt, palette_fmt, src, palette_src, texture.width, texture.height);
  return { pixels };
}
async function decodeTexture(texture) {
  if (texture.data === null)
    return decode_Dummy(texture);
  return await decodeRust(texture);
}
var texBlockInfo;
var init_gx_texture = __esm({
  "noclip/gx/gx_texture.ts"() {
    init_gx_enum();
    init_util();
    init_rustlib();
    texBlockInfo = {
      [0 /* I4 */]: { blockWidth: 8, blockHeight: 8, bytesPerPixelShift: 1 },
      [1 /* I8 */]: { blockWidth: 8, blockHeight: 4, bytesPerPixelShift: 0 },
      [2 /* IA4 */]: { blockWidth: 8, blockHeight: 4, bytesPerPixelShift: 0 },
      [3 /* IA8 */]: { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -1 },
      [4 /* RGB565 */]: { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -1 },
      [5 /* RGB5A3 */]: { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -1 },
      [6 /* RGBA8 */]: { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -2 },
      [8 /* C4 */]: { blockWidth: 8, blockHeight: 8, bytesPerPixelShift: 1 },
      [9 /* C8 */]: { blockWidth: 8, blockHeight: 4, bytesPerPixelShift: 0 },
      [10 /* C14X2 */]: { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -1 },
      [14 /* CMPR */]: { blockWidth: 8, blockHeight: 8, bytesPerPixelShift: 1 }
    };
  }
});

// noclip/TextureHolder.ts
var TextureMapping;
var init_TextureHolder = __esm({
  "noclip/TextureHolder.ts"() {
    TextureMapping = class {
      gfxTexture = null;
      gfxSampler = null;
      lateBinding = void 0;
      reset() {
        this.gfxTexture = null;
        this.gfxSampler = null;
        this.lateBinding = void 0;
      }
      copy(other) {
        this.gfxTexture = other.gfxTexture;
        this.gfxSampler = other.gfxSampler;
        this.lateBinding = other.lateBinding;
      }
    };
  }
});

// noclip/gfx/helpers/BufferHelpers.ts
function coalesceBuffer(device2, usage, datas) {
  let dataLength = 0;
  for (let i = 0; i < datas.length; i++)
    dataLength += datas[i].byteLength;
  const buffer = device2.createBuffer(dataLength, usage, 1 /* Static */);
  const coalescedBuffers = [];
  const combinedData = new Uint8Array(dataLength);
  let byteOffset = 0;
  for (let i = 0; i < datas.length; i++) {
    const data = datas[i];
    combinedData.set(data.createTypedArray(Uint8Array), byteOffset);
    coalescedBuffers.push({ buffer, byteOffset, byteCount: data.byteLength });
    byteOffset += data.byteLength;
  }
  device2.uploadBufferData(buffer, 0, combinedData);
  return coalescedBuffers;
}
var GfxBufferCoalescerCombo;
var init_BufferHelpers = __esm({
  "noclip/gfx/helpers/BufferHelpers.ts"() {
    init_GfxPlatform();
    init_GfxPlatformUtil();
    GfxBufferCoalescerCombo = class {
      coalescedBuffers = [];
      vertexBuffer = null;
      indexBuffer = null;
      constructor(device2, vertexDatas, indexDatas, name = "") {
        assert2(vertexDatas.length === indexDatas.length);
        if (vertexDatas.length === 0)
          return;
        const allVertexDatas = [];
        let maxSlice = 0;
        while (true) {
          let sliceHasBuffer = false;
          for (let i = 0; i < vertexDatas.length; i++) {
            if (vertexDatas[i][maxSlice] === void 0)
              continue;
            allVertexDatas.push(vertexDatas[i][maxSlice]);
            sliceHasBuffer = true;
          }
          if (!sliceHasBuffer)
            break;
          maxSlice++;
        }
        const vertexCoalescedBuffers = coalesceBuffer(device2, 2 /* Vertex */, allVertexDatas);
        const indexCoalescedBuffers = coalesceBuffer(device2, 1 /* Index */, indexDatas);
        const coalescedBuffers = [];
        let z = 0;
        for (let i = 0; i < vertexDatas.length; i++) {
          const vertexBuffers = [vertexCoalescedBuffers[z++]];
          const indexBuffer = indexCoalescedBuffers[i];
          coalescedBuffers.push({ vertexBuffers, indexBuffer });
        }
        for (let slice = 1; slice < maxSlice; slice++) {
          for (let i = 0; i < vertexDatas.length; i++) {
            if (vertexDatas[i][slice] === void 0)
              continue;
            coalescedBuffers[i].vertexBuffers.push(vertexCoalescedBuffers[z++]);
          }
        }
        this.coalescedBuffers = coalescedBuffers;
        this.vertexBuffer = this.coalescedBuffers[0].vertexBuffers[0].buffer;
        this.indexBuffer = this.coalescedBuffers[0].indexBuffer.buffer;
        device2.setResourceName(this.vertexBuffer, name);
        device2.setResourceName(this.indexBuffer, `${name} (IB)`);
      }
      destroy(device2) {
        if (this.vertexBuffer !== null)
          device2.destroyBuffer(this.vertexBuffer);
        if (this.indexBuffer !== null)
          device2.destroyBuffer(this.indexBuffer);
      }
    };
  }
});

// noclip/gfx/helpers/UniformBufferHelpers.ts
function fillVec3v(d, offs, v, v3 = 0) {
  d[offs + 0] = v[0];
  d[offs + 1] = v[1];
  d[offs + 2] = v[2];
  d[offs + 3] = v3;
  return 4;
}
function fillVec4(d, offs, v0, v1 = 0, v2 = 0, v3 = 0) {
  d[offs + 0] = v0;
  d[offs + 1] = v1;
  d[offs + 2] = v2;
  d[offs + 3] = v3;
  return 4;
}
function fillColor(d, offs, c, a = c.a) {
  d[offs + 0] = c.r;
  d[offs + 1] = c.g;
  d[offs + 2] = c.b;
  d[offs + 3] = a;
  return 4;
}
function fillMatrix4x4(d, offs, m) {
  d[offs + 0] = m[0];
  d[offs + 1] = m[4];
  d[offs + 2] = m[8];
  d[offs + 3] = m[12];
  d[offs + 4] = m[1];
  d[offs + 5] = m[5];
  d[offs + 6] = m[9];
  d[offs + 7] = m[13];
  d[offs + 8] = m[2];
  d[offs + 9] = m[6];
  d[offs + 10] = m[10];
  d[offs + 11] = m[14];
  d[offs + 12] = m[3];
  d[offs + 13] = m[7];
  d[offs + 14] = m[11];
  d[offs + 15] = m[15];
  return 4 * 4;
}
function fillMatrix4x3(d, offs, m) {
  d[offs + 0] = m[0];
  d[offs + 1] = m[4];
  d[offs + 2] = m[8];
  d[offs + 3] = m[12];
  d[offs + 4] = m[1];
  d[offs + 5] = m[5];
  d[offs + 6] = m[9];
  d[offs + 7] = m[13];
  d[offs + 8] = m[2];
  d[offs + 9] = m[6];
  d[offs + 10] = m[10];
  d[offs + 11] = m[14];
  return 4 * 3;
}
function fillMatrix4x2(d, offs, m) {
  d[offs + 0] = m[0];
  d[offs + 1] = m[4];
  d[offs + 2] = m[8];
  d[offs + 3] = m[12];
  d[offs + 4] = m[1];
  d[offs + 5] = m[5];
  d[offs + 6] = m[9];
  d[offs + 7] = m[13];
  return 4 * 2;
}
var init_UniformBufferHelpers = __esm({
  "noclip/gfx/helpers/UniformBufferHelpers.ts"() {
  }
});

// noclip/gfx/render/GfxRenderCache.ts
function gfxProgramDescriptorEquals(a, b) {
  assert2(a.preprocessedVert !== "" && b.preprocessedVert !== "");
  assert2(a.preprocessedFrag !== "" && b.preprocessedFrag !== "");
  return a.preprocessedVert === b.preprocessedVert && a.preprocessedFrag === b.preprocessedFrag;
}
function gfxProgramDescriptorCopy(a) {
  const preprocessedVert = a.preprocessedVert;
  const preprocessedFrag = a.preprocessedFrag;
  return { preprocessedVert, preprocessedFrag };
}
function gfxRenderBindingLayoutHash(hash, a) {
  hash = hashCodeNumberUpdate(hash, a.numUniformBuffers);
  hash = hashCodeNumberUpdate(hash, a.numSamplers);
  return hash;
}
function gfxBlendStateHash(hash, a) {
  hash = hashCodeNumberUpdate(hash, a.blendMode);
  hash = hashCodeNumberUpdate(hash, a.blendSrcFactor);
  hash = hashCodeNumberUpdate(hash, a.blendDstFactor);
  return hash;
}
function gfxAttachmentStateHash(hash, a) {
  hash = gfxBlendStateHash(hash, a.rgbBlendState);
  hash = gfxBlendStateHash(hash, a.alphaBlendState);
  hash = hashCodeNumberUpdate(hash, a.channelWriteMask);
  return hash;
}
function gfxMegaStateDescriptorHash(hash, a) {
  for (let i = 0; i < a.attachmentsState.length; i++)
    hash = gfxAttachmentStateHash(hash, a.attachmentsState[i]);
  hash = hashCodeNumberUpdate(hash, a.depthCompare);
  hash = hashCodeNumberUpdate(hash, a.depthWrite ? 1 : 0);
  hash = hashCodeNumberUpdate(hash, a.stencilCompare);
  hash = hashCodeNumberUpdate(hash, a.stencilPassOp);
  hash = hashCodeNumberUpdate(hash, a.stencilWrite ? 1 : 0);
  hash = hashCodeNumberUpdate(hash, a.cullMode);
  hash = hashCodeNumberUpdate(hash, a.frontFace ? 1 : 0);
  hash = hashCodeNumberUpdate(hash, a.polygonOffset ? 1 : 0);
  hash = hashCodeNumberUpdate(hash, a.wireframe ? 1 : 0);
  return hash;
}
function gfxRenderPipelineDescriptorHash(a) {
  let hash = 0;
  hash = hashCodeNumberUpdate(hash, a.program.ResourceUniqueId);
  if (a.inputLayout !== null)
    hash = hashCodeNumberUpdate(hash, a.inputLayout.ResourceUniqueId);
  for (let i = 0; i < a.bindingLayouts.length; i++)
    hash = gfxRenderBindingLayoutHash(hash, a.bindingLayouts[i]);
  hash = gfxMegaStateDescriptorHash(hash, a.megaStateDescriptor);
  for (let i = 0; i < a.colorAttachmentFormats.length; i++)
    hash = hashCodeNumberUpdate(hash, a.colorAttachmentFormats[i] || 0);
  hash = hashCodeNumberUpdate(hash, a.depthStencilAttachmentFormat || 0);
  return hashCodeNumberFinish(hash);
}
function gfxBindingsDescriptorHash(a) {
  let hash = 0;
  for (let i = 0; i < a.samplerBindings.length; i++) {
    const binding = a.samplerBindings[i];
    if (binding !== null && binding.gfxTexture !== null)
      hash = hashCodeNumberUpdate(hash, binding.gfxTexture.ResourceUniqueId);
  }
  for (let i = 0; i < a.uniformBufferBindings.length; i++) {
    const binding = a.uniformBufferBindings[i];
    if (binding !== null && binding.buffer !== null) {
      hash = hashCodeNumberUpdate(hash, binding.buffer.ResourceUniqueId);
      hash = hashCodeNumberUpdate(hash, binding.byteSize);
    }
  }
  return hashCodeNumberFinish(hash);
}
var DynamicBufferEntry, GfxDynamicBufferCache, GfxRenderCache;
var init_GfxRenderCache = __esm({
  "noclip/gfx/render/GfxRenderCache.ts"() {
    init_HashMap();
    init_GfxPlatform();
    init_GfxPlatformObjUtil();
    init_GfxPlatformUtil();
    DynamicBufferEntry = class {
      constructor(device2, byteCount, usage) {
        this.byteCount = byteCount;
        this.usage = usage;
        this.buffer = device2.createBuffer(byteCount, usage, 2 /* Dynamic */);
      }
      byteCount;
      usage;
      buffer;
      allocOffs = 0;
      age = 0;
      allocate(byteCount) {
        if (this.allocOffs + byteCount <= this.byteCount) {
          let byteOffset = this.allocOffs;
          this.allocOffs += align2(byteCount, 4);
          this.age = 4;
          return byteOffset;
        } else {
          return -1;
        }
      }
      prepareToRender() {
        this.allocOffs = 0;
        return this.age-- > 0;
      }
      destroy(device2) {
        device2.destroyBuffer(this.buffer);
      }
    };
    GfxDynamicBufferCache = class {
      constructor(device2) {
        this.device = device2;
      }
      device;
      entry = [];
      prepareToRender() {
        for (let i = 0; i < this.entry.length; i++) {
          if (!this.entry[i].prepareToRender()) {
            this.entry[i].destroy(this.device);
            this.entry.splice(i--, 1);
          }
        }
      }
      allocateSize(usage, byteCount) {
        for (let i = 0; i < this.entry.length; i++) {
          const entry2 = this.entry[i];
          if (entry2.usage !== usage)
            continue;
          const byteOffset2 = entry2.allocate(byteCount);
          if (byteOffset2 >= 0)
            return { buffer: entry2.buffer, byteOffset: byteOffset2 };
        }
        const newBufferSize = align2(byteCount, 64);
        const entry = new DynamicBufferEntry(this.device, newBufferSize, usage);
        this.entry.push(entry);
        const byteOffset = entry.allocate(byteCount);
        assert2(byteOffset === 0);
        return { buffer: entry.buffer, byteOffset };
      }
      allocateData(usage, data) {
        const desc = this.allocateSize(usage, data.byteLength);
        this.device.uploadBufferData(desc.buffer, desc.byteOffset, data);
        return desc;
      }
      destroy() {
        for (let i = 0; i < this.entry.length; i++)
          this.entry[i].destroy(this.device);
        this.entry.length = 0;
      }
    };
    GfxRenderCache = class {
      constructor(device2) {
        this.device = device2;
        this.dynamicBufferCache = new GfxDynamicBufferCache(device2);
      }
      device;
      gfxBindingsCache = new HashMap(gfxBindingsDescriptorEquals, gfxBindingsDescriptorHash);
      gfxRenderPipelinesCache = new HashMap(gfxRenderPipelineDescriptorEquals, gfxRenderPipelineDescriptorHash);
      gfxInputLayoutsCache = new HashMap(gfxInputLayoutDescriptorEquals, nullHashFunc);
      gfxProgramCache = new HashMap(gfxProgramDescriptorEquals, nullHashFunc);
      gfxSamplerCache = new HashMap(gfxSamplerDescriptorEquals, nullHashFunc);
      dynamicBufferCache;
      createBindings(descriptor) {
        let bindings = this.gfxBindingsCache.get(descriptor);
        if (bindings === null) {
          const descriptorCopy = gfxBindingsDescriptorCopy(descriptor);
          bindings = this.device.createBindings(descriptorCopy);
          this.gfxBindingsCache.add(descriptorCopy, bindings);
        }
        bindings.expireFrameNum = 4;
        return bindings;
      }
      createRenderPipeline(descriptor) {
        let renderPipeline = this.gfxRenderPipelinesCache.get(descriptor);
        if (renderPipeline === null) {
          const descriptorCopy = gfxRenderPipelineDescriptorCopy(descriptor);
          renderPipeline = this.device.createRenderPipeline(descriptorCopy);
          this.gfxRenderPipelinesCache.add(descriptorCopy, renderPipeline);
        }
        return renderPipeline;
      }
      createInputLayout(descriptor) {
        let inputLayout = this.gfxInputLayoutsCache.get(descriptor);
        if (inputLayout === null) {
          const descriptorCopy = gfxInputLayoutDescriptorCopy(descriptor);
          inputLayout = this.device.createInputLayout(descriptorCopy);
          this.gfxInputLayoutsCache.add(descriptorCopy, inputLayout);
        }
        return inputLayout;
      }
      createProgramSimple(descriptor) {
        let program = this.gfxProgramCache.get(descriptor);
        if (program === null) {
          const descriptorCopy = gfxProgramDescriptorCopy(descriptor);
          program = this.device.createProgram(descriptorCopy);
          this.gfxProgramCache.add(descriptorCopy, program);
          if ("associate" in descriptor) {
            const p2 = descriptor;
            p2.associate(this.device, program);
            descriptorCopy.orig = p2;
          }
        }
        return program;
      }
      createProgram(descriptor) {
        const p2 = descriptor;
        p2.ensurePreprocessed(this.device.queryVendorInfo());
        return this.createProgramSimple(descriptor);
      }
      createSampler(descriptor) {
        let sampler = this.gfxSamplerCache.get(descriptor);
        if (sampler === null) {
          sampler = this.device.createSampler(descriptor);
          this.gfxSamplerCache.add(descriptor, sampler);
        }
        return sampler;
      }
      numBindings() {
        return this.gfxBindingsCache.size();
      }
      prepareToRender() {
        for (const [key, value] of this.gfxBindingsCache.items()) {
          if (--value.expireFrameNum <= 0) {
            this.gfxBindingsCache.delete(key);
            this.device.destroyBindings(value);
          }
        }
        this.dynamicBufferCache.prepareToRender();
      }
      destroy() {
        for (const bindings of this.gfxBindingsCache.values())
          this.device.destroyBindings(bindings);
        for (const renderPipeline of this.gfxRenderPipelinesCache.values())
          this.device.destroyRenderPipeline(renderPipeline);
        for (const inputLayout of this.gfxInputLayoutsCache.values())
          this.device.destroyInputLayout(inputLayout);
        for (const program of this.gfxProgramCache.values())
          this.device.destroyProgram(program);
        for (const sampler of this.gfxSamplerCache.values())
          this.device.destroySampler(sampler);
        this.gfxBindingsCache.clear();
        this.gfxRenderPipelinesCache.clear();
        this.gfxInputLayoutsCache.clear();
        this.gfxProgramCache.clear();
        this.gfxSamplerCache.clear();
        this.dynamicBufferCache.destroy();
      }
    };
  }
});

// noclip/gfx/render/GfxRenderDynamicUniformBuffer.ts
var GfxRenderDynamicUniformBuffer;
var init_GfxRenderDynamicUniformBuffer = __esm({
  "noclip/gfx/render/GfxRenderDynamicUniformBuffer.ts"() {
    init_GfxPlatform();
    init_GfxPlatformUtil();
    GfxRenderDynamicUniformBuffer = class {
      constructor(device2) {
        this.device = device2;
        const limits = device2.queryLimits();
        this.uniformBufferByteAlignment = limits.uniformBufferByteAlignment;
        this.uniformBufferMaxPageByteSize = limits.uniformBufferMaxPageByteSize;
      }
      device;
      uniformBufferByteAlignment;
      uniformBufferMaxPageByteSize;
      currentBufferByteSize = -1;
      currentByteOffset = 0;
      gfxBuffer = null;
      shadowBufferF32 = null;
      shadowBufferU8 = null;
      findPageIndex(byteOffset) {
        return byteOffset / this.uniformBufferMaxPageByteSize * 4 | 0;
      }
      allocateChunk(wordCount) {
        wordCount = alignNonPowerOfTwo(wordCount, this.uniformBufferByteAlignment);
        const byteSize = wordCount * 4;
        assert2(byteSize <= this.uniformBufferMaxPageByteSize);
        let byteOffset = this.currentByteOffset;
        if (this.findPageIndex(byteOffset) !== this.findPageIndex(byteOffset + byteSize - 1))
          byteOffset = alignNonPowerOfTwo(byteOffset, this.uniformBufferMaxPageByteSize);
        this.currentByteOffset = byteOffset + byteSize;
        this.ensureShadowBuffer(byteOffset, byteSize);
        const wordOffset = byteOffset >> 2;
        return wordOffset;
      }
      ensureShadowBuffer(byteOffset, byteSize) {
        if (this.shadowBufferU8 === null) {
          const newWordCount = alignNonPowerOfTwo(this.currentByteOffset, this.uniformBufferMaxPageByteSize);
          const buffer = new ArrayBuffer(newWordCount << 2);
          this.shadowBufferU8 = new Uint8Array(buffer);
          this.shadowBufferF32 = new Float32Array(buffer);
        } else if (byteOffset + byteSize >= this.shadowBufferF32.byteLength) {
          assert2(byteOffset < this.currentByteOffset && byteOffset + byteSize <= this.currentByteOffset);
          const newByteSize = alignNonPowerOfTwo(Math.max(this.currentByteOffset, this.shadowBufferF32.length * 2), this.uniformBufferMaxPageByteSize);
          const buffer = this.shadowBufferU8.buffer;
          const newBuffer = buffer.transfer(newByteSize);
          this.shadowBufferU8 = new Uint8Array(newBuffer);
          this.shadowBufferF32 = new Float32Array(newBuffer);
          if (!(this.currentByteOffset <= newByteSize))
            throw new Error(`Assert fail: this.currentWordOffset [${this.currentByteOffset}] <= newWordCount [${newByteSize}]`);
        }
      }
      /**
       * Return the CPU data buffer used internally. Fill this in to submit data to the CPU. Write to
       * it with the offset that was returned from {@see allocateChunk}.
       */
      mapBufferF32() {
        return this.shadowBufferF32;
      }
      prepareToRender() {
        if (this.shadowBufferF32 === null) {
          return;
        }
        const shadowBufferF32 = assertExists2(this.shadowBufferF32);
        if (shadowBufferF32.byteLength !== this.currentBufferByteSize) {
          this.currentBufferByteSize = shadowBufferF32.byteLength;
          if (this.gfxBuffer !== null)
            this.device.destroyBuffer(this.gfxBuffer);
          this.gfxBuffer = this.device.createBuffer(this.currentBufferByteSize, 4 /* Uniform */, 2 /* Dynamic */);
          this.device.setResourceName(this.gfxBuffer, `GfxRenderDynamicUniformBuffer`);
        }
        const byteSize = alignNonPowerOfTwo(this.currentByteOffset, this.uniformBufferMaxPageByteSize);
        if (!(byteSize <= this.currentBufferByteSize))
          throw new Error(`Assert fail: byteSize [${byteSize}] (${this.currentByteOffset} aligned ${this.uniformBufferMaxPageByteSize}) <= this.currentBufferByteSize [${this.currentBufferByteSize}]`);
        const gfxBuffer = assertExists2(this.gfxBuffer);
        this.device.uploadBufferData(gfxBuffer, 0, this.shadowBufferU8, 0, byteSize);
        this.currentByteOffset = 0;
      }
      destroy() {
        if (this.gfxBuffer !== null)
          this.device.destroyBuffer(this.gfxBuffer);
        this.shadowBufferF32 = null;
        this.shadowBufferU8 = null;
      }
    };
  }
});

// noclip/gfx/render/GfxRenderInstManager.ts
function makeDepthKey(depth, flipDepth, maxDepth = MAX_DEPTH) {
  let normalizedDepth = clamp(depth, 0, maxDepth) / maxDepth;
  if (flipDepth)
    normalizedDepth = 1 - normalizedDepth;
  const depthKey = normalizedDepth * ((1 << DEPTH_BITS) - 1);
  return depthKey & 65535;
}
function setSortKeyLayer(sortKey, layer) {
  return (sortKey & 16777215 | (layer & 255) << 24) >>> 0;
}
function setSortKeyProgramKey(sortKey, programKey) {
  const isTransparent = !!(sortKey >>> 31 & 1);
  if (isTransparent)
    return sortKey;
  else
    return (sortKey & 4278190335 | (programKey & 65535) << 8) >>> 0;
}
function setSortKeyBias(sortKey, bias) {
  const isTransparent = !!(sortKey >>> 31 & 1);
  if (isTransparent)
    return (sortKey & 4294967040 | bias & 255) >>> 0;
  else
    return sortKey;
}
function setSortKeyOpaqueDepth(sortKey, depthKey) {
  assert(depthKey >= 0);
  return (sortKey & 4294967040 | depthKey >>> 8 & 255) >>> 0;
}
function setSortKeyTranslucentDepth(sortKey, depthKey) {
  assert(depthKey >= 0);
  return (sortKey & 4278190335 | depthKey << 8) >>> 0;
}
function setSortKeyDepth(sortKey, depth, maxDepth = MAX_DEPTH) {
  const isTranslucent = !!(sortKey >>> 31 & 1);
  const depthKey = makeDepthKey(depth, isTranslucent, maxDepth);
  return isTranslucent ? setSortKeyTranslucentDepth(sortKey, depthKey) : setSortKeyOpaqueDepth(sortKey, depthKey);
}
function gfxRenderInstCompareSortKey(a, b) {
  return a.sortKey - b.sortKey;
}
var MAX_DEPTH, DEPTH_BITS, GfxRenderInst, GfxRenderInstList, GfxRenderInstManager;
var init_GfxRenderInstManager = __esm({
  "noclip/gfx/render/GfxRenderInstManager.ts"() {
    init_util();
    init_MathHelpers();
    init_GfxPlatform();
    init_GfxMegaStateDescriptorHelpers();
    MAX_DEPTH = 65536;
    DEPTH_BITS = 16;
    GfxRenderInst = class {
      sortKey = 0;
      // Debugging pointer for whomever wants it...
      debug = null;
      debugMarker = null;
      // Pipeline building.
      _renderPipelineDescriptor;
      // Bindings building.
      _uniformBuffer;
      _bindingDescriptors = nArray(1, () => ({ bindingLayout: null, samplerBindings: [], uniformBufferBindings: [] }));
      _dynamicUniformBufferByteOffsets = nArray(4, () => 0);
      _allowSkippingPipelineIfNotReady = true;
      _vertexBuffers = null;
      _indexBuffer = null;
      _drawStart = 0;
      _drawCount = 0;
      _drawInstanceCount = 1;
      _stencilRef = null;
      _blendColor = null;
      constructor() {
        this._renderPipelineDescriptor = {
          bindingLayouts: [],
          inputLayout: null,
          megaStateDescriptor: copyMegaState(defaultMegaState),
          program: null,
          topology: 0 /* Triangles */,
          colorAttachmentFormats: [],
          depthStencilAttachmentFormat: null,
          sampleCount: 1
        };
      }
      /**
       * Copies the fields from another render inst {@param o} to this render inst.
       */
      copyFrom(o) {
        this._renderPipelineDescriptor.megaStateDescriptor = copyMegaState(o._renderPipelineDescriptor.megaStateDescriptor);
        this._renderPipelineDescriptor.program = o._renderPipelineDescriptor.program;
        this._renderPipelineDescriptor.inputLayout = o._renderPipelineDescriptor.inputLayout;
        this._renderPipelineDescriptor.topology = o._renderPipelineDescriptor.topology;
        this._renderPipelineDescriptor.colorAttachmentFormats.length = Math.max(this._renderPipelineDescriptor.colorAttachmentFormats.length, o._renderPipelineDescriptor.colorAttachmentFormats.length);
        for (let i = 0; i < o._renderPipelineDescriptor.colorAttachmentFormats.length; i++)
          this._renderPipelineDescriptor.colorAttachmentFormats[i] = o._renderPipelineDescriptor.colorAttachmentFormats[i];
        this._renderPipelineDescriptor.depthStencilAttachmentFormat = o._renderPipelineDescriptor.depthStencilAttachmentFormat;
        this._renderPipelineDescriptor.sampleCount = o._renderPipelineDescriptor.sampleCount;
        this._uniformBuffer = o._uniformBuffer;
        this._drawCount = o._drawCount;
        this._drawStart = o._drawStart;
        this._drawInstanceCount = o._drawInstanceCount;
        this._vertexBuffers = o._vertexBuffers;
        this._indexBuffer = o._indexBuffer;
        this._allowSkippingPipelineIfNotReady = o._allowSkippingPipelineIfNotReady;
        this._stencilRef = o._stencilRef;
        this._blendColor = o._blendColor;
        this.sortKey = o.sortKey;
        for (let i = 0; i < o._bindingDescriptors.length; i++) {
          const tbd = this._bindingDescriptors[i], obd = o._bindingDescriptors[i];
          if (obd.bindingLayout !== null)
            this._setBindingLayout(i, obd.bindingLayout);
          for (let j = 0; j < Math.min(tbd.uniformBufferBindings.length, obd.uniformBufferBindings.length); j++)
            tbd.uniformBufferBindings[j].byteSize = obd.uniformBufferBindings[j].byteSize;
          this.setSamplerBindingsFromTextureMappings(obd.samplerBindings);
        }
        for (let i = 0; i < o._dynamicUniformBufferByteOffsets.length; i++)
          this._dynamicUniformBufferByteOffsets[i] = o._dynamicUniformBufferByteOffsets[i];
      }
      validate() {
        assert(this._drawCount > 0);
      }
      /**
       * Set the {@see GfxPrimitiveTopology} that this render inst will render with.
       */
      setPrimitiveTopology(topology) {
        this._renderPipelineDescriptor.topology = topology;
      }
      /**
       * Set the {@see GfxProgram} that this render inst will render with.
       */
      setGfxProgram(program) {
        this._renderPipelineDescriptor.program = program;
      }
      /**
       * Set the {@see GfxMegaStateDescriptor} that this render inst will render with.
       */
      setMegaStateFlags(r) {
        setMegaStateFlags(this._renderPipelineDescriptor.megaStateDescriptor, r);
        return this._renderPipelineDescriptor.megaStateDescriptor;
      }
      /**
       * Retrieve the {@see GfxMegaStateDescriptor} property bag that this will render with. This is similar to
       * {@see setMegaStateFlags} but allows you to set fields directly on the internal property bag, rather than
       * merge them. This can be slightly more efficient.
       */
      getMegaStateFlags() {
        return this._renderPipelineDescriptor.megaStateDescriptor;
      }
      /**
       * Sets the vertex input configuration to be used by this render instance.
       * The {@see GfxInputLayout} is used to construct the pipeline as part of the automatic pipeline building
       * facilities, while the {@see GfxVertexBufferDescriptor} and {@see GfxIndexBufferDescriptor} is used for the render.
       */
      setVertexInput(inputLayout, vertexBuffers, indexBuffer) {
        this._vertexBuffers = vertexBuffers;
        this._indexBuffer = indexBuffer;
        this._renderPipelineDescriptor.inputLayout = inputLayout;
      }
      _setBindingLayout(i, bindingLayout) {
        assert(bindingLayout.numUniformBuffers <= this._dynamicUniformBufferByteOffsets.length);
        this._renderPipelineDescriptor.bindingLayouts[i] = bindingLayout;
        const bindingDescriptor = this._bindingDescriptors[i];
        bindingDescriptor.bindingLayout = bindingLayout;
        for (let j = bindingDescriptor.uniformBufferBindings.length; j < bindingLayout.numUniformBuffers; j++)
          bindingDescriptor.uniformBufferBindings.push({ buffer: null, byteSize: 0 });
        for (let j = bindingDescriptor.samplerBindings.length; j < bindingLayout.numSamplers; j++)
          bindingDescriptor.samplerBindings.push({ gfxSampler: null, gfxTexture: null, lateBinding: void 0 });
      }
      /**
       * Sets the {@see GfxBindingLayoutDescriptor}s that this render inst will render with.
       */
      setBindingLayouts(bindingLayouts2) {
        assert(bindingLayouts2.length <= this._bindingDescriptors.length);
        for (let i = 0; i < this._bindingDescriptors.length; i++)
          this._setBindingLayout(i, bindingLayouts2[i]);
      }
      /**
       * Sets the draw count parameters for this render inst. Whether this is an indexed or an unindexed draw is
       * determined by whether an index buffer is bound in the input layout. If this is an indexed draw, then
       * the counts are index counts. If this is an unindexed draw, then this is a vertex count.
       *
       * @param count The index count, or vertex count.
       * @param start The first index, or first vertex to render with.
       */
      setDrawCount(count, start = 0) {
        this._drawCount = count;
        this._drawStart = start;
      }
      getDrawCount() {
        return this._drawCount;
      }
      /**
       * Sets the number of instances to draw.
       *
       * Instance counts are the same for both indexed and unindexed draws.
       *
       * @param instanceCount The number of instances to render.
       */
      setInstanceCount(instanceCount) {
        this._drawInstanceCount = instanceCount;
      }
      setUniformBuffer(uniformBuffer) {
        this._uniformBuffer = uniformBuffer;
      }
      /**
       * Allocates {@param wordCount} words from the uniform buffer and assigns it to the buffer
       * slot at index {@param bufferIndex}, and returns the index into the buffer.
       */
      allocateUniformBuffer(bufferIndex, wordCount) {
        assert(this._bindingDescriptors[0].bindingLayout.numUniformBuffers <= this._dynamicUniformBufferByteOffsets.length);
        assert(bufferIndex < this._bindingDescriptors[0].bindingLayout.numUniformBuffers);
        const wordOffset = this._uniformBuffer.allocateChunk(wordCount);
        this._dynamicUniformBufferByteOffsets[bufferIndex] = wordOffset << 2;
        const dst = this._bindingDescriptors[0].uniformBufferBindings[bufferIndex];
        dst.byteSize = wordCount << 2;
        return wordOffset;
      }
      /**
       * This is a convenience wrapper for {@param allocateUniformBuffer} and {@param mapUniformBufferF32}
       * that returns a pre-sliced {@see Float32Array} for the given offset.
       */
      allocateUniformBufferF32(bufferIndex, wordCount) {
        const wordOffset = this.allocateUniformBuffer(bufferIndex, wordCount);
        return this._uniformBuffer.mapBufferF32().subarray(wordOffset);
      }
      /**
       * Directly sets the uniform buffer assigned to the buffer slot at index {@param bufferIndex}
       * to be {@param wordOffset}. Use this if you have already allocated a uniform buffer chunk through
       * some other means and wish to directly assign it to this render inst.
       */
      setUniformBufferOffset(bufferIndex, wordOffset, wordCount) {
        this._dynamicUniformBufferByteOffsets[bufferIndex] = wordOffset << 2;
        const dst = this._bindingDescriptors[0].uniformBufferBindings[bufferIndex];
        dst.byteSize = wordCount << 2;
      }
      /**
       * This is a convenience wrapper for {@see GfxRenderDynamicUniformBuffer.mapBufferF32}, but uses
       * the values previously assigned for the uniform buffer slot at index {@param bufferIndex}.
       * Like {@see GfxRenderDynamicUniformBuffer.mapBufferF32}, this does not return a slice for the
       * buffer; you need to write to it with the correct uniform buffer offset; this will usually be
       * returned by {@see allocateUniformBuffer}.
       */
      mapUniformBufferF32(bufferIndex) {
        return this._uniformBuffer.mapBufferF32();
      }
      /**
       * Retrieve the {@see GfxRenderDynamicUniformBuffer} that this render inst will use to allocate.
       */
      getUniformBuffer() {
        return this._uniformBuffer;
      }
      setSamplerBindings(bindingIndex, m) {
        const bindingDescriptor = this._bindingDescriptors[bindingIndex];
        for (let i = 0; i < bindingDescriptor.samplerBindings.length; i++) {
          const dst = bindingDescriptor.samplerBindings[i];
          const binding = m[i];
          if (binding === void 0 || binding === null) {
            dst.gfxTexture = null;
            dst.gfxSampler = null;
            dst.lateBinding = void 0;
            continue;
          }
          dst.gfxTexture = binding.gfxTexture;
          dst.gfxSampler = binding.gfxSampler;
          dst.lateBinding = binding.lateBinding;
        }
      }
      /**
       * Sets the {@param GfxSamplerBinding}s in use by this render instance.
       *
       * Note that {@see GfxRenderInst} has a method of doing late binding, intended to solve cases where live render
       * targets are used, which can have difficult control flow consequences for users. Pass a string instead of a
       * GfxSamplerBinding to record that it can be resolved later, and use {@see GfxRenderInst.resolveLateSamplerBinding}
       * or equivalent to fill it in later.
       */
      setSamplerBindingsFromTextureMappings(m) {
        assert(this._bindingDescriptors.length === 1);
        this.setSamplerBindings(0, m);
      }
      hasLateSamplerBinding(name) {
        for (let i = 0; i < this._bindingDescriptors.length; i++) {
          const bindingDescriptor = this._bindingDescriptors[i];
          for (let j = 0; j < bindingDescriptor.samplerBindings.length; j++) {
            const dst = bindingDescriptor.samplerBindings[j];
            if (dst.lateBinding === name)
              return true;
          }
        }
        return false;
      }
      /**
       * Resolve a previously registered "late bound" sampler binding for the given {@param name} to the provided
       * {@param binding}, as registered through {@see setSamplerBindingsFromTextureMappings}.
       *
       * This is intended to be called by high-level code, and is especially helpful when juggling render targets
       * for framebuffer effects.
       */
      resolveLateSamplerBinding(name, binding) {
        for (let i = 0; i < this._bindingDescriptors.length; i++) {
          const bindingDescriptor = this._bindingDescriptors[i];
          for (let j = 0; j < bindingDescriptor.samplerBindings.length; j++) {
            const dst = bindingDescriptor.samplerBindings[j];
            if (dst.lateBinding === name) {
              if (binding === null) {
                dst.gfxTexture = null;
                dst.gfxSampler = null;
              } else {
                assert(binding.lateBinding === void 0);
                dst.gfxTexture = binding.gfxTexture;
                if (binding.gfxSampler !== null)
                  dst.gfxSampler = binding.gfxSampler;
              }
              dst.lateBinding = void 0;
            }
          }
        }
      }
      /**
       * Sets whether this render inst should be skipped if the render pipeline isn't ready.
       *
       * Some draws of objects can be skipped if the pipelines aren't ready. Others are more
       * crucial to draw, and so this can be set to force for the pipeline to become available.
       *
       * By default, this is true.
       */
      setAllowSkippingIfPipelineNotReady(v) {
        this._allowSkippingPipelineIfNotReady = v;
      }
      setAttachmentFormatsFromRenderPass(device2, passRenderer) {
        const passDescriptor = device2.queryRenderPass(passRenderer);
        let sampleCount = -1;
        for (let i = 0; i < passDescriptor.colorAttachments.length; i++) {
          const colorAttachmentDescriptor = passDescriptor.colorAttachments[i] !== null ? device2.queryRenderTarget(passDescriptor.colorAttachments[i].renderTarget) : null;
          this._renderPipelineDescriptor.colorAttachmentFormats[i] = colorAttachmentDescriptor !== null ? colorAttachmentDescriptor.pixelFormat : null;
          if (colorAttachmentDescriptor !== null) {
            if (sampleCount === -1)
              sampleCount = colorAttachmentDescriptor.sampleCount;
            else
              assert(sampleCount === colorAttachmentDescriptor.sampleCount);
          }
        }
        const depthStencilAttachmentDescriptor = passDescriptor.depthStencilAttachment !== null ? device2.queryRenderTarget(passDescriptor.depthStencilAttachment.renderTarget) : null;
        this._renderPipelineDescriptor.depthStencilAttachmentFormat = depthStencilAttachmentDescriptor !== null ? depthStencilAttachmentDescriptor.pixelFormat : null;
        if (depthStencilAttachmentDescriptor !== null) {
          if (sampleCount === -1)
            sampleCount = depthStencilAttachmentDescriptor.sampleCount;
          else
            assert(sampleCount === depthStencilAttachmentDescriptor.sampleCount);
        }
        assert(sampleCount > 0);
        this._renderPipelineDescriptor.sampleCount = sampleCount;
      }
      setStencilRef(value) {
        this._stencilRef = value;
      }
      setBlendColor(value) {
        this._blendColor = value;
      }
      drawOnPass(cache3, passRenderer) {
        const device2 = cache3.device;
        this.setAttachmentFormatsFromRenderPass(device2, passRenderer);
        const gfxPipeline = cache3.createRenderPipeline(this._renderPipelineDescriptor);
        const pipelineReady = device2.pipelineQueryReady(gfxPipeline);
        if (!pipelineReady) {
          if (this._allowSkippingPipelineIfNotReady)
            return;
          device2.pipelineForceReady(gfxPipeline);
        }
        if (this.debugMarker !== null)
          passRenderer.insertDebugMarker(this.debugMarker);
        passRenderer.setPipeline(gfxPipeline);
        passRenderer.setVertexInput(this._renderPipelineDescriptor.inputLayout, this._vertexBuffers, this._indexBuffer);
        let uboIndex = 0;
        for (let i = 0; i < this._bindingDescriptors.length; i++) {
          const bindingDescriptor = this._bindingDescriptors[i];
          for (let j = 0; j < bindingDescriptor.uniformBufferBindings.length; j++)
            bindingDescriptor.uniformBufferBindings[j].buffer = assertExists(this._uniformBuffer.gfxBuffer);
          const gfxBindings = cache3.createBindings(bindingDescriptor);
          const numBuffers = bindingDescriptor.bindingLayout.numUniformBuffers;
          passRenderer.setBindings(i, gfxBindings, this._dynamicUniformBufferByteOffsets.slice(uboIndex, uboIndex + numBuffers));
          uboIndex += numBuffers;
        }
        if (this._stencilRef !== null)
          passRenderer.setStencilRef(this._stencilRef);
        if (this._blendColor !== null)
          passRenderer.setBlendColor(this._blendColor);
        const indexed = this._indexBuffer !== null;
        if (this._drawInstanceCount > 1) {
          if (indexed) {
            passRenderer.drawIndexedInstanced(this._drawCount, this._drawStart, this._drawInstanceCount);
          } else {
            passRenderer.drawInstanced(this._drawCount, this._drawStart, this._drawInstanceCount);
          }
        } else if (indexed) {
          passRenderer.drawIndexed(this._drawCount, this._drawStart);
        } else {
          passRenderer.draw(this._drawCount, this._drawStart);
        }
      }
    };
    GfxRenderInstList = class {
      constructor(compareFunction = gfxRenderInstCompareSortKey, executionOrder = 0 /* Forwards */) {
        this.compareFunction = compareFunction;
        this.executionOrder = executionOrder;
      }
      compareFunction;
      executionOrder;
      renderInsts = [];
      submitRenderInst(renderInst) {
        renderInst.validate();
        this.renderInsts.push(renderInst);
      }
      hasLateSamplerBinding(name) {
        for (let i = 0; i < this.renderInsts.length; i++)
          if (this.renderInsts[i].hasLateSamplerBinding(name))
            return true;
        return false;
      }
      /**
       * Resolve sampler bindings for all render insts on this render inst list. See the
       * documentation for {@see GfxRenderInst.resolveLateSamplerBinding}.
       */
      resolveLateSamplerBinding(name, binding) {
        for (let i = 0; i < this.renderInsts.length; i++)
          this.renderInsts[i].resolveLateSamplerBinding(name, binding);
      }
      ensureSorted() {
        if (this.compareFunction !== null && this.renderInsts.length !== 0)
          this.renderInsts.sort(this.compareFunction);
      }
      drawOnPassRendererNoReset(cache3, passRenderer) {
        this.ensureSorted();
        if (this.executionOrder === 0 /* Forwards */) {
          for (let i = 0; i < this.renderInsts.length; i++)
            this.renderInsts[i].drawOnPass(cache3, passRenderer);
        } else {
          for (let i = this.renderInsts.length - 1; i >= 0; i--)
            this.renderInsts[i].drawOnPass(cache3, passRenderer);
        }
      }
      reset() {
        this.renderInsts.length = 0;
      }
      /**
       * Execute all scheduled render insts in this list onto the {@param GfxRenderPass},
       * using {@param device} and {@param cache} to create any device-specific resources
       * necessary to complete the draws.
       */
      drawOnPassRenderer(cache3, passRenderer) {
        this.drawOnPassRendererNoReset(cache3, passRenderer);
        this.reset();
      }
    };
    GfxRenderInstManager = class {
      constructor(gfxRenderCache) {
        this.gfxRenderCache = gfxRenderCache;
      }
      gfxRenderCache;
      templateStack = [];
      currentList = null;
      /**
       * Creates a new {@see GfxRenderInst} object and returns it. If there is a template
       * pushed onto the template stack, then its values will be used as a base for this
       * render inst.
       */
      newRenderInst() {
        const renderInst = new GfxRenderInst();
        if (this.templateStack.length > 0)
          renderInst.copyFrom(this.getCurrentTemplate());
        return renderInst;
      }
      /**
       * Submits {@param renderInst} to the current render inst list. Note that
       * this assumes the render inst was fully filled in, so do not modify it
       * after submitting it.
       */
      submitRenderInst(renderInst) {
        this.currentList.submitRenderInst(renderInst);
      }
      /**
       * Sets the currently active render inst list. This is the list that will
       * be used by {@see submitRenderInst}. This is provided as convenience so
       * you don't need to pass a {@see GfxRenderInstList} around at the same time
       * you pass the manager, you can also call {@see submitRenderInst} directly
       * on the provided list.
       */
      setCurrentList(list) {
        this.currentList = list;
      }
      /**
       * Pushes a new template render inst to the template stack. All properties set
       * on the topmost template on the template stack will be the defaults for both
       * for any future render insts created. Once done with a template, call
       * {@see popTemplateRenderInst} to pop it off the template stack.
       */
      pushTemplate() {
        const newTemplate = new GfxRenderInst();
        if (this.templateStack.length > 0)
          newTemplate.copyFrom(this.getCurrentTemplate());
        this.templateStack.push(newTemplate);
        return newTemplate;
      }
      popTemplate() {
        this.templateStack.pop();
      }
      /**
       * Retrieves the current template render inst on the top of the template stack.
       */
      getCurrentTemplate() {
        return this.templateStack[this.templateStack.length - 1];
      }
    };
  }
});

// noclip/gfx/helpers/GfxDeviceHelpers.ts
function gfxDeviceNeedsFlipY(device2) {
  const vendorInfo = device2.queryVendorInfo();
  return vendorInfo.viewportOrigin === 0 /* LowerLeft */;
}
var init_GfxDeviceHelpers = __esm({
  "noclip/gfx/helpers/GfxDeviceHelpers.ts"() {
    init_GfxPlatform();
  }
});

// noclip/gfx/helpers/DebugThumbnailHelpers.ts
function rectContainsPoint(r, x, y) {
  const { x1, y1, x2, y2 } = r;
  return x >= x1 && x < x2 && y >= y1 && y < y2;
}
function rectLerp(dst, r1, r2, t2) {
  dst.x1 = lerp5(r1.x1, r2.x1, t2);
  dst.y1 = lerp5(r1.y1, r2.y1, t2);
  dst.x2 = lerp5(r1.x2, r2.x2, t2);
  dst.y2 = lerp5(r1.y2, r2.y2, t2);
}
function rectFlipY(r, h) {
  const y1 = r.y1;
  r.y1 = h - r.y2;
  r.y2 = h - y1;
}
var DebugThumbnailDrawer;
var init_DebugThumbnailHelpers = __esm({
  "noclip/gfx/helpers/DebugThumbnailHelpers.ts"() {
    init_GfxPlatformUtil();
    init_GfxPlatformObjUtil();
    init_GfxPlatform();
    init_GfxShaderLibrary();
    init_GfxShaderCompiler();
    init_GfxMegaStateDescriptorHelpers();
    init_GfxRenderInstManager();
    init_GfxRenderGraph();
    init_MathHelpers();
    init_GfxRenderDynamicUniformBuffer();
    init_GfxDeviceHelpers();
    init_GfxPlatformFormat();
    init_GfxPlatformFormat();
    DebugThumbnailDrawer = class {
      constructor(helper) {
        this.helper = helper;
        const device2 = helper.device, cache3 = helper.renderCache;
        const blitProgram = preprocessProgram_GLSL(device2.queryVendorInfo(), GfxShaderLibrary.fullscreenVS, GfxShaderLibrary.fullscreenBlitOneTexPS);
        this.blitProgram = cache3.createProgramSimple(blitProgram);
        const blitProgramSRGB = preprocessProgram_GLSL(device2.queryVendorInfo(), GfxShaderLibrary.fullscreenVS, `
uniform sampler2D u_Texture;
in vec2 v_TexCoord;

void main() {
    gl_FragColor = texture(SAMPLER_2D(u_Texture), v_TexCoord);
    gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(1.0 / 2.2));
}
`);
        this.blitProgramSRGB = cache3.createProgramSimple(blitProgramSRGB);
        const blitProgramDepth = preprocessProgram_GLSL(device2.queryVendorInfo(), GfxShaderLibrary.fullscreenVS, `
layout(binding = 1) uniform sampler2D u_TextureFramebufferDepth;
in vec2 v_TexCoord;

void main() {
    vec2 t_Size = vec2(textureSize(TEXTURE(u_TextureFramebufferDepth), 0));
    float t_Depth = texelFetch(TEXTURE(u_TextureFramebufferDepth), ivec2(v_TexCoord.xy * t_Size), 0).r;
    // Colorized depth.
    vec3 t_Color = vec3(t_Depth / 0.01f, t_Depth / 0.05f, t_Depth / 0.5f);
    gl_FragColor = vec4(t_Color, 1.0f);
}
`);
        this.blitProgramDepth = cache3.createProgramSimple(blitProgramDepth);
        this.textureMapping[0].gfxSampler = cache3.createSampler({
          magFilter: 1 /* Bilinear */,
          minFilter: 1 /* Bilinear */,
          mipFilter: 0 /* Nearest */,
          wrapS: 0 /* Clamp */,
          wrapT: 0 /* Clamp */
        });
        this.textureMapping[1].gfxSampler = cache3.createSampler({
          magFilter: 0 /* Point */,
          minFilter: 0 /* Point */,
          mipFilter: 0 /* Nearest */,
          wrapS: 0 /* Clamp */,
          wrapT: 0 /* Clamp */
        });
        this.uniformBuffer = new GfxRenderDynamicUniformBuffer(device2);
      }
      helper;
      blitProgram;
      blitProgramSRGB;
      blitProgramDepth;
      anim = [];
      textureMapping = nArray2(2, gfxSamplerBindingNew);
      // Used for text.
      uniformBuffer;
      enabled = false;
      thumbnailWidth = 128;
      thumbnailHeight = 128;
      padding = 32;
      computeViewport(desc, location) {
        const thumbAspect = desc.width / desc.height;
        const slotWidth = location.x2 - location.x1;
        const slotHeight = location.y2 - location.y1;
        const slotAspect = slotWidth / slotHeight;
        const aspect = thumbAspect / slotAspect;
        const w = slotWidth * aspect;
        const x1 = location.x1 - (w - slotWidth) * 0.5;
        const x2 = location.x2 + (w - slotWidth) * 0.5;
        const y1 = location.y1;
        const y2 = location.y2;
        return { x1, x2, y1, y2 };
      }
      adjustAnim(i, location, mouseLocation) {
        const thumbnailContainsMouse = rectContainsPoint(location, mouseLocation.mouseX, mouseLocation.mouseY);
        const speed2 = 0.05 * (thumbnailContainsMouse ? 1 : -1);
        this.anim[i] = saturate(this.anim[i] + speed2);
        return smoothstep(this.anim[i]);
      }
      pushPasses(builder, renderInstManager, mainColorTargetID, mouseLocation) {
        if (!this.enabled)
          return;
        const builderDebug = builder.getDebug();
        const debugThumbnails = builderDebug.getDebugThumbnails();
        if (debugThumbnails.length === 0)
          return;
        const textDrawer = this.helper.getDebugTextDrawer();
        const resolveTextureIDs = [];
        for (let i = 0; i < debugThumbnails.length; i++)
          resolveTextureIDs.push(builder.resolveRenderTargetPassAttachmentSlot(debugThumbnails[i].pass, debugThumbnails[i].attachmentSlot));
        const desc = builder.getRenderTargetDescription(mainColorTargetID);
        const fullscreenRect = { x1: 0, y1: 0, x2: desc.width, y2: desc.height };
        const renderInst = renderInstManager.newRenderInst();
        renderInst.setBindingLayouts([{
          numUniformBuffers: 0,
          numSamplers: 2,
          samplerEntries: [
            { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
            { dimension: 0 /* n2D */, formatKind: 1 /* UnfilterableFloat */ }
          ]
        }]);
        renderInst.setMegaStateFlags(fullscreenMegaState);
        renderInst.setDrawCount(3);
        const thumbnailWidth = this.thumbnailWidth * window.devicePixelRatio;
        const thumbnailHeight = this.thumbnailHeight * window.devicePixelRatio;
        const y2 = desc.height - this.padding;
        const y1 = y2 - thumbnailHeight;
        const prepareAnim = (i) => {
          const thumbnailDesc = builder.getRenderTargetDescription(debugThumbnails[i].renderTargetID);
          const slotIndex = debugThumbnails.length - 1 - i;
          const x2 = desc.width - (thumbnailWidth + this.padding) * slotIndex - this.padding;
          const x1 = x2 - thumbnailWidth;
          const location = { x1, y1, x2, y2 };
          const t2 = this.adjustAnim(i, location, mouseLocation);
          rectLerp(location, location, fullscreenRect, t2);
          if (gfxDeviceNeedsFlipY(renderInstManager.gfxRenderCache.device))
            rectFlipY(location, desc.height);
          const viewport = this.computeViewport(thumbnailDesc, location);
          const vx = Math.max(0, Math.ceil(viewport.x1)), vy = Math.max(0, Math.ceil(viewport.y1));
          const vw = Math.min(desc.width, Math.floor(viewport.x2 - viewport.x1)), vh = Math.min(desc.height, Math.floor(viewport.y2 - viewport.y1));
          return { t: t2, location, vx, vy, vw, vh };
        };
        const prepareText = (textDrawer2, i, anim) => {
          const renderInstList = new GfxRenderInstList(null);
          const oldRenderInstList = renderInstManager.currentList;
          renderInstManager.currentList = renderInstList;
          const template = renderInstManager.pushTemplate();
          template.setUniformBuffer(this.uniformBuffer);
          const { t: t2, vw, vh } = anim;
          const thumbnailDebugLabels = debugThumbnails[i].debugLabel.split("\n");
          for (let i2 = 0; i2 < thumbnailDebugLabels.length; i2++) {
            textDrawer2.textColor.a = lerp5(0.6, 1, t2);
            textDrawer2.setFontScale(lerp5(0.5, 1, t2));
            const y = lerp5(5, 20, t2) + textDrawer2.getScaledLineHeight() * i2;
            textDrawer2.drawString(renderInstManager, vw, vh, thumbnailDebugLabels[i2], vw / 2, vh - y);
          }
          renderInstManager.popTemplate();
          renderInstManager.currentList = oldRenderInstList;
          return renderInstList;
        };
        const drawThumbnail = (scope, passRenderer, i, textAnimList, anim) => {
          const { location, vx, vy, vw, vh } = anim;
          passRenderer.setViewport(vx, vy, vw, vh);
          passRenderer.setScissor(location.x1, location.y1, location.x2 - location.x1, location.y2 - location.y1);
          const gfxTexture = scope.getResolveTextureForID(resolveTextureIDs[i]);
          const desc2 = builder.getRenderTargetDescription(debugThumbnails[i].renderTargetID);
          const formatFlags = getFormatFlags(desc2.pixelFormat);
          if (!!(formatFlags & 4 /* Depth */)) {
            this.textureMapping[0].gfxTexture = null;
            this.textureMapping[1].gfxTexture = gfxTexture;
            renderInst.setGfxProgram(this.blitProgramDepth);
          } else {
            this.textureMapping[0].gfxTexture = gfxTexture;
            this.textureMapping[1].gfxTexture = null;
            renderInst.setGfxProgram(!!(formatFlags & 2 /* sRGB */) ? this.blitProgramSRGB : this.blitProgram);
          }
          renderInst.setSamplerBindingsFromTextureMappings(this.textureMapping);
          renderInst.drawOnPass(this.helper.renderCache, passRenderer);
          if (textAnimList !== void 0)
            textAnimList.drawOnPassRenderer(this.helper.renderCache, passRenderer);
        };
        for (let i = 0; i < debugThumbnails.length; i++)
          if (!this.anim[i])
            this.anim[i] = 0;
        const drawOrder = range(0, debugThumbnails.length);
        drawOrder.sort((a, b) => this.anim[a] - this.anim[b]);
        builder.pushPass((pass) => {
          pass.setDebugName("Debug Thumbnails");
          pass.attachRenderTargetID(0 /* Color0 */, mainColorTargetID);
          for (let i = 0; i < debugThumbnails.length; i++)
            pass.attachResolveTexture(resolveTextureIDs[i]);
          pass.exec((passRenderer, scope) => {
            const anims = debugThumbnails.map((tex, i) => prepareAnim(drawOrder[i]));
            let textLists = [];
            if (textDrawer !== null) {
              textDrawer.beginDraw();
              const totalNumChar = debugThumbnails.map((tex) => tex.debugLabel.length).reduce((a, b) => a + b);
              textDrawer.reserveString(totalNumChar);
              textLists = debugThumbnails.map((tex, i) => prepareText(textDrawer, drawOrder[i], anims[i]));
              textDrawer.endDraw(renderInstManager);
              this.uniformBuffer.prepareToRender();
            }
            debugThumbnails.forEach((tex, i) => drawThumbnail(scope, passRenderer, drawOrder[i], textLists[i], anims[i]));
          });
        });
      }
      destroy() {
        this.uniformBuffer.destroy();
      }
    };
  }
});

// noclip/DownloadUtils.ts
var init_DownloadUtils = __esm({
  "noclip/DownloadUtils.ts"() {
  }
});

// stubs/ui.ts
var init_ui = __esm({
  "stubs/ui.ts"() {
  }
});

// noclip/DebugJunk.ts
function branchlessONB(dstA, dstB, n) {
  const sign = n[2] >= 0 ? 1 : -1;
  const a = -1 / (sign + n[2]);
  const b = n[0] * n[1] * a;
  vec3_exports.set(dstA, 1 + sign * n[0] * n[0] * a, sign * b, -sign * n[0]);
  vec3_exports.set(dstB, b, sign + n[1] * n[1] * a, -n[1]);
}
var p, nearPlane, scratchVec3v, scratchMatrix2, scratchVec3a4, scratchVec3b4;
var init_DebugJunk = __esm({
  "noclip/DebugJunk.ts"() {
    init_esm();
    init_ArrayBufferSlice();
    init_Camera();
    init_Color();
    init_DownloadUtils();
    init_MathHelpers();
    init_ui();
    init_util();
    p = nArray(10, () => vec4_exports.create());
    nearPlane = vec4_exports.fromValues(0, 0, -1, 1);
    scratchVec3v = vec3_exports.create();
    scratchMatrix2 = mat4_exports.create();
    scratchVec3a4 = vec3_exports.create();
    scratchVec3b4 = vec3_exports.create();
  }
});

// noclip/gfx/helpers/TopologyHelpers.ts
function convertToTrianglesRange(dstBuffer, dstOffs, topology, baseVertex, numVertices) {
  assert2(dstOffs + getTriangleIndexCountForTopologyIndexCount(topology, numVertices) <= dstBuffer.length);
  let dst = dstOffs;
  if (topology === 3 /* Quads */) {
    for (let i = 0; i < numVertices; i += 4) {
      dstBuffer[dst++] = baseVertex + i + 0;
      dstBuffer[dst++] = baseVertex + i + 1;
      dstBuffer[dst++] = baseVertex + i + 2;
      dstBuffer[dst++] = baseVertex + i + 0;
      dstBuffer[dst++] = baseVertex + i + 2;
      dstBuffer[dst++] = baseVertex + i + 3;
    }
  } else if (topology === 1 /* TriStrips */) {
    for (let i = 2; i < numVertices; i++) {
      dstBuffer[dst++] = baseVertex + i - 2;
      dstBuffer[dst++] = baseVertex + i - (~i & 1);
      dstBuffer[dst++] = baseVertex + i - (i & 1);
    }
  } else if (topology === 2 /* TriFans */) {
    for (let i = 2; i < numVertices; i++) {
      dstBuffer[dst++] = baseVertex;
      dstBuffer[dst++] = baseVertex + i - 1;
      dstBuffer[dst++] = baseVertex + i;
    }
  } else if (topology === 0 /* Triangles */) {
    for (let i = 0; i < numVertices; i++)
      dstBuffer[dst++] = baseVertex + i;
  }
  return dst - dstOffs;
}
function getTriangleCountForTopologyIndexCount(topology, indexCount) {
  switch (topology) {
    case 0 /* Triangles */:
      return indexCount / 3;
    case 1 /* TriStrips */:
    case 2 /* TriFans */:
      return indexCount - 2;
    case 3 /* Quads */:
      return 2 * (indexCount / 4);
  }
}
function getTriangleIndexCountForTopologyIndexCount(topology, indexCount) {
  return 3 * getTriangleCountForTopologyIndexCount(topology, indexCount);
}
var init_TopologyHelpers = __esm({
  "noclip/gfx/helpers/TopologyHelpers.ts"() {
    init_GfxPlatformUtil();
  }
});

// noclip/gfx/helpers/FontTexture.ts
var FontTexture, FontTextureCache;
var init_FontTexture = __esm({
  "noclip/gfx/helpers/FontTexture.ts"() {
    init_GfxPlatform();
    FontTexture = class {
      constructor(device2, font, baseSize, strokeAmount = 5 / 32) {
        this.baseSize = baseSize;
        this.strokeAmount = strokeAmount;
        const canvas2 = document.createElement("canvas");
        const ctx = canvas2.getContext("2d");
        const fontStr = `${this.baseSize}px ${font}`;
        ctx.font = fontStr;
        ctx.textAlign = `left`;
        ctx.textBaseline = `top`;
        const strokeWidth = Math.ceil(strokeAmount * this.baseSize);
        let cellWidth = 0;
        let cellHeight = 0;
        for (let i = 0; i < this.characters.length; i++) {
          const c = this.characters[i];
          const measure = ctx.measureText(c);
          this.characterAdvanceX[i] = measure.width;
          const w = Math.ceil(measure.actualBoundingBoxRight + measure.actualBoundingBoxLeft);
          const h = Math.ceil(measure.actualBoundingBoxDescent + measure.actualBoundingBoxAscent);
          cellWidth = Math.max(cellWidth, w);
          cellHeight = Math.max(cellHeight, h);
        }
        const extra = strokeWidth * 0.5;
        cellWidth += extra * 2;
        cellHeight += extra * 2;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        canvas2.width = cellWidth;
        canvas2.height = cellHeight;
        this.gfxTexture = device2.createTexture({
          dimension: 1 /* n2DArray */,
          width: cellWidth,
          height: cellHeight,
          depthOrArrayLayers: this.characters.length,
          pixelFormat: GfxFormat.U8_R_NORM,
          numLevels: 1,
          usage: 1 /* Sampled */ | 2 /* RenderTarget */
        });
        device2.setResourceName(this.gfxTexture, `FontTexture ${font}`);
        ctx.font = fontStr;
        ctx.textAlign = `left`;
        ctx.textBaseline = `top`;
        ctx.strokeStyle = `rgba(255, 255, 255, 0.5)`;
        ctx.lineWidth = strokeWidth;
        for (let i = 0; i < this.characters.length; i++) {
          ctx.fillStyle = `black`;
          ctx.fillRect(0, 0, canvas2.width, canvas2.height);
          const char = this.characters[i];
          ctx.fillStyle = `rgba(255, 255, 255, 1.0)`;
          ctx.strokeText(char, extra, extra);
          ctx.fillText(char, extra, extra);
          device2.copyExternalImageToTexture(this.gfxTexture, i, canvas2);
        }
      }
      baseSize;
      strokeAmount;
      characters = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
      characterAdvanceX = [];
      gfxTexture;
      cellWidth;
      cellHeight;
      getFontScale(size) {
        return size / this.baseSize;
      }
      getCharacterIndex(c) {
        return this.characters.indexOf(c);
      }
      getCharacterAdvanceX(index) {
        return this.characterAdvanceX[index];
      }
      destroy(device2) {
        device2.destroyTexture(this.gfxTexture);
      }
    };
    FontTextureCache = class _FontTextureCache {
      cache = /* @__PURE__ */ new Map();
      static getBaseSize(size) {
        if (size <= 12)
          return 12;
        else if (size <= 32)
          return 32;
        else
          return 64;
      }
      static getCacheKey(font, size) {
        return `${size}px ${font}`;
      }
      getFont(device2, size, fontName = `sans-serif`) {
        const baseSize = _FontTextureCache.getBaseSize(size);
        const cacheKey = _FontTextureCache.getCacheKey(fontName, baseSize);
        if (!this.cache.has(cacheKey))
          this.cache.set(cacheKey, new FontTexture(device2, fontName, baseSize));
        return this.cache.get(cacheKey);
      }
      destroy(device2) {
        for (const fontTexture of this.cache.values())
          fontTexture.destroy(device2);
      }
    };
  }
});

// noclip/gfx/helpers/DebugDraw.ts
function setFlags(options, flags) {
  if (options.flags !== void 0)
    flags |= options.flags;
  else
    flags |= 20 /* Default */;
  return { ...options, flags };
}
function fillVec3p(d, offs, v) {
  d[offs + 0] = v[0];
  d[offs + 1] = v[1];
  d[offs + 2] = v[2];
  return 3;
}
var defaultOptions, SpaceMask, bindingLayouts, debugDrawVS, debugDrawFS, BufferPage, DebugDraw;
var init_DebugDraw = __esm({
  "noclip/gfx/helpers/DebugDraw.ts"() {
    init_esm();
    init_Color();
    init_DebugJunk();
    init_MathHelpers();
    init_GfxPlatform();
    init_GfxPlatformUtil();
    init_GfxRenderGraph();
    init_GfxRenderInstManager();
    init_GfxShaderCompiler();
    init_GfxMegaStateDescriptorHelpers();
    init_GfxShaderLibrary();
    init_ReversedDepthHelpers();
    init_TopologyHelpers();
    init_UniformBufferHelpers();
    init_FontTexture();
    defaultOptions = { flags: 20 /* Default */ };
    SpaceMask = 0 /* WorldSpace */ | 1 /* ViewSpace */ | 2 /* ScreenSpace */;
    bindingLayouts = [
      { numUniformBuffers: 1, numSamplers: 2, samplerEntries: [
        { dimension: 0 /* n2D */, formatKind: 1 /* UnfilterableFloat */ },
        { dimension: 1 /* n2DArray */, formatKind: 0 /* Float */ }
        // Font texture
      ] }
    ];
    debugDrawVS = `
precision highp float;
precision highp sampler2DArray;

${GfxShaderLibrary.MatrixLibrary}

layout(std140) uniform ub_BaseData {
    Mat4x4 u_ClipFromView;
    Mat3x4 u_ViewFromWorld;
    vec4 u_Misc[1];
};

layout(binding = 0) uniform sampler2D u_TextureFramebufferDepth;
layout(binding = 1) uniform sampler2DArray u_TextureFont;

#define u_ScreenSize (u_Misc[0].xy)

layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;

out vec4 v_Color;
out vec3 v_TexCoord;
flat out uint v_Flags;

uint UnpackFloatExtraData(float t_Value) {
    // We do a bit of a dumb trick to pack other data into the color channels.
    // Since we want the whole [0.0f, 1.0f] range to be available for the colors, we pack flags
    // into the power of two above. e.g.
    //   0.0f - 1.99f means Flags = 0,
    //   2.0f - 3.99f means Flags = 1, etc.
    return uint(t_Value) / 2u;
}

void main() {
    vec4 t_Color = a_Color;
    uint t_Flags = UnpackFloatExtraData(t_Color.a);
    t_Color.a -= float(t_Flags) * 2.0;

    v_TexCoord = vec3(0);

    if ((t_Flags & uint(${8 /* Font */})) != 0u) {
        uint t_CharIndex = UnpackFloatExtraData(t_Color.r);
        t_Color.r -= float(t_CharIndex) * 2.0;
        int t_QuadVertex = int(gl_VertexID & 3);
        v_TexCoord.x = (t_QuadVertex == 1 || t_QuadVertex == 2) ? 1.0 : 0.0;
        v_TexCoord.y = (t_QuadVertex == 2 || t_QuadVertex == 3) ? 1.0 : 0.0;
        v_TexCoord.z = float(t_CharIndex);
    }

    int t_Space = int(t_Flags & ${SpaceMask}u);
    if (t_Space == ${0 /* WorldSpace */}) {
        gl_Position = UnpackMatrix(u_ClipFromView) * vec4(UnpackMatrix(u_ViewFromWorld) * vec4(a_Position.xyz, 1.0), 1.0);
    } else if (t_Space == ${1 /* ViewSpace */}) {
        gl_Position = UnpackMatrix(u_ClipFromView) * vec4(a_Position.xyz, 1.0);
    } else if (t_Space == ${2 /* ScreenSpace */}) {
        vec2 t_ClipPos = (a_Position.xy / u_ScreenSize.xy) * 2.0 - 1.0;
        t_ClipPos.y *= -1.0;
        v_TexCoord.y = 1.0 - v_TexCoord.y;
        gl_Position = vec4(t_ClipPos, 1.0, 1.0);
    }

    if (gl_InstanceID >= 1) {
        uint t_LineIndex = uint(gl_InstanceID - 1);
        vec2 t_PosOffs;
        t_PosOffs.x = (t_LineIndex & 1u) != 0u ? 1.0 : -1.0;
        t_PosOffs.y = (t_LineIndex & 2u) != 0u ? 1.0 : -1.0;
        t_PosOffs.xy *= float((t_LineIndex / 4u) + 1u);
        gl_Position.xy += (t_PosOffs / u_ScreenSize) * gl_Position.w;
    }

    v_Color = t_Color;
    v_Color.rgb *= v_Color.aaa;
    v_Flags = t_Flags;
}
`;
    debugDrawFS = `
precision highp float;
precision highp sampler2DArray;

in vec4 v_Color;
in vec3 v_TexCoord;
flat in uint v_Flags;

layout(binding = 0) uniform sampler2D u_TextureFramebufferDepth;
layout(binding = 1) uniform sampler2DArray u_TextureFont;

bool IsSomethingInFront(float t_DepthSample) {
    if (t_DepthSample ${IsDepthReversed ? `>` : `<`} gl_FragCoord.z)
        return true;

    return false;
}

void main() {
    vec4 t_Color = v_Color;

    // Work around naga bug https://github.com/gfx-rs/wgpu/issues/6596
    vec3 t_TexCoord = v_TexCoord;
    t_TexCoord.z = round(t_TexCoord.z);
    float t_Coverage = texture(SAMPLER_2DArray(u_TextureFont), t_TexCoord).r;
    if ((v_Flags & uint(${8 /* Font */})) != 0u) {
        // Map range 0.0f - 0.5f to outline color, and 0.5f - 1.0f to fill color.
        vec4 t_OutlineColor = vec4(0, 0, 0, 1);
        if (t_Coverage >= 0.5f) {
            t_Color = mix(t_OutlineColor, t_Color, (t_Coverage - 0.5f) * 2.0f);
        } else {
            t_Color = mix(vec4(0.0f), t_OutlineColor, t_Coverage * 2.0f);
        }
        t_Color.rgb *= t_Color.a;
    }

    if ((v_Flags & uint(${4 /* DepthTint */})) != 0u) {
        float t_DepthSample = texelFetch(TEXTURE(u_TextureFramebufferDepth), ivec2(gl_FragCoord.xy), 0).r;
        if (IsSomethingInFront(t_DepthSample))
            t_Color.rgba *= 0.15;
    }

    gl_FragColor = t_Color;
}
`;
    BufferPage = class {
      constructor(cache3, behaviorType, vertexCount, indexCount, lineThickness) {
        this.behaviorType = behaviorType;
        this.lineThickness = lineThickness;
        this.vertexData = new Float32Array(vertexCount * this.vertexStride);
        this.indexData = new Uint16Array(align2(indexCount, 2));
        const vertexAttributeDescriptors = [
          { location: 0, format: GfxFormat.F32_RGB, bufferIndex: 0, bufferByteOffset: 0 },
          { location: 1, format: GfxFormat.F32_RGBA, bufferIndex: 0, bufferByteOffset: 3 * 4 }
        ];
        const vertexBufferDescriptors = [
          { byteStride: this.vertexStride * 4, frequency: 1 /* PerVertex */ }
        ];
        this.inputLayout = cache3.createInputLayout({
          indexBufferFormat: GfxFormat.U16_R,
          vertexAttributeDescriptors,
          vertexBufferDescriptors
        });
      }
      behaviorType;
      lineThickness;
      vertexData;
      indexData;
      inputLayout;
      vertexDataOffs = 0;
      vertexStride = 3 + 4;
      indexDataOffs = 0;
      renderInst = new GfxRenderInst();
      fontTexture = null;
      getCurrentVertexID() {
        return this.vertexDataOffs / this.vertexStride >>> 0;
      }
      remainVertex() {
        return this.vertexData.length - this.vertexDataOffs;
      }
      remainIndex() {
        return this.indexData.length - this.indexDataOffs;
      }
      getDrawCount() {
        return this.indexDataOffs;
      }
      canAllocVertices(vertexCount, indexCount) {
        return vertexCount * this.vertexStride <= this.remainVertex() && indexCount <= this.remainIndex();
      }
      vertexPCF(v, c, options) {
        this.vertexDataOffs += fillVec3p(this.vertexData, this.vertexDataOffs, v);
        const flags = options.flags ?? 20 /* Default */;
        const a = c.a + flags * 2;
        this.vertexDataOffs += fillColor(this.vertexData, this.vertexDataOffs, c, a);
      }
      vertexFont(modelMatrix, cx, cy, c, options, charIdx) {
        vec3_exports.set(DebugDraw.scratchVec3[0], cx, cy, 0);
        transformVec3Mat4w1(DebugDraw.scratchVec3[0], modelMatrix, DebugDraw.scratchVec3[0]);
        this.vertexDataOffs += fillVec3p(this.vertexData, this.vertexDataOffs, DebugDraw.scratchVec3[0]);
        const flags = options.flags ?? 20 /* Default */;
        const r = c.r + charIdx * 2;
        const a = c.a + flags * 2;
        this.vertexDataOffs += fillVec4(this.vertexData, this.vertexDataOffs, r, c.g, c.b, a);
      }
      index(n) {
        this.indexData[this.indexDataOffs++] = n;
        assert2(this.indexDataOffs <= this.indexData.length);
      }
      endFrame(cache3, templateRenderInst) {
        const vertexBuffer = cache3.dynamicBufferCache.allocateData(2 /* Vertex */, new Uint8Array(this.vertexData.buffer, 0, this.vertexDataOffs * 4));
        const indexBuffer = cache3.dynamicBufferCache.allocateData(1 /* Index */, new Uint8Array(this.indexData.buffer, 0, this.indexDataOffs * 2));
        this.renderInst.copyFrom(templateRenderInst);
        this.renderInst.setVertexInput(this.inputLayout, [vertexBuffer], indexBuffer);
        const isLines = this.behaviorType === 1 /* LinesDepthWrite */ || this.behaviorType === 2 /* LinesDepthTint */;
        const isDepthWrite = this.behaviorType === 1 /* LinesDepthWrite */ || this.behaviorType === 4 /* SolidDepthWrite */;
        const isDepthTint = this.behaviorType === 2 /* LinesDepthTint */ || this.behaviorType === 5 /* SolidDepthTint */ || this.behaviorType === 7 /* FontDepthTint */;
        this.renderInst.setPrimitiveTopology(isLines ? 1 /* Lines */ : 0 /* Triangles */);
        setAttachmentStateSimple(this.renderInst.getMegaStateFlags(), { blendMode: 0 /* Add */, blendSrcFactor: 1 /* One */, blendDstFactor: 7 /* OneMinusSrcAlpha */ });
        if (isLines)
          this.renderInst.setInstanceCount(1 + (this.lineThickness - 1) * 4);
        this.renderInst.setMegaStateFlags({ depthWrite: isDepthWrite });
        if (isDepthTint)
          this.renderInst.setMegaStateFlags({ depthCompare: 7 /* Always */ });
        this.renderInst.setDrawCount(this.indexDataOffs);
        this.vertexDataOffs = 0;
        this.indexDataOffs = 0;
      }
    };
    DebugDraw = class _DebugDraw {
      constructor(renderCache, uniformBuffer) {
        this.renderCache = renderCache;
        const device2 = renderCache.device;
        this.debugDrawProgram = renderCache.createProgramSimple(preprocessProgram_GLSL(device2.queryVendorInfo(), debugDrawVS, debugDrawFS));
        this.depthSampler = renderCache.createSampler({
          minFilter: 0 /* Point */,
          magFilter: 0 /* Point */,
          mipFilter: 0 /* Nearest */,
          wrapS: 0 /* Clamp */,
          wrapT: 0 /* Clamp */
        });
        this.fontSampler = renderCache.createSampler({
          minFilter: 1 /* Bilinear */,
          magFilter: 1 /* Bilinear */,
          mipFilter: 0 /* Nearest */,
          wrapS: 0 /* Clamp */,
          wrapT: 0 /* Clamp */,
          wrapQ: 0 /* Clamp */
        });
        this.templateRenderInst.setUniformBuffer(uniformBuffer);
        this.templateRenderInst.setGfxProgram(this.debugDrawProgram);
        this.templateRenderInst.setBindingLayouts(bindingLayouts);
      }
      renderCache;
      fontTextureCache = new FontTextureCache();
      pages = [];
      templateRenderInst = new GfxRenderInst();
      defaultPageVertexCount = 1024;
      defaultPageIndexCount = 1024;
      debugDrawProgram;
      depthSampler;
      fontSampler;
      currentPage = null;
      // for the batch system
      lineThickness = 3;
      viewFromWorldMatrix = mat4_exports.create();
      screenTextPosition = vec2_exports.create();
      screenTextOrigin = vec2_exports.fromValues(128, 32);
      static scratchVec3 = nArray2(5, () => vec3_exports.create());
      static scratchMat4 = mat4_exports.create();
      getBehaviorType(isLines, isOpaque, options) {
        const isDepthTint = (options.flags ?? 20 /* Default */) & 4 /* DepthTint */;
        if (isLines)
          return isDepthTint ? 2 /* LinesDepthTint */ : isOpaque ? 1 /* LinesDepthWrite */ : 0 /* Lines */;
        else
          return isDepthTint ? 5 /* SolidDepthTint */ : isOpaque ? 4 /* SolidDepthWrite */ : 0 /* Lines */;
      }
      beginFrame(clipFromViewMatrix, viewFromWorldMatrix, width, height) {
        let offs = this.templateRenderInst.allocateUniformBuffer(0, 16 + 12 + 4);
        const d = this.templateRenderInst.mapUniformBufferF32(0);
        mat4_exports.copy(this.viewFromWorldMatrix, viewFromWorldMatrix);
        offs += fillMatrix4x4(d, offs, clipFromViewMatrix);
        offs += fillMatrix4x3(d, offs, viewFromWorldMatrix);
        offs += fillVec4(d, offs, width, height);
      }
      beginBatch(behaviorType, vertexCount, indexCount) {
        assert2(this.currentPage === null);
        this.currentPage = this.findPage(behaviorType, vertexCount, indexCount);
      }
      beginBatchLine(numSegments, opaque = true, options = defaultOptions) {
        const behaviorType = this.getBehaviorType(true, opaque, options);
        this.beginBatch(behaviorType, numSegments * 2, numSegments * 2);
      }
      endBatch() {
        assert2(this.currentPage !== null);
        this.currentPage = null;
      }
      findPage(behaviorType, vertexCount, indexCount, fontTexture = null) {
        if (this.currentPage !== null) {
          assert2(this.currentPage.behaviorType === behaviorType);
          assert2(this.currentPage.canAllocVertices(vertexCount, indexCount));
          return this.currentPage;
        }
        for (let i = 0; i < this.pages.length; i++) {
          const page2 = this.pages[i];
          if (!page2.canAllocVertices(vertexCount, indexCount))
            continue;
          if (page2.indexDataOffs === 0) {
            page2.behaviorType = behaviorType;
            page2.fontTexture = fontTexture;
            return page2;
          }
          if (page2.behaviorType === behaviorType && page2.fontTexture === fontTexture)
            return page2;
        }
        vertexCount = align2(vertexCount, this.defaultPageVertexCount);
        indexCount = align2(indexCount, this.defaultPageIndexCount);
        const page = new BufferPage(this.renderCache, behaviorType, vertexCount, indexCount, this.lineThickness);
        page.fontTexture = fontTexture;
        this.pages.push(page);
        return page;
      }
      drawLine(p0, p1, color0, color1 = color0, options = defaultOptions) {
        const page = this.findPage(this.getBehaviorType(true, color0.a >= 1 && color1.a >= 1, options), 2, 2);
        const baseVertex = page.getCurrentVertexID();
        page.vertexPCF(p0, color0, options);
        page.vertexPCF(p1, color1, options);
        for (let i = 0; i < 2; i++)
          page.index(baseVertex + i);
      }
      drawVector(p0, dir, mag, color0, color1 = color0, options = defaultOptions) {
        vec3_exports.scaleAndAdd(_DebugDraw.scratchVec3[0], p0, dir, mag);
        this.drawLine(p0, _DebugDraw.scratchVec3[0], color0, color1, options);
      }
      drawBasis(m, mag = 100, options = defaultOptions) {
        const page = this.findPage(this.getBehaviorType(true, true, options), 6, 6);
        const baseVertex = page.getCurrentVertexID();
        getMatrixTranslation(_DebugDraw.scratchVec3[0], m);
        getMatrixAxisX(_DebugDraw.scratchVec3[1], m);
        vec3_exports.scaleAndAdd(_DebugDraw.scratchVec3[1], _DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], mag);
        page.vertexPCF(_DebugDraw.scratchVec3[0], Red, options);
        page.vertexPCF(_DebugDraw.scratchVec3[1], Red, options);
        getMatrixAxisY(_DebugDraw.scratchVec3[1], m);
        vec3_exports.scaleAndAdd(_DebugDraw.scratchVec3[1], _DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], mag);
        page.vertexPCF(_DebugDraw.scratchVec3[0], Green, options);
        page.vertexPCF(_DebugDraw.scratchVec3[1], Green, options);
        getMatrixAxisZ(_DebugDraw.scratchVec3[1], m);
        vec3_exports.scaleAndAdd(_DebugDraw.scratchVec3[1], _DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], mag);
        page.vertexPCF(_DebugDraw.scratchVec3[0], Blue, options);
        page.vertexPCF(_DebugDraw.scratchVec3[1], Blue, options);
        for (let i = 0; i < 6; i++)
          page.index(baseVertex + i);
      }
      drawLocator(center, mag, color, options = { flags: 20 /* Default */ }) {
        const page = this.findPage(this.getBehaviorType(true, color.a >= 1, options), 6, 6);
        const baseVertex = page.getCurrentVertexID();
        for (let i = 0; i < 3; i++) {
          vec3_exports.copy(_DebugDraw.scratchVec3[0], center);
          vec3_exports.copy(_DebugDraw.scratchVec3[1], center);
          _DebugDraw.scratchVec3[0][i] -= mag;
          _DebugDraw.scratchVec3[1][i] += mag;
          page.vertexPCF(_DebugDraw.scratchVec3[0], color, options);
          page.vertexPCF(_DebugDraw.scratchVec3[1], color, options);
        }
        for (let i = 0; i < 6; i++)
          page.index(baseVertex + i);
      }
      drawDiscLineN(center, n, r, color, sides = 32, options = defaultOptions) {
        branchlessONB(_DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], n);
        this.drawDiscLineRU(center, _DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], r, color, sides, options);
      }
      drawDiscLineRU(center, right, up, r, color, sides = 32, options = defaultOptions) {
        const page = this.findPage(this.getBehaviorType(true, color.a >= 1, options), sides, sides * 2);
        const baseVertex = page.getCurrentVertexID();
        const s = _DebugDraw.scratchVec3[2];
        for (let i = 0; i < sides; i++) {
          const theta = i / sides * 6.283185307179586 /* TAU */;
          const sin = Math.sin(theta) * r, cos = Math.cos(theta) * r;
          vec3FromBasis2(s, center, right, cos, up, sin);
          page.vertexPCF(s, color, options);
          page.index(baseVertex + i);
          page.index(baseVertex + (i === sides - 1 ? 0 : i + 1));
        }
      }
      drawSphereLine(center, r, color, sides = 32, options = defaultOptions) {
        this.drawDiscLineRU(center, Vec3UnitX, Vec3UnitY, r, color, sides, options);
        this.drawDiscLineRU(center, Vec3UnitX, Vec3UnitZ, r, color, sides, options);
        this.drawDiscLineRU(center, Vec3UnitY, Vec3UnitZ, r, color, sides, options);
      }
      drawCapsuleLine(r, height, m, color, sides = 32, options = defaultOptions) {
        const numPoints = sides - 1;
        const page = this.findPage(this.getBehaviorType(true, color.a >= 1, options), sides * 7, numPoints * 8 + sides * 6 + 8);
        const center = _DebugDraw.scratchVec3[0], right = _DebugDraw.scratchVec3[1], up = _DebugDraw.scratchVec3[2], cross4 = _DebugDraw.scratchVec3[3];
        getMatrixTranslation(center, m);
        getMatrixAxis(right, up, cross4, m);
        const s = _DebugDraw.scratchVec3[4];
        const baseVertex = page.getCurrentVertexID();
        for (let i = 0; i < sides; i++) {
          const theta = i / numPoints * (6.283185307179586 /* TAU */ / 2);
          const sin = Math.sin(theta) * r, cos = Math.cos(theta) * r;
          vec3FromBasis2(s, center, right, cos, up, -(sin + height * 0.5));
          page.vertexPCF(s, color, options);
          vec3FromBasis2(s, center, cross4, cos, up, -(sin + height * 0.5));
          page.vertexPCF(s, color, options);
          vec3FromBasis2(s, center, right, cos, up, sin + height * 0.5);
          page.vertexPCF(s, color, options);
          vec3FromBasis2(s, center, cross4, cos, up, sin + height * 0.5);
          page.vertexPCF(s, color, options);
          if (i < numPoints) {
            const i0 = i, i1 = i + 1;
            page.index(baseVertex + i0 * 4 + 0);
            page.index(baseVertex + i1 * 4 + 0);
            page.index(baseVertex + i0 * 4 + 1);
            page.index(baseVertex + i1 * 4 + 1);
            page.index(baseVertex + i0 * 4 + 2);
            page.index(baseVertex + i1 * 4 + 2);
            page.index(baseVertex + i0 * 4 + 3);
            page.index(baseVertex + i1 * 4 + 3);
          }
        }
        const baseVertexCircles = baseVertex + sides * 4;
        for (let i = 0; i < sides; i++) {
          const theta = i / numPoints * 6.283185307179586 /* TAU */;
          const sin = Math.sin(theta) * r, cos = Math.cos(theta) * r;
          vec3FromBasis3(s, center, right, sin, cross4, cos, up, height * 0.5);
          page.vertexPCF(s, color, options);
          vec3FromBasis2(s, center, right, sin, cross4, cos);
          page.vertexPCF(s, color, options);
          vec3FromBasis3(s, center, right, sin, cross4, cos, up, -height * 0.5);
          page.vertexPCF(s, color, options);
          page.index(baseVertexCircles + i * 3);
          page.index(baseVertexCircles + (i === numPoints ? 0 : i + 1) * 3);
          page.index(baseVertexCircles + i * 3 + 1);
          page.index(baseVertexCircles + (i === numPoints ? 0 : i + 1) * 3 + 1);
          page.index(baseVertexCircles + i * 3 + 2);
          page.index(baseVertexCircles + (i === numPoints ? 0 : i + 1) * 3 + 2);
        }
        page.index(baseVertex + 0);
        page.index(baseVertex + 2);
        page.index(baseVertex + 1);
        page.index(baseVertex + 3);
        page.index(baseVertex + numPoints * 4 + 0);
        page.index(baseVertex + numPoints * 4 + 2);
        page.index(baseVertex + numPoints * 4 + 1);
        page.index(baseVertex + numPoints * 4 + 3);
      }
      drawBoxLine(aabb, m, color, options = defaultOptions) {
        const page = this.findPage(this.getBehaviorType(true, color.a >= 1, options), 8, 24);
        const baseVertex = page.getCurrentVertexID();
        const p2 = _DebugDraw.scratchVec3[0];
        for (let i = 0; i < 8; i++) {
          aabb.cornerPoint(p2, i);
          transformVec3Mat4w1(p2, m, p2);
          page.vertexPCF(p2, color, options);
        }
        page.index(baseVertex + 0);
        page.index(baseVertex + 1);
        page.index(baseVertex + 1);
        page.index(baseVertex + 3);
        page.index(baseVertex + 3);
        page.index(baseVertex + 2);
        page.index(baseVertex + 2);
        page.index(baseVertex + 0);
        page.index(baseVertex + 4);
        page.index(baseVertex + 5);
        page.index(baseVertex + 5);
        page.index(baseVertex + 7);
        page.index(baseVertex + 7);
        page.index(baseVertex + 6);
        page.index(baseVertex + 6);
        page.index(baseVertex + 4);
        page.index(baseVertex + 0);
        page.index(baseVertex + 4);
        page.index(baseVertex + 1);
        page.index(baseVertex + 5);
        page.index(baseVertex + 2);
        page.index(baseVertex + 6);
        page.index(baseVertex + 3);
        page.index(baseVertex + 7);
      }
      drawDiscSolidN(center, n, r, color, sides = 32, options = defaultOptions) {
        branchlessONB(_DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], n);
        this.drawDiscSolidRU(center, _DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], r, color, sides, options);
      }
      drawDiscSolidRU(center, right, up, r, color, sides = 32, options = defaultOptions) {
        const page = this.findPage(this.getBehaviorType(false, color.a >= 1, options), sides + 1, sides * 3);
        const baseVertex = page.getCurrentVertexID();
        page.vertexPCF(center, color, options);
        const s = _DebugDraw.scratchVec3[2];
        for (let i = 0; i < sides - 1; i++) {
          const theta = i / sides * 6.283185307179586 /* TAU */;
          const sin = Math.sin(theta) * r, cos = Math.cos(theta) * r;
          s[0] = center[0] + right[0] * cos + up[0] * sin;
          s[1] = center[1] + right[1] * cos + up[1] * sin;
          s[2] = center[2] + right[2] * cos + up[2] * sin;
          page.vertexPCF(s, color, options);
        }
        for (let i = 0; i < sides - 2; i++) {
          page.index(baseVertex);
          page.index(baseVertex + 1 + i);
          page.index(baseVertex + 2 + i);
        }
        page.index(baseVertex);
        page.index(baseVertex + sides - 1);
        page.index(baseVertex + 1);
      }
      rectCorner(dst, center, right, up, rightMag, upMag) {
        for (let i = 0; i < 4; i++) {
          const signX = i & 1 ? -1 : 1;
          const signY = i & 2 ? -1 : 1;
          const s = dst[i];
          vec3FromBasis2(s, center, right, signX * rightMag, up, signY * upMag);
        }
      }
      drawTriSolidP(p0, p1, p2, color, options = defaultOptions) {
        const page = this.findPage(this.getBehaviorType(false, color.a >= 1, options), 3, 3);
        const baseVertex = page.getCurrentVertexID();
        page.vertexPCF(p0, color, options);
        page.vertexPCF(p1, color, options);
        page.vertexPCF(p2, color, options);
        for (let i = 0; i < 3; i++)
          page.index(baseVertex + i);
      }
      drawRectLineP(p0, p1, p2, p3, color, options = defaultOptions) {
        const page = this.findPage(this.getBehaviorType(true, color.a >= 1, options), 4, 8);
        const baseVertex = page.getCurrentVertexID();
        page.vertexPCF(p0, color, options);
        page.vertexPCF(p1, color, options);
        page.vertexPCF(p3, color, options);
        page.vertexPCF(p2, color, options);
        for (let i = 0; i < 4; i++) {
          page.index(baseVertex + i);
          page.index(baseVertex + (i + 1 & 3));
        }
      }
      drawRectLineRU(center, right, up, rightMag, upMag, color, options = defaultOptions) {
        this.rectCorner(_DebugDraw.scratchVec3, center, right, up, rightMag, upMag);
        this.drawRectLineP(_DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], _DebugDraw.scratchVec3[2], _DebugDraw.scratchVec3[3], color, options);
      }
      drawRectSolidP(p0, p1, p2, p3, color, options = defaultOptions) {
        const page = this.findPage(this.getBehaviorType(false, color.a >= 1, options), 4, 6);
        const baseVertex = page.getCurrentVertexID();
        page.vertexPCF(p0, color, options);
        page.vertexPCF(p1, color, options);
        page.vertexPCF(p3, color, options);
        page.vertexPCF(p2, color, options);
        page.indexDataOffs += convertToTrianglesRange(page.indexData, page.indexDataOffs, 3 /* Quads */, baseVertex, 4);
      }
      drawRectSolidRU(center, right, up, rightMag, upMag, color, options = defaultOptions) {
        this.rectCorner(_DebugDraw.scratchVec3, center, right, up, rightMag, upMag);
        this.drawRectSolidP(_DebugDraw.scratchVec3[0], _DebugDraw.scratchVec3[1], _DebugDraw.scratchVec3[2], _DebugDraw.scratchVec3[3], color, options);
      }
      getFontTexture(options) {
        const device2 = this.renderCache.device;
        const fontSize = options.fontSize ?? 32;
        const fontTexture = this.fontTextureCache.getFont(device2, fontSize);
        const fontScale = fontTexture.getFontScale(fontSize);
        return [fontTexture, fontScale];
      }
      drawTextMtx(modelMatrix, str6, color, options = defaultOptions) {
        const [fontTexture, fontScale] = this.getFontTexture(options);
        const iterString = (cb) => {
          let x = 0, y = 0;
          for (let i = 0; i < str6.length; i++) {
            const c = str6.charAt(i);
            let charIdx = fontTexture.getCharacterIndex(c);
            if (charIdx < 0)
              continue;
            const advanceX = fontTexture.getCharacterAdvanceX(charIdx) * fontScale;
            cb(charIdx, x, y, advanceX);
            x += advanceX;
          }
        };
        let strWidth = 0;
        let charCount = 0;
        iterString((charIdx, cx, cy, advanceX) => {
          strWidth = Math.max(strWidth, cx + advanceX);
          charCount++;
        });
        const behaviorType = (options.flags ?? 20 /* Default */) & 4 /* DepthTint */ ? 7 /* FontDepthTint */ : 6 /* Font */;
        const page = this.findPage(behaviorType, charCount * 4, charCount * 6);
        page.fontTexture = fontTexture;
        let baseX = 0;
        if (options.textAlign === "center")
          baseX = -strWidth / 2;
        else if (options.textAlign === "right")
          baseX = -strWidth;
        const baseVertex = page.getCurrentVertexID();
        options = setFlags(options, 8 /* Font */);
        iterString((charIdx, cx, cy, advanceX) => {
          cx += baseX;
          const x0 = cx, x1 = cx + fontTexture.cellWidth * fontScale;
          const y0 = cy + fontTexture.cellHeight * fontScale, y1 = cy;
          page.vertexFont(modelMatrix, x0, y0, color, options, charIdx);
          page.vertexFont(modelMatrix, x1, y0, color, options, charIdx);
          page.vertexFont(modelMatrix, x1, y1, color, options, charIdx);
          page.vertexFont(modelMatrix, x0, y1, color, options, charIdx);
        });
        page.indexDataOffs += convertToTrianglesRange(page.indexData, page.indexDataOffs, 3 /* Quads */, baseVertex, charCount * 4);
      }
      drawScreenText(str6, x, y, color, options = defaultOptions) {
        const mtx = _DebugDraw.scratchMat4;
        mat4_exports.identity(mtx);
        mtx[12] = x;
        mtx[13] = y;
        options = setFlags(options, 2 /* ScreenSpace */);
        this.drawTextMtx(mtx, str6, color, options);
      }
      screenPrintText(str6, color, options = defaultOptions) {
        str6.split("\n").forEach((line) => {
          const x = this.screenTextOrigin[0] + this.screenTextPosition[0];
          const y = this.screenTextOrigin[1] + this.screenTextPosition[1];
          this.drawScreenText(line, x, y, color, options);
          const [fontTexture, fontScale] = this.getFontTexture(options);
          this.screenTextPosition[1] += fontScale * fontTexture.cellHeight;
        });
      }
      drawWorldTextMtx(str6, mtx, color, options = defaultOptions) {
        options = setFlags(options, 0 /* WorldSpace */);
        const flags = options.flags;
        const space = flags & SpaceMask;
        if (!!(flags & 16 /* AutoFlipText */) && space === 0 /* WorldSpace */) {
          const a = this.viewFromWorldMatrix;
          const m10 = a[8] * mtx[2] + a[9] * mtx[6] + a[10] * mtx[10];
          if (m10 < 0) {
            mat4_exports.copy(_DebugDraw.scratchMat4, mtx);
            _DebugDraw.scratchMat4[0] *= -1;
            _DebugDraw.scratchMat4[1] *= -1;
            _DebugDraw.scratchMat4[2] *= -1;
            _DebugDraw.scratchMat4[8] *= -1;
            _DebugDraw.scratchMat4[9] *= -1;
            _DebugDraw.scratchMat4[10] *= -1;
            mtx = _DebugDraw.scratchMat4;
          }
        }
        this.drawTextMtx(mtx, str6, color, options);
      }
      drawWorldTextRU(str6, p2, color, right = Vec3UnitX, up = Vec3UnitY, options = defaultOptions) {
        const mtx = _DebugDraw.scratchMat4;
        vec3_exports.cross(_DebugDraw.scratchVec3[0], right, up);
        setMatrixAxis(mtx, right, up, _DebugDraw.scratchVec3[0]);
        setMatrixTranslation(mtx, p2);
        this.drawWorldTextMtx(str6, mtx, color, options);
      }
      drawWorldText(str6, p2, color, options = defaultOptions) {
        const mtx = _DebugDraw.scratchMat4;
        mat4_exports.invert(mtx, this.viewFromWorldMatrix);
        setMatrixTranslation(mtx, p2);
        this.drawWorldTextMtx(str6, mtx, color, options);
      }
      endFrame() {
        vec2_exports.zero(this.screenTextPosition);
        let behaviorTypesMask = 0;
        for (let i = 0; i < this.pages.length; i++) {
          const page = this.pages[i];
          page.endFrame(this.renderCache, this.templateRenderInst);
          behaviorTypesMask |= 1 << page.behaviorType;
        }
        return behaviorTypesMask;
      }
      pushPasses(builder, mainColorTargetID, mainDepthTargetID) {
        const behaviorTypes = this.endFrame();
        if (behaviorTypes === 0)
          return;
        builder.pushPass((pass) => {
          pass.setDebugName(`DebugDraw`);
          pass.attachRenderTargetID(0 /* Color0 */, mainColorTargetID);
          pass.attachRenderTargetID(4 /* DepthStencil */, mainDepthTargetID);
          let depthResolveTextureID = null;
          const isDepthTint = behaviorTypes & (1 << 2 /* LinesDepthTint */ | 1 << 5 /* SolidDepthTint */ | 1 << 7 /* FontDepthTint */);
          if (isDepthTint) {
            depthResolveTextureID = builder.resolveRenderTarget(mainDepthTargetID);
            pass.attachResolveTexture(depthResolveTextureID);
          }
          pass.exec((passRenderer, scope) => {
            for (let i = 0; i < this.pages.length; i++) {
              const page = this.pages[i];
              if (page.renderInst.getDrawCount() <= 0)
                continue;
              const depthTexture = depthResolveTextureID !== null ? scope.getResolveTextureForID(depthResolveTextureID) : null;
              const fontTexture = page.fontTexture !== null ? page.fontTexture.gfxTexture : null;
              page.renderInst.setSamplerBindings(0, [
                { gfxTexture: depthTexture, gfxSampler: this.depthSampler },
                { gfxTexture: fontTexture, gfxSampler: this.fontSampler }
              ]);
              page.renderInst.drawOnPass(this.renderCache, passRenderer);
            }
          });
        });
      }
      destroy() {
        this.fontTextureCache.destroy(this.renderCache.device);
      }
    };
  }
});

// noclip/gx/GXMaterialBuilder.ts
function copyColorChannelControl(colorChannel) {
  return {
    lightingEnabled: colorChannel.lightingEnabled,
    matColorSource: colorChannel.matColorSource,
    ambColorSource: colorChannel.ambColorSource,
    litMask: colorChannel.litMask,
    diffuseFunction: colorChannel.diffuseFunction,
    attenuationFunction: colorChannel.attenuationFunction
  };
}
function copyLightChannelControl(lightChannel) {
  return {
    alphaChannel: copyColorChannelControl(lightChannel.alphaChannel),
    colorChannel: copyColorChannelControl(lightChannel.colorChannel)
  };
}
function copyTexGen(texGen) {
  return {
    type: texGen.type,
    source: texGen.source,
    matrix: texGen.matrix,
    normalize: texGen.normalize,
    postMatrix: texGen.postMatrix
  };
}
function copyTevStage(tevStage) {
  return {
    colorInA: tevStage.colorInA,
    colorInB: tevStage.colorInB,
    colorInC: tevStage.colorInC,
    colorInD: tevStage.colorInD,
    colorOp: tevStage.colorOp,
    colorBias: tevStage.colorBias,
    colorScale: tevStage.colorScale,
    colorClamp: tevStage.colorClamp,
    colorRegId: tevStage.colorRegId,
    alphaInA: tevStage.alphaInA,
    alphaInB: tevStage.alphaInB,
    alphaInC: tevStage.alphaInC,
    alphaInD: tevStage.alphaInD,
    alphaOp: tevStage.alphaOp,
    alphaBias: tevStage.alphaBias,
    alphaScale: tevStage.alphaScale,
    alphaClamp: tevStage.alphaClamp,
    alphaRegId: tevStage.alphaRegId,
    texCoordId: tevStage.texCoordId,
    texMap: tevStage.texMap,
    channelId: tevStage.channelId,
    konstColorSel: tevStage.konstColorSel,
    konstAlphaSel: tevStage.konstAlphaSel,
    indTexStage: tevStage.indTexStage,
    indTexFormat: tevStage.indTexFormat,
    indTexBiasSel: tevStage.indTexBiasSel,
    indTexAlphaSel: tevStage.indTexAlphaSel,
    indTexMatrix: tevStage.indTexMatrix,
    indTexWrapS: tevStage.indTexWrapS,
    indTexWrapT: tevStage.indTexWrapT,
    indTexAddPrev: tevStage.indTexAddPrev,
    indTexUseOrigLOD: tevStage.indTexUseOrigLOD,
    texSwapTable: tevStage.texSwapTable,
    rasSwapTable: tevStage.rasSwapTable
  };
}
function copyIndTexStage(indStage) {
  return {
    texture: indStage.texture,
    texCoordId: indStage.texCoordId,
    scaleS: indStage.scaleS,
    scaleT: indStage.scaleT
  };
}
function copyRopInfo(ropInfo) {
  return {
    fogType: ropInfo.fogType,
    fogAdjEnabled: ropInfo.fogAdjEnabled,
    blendMode: ropInfo.blendMode,
    blendSrcFactor: ropInfo.blendSrcFactor,
    blendDstFactor: ropInfo.blendDstFactor,
    blendLogicOp: ropInfo.blendLogicOp,
    depthTest: ropInfo.depthTest,
    depthFunc: ropInfo.depthFunc,
    depthWrite: ropInfo.depthWrite,
    dstAlpha: ropInfo.dstAlpha,
    colorUpdate: ropInfo.colorUpdate,
    alphaUpdate: ropInfo.alphaUpdate
  };
}
function copyAlphaTest(alphaTest) {
  return {
    compareA: alphaTest.compareA,
    referenceA: alphaTest.referenceA,
    op: alphaTest.op,
    compareB: alphaTest.compareB,
    referenceB: alphaTest.referenceB
  };
}
var GXMaterialBuilder;
var init_GXMaterialBuilder = __esm({
  "noclip/gx/GXMaterialBuilder.ts"() {
    init_gx_enum();
    init_gx_render();
    GXMaterialBuilder = class {
      constructor(name = null) {
        this.name = name;
        this.reset();
      }
      name;
      cullMode;
      lightChannels = [];
      texGens = [];
      tevStages = [];
      indTexStages = [];
      alphaTest;
      ropInfo;
      usePnMtxIdx;
      hasDynamicAlphaTest;
      reset() {
        this.cullMode = 0 /* NONE */;
        this.lightChannels.length = 0;
        this.texGens.length = 0;
        this.tevStages.length = 0;
        this.indTexStages.length = 0;
        this.alphaTest = {};
        this.setAlphaCompare(7 /* ALWAYS */, 0, 0 /* AND */, 7 /* ALWAYS */, 0);
        this.ropInfo = {};
        this.setFog(0 /* NONE */, false);
        this.setBlendMode(0 /* NONE */, 4 /* SRCALPHA */, 5 /* INVSRCALPHA */, 0 /* CLEAR */);
        this.setZMode(true, 3 /* LEQUAL */, true);
        this.setColorUpdate(true);
        this.setAlphaUpdate(false);
        this.usePnMtxIdx = true;
        this.hasDynamicAlphaTest = false;
      }
      setCullMode(cullMode) {
        this.cullMode = cullMode;
      }
      ensureTexCoordGen(idx) {
        if (this.texGens[idx] === void 0)
          this.texGens[idx] = {};
        return this.texGens[idx];
      }
      setTexCoordGen(idx, type, source, matrix, normalize5 = false, postMatrix = 125 /* PTIDENTITY */) {
        const texGen = this.ensureTexCoordGen(idx);
        texGen.type = type;
        texGen.source = source;
        texGen.matrix = matrix;
        texGen.normalize = normalize5;
        texGen.postMatrix = postMatrix;
      }
      ensureLightChannel(idx) {
        if (this.lightChannels[idx] === void 0) {
          this.lightChannels[idx] = {
            colorChannel: {},
            alphaChannel: {}
          };
          this.setChanCtrlInternal(this.lightChannels[idx].colorChannel, false, 0 /* REG */, 0 /* REG */, 0, 0 /* NONE */, 2 /* NONE */);
          this.setChanCtrlInternal(this.lightChannels[idx].alphaChannel, false, 0 /* REG */, 0 /* REG */, 0, 0 /* NONE */, 2 /* NONE */);
        }
        return this.lightChannels[idx];
      }
      setChanCtrlInternal(chanCtrl, enable, ambSrc, matSrc, lightMask, diffFn, attnFn) {
        chanCtrl.lightingEnabled = enable;
        chanCtrl.ambColorSource = ambSrc;
        chanCtrl.matColorSource = matSrc;
        chanCtrl.litMask = lightMask;
        chanCtrl.diffuseFunction = diffFn;
        chanCtrl.attenuationFunction = attnFn;
      }
      setChanCtrl(idx, enable, ambSrc, matSrc, lightMask, diffFn, attnFn) {
        const lightChannel = this.ensureLightChannel(idx & 1);
        const set6 = (idx >>> 1) + 1;
        if (!!(set6 & 1))
          this.setChanCtrlInternal(lightChannel.colorChannel, enable, ambSrc, matSrc, lightMask, diffFn, attnFn);
        if (!!(set6 & 2))
          this.setChanCtrlInternal(lightChannel.alphaChannel, enable, ambSrc, matSrc, lightMask, diffFn, attnFn);
      }
      ensureTevStage(idx) {
        if (this.tevStages[idx] === void 0) {
          this.tevStages[idx] = {};
          if (idx <= 7)
            this.setTevOrder(idx, 0 /* TEXCOORD0 */ + idx, 0 /* TEXMAP0 */ + idx, 0 /* COLOR0A0 */);
          else
            this.setTevOrder(idx, 255 /* TEXCOORD_NULL */, 255 /* TEXMAP_NULL */, 0 /* COLOR0A0 */);
          this.setTevColorOp(idx, 0 /* ADD */, 0 /* ZERO */, 0 /* SCALE_1 */, true, 0 /* PREV */), this.setTevAlphaOp(idx, 0 /* ADD */, 0 /* ZERO */, 0 /* SCALE_1 */, true, 0 /* PREV */), this.setTevColorIn(idx, 15 /* ZERO */, 15 /* ZERO */, 15 /* ZERO */, 8 /* TEXC */), this.setTevAlphaIn(idx, 7 /* ZERO */, 7 /* ZERO */, 7 /* ZERO */, 4 /* TEXA */), this.setTevKColorSel(idx, 6 /* KCSEL_2_8 */);
          this.setTevKAlphaSel(idx, 0 /* KASEL_1 */);
          this.setTevDirect(idx);
        }
        return this.tevStages[idx];
      }
      setTevOrder(idx, texCoordID, texMap, channelId) {
        const tevStage = this.ensureTevStage(idx);
        tevStage.texCoordId = texCoordID;
        tevStage.texMap = texMap;
        tevStage.channelId = channelId;
      }
      setTevColorOp(idx, colorOp, colorBias, colorScale, colorClamp2, colorRegId) {
        const tevStage = this.ensureTevStage(idx);
        tevStage.colorOp = colorOp;
        tevStage.colorBias = colorBias;
        tevStage.colorScale = colorScale;
        tevStage.colorClamp = colorClamp2;
        tevStage.colorRegId = colorRegId;
      }
      setTevAlphaOp(idx, alphaOp, alphaBias, alphaScale, alphaClamp, alphaRegId) {
        const tevStage = this.ensureTevStage(idx);
        tevStage.alphaOp = alphaOp;
        tevStage.alphaBias = alphaBias;
        tevStage.alphaScale = alphaScale;
        tevStage.alphaClamp = alphaClamp;
        tevStage.alphaRegId = alphaRegId;
      }
      setTevColorIn(idx, colorInA, colorInB, colorInC, colorInD) {
        const tevStage = this.ensureTevStage(idx);
        tevStage.colorInA = colorInA;
        tevStage.colorInB = colorInB;
        tevStage.colorInC = colorInC;
        tevStage.colorInD = colorInD;
      }
      setTevAlphaIn(idx, alphaInA, alphaInB, alphaInC, alphaInD) {
        const tevStage = this.ensureTevStage(idx);
        tevStage.alphaInA = alphaInA;
        tevStage.alphaInB = alphaInB;
        tevStage.alphaInC = alphaInC;
        tevStage.alphaInD = alphaInD;
      }
      setTevKColorSel(idx, sel) {
        const tevStage = this.ensureTevStage(idx);
        tevStage.konstColorSel = sel;
      }
      setTevKAlphaSel(idx, sel) {
        const tevStage = this.ensureTevStage(idx);
        tevStage.konstAlphaSel = sel;
      }
      setTevSwapMode(idx, rasSwapTable, texSwapTable) {
        const tevStage = this.ensureTevStage(idx);
        tevStage.rasSwapTable = rasSwapTable;
        tevStage.texSwapTable = texSwapTable;
      }
      setTevIndirect(tevStageIdx, indTexStage, format, biasSel, matrixSel, wrapS, wrapT, addPrev, utcLod, alphaSel) {
        const tevStage = this.ensureTevStage(tevStageIdx);
        tevStage.indTexStage = indTexStage;
        tevStage.indTexFormat = format;
        tevStage.indTexBiasSel = biasSel;
        tevStage.indTexAlphaSel = alphaSel;
        tevStage.indTexMatrix = matrixSel;
        tevStage.indTexWrapS = wrapS;
        tevStage.indTexWrapT = wrapT;
        tevStage.indTexAddPrev = addPrev;
        tevStage.indTexUseOrigLOD = utcLod;
      }
      setTevIndWarp(tevStageIdx, indTexStage, signedOffsets, replaceMode, matrixSel) {
        const biasSel = signedOffsets ? 3 /* ST */ : 0 /* NONE */;
        const wrap = replaceMode ? 6 /* _0 */ : 0 /* OFF */;
        this.setTevIndirect(tevStageIdx, indTexStage, 0 /* _8 */, biasSel, matrixSel, wrap, wrap, false, false, 0 /* OFF */);
      }
      setTevDirect(tevStageIdx) {
        this.setTevIndirect(tevStageIdx, 0 /* STAGE0 */, 0 /* _8 */, 0 /* NONE */, 0 /* OFF */, 0 /* OFF */, 0 /* OFF */, false, false, 0 /* OFF */);
      }
      ensureIndTexStage(idx) {
        if (this.indTexStages[idx] === void 0) {
          this.indTexStages[idx] = {};
          this.setIndTexScale(idx, 0 /* _1 */, 0 /* _1 */);
        }
        return this.indTexStages[idx];
      }
      setIndTexOrder(idx, texcoord, texmap) {
        const indStage = this.ensureIndTexStage(idx);
        indStage.texCoordId = texcoord;
        indStage.texture = texmap;
      }
      setIndTexScale(idx, scaleS, scaleT) {
        const indStage = this.ensureIndTexStage(idx);
        indStage.scaleS = scaleS;
        indStage.scaleT = scaleT;
      }
      setAlphaCompare(compareA, referenceA, op, compareB, referenceB) {
        this.alphaTest.compareA = compareA;
        this.alphaTest.referenceA = referenceA / 255;
        this.alphaTest.op = op;
        this.alphaTest.compareB = compareB;
        this.alphaTest.referenceB = referenceB / 255;
      }
      setFog(fogType, fogAdjEnabled) {
        this.ropInfo.fogType = fogType;
        this.ropInfo.fogAdjEnabled = fogAdjEnabled;
      }
      setBlendMode(blendMode, srcFactor, dstFactor, logicOp = 0 /* CLEAR */) {
        this.ropInfo.blendMode = blendMode;
        this.ropInfo.blendSrcFactor = srcFactor;
        this.ropInfo.blendDstFactor = dstFactor;
        this.ropInfo.blendLogicOp = logicOp;
      }
      setZMode(depthTest, depthFunc, depthWrite) {
        this.ropInfo.depthTest = depthTest;
        this.ropInfo.depthFunc = depthFunc;
        this.ropInfo.depthWrite = depthWrite;
      }
      setDstAlpha(v) {
        this.ropInfo.dstAlpha = v;
      }
      setColorUpdate(v) {
        this.ropInfo.colorUpdate = v;
      }
      setAlphaUpdate(v) {
        this.ropInfo.alphaUpdate = v;
      }
      setUsePnMtxIdx(v) {
        this.usePnMtxIdx = v;
      }
      setDynamicAlphaTest(v) {
        this.hasDynamicAlphaTest = v;
      }
      setTexGenFromRegisters(r, i) {
        const v = r.xfGet(4160 /* XF_TEX0_ID */ + i);
        let TexProjection;
        ((TexProjection2) => {
          TexProjection2[TexProjection2["ST"] = 0] = "ST";
          TexProjection2[TexProjection2["STQ"] = 1] = "STQ";
        })(TexProjection || (TexProjection = {}));
        let TexForm;
        ((TexForm2) => {
          TexForm2[TexForm2["AB11"] = 0] = "AB11";
          TexForm2[TexForm2["ABC1"] = 1] = "ABC1";
        })(TexForm || (TexForm = {}));
        let TexGenType2;
        ((TexGenType3) => {
          TexGenType3[TexGenType3["REGULAR"] = 0] = "REGULAR";
          TexGenType3[TexGenType3["EMBOSS_MAP"] = 1] = "EMBOSS_MAP";
          TexGenType3[TexGenType3["COLOR_STRGBC0"] = 2] = "COLOR_STRGBC0";
          TexGenType3[TexGenType3["COLOR_STRGBC1"] = 2] = "COLOR_STRGBC1";
        })(TexGenType2 || (TexGenType2 = {}));
        let TexSourceRow;
        ((TexSourceRow2) => {
          TexSourceRow2[TexSourceRow2["GEOM"] = 0] = "GEOM";
          TexSourceRow2[TexSourceRow2["NRM"] = 1] = "NRM";
          TexSourceRow2[TexSourceRow2["CLR"] = 2] = "CLR";
          TexSourceRow2[TexSourceRow2["BNT"] = 3] = "BNT";
          TexSourceRow2[TexSourceRow2["BNB"] = 4] = "BNB";
          TexSourceRow2[TexSourceRow2["TEX0"] = 5] = "TEX0";
          TexSourceRow2[TexSourceRow2["TEX1"] = 6] = "TEX1";
          TexSourceRow2[TexSourceRow2["TEX2"] = 7] = "TEX2";
          TexSourceRow2[TexSourceRow2["TEX3"] = 8] = "TEX3";
          TexSourceRow2[TexSourceRow2["TEX4"] = 9] = "TEX4";
          TexSourceRow2[TexSourceRow2["TEX5"] = 10] = "TEX5";
          TexSourceRow2[TexSourceRow2["TEX6"] = 11] = "TEX6";
          TexSourceRow2[TexSourceRow2["TEX7"] = 12] = "TEX7";
        })(TexSourceRow || (TexSourceRow = {}));
        const proj = v >>> 1 & 1;
        const form = v >>> 2 & 1;
        const tgType = v >>> 4 & 2;
        const src = v >>> 7 & 15;
        const embossSrc = v >>> 12 & 7;
        const embossLgt = v >>> 15 & 7;
        let texGenType;
        let texGenSrc;
        if (tgType === 0 /* REGULAR */) {
          const srcLookup = [
            0 /* POS */,
            1 /* NRM */,
            19 /* COLOR0 */,
            2 /* BINRM */,
            3 /* TANGENT */,
            4 /* TEX0 */,
            5 /* TEX1 */,
            6 /* TEX2 */,
            7 /* TEX3 */,
            8 /* TEX4 */,
            9 /* TEX5 */,
            10 /* TEX6 */,
            11 /* TEX7 */
          ];
          texGenType = proj === 0 /* ST */ ? 1 /* MTX2x4 */ : 0 /* MTX3x4 */;
          texGenSrc = srcLookup[src];
        } else if (tgType === 1 /* EMBOSS_MAP */) {
          texGenType = 2 /* BUMP0 */ + embossLgt;
          texGenSrc = 12 /* TEXCOORD0 */ + embossSrc;
        } else if (tgType === 2 /* COLOR_STRGBC0 */) {
          texGenType = 10 /* SRTG */;
          texGenSrc = 19 /* COLOR0 */;
        } else if (tgType === 2 /* COLOR_STRGBC1 */) {
          texGenType = 10 /* SRTG */;
          texGenSrc = 20 /* COLOR1 */;
        } else {
          throw new Error("whoops");
        }
        const matrix = 60 /* IDENTITY */;
        const dv = r.xfGet(4176 /* XF_DUALTEX0_ID */ + i);
        const postMatrix = (dv >>> 0 & 255) + 64 /* PTTEXMTX0 */;
        const normalize5 = !!(dv >>> 8 & 1);
        this.setTexCoordGen(i, texGenType, texGenSrc, matrix, normalize5, postMatrix);
      }
      setColorChannelFromRegisters(r, i) {
        const colorCntrl = r.xfGet(4110 /* XF_COLOR0CNTRL_ID */ + i);
        const alphaCntrl = r.xfGet(4112 /* XF_ALPHA0CNTRL_ID */ + i);
        const setChanCtrl = (dst, chanCtrl) => {
          const matColorSource = chanCtrl >>> 0 & 1;
          const lightingEnabled = !!(chanCtrl >>> 1 & 1);
          const litMaskL = chanCtrl >>> 2 & 15;
          const ambColorSource = chanCtrl >>> 6 & 1;
          const diffuseFunction = chanCtrl >>> 7 & 3;
          const attnEn = !!(chanCtrl >>> 9 & 1);
          const attnSelect = !!(chanCtrl >>> 10 & 1);
          const litMaskH = chanCtrl >>> 11 & 15;
          const litMask = litMaskH << 4 | litMaskL;
          const attenuationFunction = attnEn ? attnSelect ? 1 /* SPOT */ : 0 /* SPEC */ : 2 /* NONE */;
          this.setChanCtrlInternal(dst, lightingEnabled, ambColorSource, matColorSource, litMask, diffuseFunction, attenuationFunction);
        };
        const dstChannel = this.ensureLightChannel(i);
        setChanCtrl(dstChannel.colorChannel, colorCntrl);
        setChanCtrl(dstChannel.alphaChannel, alphaCntrl);
      }
      setTevStageFromRegisters(r, i) {
        const v = r.bp[40 /* RAS1_TREF_0_ID */ + (i >>> 1)];
        const ti = v >>> (i & 1 ? 12 : 0) & 7;
        const tc = v >>> (i & 1 ? 15 : 3) & 7;
        const te = !!(v >>> (i & 1 ? 18 : 6) & 1);
        const cc = v >>> (i & 1 ? 19 : 7) & 7;
        this.setTevOrder(i, tc, te ? ti : 255 /* TEXMAP_NULL */, cc);
        const color = r.bp[192 /* TEV_COLOR_ENV_0_ID */ + i * 2];
        const colorInD = color >>> 0 & 15;
        const colorInC = color >>> 4 & 15;
        const colorInB = color >>> 8 & 15;
        const colorInA = color >>> 12 & 15;
        const colorBias = color >>> 16 & 3;
        const colorSub = !!(color >>> 18 & 1);
        const colorClamp2 = !!(color >>> 19 & 1);
        const colorScale = color >>> 20 & 3;
        const colorRegId = color >>> 22 & 3;
        const colorOp = findTevOp(colorBias, colorScale, colorSub);
        function findTevOp(bias, scale6, sub5) {
          if (bias === 3 /* $HWB_COMPARE */) {
            switch (scale6) {
              case 0 /* $HWB_R8 */:
                return sub5 ? 9 /* COMP_R8_EQ */ : 8 /* COMP_R8_GT */;
              case 1 /* $HWB_GR16 */:
                return sub5 ? 11 /* COMP_GR16_EQ */ : 10 /* COMP_GR16_GT */;
              case 2 /* $HWB_BGR24 */:
                return sub5 ? 13 /* COMP_BGR24_EQ */ : 12 /* COMP_BGR24_GT */;
              case 3 /* $HWB_RGB8 */:
                return sub5 ? 15 /* COMP_RGB8_EQ */ : 14 /* COMP_RGB8_GT */;
              default:
                throw new Error("whoops 2");
            }
          } else {
            return sub5 ? 1 /* SUB */ : 0 /* ADD */;
          }
        }
        const alpha = r.bp[193 /* TEV_ALPHA_ENV_0_ID */ + i * 2];
        const rswap = alpha >>> 0 & 3;
        const tswap = alpha >>> 2 & 3;
        const alphaInD = alpha >>> 4 & 7;
        const alphaInC = alpha >>> 7 & 7;
        const alphaInB = alpha >>> 10 & 7;
        const alphaInA = alpha >>> 13 & 7;
        const alphaBias = alpha >>> 16 & 3;
        const alphaSub = !!(alpha >>> 18 & 1);
        const alphaClamp = !!(alpha >>> 19 & 1);
        const alphaScale = alpha >>> 20 & 3;
        const alphaRegId = alpha >>> 22 & 3;
        const alphaOp = findTevOp(alphaBias, alphaScale, alphaSub);
        this.setTevColorIn(i, colorInA, colorInB, colorInC, colorInD);
        this.setTevColorOp(i, colorOp, colorBias, colorScale, colorClamp2, colorRegId);
        this.setTevAlphaIn(i, alphaInA, alphaInB, alphaInC, alphaInD);
        this.setTevAlphaOp(i, alphaOp, alphaBias, alphaScale, alphaClamp, alphaRegId);
        const ksel = r.bp[246 /* TEV_KSEL_0_ID */ + (i >>> 1)];
        const konstColorSel = (i & 1 ? ksel >>> 14 : ksel >>> 4) & 31;
        const konstAlphaSel = (i & 1 ? ksel >>> 19 : ksel >>> 9) & 31;
        this.setTevKColorSel(i, konstColorSel);
        this.setTevKAlphaSel(i, konstAlphaSel);
        const indCmd = r.bp[16 /* IND_CMD0_ID */ + i];
        const indTexStage = indCmd >>> 0 & 3;
        const indTexFormat = indCmd >>> 2 & 3;
        const indTexBiasSel = indCmd >>> 4 & 7;
        const indTexAlphaSel = indCmd >>> 7 & 3;
        const indTexMatrix = indCmd >>> 9 & 15;
        const indTexWrapS = indCmd >>> 13 & 7;
        const indTexWrapT = indCmd >>> 16 & 7;
        const indTexUseOrigLOD = !!(indCmd >>> 19 & 1);
        const indTexAddPrev = !!(indCmd >>> 20 & 1);
        this.setTevIndirect(i, indTexStage, indTexFormat, indTexBiasSel, indTexMatrix, indTexWrapS, indTexWrapT, indTexAddPrev, indTexUseOrigLOD, indTexAlphaSel);
        const rasSwapTableRG = r.bp[246 /* TEV_KSEL_0_ID */ + rswap * 2];
        const rasSwapTableBA = r.bp[246 /* TEV_KSEL_0_ID */ + rswap * 2 + 1];
        const rasSwapTable = [
          rasSwapTableRG >>> 0 & 3,
          rasSwapTableRG >>> 2 & 3,
          rasSwapTableBA >>> 0 & 3,
          rasSwapTableBA >>> 2 & 3
        ];
        const texSwapTableRG = r.bp[246 /* TEV_KSEL_0_ID */ + tswap * 2];
        const texSwapTableBA = r.bp[246 /* TEV_KSEL_0_ID */ + tswap * 2 + 1];
        const texSwapTable = [
          texSwapTableRG >>> 0 & 3,
          texSwapTableRG >>> 2 & 3,
          texSwapTableBA >>> 0 & 3,
          texSwapTableBA >>> 2 & 3
        ];
        this.setTevSwapMode(i, rasSwapTable, texSwapTable);
      }
      setIndTexStageFromRegisters(r, i) {
        const iref = r.bp[39 /* RAS1_IREF_ID */];
        const ss = r.bp[37 /* RAS1_SS0_ID */ + (i >>> 2)];
        const scaleS = ss >>> 8 * (i & 1) + 0 & 15;
        const scaleT = ss >>> 8 * (i & 1) + 4 & 15;
        const texture = iref >>> 6 * i & 7;
        const texCoordId = iref >>> 6 * i & 7;
        this.setIndTexOrder(i, texCoordId, texture);
        this.setIndTexScale(i, scaleS, scaleT);
      }
      setRopStateFromRegisters(r) {
        const fogType = 0 /* NONE */;
        const fogAdjEnabled = false;
        if (r.bpRegIsSet(65 /* PE_CMODE0_ID */)) {
          const cm0 = r.bp[65 /* PE_CMODE0_ID */];
          const bmboe = cm0 >>> 0 & 1;
          const bmloe = cm0 >>> 1 & 1;
          const colorUpdate = !!(cm0 >>> 3 & 1);
          const alphaUpdate = !!(cm0 >>> 4 & 1);
          this.setColorUpdate(colorUpdate);
          this.setAlphaUpdate(alphaUpdate);
          const bmbop = cm0 >>> 11 & 1;
          const blendMode = bmboe ? bmbop ? 3 /* SUBTRACT */ : 1 /* BLEND */ : bmloe ? 2 /* LOGIC */ : 0 /* NONE */;
          ;
          const blendDstFactor = cm0 >>> 5 & 7;
          const blendSrcFactor = cm0 >>> 8 & 7;
          const blendLogicOp = cm0 >>> 12 & 15;
          this.setBlendMode(blendMode, blendSrcFactor, blendDstFactor, blendLogicOp);
        }
        if (r.bpRegIsSet(64 /* PE_ZMODE_ID */)) {
          const zm = r.bp[64 /* PE_ZMODE_ID */];
          const depthTest = !!(zm >>> 0 & 1);
          const depthFunc = zm >>> 1 & 7;
          const depthWrite = !!(zm >>> 4 & 1);
          this.setZMode(depthTest, depthFunc, depthWrite);
        }
        if (r.bpRegIsSet(243 /* TEV_ALPHAFUNC_ID */)) {
          const ap = r.bp[243 /* TEV_ALPHAFUNC_ID */];
          const refA = ap >>> 0 & 255;
          const refB = ap >>> 8 & 255;
          const compareA = ap >>> 16 & 7;
          const compareB = ap >>> 19 & 7;
          const op = ap >>> 22 & 7;
          this.setAlphaCompare(compareA, refA, op, compareB, refB);
        }
        if (r.bpRegIsSet(0 /* GEN_MODE_ID */)) {
          const genMode = r.bp[0 /* GEN_MODE_ID */];
          const hw2cm = [0 /* NONE */, 2 /* BACK */, 1 /* FRONT */, 3 /* ALL */];
          const cullMode = hw2cm[genMode >>> 14 & 3];
          this.setCullMode(cullMode);
        }
      }
      setFromRegisters(r) {
        const genMode = r.bp[0 /* GEN_MODE_ID */];
        const numTexGens = genMode >>> 0 & 15;
        for (let i = 0; i < numTexGens; i++)
          this.setTexGenFromRegisters(r, i);
        const numTevStages = (genMode >>> 10 & 15) + 1;
        for (let i = 0; i < numTevStages; i++)
          this.setTevStageFromRegisters(r, i);
        const numInds = genMode >>> 16 & 7;
        for (let i = 0; i < numInds; i++)
          this.setIndTexStageFromRegisters(r, i);
        const numColors = r.xfGet(4105 /* XF_NUMCOLORS_ID */);
        for (let i = 0; i < numColors; i++)
          this.setColorChannelFromRegisters(r, i);
        this.setRopStateFromRegisters(r);
      }
      finish(name = null) {
        if (name === null)
          name = this.name;
        if (name === null)
          name = "";
        const material = {
          name,
          cullMode: this.cullMode,
          lightChannels: this.lightChannels.map(copyLightChannelControl),
          texGens: this.texGens.map(copyTexGen),
          tevStages: this.tevStages.map(copyTevStage),
          indTexStages: this.indTexStages.map(copyIndTexStage),
          alphaTest: copyAlphaTest(this.alphaTest),
          ropInfo: copyRopInfo(this.ropInfo),
          usePnMtxIdx: this.usePnMtxIdx,
          hasDynamicAlphaTest: this.hasDynamicAlphaTest
        };
        autoOptimizeMaterial(material);
        return material;
      }
    };
  }
});

// noclip/Common/NW4R/lyt/Font.ts
function parseBRFNT(buffer) {
  const view = buffer.createDataView();
  assert(readString(buffer, 0, 4) === "RFNT");
  const littleEndianMarker = view.getUint16(4);
  assert(littleEndianMarker === 65279 || littleEndianMarker === 65534);
  const littleEndian = littleEndianMarker === 65534;
  assert(!littleEndian);
  const fileVersion = view.getUint16(6);
  assert(fileVersion === 260);
  const fileLength = view.getUint32(8);
  const rootSectionOffs = view.getUint16(12);
  const numSections = view.getUint16(14);
  let tableIdx = rootSectionOffs + 0;
  let finf = null;
  let tglp = null;
  let defaultCWDH = null;
  const cmap = new Uint16Array(65536).fill(65535);
  const glyphInfo = [];
  for (let i = 0; i < numSections; i++) {
    const blockOffs = tableIdx;
    const fourcc = readString(buffer, blockOffs + 0, 4, false);
    const blockSize = view.getUint32(blockOffs + 4);
    const blockContentsOffs = blockOffs + 8;
    if (fourcc === "FINF") {
      const fontType = view.getUint8(blockContentsOffs + 0);
      assert(fontType === 1 /* Texture */);
      const advanceHeight = view.getUint8(blockContentsOffs + 1);
      const defaultGlyphIndex = view.getUint16(blockContentsOffs + 2);
      const defaultLeftSideBearing = view.getInt8(blockContentsOffs + 4);
      const defaultWidth = view.getUint8(blockContentsOffs + 5);
      const defaultAdvanceWidth = view.getInt8(blockContentsOffs + 6);
      defaultCWDH = {
        leftSideBearing: defaultLeftSideBearing,
        width: defaultWidth,
        advanceWidth: defaultAdvanceWidth
      };
      const encoding = view.getUint8(blockContentsOffs + 7);
      assert(encoding === 1 /* UTF16 */);
      const height = view.getUint8(blockContentsOffs + 20);
      const width = view.getUint8(blockContentsOffs + 21);
      const ascent = view.getUint8(blockContentsOffs + 22);
      finf = { advanceHeight, encoding, width, height, ascent, defaultGlyphIndex };
    } else if (fourcc === "TGLP") {
      const glyphCellW = view.getUint8(blockContentsOffs + 0);
      const glyphCellH = view.getUint8(blockContentsOffs + 1);
      const glyphBaseline = view.getUint8(blockContentsOffs + 2);
      const glyphW2 = view.getUint8(blockContentsOffs + 3);
      const texDataSize = view.getUint32(blockContentsOffs + 4);
      const texCount = view.getUint16(blockContentsOffs + 8);
      const texFormat = view.getUint16(blockContentsOffs + 10);
      const textureGlyphNumX = view.getUint16(blockContentsOffs + 12);
      const textureGlyphNumY = view.getUint16(blockContentsOffs + 14);
      const texW = view.getUint16(blockContentsOffs + 16);
      const texH = view.getUint16(blockContentsOffs + 18);
      const texDataOffs = view.getUint32(blockContentsOffs + 20);
      const textures = [];
      let texDataIdx = texDataOffs;
      let glyphIndex = 0;
      for (let i2 = 0; i2 < texCount; i2++, texDataIdx += texDataSize) {
        const textureIndex = i2;
        textures.push({
          name: `${buffer.name} Texture ${i2}`,
          width: texW,
          height: texH,
          format: texFormat,
          data: buffer.subarray(texDataIdx, texDataSize),
          mipCount: 1
        });
        for (let y = 0; y < textureGlyphNumY; y++) {
          const t0 = y * (glyphCellH + 1) / texH;
          const t1 = (y * (glyphCellH + 1) + glyphCellH) / texH;
          for (let x = 0; x < textureGlyphNumX; x++) {
            const s0 = x * (glyphCellW + 1) / texW;
            const s1b = x * (glyphCellW + 1);
            const s1m = 1 / texW;
            glyphInfo[glyphIndex++] = { textureIndex, s0, t0, s1b, s1m, t1, cwdh: defaultCWDH };
          }
        }
      }
      tglp = { glyphBaseline, textures };
    } else if (fourcc === "CWDH") {
      const glyphStart = view.getUint16(blockContentsOffs + 0);
      const glyphEnd = view.getUint16(blockContentsOffs + 2);
      let tableIdx2 = blockContentsOffs + 8;
      for (let i2 = glyphStart; i2 <= glyphEnd; i2++, tableIdx2 += 3) {
        const leftSideBearing = view.getInt8(tableIdx2 + 0);
        const width = view.getUint8(tableIdx2 + 1);
        const advanceWidth = view.getInt8(tableIdx2 + 2);
        glyphInfo[i2].cwdh = { leftSideBearing, width, advanceWidth };
      }
    } else if (fourcc === "CMAP") {
      const codeStart = view.getUint16(blockContentsOffs + 0);
      const codeEnd = view.getUint16(blockContentsOffs + 2);
      const kind = view.getUint16(blockContentsOffs + 4);
      if (kind === 0 /* Offset */) {
        const offset = view.getUint16(blockContentsOffs + 12);
        for (let i2 = codeStart; i2 <= codeEnd; i2++)
          cmap[i2] = i2 - codeStart + offset;
      } else if (kind === 1 /* Array */) {
        let tableIdx2 = blockContentsOffs + 12;
        for (let i2 = codeStart; i2 <= codeEnd; i2++, tableIdx2 += 2)
          cmap[i2] = view.getUint16(tableIdx2 + 0);
      } else if (kind === 2 /* Dict */) {
        const entryNum = view.getUint16(blockContentsOffs + 12);
        let tableIdx2 = blockContentsOffs + 10;
        for (let i2 = 0; i2 <= entryNum; i2++, tableIdx2 += 4)
          cmap[view.getUint16(tableIdx2 + 0)] = view.getUint16(tableIdx2 + 2);
      }
    } else {
      throw new Error("whoops");
    }
    tableIdx += blockSize;
  }
  return {
    ...assertExists(finf),
    ...assertExists(tglp),
    name: buffer.name,
    cmap,
    glyphInfo
  };
}
function glyphIndexFromChar(rfnt, char) {
  const glyphIndex = rfnt.cmap[char];
  if (glyphIndex === 65535)
    return rfnt.defaultGlyphIndex;
  return glyphIndex;
}
var ResFont, materialParams, CharWriter;
var init_Font = __esm({
  "noclip/Common/NW4R/lyt/Font.ts"() {
    init_util();
    init_gx_enum();
    init_gx_texture();
    init_GfxPlatform();
    init_gx_render();
    init_GXMaterialBuilder();
    init_Color();
    init_esm();
    ResFont = class {
      constructor(device2, rfnt) {
        this.rfnt = rfnt;
        for (let i = 0; i < this.rfnt.textures.length; i++) {
          const mipChain = calcMipChain(this.rfnt.textures[i]);
          const loadedTexture = loadTextureFromMipChain(device2, mipChain);
          this.gfxTextures.push(loadedTexture.gfxTexture);
          this.viewerTextures.push(loadedTexture.viewerTexture);
        }
        const mb = new GXMaterialBuilder(this.rfnt.name);
        mb.setChanCtrl(4 /* COLOR0A0 */, false, 0 /* REG */, 1 /* VTX */, 0, 0 /* NONE */, 2 /* NONE */);
        mb.setTexCoordGen(0 /* TEXCOORD0 */, 1 /* MTX2x4 */, 4 /* TEX0 */, 60 /* IDENTITY */);
        mb.setTevOrder(0, 0 /* TEXCOORD0 */, 0 /* TEXMAP0 */, 7 /* COLOR_ZERO */);
        mb.setTevColorIn(0, 2 /* C0 */, 4 /* C1 */, 8 /* TEXC */, 15 /* ZERO */);
        mb.setTevAlphaIn(0, 1 /* A0 */, 2 /* A1 */, 4 /* TEXA */, 7 /* ZERO */);
        mb.setTevColorOp(0, 0 /* ADD */, 0 /* ZERO */, 0 /* SCALE_1 */, true, 0 /* PREV */);
        mb.setTevAlphaOp(0, 0 /* ADD */, 0 /* ZERO */, 0 /* SCALE_1 */, true, 0 /* PREV */);
        mb.setTevOrder(1, 255 /* TEXCOORD_NULL */, 255 /* TEXMAP_NULL */, 0 /* COLOR0A0 */);
        mb.setTevColorIn(1, 15 /* ZERO */, 0 /* CPREV */, 10 /* RASC */, 15 /* ZERO */);
        mb.setTevAlphaIn(1, 7 /* ZERO */, 0 /* APREV */, 5 /* RASA */, 7 /* ZERO */);
        mb.setTevColorOp(1, 0 /* ADD */, 0 /* ZERO */, 0 /* SCALE_1 */, true, 0 /* PREV */);
        mb.setTevAlphaOp(1, 0 /* ADD */, 0 /* ZERO */, 0 /* SCALE_1 */, true, 0 /* PREV */);
        mb.setZMode(false, 7 /* ALWAYS */, false);
        mb.setBlendMode(1 /* BLEND */, 4 /* SRCALPHA */, 5 /* INVSRCALPHA */);
        mb.setUsePnMtxIdx(false);
        this.materialHelper = new GXMaterialHelperGfx(mb.finish());
      }
      rfnt;
      gfxTextures = [];
      viewerTextures = [];
      materialHelper;
      destroy(device2) {
        for (let i = 0; i < this.gfxTextures.length; i++)
          device2.destroyTexture(this.gfxTextures[i]);
      }
    };
    materialParams = new MaterialParams();
    CharWriter = class {
      font;
      cursor = vec3_exports.create();
      origin = vec3_exports.create();
      scale = vec3_exports.create();
      charSpacing = 0;
      lineHeight = 0;
      numVertex = 0;
      // Gradient colors
      colorT = colorNewCopy(White);
      colorB = colorNewCopy(White);
      // BG/FG mapping colors
      color0 = colorNewCopy(TransparentBlack);
      color1 = colorNewCopy(White);
      materialChanged = false;
      textureMapping = nArray(1, () => new GXTextureMapping());
      setFont(font, charSpacing = null, lineHeight = null, fontWidth = null, fontHeight = null) {
        this.font = font;
        const rfnt = this.font.rfnt;
        this.scale[0] = fontWidth !== null ? fontWidth / rfnt.width : 1;
        this.scale[1] = fontHeight !== null ? fontHeight / rfnt.height : 1;
        if (charSpacing !== null)
          this.charSpacing = charSpacing;
        if (lineHeight !== null)
          this.lineHeight = lineHeight;
      }
      setColorMapping(color0, color1 = color0) {
        colorCopy(this.color0, color0);
        colorCopy(this.color1, color1);
        this.materialChanged = true;
      }
      getScaledLineHeight() {
        return this.lineHeight + this.font.rfnt.advanceHeight * this.scale[1];
      }
      calcRectFromCursor(dst) {
        dst[0] = Math.min(dst[0], this.cursor[0]);
        dst[1] = Math.min(dst[1], this.cursor[1]);
        dst[2] = Math.max(dst[2], this.cursor[0]);
        dst[3] = Math.max(dst[3], this.cursor[1]);
      }
      advanceCharacter(dst, char, addSpacing) {
        if (addSpacing)
          this.cursor[0] += this.charSpacing;
        const glyphIndex = glyphIndexFromChar(this.font.rfnt, char);
        const glyphInfo = this.font.rfnt.glyphInfo[glyphIndex];
        this.cursor[0] += glyphInfo.cwdh.advanceWidth * this.scale[0];
        this.calcRectFromCursor(dst);
        this.numVertex += 4;
      }
      calcRect(dst, str6, tagProcessor = null) {
        let needsSpacing = false;
        this.numVertex = 0;
        dst[0] = this.cursor[0];
        dst[1] = this.cursor[1];
        dst[2] = this.cursor[0];
        dst[3] = this.cursor[1];
        if (tagProcessor !== null)
          tagProcessor.reset(this, dst);
        for (let i = 0; i < str6.length; i++) {
          const char = str6.charCodeAt(i);
          if (char < 32) {
            if (tagProcessor !== null)
              i = tagProcessor.processTag(this, dst, str6, i) - 1;
            continue;
          }
          this.advanceCharacter(dst, char, needsSpacing);
          needsSpacing = true;
        }
        this.cursor[1] -= this.getScaledLineHeight();
        this.calcRectFromCursor(dst);
      }
      drawStringGlyph(ddraw, glyf) {
        const rfnt = this.font.rfnt;
        const cwdh = glyf.cwdh;
        const x0 = this.cursor[0] + cwdh.leftSideBearing * this.scale[0];
        const x1 = x0 + cwdh.width * this.scale[0];
        const y0 = this.cursor[1] - (rfnt.ascent - rfnt.glyphBaseline) * this.scale[1];
        const y1 = y0 - rfnt.height * this.scale[1];
        const z = this.cursor[2];
        const s1 = (glyf.s1b + glyf.cwdh.width) * glyf.s1m;
        ddraw.begin(128 /* DRAW_QUADS */, 4);
        ddraw.position3f32(x0, y0, z);
        ddraw.color4color(11 /* CLR0 */, this.colorT);
        ddraw.texCoord2f32(13 /* TEX0 */, glyf.s0, glyf.t0);
        ddraw.position3f32(x1, y0, z);
        ddraw.color4color(11 /* CLR0 */, this.colorT);
        ddraw.texCoord2f32(13 /* TEX0 */, s1, glyf.t0);
        ddraw.position3f32(x1, y1, z);
        ddraw.color4color(11 /* CLR0 */, this.colorB);
        ddraw.texCoord2f32(13 /* TEX0 */, s1, glyf.t1);
        ddraw.position3f32(x0, y1, z);
        ddraw.color4color(11 /* CLR0 */, this.colorB);
        ddraw.texCoord2f32(13 /* TEX0 */, glyf.s0, glyf.t1);
        ddraw.end();
      }
      drawStringFlush(renderInstManager, ddraw) {
        if (!ddraw.hasIndicesToDraw())
          return;
        const renderInst = ddraw.makeRenderInst(renderInstManager);
        renderInst.setSamplerBindingsFromTextureMappings(this.textureMapping);
        renderInstManager.submitRenderInst(renderInst);
      }
      makeMaterialUBO(template) {
        colorCopy(materialParams.u_Color[9 /* C0 */], this.color0);
        colorCopy(materialParams.u_Color[10 /* C1 */], this.color1);
        this.font.materialHelper.allocateMaterialParamsDataOnInst(template, materialParams);
      }
      renderInstManager;
      ddraw;
      writeCharacter(char, addSpacing) {
        if (addSpacing)
          this.cursor[0] += this.charSpacing;
        const glyphIndex = glyphIndexFromChar(this.font.rfnt, char);
        const glyphInfo = this.font.rfnt.glyphInfo[glyphIndex];
        const gfxTexture = this.font.gfxTextures[glyphInfo.textureIndex];
        const textureChanged = gfxTexture !== this.textureMapping[0].gfxTexture;
        if (textureChanged || this.materialChanged) {
          this.drawStringFlush(this.renderInstManager, this.ddraw);
          if (textureChanged)
            this.textureMapping[0].gfxTexture = gfxTexture;
          if (this.materialChanged) {
            this.makeMaterialUBO(this.renderInstManager.getCurrentTemplate());
            this.materialChanged = false;
          }
        }
        this.drawStringGlyph(this.ddraw, glyphInfo);
        this.cursor[0] += glyphInfo.cwdh.advanceWidth * this.scale[0];
      }
      drawString(renderInstManager, cache3, ddraw, str6, tagProcessor = null) {
        this.textureMapping[0].gfxSampler = cache3.createSampler({
          wrapS: 0 /* Clamp */,
          wrapT: 0 /* Clamp */,
          minFilter: 1 /* Bilinear */,
          magFilter: 1 /* Bilinear */,
          mipFilter: 0 /* Nearest */,
          minLOD: 0,
          maxLOD: 100
        });
        this.renderInstManager = renderInstManager;
        this.ddraw = ddraw;
        const template = renderInstManager.pushTemplate();
        this.font.materialHelper.setOnRenderInst(cache3, template);
        this.makeMaterialUBO(template);
        this.textureMapping[0].gfxTexture = null;
        if (tagProcessor !== null)
          tagProcessor.reset(this, null);
        let needsSpacing = false;
        for (let i = 0; i < str6.length; i++) {
          const char = str6.charCodeAt(i);
          if (char < 32) {
            if (tagProcessor !== null)
              i = tagProcessor.processTag(this, null, str6, i) - 1;
            continue;
          }
          this.writeCharacter(char, needsSpacing);
          needsSpacing = true;
        }
        this.drawStringFlush(renderInstManager, ddraw);
        renderInstManager.popTemplate();
        this.renderInstManager = null;
        this.ddraw = null;
      }
    };
  }
});

// noclip/gx/DDraw.ts
function getGfxToplogyFromCommand(cmd) {
  if (cmd === 128 /* DRAW_QUADS */)
    return 3 /* Quads */;
  else if (cmd === 152 /* DRAW_TRIANGLE_STRIP */)
    return 1 /* TriStrips */;
  else if (cmd === 144 /* DRAW_TRIANGLES */)
    return 0 /* Triangles */;
  else if (cmd === 160 /* DRAW_TRIANGLE_FAN */)
    return 2 /* TriFans */;
  else
    throw new Error("whoops");
}
var TDDrawBase, TDDraw;
var init_DDraw = __esm({
  "noclip/gx/DDraw.ts"() {
    init_gx_enum();
    init_gx_displaylist();
    init_util();
    init_GfxPlatform();
    init_gx_render();
    init_TopologyHelpers();
    init_endian();
    init_Color();
    TDDrawBase = class {
      constructor(name) {
        this.name = name;
        for (let i = 9 /* POS */; i <= 20 /* TEX7 */; i++) {
          this.vcd[i] = { type: 0 /* NONE */ };
        }
      }
      name;
      vcd = [];
      useNBT = false;
      loadedVertexLayout = null;
      inputLayout = null;
      // Global information
      currentVertex;
      currentIndex;
      indexData;
      vertexData;
      // Current primitive information
      currentPrimVertex;
      currentPrim;
      setVtxDesc(attr, enabled) {
        assert(this.loadedVertexLayout === null);
        if (attr === 25 /* _NBT */) {
          attr = 10 /* NRM */;
          this.useNBT = enabled;
        }
        const vcd = assertExists(this.vcd[attr]);
        vcd.type = enabled ? 1 /* DIRECT */ : 0 /* NONE */;
      }
      allocVertices(numVertex) {
        const vertexCount = this.currentVertex + 1 + numVertex;
        const stride = this.loadedVertexLayout.vertexBufferStrides[0];
        this.ensureVertexBufferData(vertexCount * stride);
      }
      allocPrimitives(type, numVertex) {
        const vertexCount = this.currentVertex + 1 + numVertex;
        const topology = getGfxToplogyFromCommand(type);
        const stride = this.loadedVertexLayout.vertexBufferStrides[0];
        this.ensureVertexBufferData(vertexCount * stride);
        this.ensureIndexBufferData(getTriangleIndexCountForTopologyIndexCount(topology, vertexCount));
      }
      getOffs(v, attr) {
        const stride = this.loadedVertexLayout.vertexBufferStrides[0];
        return v * stride + this.loadedVertexLayout.vertexAttributeOffsets[attr];
      }
      writeFloat32(offs, v) {
        const e = getSystemEndianness() === 0 /* LITTLE_ENDIAN */;
        this.vertexData.setFloat32(offs, v, e);
      }
      position3f32(x, y, z) {
        ++this.currentVertex;
        ++this.currentPrimVertex;
        this.allocVertices(0);
        const offs = this.getOffs(this.currentVertex, 9 /* POS */);
        this.writeFloat32(offs + 0, x);
        this.writeFloat32(offs + 4, y);
        this.writeFloat32(offs + 8, z);
      }
      position3vec3(v) {
        this.position3f32(v[0], v[1], v[2]);
      }
      normal3f32(x, y, z) {
        const offs = this.getOffs(this.currentVertex, 10 /* NRM */);
        this.writeFloat32(offs + 0, x);
        this.writeFloat32(offs + 4, y);
        this.writeFloat32(offs + 8, z);
      }
      normal3vec3(v) {
        this.normal3f32(v[0], v[1], v[2]);
      }
      texCoord2f32(attr, s, t2) {
        const offs = this.getOffs(this.currentVertex, attr);
        this.writeFloat32(offs + 0, s);
        this.writeFloat32(offs + 4, t2);
      }
      texCoord2vec2(attr, v) {
        this.texCoord2f32(attr, v[0], v[1]);
      }
      color4rgba8(attr, r, g, b, a) {
        const offs = this.getOffs(this.currentVertex, attr);
        this.vertexData.setUint32(offs + 0, r << 24 | g << 16 | b << 8 | a, false);
      }
      color4color(attr, c) {
        const offs = this.getOffs(this.currentVertex, attr);
        this.vertexData.setUint32(offs + 0, colorToRGBA8(c), false);
      }
      begin(type, numVertex = null) {
        this.currentPrim = type;
        this.currentPrimVertex = -1;
        if (numVertex !== null)
          this.allocPrimitives(type, numVertex);
      }
      end() {
        const gfxTopo = getGfxToplogyFromCommand(this.currentPrim);
        const numIndices = getTriangleIndexCountForTopologyIndexCount(gfxTopo, this.currentPrimVertex + 1);
        this.ensureIndexBufferData(this.currentIndex + numIndices);
        const baseVertex = this.currentVertex - this.currentPrimVertex;
        const numVertices = this.currentPrimVertex + 1;
        convertToTrianglesRange(this.indexData, this.currentIndex, gfxTopo, baseVertex, numVertices);
        this.currentIndex += numIndices;
      }
    };
    TDDraw = class extends TDDrawBase {
      startIndex;
      vertexBufferDescriptor = null;
      indexBufferDescriptor = null;
      constructor(name = "") {
        super(name);
        this.vertexData = new DataView(new ArrayBuffer(1024));
        this.indexData = new Uint16Array(256);
      }
      ensureVertexBufferData(newByteSize) {
        if (newByteSize > this.vertexData.byteLength) {
          assert(this.startIndex === 0);
          const newByteSizeAligned = align(newByteSize, this.vertexData.byteLength);
          const newBuffer = this.vertexData.buffer.transfer(newByteSizeAligned);
          this.vertexData = new DataView(newBuffer);
        }
      }
      ensureIndexBufferData(newSize) {
        if (newSize > this.indexData.length) {
          assert(this.startIndex === 0);
          const newSizeAligned = align(newSize, this.indexData.length);
          const newBuffer = this.indexData.buffer.transfer(newSizeAligned * 2);
          this.indexData = new Uint16Array(newBuffer);
        }
      }
      beginDraw(cache3) {
        if (this.loadedVertexLayout === null)
          this.loadedVertexLayout = compileLoadedVertexLayout(this.vcd, this.useNBT);
        if (this.inputLayout === null)
          this.inputLayout = createInputLayout(cache3, this.loadedVertexLayout);
        this.currentVertex = -1;
        this.currentIndex = 0;
        this.startIndex = 0;
        this.vertexBufferDescriptor = null;
        this.indexBufferDescriptor = null;
      }
      flushDeviceObjects(cache3) {
        if (this.vertexBufferDescriptor === null)
          this.vertexBufferDescriptor = cache3.dynamicBufferCache.allocateSize(2 /* Vertex */, this.vertexData.byteLength);
        if (this.indexBufferDescriptor === null)
          this.indexBufferDescriptor = cache3.dynamicBufferCache.allocateSize(1 /* Index */, this.indexData.byteLength);
      }
      setOnRenderInst(renderInst) {
        renderInst.setVertexInput(this.inputLayout, [this.vertexBufferDescriptor], this.indexBufferDescriptor);
        renderInst.setDrawCount(this.currentIndex - this.startIndex, this.startIndex);
      }
      hasIndicesToDraw() {
        return this.currentIndex > this.startIndex;
      }
      makeRenderInst(renderInstManager) {
        this.flushDeviceObjects(renderInstManager.gfxRenderCache);
        const renderInst = renderInstManager.newRenderInst();
        this.setOnRenderInst(renderInst);
        this.startIndex = this.currentIndex;
        return renderInst;
      }
      endDraw(renderInstManager) {
        const cache3 = renderInstManager.gfxRenderCache, device2 = cache3.device;
        this.flushDeviceObjects(renderInstManager.gfxRenderCache);
        device2.uploadBufferData(this.vertexBufferDescriptor.buffer, this.vertexBufferDescriptor.byteOffset, new Uint8Array(this.vertexData.buffer));
        device2.uploadBufferData(this.indexBufferDescriptor.buffer, this.indexBufferDescriptor.byteOffset, new Uint8Array(this.indexData.buffer));
      }
      endDrawAndMakeRenderInst(renderInstManager) {
        this.endDraw(renderInstManager);
        return this.makeRenderInst(renderInstManager);
      }
      destroy(device2) {
      }
    };
  }
});

// noclip/gfx/helpers/DebugTextDrawer.ts
var DebugTextDrawer_exports = {};
__export(DebugTextDrawer_exports, {
  DebugTextDrawer: () => DebugTextDrawer,
  makeDebugTextDrawer: () => makeDebugTextDrawer
});
async function makeDebugTextDrawer(context) {
  return context.dataShare.ensureObject(`DebugTextDrawer`, async () => {
    const fontArcData = await context.dataFetcher.fetchData(`SuperMarioGalaxy/LayoutData/Font.arc`);
    const fontArc = parse(await decompress(fontArcData));
    const fontBRFNT = parseBRFNT(fontArc.findFileData(`messagefont26.brfnt`));
    const fontData = new ResFont(context.device, fontBRFNT);
    return new DebugTextDrawer(context.device, fontData);
  });
}
var scratchMatrix3, scratchVec42, sceneParams, DebugTextDrawer;
var init_DebugTextDrawer = __esm({
  "noclip/gfx/helpers/DebugTextDrawer.ts"() {
    init_GfxPlatform();
    init_gx_enum();
    init_UniformBufferHelpers();
    init_esm();
    init_MathHelpers();
    init_Color();
    init_Font();
    init_Yaz0();
    init_JKRArchive();
    init_DDraw();
    init_gx_material();
    init_gx_render();
    init_ProjectionHelpers();
    init_GfxRenderCache();
    scratchMatrix3 = mat4_exports.create();
    scratchVec42 = vec4_exports.create();
    sceneParams = new SceneParams();
    DebugTextDrawer = class {
      constructor(device2, fontData) {
        this.fontData = fontData;
        this.renderCache = new GfxRenderCache(device2);
        this.charWriter.setFont(fontData, 0, 0);
        const ddraw = this.ddraw;
        ddraw.setVtxDesc(9 /* POS */, true);
        ddraw.setVtxDesc(11 /* CLR0 */, true);
        ddraw.setVtxDesc(13 /* TEX0 */, true);
      }
      fontData;
      charWriter = new CharWriter();
      ddraw = new TDDraw("DebugTextDrawer");
      renderCache;
      textColor = colorNewCopy(White);
      strokeColor = colorNewCopy(OpaqueBlack);
      setSceneParams(renderInst, w, h, clipSpaceNearZ) {
        let offs = renderInst.allocateUniformBuffer(GX_Program.ub_SceneParams, ub_SceneParamsBufferSize);
        const d = renderInst.mapUniformBufferF32(GX_Program.ub_SceneParams);
        projectionMatrixForCuboid(sceneParams.u_Projection, 0, w, 0, h, -1e4, 1e4);
        projectionMatrixConvertClipSpaceNearZ(sceneParams.u_Projection, clipSpaceNearZ, -1 /* NegativeOne */);
        fillSceneParamsData(d, offs, sceneParams);
      }
      setDrawParams(renderInst) {
        let offs = renderInst.allocateUniformBuffer(GX_Program.ub_DrawParams, 16);
        const d = renderInst.mapUniformBufferF32(GX_Program.ub_DrawParams);
        mat4_exports.identity(scratchMatrix3);
        offs += fillMatrix4x3(d, offs, scratchMatrix3);
      }
      beginDraw() {
        this.ddraw.beginDraw(this.renderCache);
      }
      endDraw(renderInstManager) {
        this.ddraw.endDraw(renderInstManager);
      }
      setFontScale(scale6) {
        this.charWriter.scale[0] = scale6;
        this.charWriter.scale[1] = scale6;
      }
      getScaledLineHeight() {
        return this.charWriter.getScaledLineHeight();
      }
      reserveString(numChars, strokeNum = 4) {
        const numQuadsPerChar = 1 + strokeNum;
        const numQuads = numQuadsPerChar * numChars;
        this.ddraw.allocPrimitives(128 /* DRAW_QUADS */, 4 * numQuads);
      }
      drawString(renderInstManager, vw, vh, str6, x, y, strokeWidth = 1, strokeNum = 4) {
        const cache3 = this.renderCache;
        vec3_exports.zero(this.charWriter.origin);
        vec3_exports.copy(this.charWriter.cursor, this.charWriter.origin);
        this.charWriter.calcRect(scratchVec42, str6);
        const rx0 = scratchVec42[0], rx1 = scratchVec42[2];
        const w = rx1 - rx0;
        x -= w / 2;
        const template = renderInstManager.pushTemplate();
        template.setBindingLayouts(gxBindingLayouts);
        const clipSpaceNearZ = cache3.device.queryVendorInfo().clipSpaceNearZ;
        this.setSceneParams(template, vw, vh, clipSpaceNearZ);
        this.setDrawParams(template);
        colorCopy(this.charWriter.color1, this.strokeColor);
        for (let i = 0; i < strokeNum; i++) {
          const theta = i * 6.283185307179586 /* TAU */ / strokeNum;
          const sy = strokeWidth * Math.sin(theta), sx = strokeWidth * Math.cos(theta);
          vec3_exports.set(this.charWriter.cursor, x + sx, y + sy, 0);
          this.charWriter.drawString(renderInstManager, cache3, this.ddraw, str6);
        }
        colorCopy(this.charWriter.color1, this.textColor);
        vec3_exports.set(this.charWriter.cursor, x, y, 0);
        this.charWriter.drawString(renderInstManager, cache3, this.ddraw, str6);
        renderInstManager.popTemplate();
      }
      destroy(device2) {
        this.fontData.destroy(device2);
        this.ddraw.destroy(device2);
        this.renderCache.destroy();
      }
    };
  }
});

// noclip/gfx/render/GfxRenderHelper.ts
var GfxRenderHelperBase, PromiseWithSavedValue, GfxRenderHelper;
var init_GfxRenderHelper = __esm({
  "noclip/gfx/render/GfxRenderHelper.ts"() {
    init_GfxRenderCache();
    init_GfxRenderDynamicUniformBuffer();
    init_GfxRenderInstManager();
    init_GfxRenderGraph();
    init_DebugThumbnailHelpers();
    init_DebugDraw();
    init_RenderGraphHelpers();
    GfxRenderHelperBase = class {
      constructor(device2, renderCache = null) {
        this.device = device2;
        if (renderCache === null) {
          this.renderCacheOwn = new GfxRenderCache(device2);
          this.renderCache = this.renderCacheOwn;
        } else {
          this.renderCache = renderCache;
        }
        this.renderGraph = new GfxrRenderGraphImpl(this.device);
        this.renderInstManager = new GfxRenderInstManager(this.renderCache);
        this.uniformBuffer = new GfxRenderDynamicUniformBuffer(this.device);
        this.debugDraw = new DebugDraw(this.renderCache, this.uniformBuffer);
        this.debugThumbnails = new DebugThumbnailDrawer(this);
        this.antialiasingSupport = new AntialiasingSupport(this);
      }
      device;
      renderCache;
      renderGraph;
      renderInstManager;
      uniformBuffer;
      debugThumbnails;
      debugDraw;
      antialiasingSupport;
      renderCacheOwn = null;
      pushTemplateRenderInst() {
        const template = this.renderInstManager.pushTemplate();
        template.setUniformBuffer(this.uniformBuffer);
        return template;
      }
      prepareToRender() {
        this.renderCache.prepareToRender();
        this.uniformBuffer.prepareToRender();
      }
      destroy() {
        if (this.renderCacheOwn !== null)
          this.renderCacheOwn.destroy();
        this.uniformBuffer.destroy();
        this.renderGraph.destroy();
        this.debugDraw.destroy();
      }
      getDebugTextDrawer() {
        return null;
      }
    };
    PromiseWithSavedValue = class {
      constructor(func) {
        this.func = func;
      }
      func;
      value = null;
      completed = false;
      promise = null;
      getValueOrStart() {
        if (this.completed)
          return this.value;
        if (this.promise === null) {
          this.promise = this.func();
          this.promise.then((value) => {
            this.value = value;
            this.promise = null;
            this.completed = true;
          });
        }
        return null;
      }
    };
    GfxRenderHelper = class extends GfxRenderHelperBase {
      debugTextDrawer;
      constructor(device2, context = null, renderCache = null) {
        super(device2, renderCache);
        this.debugTextDrawer = new PromiseWithSavedValue(async () => {
          const { makeDebugTextDrawer: makeDebugTextDrawer2 } = await Promise.resolve().then(() => (init_DebugTextDrawer(), DebugTextDrawer_exports));
          return context !== null ? makeDebugTextDrawer2(context) : null;
        });
      }
      getDebugTextDrawer() {
        return this.debugTextDrawer.getValueOrStart();
      }
      destroy() {
        super.destroy();
        this.debugThumbnails.destroy();
      }
    };
  }
});

// noclip/gx/gx_render.ts
function fillSceneParamsData(d, bOffs, sceneParams3) {
  let offs = bOffs;
  offs += fillMatrix4x4(d, offs, sceneParams3.u_Projection);
  offs += fillVec4(d, offs, sceneParams3.u_SceneTextureLODBias);
  assert(offs === bOffs + ub_SceneParamsBufferSize);
  assert(d.length >= offs);
}
function fillLightData(d, offs, light) {
  offs += fillColor(d, offs, light.Color);
  offs += fillVec3v(d, offs, light.Position);
  offs += fillVec3v(d, offs, light.Direction);
  offs += fillVec3v(d, offs, light.DistAtten);
  offs += fillVec3v(d, offs, light.CosAtten);
  return 4 * 5;
}
function fillFogBlock(d, offs, fog) {
  offs += fillVec4(d, offs, fog.A, fog.B, fog.C, fog.AdjCenter);
  offs += fillVec4(d, offs, fog.AdjTable[0], fog.AdjTable[1], fog.AdjTable[2], fog.AdjTable[3]);
  offs += fillVec4(d, offs, fog.AdjTable[4], fog.AdjTable[5], fog.AdjTable[6], fog.AdjTable[7]);
  offs += fillVec4(d, offs, fog.AdjTable[8], fog.AdjTable[9]);
  offs += fillColor(d, offs, fog.Color);
  return 4 * 5;
}
function fillTextureSize(d, offs, m) {
  d[offs++] = m.width;
  d[offs++] = m.height * (m.flipY ? -1 : 1);
  return 2;
}
function fillTextureBias(d, offs, m) {
  d[offs++] = m.lodBias;
  return 1;
}
function fillMaterialParamsDataWithOptimizations(material, d, bOffs, materialParams3) {
  let offs = bOffs;
  for (let i = 0; i < 12; i++)
    offs += fillColor(d, offs, materialParams3.u_Color[i]);
  for (let i = 0; i < 10; i++)
    offs += fillMatrix4x3(d, offs, materialParams3.u_TexMtx[i]);
  for (let i = 0; i < 8; i++)
    offs += fillTextureSize(d, offs, materialParams3.m_TextureMapping[i]);
  for (let i = 0; i < 8; i++)
    offs += fillTextureBias(d, offs, materialParams3.m_TextureMapping[i]);
  for (let i = 0; i < 3; i++)
    offs += fillMatrix4x2(d, offs, materialParams3.u_IndTexMtx[i]);
  if (materialHasPostTexMtxBlock(material))
    for (let i = 0; i < 20; i++)
      offs += fillMatrix4x3(d, offs, materialParams3.u_PostTexMtx[i]);
  if (materialHasLightsBlock(material))
    for (let i = 0; i < 8; i++)
      offs += fillLightData(d, offs, materialParams3.u_Lights[i]);
  if (materialHasFogBlock(material))
    offs += fillFogBlock(d, offs, materialParams3.u_FogBlock);
  if (materialHasDynamicAlphaTest(material))
    offs += fillVec4(d, offs, materialParams3.u_DynamicAlphaRefA, materialParams3.u_DynamicAlphaRefB);
  assert(d.length >= offs);
}
function fillDrawParamsDataWithOptimizations(material, d, bOffs, drawParams2) {
  let offs = bOffs;
  if (materialUsePnMtxIdx(material))
    for (let i = 0; i < 10; i++)
      offs += fillMatrix4x3(d, offs, drawParams2.u_PosMtx[i]);
  else
    offs += fillMatrix4x3(d, offs, drawParams2.u_PosMtx[0]);
  assert(d.length >= offs);
}
function calcLODBias(viewportWidth, viewportHeight) {
  const textureLODBias = Math.log2(Math.min(viewportWidth / EFB_WIDTH, viewportHeight / EFB_HEIGHT));
  return textureLODBias;
}
function loadedDataCoalescerComboGfx(device2, loadedVertexDatas, name = "") {
  return new GfxBufferCoalescerCombo(
    device2,
    loadedVertexDatas.map((data) => data.vertexBuffers.map((buffer) => new ArrayBufferSlice(buffer))),
    loadedVertexDatas.map((data) => new ArrayBufferSlice(data.indexData)),
    name
  );
}
function loadTextureFromMipChain(device2, mipChain) {
  const firstMipLevel = mipChain.mipLevels[0];
  const gfxTexture = device2.createTexture(makeTextureDescriptor2D(GfxFormat.U8_RGBA_NORM, firstMipLevel.width, firstMipLevel.height, mipChain.mipLevels.length));
  device2.setResourceName(gfxTexture, mipChain.name);
  const promises = [];
  for (let i = 0; i < mipChain.mipLevels.length; i++) {
    const level = i;
    const mipLevel = mipChain.mipLevels[i];
    promises.push(decodeTexture(mipLevel).then((rgbaTexture) => {
      device2.uploadTextureData(gfxTexture, level, [rgbaTexture.pixels]);
    }));
  }
  const extraInfo = /* @__PURE__ */ new Map();
  extraInfo.set("Format", getFormatName(firstMipLevel.format, firstMipLevel.paletteFormat));
  const viewerTexture = { gfxTexture, extraInfo };
  return { gfxTexture, viewerTexture };
}
function translateWrapModeGfx(wrapMode) {
  switch (wrapMode) {
    case 0 /* CLAMP */:
      return 0 /* Clamp */;
    case 2 /* MIRROR */:
      return 2 /* Mirror */;
    case 1 /* REPEAT */:
      return 1 /* Repeat */;
  }
}
function translateTexFilterGfx(texFilter) {
  switch (texFilter) {
    case 1 /* LINEAR */:
      return [1 /* Bilinear */, 0 /* Nearest */];
    case 0 /* NEAR */:
      return [0 /* Point */, 0 /* Nearest */];
    case 5 /* LIN_MIP_LIN */:
      return [1 /* Bilinear */, 1 /* Linear */];
    case 4 /* NEAR_MIP_LIN */:
      return [0 /* Point */, 1 /* Linear */];
    case 3 /* LIN_MIP_NEAR */:
      return [1 /* Bilinear */, 0 /* Nearest */];
    case 2 /* NEAR_MIP_NEAR */:
      return [0 /* Point */, 0 /* Nearest */];
  }
}
function translateMaxAnisotropy(anisotropy) {
  switch (anisotropy) {
    case 0 /* _1 */:
      return 1;
    case 1 /* _2 */:
      return 2;
    case 2 /* _4 */:
      return 4;
    default:
      throw new Error("whoops");
  }
}
function fillIndTexMtx(dst, src) {
  const a = src[0], c = src[1], tx = src[2], scale6 = src[3];
  const b = src[4], d = src[5], ty = src[6];
  mat4_exports.set(
    dst,
    a,
    b,
    0,
    0,
    c,
    d,
    0,
    0,
    tx,
    ty,
    0,
    0,
    scale6,
    0,
    0,
    0
  );
}
function autoOptimizeMaterialHasPostTexMtxBlock(material) {
  for (let i = 0; i < material.texGens.length; i++)
    if (material.texGens[i].postMatrix !== 125 /* PTIDENTITY */)
      return true;
  return false;
}
function channelControlUsesLights(chan) {
  return chan.lightingEnabled && chan.litMask !== 0;
}
function autoOptimizeMaterialHasLightsBlock(material) {
  if (material.lightChannels[0] !== void 0) {
    if (channelControlUsesLights(material.lightChannels[0].colorChannel))
      return true;
    if (channelControlUsesLights(material.lightChannels[0].alphaChannel))
      return true;
  }
  if (material.lightChannels[1] !== void 0) {
    if (channelControlUsesLights(material.lightChannels[1].colorChannel))
      return true;
    if (channelControlUsesLights(material.lightChannels[1].alphaChannel))
      return true;
  }
  return false;
}
function autoOptimizeMaterialHasFogBlock(material) {
  return material.ropInfo.fogType !== 0 /* NONE */;
}
function autoOptimizeMaterial(material) {
  if (material.hasPostTexMtxBlock === void 0)
    material.hasPostTexMtxBlock = autoOptimizeMaterialHasPostTexMtxBlock(material);
  if (material.hasLightsBlock === void 0)
    material.hasLightsBlock = autoOptimizeMaterialHasLightsBlock(material);
  if (material.hasFogBlock === void 0)
    material.hasFogBlock = autoOptimizeMaterialHasFogBlock(material);
}
function translateCullMode(cullMode) {
  switch (cullMode) {
    case 3 /* ALL */:
      throw new Error("whoops");
    case 1 /* FRONT */:
      return 1 /* Front */;
    case 2 /* BACK */:
      return 2 /* Back */;
    case 0 /* NONE */:
      return 0 /* None */;
  }
}
function translateBlendFactorCommon(blendFactor) {
  switch (blendFactor) {
    case 0 /* ZERO */:
      return 0 /* Zero */;
    case 1 /* ONE */:
      return 1 /* One */;
    case 4 /* SRCALPHA */:
      return 6 /* SrcAlpha */;
    case 5 /* INVSRCALPHA */:
      return 7 /* OneMinusSrcAlpha */;
    case 6 /* DSTALPHA */:
      return 8 /* DstAlpha */;
    case 7 /* INVDSTALPHA */:
      return 9 /* OneMinusDstAlpha */;
    default:
      throw new Error("whoops");
  }
}
function translateBlendSrcFactor(blendFactor) {
  switch (blendFactor) {
    case 2 /* SRCCLR */:
      return 4 /* Dst */;
    case 3 /* INVSRCCLR */:
      return 5 /* OneMinusDst */;
    default:
      return translateBlendFactorCommon(blendFactor);
  }
}
function translateBlendDstFactor(blendFactor) {
  switch (blendFactor) {
    case 2 /* SRCCLR */:
      return 2 /* Src */;
    case 3 /* INVSRCCLR */:
      return 3 /* OneMinusSrc */;
    default:
      return translateBlendFactorCommon(blendFactor);
  }
}
function translateCompareType(compareType) {
  switch (compareType) {
    case 0 /* NEVER */:
      return 0 /* Never */;
    case 1 /* LESS */:
      return 1 /* Less */;
    case 2 /* EQUAL */:
      return 2 /* Equal */;
    case 3 /* LEQUAL */:
      return 3 /* LessEqual */;
    case 4 /* GREATER */:
      return 4 /* Greater */;
    case 5 /* NEQUAL */:
      return 5 /* NotEqual */;
    case 6 /* GEQUAL */:
      return 6 /* GreaterEqual */;
    case 7 /* ALWAYS */:
      return 7 /* Always */;
  }
}
function translateGfxMegaState(material) {
  const megaState = {};
  megaState.cullMode = translateCullMode(material.cullMode);
  megaState.depthWrite = material.ropInfo.depthWrite;
  megaState.depthCompare = material.ropInfo.depthTest ? reverseDepthForCompareMode(translateCompareType(material.ropInfo.depthFunc)) : 7 /* Always */;
  megaState.frontFace = 1 /* CW */;
  const attachmentStateSimple = {};
  if (material.ropInfo.blendMode === 0 /* NONE */) {
    attachmentStateSimple.blendMode = 0 /* Add */;
    attachmentStateSimple.blendSrcFactor = 1 /* One */;
    attachmentStateSimple.blendDstFactor = 0 /* Zero */;
  } else if (material.ropInfo.blendMode === 1 /* BLEND */) {
    attachmentStateSimple.blendMode = 0 /* Add */;
    attachmentStateSimple.blendSrcFactor = translateBlendSrcFactor(material.ropInfo.blendSrcFactor);
    attachmentStateSimple.blendDstFactor = translateBlendDstFactor(material.ropInfo.blendDstFactor);
  } else if (material.ropInfo.blendMode === 3 /* SUBTRACT */) {
    attachmentStateSimple.blendMode = 2 /* ReverseSubtract */;
    attachmentStateSimple.blendSrcFactor = 1 /* One */;
    attachmentStateSimple.blendDstFactor = 1 /* One */;
  } else if (material.ropInfo.blendMode === 2 /* LOGIC */) {
    attachmentStateSimple.blendMode = 0 /* Add */;
    attachmentStateSimple.blendSrcFactor = 1 /* One */;
    attachmentStateSimple.blendDstFactor = 0 /* Zero */;
    console.warn(`Unimplemented LOGIC blend mode`);
  }
  attachmentStateSimple.channelWriteMask = 0 /* None */;
  if (material.ropInfo.colorUpdate)
    attachmentStateSimple.channelWriteMask |= 7 /* RGB */;
  if (material.ropInfo.alphaUpdate)
    attachmentStateSimple.channelWriteMask |= 8 /* Alpha */;
  setAttachmentStateSimple(megaState, attachmentStateSimple);
  return megaState;
}
function setChanWriteEnabled(materialHelper, bits, en) {
  let channelWriteMask = materialHelper.megaStateFlags.attachmentsState[0].channelWriteMask;
  channelWriteMask = setBitFlagEnabled(channelWriteMask, bits, en);
  setAttachmentStateSimple(materialHelper.megaStateFlags, { channelWriteMask });
}
function createInputLayout(cache3, loadedVertexLayout) {
  const vertexAttributeDescriptors = [];
  for (let attrInput = 0; attrInput < 12 /* COUNT */; attrInput++) {
    const attribLocation = getVertexInputLocation(attrInput);
    const attrib = loadedVertexLayout.singleVertexInputLayouts.find((attrib2) => attrib2.attrInput === attrInput);
    if (attrib !== void 0) {
      const bufferByteOffset = attrib.bufferOffset;
      const bufferIndex = attrib.bufferIndex;
      vertexAttributeDescriptors.push({ location: attribLocation, format: attrib.format, bufferIndex, bufferByteOffset });
    }
  }
  const vertexBufferDescriptors = [];
  for (let i = 0; i < loadedVertexLayout.vertexBufferStrides.length; i++) {
    vertexBufferDescriptors.push({
      byteStride: loadedVertexLayout.vertexBufferStrides[i],
      frequency: 1 /* PerVertex */
    });
  }
  const indexBufferFormat = loadedVertexLayout.indexFormat;
  return cache3.createInputLayout({
    vertexAttributeDescriptors,
    vertexBufferDescriptors,
    indexBufferFormat
  });
}
function fillSceneParamsDataOnTemplate(renderInst, viewerInput2, customLODBias = null, sceneParamsScratch = sceneParams2) {
  mat4_exports.copy(sceneParamsScratch.u_Projection, viewerInput2.camera.projectionMatrix);
  sceneParams2.u_SceneTextureLODBias = customLODBias !== null ? customLODBias : calcLODBias(viewerInput2.backbufferWidth, viewerInput2.backbufferHeight);
  let d = renderInst.allocateUniformBufferF32(GX_Program.ub_SceneParams, ub_SceneParamsBufferSize);
  fillSceneParamsData(d, 0, sceneParamsScratch);
}
var SceneParams, GXTextureMapping, MaterialParams, DrawParams, ub_SceneParamsBufferSize, GXMaterialHelperGfx, gxBindingLayouts, sceneParams2, GXRenderHelperGfx;
var init_gx_render = __esm({
  "noclip/gx/gx_render.ts"() {
    init_esm();
    init_gx_enum();
    init_gx_material();
    init_gx_texture();
    init_ArrayBufferSlice();
    init_TextureHolder();
    init_util();
    init_gx_displaylist();
    init_Color();
    init_BufferHelpers();
    init_GfxMegaStateDescriptorHelpers();
    init_RenderGraphHelpers();
    init_ReversedDepthHelpers();
    init_UniformBufferHelpers();
    init_GfxPlatform();
    init_GfxRenderGraph();
    init_GfxRenderHelper();
    init_GfxRenderInstManager();
    SceneParams = class {
      u_Projection = mat4_exports.create();
      // TODO(jstpierre): Remove this in favor of putting it on the texture itself.
      // u_Misc0[0]
      u_SceneTextureLODBias = 0;
    };
    GXTextureMapping = class extends TextureMapping {
      width = 0;
      height = 0;
      lodBias = 0;
      // GL sucks. This is a convenience when building texture matrices.
      // The core renderer does not use this code at all.
      flipY = false;
      reset() {
        super.reset();
        this.width = 0;
        this.height = 0;
        this.lodBias = 0;
        this.flipY = false;
      }
      copy(other) {
        super.copy(other);
        this.width = other.width;
        this.height = other.height;
        this.lodBias = other.lodBias;
        this.flipY = other.flipY;
      }
    };
    MaterialParams = class {
      m_TextureMapping = nArray(8, () => new GXTextureMapping());
      u_Color = nArray(12 /* COUNT */, () => colorNewCopy(TransparentBlack));
      u_TexMtx = nArray(10, () => mat4_exports.create());
      // mat4x3
      u_PostTexMtx = nArray(20, () => mat4_exports.create());
      // mat4x3
      u_IndTexMtx = nArray(3, () => mat4_exports.create());
      // mat4x2
      u_Lights = nArray(8, () => new Light());
      u_FogBlock = new FogBlock();
      u_DynamicAlphaRefA = 0;
      u_DynamicAlphaRefB = 0;
      constructor() {
        colorFromRGBA(this.u_Color[0 /* MAT0 */], 1, 1, 1, 1);
        colorFromRGBA(this.u_Color[1 /* MAT1 */], 1, 1, 1, 1);
      }
      clear() {
        for (let i = 0; i < 8; i++)
          this.m_TextureMapping[i].reset();
      }
    };
    DrawParams = class {
      u_PosMtx = nArray(10, () => mat4_exports.create());
      clear() {
        for (let i = 0; i < 10; i++)
          mat4_exports.identity(this.u_PosMtx[i]);
      }
    };
    ub_SceneParamsBufferSize = 4 * 4 + 4;
    GXMaterialHelperGfx = class {
      constructor(material, materialHacks) {
        this.material = material;
        if (materialHacks)
          Object.assign(this.materialHacks, materialHacks);
        this.invalidateMaterial();
      }
      material;
      programKey;
      megaStateFlags;
      materialParamsBufferSize;
      drawParamsBufferSize;
      materialHacks = {};
      program = null;
      gfxProgram = null;
      valid = true;
      checkValid() {
        if (this.material.cullMode === 3 /* ALL */)
          return false;
        return true;
      }
      invalidateMaterial() {
        this.valid = this.checkValid();
        if (!this.valid)
          return;
        autoOptimizeMaterial(this.material);
        this.megaStateFlags = translateGfxMegaState(this.material);
        this.materialParamsBufferSize = getMaterialParamsBlockSize(this.material);
        this.drawParamsBufferSize = getDrawParamsBlockSize(this.material);
        this.program = null;
      }
      cacheProgram(cache3) {
        if (this.program === null)
          this.createProgram();
        if (this.gfxProgram === null) {
          this.gfxProgram = cache3.createProgram(this.program);
          this.programKey = this.gfxProgram.ResourceUniqueId;
        }
      }
      createProgram(klass = GX_Program) {
        this.program = new klass(this.material, this.materialHacks);
        this.gfxProgram = null;
      }
      setMaterialHacks(materialHacks) {
        Object.assign(this.materialHacks, materialHacks);
        this.createProgram();
      }
      fillMaterialParamsData(renderInstManager, offs, materialParams3) {
        const uniformBuffer = renderInstManager.getCurrentTemplate().getUniformBuffer();
        const d = uniformBuffer.mapBufferF32();
        fillMaterialParamsDataWithOptimizations(this.material, d, offs, materialParams3);
      }
      allocateMaterialParamsBlock(renderInstManager) {
        const uniformBuffer = renderInstManager.getCurrentTemplate().getUniformBuffer();
        return uniformBuffer.allocateChunk(this.materialParamsBufferSize);
      }
      allocateMaterialParamsDataOnInst(renderInst, materialParams3) {
        const offs = renderInst.allocateUniformBuffer(GX_Program.ub_MaterialParams, this.materialParamsBufferSize);
        const d = renderInst.mapUniformBufferF32(GX_Program.ub_MaterialParams);
        fillMaterialParamsDataWithOptimizations(this.material, d, offs, materialParams3);
      }
      allocateDrawParamsDataOnInst(renderInst, drawParams2) {
        const offs = renderInst.allocateUniformBuffer(GX_Program.ub_DrawParams, this.drawParamsBufferSize);
        const d = renderInst.mapUniformBufferF32(GX_Program.ub_DrawParams);
        fillDrawParamsDataWithOptimizations(this.material, d, offs, drawParams2);
      }
      setOnRenderInst(cache3, renderInst) {
        assert(this.valid);
        this.cacheProgram(cache3);
        renderInst.setMegaStateFlags(this.megaStateFlags);
        renderInst.setGfxProgram(this.gfxProgram);
        setSortKeyProgramKey(renderInst.sortKey, this.programKey);
      }
    };
    gxBindingLayouts = [
      { numUniformBuffers: 3, numSamplers: 8 }
    ];
    sceneParams2 = new SceneParams();
    GXRenderHelperGfx = class extends GfxRenderHelper {
      pushTemplateRenderInst() {
        const template = super.pushTemplateRenderInst();
        template.setBindingLayouts(gxBindingLayouts);
        return template;
      }
    };
  }
});

// src/main.ts
init_esm();
init_ArrayBufferSlice();
init_Camera();
init_Yaz0();
init_RenderGraphHelpers();

// noclip/gfx/platform/GfxPlatformWebGL2.ts
init_GfxPlatform();
init_GfxPlatformFormat();

// noclip/gfx/platform/GfxPlatformImpl.ts
init_GfxPlatform();
var defaultBindingLayoutSamplerDescriptor = {
  formatKind: 0 /* Float */,
  dimension: 0 /* n2D */
};
function isFormatSamplerKindCompatible(samplerKind, textureKind) {
  if (textureKind === samplerKind)
    return true;
  else if (samplerKind === 1 /* UnfilterableFloat */ && (textureKind === 4 /* Depth */ || textureKind === 0 /* Float */))
    return true;
  return false;
}

// noclip/gfx/platform/GfxPlatformWebGL2.ts
init_GfxMegaStateDescriptorHelpers();
init_GfxPlatformUtil();
init_GfxPlatformObjUtil();
var UBO_PAGE_MAX_BYTE_SIZE = 65536;
function translateQueryPoolType(type) {
  switch (type) {
    case 0 /* OcclusionConservative */:
      return WebGL2RenderingContext.ANY_SAMPLES_PASSED_CONSERVATIVE;
    default:
      throw new Error("whoops");
  }
}
function translateVertexFormat(fmt) {
  function translateType(flags2) {
    switch (flags2) {
      case 1 /* U8 */:
        return WebGL2RenderingContext.UNSIGNED_BYTE;
      case 2 /* U16 */:
        return WebGL2RenderingContext.UNSIGNED_SHORT;
      case 3 /* U32 */:
        return WebGL2RenderingContext.UNSIGNED_INT;
      case 4 /* S8 */:
        return WebGL2RenderingContext.BYTE;
      case 5 /* S16 */:
        return WebGL2RenderingContext.SHORT;
      case 6 /* S32 */:
        return WebGL2RenderingContext.INT;
      case 7 /* F16 */:
        return WebGL2RenderingContext.HALF_FLOAT;
      case 8 /* F32 */:
        return WebGL2RenderingContext.FLOAT;
      default:
        throw new Error("whoops");
    }
  }
  function translateSize(flags2) {
    switch (flags2) {
      case 1 /* R */:
        return 1;
      case 2 /* RG */:
        return 2;
      case 3 /* RGB */:
        return 3;
      case 4 /* RGBA */:
        return 4;
    }
  }
  const typeFlags = getFormatTypeFlags(fmt);
  const compFlags = getFormatCompFlags(fmt);
  const flags = getFormatFlags(fmt);
  const type = translateType(typeFlags);
  const size = translateSize(compFlags);
  const normalized = !!(flags & 1 /* Normalized */);
  return { size, type, normalized };
}
function isFormatSizedInteger(fmt) {
  const flags = getFormatFlags(fmt);
  if (!!(flags & 1 /* Normalized */))
    return false;
  const typeFlags = getFormatTypeFlags(fmt);
  if (typeFlags === 4 /* S8 */ || typeFlags === 5 /* S16 */ || typeFlags === 6 /* S32 */)
    return true;
  if (typeFlags === 1 /* U8 */ || typeFlags === 2 /* U16 */ || typeFlags === 3 /* U32 */)
    return true;
  return false;
}
function translateIndexFormat(format) {
  switch (format) {
    case GfxFormat.U8_R:
      return WebGL2RenderingContext.UNSIGNED_BYTE;
    case GfxFormat.U16_R:
      return WebGL2RenderingContext.UNSIGNED_SHORT;
    case GfxFormat.U32_R:
      return WebGL2RenderingContext.UNSIGNED_INT;
    default:
      throw new Error("whoops");
  }
}
function translateBufferHint(hint) {
  switch (hint) {
    case 1 /* Static */:
      return WebGL2RenderingContext.STATIC_DRAW;
    case 2 /* Dynamic */:
      return WebGL2RenderingContext.DYNAMIC_DRAW;
  }
}
function translateBufferUsageToTarget(usage) {
  if (usage & 1 /* Index */)
    return WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER;
  else if (usage & 2 /* Vertex */)
    return WebGL2RenderingContext.ARRAY_BUFFER;
  else if (usage & 4 /* Uniform */)
    return WebGL2RenderingContext.UNIFORM_BUFFER;
  else if (usage & (8 /* Storage */ | 16 /* CopySrc */))
    return WebGL2RenderingContext.COPY_WRITE_BUFFER;
  else
    throw new Error("whoops");
}
function translateWrapMode(wrapMode) {
  switch (wrapMode) {
    case 0 /* Clamp */:
      return WebGL2RenderingContext.CLAMP_TO_EDGE;
    case 1 /* Repeat */:
      return WebGL2RenderingContext.REPEAT;
    case 2 /* Mirror */:
      return WebGL2RenderingContext.MIRRORED_REPEAT;
    default:
      throw new Error("whoops");
  }
}
function translateMinFilter(texFilter, mipFilter) {
  if (mipFilter === 1 /* Linear */ && texFilter === 1 /* Bilinear */)
    return WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR;
  if (mipFilter === 1 /* Linear */ && texFilter === 0 /* Point */)
    return WebGL2RenderingContext.NEAREST_MIPMAP_LINEAR;
  if (mipFilter === 0 /* Nearest */ && texFilter === 1 /* Bilinear */)
    return WebGL2RenderingContext.LINEAR_MIPMAP_NEAREST;
  if (mipFilter === 0 /* Nearest */ && texFilter === 0 /* Point */)
    return WebGL2RenderingContext.NEAREST_MIPMAP_NEAREST;
  throw new Error(`Unknown texture filter mode`);
}
function translateMagFilter(texFilter) {
  if (texFilter === 1 /* Bilinear */)
    return WebGL2RenderingContext.LINEAR;
  else if (texFilter === 0 /* Point */)
    return WebGL2RenderingContext.NEAREST;
  throw new Error(`Unknown texture filter mode`);
}
function translatePrimitiveTopology(topology) {
  switch (topology) {
    case 0 /* Triangles */:
      return WebGL2RenderingContext.TRIANGLES;
    case 1 /* Lines */:
      return WebGL2RenderingContext.LINES;
    default:
      throw new Error("Unknown primitive topology mode");
  }
}
function translateTextureDimension(dimension) {
  if (dimension === 0 /* n2D */)
    return WebGL2RenderingContext.TEXTURE_2D;
  else if (dimension === 1 /* n2DArray */)
    return WebGL2RenderingContext.TEXTURE_2D_ARRAY;
  else if (dimension === 3 /* Cube */)
    return WebGL2RenderingContext.TEXTURE_CUBE_MAP;
  else if (dimension === 2 /* n3D */)
    return WebGL2RenderingContext.TEXTURE_3D;
  else
    throw new Error("whoops");
}
function translateCompareMode(compareMode) {
  switch (compareMode) {
    case 0 /* Never */:
      return WebGL2RenderingContext.NEVER;
    case 1 /* Less */:
      return WebGL2RenderingContext.LESS;
    case 2 /* Equal */:
      return WebGL2RenderingContext.EQUAL;
    case 3 /* LessEqual */:
      return WebGL2RenderingContext.LEQUAL;
    case 4 /* Greater */:
      return WebGL2RenderingContext.GREATER;
    case 5 /* NotEqual */:
      return WebGL2RenderingContext.NOTEQUAL;
    case 6 /* GreaterEqual */:
      return WebGL2RenderingContext.GEQUAL;
    case 7 /* Always */:
      return WebGL2RenderingContext.ALWAYS;
  }
}
function translateFrontFaceMode(frontFaceMode) {
  switch (frontFaceMode) {
    case 0 /* CCW */:
      return WebGL2RenderingContext.CCW;
    case 1 /* CW */:
      return WebGL2RenderingContext.CW;
  }
}
function translateBlendMode(blendMode) {
  switch (blendMode) {
    case 0 /* Add */:
      return WebGLRenderingContext.FUNC_ADD;
    case 1 /* Subtract */:
      return WebGLRenderingContext.FUNC_SUBTRACT;
    case 2 /* ReverseSubtract */:
      return WebGLRenderingContext.FUNC_REVERSE_SUBTRACT;
  }
}
function translateBlendFactor(blendFactor) {
  switch (blendFactor) {
    case 0 /* Zero */:
      return WebGLRenderingContext.ZERO;
    case 1 /* One */:
      return WebGLRenderingContext.ONE;
    case 2 /* Src */:
      return WebGLRenderingContext.SRC_COLOR;
    case 3 /* OneMinusSrc */:
      return WebGLRenderingContext.ONE_MINUS_SRC_COLOR;
    case 4 /* Dst */:
      return WebGLRenderingContext.DST_COLOR;
    case 5 /* OneMinusDst */:
      return WebGLRenderingContext.ONE_MINUS_DST_COLOR;
    case 6 /* SrcAlpha */:
      return WebGLRenderingContext.SRC_ALPHA;
    case 7 /* OneMinusSrcAlpha */:
      return WebGLRenderingContext.ONE_MINUS_SRC_ALPHA;
    case 8 /* DstAlpha */:
      return WebGLRenderingContext.DST_ALPHA;
    case 9 /* OneMinusDstAlpha */:
      return WebGLRenderingContext.ONE_MINUS_DST_ALPHA;
    case 10 /* ConstantColor */:
      return WebGLRenderingContext.CONSTANT_COLOR;
    case 11 /* OneMinusConstantColor */:
      return WebGLRenderingContext.ONE_MINUS_CONSTANT_COLOR;
  }
}
function translateStencilOp(stencilOp) {
  switch (stencilOp) {
    case 0 /* Keep */:
      return WebGLRenderingContext.KEEP;
    case 1 /* Zero */:
      return WebGLRenderingContext.ZERO;
    case 2 /* Replace */:
      return WebGLRenderingContext.REPLACE;
    case 3 /* Invert */:
      return WebGLRenderingContext.INVERT;
    case 4 /* IncrementClamp */:
      return WebGLRenderingContext.INCR;
    case 5 /* DecrementClamp */:
      return WebGLRenderingContext.DECR;
    case 6 /* IncrementWrap */:
      return WebGLRenderingContext.INCR_WRAP;
    case 7 /* DecrementWrap */:
      return WebGLRenderingContext.DECR_WRAP;
  }
}
function getPlatformBuffer(buffer_, byteOffset = 0) {
  const buffer = buffer_;
  return buffer.gl_buffer_pages[byteOffset / buffer.pageByteSize | 0];
}
function getPlatformTexture(texture_) {
  const texture = texture_;
  return texture.gl_texture;
}
function getPlatformSampler(sampler_) {
  const sampler = sampler_;
  return sampler.gl_sampler;
}
function assignPlatformName(o, name) {
  o.name = name;
  o.__SPECTOR_Metadata = { name };
}
function createBindingLayouts(bindingLayouts2) {
  let firstUniformBuffer = 0, firstSampler = 0;
  const bindingLayoutTables = [];
  for (let i = 0; i < bindingLayouts2.length; i++) {
    const { numUniformBuffers, numSamplers, samplerEntries } = bindingLayouts2[i];
    const bindingSamplerEntries = [];
    if (samplerEntries !== void 0)
      assert2(samplerEntries.length === numSamplers);
    for (let j = 0; j < numSamplers; j++) {
      const samplerEntry = samplerEntries !== void 0 ? samplerEntries[j] : defaultBindingLayoutSamplerDescriptor;
      const { dimension, formatKind } = samplerEntry;
      bindingSamplerEntries.push({ gl_target: translateTextureDimension(dimension), formatKind });
    }
    bindingLayoutTables.push({ firstUniformBuffer, numUniformBuffers, firstSampler, numSamplers, samplerEntries: bindingSamplerEntries });
    firstUniformBuffer += numUniformBuffers;
    firstSampler += numSamplers;
  }
  return { numUniformBuffers: firstUniformBuffer, numSamplers: firstSampler, bindingLayoutTables };
}
function isBlendStateNone(blendState) {
  return blendState.blendMode === 0 /* Add */ && blendState.blendSrcFactor === 1 /* One */ && blendState.blendDstFactor === 0 /* Zero */;
}
function isBlockCompressSized(w, h, bw, bh) {
  if (w % bw !== 0)
    return false;
  if (h % bh !== 0)
    return false;
  return true;
}
var ResourceCreationTracker = class {
  liveObjects = /* @__PURE__ */ new Set();
  creationStacks = /* @__PURE__ */ new WeakMap();
  deletionStacks = /* @__PURE__ */ new WeakMap();
  trackResourceCreated(o) {
    this.creationStacks.set(o, new Error().stack);
    this.liveObjects.add(o);
  }
  trackResourceDestroyed(o) {
    if (this.deletionStacks.has(o))
      console.warn(`Object double freed:`, o, `

Creation stack: `, this.creationStacks.get(o), `

Deletion stack: `, this.deletionStacks.get(o), `

This stack: `, new Error().stack);
    this.deletionStacks.set(o, new Error().stack);
    this.liveObjects.delete(o);
  }
  checkForLeaks() {
    for (const o of this.liveObjects.values())
      console.warn("Object leaked:", o, "Creation stack:", this.creationStacks.get(o));
  }
};
function prependLineNo(str6, lineStart = 1) {
  const lines = str6.split("\n");
  return lines.map((s, i) => `${leftPad2("" + (lineStart + i), 4, " ")}  ${s}`).join("\n");
}
var GfxPlatformWebGL2Config = class {
  trackResources = false;
  shaderDebug = false;
};
var GfxImplP_GL = class {
  constructor(gl2, configuration) {
    this.gl = gl2;
    this._contextAttributes = assertExists2(gl2.getContextAttributes());
    this._WEBGL_compressed_texture_s3tc = gl2.getExtension("WEBGL_compressed_texture_s3tc");
    this._WEBGL_compressed_texture_s3tc_srgb = gl2.getExtension("WEBGL_compressed_texture_s3tc_srgb");
    this._EXT_clip_control = gl2.getExtension("EXT_clip_control");
    this._EXT_texture_compression_rgtc = gl2.getExtension("EXT_texture_compression_rgtc");
    this._EXT_texture_compression_bptc = gl2.getExtension("EXT_texture_compression_bptc");
    this._EXT_texture_filter_anisotropic = gl2.getExtension("EXT_texture_filter_anisotropic");
    this._EXT_texture_norm16 = gl2.getExtension("EXT_texture_norm16");
    this._KHR_parallel_shader_compile = gl2.getExtension("KHR_parallel_shader_compile");
    this._OES_texture_float_linear = gl2.getExtension("OES_texture_float_linear");
    this._OES_texture_half_float_linear = gl2.getExtension("OES_texture_half_float_linear");
    this._OES_draw_buffers_indexed = gl2.getExtension("OES_draw_buffers_indexed");
    this._WEBGL_polygon_mode = gl2.getExtension("WEBGL_polygon_mode");
    this._WEBGL_provoking_vertex = gl2.getExtension("WEBGL_provoking_vertex");
    this._uniformBufferMaxPageByteSize = Math.min(gl2.getParameter(gl2.MAX_UNIFORM_BLOCK_SIZE), UBO_PAGE_MAX_BYTE_SIZE);
    if (this._EXT_clip_control !== null) {
      this._EXT_clip_control.clipControlEXT(this._EXT_clip_control.LOWER_LEFT_EXT, this._EXT_clip_control.ZERO_TO_ONE_EXT);
      this.clipSpaceNearZ = 0 /* Zero */;
    } else {
      this.clipSpaceNearZ = -1 /* NegativeOne */;
    }
    if (this._WEBGL_provoking_vertex !== null)
      this._WEBGL_provoking_vertex.provokingVertexWEBGL(this._WEBGL_provoking_vertex.FIRST_VERTEX_CONVENTION_WEBGL);
    this._scTexture = {
      _T: 1 /* Texture */,
      dimension: 0 /* n2D */,
      usage: 2 /* RenderTarget */,
      ResourceUniqueId: this.getNextUniqueId(),
      width: 0,
      height: 0,
      depthOrArrayLayers: 1,
      numLevels: 1,
      gl_target: null,
      gl_texture: null,
      pixelFormat: this._contextAttributes.alpha === false ? GfxFormat.U8_RGB_RT : GfxFormat.U8_RGBA_RT,
      formatKind: 0 /* Float */
    };
    this._resolveColorReadFramebuffer = this.ensureResourceExists(gl2.createFramebuffer());
    this._resolveColorDrawFramebuffer = this.ensureResourceExists(gl2.createFramebuffer());
    this._resolveDepthStencilReadFramebuffer = this.ensureResourceExists(gl2.createFramebuffer());
    this._resolveDepthStencilDrawFramebuffer = this.ensureResourceExists(gl2.createFramebuffer());
    this._renderPassDrawFramebuffer = this.ensureResourceExists(gl2.createFramebuffer());
    this._readbackFramebuffer = this.ensureResourceExists(gl2.createFramebuffer());
    this._fallbackTexture2D = this.createFallbackTexture(0 /* n2D */, 0 /* Float */);
    this._fallbackTexture2DArray = this.createFallbackTexture(1 /* n2DArray */, 0 /* Float */);
    this._fallbackTexture3D = this.createFallbackTexture(2 /* n3D */, 0 /* Float */);
    this._fallbackTextureCube = this.createFallbackTexture(3 /* Cube */, 0 /* Float */);
    this._fallbackVertexBuffer = this.createBuffer(4, 2 /* Vertex */, 1 /* Static */);
    this._currentMegaState.depthCompare = 1 /* Less */;
    this._currentMegaState.depthWrite = false;
    this._currentMegaState.attachmentsState[0].channelWriteMask = 15 /* AllChannels */;
    for (let i = 1; i < 4; i++)
      this._currentMegaState.attachmentsState[i] = copyAttachmentState(void 0, this._currentMegaState.attachmentsState[0]);
    gl2.enable(gl2.DEPTH_TEST);
    gl2.enable(gl2.STENCIL_TEST);
    gl2.pixelStorei(gl2.UNPACK_ALIGNMENT, 1);
    this._checkLimits();
    this._checkForBugQuirks();
    if (configuration.shaderDebug)
      this._shaderDebug = true;
    if (configuration.trackResources)
      this._resourceCreationTracker = new ResourceCreationTracker();
  }
  gl;
  // Configuration
  _shaderDebug = false;
  _contextAttributes;
  // GL extension
  _WEBGL_compressed_texture_s3tc = null;
  _WEBGL_compressed_texture_s3tc_srgb = null;
  _EXT_clip_control = null;
  _EXT_texture_compression_rgtc = null;
  _EXT_texture_compression_bptc = null;
  _EXT_texture_filter_anisotropic = null;
  _EXT_texture_norm16 = null;
  _KHR_parallel_shader_compile = null;
  _OES_draw_buffers_indexed = null;
  _OES_texture_float_linear = null;
  _OES_texture_half_float_linear = null;
  _WEBGL_polygon_mode = null;
  _WEBGL_provoking_vertex = null;
  // Swap Chain
  _scTexture = null;
  _scPlatformFramebuffer = null;
  // GfxDevice
  _currentActiveTexture = null;
  _currentBoundVAO = null;
  _currentProgram = null;
  _resourceCreationTracker = null;
  _resourceUniqueId = 0;
  // Cached GL driver state
  _currentColorAttachment = [];
  _currentColorAttachmentView = [];
  _currentColorResolveTo = [];
  _currentColorResolveView = [];
  _currentDepthStencilAttachment = null;
  _currentDepthStencilAttachmentView = null;
  _currentDepthStencilResolveTo = null;
  _currentDepthStencilResolveView = null;
  _currentSampleCount = -1;
  _currentPipeline;
  _currentIndexBufferByteOffset = null;
  _currentMegaState = copyMegaState(defaultMegaState);
  _currentSamplers = [];
  _currentTextures = [];
  _currentUniformBuffers = [];
  _currentUniformBufferByteOffsets = [];
  _currentUniformBufferByteSizes = [];
  _currentScissorEnabled = false;
  _currentStencilRef = null;
  // Pass Execution
  _currentRenderPassDescriptor = null;
  _currentStatisticsGroup = null;
  _resolveColorAttachmentsChanged = false;
  _resolveColorReadFramebuffer;
  _resolveColorDrawFramebuffer;
  _resolveDepthStencilAttachmentsChanged = false;
  _resolveDepthStencilReadFramebuffer;
  _resolveDepthStencilDrawFramebuffer;
  _renderPassDrawFramebuffer;
  _readbackFramebuffer;
  _fallbackTexture2D;
  _fallbackTexture2DDepth = void 0;
  _fallbackTexture2DArray;
  _fallbackTexture3D;
  _fallbackTextureCube;
  _fallbackVertexBuffer;
  // GfxVendorInfo
  platform = 0 /* WebGL2 */;
  glslVersion = `#version 300 es`;
  explicitBindingLocations = false;
  separateSamplerTextures = false;
  viewportOrigin = 0 /* LowerLeft */;
  clipSpaceNearZ;
  // GfxLimits
  _uniformBufferMaxPageByteSize;
  uniformBufferByteAlignment;
  uniformBufferMaxPageByteSize;
  supportedSampleCounts;
  occlusionQueriesRecommended;
  computeShadersSupported = false;
  wireframeSupported = false;
  vertexBufferMinStride = 1;
  createFallbackTexture(dimension, formatKind) {
    const depth = dimension === 3 /* Cube */ ? 6 : 1;
    const pixelFormat = formatKind === 4 /* Depth */ ? GfxFormat.D32F : GfxFormat.U8_RGBA_NORM;
    const texture = this.createTexture({
      dimension,
      pixelFormat,
      usage: 1 /* Sampled */,
      width: 1,
      height: 1,
      depthOrArrayLayers: depth,
      numLevels: 1
    });
    if (formatKind === 0 /* Float */)
      this.uploadTextureData(texture, 0, [new Uint8Array(4 * depth)]);
    return getPlatformTexture(texture);
  }
  _checkLimits() {
    const gl2 = this.gl;
    this.uniformBufferByteAlignment = gl2.getParameter(gl2.UNIFORM_BUFFER_OFFSET_ALIGNMENT);
    this.uniformBufferMaxPageByteSize = this._uniformBufferMaxPageByteSize;
    const supportedSampleCounts = gl2.getInternalformatParameter(gl2.RENDERBUFFER, gl2.DEPTH32F_STENCIL8, gl2.SAMPLES);
    this.supportedSampleCounts = supportedSampleCounts ? [...supportedSampleCounts] : [];
    if (!this.supportedSampleCounts.includes(1))
      this.supportedSampleCounts.push(1);
    this.supportedSampleCounts.sort((a, b) => a - b);
    this.occlusionQueriesRecommended = true;
    if (this._WEBGL_polygon_mode !== null)
      this.wireframeSupported = true;
  }
  _checkForBugQuirks() {
    if (navigator.userAgent.includes("Firefox")) {
      this.occlusionQueriesRecommended = false;
    }
  }
  //#region GfxSwapChain
  configureSwapChain(width, height, platformFramebuffer) {
    const texture = this._scTexture;
    texture.width = width;
    texture.height = height;
    this._scPlatformFramebuffer = nullify2(platformFramebuffer);
  }
  getDevice() {
    return this;
  }
  getCanvas() {
    return this.gl.canvas;
  }
  getOnscreenTexture() {
    return this._scTexture;
  }
  //#endregion
  //#region GfxDevice
  translateTextureInternalFormat(fmt) {
    switch (fmt) {
      case GfxFormat.F16_R:
        return WebGL2RenderingContext.R16F;
      case GfxFormat.F16_RG:
        return WebGL2RenderingContext.RG16F;
      case GfxFormat.F16_RGB:
        return WebGL2RenderingContext.RGB16F;
      case GfxFormat.F16_RGBA:
        return WebGL2RenderingContext.RGBA16F;
      case GfxFormat.F32_R:
        return WebGL2RenderingContext.R32F;
      case GfxFormat.F32_RG:
        return WebGL2RenderingContext.RG32F;
      case GfxFormat.F32_RGB:
        return WebGL2RenderingContext.RGB32F;
      case GfxFormat.F32_RGBA:
        return WebGL2RenderingContext.RGBA32F;
      case GfxFormat.U8_R_NORM:
        return WebGL2RenderingContext.R8;
      case GfxFormat.U8_RG_NORM:
        return WebGL2RenderingContext.RG8;
      case GfxFormat.U8_RGB_RT:
        return WebGL2RenderingContext.RGB8;
      case GfxFormat.U8_RGBA_NORM:
      case GfxFormat.U8_RGBA_RT:
        return WebGL2RenderingContext.RGBA8;
      case GfxFormat.U8_RGBA_SRGB:
      case GfxFormat.U8_RGBA_RT_SRGB:
        return WebGL2RenderingContext.SRGB8_ALPHA8;
      case GfxFormat.U16_R:
        return WebGL2RenderingContext.R16UI;
      case GfxFormat.U16_R_NORM:
        return this._EXT_texture_norm16.R16_EXT;
      case GfxFormat.U16_RG_NORM:
        return this._EXT_texture_norm16.RG16_EXT;
      case GfxFormat.U16_RGBA_NORM:
        return this._EXT_texture_norm16.RGBA16_EXT;
      case GfxFormat.U16_RGBA_5551:
        return WebGL2RenderingContext.RGB5_A1;
      case GfxFormat.U16_RGB_565:
        return WebGL2RenderingContext.RGB565;
      case GfxFormat.U32_R:
        return WebGL2RenderingContext.R32UI;
      case GfxFormat.S8_RGBA_NORM:
        return WebGL2RenderingContext.RGBA8_SNORM;
      case GfxFormat.S8_RG_NORM:
        return WebGL2RenderingContext.RG8_SNORM;
      case GfxFormat.BC1:
        return this._WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      case GfxFormat.BC1_SRGB:
        return this._WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      case GfxFormat.BC2:
        return this._WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      case GfxFormat.BC2_SRGB:
        return this._WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      case GfxFormat.BC3:
        return this._WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      case GfxFormat.BC3_SRGB:
        return this._WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      case GfxFormat.BC4_UNORM:
        return this._EXT_texture_compression_rgtc.COMPRESSED_RED_RGTC1_EXT;
      case GfxFormat.BC4_SNORM:
        return this._EXT_texture_compression_rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      case GfxFormat.BC5_UNORM:
        return this._EXT_texture_compression_rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT;
      case GfxFormat.BC5_SNORM:
        return this._EXT_texture_compression_rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      case GfxFormat.BC6H_UNORM:
        return this._EXT_texture_compression_bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      case GfxFormat.BC6H_SNORM:
        return this._EXT_texture_compression_bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      case GfxFormat.BC7:
        return this._EXT_texture_compression_bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      case GfxFormat.BC7_SRGB:
        return this._EXT_texture_compression_bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
      case GfxFormat.D32F_S8:
        return WebGL2RenderingContext.DEPTH32F_STENCIL8;
      case GfxFormat.D24_S8:
        return WebGL2RenderingContext.DEPTH24_STENCIL8;
      case GfxFormat.D32F:
        return WebGL2RenderingContext.DEPTH_COMPONENT32F;
      case GfxFormat.D24:
        return WebGL2RenderingContext.DEPTH_COMPONENT24;
      default:
        throw new Error("whoops");
    }
  }
  translateTextureFormat(fmt) {
    if (this.isTextureFormatCompressed(fmt))
      return this.translateTextureInternalFormat(fmt);
    switch (fmt) {
      case GfxFormat.D24_S8:
      case GfxFormat.D32F_S8:
        return WebGL2RenderingContext.DEPTH_STENCIL;
      case GfxFormat.D24:
      case GfxFormat.D32F:
        return WebGL2RenderingContext.DEPTH_COMPONENT;
      default:
        break;
    }
    const isInteger = isFormatSizedInteger(fmt);
    const compFlags = getFormatCompFlags(fmt);
    switch (compFlags) {
      case 1 /* R */:
        return isInteger ? WebGL2RenderingContext.RED_INTEGER : WebGL2RenderingContext.RED;
      case 2 /* RG */:
        return isInteger ? WebGL2RenderingContext.RG_INTEGER : WebGL2RenderingContext.RG;
      case 3 /* RGB */:
        return isInteger ? WebGL2RenderingContext.RGB_INTEGER : WebGL2RenderingContext.RGB;
      case 4 /* RGBA */:
        return isInteger ? WebGL2RenderingContext.RGBA_INTEGER : WebGL2RenderingContext.RGBA;
    }
  }
  translateTextureType(fmt) {
    const typeFlags = getFormatTypeFlags(fmt);
    switch (typeFlags) {
      case 1 /* U8 */:
        return WebGL2RenderingContext.UNSIGNED_BYTE;
      case 2 /* U16 */:
        return WebGL2RenderingContext.UNSIGNED_SHORT;
      case 3 /* U32 */:
        return WebGL2RenderingContext.UNSIGNED_INT;
      case 4 /* S8 */:
        return WebGL2RenderingContext.BYTE;
      case 7 /* F16 */:
        return WebGL2RenderingContext.HALF_FLOAT;
      case 8 /* F32 */:
        return WebGL2RenderingContext.FLOAT;
      case 97 /* U16_PACKED_5551 */:
        return WebGL2RenderingContext.UNSIGNED_SHORT_5_5_5_1;
      case 98 /* U16_PACKED_565 */:
        return WebGL2RenderingContext.UNSIGNED_SHORT_5_6_5;
      case 130 /* D32F */:
        return WebGL2RenderingContext.FLOAT;
      case 129 /* D24 */:
      case 131 /* D24S8 */:
        return WebGL2RenderingContext.UNSIGNED_INT_24_8;
      case 132 /* D32FS8 */:
        return WebGL2RenderingContext.FLOAT_32_UNSIGNED_INT_24_8_REV;
      default:
        throw new Error("whoops");
    }
  }
  isTextureFormatCompressed(fmt) {
    const typeFlags = getFormatTypeFlags(fmt);
    switch (typeFlags) {
      case 65 /* BC1 */:
      case 66 /* BC2 */:
      case 67 /* BC3 */:
      case 68 /* BC4_UNORM */:
      case 69 /* BC4_SNORM */:
      case 70 /* BC5_UNORM */:
      case 71 /* BC5_SNORM */:
      case 72 /* BC6H_UNORM */:
      case 73 /* BC6H_SNORM */:
      case 74 /* BC7 */:
        return true;
      default:
        return false;
    }
  }
  _setActiveTexture(texture) {
    if (this._currentActiveTexture !== texture) {
      this.gl.activeTexture(texture);
      this._currentActiveTexture = texture;
    }
  }
  _setVAO(vao) {
    if (this._currentBoundVAO !== vao) {
      this.gl.bindVertexArray(vao);
      this._currentBoundVAO = vao;
    }
  }
  _programCompiled(program) {
    assert2(program.compileState !== 0 /* NeedsCompile */);
    if (program.compileState === 1 /* Compiling */) {
      program.compileState = 2 /* NeedsBind */;
      if (this._shaderDebug)
        this._checkProgramCompilationForErrors(program);
    }
  }
  _setProgram(program) {
    const gl_program = program.gl_program;
    if (this._currentProgram === gl_program)
      return;
    this._programCompiled(program);
    this.gl.useProgram(gl_program);
    this._currentProgram = gl_program;
  }
  ensureResourceExists(resource) {
    if (resource === null) {
      const error = this.gl.getError();
      throw new Error(`Created resource is null; GL error encountered: ${error}`);
    } else {
      return resource;
    }
  }
  _createBufferPage(byteSize, usage, hint) {
    const gl2 = this.gl;
    const gl_buffer = this.ensureResourceExists(gl2.createBuffer());
    const gl_target = translateBufferUsageToTarget(usage);
    const gl_hint = translateBufferHint(hint);
    gl2.bindBuffer(gl_target, gl_buffer);
    gl2.bufferData(gl_target, byteSize, gl_hint);
    return gl_buffer;
  }
  getNextUniqueId() {
    return ++this._resourceUniqueId;
  }
  createBuffer(byteSize, usage, hint, initialData) {
    const gl_buffer_pages = [];
    let pageByteSize;
    if (usage === 4 /* Uniform */) {
      assert2(byteSize % this._uniformBufferMaxPageByteSize === 0);
      let byteSizeLeft = byteSize;
      while (byteSizeLeft > 0) {
        gl_buffer_pages.push(this._createBufferPage(Math.min(byteSizeLeft, this._uniformBufferMaxPageByteSize), usage, hint));
        byteSizeLeft -= this._uniformBufferMaxPageByteSize;
      }
      pageByteSize = this._uniformBufferMaxPageByteSize;
    } else {
      this.gl.bindVertexArray(null);
      gl_buffer_pages.push(this._createBufferPage(byteSize, usage, hint));
      pageByteSize = byteSize;
      this.gl.bindVertexArray(this._currentBoundVAO);
    }
    const gl_target = translateBufferUsageToTarget(usage);
    const buffer = { _T: 0 /* Buffer */, ResourceUniqueId: this.getNextUniqueId(), gl_buffer_pages, gl_target, usage, byteSize, pageByteSize };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(buffer);
    if (initialData !== void 0)
      this.uploadBufferData(buffer, 0, initialData);
    return buffer;
  }
  _createTexture(descriptor) {
    const gl2 = this.gl;
    const gl_texture = this.ensureResourceExists(gl2.createTexture());
    let gl_target;
    const internalformat = this.translateTextureInternalFormat(descriptor.pixelFormat);
    this._setActiveTexture(gl2.TEXTURE0);
    this._currentTextures[0] = null;
    const numLevels = descriptor.numLevels;
    if (descriptor.dimension === 0 /* n2D */) {
      gl_target = WebGL2RenderingContext.TEXTURE_2D;
      gl2.bindTexture(gl_target, gl_texture);
      gl2.texStorage2D(gl_target, numLevels, internalformat, descriptor.width, descriptor.height);
      assert2(descriptor.depthOrArrayLayers === 1);
    } else if (descriptor.dimension === 1 /* n2DArray */) {
      gl_target = WebGL2RenderingContext.TEXTURE_2D_ARRAY;
      gl2.bindTexture(gl_target, gl_texture);
      gl2.texStorage3D(gl_target, numLevels, internalformat, descriptor.width, descriptor.height, descriptor.depthOrArrayLayers);
    } else if (descriptor.dimension === 2 /* n3D */) {
      gl_target = WebGL2RenderingContext.TEXTURE_3D;
      gl2.bindTexture(gl_target, gl_texture);
      gl2.texStorage3D(gl_target, numLevels, internalformat, descriptor.width, descriptor.height, descriptor.depthOrArrayLayers);
    } else if (descriptor.dimension === 3 /* Cube */) {
      gl_target = WebGL2RenderingContext.TEXTURE_CUBE_MAP;
      gl2.bindTexture(gl_target, gl_texture);
      gl2.texStorage2D(gl_target, numLevels, internalformat, descriptor.width, descriptor.height);
      assert2(descriptor.depthOrArrayLayers === 6);
    } else {
      throw new Error("whoops");
    }
    const texture = {
      _T: 1 /* Texture */,
      ResourceUniqueId: this.getNextUniqueId(),
      gl_texture,
      gl_target,
      dimension: descriptor.dimension,
      pixelFormat: descriptor.pixelFormat,
      width: descriptor.width,
      height: descriptor.height,
      depthOrArrayLayers: descriptor.depthOrArrayLayers,
      numLevels: descriptor.numLevels,
      usage: descriptor.usage,
      formatKind: getFormatSamplerKind(descriptor.pixelFormat)
    };
    return texture;
  }
  createTexture(descriptor) {
    const texture = this._createTexture(descriptor);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(texture);
    return texture;
  }
  createSampler(descriptor) {
    const gl2 = this.gl;
    const gl_sampler = this.ensureResourceExists(gl2.createSampler());
    gl2.samplerParameteri(gl_sampler, gl2.TEXTURE_WRAP_S, translateWrapMode(descriptor.wrapS));
    gl2.samplerParameteri(gl_sampler, gl2.TEXTURE_WRAP_T, translateWrapMode(descriptor.wrapT));
    gl2.samplerParameteri(gl_sampler, gl2.TEXTURE_WRAP_R, translateWrapMode(descriptor.wrapQ ?? descriptor.wrapS));
    gl2.samplerParameteri(gl_sampler, gl2.TEXTURE_MIN_FILTER, translateMinFilter(descriptor.minFilter, descriptor.mipFilter));
    gl2.samplerParameteri(gl_sampler, gl2.TEXTURE_MAG_FILTER, translateMagFilter(descriptor.magFilter));
    if (descriptor.minLOD !== void 0)
      gl2.samplerParameterf(gl_sampler, gl2.TEXTURE_MIN_LOD, descriptor.minLOD);
    if (descriptor.maxLOD !== void 0)
      gl2.samplerParameterf(gl_sampler, gl2.TEXTURE_MAX_LOD, descriptor.maxLOD);
    if (descriptor.compareMode !== void 0) {
      gl2.samplerParameteri(gl_sampler, gl2.TEXTURE_COMPARE_MODE, gl2.COMPARE_REF_TO_TEXTURE);
      gl2.samplerParameteri(gl_sampler, gl2.TEXTURE_COMPARE_FUNC, translateCompareMode(descriptor.compareMode));
    }
    const maxAnisotropy = descriptor.maxAnisotropy ?? 1;
    if (maxAnisotropy > 1 && this._EXT_texture_filter_anisotropic !== null) {
      assert2(descriptor.minFilter === 1 /* Bilinear */ && descriptor.magFilter === 1 /* Bilinear */ && descriptor.mipFilter === 1 /* Linear */);
      gl2.samplerParameterf(gl_sampler, this._EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, maxAnisotropy);
    }
    const sampler = { _T: 3 /* Sampler */, ResourceUniqueId: this.getNextUniqueId(), gl_sampler };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(sampler);
    return sampler;
  }
  createRenderTarget(descriptor) {
    const { pixelFormat, width, height, sampleCount } = descriptor;
    const gl2 = this.gl;
    const gl_renderbuffer = this.ensureResourceExists(gl2.createRenderbuffer());
    gl2.bindRenderbuffer(gl2.RENDERBUFFER, gl_renderbuffer);
    gl2.renderbufferStorageMultisample(gl2.RENDERBUFFER, sampleCount, this.translateTextureInternalFormat(pixelFormat), width, height);
    const renderTarget = {
      _T: 2 /* RenderTarget */,
      ResourceUniqueId: this.getNextUniqueId(),
      gl_renderbuffer,
      gfxTexture: null,
      pixelFormat,
      width,
      height,
      sampleCount
    };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(renderTarget);
    return renderTarget;
  }
  createRenderTargetFromTexture(gfxTexture) {
    const { pixelFormat, width, height } = gfxTexture;
    const renderTarget = {
      _T: 2 /* RenderTarget */,
      ResourceUniqueId: this.getNextUniqueId(),
      gl_renderbuffer: null,
      gfxTexture,
      pixelFormat,
      width,
      height,
      sampleCount: 1
    };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(renderTarget);
    return renderTarget;
  }
  _createProgram(descriptor) {
    const gl2 = this.gl;
    const gl_program = this.ensureResourceExists(gl2.createProgram());
    const gl_shader_vert = null;
    const gl_shader_frag = null;
    const compileState = 0 /* NeedsCompile */;
    const program = { _T: 4 /* Program */, ResourceUniqueId: this.getNextUniqueId(), descriptor, compileState, gl_program, gl_shader_vert, gl_shader_frag };
    return program;
  }
  createComputeProgram(program) {
    throw new Error("whoops");
  }
  createProgram(descriptor) {
    const program = this._createProgram(descriptor);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(program);
    return program;
  }
  createBindings(descriptor) {
    const { bindingLayout, uniformBufferBindings, samplerBindings } = descriptor;
    assert2(uniformBufferBindings.length >= bindingLayout.numUniformBuffers);
    assert2(samplerBindings.length >= bindingLayout.numSamplers);
    const bindings = { _T: 5 /* Bindings */, ResourceUniqueId: this.getNextUniqueId(), uniformBufferBindings, samplerBindings };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(bindings);
    return bindings;
  }
  createInputLayout(inputLayoutDescriptor) {
    const { vertexAttributeDescriptors, vertexBufferDescriptors, indexBufferFormat } = inputLayoutDescriptor;
    assert2(indexBufferFormat === GfxFormat.U16_R || indexBufferFormat === GfxFormat.U32_R || indexBufferFormat === null);
    const indexBufferType = indexBufferFormat !== null ? translateIndexFormat(indexBufferFormat) : null;
    const indexBufferCompByteSize = indexBufferFormat !== null ? getFormatCompByteSize(indexBufferFormat) : null;
    const gl2 = this.gl;
    const vao = this.ensureResourceExists(gl2.createVertexArray());
    gl2.bindVertexArray(vao);
    gl2.bindBuffer(gl2.ARRAY_BUFFER, getPlatformBuffer(this._fallbackVertexBuffer));
    const vertexBufferFormats = [];
    for (let i = 0; i < inputLayoutDescriptor.vertexAttributeDescriptors.length; i++) {
      const attr = inputLayoutDescriptor.vertexAttributeDescriptors[i];
      if (isFormatSizedInteger(attr.format)) {
      }
      const inputLayoutBuffer = assertExists2(inputLayoutDescriptor.vertexBufferDescriptors[attr.bufferIndex]);
      const format = translateVertexFormat(attr.format);
      vertexBufferFormats.push(format);
      if (isFormatSizedInteger(attr.format))
        gl2.vertexAttribIPointer(attr.location, format.size, format.type, 0, 0);
      else
        gl2.vertexAttribPointer(attr.location, format.size, format.type, format.normalized, 0, 0);
      if (inputLayoutBuffer.frequency === 2 /* PerInstance */) {
        gl2.vertexAttribDivisor(attr.location, 1);
      } else if (inputLayoutBuffer.frequency === 3 /* Constant */) {
        gl2.vertexAttribDivisor(attr.location, 4294967295);
      }
      gl2.enableVertexAttribArray(attr.location);
    }
    gl2.bindVertexArray(null);
    const inputLayout = { _T: 6 /* InputLayout */, ResourceUniqueId: this.getNextUniqueId(), vertexAttributeDescriptors, vertexBufferDescriptors, vao, vertexBufferFormats, indexBufferFormat, indexBufferType, indexBufferCompByteSize };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(inputLayout);
    return inputLayout;
  }
  createRenderPipeline(descriptor) {
    const bindingLayouts2 = createBindingLayouts(descriptor.bindingLayouts);
    const drawMode = translatePrimitiveTopology(descriptor.topology);
    const program = descriptor.program;
    const inputLayout = descriptor.inputLayout;
    if (program.compileState === 0 /* NeedsCompile */) {
      if (inputLayout !== null) {
        this._setVAO(inputLayout.vao);
        this._tryCompileProgram(program);
        this._setVAO(null);
      } else {
        this._tryCompileProgram(program);
      }
    }
    const megaState = descriptor.megaStateDescriptor;
    const colorAttachmentFormats = descriptor.colorAttachmentFormats.slice();
    const depthStencilAttachmentFormat = descriptor.depthStencilAttachmentFormat;
    const sampleCount = descriptor.sampleCount;
    const pipeline = {
      _T: 7 /* RenderPipeline */,
      ResourceUniqueId: this.getNextUniqueId(),
      bindingLayouts: bindingLayouts2,
      drawMode,
      program,
      megaState,
      inputLayout,
      colorAttachmentFormats,
      depthStencilAttachmentFormat,
      sampleCount
    };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(pipeline);
    return pipeline;
  }
  createComputePipeline(descriptor) {
    throw new Error("whoops");
  }
  createReadback(byteSize) {
    const gl2 = this.gl;
    const gl_buffer = this.ensureResourceExists(gl2.createBuffer());
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, gl_buffer);
    gl2.bufferData(gl2.PIXEL_PACK_BUFFER, byteSize, gl2.STREAM_READ);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
    const readback = { _T: 9 /* Readback */, ResourceUniqueId: this.getNextUniqueId(), byteSize, gl_buffer, gl_sync: null };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(readback);
    return readback;
  }
  createQueryPool(type, elemCount) {
    const gl2 = this.gl;
    const gl_query = nArray2(elemCount, () => this.ensureResourceExists(gl2.createQuery()));
    const gl_query_type = translateQueryPoolType(type);
    const queryPool = { _T: 10 /* QueryPool */, ResourceUniqueId: this.getNextUniqueId(), gl_query, gl_query_type };
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceCreated(queryPool);
    return queryPool;
  }
  async createWebXRLayer(webXRSession) {
    await this.gl.makeXRCompatible();
    return new XRWebGLLayer(webXRSession, this.gl, { antialias: false });
  }
  destroyBuffer(o) {
    const { gl_buffer_pages } = o;
    for (let i = 0; i < gl_buffer_pages.length; i++)
      this.gl.deleteBuffer(gl_buffer_pages[i]);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  _destroyTexture(o) {
    this.gl.deleteTexture(getPlatformTexture(o));
  }
  destroyTexture(o) {
    this._destroyTexture(o);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroySampler(o) {
    this.gl.deleteSampler(getPlatformSampler(o));
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroyRenderTarget(o_) {
    const o = o_;
    if (o.gl_renderbuffer !== null)
      this.gl.deleteRenderbuffer(o.gl_renderbuffer);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroyProgram(o) {
    const program = o;
    this.gl.deleteProgram(program.gl_program);
    this.gl.deleteShader(program.gl_shader_vert);
    this.gl.deleteShader(program.gl_shader_frag);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroyBindings(o) {
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroyInputLayout(o) {
    const inputLayout = o;
    if (this._currentBoundVAO === inputLayout.vao) {
      this.gl.bindVertexArray(null);
      this._currentBoundVAO = null;
    }
    this.gl.deleteVertexArray(inputLayout.vao);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroyComputePipeline(o) {
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroyRenderPipeline(o) {
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroyReadback(o) {
    const readback = o;
    if (readback.gl_sync !== null)
      this.gl.deleteSync(readback.gl_sync);
    if (readback.gl_buffer !== null)
      this.gl.deleteBuffer(readback.gl_buffer);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(o);
  }
  destroyQueryPool(o) {
    const queryPool = o;
    for (let i = 0; i < queryPool.gl_query.length; i++)
      this.gl.deleteQuery(queryPool.gl_query[i]);
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.trackResourceDestroyed(queryPool);
  }
  pipelineQueryReady(o) {
    const pipeline = o;
    return this.queryProgramReady(pipeline.program);
  }
  pipelineForceReady(o) {
  }
  createRenderPass(descriptor) {
    assert2(this._currentRenderPassDescriptor === null);
    this._currentRenderPassDescriptor = descriptor;
    const { colorAttachments, depthStencilAttachment } = descriptor;
    this._setRenderPassParametersBegin(colorAttachments);
    for (let i = 0; i < colorAttachments.length; i++)
      this._setRenderPassParametersColor(i, colorAttachments[i]);
    this._setRenderPassParametersDepthStencil(depthStencilAttachment);
    this._validateCurrentAttachments();
    for (let i = 0; i < colorAttachments.length; i++) {
      const attachment = colorAttachments[i];
      if (attachment === null)
        continue;
      const clearColor = attachment.clearColor;
      if (clearColor === "load")
        continue;
      this._setRenderPassParametersClearColor(i, clearColor.r, clearColor.g, clearColor.b, clearColor.a);
    }
    if (depthStencilAttachment !== null)
      this._setRenderPassParametersClearDepthStencil(depthStencilAttachment.clearDepth, depthStencilAttachment.clearStencil);
    return this;
  }
  createComputePass() {
    throw new Error("whoops");
  }
  submitPass(o) {
    assert2(o === this);
    assert2(this._currentRenderPassDescriptor !== null);
    this.endPass();
    this._currentRenderPassDescriptor = null;
  }
  beginFrame() {
  }
  endFrame() {
    const gl2 = this.gl;
    if (this._currentMegaState.attachmentsState[0].channelWriteMask !== 8 /* Alpha */) {
      if (this._OES_draw_buffers_indexed !== null) {
        this._OES_draw_buffers_indexed.colorMaskiOES(0, false, false, false, true);
        this._currentMegaState.attachmentsState[0].channelWriteMask = 8 /* Alpha */;
      } else {
        gl2.colorMask(false, false, false, true);
        for (let i = 0; i < this._currentMegaState.attachmentsState.length; i++)
          this._currentMegaState.attachmentsState[0].channelWriteMask = 8 /* Alpha */;
      }
    }
    gl2.clearBufferfv(gl2.COLOR, 0, [0, 0, 0, 1]);
  }
  zeroBuffer(buffer, dstByteOffset, byteCount) {
    this.uploadBufferData(buffer, dstByteOffset, new Uint8Array(byteCount));
  }
  copySubTexture2D(dst_, dstX, dstY, src_, srcX, srcY) {
    const gl2 = this.gl;
    const dst = dst_;
    const src = src_;
    assert2(src.numLevels === 1);
    assert2(dst.numLevels === 1);
    if (dst === this._scTexture) {
      gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, this._scPlatformFramebuffer);
    } else {
      gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, this._resolveColorDrawFramebuffer);
      this._bindFramebufferAttachment(gl2.DRAW_FRAMEBUFFER, gl2.COLOR_ATTACHMENT0, dst);
    }
    gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, this._resolveColorReadFramebuffer);
    this._bindFramebufferAttachment(gl2.READ_FRAMEBUFFER, gl2.COLOR_ATTACHMENT0, src);
    gl2.blitFramebuffer(srcX, srcY, srcX + src.width, srcY + src.height, dstX, dstY, dstX + src.width, dstY + src.height, gl2.COLOR_BUFFER_BIT, gl2.LINEAR);
    gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, null);
    gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, null);
  }
  copyExternalImageToTexture(dst_, dstZ, src) {
    const gl2 = this.gl;
    const dst = dst_;
    assert2(dst !== this._scTexture);
    const gl_target = dst.gl_target;
    assert2(dst.width === src.width);
    assert2(dst.height === src.height);
    const gl_format = this.translateTextureFormat(dst.pixelFormat);
    const gl_type = this.translateTextureType(dst.pixelFormat);
    if (dst.dimension === 0 /* n2D */) {
      assert2(dstZ === 0);
      gl2.texSubImage2D(gl_target, 0, 0, 0, dst.width, dst.height, gl_format, gl_type, src);
    } else if (dst.dimension === 3 /* Cube */) {
      const face_target = WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X + dstZ % 6;
      gl2.texSubImage2D(face_target, 0, 0, 0, dst.width, dst.height, gl_format, gl_type, src);
    } else if (dst.dimension === 2 /* n3D */ || dst.dimension === 1 /* n2DArray */) {
      gl2.texSubImage3D(gl_target, 0, 0, 0, dstZ, dst.width, dst.height, 1, gl_format, gl_type, src);
    }
  }
  uploadBufferData(buffer, dstByteOffset, data, srcByteOffset = 0, byteSize = data.byteLength - srcByteOffset) {
    const gl2 = this.gl;
    const { gl_target, byteSize: dstByteSize, pageByteSize: dstPageByteSize } = buffer;
    if (gl_target === gl2.UNIFORM_BUFFER) {
      if (!(dstByteOffset % dstPageByteSize === 0))
        throw new Error(`Assert fail: (dstByteOffset [${dstByteOffset}] % dstPageByteSize [${dstPageByteSize}]) === 0`);
      if (!(byteSize % dstPageByteSize === 0))
        throw new Error(`Assert fail: (byteSize [${byteSize}] % dstPageByteSize [${dstPageByteSize}]) === 0`);
    }
    if (!(dstByteOffset + byteSize <= dstByteSize))
      throw new Error(`Assert fail: (dstByteOffset [${dstByteOffset}] + byteSize [${byteSize}]) <= dstByteSize [${dstByteSize}], gl_target ${gl_target}`);
    const virtBufferByteOffsetEnd = dstByteOffset + byteSize;
    let virtBufferByteOffset = dstByteOffset;
    let physBufferByteOffset = dstByteOffset % dstPageByteSize;
    while (virtBufferByteOffset < virtBufferByteOffsetEnd) {
      gl2.bindBuffer(gl2.COPY_WRITE_BUFFER, getPlatformBuffer(buffer, virtBufferByteOffset));
      gl2.bufferSubData(gl2.COPY_WRITE_BUFFER, physBufferByteOffset, data, srcByteOffset, Math.min(virtBufferByteOffsetEnd - virtBufferByteOffset, dstPageByteSize));
      virtBufferByteOffset += dstPageByteSize;
      physBufferByteOffset = 0;
      srcByteOffset += dstPageByteSize;
      this._debugGroupStatisticsBufferUpload();
    }
  }
  uploadTextureData(texture, firstMipLevel, levelDatas) {
    const gl2 = this.gl;
    const { gl_texture, gl_target, pixelFormat, width, height, depthOrArrayLayers: depth, numLevels } = texture;
    const isCompressed = this.isTextureFormatCompressed(pixelFormat);
    const is3D = gl_target === WebGL2RenderingContext.TEXTURE_3D || gl_target === WebGL2RenderingContext.TEXTURE_2D_ARRAY;
    const isCube = gl_target === WebGL2RenderingContext.TEXTURE_CUBE_MAP;
    this._setActiveTexture(gl2.TEXTURE0);
    this._currentTextures[0] = null;
    gl2.bindTexture(gl_target, gl_texture);
    let w = width, h = height, d = depth;
    const maxMipLevel = Math.min(firstMipLevel + levelDatas.length, numLevels);
    const gl_format = this.translateTextureFormat(pixelFormat);
    for (let i = 0, levelDatasIdx = 0; i < maxMipLevel; i++) {
      if (i >= firstMipLevel) {
        const levelData = levelDatas[levelDatasIdx++];
        const sliceElementSize = levelData.length / depth;
        if (isCube) {
          for (let z = 0; z < depth; z++) {
            const face_target = WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X + z % 6;
            if (isCompressed) {
              gl2.compressedTexSubImage2D(face_target, i, 0, 0, w, h, gl_format, levelData, z * sliceElementSize, sliceElementSize);
            } else {
              const gl_type = this.translateTextureType(pixelFormat);
              gl2.texSubImage2D(face_target, i, 0, 0, w, h, gl_format, gl_type, levelData, z * sliceElementSize);
            }
          }
        } else if (is3D) {
          if (isCompressed) {
            gl2.compressedTexSubImage3D(gl_target, i, 0, 0, 0, w, h, d, gl_format, levelData);
          } else {
            const gl_type = this.translateTextureType(pixelFormat);
            gl2.texSubImage3D(gl_target, i, 0, 0, 0, w, h, d, gl_format, gl_type, levelData);
          }
        } else {
          if (isCompressed) {
            gl2.compressedTexSubImage2D(gl_target, i, 0, 0, w, h, gl_format, levelData);
          } else {
            const gl_type = this.translateTextureType(pixelFormat);
            gl2.texSubImage2D(gl_target, i, 0, 0, w, h, gl_format, gl_type, levelData);
          }
        }
      }
      w = Math.max(w / 2 | 0, 1);
      h = Math.max(h / 2 | 0, 1);
    }
  }
  readBuffer(o, dstOffset, buffer_, srcOffset, byteSize) {
    const gl2 = this.gl;
    const readback = o;
    const buffer = buffer_;
    const end = srcOffset + byteSize;
    assert2(end <= buffer.byteSize);
    assert2(dstOffset + byteSize <= readback.byteSize);
    while (srcOffset < end) {
      const pageIdx = srcOffset / buffer.pageByteSize | 0;
      const pageOffset = pageIdx * buffer.pageByteSize;
      const pageSrcOffset = srcOffset - pageOffset;
      const pageSize = buffer.pageByteSize - pageSrcOffset;
      gl2.bindBuffer(gl2.COPY_READ_BUFFER, buffer.gl_buffer_pages[pageIdx]);
      gl2.bindBuffer(gl2.COPY_WRITE_BUFFER, readback.gl_buffer);
      gl2.copyBufferSubData(gl2.COPY_READ_BUFFER, gl2.COPY_WRITE_BUFFER, pageSrcOffset, dstOffset, pageSize);
      srcOffset += pageSize;
      dstOffset += pageSize;
    }
    gl2.bindBuffer(gl2.COPY_READ_BUFFER, null);
    gl2.bindBuffer(gl2.COPY_WRITE_BUFFER, null);
  }
  readPixelFromTexture(o, dstOffset, a, x, y) {
    const gl2 = this.gl;
    const readback = o;
    gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, this._readbackFramebuffer);
    const texture = a;
    gl2.framebufferTexture2D(gl2.READ_FRAMEBUFFER, gl2.COLOR_ATTACHMENT0, gl2.TEXTURE_2D, texture.gl_texture, 0);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, readback.gl_buffer);
    const gl_format = this.translateTextureFormat(texture.pixelFormat);
    const gl_type = this.translateTextureType(texture.pixelFormat);
    const formatByteSize = getFormatByteSize(texture.pixelFormat);
    gl2.readPixels(x, y, 1, 1, gl_format, gl_type, dstOffset * formatByteSize);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
  }
  submitReadback(o) {
    const gl2 = this.gl;
    const readback = o;
    if (readback.gl_sync !== null) {
      gl2.deleteSync(readback.gl_sync);
    }
    readback.gl_sync = gl2.fenceSync(gl2.SYNC_GPU_COMMANDS_COMPLETE, 0);
  }
  queryReadbackFinished(dst, dstOffs, o) {
    const gl2 = this.gl;
    const readback = o;
    const gl_sync = assertExists2(readback.gl_sync);
    if (gl2.getSyncParameter(gl_sync, gl2.SYNC_STATUS) === gl2.SIGNALED) {
      gl2.bindBuffer(gl2.PIXEL_UNPACK_BUFFER, readback.gl_buffer);
      gl2.getBufferSubData(gl2.PIXEL_UNPACK_BUFFER, 0, dst, dstOffs);
      gl2.bindBuffer(gl2.PIXEL_UNPACK_BUFFER, null);
      return true;
    } else {
      return false;
    }
  }
  queryPoolResultOcclusion(o, dstOffs) {
    const gl2 = this.gl;
    const queryPool = o;
    const gl_query = queryPool.gl_query[dstOffs];
    if (!gl2.getQueryParameter(gl_query, gl2.QUERY_RESULT_AVAILABLE))
      return null;
    return !!gl2.getQueryParameter(gl_query, gl2.QUERY_RESULT);
  }
  queryLimits() {
    return this;
  }
  queryTextureFormatSupported(format, width, height) {
    switch (format) {
      case GfxFormat.BC1_SRGB:
      case GfxFormat.BC2_SRGB:
      case GfxFormat.BC3_SRGB:
        if (this._WEBGL_compressed_texture_s3tc_srgb !== null)
          return isBlockCompressSized(width, height, 4, 4);
        return false;
      case GfxFormat.BC1:
      case GfxFormat.BC2:
      case GfxFormat.BC3:
        if (this._WEBGL_compressed_texture_s3tc !== null)
          return isBlockCompressSized(width, height, 4, 4);
        return false;
      case GfxFormat.BC4_UNORM:
      case GfxFormat.BC4_SNORM:
      case GfxFormat.BC5_UNORM:
      case GfxFormat.BC5_SNORM:
        if (this._EXT_texture_compression_rgtc !== null)
          return isBlockCompressSized(width, height, 4, 4);
        return false;
      case GfxFormat.BC6H_UNORM:
      case GfxFormat.BC6H_SNORM:
      case GfxFormat.BC7:
      case GfxFormat.BC7_SRGB:
        if (this._EXT_texture_compression_bptc !== null)
          return isBlockCompressSized(width, height, 4, 4);
        return false;
      case GfxFormat.U16_R_NORM:
      case GfxFormat.U16_RG_NORM:
      case GfxFormat.U16_RGBA_NORM:
        return this._EXT_texture_norm16 !== null;
      case GfxFormat.F32_R:
      case GfxFormat.F32_RG:
      case GfxFormat.F32_RGB:
      case GfxFormat.F32_RGBA:
        return this._OES_texture_float_linear !== null;
      case GfxFormat.F16_R:
      case GfxFormat.F16_RG:
      case GfxFormat.F16_RGB:
      case GfxFormat.F16_RGBA:
        return this._OES_texture_half_float_linear !== null;
      default:
        return true;
    }
  }
  queryProgramReady(program) {
    const gl2 = this.gl;
    if (program.compileState === 0 /* NeedsCompile */) {
      throw new Error("whoops");
    }
    if (program.compileState === 1 /* Compiling */) {
      let complete;
      if (this._KHR_parallel_shader_compile !== null) {
        complete = gl2.getProgramParameter(program.gl_program, this._KHR_parallel_shader_compile.COMPLETION_STATUS_KHR);
      } else {
        complete = true;
      }
      if (complete)
        this._programCompiled(program);
      return complete;
    }
    return program.compileState === 2 /* NeedsBind */ || program.compileState === 3 /* ReadyToUse */;
  }
  queryVendorInfo() {
    return this;
  }
  queryRenderPass(o) {
    return this._currentRenderPassDescriptor;
  }
  queryRenderTarget(o) {
    const renderTarget = o;
    return renderTarget;
  }
  //#endregion
  //#region Debugging
  setResourceName(o, name) {
    o.ResourceName = name;
    if (o._T === 0 /* Buffer */) {
      const { gl_buffer_pages } = o;
      for (let i = 0; i < gl_buffer_pages.length; i++)
        assignPlatformName(gl_buffer_pages[i], `${name} Page ${i}`);
    } else if (o._T === 1 /* Texture */) {
      assignPlatformName(getPlatformTexture(o), name);
    } else if (o._T === 3 /* Sampler */) {
      assignPlatformName(getPlatformSampler(o), name);
    } else if (o._T === 2 /* RenderTarget */) {
      const { gl_renderbuffer } = o;
      if (gl_renderbuffer !== null)
        assignPlatformName(gl_renderbuffer, name);
    } else if (o._T === 6 /* InputLayout */) {
      assignPlatformName(o.vao, name);
    }
  }
  checkForLeaks() {
    if (this._resourceCreationTracker !== null)
      this._resourceCreationTracker.checkForLeaks();
  }
  setStatisticsGroup(statisticsGroup) {
    this._currentStatisticsGroup = statisticsGroup;
  }
  programPatched(o, descriptor) {
    assert2(this._shaderDebug);
    const program = o;
    const gl2 = this.gl;
    gl2.deleteProgram(program.gl_program);
    program.descriptor = descriptor;
    program.gl_program = this.ensureResourceExists(gl2.createProgram());
    program.compileState = 0 /* NeedsCompile */;
    this._tryCompileProgram(program);
    this._checkProgramCompilationForErrors(program);
  }
  getBufferData(buffer, dstBuffer, wordOffset = 0) {
    const gl2 = this.gl;
    gl2.bindBuffer(gl2.COPY_READ_BUFFER, getPlatformBuffer(buffer, wordOffset * 4));
    gl2.getBufferSubData(gl2.COPY_READ_BUFFER, wordOffset * 4, dstBuffer);
  }
  //#endregion
  //#region Pass execution
  _debugGroupStatisticsDrawCall(count = 1) {
    if (this._currentStatisticsGroup !== null)
      this._currentStatisticsGroup.drawCallCount += count;
  }
  _debugGroupStatisticsBufferUpload(count = 1) {
    if (this._currentStatisticsGroup !== null)
      this._currentStatisticsGroup.bufferUploadCount += count;
  }
  _debugGroupStatisticsTextureBind(count = 1) {
    if (this._currentStatisticsGroup !== null)
      this._currentStatisticsGroup.textureBindCount += count;
  }
  _debugGroupStatisticsTriangles(count) {
    if (this._currentStatisticsGroup !== null)
      this._currentStatisticsGroup.triangleCount += count;
  }
  _compileShader(contents, type) {
    const gl2 = this.gl;
    const shader = this.ensureResourceExists(gl2.createShader(type));
    gl2.shaderSource(shader, contents);
    gl2.compileShader(shader);
    return shader;
  }
  _reportShaderError(shader, str6) {
    const gl2 = this.gl;
    const status = gl2.getShaderParameter(shader, gl2.COMPILE_STATUS);
    if (!status) {
      console.error(prependLineNo(str6));
      const debug_shaders = gl2.getExtension("WEBGL_debug_shaders");
      if (debug_shaders)
        console.error(debug_shaders.getTranslatedShaderSource(shader));
      console.error(gl2.getShaderInfoLog(shader));
    }
    return status;
  }
  _checkProgramCompilationForErrors(program) {
    const gl2 = this.gl;
    const prog = program.gl_program;
    if (!gl2.getProgramParameter(prog, gl2.LINK_STATUS)) {
      const descriptor = program.descriptor;
      if (!this._reportShaderError(program.gl_shader_vert, descriptor.preprocessedVert))
        return;
      if (program.gl_shader_frag !== null) {
        if (!this._reportShaderError(program.gl_shader_frag, descriptor.preprocessedFrag))
          return;
      }
      console.error(gl2.getProgramInfoLog(program.gl_program));
      debugger;
    }
  }
  _tryCompileProgram(program) {
    assert2(program.compileState === 0 /* NeedsCompile */);
    const descriptor = program.descriptor;
    const gl2 = this.gl;
    if (program.gl_shader_vert !== null)
      gl2.deleteShader(program.gl_shader_vert);
    if (program.gl_shader_frag !== null)
      gl2.deleteShader(program.gl_shader_frag);
    program.gl_shader_vert = this._compileShader(descriptor.preprocessedVert, gl2.VERTEX_SHADER);
    gl2.attachShader(program.gl_program, program.gl_shader_vert);
    if (descriptor.preprocessedFrag !== null) {
      program.gl_shader_frag = this._compileShader(descriptor.preprocessedFrag, gl2.FRAGMENT_SHADER);
      gl2.attachShader(program.gl_program, program.gl_shader_frag);
    }
    gl2.linkProgram(program.gl_program);
    program.compileState = 1 /* Compiling */;
  }
  _bindFramebufferAttachmentTexture(framebuffer, binding, texture_, attachmentView) {
    const gl2 = this.gl;
    const texture = texture_;
    const gl_texture = texture.gl_texture, gl_target = texture.gl_target;
    const level = attachmentView !== null ? attachmentView.level : 0;
    const z = attachmentView !== null ? attachmentView.z : 0;
    if (gl_target === gl2.TEXTURE_2D) {
      assert2(z === 0);
      gl2.framebufferTexture2D(framebuffer, binding, gl_target, gl_texture, level);
    } else if (gl_target === gl2.TEXTURE_CUBE_MAP) {
      assert2(z < 6);
      gl2.framebufferTexture2D(framebuffer, binding, gl2.TEXTURE_CUBE_MAP_POSITIVE_X + z, gl_texture, level);
    } else if (gl_target === gl2.TEXTURE_2D_ARRAY || gl_target === gl2.TEXTURE_3D) {
      assert2(z < texture.depthOrArrayLayers);
      gl2.framebufferTextureLayer(framebuffer, binding, gl_texture, level, z);
    }
  }
  _bindFramebufferAttachment(framebuffer, binding, attachment, attachmentView = null) {
    const gl2 = this.gl;
    if (attachment === null) {
      gl2.framebufferRenderbuffer(framebuffer, binding, gl2.RENDERBUFFER, null);
    } else if (attachment._T === 2 /* RenderTarget */) {
      if (attachment.gl_renderbuffer !== null)
        gl2.framebufferRenderbuffer(framebuffer, binding, gl2.RENDERBUFFER, attachment.gl_renderbuffer);
      else if (attachment.gfxTexture !== null)
        this._bindFramebufferAttachmentTexture(framebuffer, binding, attachment.gfxTexture, attachmentView);
    } else if (attachment._T === 1 /* Texture */) {
      this._bindFramebufferAttachmentTexture(framebuffer, binding, attachment, attachmentView);
    }
  }
  _bindFramebufferDepthStencilAttachment(framebuffer, attachment, view) {
    const gl2 = this.gl;
    const flags = attachment !== null ? getFormatFlags(attachment.pixelFormat) : 4 /* Depth */ | 8 /* Stencil */;
    const depth = !!(flags & 4 /* Depth */), stencil = !!(flags & 8 /* Stencil */);
    if (depth && stencil) {
      this._bindFramebufferAttachment(framebuffer, gl2.DEPTH_STENCIL_ATTACHMENT, attachment, view);
    } else if (depth) {
      this._bindFramebufferAttachment(framebuffer, gl2.DEPTH_ATTACHMENT, attachment, view);
      this._bindFramebufferAttachment(framebuffer, gl2.STENCIL_ATTACHMENT, null);
    } else if (stencil) {
      this._bindFramebufferAttachment(framebuffer, gl2.STENCIL_ATTACHMENT, attachment, view);
      this._bindFramebufferAttachment(framebuffer, gl2.DEPTH_ATTACHMENT, null);
    }
  }
  _validateCurrentAttachments() {
    let sampleCount = -1, width = -1, height = -1;
    for (let i = 0; i < this._currentColorAttachment.length; i++) {
      const attachment = this._currentColorAttachment[i];
      if (attachment === null)
        continue;
      if (sampleCount === -1) {
        sampleCount = attachment.sampleCount;
        width = attachment.width;
        height = attachment.height;
      } else {
        assert2(sampleCount === attachment.sampleCount);
        assert2(width === attachment.width);
        assert2(height === attachment.height);
      }
    }
    this._currentSampleCount = sampleCount;
  }
  _setRenderPassParametersBegin(colorAttachments) {
    const gl2 = this.gl;
    if (colorAttachments.length === 1 && (colorAttachments[0]?.renderTarget).gfxTexture === this._scTexture) {
      gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, this._scPlatformFramebuffer);
      return;
    }
    gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, this._renderPassDrawFramebuffer);
    gl2.drawBuffers([gl2.COLOR_ATTACHMENT0, gl2.COLOR_ATTACHMENT1, gl2.COLOR_ATTACHMENT2, gl2.COLOR_ATTACHMENT3]);
    for (let i = colorAttachments.length; i < this._currentColorAttachment.length; i++) {
      const attachment = this._currentColorAttachment[i];
      if (!attachment)
        continue;
      else if (attachment.gl_renderbuffer !== null)
        gl2.framebufferRenderbuffer(gl2.DRAW_FRAMEBUFFER, gl2.COLOR_ATTACHMENT0 + i, gl2.RENDERBUFFER, null);
      else if (attachment.gfxTexture !== null)
        gl2.framebufferTexture2D(gl2.DRAW_FRAMEBUFFER, gl2.COLOR_ATTACHMENT0 + i, gl2.TEXTURE_2D, null, 0);
      this._currentColorAttachment[i] = null;
    }
    this._currentColorAttachment.length = colorAttachments.length;
  }
  _setRenderPassParametersColor(i, passAttachment) {
    const gl2 = this.gl;
    const attachment = passAttachment !== null ? passAttachment.renderTarget : null;
    const attachmentView = passAttachment !== null ? passAttachment.view : null;
    assert2(!!attachment === !!attachmentView);
    if (this._currentColorAttachment[i] !== attachment || !gfxRenderAttachmentViewEquals(this._currentColorAttachmentView[i], attachmentView)) {
      this._currentColorAttachment[i] = attachment;
      this._currentColorAttachmentView[i] = attachmentView;
      this._bindFramebufferAttachment(gl2.DRAW_FRAMEBUFFER, gl2.COLOR_ATTACHMENT0 + i, attachment, attachmentView);
      this._resolveColorAttachmentsChanged = true;
    }
    const resolveTo = passAttachment !== null ? passAttachment.resolveTo : null;
    const resolveView = passAttachment !== null ? passAttachment.resolveView : null;
    assert2(!!resolveTo === !!resolveView);
    if (this._currentColorResolveTo[i] !== resolveTo || this._currentColorResolveView[i] !== resolveView) {
      this._currentColorResolveTo[i] = resolveTo;
      this._currentColorResolveView[i] = resolveView;
      if (resolveTo !== null)
        this._resolveColorAttachmentsChanged = true;
    }
  }
  _setRenderPassParametersDepthStencil(passAttachment) {
    const gl2 = this.gl;
    const attachment = passAttachment !== null ? passAttachment.renderTarget : null;
    const attachmentView = passAttachment !== null ? passAttachment.view : null;
    if (this._currentDepthStencilAttachment !== attachment || !gfxRenderAttachmentViewEquals(this._currentDepthStencilAttachmentView, attachmentView)) {
      this._currentDepthStencilAttachment = attachment;
      this._currentDepthStencilAttachmentView = attachmentView;
      this._bindFramebufferDepthStencilAttachment(gl2.DRAW_FRAMEBUFFER, this._currentDepthStencilAttachment, attachmentView);
      this._resolveDepthStencilAttachmentsChanged = true;
    }
    const resolveTo = passAttachment !== null ? passAttachment.resolveTo : null;
    const resolveView = passAttachment !== null ? passAttachment.resolveView : null;
    if (this._currentDepthStencilResolveTo !== resolveTo || !gfxRenderAttachmentViewEquals(this._currentDepthStencilResolveView, resolveView)) {
      this._currentDepthStencilResolveTo = resolveTo;
      this._currentDepthStencilResolveView = resolveView;
      if (resolveTo !== null)
        this._resolveDepthStencilAttachmentsChanged = true;
    }
  }
  _setScissorEnabled(v) {
    if (this._currentScissorEnabled === v)
      return;
    const gl2 = this.gl;
    if (v)
      gl2.enable(gl2.SCISSOR_TEST);
    else
      gl2.disable(gl2.SCISSOR_TEST);
    this._currentScissorEnabled = v;
  }
  _setRenderPassParametersClearColor(slot, r, g, b, a) {
    const gl2 = this.gl;
    if (this._OES_draw_buffers_indexed !== null) {
      const attachment = this._currentMegaState.attachmentsState[slot];
      if (attachment.channelWriteMask !== 15 /* AllChannels */) {
        this._OES_draw_buffers_indexed.colorMaskiOES(slot, true, true, true, true);
        attachment.channelWriteMask = 15 /* AllChannels */;
      }
    } else {
      const attachment = this._currentMegaState.attachmentsState[0];
      if (attachment.channelWriteMask !== 15 /* AllChannels */) {
        gl2.colorMask(true, true, true, true);
        attachment.channelWriteMask = 15 /* AllChannels */;
      }
    }
    this._setScissorEnabled(false);
    gl2.clearBufferfv(gl2.COLOR, slot, [r, g, b, a]);
  }
  _setRenderPassParametersClearDepthStencil(clearDepth, clearStencil) {
    const gl2 = this.gl;
    if (clearDepth !== "load") {
      assert2(this._currentDepthStencilAttachment !== null);
      if (!this._currentMegaState.depthWrite) {
        gl2.depthMask(true);
        this._currentMegaState.depthWrite = true;
      }
      gl2.clearBufferfv(gl2.DEPTH, 0, [clearDepth]);
    }
    if (clearStencil !== "load") {
      assert2(this._currentDepthStencilAttachment !== null);
      if (!this._currentMegaState.stencilWrite) {
        gl2.stencilMask(255);
        this._currentMegaState.stencilWrite = true;
      }
      gl2.clearBufferiv(gl2.STENCIL, 0, [clearStencil]);
    }
  }
  _getFallbackTexture(samplerEntry) {
    const gl2 = this.gl;
    const gl_target = samplerEntry.gl_target, formatKind = samplerEntry.formatKind;
    if (gl_target === gl2.TEXTURE_2D && formatKind === 4 /* Depth */)
      return this._fallbackTexture2DDepth;
    else if (gl_target === gl2.TEXTURE_2D)
      return this._fallbackTexture2D;
    else if (gl_target === gl2.TEXTURE_2D_ARRAY)
      return this._fallbackTexture2DArray;
    else if (gl_target === gl2.TEXTURE_3D)
      return this._fallbackTexture3D;
    else if (gl_target === gl2.TEXTURE_CUBE_MAP)
      return this._fallbackTextureCube;
    else
      throw new Error("whoops");
  }
  setBindings(bindingLayoutIndex, bindings_, dynamicByteOffsets) {
    const gl2 = this.gl;
    assert2(bindingLayoutIndex < this._currentPipeline.bindingLayouts.bindingLayoutTables.length);
    const bindingLayoutTable = this._currentPipeline.bindingLayouts.bindingLayoutTables[bindingLayoutIndex];
    const { uniformBufferBindings, samplerBindings } = bindings_;
    assert2(uniformBufferBindings.length >= bindingLayoutTable.numUniformBuffers);
    assert2(dynamicByteOffsets.length >= bindingLayoutTable.numUniformBuffers);
    assert2(samplerBindings.length >= bindingLayoutTable.numSamplers);
    for (let i = 0; i < bindingLayoutTable.numUniformBuffers; i++) {
      const binding = uniformBufferBindings[i];
      if (binding.byteSize === 0)
        continue;
      const index = bindingLayoutTable.firstUniformBuffer + i;
      const buffer = binding.buffer;
      const byteOffset = dynamicByteOffsets[i];
      const byteSize = binding.byteSize;
      if (buffer !== this._currentUniformBuffers[index] || byteOffset !== this._currentUniformBufferByteOffsets[index] || byteSize !== this._currentUniformBufferByteSizes[index]) {
        const platformBufferByteOffset = byteOffset % buffer.pageByteSize;
        const platformBuffer = buffer.gl_buffer_pages[byteOffset / buffer.pageByteSize | 0];
        assert2(platformBufferByteOffset + byteSize <= buffer.pageByteSize);
        gl2.bindBufferRange(gl2.UNIFORM_BUFFER, index, platformBuffer, platformBufferByteOffset, byteSize);
        this._currentUniformBuffers[index] = buffer;
        this._currentUniformBufferByteOffsets[index] = byteOffset;
        this._currentUniformBufferByteSizes[index] = byteSize;
      }
    }
    for (let i = 0; i < bindingLayoutTable.numSamplers; i++) {
      const binding = samplerBindings[i];
      const samplerIndex = bindingLayoutTable.firstSampler + i;
      const samplerEntry = bindingLayoutTable.samplerEntries[i];
      const gfxTexture = binding !== null ? binding.gfxTexture : null;
      const gl_texture = gfxTexture !== null ? getPlatformTexture(gfxTexture) : null;
      const gl_sampler = binding !== null && binding.gfxSampler !== null ? getPlatformSampler(binding.gfxSampler) : null;
      if (this._currentSamplers[samplerIndex] !== gl_sampler) {
        gl2.bindSampler(samplerIndex, gl_sampler);
        this._currentSamplers[samplerIndex] = gl_sampler;
      }
      if (this._currentTextures[samplerIndex] !== gl_texture) {
        this._setActiveTexture(gl2.TEXTURE0 + samplerIndex);
        if (gfxTexture !== null) {
          const { gl_target, formatKind } = gfxTexture;
          gl2.bindTexture(gl_target, gl_texture);
          this._debugGroupStatisticsTextureBind();
          assert2(samplerEntry.gl_target === gl_target);
          assert2(isFormatSamplerKindCompatible(samplerEntry.formatKind, formatKind));
        } else {
          gl2.bindTexture(samplerEntry.gl_target, this._getFallbackTexture(samplerEntry));
        }
        this._currentTextures[samplerIndex] = gl_texture;
      }
    }
  }
  setViewport(x, y, w, h) {
    const gl2 = this.gl;
    gl2.viewport(x, y, w, h);
  }
  setScissor(x, y, w, h) {
    const gl2 = this.gl;
    this._setScissorEnabled(true);
    gl2.scissor(x, y, w, h);
  }
  _setAttachmentStateIndexed(i, newAttachmentState) {
    const gl2 = this.gl;
    const dbi = this._OES_draw_buffers_indexed;
    const currentAttachmentState = this._currentMegaState.attachmentsState[i];
    if (currentAttachmentState.channelWriteMask !== newAttachmentState.channelWriteMask) {
      dbi.colorMaskiOES(
        i,
        !!(newAttachmentState.channelWriteMask & 1 /* Red */),
        !!(newAttachmentState.channelWriteMask & 2 /* Green */),
        !!(newAttachmentState.channelWriteMask & 4 /* Blue */),
        !!(newAttachmentState.channelWriteMask & 8 /* Alpha */)
      );
      currentAttachmentState.channelWriteMask = newAttachmentState.channelWriteMask;
    }
    const blendModeChanged = currentAttachmentState.rgbBlendState.blendMode !== newAttachmentState.rgbBlendState.blendMode || currentAttachmentState.alphaBlendState.blendMode !== newAttachmentState.alphaBlendState.blendMode;
    const blendFuncChanged = currentAttachmentState.rgbBlendState.blendSrcFactor !== newAttachmentState.rgbBlendState.blendSrcFactor || currentAttachmentState.alphaBlendState.blendSrcFactor !== newAttachmentState.alphaBlendState.blendSrcFactor || currentAttachmentState.rgbBlendState.blendDstFactor !== newAttachmentState.rgbBlendState.blendDstFactor || currentAttachmentState.alphaBlendState.blendDstFactor !== newAttachmentState.alphaBlendState.blendDstFactor;
    const blendDisabled = isBlendStateNone(newAttachmentState.rgbBlendState) && isBlendStateNone(newAttachmentState.alphaBlendState);
    if (blendFuncChanged || blendModeChanged) {
      if (isBlendStateNone(currentAttachmentState.rgbBlendState) && isBlendStateNone(currentAttachmentState.alphaBlendState))
        dbi.enableiOES(gl2.BLEND, i);
      else if (blendDisabled)
        dbi.disableiOES(gl2.BLEND, i);
    }
    if (blendModeChanged) {
      dbi.blendEquationSeparateiOES(
        i,
        translateBlendMode(newAttachmentState.rgbBlendState.blendMode),
        translateBlendMode(newAttachmentState.alphaBlendState.blendMode)
      );
      currentAttachmentState.rgbBlendState.blendMode = newAttachmentState.rgbBlendState.blendMode;
      currentAttachmentState.alphaBlendState.blendMode = newAttachmentState.alphaBlendState.blendMode;
    }
    if (blendFuncChanged) {
      dbi.blendFuncSeparateiOES(
        i,
        translateBlendFactor(newAttachmentState.rgbBlendState.blendSrcFactor),
        translateBlendFactor(newAttachmentState.rgbBlendState.blendDstFactor),
        translateBlendFactor(newAttachmentState.alphaBlendState.blendSrcFactor),
        translateBlendFactor(newAttachmentState.alphaBlendState.blendDstFactor)
      );
      currentAttachmentState.rgbBlendState.blendSrcFactor = newAttachmentState.rgbBlendState.blendSrcFactor;
      currentAttachmentState.alphaBlendState.blendSrcFactor = newAttachmentState.alphaBlendState.blendSrcFactor;
      currentAttachmentState.rgbBlendState.blendDstFactor = newAttachmentState.rgbBlendState.blendDstFactor;
      currentAttachmentState.alphaBlendState.blendDstFactor = newAttachmentState.alphaBlendState.blendDstFactor;
    }
  }
  _setAttachmentState(newAttachmentState) {
    const gl2 = this.gl;
    const currentAttachmentState = this._currentMegaState.attachmentsState[0];
    if (currentAttachmentState.channelWriteMask !== newAttachmentState.channelWriteMask) {
      gl2.colorMask(
        !!(newAttachmentState.channelWriteMask & 1 /* Red */),
        !!(newAttachmentState.channelWriteMask & 2 /* Green */),
        !!(newAttachmentState.channelWriteMask & 4 /* Blue */),
        !!(newAttachmentState.channelWriteMask & 8 /* Alpha */)
      );
      currentAttachmentState.channelWriteMask = newAttachmentState.channelWriteMask;
    }
    const blendModeChanged = currentAttachmentState.rgbBlendState.blendMode !== newAttachmentState.rgbBlendState.blendMode || currentAttachmentState.alphaBlendState.blendMode !== newAttachmentState.alphaBlendState.blendMode;
    const blendFuncChanged = currentAttachmentState.rgbBlendState.blendSrcFactor !== newAttachmentState.rgbBlendState.blendSrcFactor || currentAttachmentState.alphaBlendState.blendSrcFactor !== newAttachmentState.alphaBlendState.blendSrcFactor || currentAttachmentState.rgbBlendState.blendDstFactor !== newAttachmentState.rgbBlendState.blendDstFactor || currentAttachmentState.alphaBlendState.blendDstFactor !== newAttachmentState.alphaBlendState.blendDstFactor;
    if (blendFuncChanged || blendModeChanged) {
      if (isBlendStateNone(currentAttachmentState.rgbBlendState) && isBlendStateNone(currentAttachmentState.alphaBlendState))
        gl2.enable(gl2.BLEND);
      else if (isBlendStateNone(newAttachmentState.rgbBlendState) && isBlendStateNone(newAttachmentState.alphaBlendState))
        gl2.disable(gl2.BLEND);
    }
    if (blendModeChanged) {
      gl2.blendEquationSeparate(
        translateBlendMode(newAttachmentState.rgbBlendState.blendMode),
        translateBlendMode(newAttachmentState.alphaBlendState.blendMode)
      );
      currentAttachmentState.rgbBlendState.blendMode = newAttachmentState.rgbBlendState.blendMode;
      currentAttachmentState.alphaBlendState.blendMode = newAttachmentState.alphaBlendState.blendMode;
    }
    if (blendFuncChanged) {
      gl2.blendFuncSeparate(
        translateBlendFactor(newAttachmentState.rgbBlendState.blendSrcFactor),
        translateBlendFactor(newAttachmentState.rgbBlendState.blendDstFactor),
        translateBlendFactor(newAttachmentState.alphaBlendState.blendSrcFactor),
        translateBlendFactor(newAttachmentState.alphaBlendState.blendDstFactor)
      );
      currentAttachmentState.rgbBlendState.blendSrcFactor = newAttachmentState.rgbBlendState.blendSrcFactor;
      currentAttachmentState.alphaBlendState.blendSrcFactor = newAttachmentState.alphaBlendState.blendSrcFactor;
      currentAttachmentState.rgbBlendState.blendDstFactor = newAttachmentState.rgbBlendState.blendDstFactor;
      currentAttachmentState.alphaBlendState.blendDstFactor = newAttachmentState.alphaBlendState.blendDstFactor;
    }
  }
  _applyStencil() {
    if (this._currentStencilRef === null)
      return;
    this.gl.stencilFunc(translateCompareMode(this._currentMegaState.stencilCompare), this._currentStencilRef, 255);
  }
  _setMegaState(newMegaState) {
    const gl2 = this.gl;
    const currentMegaState = this._currentMegaState;
    if (this._OES_draw_buffers_indexed !== null) {
      assert2(newMegaState.attachmentsState.length === 1 || newMegaState.attachmentsState.length >= this._currentColorAttachment.length);
      for (let i = 0; i < this._currentColorAttachment.length; i++) {
        if (this._currentColorAttachment[i] === null)
          continue;
        const newAttachmentState = newMegaState.attachmentsState.length === 1 ? newMegaState.attachmentsState[0] : newMegaState.attachmentsState[i];
        this._setAttachmentStateIndexed(i, newAttachmentState);
      }
    } else {
      assert2(newMegaState.attachmentsState.length === 1);
      this._setAttachmentState(newMegaState.attachmentsState[0]);
    }
    if (currentMegaState.depthCompare !== newMegaState.depthCompare) {
      gl2.depthFunc(translateCompareMode(newMegaState.depthCompare));
      currentMegaState.depthCompare = newMegaState.depthCompare;
    }
    if (currentMegaState.depthWrite !== newMegaState.depthWrite) {
      gl2.depthMask(newMegaState.depthWrite);
      currentMegaState.depthWrite = newMegaState.depthWrite;
    }
    if (currentMegaState.stencilCompare !== newMegaState.stencilCompare) {
      currentMegaState.stencilCompare = newMegaState.stencilCompare;
      this._applyStencil();
    }
    if (currentMegaState.stencilWrite !== newMegaState.stencilWrite) {
      gl2.stencilMask(newMegaState.stencilWrite ? 255 : 0);
      currentMegaState.stencilWrite = newMegaState.stencilWrite;
    }
    if (currentMegaState.stencilWrite) {
      if (currentMegaState.stencilPassOp !== newMegaState.stencilPassOp) {
        gl2.stencilOp(gl2.KEEP, gl2.KEEP, translateStencilOp(newMegaState.stencilPassOp));
        currentMegaState.stencilPassOp = newMegaState.stencilPassOp;
      }
    }
    if (currentMegaState.cullMode !== newMegaState.cullMode) {
      if (currentMegaState.cullMode === 0 /* None */)
        gl2.enable(gl2.CULL_FACE);
      else if (newMegaState.cullMode === 0 /* None */)
        gl2.disable(gl2.CULL_FACE);
      if (newMegaState.cullMode === 2 /* Back */)
        gl2.cullFace(gl2.BACK);
      else if (newMegaState.cullMode === 1 /* Front */)
        gl2.cullFace(gl2.FRONT);
      currentMegaState.cullMode = newMegaState.cullMode;
    }
    if (currentMegaState.frontFace !== newMegaState.frontFace) {
      gl2.frontFace(translateFrontFaceMode(newMegaState.frontFace));
      currentMegaState.frontFace = newMegaState.frontFace;
    }
    if (currentMegaState.polygonOffset !== newMegaState.polygonOffset) {
      if (newMegaState.polygonOffset) {
        gl2.polygonOffset(1, 1);
        gl2.enable(gl2.POLYGON_OFFSET_FILL);
      } else {
        gl2.disable(gl2.POLYGON_OFFSET_FILL);
      }
      currentMegaState.polygonOffset = newMegaState.polygonOffset;
    }
    if (currentMegaState.wireframe !== newMegaState.wireframe) {
      assert2(this.wireframeSupported || !currentMegaState.wireframe);
      if (newMegaState.wireframe) {
        this._WEBGL_polygon_mode.polygonModeWEBGL(gl2.FRONT_AND_BACK, this._WEBGL_polygon_mode.LINE_WEBGL);
      } else {
        this._WEBGL_polygon_mode.polygonModeWEBGL(gl2.FRONT_AND_BACK, this._WEBGL_polygon_mode.FILL_WEBGL);
      }
      currentMegaState.wireframe = newMegaState.wireframe;
    }
  }
  _validatePipelineFormats(pipeline) {
    for (let i = 0; i < this._currentColorAttachment.length; i++) {
      const attachment = this._currentColorAttachment[i];
      if (attachment === null)
        continue;
      assert2(attachment.pixelFormat === pipeline.colorAttachmentFormats[i]);
    }
    if (this._currentDepthStencilAttachment !== null)
      assert2(this._currentDepthStencilAttachment.pixelFormat === pipeline.depthStencilAttachmentFormat);
    if (this._currentSampleCount !== -1)
      assert2(this._currentSampleCount === pipeline.sampleCount);
  }
  setPipeline(o) {
    this._currentPipeline = o;
    this._validatePipelineFormats(this._currentPipeline);
    this._setMegaState(this._currentPipeline.megaState);
    const program = this._currentPipeline.program;
    this._setProgram(program);
    if (program.compileState === 2 /* NeedsBind */) {
      const gl2 = this.gl, prog = program.gl_program;
      const deviceProgram = program.descriptor;
      const uboNameRegex = /uniform (\w+) {[^]*?}/g;
      const uboNamesVert = findall(deviceProgram.preprocessedVert, uboNameRegex).map(([m, uboName]) => uboName);
      const uboNamesFrag = deviceProgram.preprocessedFrag !== null ? findall(deviceProgram.preprocessedFrag, uboNameRegex).map(([m, uboName]) => uboName) : [];
      for (let i = 0; i < Math.max(uboNamesVert.length, uboNamesFrag.length); i++) {
        const blockName = uboNamesVert[i] || uboNamesFrag[i];
        if (uboNamesVert[i] !== void 0 && uboNamesFrag[i] !== void 0)
          assert2(uboNamesVert[i] === uboNamesFrag[i]);
        const blockIdx = gl2.getUniformBlockIndex(prog, blockName);
        if (blockIdx !== -1 && blockIdx !== 4294967295)
          gl2.uniformBlockBinding(prog, blockIdx, i);
      }
      const samplerBindingRegex = /^uniform .*sampler\S+ (\w+);\s* \/\/ BINDING=(\d+)$/gm;
      const samplerBindings = /* @__PURE__ */ new Map();
      const insertBinding = (name, locationStr) => {
        const location = parseInt(locationStr);
        if (samplerBindings.has(location))
          assert2(samplerBindings.get(location) === name);
        else
          samplerBindings.set(location, name);
      };
      findall(deviceProgram.preprocessedVert, samplerBindingRegex).forEach(([m, name, locationStr]) => insertBinding(name, locationStr));
      if (deviceProgram.preprocessedFrag !== null)
        findall(deviceProgram.preprocessedFrag, samplerBindingRegex).forEach(([m, name, locationStr]) => insertBinding(name, locationStr));
      for (const [location, name] of samplerBindings.entries()) {
        const samplerUniformLocation = gl2.getUniformLocation(prog, name);
        gl2.uniform1i(samplerUniformLocation, location);
      }
      program.compileState = 3 /* ReadyToUse */;
    }
  }
  setVertexInput(inputLayout_, vertexBuffers, indexBuffer) {
    assert2(this._currentPipeline.inputLayout === inputLayout_);
    if (inputLayout_ !== null) {
      const inputLayout = inputLayout_;
      this._setVAO(inputLayout.vao);
      const gl2 = this.gl;
      for (let i = 0; i < inputLayout.vertexAttributeDescriptors.length; i++) {
        const attr = inputLayout.vertexAttributeDescriptors[i];
        const vertexBuffer = vertexBuffers[attr.bufferIndex];
        if (vertexBuffer === null)
          continue;
        gl2.bindBuffer(gl2.ARRAY_BUFFER, getPlatformBuffer(vertexBuffer.buffer));
        const bufferOffset = (vertexBuffer.byteOffset ?? 0) + attr.bufferByteOffset;
        const format = inputLayout.vertexBufferFormats[i];
        const inputLayoutBuffer = inputLayout.vertexBufferDescriptors[attr.bufferIndex];
        if (isFormatSizedInteger(attr.format))
          gl2.vertexAttribIPointer(attr.location, format.size, format.type, inputLayoutBuffer.byteStride, bufferOffset);
        else
          gl2.vertexAttribPointer(attr.location, format.size, format.type, format.normalized, inputLayoutBuffer.byteStride, bufferOffset);
      }
      assert2(indexBuffer !== null === (inputLayout.indexBufferFormat !== null));
      if (indexBuffer !== null) {
        const buffer = indexBuffer.buffer;
        assert2(buffer.usage === 1 /* Index */);
        gl2.bindBuffer(gl2.ELEMENT_ARRAY_BUFFER, getPlatformBuffer(buffer));
        this._currentIndexBufferByteOffset = indexBuffer.byteOffset ?? 0;
      } else {
        this._currentIndexBufferByteOffset = null;
      }
    } else {
      assert2(indexBuffer === null);
      this._setVAO(null);
      this._currentIndexBufferByteOffset = null;
    }
  }
  setStencilRef(value) {
    if (this._currentStencilRef === value)
      return;
    this._currentStencilRef = value;
    this._applyStencil();
  }
  setBlendColor(color) {
    this.gl.blendColor(color.r, color.g, color.b, color.a);
  }
  draw(count, firstVertex) {
    const gl2 = this.gl;
    const pipeline = this._currentPipeline;
    gl2.drawArrays(pipeline.drawMode, firstVertex, count);
    this._debugGroupStatisticsDrawCall();
    this._debugGroupStatisticsTriangles(count / 3);
  }
  drawInstanced(count, firstVertex, instanceCount) {
    const gl2 = this.gl;
    const pipeline = this._currentPipeline;
    gl2.drawArraysInstanced(pipeline.drawMode, firstVertex, count, instanceCount);
    this._debugGroupStatisticsDrawCall();
    this._debugGroupStatisticsTriangles(count / 3 * instanceCount);
  }
  drawIndexed(count, firstIndex) {
    const gl2 = this.gl;
    const pipeline = this._currentPipeline, inputLayout = assertExists2(pipeline.inputLayout);
    const byteOffset = assertExists2(this._currentIndexBufferByteOffset) + firstIndex * inputLayout.indexBufferCompByteSize;
    gl2.drawElements(pipeline.drawMode, count, inputLayout.indexBufferType, byteOffset);
    this._debugGroupStatisticsDrawCall();
    this._debugGroupStatisticsTriangles(count / 3);
  }
  drawIndexedInstanced(count, firstIndex, instanceCount) {
    const gl2 = this.gl;
    const pipeline = this._currentPipeline, inputLayout = assertExists2(pipeline.inputLayout);
    const byteOffset = assertExists2(this._currentIndexBufferByteOffset) + firstIndex * inputLayout.indexBufferCompByteSize;
    gl2.drawElementsInstanced(pipeline.drawMode, count, inputLayout.indexBufferType, byteOffset, instanceCount);
    this._debugGroupStatisticsDrawCall();
    this._debugGroupStatisticsTriangles(count / 3 * instanceCount);
  }
  beginOcclusionQuery(dstOffs) {
    const gl2 = this.gl;
    const queryPool = this._currentRenderPassDescriptor.occlusionQueryPool;
    gl2.beginQuery(queryPool.gl_query_type, queryPool.gl_query[dstOffs]);
  }
  endOcclusionQuery() {
    const gl2 = this.gl;
    const queryPool = this._currentRenderPassDescriptor.occlusionQueryPool;
    gl2.endQuery(queryPool.gl_query_type);
  }
  pushDebugGroup(name) {
  }
  popDebugGroup() {
  }
  insertDebugMarker(marker) {
  }
  endPass() {
    const gl2 = this.gl;
    const renderPassDescriptor = this._currentRenderPassDescriptor;
    for (let i = 0; i < this._currentColorAttachment.length; i++) {
      const colorResolveFrom = this._currentColorAttachment[i];
      if (colorResolveFrom !== null) {
        const colorResolveTo = this._currentColorResolveTo[i];
        const colorStore = renderPassDescriptor.colorAttachments[i].store;
        const boundReadFB = colorResolveTo !== null || !colorStore;
        if (boundReadFB) {
          gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, this._resolveColorReadFramebuffer);
          if (this._resolveColorAttachmentsChanged)
            this._bindFramebufferAttachment(gl2.READ_FRAMEBUFFER, gl2.COLOR_ATTACHMENT0, colorResolveFrom, this._currentColorAttachmentView[i]);
        }
        if (colorResolveTo !== null) {
          assert2(colorResolveFrom.width === colorResolveTo.width && colorResolveFrom.height === colorResolveTo.height);
          assert2(colorResolveFrom.pixelFormat === colorResolveTo.pixelFormat);
          this._setScissorEnabled(false);
          if (colorResolveTo === this._scTexture) {
            gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, this._scPlatformFramebuffer);
          } else {
            gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, this._resolveColorDrawFramebuffer);
            if (this._resolveColorAttachmentsChanged) {
              this._bindFramebufferAttachmentTexture(gl2.DRAW_FRAMEBUFFER, gl2.COLOR_ATTACHMENT0, colorResolveTo, this._currentColorResolveView[i]);
            }
          }
          gl2.blitFramebuffer(0, 0, colorResolveFrom.width, colorResolveFrom.height, 0, 0, colorResolveTo.width, colorResolveTo.height, gl2.COLOR_BUFFER_BIT, gl2.LINEAR);
        }
        if (!colorStore)
          gl2.invalidateFramebuffer(gl2.READ_FRAMEBUFFER, [gl2.COLOR_ATTACHMENT0]);
        if (boundReadFB)
          gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, null);
      }
    }
    this._resolveColorAttachmentsChanged = false;
    const depthStencilResolveFrom = this._currentDepthStencilAttachment;
    if (depthStencilResolveFrom !== null) {
      const depthStencilResolveTo = this._currentDepthStencilResolveTo;
      const depthStencilStore = renderPassDescriptor.depthStencilAttachment.store;
      const boundReadFB = depthStencilResolveTo !== null || !depthStencilStore;
      if (boundReadFB) {
        gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, this._resolveDepthStencilReadFramebuffer);
        if (this._resolveDepthStencilAttachmentsChanged)
          this._bindFramebufferDepthStencilAttachment(gl2.READ_FRAMEBUFFER, depthStencilResolveFrom, this._currentDepthStencilAttachmentView);
      }
      if (depthStencilResolveTo !== null) {
        assert2(depthStencilResolveFrom.width === depthStencilResolveTo.width && depthStencilResolveFrom.height === depthStencilResolveTo.height);
        this._setScissorEnabled(false);
        gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, this._resolveDepthStencilDrawFramebuffer);
        if (this._resolveDepthStencilAttachmentsChanged)
          this._bindFramebufferDepthStencilAttachment(gl2.DRAW_FRAMEBUFFER, depthStencilResolveTo, this._currentDepthStencilResolveView);
        gl2.blitFramebuffer(0, 0, depthStencilResolveFrom.width, depthStencilResolveFrom.height, 0, 0, depthStencilResolveTo.width, depthStencilResolveTo.height, gl2.DEPTH_BUFFER_BIT, gl2.NEAREST);
      }
      if (!depthStencilStore)
        gl2.invalidateFramebuffer(gl2.READ_FRAMEBUFFER, [gl2.DEPTH_STENCIL_ATTACHMENT]);
      if (boundReadFB)
        gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, null);
      this._resolveDepthStencilAttachmentsChanged = false;
    }
    gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, null);
  }
  //#endregion
};
function createSwapChainForWebGL2(gl2, configuration) {
  return new GfxImplP_GL(gl2, configuration);
}

// noclip/InputManager.ts
init_SaveManager();

// noclip/GrabManager.ts
function containsElement(sub_, searchFor) {
  let sub5 = sub_;
  while (sub5 !== null) {
    if (sub5 === searchFor)
      return true;
    sub5 = sub5.parentElement;
  }
  return false;
}
function setGlobalCursor(cursor) {
  if (document.body.style.cursor !== cursor) {
    document.body.focus();
    document.body.style.cursor = cursor;
  }
}
var GrabManager = class {
  grabListener = null;
  grabOptions = null;
  currentGrabTarget = null;
  usingPointerLock = false;
  lastX = -1;
  lastY = -1;
  grabButton = -1;
  _onMouseMove = (e) => {
    if (this.grabListener === null)
      return;
    let dx, dy;
    if (e.movementX !== void 0) {
      dx = e.movementX;
      dy = e.movementY;
    } else {
      dx = e.pageX - this.lastX;
      dy = e.pageY - this.lastY;
      this.lastX = e.pageX;
      this.lastY = e.pageY;
    }
    this.grabListener.onMotion(dx, dy);
  };
  _onMouseDown = (e) => {
    const grabElement = this.grabOptions.grabElement;
    if (!grabElement || !containsElement(e.target, grabElement))
      this.releaseGrab();
  };
  _onMouseUp = (e) => {
    if (e.button === this.grabButton)
      this.releaseGrab();
  };
  _onPointerLockChange = (e) => {
    if (document.pointerLockElement === this.currentGrabTarget) {
      this.usingPointerLock = true;
    } else {
      this.releaseGrab();
    }
  };
  _onPointerLockError = (e) => {
    if (this.grabOptions !== null && this.grabOptions.useGrabbingCursor)
      setGlobalCursor("grabbing");
  };
  getGrabListenerOptions(grabListener) {
    if (this.grabListener === grabListener)
      return this.grabOptions;
    else
      return null;
  }
  isGrabbed() {
    return this.grabListener !== null;
  }
  takeGrab(grabListener, e, grabOptions) {
    e.preventDefault();
    if (this.grabListener !== null)
      return;
    this.grabListener = grabListener;
    this.grabOptions = grabOptions;
    this.lastX = e.pageX;
    this.lastY = e.pageY;
    this.grabButton = e.button;
    const target = e.target;
    target.focus();
    this.usingPointerLock = false;
    if (grabOptions.takePointerLock && target.requestPointerLock !== void 0) {
      document.addEventListener("pointerlockchange", this._onPointerLockChange);
      document.addEventListener("pointerlockerror", this._onPointerLockError);
      target.requestPointerLock();
      this.currentGrabTarget = target;
    }
    document.addEventListener("mousemove", this._onMouseMove);
    if (grabOptions.releaseOnMouseUp)
      document.addEventListener("mouseup", this._onMouseUp);
    else
      document.addEventListener("mousedown", this._onMouseDown, { capture: true });
  }
  releaseGrab() {
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    document.removeEventListener("mousedown", this._onMouseDown, { capture: true });
    if (this.currentGrabTarget !== null) {
      document.removeEventListener("pointerlockchange", this._onPointerLockChange);
      if (document.exitPointerLock !== void 0)
        document.exitPointerLock();
    }
    if (this.grabOptions.useGrabbingCursor && !this.usingPointerLock)
      setGlobalCursor("");
    const grabListener = this.grabListener;
    this.grabListener = null;
    grabListener.onGrabReleased();
    this.grabOptions = null;
  }
};
var GlobalGrabManager = new GrabManager();

// noclip/InputManager.ts
function isModifier(key) {
  switch (key) {
    case "ShiftLeft":
    case "ShiftRight":
    case "AltLeft":
    case "AltRight":
      return true;
    default:
      return false;
  }
}
var InputManager = class {
  invertY = false;
  invertX = false;
  toplevel;
  // tristate. non-existent = not pressed, false = pressed but not this frame, true = pressed this frame.
  keysDown;
  mouseX = -1;
  mouseY = -1;
  dx = 0;
  dy = 0;
  dz = 0;
  buttons = 0;
  ondraggingmodechanged = null;
  scrollListeners = [];
  usePointerLock = true;
  isMouseEnabled = true;
  touchGesture = 0 /* None */;
  prevTouchX = 0;
  // When scrolling, contains finger X; when pinching, contains midpoint X
  prevTouchY = 0;
  // When scrolling, contains finger Y; when pinching, contains midpoint Y
  prevPinchDist = 0;
  dTouchX = 0;
  dTouchY = 0;
  dPinchDist = 0;
  releaseOnMouseUp = true;
  constructor(toplevel) {
    document.body.tabIndex = -1;
    this.toplevel = toplevel;
    this.toplevel.tabIndex = -1;
    this.keysDown = /* @__PURE__ */ new Map();
    document.addEventListener("keydown", this._onKeyDown, { capture: true });
    document.addEventListener("keyup", this._onKeyUp, { capture: true });
    window.addEventListener("blur", this._onBlur);
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    this.toplevel.addEventListener("wheel", this._onWheel, { passive: true });
    this.toplevel.addEventListener("mousedown", (e) => {
      if (!this.isMouseEnabled)
        return;
      this.buttons = e.buttons;
      GlobalGrabManager.takeGrab(this, e, { takePointerLock: this.usePointerLock, useGrabbingCursor: true, releaseOnMouseUp: this.releaseOnMouseUp });
      if (this.ondraggingmodechanged !== null)
        this.ondraggingmodechanged();
    });
    this.toplevel.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX * window.devicePixelRatio;
      this.mouseY = e.clientY * window.devicePixelRatio;
    });
    this.toplevel.addEventListener("mouseup", (e) => {
      this.buttons = e.buttons;
    });
    this.toplevel.addEventListener("touchstart", this._onTouchChange, { passive: true });
    this.toplevel.addEventListener("touchend", this._onTouchChange, { passive: true });
    this.toplevel.addEventListener("touchcancel", this._onTouchChange, { passive: true });
    this.toplevel.addEventListener("touchmove", this._onTouchMove, { passive: true });
    this.afterFrame();
    GlobalSaveManager.addSettingListener("InvertX", (saveManager, key) => {
      this.invertX = saveManager.loadSetting(key, false);
    });
    GlobalSaveManager.addSettingListener("InvertY", (saveManager, key) => {
      this.invertY = saveManager.loadSetting(key, false);
    });
  }
  addScrollListener(listener) {
    this.scrollListeners.push(listener);
  }
  getMouseDeltaX() {
    return this.dx;
  }
  getMouseDeltaY() {
    return this.dy;
  }
  getTouchDeltaX() {
    return this.touchGesture === 2 /* Pinch */ ? this.dTouchX : 0;
  }
  getTouchDeltaY() {
    return this.touchGesture === 2 /* Pinch */ ? this.dTouchY : 0;
  }
  getPinchDeltaDist() {
    return this.touchGesture === 2 /* Pinch */ ? this.dPinchDist : 0;
  }
  isKeyDownEventTriggered(key) {
    return !!this.keysDown.get(key);
  }
  isKeyDown(key) {
    return this.keysDown.has(key);
  }
  getDraggingMode() {
    if (this.touchGesture !== 0 /* None */)
      return 1 /* Dragging */;
    const grabOptions = GlobalGrabManager.getGrabListenerOptions(this);
    if (grabOptions !== null)
      return grabOptions.takePointerLock ? 2 /* PointerLocked */ : 1 /* Dragging */;
    return 0 /* None */;
  }
  isDragging() {
    return this.getDraggingMode() !== 0 /* None */;
  }
  afterFrame() {
    this.dx = 0;
    this.dy = 0;
    this.dz = 0;
    this.dTouchX = 0;
    this.dTouchY = 0;
    this.dPinchDist = 0;
    this.keysDown.forEach((v, k) => {
      this.keysDown.set(k, false);
    });
  }
  _hasFocus() {
    return document.activeElement === document.body || document.activeElement === this.toplevel;
  }
  _callScrollListeners() {
    for (let i = 0; i < this.scrollListeners.length; i++)
      this.scrollListeners[i](this);
  }
  _onKeyDown = (e) => {
    if (isModifier(e.code)) {
      e.preventDefault();
    } else {
      if (!this._hasFocus()) return;
    }
    this.keysDown.set(e.code, !e.repeat);
  };
  _onKeyUp = (e) => {
    this.keysDown.delete(e.code);
  };
  _onBlur = () => {
    this.keysDown.clear();
  };
  _onWheel = (e) => {
    this.dz += Math.sign(e.deltaY) * -4;
    this._callScrollListeners();
  };
  _getScaledTouches(touches) {
    const result = [];
    const scale6 = 1e3 / Math.max(1, Math.min(this.toplevel.clientWidth, this.toplevel.clientHeight));
    for (let i = 0; i < touches.length; i++) {
      result.push({
        x: touches[i].clientX * scale6,
        y: touches[i].clientY * scale6
      });
    }
    return result;
  }
  _getPinchValues(touches) {
    const scaledTouches = this._getScaledTouches(touches);
    return {
      x: (scaledTouches[0].x + scaledTouches[1].x) / 2,
      y: (scaledTouches[0].y + scaledTouches[1].y) / 2,
      dist: Math.hypot(scaledTouches[0].x - scaledTouches[1].x, scaledTouches[0].y - scaledTouches[1].y)
    };
  }
  _onTouchChange = (e) => {
    if (!this.isMouseEnabled)
      return;
    if (e.touches.length === 1) {
      const scaledTouches = this._getScaledTouches(e.touches);
      this.touchGesture = 1 /* Scroll */;
      this.prevTouchX = scaledTouches[0].x;
      this.prevTouchY = scaledTouches[0].y;
      this.dTouchX = 0;
      this.dTouchY = 0;
    } else if (e.touches.length === 2) {
      const pinchValues = this._getPinchValues(e.touches);
      this.touchGesture = 2 /* Pinch */;
      this.prevTouchX = pinchValues.x;
      this.prevTouchY = pinchValues.y;
      this.prevPinchDist = pinchValues.dist;
      this.dTouchX = 0;
      this.dTouchY = 0;
      this.dPinchDist = 0;
    } else {
      this.touchGesture = 0 /* None */;
    }
  };
  _onTouchMove = (e) => {
    if (!this.isMouseEnabled)
      return;
    if (e.touches.length === 1) {
      const scaledTouches = this._getScaledTouches(e.touches);
      this.touchGesture = 1 /* Scroll */;
      this.dTouchX = scaledTouches[0].x - this.prevTouchX;
      this.dTouchY = scaledTouches[0].y - this.prevTouchY;
      this.onMotion(this.dTouchX, this.dTouchY);
      this.prevTouchX = scaledTouches[0].x;
      this.prevTouchY = scaledTouches[0].y;
    } else if (e.touches.length === 2) {
      const pinchValues = this._getPinchValues(e.touches);
      this.touchGesture = 2 /* Pinch */;
      this.dTouchX = pinchValues.x - this.prevTouchX;
      this.dTouchY = pinchValues.y - this.prevTouchY;
      this.dPinchDist = pinchValues.dist - this.prevPinchDist;
      this.prevTouchX = pinchValues.x;
      this.prevTouchY = pinchValues.y;
      this.prevPinchDist = pinchValues.dist;
    } else {
      this.touchGesture = 0 /* None */;
    }
  };
  onMotion(dx, dy) {
    if (Math.abs(dx) > 200 || Math.abs(dy) > 200)
      return;
    this.dx += dx;
    this.dy += dy;
  }
  onGrabReleased() {
    this.buttons = 0;
    if (this.ondraggingmodechanged !== null)
      this.ondraggingmodechanged();
  }
  reset() {
    this.isMouseEnabled = true;
  }
};

// src/disc.ts
var GC_MAGIC = 3258163005;
var DiscImage = class _DiscImage {
  constructor(blob, id, label) {
    this.blob = blob;
    this.id = id;
    this.label = label;
  }
  blob;
  id;
  label;
  files = /* @__PURE__ */ new Map();
  static async open(blob, name) {
    const head = new DataView(await blob.slice(0, 1088).arrayBuffer());
    if (head.byteLength < 1088 || head.getUint32(28) !== GC_MAGIC)
      throw new Error(`${name} isn't a GameCube disc image. RVZ, WIA, CISO and NKit images need converting to ISO first (Dolphin: right-click the game, Convert File, ISO).`);
    const id = String.fromCharCode(...new Uint8Array(head.buffer, 0, 6));
    const fstOff = head.getUint32(1060), fstLen = head.getUint32(1064);
    const disc = new _DiscImage(blob, id, name);
    const fst = new Uint8Array(await blob.slice(fstOff, fstOff + fstLen).arrayBuffer());
    const v = new DataView(fst.buffer);
    const n = v.getUint32(8);
    const strings = n * 12, dec = new TextDecoder("shift_jis");
    const nameAt = (o) => {
      let e = strings + o;
      while (fst[e]) e++;
      return dec.decode(fst.subarray(strings + o, e));
    };
    const walk = (first, end, prefix) => {
      for (let i = first; i < end; ) {
        const flags = fst[i * 12], name2 = nameAt(v.getUint32(i * 12) & 16777215);
        if (flags === 1) {
          const next = v.getUint32(i * 12 + 8);
          walk(i + 1, next, prefix + name2 + "/");
          i = next;
        } else {
          disc.files.set((prefix + name2).toLowerCase(), { off: v.getUint32(i * 12 + 4), len: v.getUint32(i * 12 + 8) });
          i++;
        }
      }
    };
    walk(1, n, "");
    return disc;
  }
  has(path) {
    return this.files.has(path.toLowerCase());
  }
  list() {
    return [...this.files.keys()];
  }
  async read(path) {
    const f = this.files.get(path.toLowerCase());
    if (!f) throw new Error(`${path} isn't on the disc`);
    return this.blob.slice(f.off, f.off + f.len).arrayBuffer();
  }
};
var ExtractedFolder = class _ExtractedFolder {
  constructor(label) {
    this.label = label;
  }
  label;
  files = /* @__PURE__ */ new Map();
  id = "";
  static async open(list) {
    const root = list[0].webkitRelativePath?.split("/")[0] || "folder";
    const f = new _ExtractedFolder(root);
    for (const file of list) {
      const rel = file.webkitRelativePath || file.name;
      const parts = rel.split("/");
      const at = parts.indexOf("files");
      const di = parts.indexOf("data");
      const tail = at >= 0 ? parts.slice(at + 1) : di >= 0 ? parts.slice(di) : null;
      if (tail && tail.length) f.files.set(tail.join("/").toLowerCase(), file);
      if (parts.includes("sys") && file.name === "boot.bin") {
        const h = new Uint8Array(await file.slice(0, 6).arrayBuffer());
        f.id = String.fromCharCode(...h);
      }
    }
    if (!f.files.has("data/scene/dolpic0.szs"))
      throw new Error(`${root} doesn't look like an extracted Super Mario Sunshine disc (no files/data/scene).`);
    return f;
  }
  has(path) {
    return this.files.has(path.toLowerCase());
  }
  list() {
    return [...this.files.keys()];
  }
  async read(path) {
    const f = this.files.get(path.toLowerCase());
    if (!f) throw new Error(`${path} isn't in the folder`);
    return f.arrayBuffer();
  }
};
async function openDisc(file) {
  const d = await DiscImage.open(file, file.name);
  if (!d.id.startsWith("GMS"))
    throw new Error(`${file.name} is ${d.id}, not Super Mario Sunshine (GMSE01, GMSJ01 or GMSP01).`);
  if (!d.has("data/scene/dolpic0.szs")) throw new Error(`${file.name} has no Sunshine stages in it.`);
  return d;
}
async function openFolder(files) {
  return ExtractedFolder.open(files);
}
var DB = "moonshine-ghost-viewer";
var STORE = "disc";
function idb() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function rememberHandle(h) {
  try {
    const db = await idb();
    await new Promise((res) => {
      const t2 = db.transaction(STORE, "readwrite");
      t2.objectStore(STORE).put(h, "iso");
      t2.oncomplete = () => res();
      t2.onerror = () => res();
    });
  } catch {
  }
}
async function rememberedHandle() {
  try {
    const db = await idb();
    return await new Promise((res) => {
      const r = db.transaction(STORE).objectStore(STORE).get("iso");
      r.onsuccess = () => res(r.result || null);
      r.onerror = () => res(null);
    });
  } catch {
    return null;
  }
}
async function forgetHandle() {
  try {
    const db = await idb();
    await new Promise((res) => {
      const t2 = db.transaction(STORE, "readwrite");
      t2.objectStore(STORE).delete("iso");
      t2.oncomplete = () => res();
      t2.onerror = () => res();
    });
  } catch {
  }
}

// src/stagearc.ts
function parseStageArc(buf) {
  const v = new DataView(buf), b = new Uint8Array(buf), dec = new TextDecoder("shift_jis");
  const str6 = (o) => {
    const n = v.getUint16(o + 2);
    return [dec.decode(b.subarray(o + 4, o + 4 + n)), o + 4 + n];
  };
  const obj = (o) => {
    const size = v.getUint32(o);
    const [type, p0] = str6(o + 4);
    const [, p1] = str6(p0);
    if (type === "ScenarioArchiveName") {
      const n = v.getUint16(p1);
      return [{ type, value: dec.decode(b.subarray(p1 + 2, p1 + 2 + n)), children: [] }, o + size];
    }
    const count = v.getUint32(p1);
    let p2 = p1 + 4;
    const children = [];
    for (let i = 0; i < count; i++) {
      const [c, e] = obj(p2);
      children.push(c);
      p2 = e;
    }
    return [{ type, children }, o + size];
  };
  const [root] = obj(0);
  return root.children[0].children.map((t2) => t2.children.map((c) => (c.value || "").replace(/\.arc$/, "")));
}
function sceneForRoute(table, area, episode) {
  const eps = table[area];
  if (!eps || !eps.length) return null;
  const s = eps[episode] ?? eps[0];
  return s && s !== "none" ? s : null;
}

// src/sms_scene.ts
init_Yaz0();
init_JKRArchive();
init_util();
init_esm();
init_Color();

// noclip/Common/JSYSTEM/J3D/J3DGraphBase.ts
init_esm();

// noclip/Common/JSYSTEM/J3D/J3DLoader.ts
init_esm();
init_endian();
init_util();

// noclip/BitMap.ts
init_util();

// noclip/Common/JSYSTEM/J3D/J3DLoader.ts
init_Color();
init_Geometry();
init_gx_displaylist();
init_gx_enum();
init_gx_material();
init_gx_render();
init_MathHelpers();

// noclip/Common/JSYSTEM/JUTTexture.ts
init_gx_enum();
init_util();
init_gx_render();
init_gx_texture();
function readBTI_Texture(buffer, name, copyData = false) {
  const view = buffer.createDataView();
  const format = view.getUint8(0);
  const width = view.getUint16(2);
  const height = view.getUint16(4);
  const wrapS = view.getUint8(6);
  const wrapT = view.getUint8(7);
  const paletteFormat = view.getUint8(9);
  const paletteCount = view.getUint16(10);
  const paletteOffs = view.getUint32(12);
  const maxAnisotropy = view.getUint8(19);
  const minFilter = view.getUint8(20);
  const magFilter = view.getUint8(21);
  const minLOD = view.getInt8(22) * 1 / 8;
  const maxLOD = view.getInt8(23) * 1 / 8;
  const mipCount = view.getUint8(24);
  const lodBias = view.getInt16(26) * 1 / 100;
  const dataOffs = view.getUint32(28);
  assert(minLOD === 0);
  let data = null;
  if (dataOffs !== 0)
    data = buffer.slice(dataOffs, void 0, copyData);
  let paletteData = null;
  if (paletteOffs !== 0)
    paletteData = buffer.subarray(paletteOffs, paletteCount * 2, copyData);
  return { name, format, width, height, wrapS, wrapT, minFilter, magFilter, minLOD, maxLOD, mipCount, lodBias, maxAnisotropy, data, paletteFormat, paletteData };
}
var BTI = class _BTI {
  texture;
  static parse(buffer, name, copyData = false) {
    const bti = new _BTI();
    bti.texture = readBTI_Texture(buffer, name, copyData);
    return bti;
  }
};
function translateSampler(device2, cache3, sampler) {
  const isNoMip = sampler.minFilter === 1 /* LINEAR */ || sampler.minFilter === 0 /* NEAR */;
  const [minFilter, mipFilter] = translateTexFilterGfx(sampler.minFilter);
  const [magFilter] = translateTexFilterGfx(sampler.magFilter);
  const gfxSampler = cache3.createSampler({
    wrapS: translateWrapModeGfx(sampler.wrapS),
    wrapT: translateWrapModeGfx(sampler.wrapT),
    minFilter,
    mipFilter,
    magFilter,
    minLOD: sampler.minLOD,
    maxLOD: isNoMip ? 0 : sampler.maxLOD,
    maxAnisotropy: translateMaxAnisotropy(sampler.maxAnisotropy)
  });
  return gfxSampler;
}
var BTIData = class {
  constructor(device2, cache3, btiTexture) {
    this.btiTexture = btiTexture;
    this.gfxSampler = translateSampler(device2, cache3, btiTexture);
    const mipChain = calcMipChain(this.btiTexture, this.btiTexture.mipCount);
    const { viewerTexture, gfxTexture } = loadTextureFromMipChain(device2, mipChain);
    this.gfxTexture = gfxTexture;
    this.viewerTexture = viewerTexture;
  }
  btiTexture;
  gfxSampler;
  gfxTexture;
  viewerTexture;
  fillTextureMapping(m) {
    m.lateBinding = void 0;
    m.gfxTexture = this.gfxTexture;
    m.gfxSampler = this.gfxSampler;
    m.lodBias = this.btiTexture.lodBias;
    m.width = this.btiTexture.width;
    m.height = this.btiTexture.height;
  }
  destroy(device2) {
    device2.destroyTexture(this.gfxTexture);
  }
};

// noclip/Common/JSYSTEM/J3D/J3DLoader.ts
init_GXMaterialBuilder();
function readStringTable(buffer, offs) {
  const view = buffer.createDataView(offs);
  const stringCount = view.getUint16(0);
  let tableIdx = 4;
  const strings = [];
  for (let i = 0; i < stringCount; i++) {
    const stringOffs = view.getUint16(tableIdx + 2);
    const str6 = readString(buffer, offs + stringOffs, 255);
    strings.push(str6);
    tableIdx += 4;
  }
  return strings;
}
var JSystemFileReaderHelper = class {
  constructor(buffer) {
    this.buffer = buffer;
    this.view = this.buffer.createDataView();
    this.magic = readString(this.buffer, 0, 8);
    this.size = this.view.getUint32(8);
    this.numChunks = this.view.getUint32(12);
    this.subversion = readString(this.buffer, 16, 16);
    this.offs = 32;
  }
  buffer;
  view;
  magic;
  size;
  numChunks;
  subversion;
  offs = 32;
  maybeNextChunk(maybeChunkId, sizeBias = 0) {
    const chunkStart = this.offs;
    const chunkId = readString(this.buffer, chunkStart + 0, 4);
    if (chunkId === maybeChunkId) {
      const chunkSize = this.view.getUint32(chunkStart + 4) + sizeBias;
      this.offs += chunkSize;
      return this.buffer.subarray(chunkStart, chunkSize);
    } else {
      return null;
    }
  }
  nextChunk(expectedChunkId, sizeBias = 0) {
    const chunkStart = this.offs;
    const chunkId = readString(this.buffer, chunkStart + 0, 4);
    const chunkSize = this.view.getUint32(chunkStart + 4) + sizeBias;
    assert(chunkId === expectedChunkId);
    this.offs += chunkSize;
    return this.buffer.subarray(chunkStart, chunkSize);
  }
};
function readINF1Chunk(buffer) {
  const view = buffer.createDataView();
  const loadFlags = view.getUint16(8);
  const mtxGroupCount = view.getUint32(12);
  const vertexCount = view.getUint32(16);
  const hierarchyOffs = view.getUint32(20);
  const hierarchyData = buffer.slice(hierarchyOffs);
  return { hierarchyData, loadFlags };
}
function readVTX1Chunk(buffer) {
  const view = buffer.createDataView();
  const formatOffs = view.getUint32(8);
  const dataOffsLookupTable = 12;
  const arrayAttribs = [
    9 /* POS */,
    10 /* NRM */,
    25 /* _NBT */,
    11 /* CLR0 */,
    12 /* CLR1 */,
    13 /* TEX0 */,
    14 /* TEX1 */,
    15 /* TEX2 */,
    16 /* TEX3 */,
    17 /* TEX4 */,
    18 /* TEX5 */,
    19 /* TEX6 */,
    20 /* TEX7 */
  ];
  let offs = formatOffs;
  const vat = [];
  while (true) {
    const vtxAttrib = view.getUint32(offs + 0);
    if (vtxAttrib === 255 /* NULL */)
      break;
    const compCnt = view.getUint32(offs + 4);
    const compType = view.getUint32(offs + 8);
    const compShift = view.getUint8(offs + 12);
    offs += 16;
    vat[vtxAttrib] = { compType, compCnt, compShift };
  }
  function getArrayData(formatIdx) {
    const dataOffsLookupTableEntry = dataOffsLookupTable + formatIdx * 4;
    const dataStart = view.getUint32(dataOffsLookupTableEntry);
    if (dataStart === 0)
      return null;
    const dataEnd = getDataEnd(dataOffsLookupTableEntry);
    const dataOffs = dataStart;
    const dataSize = dataEnd - dataStart;
    const vtxDataBuffer = buffer.subarray(dataOffs, dataSize);
    return vtxDataBuffer;
  }
  const dataOffsLookupTableEnd = dataOffsLookupTable + arrayAttribs.length * 4;
  function getDataEnd(dataOffsLookupTableEntry) {
    let offs2 = dataOffsLookupTableEntry + 4;
    while (offs2 < dataOffsLookupTableEnd) {
      const dataOffs = view.getUint32(offs2);
      if (dataOffs !== 0)
        return dataOffs;
      offs2 += 4;
    }
    return buffer.byteLength;
  }
  const arrayData = [];
  for (let i = 0; i < arrayAttribs.length; i++) {
    const vtxAttrib = arrayAttribs[i];
    const array = getArrayData(i);
    if (array !== null)
      arrayData[vtxAttrib] = array;
  }
  return { vat, arrayData };
}
function readEVP1Chunk(buffer) {
  const view = buffer.createDataView();
  const envelopeTableCount = view.getUint16(8);
  const weightedBoneCountTableOffs = view.getUint32(12);
  const weightedBoneIndexTableOffs = view.getUint32(16);
  const weightedBoneWeightTableOffs = view.getUint32(20);
  const inverseBindPoseTableOffs = view.getUint32(24);
  let weightedBoneId = 0;
  let maxBoneIndex = -1;
  const envelopes = [];
  for (let i = 0; i < envelopeTableCount; i++) {
    const numWeightedBones = view.getUint8(weightedBoneCountTableOffs + i);
    const weightedBones = [];
    for (let j = 0; j < numWeightedBones; j++) {
      const index = view.getUint16(weightedBoneIndexTableOffs + weightedBoneId * 2);
      const weight = view.getFloat32(weightedBoneWeightTableOffs + weightedBoneId * 4);
      weightedBones.push({ jointIndex: index, weight });
      maxBoneIndex = Math.max(maxBoneIndex, index);
      weightedBoneId++;
    }
    envelopes.push({ weightedBones });
  }
  const inverseBinds = [];
  for (let i = 0; i < maxBoneIndex + 1; i++) {
    const offs = inverseBindPoseTableOffs + i * 48;
    const m00 = view.getFloat32(offs + 0);
    const m10 = view.getFloat32(offs + 4);
    const m20 = view.getFloat32(offs + 8);
    const m30 = view.getFloat32(offs + 12);
    const m01 = view.getFloat32(offs + 16);
    const m11 = view.getFloat32(offs + 20);
    const m21 = view.getFloat32(offs + 24);
    const m31 = view.getFloat32(offs + 28);
    const m02 = view.getFloat32(offs + 32);
    const m12 = view.getFloat32(offs + 36);
    const m22 = view.getFloat32(offs + 40);
    const m32 = view.getFloat32(offs + 44);
    inverseBinds.push(mat4_exports.fromValues(
      m00,
      m01,
      m02,
      0,
      m10,
      m11,
      m12,
      0,
      m20,
      m21,
      m22,
      0,
      m30,
      m31,
      m32,
      1
    ));
  }
  return { envelopes, inverseBinds };
}
function readDRW1Chunk(buffer) {
  const view = buffer.createDataView();
  const drawMatrixCount = view.getUint16(8);
  const drawMatrixTypeTableOffs = view.getUint32(12);
  const dataArrayOffs = view.getUint32(16);
  const matrixDefinitions = [];
  for (let i = 0; i < drawMatrixCount; i++) {
    const kind = view.getUint8(drawMatrixTypeTableOffs + i);
    const param = view.getUint16(dataArrayOffs + i * 2);
    if (kind === 0 /* Joint */) {
      matrixDefinitions.push({ kind, jointIndex: param });
    } else if (kind === 1 /* Envelope */) {
      matrixDefinitions.push({ kind, envelopeIndex: param });
    }
  }
  return { matrixDefinitions };
}
var JointTransformInfo = class {
  scale = vec3_exports.fromValues(1, 1, 1);
  rotation = quat_exports.create();
  translation = vec3_exports.create();
  copy(o) {
    vec3_exports.copy(this.scale, o.scale);
    vec3_exports.copy(this.translation, o.translation);
    quat_exports.copy(this.rotation, o.rotation);
  }
  lerp(a, b, t2) {
    vec3_exports.lerp(this.scale, a.scale, b.scale, t2);
    vec3_exports.lerp(this.translation, a.translation, b.translation, t2);
    quat_exports.slerp(this.rotation, a.rotation, b.rotation, t2);
  }
};
function readJNT1Chunk(buffer) {
  const view = buffer.createDataView();
  const jointDataCount = view.getUint16(8);
  assert(view.getUint16(10) === 65535);
  const jointDataTableOffs = view.getUint32(12);
  const remapTableOffs = view.getUint32(16);
  const remapTable = [];
  for (let i = 0; i < jointDataCount; i++)
    remapTable[i] = view.getUint16(remapTableOffs + i * 2);
  const nameTableOffs = view.getUint32(20);
  const nameTable = readStringTable(buffer, nameTableOffs);
  const joints = [];
  for (let i = 0; i < jointDataCount; i++) {
    const name = nameTable[i];
    const jointDataTableIdx = jointDataTableOffs + remapTable[i] * 64;
    const flags = view.getUint16(jointDataTableIdx + 0) & 255;
    const calcFlags = view.getUint8(jointDataTableIdx + 2);
    const scaleX = view.getFloat32(jointDataTableIdx + 4);
    const scaleY = view.getFloat32(jointDataTableIdx + 8);
    const scaleZ = view.getFloat32(jointDataTableIdx + 12);
    const rotationX = view.getInt16(jointDataTableIdx + 16) / 32767 * Math.PI;
    const rotationY = view.getInt16(jointDataTableIdx + 18) / 32767 * Math.PI;
    const rotationZ = view.getInt16(jointDataTableIdx + 20) / 32767 * Math.PI;
    const translationX = view.getFloat32(jointDataTableIdx + 24);
    const translationY = view.getFloat32(jointDataTableIdx + 28);
    const translationZ = view.getFloat32(jointDataTableIdx + 32);
    const boundingSphereRadius = view.getFloat32(jointDataTableIdx + 36);
    const bboxMinX = view.getFloat32(jointDataTableIdx + 40);
    const bboxMinY = view.getFloat32(jointDataTableIdx + 44);
    const bboxMinZ = view.getFloat32(jointDataTableIdx + 48);
    const bboxMaxX = view.getFloat32(jointDataTableIdx + 52);
    const bboxMaxY = view.getFloat32(jointDataTableIdx + 56);
    const bboxMaxZ = view.getFloat32(jointDataTableIdx + 60);
    const bbox = new AABB(bboxMinX, bboxMinY, bboxMinZ, bboxMaxX, bboxMaxY, bboxMaxZ);
    const transform = new JointTransformInfo();
    transform.scale[0] = scaleX;
    transform.scale[1] = scaleY;
    transform.scale[2] = scaleZ;
    quatFromEulerRadians(transform.rotation, rotationX, rotationY, rotationZ);
    transform.translation[0] = translationX;
    transform.translation[1] = translationY;
    transform.translation[2] = translationZ;
    joints.push({ name, calcFlags, transform, boundingSphereRadius, bbox });
  }
  return { joints };
}
function readSHP1Chunk(buffer, bmd) {
  const view = buffer.createDataView();
  const shapeCount = view.getUint16(8);
  const shapeInitDataOffs = view.getUint32(12);
  const remapTableOffs = view.getUint32(16);
  const nameTableOffs = view.getUint32(20);
  const vtxDeclTableOffs = view.getUint32(24);
  const matrixTableOffs = view.getUint32(28);
  const displayListOffs = view.getUint32(32);
  const shapeMtxInitDataOffs = view.getUint32(36);
  const shapeDrawInitDataOffs = view.getUint32(40);
  for (let i = 0; i < shapeCount; i++) {
    const index = view.getUint16(remapTableOffs + i * 2);
    assert(index === i);
  }
  if (nameTableOffs !== 0)
    console.log("Found a SHP1 that has a name table!");
  const shapes = [];
  let shapeInitDataIdx = shapeInitDataOffs;
  for (let i = 0; i < shapeCount; i++) {
    const shapeMtxType = view.getUint8(shapeInitDataIdx + 0);
    assert(view.getUint8(shapeInitDataIdx + 1) === 255);
    const mtxGroupCount = view.getUint16(shapeInitDataIdx + 2);
    const vtxDeclListIndex = view.getUint16(shapeInitDataIdx + 4);
    const shapeMtxInitDataIndex = view.getUint16(shapeInitDataIdx + 6);
    const shapeDrawInitDataIndex = view.getUint16(shapeInitDataIdx + 8);
    const vcd = [];
    const vat = [];
    const vtxArrays = [];
    let usesNBT = false;
    let vtxDeclIdx = vtxDeclTableOffs + vtxDeclListIndex;
    while (true) {
      let vtxAttrib = view.getUint32(vtxDeclIdx + 0);
      if (vtxAttrib === 255 /* NULL */)
        break;
      const arrayData = bmd.vtx1.arrayData[vtxAttrib];
      if (vtxAttrib === 25 /* _NBT */) {
        usesNBT = true;
        vtxAttrib = 10 /* NRM */;
        vat[vtxAttrib] = { ...bmd.vtx1.vat[vtxAttrib], compCnt: 1 /* NRM_NBT */ };
      } else {
        vat[vtxAttrib] = bmd.vtx1.vat[vtxAttrib];
      }
      if (arrayData !== void 0)
        vtxArrays[vtxAttrib] = { buffer: arrayData, offs: 0, stride: getAttributeByteSize(vat, vtxAttrib) };
      const indexDataType = view.getUint32(vtxDeclIdx + 4);
      vcd[vtxAttrib] = { type: indexDataType };
      vtxDeclIdx += 8;
    }
    const loadedVertexLayout = compileLoadedVertexLayout(vcd, usesNBT);
    const vtxLoader = compileVtxLoader(vat, vcd);
    let shapeDrawInitDataIdx = shapeDrawInitDataOffs + shapeDrawInitDataIndex * 8;
    const mtxGroups = [];
    let totalIndexCount = 0;
    let totalVertexCount = 0;
    for (let j = 0; j < mtxGroupCount; j++, shapeDrawInitDataIdx += 8) {
      const displayListSize = view.getUint32(shapeDrawInitDataIdx + 0);
      const displayListStart = displayListOffs + view.getUint32(shapeDrawInitDataIdx + 4);
      const mtxGroupDataOffs = shapeMtxInitDataOffs + (shapeMtxInitDataIndex + j) * 8;
      const useMtxIndex = view.getUint16(mtxGroupDataOffs + 0);
      const useMtxCount = view.getUint16(mtxGroupDataOffs + 2);
      const useMtxFirstIndex = view.getUint32(mtxGroupDataOffs + 4);
      const useMtxTableOffs = matrixTableOffs + useMtxFirstIndex * 2;
      const useMtxTableSize = useMtxCount;
      const useMtxTable = buffer.createTypedArray(Uint16Array, useMtxTableOffs, useMtxTableSize, 1 /* BIG_ENDIAN */);
      if (shapeMtxType === 0 /* Mtx */) {
        assert(useMtxCount === 1);
        assert(useMtxIndex === useMtxTable[0]);
      }
      const displayList = buffer.subarray(displayListStart, displayListSize);
      const loadedVertexData = vtxLoader.runVertices(vtxArrays, displayList, { firstVertexId: totalVertexCount });
      const indexOffset = totalIndexCount;
      const indexCount = loadedVertexData.totalIndexCount;
      totalIndexCount += indexCount;
      totalVertexCount += loadedVertexData.totalVertexCount;
      mtxGroups.push({ useMtxTable, indexOffset, indexCount, loadedVertexData });
    }
    const boundingSphereRadius = view.getFloat32(shapeInitDataIdx + 12);
    const bboxMinX = view.getFloat32(shapeInitDataIdx + 16);
    const bboxMinY = view.getFloat32(shapeInitDataIdx + 20);
    const bboxMinZ = view.getFloat32(shapeInitDataIdx + 24);
    const bboxMaxX = view.getFloat32(shapeInitDataIdx + 28);
    const bboxMaxY = view.getFloat32(shapeInitDataIdx + 32);
    const bboxMaxZ = view.getFloat32(shapeInitDataIdx + 36);
    const bbox = new AABB(bboxMinX, bboxMinY, bboxMinZ, bboxMaxX, bboxMaxY, bboxMaxZ);
    const materialIndex = -1;
    shapes.push({ shapeMtxType, loadedVertexLayout, mtxGroups, bbox, boundingSphereRadius, materialIndex });
    shapeInitDataIdx += 40;
  }
  return { shapes };
}
function calcTexMtx_Basic(dst, scaleS, scaleT, rotation, translationS, translationT, centerS, centerT) {
  const theta = rotation * Math.PI;
  const sinR = Math.sin(theta);
  const cosR = Math.cos(theta);
  mat4_exports.identity(dst);
  dst[0] = scaleS * cosR;
  dst[4] = scaleS * -sinR;
  dst[12] = translationS + centerS - (dst[0] * centerS + dst[4] * centerT);
  dst[1] = scaleT * sinR;
  dst[5] = scaleT * cosR;
  dst[13] = translationT + centerT - (dst[1] * centerS + dst[5] * centerT);
}
function calcTexMtx_Maya(dst, scaleS, scaleT, rotation, translationS, translationT) {
  const theta = rotation * Math.PI;
  const sinR = Math.sin(theta);
  const cosR = Math.cos(theta);
  mat4_exports.identity(dst);
  dst[0] = scaleS * cosR;
  dst[4] = scaleS * sinR;
  dst[12] = scaleS * (-0.5 * cosR - (0.5 * sinR - 0.5) - translationS);
  dst[1] = scaleT * -sinR;
  dst[5] = scaleT * cosR;
  dst[13] = scaleT * (-0.5 * cosR + (0.5 * sinR - 0.5) + translationT) + 1;
}
function readColorU8(view, srcOffs) {
  return colorNewFromRGBA8(view.getUint32(srcOffs + 0));
}
function readColorS16(view, srcOffs) {
  const r = view.getInt16(srcOffs + 0) / 255;
  const g = view.getInt16(srcOffs + 2) / 255;
  const b = view.getInt16(srcOffs + 4) / 255;
  const a = view.getInt16(srcOffs + 6) / 255;
  return colorNewFromRGBA(r, g, b, a);
}
function setColorChannel(mb, i, view, colorChanOffs, colorChanIndex) {
  if (colorChanIndex !== 65535) {
    const colorChanIdx = colorChanOffs + colorChanIndex * 8;
    const enable = !!view.getUint8(colorChanIdx + 0);
    assert(view.getUint8(colorChanIdx + 0) < 2);
    const matSrc = view.getUint8(colorChanIdx + 1);
    const lightMask = view.getUint8(colorChanIdx + 2);
    const diffFn = view.getUint8(colorChanIdx + 3);
    const afn = view.getUint8(colorChanIdx + 4);
    const attnFn = afn === 0 ? 0 /* SPEC */ : afn === 1 ? 1 /* SPOT */ : 2 /* NONE */;
    const ambSrc = view.getUint8(colorChanIdx + 5);
    mb.setChanCtrl(i, enable, ambSrc, matSrc, lightMask, diffFn, attnFn);
  }
}
function readTexMatrix(view, tableOffs, texMtxIndex) {
  const texMtxOffs = tableOffs + texMtxIndex * 100;
  const projection = view.getUint8(texMtxOffs + 0);
  const info = view.getUint8(texMtxOffs + 1);
  const matrixMode = info & 63;
  if (matrixMode === 2 /* ProjmapBasic */ || matrixMode === 3 /* ViewProjmapBasic */ || matrixMode === 4 || matrixMode === 5) {
    console.log(`Unusual matrix map mode:`, matrixMode);
    debugger;
  }
  assert(view.getUint16(texMtxOffs + 2) === 65535);
  const centerS = view.getFloat32(texMtxOffs + 4);
  const centerT = view.getFloat32(texMtxOffs + 8);
  const centerQ = view.getFloat32(texMtxOffs + 12);
  const scaleS = view.getFloat32(texMtxOffs + 16);
  const scaleT = view.getFloat32(texMtxOffs + 20);
  const rotation = view.getInt16(texMtxOffs + 24) / 32767;
  assert(view.getUint16(texMtxOffs + 26) === 65535);
  const translationS = view.getFloat32(texMtxOffs + 28);
  const translationT = view.getFloat32(texMtxOffs + 32);
  const p00 = view.getFloat32(texMtxOffs + 36);
  const p01 = view.getFloat32(texMtxOffs + 40);
  const p02 = view.getFloat32(texMtxOffs + 44);
  const p03 = view.getFloat32(texMtxOffs + 48);
  const p10 = view.getFloat32(texMtxOffs + 52);
  const p11 = view.getFloat32(texMtxOffs + 56);
  const p12 = view.getFloat32(texMtxOffs + 60);
  const p13 = view.getFloat32(texMtxOffs + 64);
  const p20 = view.getFloat32(texMtxOffs + 68);
  const p21 = view.getFloat32(texMtxOffs + 72);
  const p22 = view.getFloat32(texMtxOffs + 76);
  const p23 = view.getFloat32(texMtxOffs + 80);
  const p30 = view.getFloat32(texMtxOffs + 84);
  const p31 = view.getFloat32(texMtxOffs + 88);
  const p32 = view.getFloat32(texMtxOffs + 92);
  const p33 = view.getFloat32(texMtxOffs + 96);
  const effectMatrix = mat4_exports.fromValues(
    p00,
    p10,
    p20,
    p30,
    p01,
    p11,
    p21,
    p31,
    p02,
    p12,
    p22,
    p32,
    p03,
    p13,
    p23,
    p33
  );
  const matrix = mat4_exports.create();
  const isMaya = !!(info >>> 7);
  if (isMaya) {
    calcTexMtx_Maya(matrix, scaleS, scaleT, rotation, translationS, translationT);
  } else {
    calcTexMtx_Basic(matrix, scaleS, scaleT, rotation, translationS, translationT, centerS, centerT);
  }
  const texMtx = { info, projection, effectMatrix, matrix };
  return texMtx;
}
function readMAT2Chunk(buffer) {
  const view = buffer.createDataView();
  const materialCount = view.getUint16(8);
  const remapTableOffs = view.getUint32(16);
  const remapTable = [];
  for (let i = 0; i < materialCount; i++)
    remapTable[i] = view.getUint16(remapTableOffs + i * 2);
  const nameTableOffs = view.getUint32(20);
  const nameTable = readStringTable(buffer, nameTableOffs);
  const cullModeOffs = view.getUint32(24);
  const matColorOffs = view.getUint32(28);
  const colorChanNumOffs = view.getUint32(32);
  const colorChanOffs = view.getUint32(36);
  const texGenNumOffs = view.getUint32(40);
  const texCoordOffs = view.getUint32(44);
  const postTexCoordOffs = view.getUint32(48);
  const texMtxOffs = view.getUint32(52);
  const postTexMtxOffs = view.getUint32(56);
  const texNoOffs = view.getUint32(60);
  const tevOrderOffs = view.getUint32(64);
  const tevColorOffs = view.getUint32(68);
  const tevKColorOffs = view.getUint32(72);
  const tevStageNumOffs = view.getUint32(76);
  const tevStageOffs = view.getUint32(80);
  const tevSwapModeOffs = view.getUint32(84);
  const tevSwapModeTableOffs = view.getUint32(88);
  const fogOffs = view.getUint32(92);
  const alphaCompOffs = view.getUint32(96);
  const blendOffs = view.getUint32(100);
  const zModeOffs = view.getUint32(104);
  const zCompLocOffs = view.getUint32(108);
  const ditherOffs = view.getUint32(112);
  const nbtScaleOffs = view.getUint32(116);
  const materialEntries = [];
  const materialEntryTableOffs = view.getUint32(12);
  for (let i = 0; i < materialCount; i++) {
    const index = i;
    const name = nameTable[i];
    const materialEntryIdx = materialEntryTableOffs + 312 * remapTable[i];
    const materialMode = view.getUint8(materialEntryIdx + 0);
    const translucent = materialMode === 4;
    const cullModeIndex = view.getUint8(materialEntryIdx + 1);
    const colorChanNumIndex = view.getUint8(materialEntryIdx + 2);
    const zModeIndex = view.getUint8(materialEntryIdx + 6);
    const mb = new GXMaterialBuilder(name);
    const colorMatRegs = [];
    for (let j = 0; j < 2; j++) {
      const matColorIndex = view.getUint16(materialEntryIdx + 8 + j * 2);
      if (matColorIndex !== 65535)
        colorMatRegs.push(readColorU8(view, matColorOffs + matColorIndex * 4));
      else
        colorMatRegs.push(White);
    }
    const colorAmbRegs = [White, White];
    const lightChannelCount = view.getUint8(colorChanNumOffs + colorChanNumIndex);
    for (let j = 0; j < lightChannelCount; j++) {
      setColorChannel(mb, 0 /* COLOR0 */ + j, view, colorChanOffs, view.getUint16(materialEntryIdx + 12 + (j * 2 + 0) * 2));
      setColorChannel(mb, 2 /* ALPHA0 */ + j, view, colorChanOffs, view.getUint16(materialEntryIdx + 12 + (j * 2 + 1) * 2));
    }
    const texMatrices = [];
    for (let j = 0; j < 10; j++) {
      const texMtxIndex = view.getInt16(materialEntryIdx + 52 + j * 2);
      if (texMtxOffs > 0 && texMtxIndex >= 0)
        texMatrices[j] = readTexMatrix(view, texMtxOffs, texMtxIndex);
      else
        texMatrices[j] = null;
    }
    assert(texMatrices[8] === null);
    assert(texMatrices[9] === null);
    for (let j = 0; j < 8; j++) {
      const texCoordIndex = view.getInt16(materialEntryIdx + 20 + j * 2);
      if (texCoordIndex < 0)
        continue;
      const texCoordIdx = texCoordOffs + texCoordIndex * 4;
      const type = view.getUint8(texCoordIdx + 0);
      const source = view.getUint8(texCoordIdx + 1);
      const texGenMatrix = view.getUint8(texCoordIdx + 2);
      assert(view.getUint8(texCoordIdx + 3) === 255);
      const matrix = 30 /* TEXMTX0 */ + j * 3;
      assert(texGenMatrix === 60 /* IDENTITY */ || texGenMatrix === matrix);
      if (texGenMatrix === 60 /* IDENTITY */ && texMatrices[j] !== null) {
        mat4_exports.identity(texMatrices[j].matrix);
      }
      mb.setTexCoordGen(0 /* TEXCOORD0 */ + j, type, source, matrix);
    }
    const textureIndexes = [];
    for (let j = 0; j < 8; j++) {
      const textureTableIndex = view.getUint16(materialEntryIdx + 112 + j * 2);
      if (textureTableIndex !== 65535)
        textureIndexes.push(view.getUint16(texNoOffs + textureTableIndex * 2));
      else
        textureIndexes.push(-1);
    }
    const colorConstants = [];
    for (let j = 0; j < 4; j++) {
      const colorIndex = view.getUint16(materialEntryIdx + 128 + j * 2);
      if (colorIndex !== 65535)
        colorConstants.push(readColorU8(view, tevKColorOffs + colorIndex * 4));
      else
        colorConstants.push(White);
    }
    const colorRegisters = [];
    for (let j = 0; j < 4; j++) {
      const colorIndex = view.getUint16(materialEntryIdx + 200 + j * 2);
      if (colorIndex !== 65535)
        colorRegisters.push(readColorS16(view, tevColorOffs + colorIndex * 8));
      else
        colorRegisters.push(TransparentBlack);
    }
    const indTexMatrices = [];
    for (let j = 0; j < 16; j++) {
      const tevStageIndex = view.getInt16(materialEntryIdx + 208 + j * 2);
      if (tevStageIndex < 0)
        continue;
      const tevStageIdx = tevStageOffs + tevStageIndex * 20;
      const colorInA = view.getUint8(tevStageIdx + 1);
      const colorInB = view.getUint8(tevStageIdx + 2);
      const colorInC = view.getUint8(tevStageIdx + 3);
      const colorInD = view.getUint8(tevStageIdx + 4);
      mb.setTevColorIn(j, colorInA, colorInB, colorInC, colorInD);
      const colorOp = view.getUint8(tevStageIdx + 5);
      const colorBias = view.getUint8(tevStageIdx + 6);
      const colorScale = view.getUint8(tevStageIdx + 7);
      const colorClamp2 = !!view.getUint8(tevStageIdx + 8);
      const colorRegId = view.getUint8(tevStageIdx + 9);
      mb.setTevColorOp(j, colorOp, colorBias, colorScale, colorClamp2, colorRegId);
      const alphaInA = view.getUint8(tevStageIdx + 10);
      const alphaInB = view.getUint8(tevStageIdx + 11);
      const alphaInC = view.getUint8(tevStageIdx + 12);
      const alphaInD = view.getUint8(tevStageIdx + 13);
      mb.setTevAlphaIn(j, alphaInA, alphaInB, alphaInC, alphaInD);
      const alphaOp = view.getUint8(tevStageIdx + 14);
      const alphaBias = view.getUint8(tevStageIdx + 15);
      const alphaScale = view.getUint8(tevStageIdx + 16);
      const alphaClamp = !!view.getUint8(tevStageIdx + 17);
      const alphaRegId = view.getUint8(tevStageIdx + 18);
      mb.setTevAlphaOp(j, alphaOp, alphaBias, alphaScale, alphaClamp, alphaRegId);
      const tevOrderIndex = view.getUint16(materialEntryIdx + 168 + j * 2);
      const tevOrderIdx = tevOrderOffs + tevOrderIndex * 4;
      const texCoordId = view.getUint8(tevOrderIdx + 0);
      const texMap = view.getUint8(tevOrderIdx + 1);
      const channelId = getRasColorChannelID(view.getUint8(tevOrderIdx + 2));
      assert(view.getUint8(tevOrderIdx + 3) === 255);
      mb.setTevOrder(j, texCoordId, texMap, channelId);
      const konstColorSel = view.getUint8(materialEntryIdx + 136 + j);
      const konstAlphaSel = view.getUint8(materialEntryIdx + 152 + j);
      mb.setTevKColorSel(j, konstColorSel);
      mb.setTevKAlphaSel(j, konstAlphaSel);
      const tevSwapModeIndex = view.getUint16(materialEntryIdx + 240 + j * 2);
      if (tevSwapModeIndex !== 65535) {
        const tevSwapModeRasSel = view.getUint8(tevSwapModeOffs + tevSwapModeIndex * 4 + 0);
        const tevSwapModeTexSel = view.getUint8(tevSwapModeOffs + tevSwapModeIndex * 4 + 1);
        const tevSwapModeTableRasIndex = view.getUint16(materialEntryIdx + 272 + tevSwapModeRasSel * 2);
        const tevSwapModeTableTexIndex = view.getUint16(materialEntryIdx + 272 + tevSwapModeTexSel * 2);
        const rasSwapA = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableRasIndex * 4 + 0);
        const rasSwapB = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableRasIndex * 4 + 1);
        const rasSwapC = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableRasIndex * 4 + 2);
        const rasSwapD = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableRasIndex * 4 + 3);
        const texSwapA = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableTexIndex * 4 + 0);
        const texSwapB = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableTexIndex * 4 + 1);
        const texSwapC = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableTexIndex * 4 + 2);
        const texSwapD = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableTexIndex * 4 + 3);
        const rasSwapTable = [rasSwapA, rasSwapB, rasSwapC, rasSwapD];
        const texSwapTable = [texSwapA, texSwapB, texSwapC, texSwapD];
        mb.setTevSwapMode(j, rasSwapTable, texSwapTable);
      }
    }
    const alphaCompIndex = view.getUint16(materialEntryIdx + 306);
    const alphaCompIdx = alphaCompOffs + alphaCompIndex * 8;
    const compareA = view.getUint8(alphaCompIdx + 0);
    const referenceA = view.getUint8(alphaCompIdx + 1);
    const op = view.getUint8(alphaCompIdx + 2);
    const compareB = view.getUint8(alphaCompIdx + 3);
    const referenceB = view.getUint8(alphaCompIdx + 4);
    mb.setAlphaCompare(compareA, referenceA, op, compareB, referenceB);
    const blendModeIndex = view.getUint16(materialEntryIdx + 308);
    const blendIdx = blendOffs + blendModeIndex * 4;
    const blendMode = view.getUint8(blendIdx + 0);
    const blendSrcFactor = view.getUint8(blendIdx + 1);
    const blendDstFactor = view.getUint8(blendIdx + 2);
    const blendLogicOp = view.getUint8(blendIdx + 3);
    mb.setBlendMode(blendMode, blendSrcFactor, blendDstFactor, blendLogicOp);
    const cullMode = view.getUint32(cullModeOffs + cullModeIndex * 4);
    mb.setCullMode(cullMode);
    const zModeIdx = zModeOffs + zModeIndex * 4;
    const depthTest = !!view.getUint8(zModeIdx + 0);
    const depthFunc = view.getUint8(zModeIdx + 1);
    const depthWrite = !!view.getUint8(zModeIdx + 2);
    mb.setZMode(depthTest, depthFunc, depthWrite);
    const fogInfoIndex = view.getUint16(materialEntryIdx + 304);
    const fogBlock = new FogBlock();
    if (fogInfoIndex !== 65535) {
      const fogIdx = fogOffs + fogInfoIndex * 44;
      const fogType = view.getUint8(fogIdx + 0);
      const fogAdjEnabled = !!view.getUint8(fogIdx + 1);
      const fogAdjCenter = view.getUint16(fogIdx + 2);
      const fogStartZ = view.getFloat32(fogIdx + 4);
      const fogEndZ = view.getFloat32(fogIdx + 8);
      const fogNearZ = view.getFloat32(fogIdx + 12);
      const fogFarZ = view.getFloat32(fogIdx + 16);
      const fogColor = readColorU8(view, fogIdx + 20);
      const fogAdjTable = buffer.createTypedArray(Uint16Array, fogIdx + 24, 10, 1 /* BIG_ENDIAN */);
      fogBlockSet(fogBlock, fogType, fogStartZ, fogEndZ, fogNearZ, fogFarZ);
      colorCopy(fogBlock.Color, fogColor);
      fogBlock.AdjTable.set(fogAdjTable);
      fogBlock.AdjCenter = fogAdjCenter;
      mb.setFog(fogType, fogAdjEnabled);
    }
    const gxMaterial = mb.finish();
    materialEntries.push({
      index,
      name,
      materialMode,
      translucent,
      textureIndexes,
      texMatrices,
      gxMaterial,
      indTexMatrices,
      colorMatRegs,
      colorAmbRegs,
      colorRegisters,
      colorConstants,
      fogBlock
    });
  }
  return { materialEntries };
}
function readMAT3Chunk(buffer) {
  const view = buffer.createDataView();
  const materialCount = view.getUint16(8);
  const remapTableOffs = view.getUint32(16);
  const remapTable = [];
  for (let i = 0; i < materialCount; i++)
    remapTable[i] = view.getUint16(remapTableOffs + i * 2);
  const nameTableOffs = view.getUint32(20);
  const nameTable = readStringTable(buffer, nameTableOffs);
  const indirectOffs = view.getUint32(24);
  const cullModeOffs = view.getUint32(28);
  const matColorOffs = view.getUint32(32);
  const colorChanNumOffs = view.getUint32(36);
  const colorChanOffs = view.getUint32(40);
  const ambColorOffs = view.getUint32(44);
  const texGenNumOffs = view.getUint32(52);
  const texCoordOffs = view.getUint32(56);
  const postTexCoordOffs = view.getUint32(60);
  const texMtxOffs = view.getUint32(64);
  const postTexMtxOffs = view.getUint32(68);
  const texNoOffs = view.getUint32(72);
  const tevOrderOffs = view.getUint32(76);
  const tevColorOffs = view.getUint32(80);
  const tevKColorOffs = view.getUint32(84);
  const tevStageOffs = view.getUint32(92);
  const tevSwapModeOffs = view.getUint32(96);
  const tevSwapModeTableOffs = view.getUint32(100);
  const fogOffs = view.getUint32(104);
  const alphaCompOffs = view.getUint32(108);
  const blendOffs = view.getUint32(112);
  const zModeOffs = view.getUint32(116);
  const zCompOffs = view.getUint32(120);
  const ditherOffs = view.getUint32(124);
  const nbtScaleOffs = view.getUint32(128);
  const materialEntries = [];
  const materialEntryTableOffs = view.getUint32(12);
  for (let i = 0; i < materialCount; i++) {
    const index = i;
    const name = nameTable[i];
    const materialEntryIdx = materialEntryTableOffs + 332 * remapTable[i];
    const materialMode = view.getUint8(materialEntryIdx + 0);
    assert(materialMode === 1 || materialMode === 4);
    const translucent = materialMode === 4;
    const cullModeIndex = view.getUint8(materialEntryIdx + 1);
    const colorChanNumIndex = view.getUint8(materialEntryIdx + 2);
    const zModeIndex = view.getUint8(materialEntryIdx + 6);
    const mb = new GXMaterialBuilder(name);
    const colorMatRegs = [];
    for (let j = 0; j < 2; j++) {
      const matColorIndex = view.getUint16(materialEntryIdx + 8 + j * 2);
      if (matColorIndex !== 65535)
        colorMatRegs.push(readColorU8(view, matColorOffs + matColorIndex * 4));
      else
        colorMatRegs.push(White);
    }
    const colorAmbRegs = [];
    for (let j = 0; j < 2; j++) {
      const ambColorIndex = view.getUint16(materialEntryIdx + 20 + j * 2);
      if (ambColorIndex !== 65535)
        colorAmbRegs.push(readColorU8(view, ambColorOffs + ambColorIndex * 4));
      else
        colorAmbRegs.push(White);
    }
    const lightChannelCount = view.getUint8(colorChanNumOffs + colorChanNumIndex);
    for (let j = 0; j < lightChannelCount; j++) {
      setColorChannel(mb, 0 /* COLOR0 */ + j, view, colorChanOffs, view.getUint16(materialEntryIdx + 12 + (j * 2 + 0) * 2));
      setColorChannel(mb, 2 /* ALPHA0 */ + j, view, colorChanOffs, view.getUint16(materialEntryIdx + 12 + (j * 2 + 1) * 2));
    }
    const texMatrices = [];
    for (let j = 0; j < 10; j++) {
      const texMtxIndex = view.getInt16(materialEntryIdx + 72 + j * 2);
      if (texMtxOffs > 0 && texMtxIndex >= 0)
        texMatrices[j] = readTexMatrix(view, texMtxOffs, texMtxIndex);
      else
        texMatrices[j] = null;
    }
    assert(texMatrices[8] === null);
    assert(texMatrices[9] === null);
    for (let j = 0; j < 8; j++) {
      const texCoordIndex = view.getInt16(materialEntryIdx + 40 + j * 2);
      if (texCoordIndex < 0)
        continue;
      const texCoordIdx = texCoordOffs + texCoordIndex * 4;
      const type = view.getUint8(texCoordIdx + 0);
      const source = view.getUint8(texCoordIdx + 1);
      const texGenMatrix = view.getUint8(texCoordIdx + 2);
      assert(view.getUint8(texCoordIdx + 3) === 255);
      const matrix = 30 /* TEXMTX0 */ + j * 3;
      assert(texGenMatrix === 60 /* IDENTITY */ || texGenMatrix === matrix);
      if (texGenMatrix === 60 /* IDENTITY */ && texMatrices[j] !== null) {
        mat4_exports.identity(texMatrices[j].matrix);
      }
      mb.setTexCoordGen(0 /* TEXCOORD0 */ + j, type, source, matrix);
    }
    const textureIndexes = [];
    for (let j = 0; j < 8; j++) {
      const textureTableIndex = view.getUint16(materialEntryIdx + 132 + j * 2);
      if (textureTableIndex !== 65535)
        textureIndexes.push(view.getUint16(texNoOffs + textureTableIndex * 2));
      else
        textureIndexes.push(-1);
    }
    const colorConstants = [];
    for (let j = 0; j < 4; j++) {
      const colorIndex = view.getUint16(materialEntryIdx + 148 + j * 2);
      if (colorIndex !== 65535)
        colorConstants.push(readColorU8(view, tevKColorOffs + colorIndex * 4));
      else
        colorConstants.push(White);
    }
    const colorRegisters = [];
    for (let j = 0; j < 4; j++) {
      const colorIndex = view.getUint16(materialEntryIdx + 220 + j * 2);
      if (colorIndex !== 65535)
        colorRegisters.push(readColorS16(view, tevColorOffs + colorIndex * 8));
      else
        colorRegisters.push(TransparentBlack);
    }
    const indTexMatrices = [];
    const indirectEntryOffs = indirectOffs + i * 312;
    let hasIndirect = false;
    if (indirectOffs !== nameTableOffs)
      hasIndirect = view.getUint8(indirectEntryOffs + 0) === 1;
    if (hasIndirect) {
      const indTexStageNum = view.getUint8(indirectEntryOffs + 1);
      assert(indTexStageNum <= 4);
      for (let j = 0; j < indTexStageNum; j++) {
        const indTexOrderOffs = indirectEntryOffs + 4 + j * 4;
        const texCoordId = view.getUint8(indTexOrderOffs + 0);
        const texMapID = view.getUint8(indTexOrderOffs + 1);
        const indTexScaleOffs = indirectEntryOffs + 4 + 4 * 4 + 28 * 3 + j * 4;
        const scaleS = view.getUint8(indTexScaleOffs + 0);
        const scaleT = view.getUint8(indTexScaleOffs + 1);
        mb.setIndTexOrder(j, texCoordId, texMapID);
        mb.setIndTexScale(j, scaleS, scaleT);
        const indTexMatrixOffs = indirectEntryOffs + 4 + 4 * 4 + j * 28;
        const p00 = view.getFloat32(indTexMatrixOffs + 0);
        const p01 = view.getFloat32(indTexMatrixOffs + 4);
        const p02 = view.getFloat32(indTexMatrixOffs + 8);
        const p10 = view.getFloat32(indTexMatrixOffs + 12);
        const p11 = view.getFloat32(indTexMatrixOffs + 16);
        const p12 = view.getFloat32(indTexMatrixOffs + 20);
        const scale6 = Math.pow(2, view.getInt8(indTexMatrixOffs + 24));
        const m = new Float32Array([
          p00 * scale6,
          p01 * scale6,
          p02 * scale6,
          scale6,
          p10 * scale6,
          p11 * scale6,
          p12 * scale6,
          0
        ]);
        indTexMatrices.push(m);
      }
    }
    for (let j = 0; j < 16; j++) {
      const tevStageIndex = view.getInt16(materialEntryIdx + 228 + j * 2);
      if (tevStageIndex < 0)
        continue;
      const tevStageIdx = tevStageOffs + tevStageIndex * 20;
      const colorInA = view.getUint8(tevStageIdx + 1);
      const colorInB = view.getUint8(tevStageIdx + 2);
      const colorInC = view.getUint8(tevStageIdx + 3);
      const colorInD = view.getUint8(tevStageIdx + 4);
      mb.setTevColorIn(j, colorInA, colorInB, colorInC, colorInD);
      const colorOp = view.getUint8(tevStageIdx + 5);
      const colorBias = view.getUint8(tevStageIdx + 6);
      const colorScale = view.getUint8(tevStageIdx + 7);
      const colorClamp2 = !!view.getUint8(tevStageIdx + 8);
      const colorRegId = view.getUint8(tevStageIdx + 9);
      mb.setTevColorOp(j, colorOp, colorBias, colorScale, colorClamp2, colorRegId);
      const alphaInA = view.getUint8(tevStageIdx + 10);
      const alphaInB = view.getUint8(tevStageIdx + 11);
      const alphaInC = view.getUint8(tevStageIdx + 12);
      const alphaInD = view.getUint8(tevStageIdx + 13);
      mb.setTevAlphaIn(j, alphaInA, alphaInB, alphaInC, alphaInD);
      const alphaOp = view.getUint8(tevStageIdx + 14);
      const alphaBias = view.getUint8(tevStageIdx + 15);
      const alphaScale = view.getUint8(tevStageIdx + 16);
      const alphaClamp = !!view.getUint8(tevStageIdx + 17);
      const alphaRegId = view.getUint8(tevStageIdx + 18);
      mb.setTevAlphaOp(j, alphaOp, alphaBias, alphaScale, alphaClamp, alphaRegId);
      const tevOrderIndex = view.getUint16(materialEntryIdx + 188 + j * 2);
      const tevOrderIdx = tevOrderOffs + tevOrderIndex * 4;
      const texCoordId = view.getUint8(tevOrderIdx + 0);
      const texMap = view.getUint8(tevOrderIdx + 1);
      const channelId = getRasColorChannelID(view.getUint8(tevOrderIdx + 2));
      assert(view.getUint8(tevOrderIdx + 3) === 255);
      mb.setTevOrder(j, texCoordId, texMap, channelId);
      const konstColorSel = view.getUint8(materialEntryIdx + 156 + j);
      const konstAlphaSel = view.getUint8(materialEntryIdx + 172 + j);
      mb.setTevKColorSel(j, konstColorSel);
      mb.setTevKAlphaSel(j, konstAlphaSel);
      const tevSwapModeIndex = view.getUint16(materialEntryIdx + 260 + j * 2);
      if (tevSwapModeIndex !== 65535) {
        const tevSwapModeRasSel = view.getUint8(tevSwapModeOffs + tevSwapModeIndex * 4 + 0);
        const tevSwapModeTexSel = view.getUint8(tevSwapModeOffs + tevSwapModeIndex * 4 + 1);
        const tevSwapModeTableRasIndex = view.getUint16(materialEntryIdx + 292 + tevSwapModeRasSel * 2);
        const tevSwapModeTableTexIndex = view.getUint16(materialEntryIdx + 292 + tevSwapModeTexSel * 2);
        const rasSwapA = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableRasIndex * 4 + 0);
        const rasSwapB = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableRasIndex * 4 + 1);
        const rasSwapC = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableRasIndex * 4 + 2);
        const rasSwapD = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableRasIndex * 4 + 3);
        const texSwapA = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableTexIndex * 4 + 0);
        const texSwapB = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableTexIndex * 4 + 1);
        const texSwapC = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableTexIndex * 4 + 2);
        const texSwapD = view.getUint8(tevSwapModeTableOffs + tevSwapModeTableTexIndex * 4 + 3);
        const rasSwapTable = [rasSwapA, rasSwapB, rasSwapC, rasSwapD];
        const texSwapTable = [texSwapA, texSwapB, texSwapC, texSwapD];
        mb.setTevSwapMode(j, rasSwapTable, texSwapTable);
      }
      if (hasIndirect) {
        const indTexStageOffs = indirectEntryOffs + 4 + 4 * 4 + 28 * 3 + 4 * 4 + j * 12;
        const indTexStage = view.getUint8(indTexStageOffs + 0);
        const indTexFormat = view.getUint8(indTexStageOffs + 1);
        const indTexBiasSel = view.getUint8(indTexStageOffs + 2);
        const indTexMatrix = view.getUint8(indTexStageOffs + 3);
        assert(indTexMatrix <= 11 /* T2 */);
        const indTexWrapS = view.getUint8(indTexStageOffs + 4);
        const indTexWrapT = view.getUint8(indTexStageOffs + 5);
        const indTexAddPrev = !!view.getUint8(indTexStageOffs + 6);
        const indTexUseOrigLOD = !!view.getUint8(indTexStageOffs + 7);
        const indTexAlphaSel = view.getUint8(indTexStageOffs + 8);
        mb.setTevIndirect(j, indTexStage, indTexFormat, indTexBiasSel, indTexMatrix, indTexWrapS, indTexWrapT, indTexAddPrev, indTexUseOrigLOD, indTexAlphaSel);
      }
    }
    const alphaCompIndex = view.getUint16(materialEntryIdx + 326);
    const alphaCompIdx = alphaCompOffs + alphaCompIndex * 8;
    const compareA = view.getUint8(alphaCompIdx + 0);
    const referenceA = view.getUint8(alphaCompIdx + 1);
    const op = view.getUint8(alphaCompIdx + 2);
    const compareB = view.getUint8(alphaCompIdx + 3);
    const referenceB = view.getUint8(alphaCompIdx + 4);
    mb.setAlphaCompare(compareA, referenceA, op, compareB, referenceB);
    const blendModeIndex = view.getUint16(materialEntryIdx + 328);
    const blendIdx = blendOffs + blendModeIndex * 4;
    const blendMode = view.getUint8(blendIdx + 0);
    const blendSrcFactor = view.getUint8(blendIdx + 1);
    const blendDstFactor = view.getUint8(blendIdx + 2);
    const blendLogicOp = view.getUint8(blendIdx + 3);
    mb.setBlendMode(blendMode, blendSrcFactor, blendDstFactor, blendLogicOp);
    const cullMode = view.getUint32(cullModeOffs + cullModeIndex * 4);
    mb.setCullMode(cullMode);
    const zModeIdx = zModeOffs + zModeIndex * 4;
    const depthTest = !!view.getUint8(zModeIdx + 0);
    const depthFunc = view.getUint8(zModeIdx + 1);
    const depthWrite = !!view.getUint8(zModeIdx + 2);
    mb.setZMode(depthTest, depthFunc, depthWrite);
    const fogInfoIndex = view.getUint16(materialEntryIdx + 324);
    const fogBlock = new FogBlock();
    if (fogInfoIndex !== 65535) {
      const fogInfoOffs = fogOffs + fogInfoIndex * 44;
      const fogType = view.getUint8(fogInfoOffs + 0);
      const fogAdjEnabled = !!view.getUint8(fogInfoOffs + 1);
      const fogAdjCenter = view.getUint16(fogInfoOffs + 2);
      const fogStartZ = view.getFloat32(fogInfoOffs + 4);
      const fogEndZ = view.getFloat32(fogInfoOffs + 8);
      const fogNearZ = view.getFloat32(fogInfoOffs + 12);
      const fogFarZ = view.getFloat32(fogInfoOffs + 16);
      const fogColor = readColorU8(view, fogInfoOffs + 20);
      const fogAdjTable = buffer.createTypedArray(Uint16Array, fogInfoOffs + 24, 10, 1 /* BIG_ENDIAN */);
      fogBlockSet(fogBlock, fogType, fogStartZ, fogEndZ, fogNearZ, fogFarZ);
      colorCopy(fogBlock.Color, fogColor);
      fogBlock.AdjTable.set(fogAdjTable);
      fogBlock.AdjCenter = fogAdjCenter;
      mb.setFog(fogType, fogAdjEnabled);
    }
    const gxMaterial = mb.finish();
    materialEntries.push({
      index,
      name,
      materialMode,
      translucent,
      textureIndexes,
      texMatrices,
      gxMaterial,
      indTexMatrices,
      colorMatRegs,
      colorAmbRegs,
      colorRegisters,
      colorConstants,
      fogBlock
    });
  }
  return { materialEntries };
}
function readTEX1Chunk(buffer) {
  const view = buffer.createDataView();
  const textureCount = view.getUint16(8);
  const textureHeaderOffs = view.getUint32(12);
  const nameTableOffs = view.getUint32(16);
  const nameTable = readStringTable(buffer, nameTableOffs);
  const samplers = [];
  const textureDatas = [];
  for (let i = 0; i < textureCount; i++) {
    const textureIdx = textureHeaderOffs + i * 32;
    const name = nameTable[i];
    const btiTexture = readBTI_Texture(buffer.slice(textureIdx), name);
    let textureDataIndex = -1;
    const textureData = btiTexture.data;
    if (textureData)
      textureDataIndex = textureDatas.findIndex((tex) => tex.data && tex.data.byteOffset === textureData.byteOffset);
    if (textureDataIndex < 0) {
      const textureData2 = {
        name: btiTexture.name,
        width: btiTexture.width,
        height: btiTexture.height,
        format: btiTexture.format,
        mipCount: btiTexture.mipCount,
        data: btiTexture.data,
        paletteFormat: btiTexture.paletteFormat,
        paletteData: btiTexture.paletteData
      };
      textureDatas.push(textureData2);
      textureDataIndex = textureDatas.length - 1;
    }
    const sampler = {
      index: i,
      name: btiTexture.name,
      wrapS: btiTexture.wrapS,
      wrapT: btiTexture.wrapT,
      minFilter: btiTexture.minFilter,
      magFilter: btiTexture.magFilter,
      minLOD: btiTexture.minLOD,
      maxLOD: btiTexture.maxLOD,
      lodBias: btiTexture.lodBias,
      maxAnisotropy: btiTexture.maxAnisotropy,
      textureDataIndex
    };
    samplers.push(sampler);
  }
  return { textureDatas, samplers };
}
var BMD = class _BMD {
  constructor(j3d) {
    this.subversion = j3d.subversion;
    this.inf1 = readINF1Chunk(j3d.nextChunk("INF1"));
    this.vtx1 = readVTX1Chunk(j3d.nextChunk("VTX1"));
    this.evp1 = readEVP1Chunk(j3d.nextChunk("EVP1"));
    this.drw1 = readDRW1Chunk(j3d.nextChunk("DRW1"));
    this.jnt1 = readJNT1Chunk(j3d.nextChunk("JNT1"));
    this.shp1 = readSHP1Chunk(j3d.nextChunk("SHP1"), this);
    if (j3d.magic === "J3D2bmd2")
      this.mat3 = readMAT2Chunk(j3d.nextChunk("MAT2"));
    else
      this.mat3 = readMAT3Chunk(j3d.nextChunk("MAT3"));
    const mdl3 = j3d.maybeNextChunk("MDL3");
    this.tex1 = readTEX1Chunk(j3d.nextChunk("TEX1"));
    this.assocHierarchy();
  }
  assocHierarchy() {
    const view = this.inf1.hierarchyData.createDataView();
    let offs = 0;
    let currentMaterialIndex = -1;
    while (true) {
      const type = view.getUint16(offs + 0);
      const value = view.getUint16(offs + 2);
      if (type === 0 /* End */) {
        break;
      } else if (type === 17 /* Material */) {
        currentMaterialIndex = value;
      } else if (type === 18 /* Shape */) {
        const shape = this.shp1.shapes[value];
        assert(currentMaterialIndex !== -1);
        assert(shape.materialIndex === -1);
        shape.materialIndex = currentMaterialIndex;
      }
      offs += 4;
    }
    for (let i = 0; i < this.shp1.shapes.length; i++)
      assert(this.shp1.shapes[i].materialIndex !== -1);
    for (let i = 0; i < this.mat3.materialEntries.length; i++) {
      let multiCount = 0;
      for (let j = 0; j < this.shp1.shapes.length; j++) {
        const shp1 = this.shp1.shapes[j];
        if (shp1.materialIndex !== i)
          continue;
        if (this.shp1.shapes[j].shapeMtxType === 3 /* Multi */)
          ++multiCount;
      }
      this.mat3.materialEntries[i].gxMaterial.usePnMtxIdx = multiCount !== 0;
    }
  }
  static parseReader(j3d) {
    return new _BMD(j3d);
  }
  static parse(buffer) {
    const j3d = new JSystemFileReaderHelper(buffer);
    assert(j3d.magic === "J3D2bmd2" || j3d.magic === "J3D2bmd3" || j3d.magic === "J3D2bdl4");
    return this.parseReader(j3d);
  }
  subversion;
  inf1;
  vtx1;
  evp1;
  drw1;
  jnt1;
  shp1;
  mat3;
  tex1;
};
var BMT = class _BMT {
  mat3;
  tex1;
  constructor(j3d) {
    assert(j3d.magic === "J3D2bmt3");
    const mat3Chunk = j3d.maybeNextChunk("MAT3");
    this.mat3 = mat3Chunk !== null ? readMAT3Chunk(mat3Chunk) : null;
    const tex1Chunk = j3d.maybeNextChunk("TEX1");
    this.tex1 = tex1Chunk !== null ? readTEX1Chunk(tex1Chunk) : null;
  }
  static parse(buffer) {
    const j3d = new JSystemFileReaderHelper(buffer);
    return new _BMT(j3d);
  }
};
function translateAnimationTrack(data, scale6, count, index, tangent) {
  if (count === 1) {
    const value = data[index];
    const frames = [{ time: 0, value: value * scale6, tangentIn: 0, tangentOut: 0 }];
    return { frames };
  } else {
    const frames = [];
    if (tangent === 0 /* In */) {
      for (let i = index; i < index + 3 * count; i += 3) {
        const time = data[i + 0], value = data[i + 1] * scale6, tangentIn = data[i + 2] * scale6, tangentOut = tangentIn;
        frames.push({ time, value, tangentIn, tangentOut });
      }
    } else if (tangent === 1 /* InOut */) {
      for (let i = index; i < index + 4 * count; i += 4) {
        const time = data[i + 0], value = data[i + 1] * scale6, tangentIn = data[i + 2] * scale6, tangentOut = data[i + 3] * scale6;
        frames.push({ time, value, tangentIn, tangentOut });
      }
    }
    return { frames };
  }
}
function readTTK1Chunk(buffer) {
  const view = buffer.createDataView();
  const loopMode = view.getUint8(8);
  const rotationDecimal = view.getUint8(9);
  const duration2 = view.getUint16(10);
  const animationCount = view.getUint16(12) / 3;
  const sCount = view.getUint16(14);
  const rCount = view.getUint16(16);
  const tCount = view.getUint16(18);
  const animationTableOffs = view.getUint32(20);
  const remapTableOffs = view.getUint32(24);
  const materialNameTableOffs = view.getUint32(28);
  const texMtxIndexTableOffs = view.getUint32(32);
  const textureCenterTableOffs = view.getUint32(36);
  const sTableOffs = view.getUint32(40);
  const rTableOffs = view.getUint32(44);
  const tTableOffs = view.getUint32(48);
  const isMaya = view.getUint32(92) === 1;
  const rotationScale = Math.pow(2, rotationDecimal) / 32767;
  const sTable = buffer.createTypedArray(Float32Array, sTableOffs, sCount, 1 /* BIG_ENDIAN */);
  const rTable = buffer.createTypedArray(Int16Array, rTableOffs, rCount, 1 /* BIG_ENDIAN */);
  const tTable = buffer.createTypedArray(Float32Array, tTableOffs, tCount, 1 /* BIG_ENDIAN */);
  const materialNameTable = readStringTable(buffer, materialNameTableOffs);
  let animationTableIdx = animationTableOffs;
  function readAnimationTrack(data, scale6) {
    const count = view.getUint16(animationTableIdx + 0);
    const index = view.getUint16(animationTableIdx + 2);
    const tangent = view.getUint16(animationTableIdx + 4);
    animationTableIdx += 6;
    return translateAnimationTrack(data, scale6, count, index, tangent);
  }
  const uvAnimationEntries = [];
  for (let i = 0; i < animationCount; i++) {
    const materialName = materialNameTable[i];
    const texGenIndex = view.getUint8(texMtxIndexTableOffs + i);
    const centerS = view.getFloat32(textureCenterTableOffs + i * 12 + 0);
    const centerT = view.getFloat32(textureCenterTableOffs + i * 12 + 4);
    const centerQ = view.getFloat32(textureCenterTableOffs + i * 12 + 8);
    const scaleS = readAnimationTrack(sTable, 1);
    const rotationS = readAnimationTrack(rTable, rotationScale);
    const translationS = readAnimationTrack(tTable, 1);
    const scaleT = readAnimationTrack(sTable, 1);
    const rotationT = readAnimationTrack(rTable, rotationScale);
    const translationT = readAnimationTrack(tTable, 1);
    const scaleQ = readAnimationTrack(sTable, 1);
    const rotationQ = readAnimationTrack(rTable, rotationScale);
    const translationQ = readAnimationTrack(tTable, 1);
    uvAnimationEntries.push({
      materialName,
      texGenIndex,
      centerS,
      centerT,
      centerQ,
      scaleS,
      rotationS,
      translationS,
      scaleT,
      rotationT,
      translationT,
      scaleQ,
      rotationQ,
      translationQ
    });
  }
  return { duration: duration2, loopMode, isMaya, uvAnimationEntries };
}
var BTK = class {
  static parse(buffer) {
    const j3d = new JSystemFileReaderHelper(buffer);
    assert(j3d.magic === "J3D1btk1");
    return readTTK1Chunk(j3d.nextChunk("TTK1", -4));
  }
};
function readTRK1Chunk(buffer) {
  const view = buffer.createDataView();
  const loopMode = view.getUint8(8);
  const duration2 = view.getUint16(10);
  const registerColorAnimationTableCount = view.getUint16(12);
  const konstantColorAnimationTableCount = view.getUint16(14);
  const registerRCount = view.getUint16(16);
  const registerGCount = view.getUint16(18);
  const registerBCount = view.getUint16(20);
  const registerACount = view.getUint16(22);
  const konstantRCount = view.getUint16(24);
  const konstantGCount = view.getUint16(26);
  const konstantBCount = view.getUint16(28);
  const konstantACount = view.getUint16(30);
  const registerColorAnimationTableOffs = view.getUint32(32);
  const konstantColorAnimationTableOffs = view.getUint32(36);
  const registerRemapTableOffs = view.getUint32(40);
  const konstantRemapTableOffs = view.getUint32(44);
  const registerNameTableOffs = view.getUint32(48);
  const konstantNameTableOffs = view.getUint32(52);
  const registerROffs = view.getUint32(56);
  const registerGOffs = view.getUint32(60);
  const registerBOffs = view.getUint32(64);
  const registerAOffs = view.getUint32(68);
  const konstantROffs = view.getUint32(72);
  const konstantGOffs = view.getUint32(76);
  const konstantBOffs = view.getUint32(80);
  const konstantAOffs = view.getUint32(84);
  const registerNameTable = readStringTable(buffer, registerNameTableOffs);
  const konstantNameTable = readStringTable(buffer, konstantNameTableOffs);
  let animationTableIdx;
  function readAnimationTrack(data) {
    const count = view.getUint16(animationTableIdx + 0);
    const index = view.getUint16(animationTableIdx + 2);
    const tangent = view.getUint16(animationTableIdx + 4);
    animationTableIdx += 6;
    return translateAnimationTrack(data, 1 / 255, count, index, tangent);
  }
  const animationEntries = [];
  const registerRTable = buffer.createTypedArray(Int16Array, registerROffs, registerRCount, 1 /* BIG_ENDIAN */);
  const registerGTable = buffer.createTypedArray(Int16Array, registerGOffs, registerGCount, 1 /* BIG_ENDIAN */);
  const registerBTable = buffer.createTypedArray(Int16Array, registerBOffs, registerBCount, 1 /* BIG_ENDIAN */);
  const registerATable = buffer.createTypedArray(Int16Array, registerAOffs, registerACount, 1 /* BIG_ENDIAN */);
  animationTableIdx = registerColorAnimationTableOffs;
  for (let i = 0; i < registerColorAnimationTableCount; i++) {
    const materialName = registerNameTable[i];
    const r = readAnimationTrack(registerRTable);
    const g = readAnimationTrack(registerGTable);
    const b = readAnimationTrack(registerBTable);
    const a = readAnimationTrack(registerATable);
    const colorId = view.getUint8(animationTableIdx);
    const colorKind = 9 /* C0 */ + colorId;
    animationTableIdx += 4;
    animationEntries.push({ materialName, colorKind, r, g, b, a });
  }
  const konstantRTable = buffer.createTypedArray(Int16Array, konstantROffs, konstantRCount, 1 /* BIG_ENDIAN */);
  const konstantGTable = buffer.createTypedArray(Int16Array, konstantGOffs, konstantGCount, 1 /* BIG_ENDIAN */);
  const konstantBTable = buffer.createTypedArray(Int16Array, konstantBOffs, konstantBCount, 1 /* BIG_ENDIAN */);
  const konstantATable = buffer.createTypedArray(Int16Array, konstantAOffs, konstantACount, 1 /* BIG_ENDIAN */);
  animationTableIdx = konstantColorAnimationTableOffs;
  for (let i = 0; i < konstantColorAnimationTableCount; i++) {
    const materialName = konstantNameTable[i];
    const r = readAnimationTrack(konstantRTable);
    const g = readAnimationTrack(konstantGTable);
    const b = readAnimationTrack(konstantBTable);
    const a = readAnimationTrack(konstantATable);
    const colorId = view.getUint8(animationTableIdx);
    const colorKind = 4 /* K0 */ + colorId;
    animationTableIdx += 4;
    animationEntries.push({ materialName, colorKind, r, g, b, a });
  }
  return { duration: duration2, loopMode, animationEntries };
}
var BRK = class {
  static parse(buffer) {
    const j3d = new JSystemFileReaderHelper(buffer);
    assert(j3d.magic === "J3D1brk1");
    return readTRK1Chunk(j3d.nextChunk("TRK1"));
  }
};
function readPAK1Chunk(buffer) {
  const view = buffer.createDataView();
  const loopMode = view.getUint8(8);
  const duration2 = view.getUint16(12);
  const colorAnimationTableCount = view.getUint16(14);
  const rCount = view.getUint16(16);
  const gCount = view.getUint16(18);
  const bCount = view.getUint16(20);
  const aCount = view.getUint16(22);
  const colorAnimationTableOffs = view.getUint32(24);
  const remapTableOffs = view.getUint32(28);
  const nameTableOffs = view.getUint32(32);
  const rOffs = view.getUint32(36);
  const gOffs = view.getUint32(40);
  const bOffs = view.getUint32(44);
  const aOffs = view.getUint32(48);
  const nameTable = readStringTable(buffer, nameTableOffs);
  let animationTableIdx;
  function readAnimationTrack(data) {
    const count = view.getUint16(animationTableIdx + 0);
    const index = view.getUint16(animationTableIdx + 2);
    const tangent = view.getUint16(animationTableIdx + 4);
    animationTableIdx += 6;
    return translateAnimationTrack(data, 1 / 255, count, index, tangent);
  }
  const animationEntries = [];
  const registerRTable = buffer.createTypedArray(Int16Array, rOffs, rCount, 1 /* BIG_ENDIAN */);
  const registerGTable = buffer.createTypedArray(Int16Array, gOffs, gCount, 1 /* BIG_ENDIAN */);
  const registerBTable = buffer.createTypedArray(Int16Array, bOffs, bCount, 1 /* BIG_ENDIAN */);
  const registerATable = buffer.createTypedArray(Int16Array, aOffs, aCount, 1 /* BIG_ENDIAN */);
  animationTableIdx = colorAnimationTableOffs;
  for (let i = 0; i < colorAnimationTableCount; i++) {
    const materialName = nameTable[i];
    const r = readAnimationTrack(registerRTable);
    const g = readAnimationTrack(registerGTable);
    const b = readAnimationTrack(registerBTable);
    const a = readAnimationTrack(registerATable);
    const colorKind = 0 /* MAT0 */;
    animationEntries.push({ materialName, colorKind, r, g, b, a });
  }
  return { duration: duration2, loopMode, animationEntries };
}
var BPK = class {
  static parse(buffer) {
    const j3d = new JSystemFileReaderHelper(buffer);
    assert(j3d.magic === "J3D1bpk1");
    return readPAK1Chunk(j3d.nextChunk("PAK1"));
  }
};
function readANK1Chunk(buffer) {
  const view = buffer.createDataView();
  const loopMode = view.getUint8(8);
  const rotationDecimal = view.getUint8(9);
  let duration2 = view.getUint16(10);
  const jointAnimationTableCount = view.getUint16(12);
  const sCount = view.getUint16(14);
  const rCount = view.getUint16(16);
  const tCount = view.getUint16(18);
  const jointAnimationTableOffs = view.getUint32(20);
  const sTableOffs = view.getUint32(24);
  const rTableOffs = view.getUint32(28);
  const tTableOffs = view.getUint32(32);
  const rotationScale = Math.pow(2, rotationDecimal) / 32767 * Math.PI;
  const sTable = buffer.createTypedArray(Float32Array, sTableOffs, sCount, 1 /* BIG_ENDIAN */);
  const rTable = buffer.createTypedArray(Int16Array, rTableOffs, rCount, 1 /* BIG_ENDIAN */);
  const tTable = buffer.createTypedArray(Float32Array, tTableOffs, tCount, 1 /* BIG_ENDIAN */);
  let animationTableIdx = jointAnimationTableOffs;
  function readAnimationTrack(data, scale6) {
    const count = view.getUint16(animationTableIdx + 0);
    const index = view.getUint16(animationTableIdx + 2);
    const tangent = view.getUint16(animationTableIdx + 4);
    animationTableIdx += 6;
    return translateAnimationTrack(data, scale6, count, index, tangent);
  }
  const jointAnimationEntries = [];
  for (let i = 0; i < jointAnimationTableCount; i++) {
    const scaleX = readAnimationTrack(sTable, 1);
    const rotationX = readAnimationTrack(rTable, rotationScale);
    const translationX = readAnimationTrack(tTable, 1);
    const scaleY = readAnimationTrack(sTable, 1);
    const rotationY = readAnimationTrack(rTable, rotationScale);
    const translationY = readAnimationTrack(tTable, 1);
    const scaleZ = readAnimationTrack(sTable, 1);
    const rotationZ = readAnimationTrack(rTable, rotationScale);
    const translationZ = readAnimationTrack(tTable, 1);
    jointAnimationEntries.push({
      scaleX,
      rotationX,
      translationX,
      scaleY,
      rotationY,
      translationY,
      scaleZ,
      rotationZ,
      translationZ
    });
  }
  if (duration2 === 0) {
    duration2 = 1;
  }
  return { loopMode, duration: duration2, jointAnimationEntries };
}
var BCK = class {
  static parse(buffer) {
    const j3d = new JSystemFileReaderHelper(buffer);
    assert(j3d.magic === "J3D1bck1");
    return readANK1Chunk(j3d.nextChunk("ANK1"));
  }
};
function readTPT1Chunk(buffer) {
  const view = buffer.createDataView();
  const loopMode = view.getUint8(8);
  const duration2 = view.getUint16(10);
  const materialAnimationTableCount = view.getUint16(12);
  const textureIndexTableCount = view.getUint16(14);
  const materialAnimationTableOffs = view.getUint32(16);
  const textureIndexTableOffs = view.getUint32(20);
  const remapTableOffs = view.getUint32(24);
  const nameTableOffs = view.getUint32(28);
  const nameTable = readStringTable(buffer, nameTableOffs);
  let animationTableIdx;
  const animationEntries = [];
  animationTableIdx = materialAnimationTableOffs;
  for (let i = 0; i < materialAnimationTableCount; i++) {
    const materialName = nameTable[i];
    const textureCount = view.getUint16(animationTableIdx + 0);
    const textureFirstIndex = view.getUint16(animationTableIdx + 2);
    const texMapIndex = view.getUint8(animationTableIdx + 4);
    const textureIndices = [];
    for (let j = 0; j < textureCount; j++) {
      const textureIndex = view.getUint16(textureIndexTableOffs + (textureFirstIndex + j) * 2);
      textureIndices.push(textureIndex);
    }
    animationEntries.push({ materialName, texMapIndex, textureIndices });
    animationTableIdx += 8;
  }
  return { duration: duration2, loopMode, animationEntries };
}
var BTP = class {
  static parse(buffer) {
    const j3d = new JSystemFileReaderHelper(buffer);
    assert(j3d.magic === "J3D1btp1");
    return readTPT1Chunk(j3d.nextChunk("TPT1"));
  }
};

// noclip/Common/JSYSTEM/J3D/J3DGraphBase.ts
init_gx_material();
init_gx_render();
init_gx_render();
init_Camera();
init_util();
init_Geometry();
init_GfxPlatform();
init_GfxRenderInstManager();
init_Color();
init_MathHelpers();
init_gx_texture();

// noclip/Common/JSYSTEM/J3D/J3DGraphAnimator.ts
init_util();
init_esm();
init_MathHelpers();

// noclip/Spline.ts
init_esm();
var scratchVec43 = vec4_exports.create();
function getPointCubic(cf, t2) {
  return ((cf[0] * t2 + cf[1]) * t2 + cf[2]) * t2 + cf[3];
}
function getCoeffHermite(dst, p0, p1, s0, s1) {
  dst[0] = p0 * 2 + p1 * -2 + s0 * 1 + s1 * 1;
  dst[1] = p0 * -3 + p1 * 3 + s0 * -2 + s1 * -1;
  dst[2] = p0 * 0 + p1 * 0 + s0 * 1 + s1 * 0;
  dst[3] = p0 * 1 + p1 * 0 + s0 * 0 + s1 * 0;
}
function getPointHermite(p0, p1, s0, s1, t2) {
  getCoeffHermite(scratchVec43, p0, p1, s0, s1);
  return getPointCubic(scratchVec43, t2);
}

// noclip/Common/JSYSTEM/J3D/J3DGraphAnimator.ts
function hermiteInterpolate(k0, k1, frame2) {
  const length5 = k1.time - k0.time;
  const t2 = (frame2 - k0.time) / length5;
  const p0 = k0.value;
  const p1 = k1.value;
  const s0 = k0.tangentOut * length5;
  const s1 = k1.tangentIn * length5;
  return getPointHermite(p0, p1, s0, s1, t2);
}
function findKeyframe(frames, time) {
  for (let i = 0; i < frames.length; i++)
    if (time < frames[i].time)
      return i;
  return -1;
}
function sampleAnimationData(track, frame2) {
  const frames = track.frames;
  if (frames.length === 1)
    return frames[0].value;
  const idx1 = findKeyframe(frames, frame2);
  if (idx1 === 0)
    return frames[0].value;
  if (idx1 < 0)
    return frames[frames.length - 1].value;
  const idx0 = idx1 - 1;
  const k0 = frames[idx0];
  const k1 = frames[idx1];
  return hermiteInterpolate(k0, k1, frame2);
}
function sampleANF1AnimationData(frames, animFrame) {
  if (frames.length === 1) {
    return frames[0];
  }
  return frames[animFrame];
}
var scratchTransform = new JointTransformInfo();
function calcJointMatrixMayaSSC(dst, parentScale) {
  const parentScaleX = 1 / parentScale[0];
  dst[0] *= parentScaleX;
  dst[4] *= parentScaleX;
  dst[8] *= parentScaleX;
  const parentScaleY = 1 / parentScale[1];
  dst[1] *= parentScaleY;
  dst[5] *= parentScaleY;
  dst[9] *= parentScaleY;
  const parentScaleZ = 1 / parentScale[2];
  dst[2] *= parentScaleZ;
  dst[6] *= parentScaleZ;
  dst[10] *= parentScaleZ;
}
function calcJointMatrixFromTransform(dst, transform, loadFlags, jnt1, shapeInstanceState) {
  mat4_exports.fromQuat(dst, transform.rotation);
  setMatrixTranslation(dst, transform.translation);
  mat4_exports.scale(dst, dst, transform.scale);
  const matrixCalcFlag = loadFlags & 15 /* ScalingRule_Mask */;
  if (matrixCalcFlag === 2 /* ScalingRule_Maya */ && !!(jnt1.calcFlags & 1))
    calcJointMatrixMayaSSC(dst, shapeInstanceState.parentScale);
}
var scratchQuat2 = quat_exports.create();
function calcANK1JointAnimationTransform(dst, entry, animFrame, animFrame1) {
  dst.scale[0] = sampleAnimationData(entry.scaleX, animFrame);
  dst.scale[1] = sampleAnimationData(entry.scaleY, animFrame);
  dst.scale[2] = sampleAnimationData(entry.scaleZ, animFrame);
  const a0 = animFrame | 0;
  const r0x = sampleAnimationData(entry.rotationX, a0);
  const r0y = sampleAnimationData(entry.rotationY, a0);
  const r0z = sampleAnimationData(entry.rotationZ, a0);
  quatFromEulerRadians(dst.rotation, r0x, r0y, r0z);
  if (a0 !== animFrame) {
    const a1 = animFrame1 | 0;
    const r1x = sampleAnimationData(entry.rotationX, a1);
    const r1y = sampleAnimationData(entry.rotationY, a1);
    const r1z = sampleAnimationData(entry.rotationZ, a1);
    quatFromEulerRadians(scratchQuat2, r1x, r1y, r1z);
    quat_exports.slerp(dst.rotation, dst.rotation, scratchQuat2, animFrame - a0);
  }
  dst.translation[0] = sampleAnimationData(entry.translationX, animFrame);
  dst.translation[1] = sampleAnimationData(entry.translationY, animFrame);
  dst.translation[2] = sampleAnimationData(entry.translationZ, animFrame);
}
function calcANF1JointAnimationTransform(dst, entry, animFrame, animFrame1) {
  const a0 = animFrame | 0;
  dst.scale[0] = sampleANF1AnimationData(entry.scaleX, a0);
  dst.scale[1] = sampleANF1AnimationData(entry.scaleY, a0);
  dst.scale[2] = sampleANF1AnimationData(entry.scaleZ, a0);
  const r0x = sampleANF1AnimationData(entry.rotationX, a0);
  const r0y = sampleANF1AnimationData(entry.rotationY, a0);
  const r0z = sampleANF1AnimationData(entry.rotationZ, a0);
  quatFromEulerRadians(dst.rotation, r0x, r0y, r0z);
  if (a0 !== animFrame) {
    const a1 = animFrame1 | 0;
    const r1x = sampleANF1AnimationData(entry.rotationX, a1);
    const r1y = sampleANF1AnimationData(entry.rotationY, a1);
    const r1z = sampleANF1AnimationData(entry.rotationZ, a1);
    quatFromEulerRadians(scratchQuat2, r1x, r1y, r1z);
    quat_exports.slerp(dst.rotation, dst.rotation, scratchQuat2, animFrame - a0);
  }
  dst.translation[0] = sampleANF1AnimationData(entry.translationX, a0);
  dst.translation[1] = sampleANF1AnimationData(entry.translationY, a0);
  dst.translation[2] = sampleANF1AnimationData(entry.translationZ, a0);
}

// noclip/Common/JSYSTEM/J3D/J3DGraphBase.ts
var ShapeInstanceState2 = class {
  // One matrix for each joint, which transform into the parent joint's space.
  jointToParentMatrixArray = [];
  // One matrix for each joint, which transform into world space.
  jointToWorldMatrixArray = [];
  // Draw (DRW1 matrix definitions, incl. envelopes), which transform into view space.
  drawViewMatrixArray = [];
  // View-specific visibility for each of the matrices in drawToViewMatrices.
  // TODO(jstpierre): Currently true for all envelope matrices.
  drawViewMatrixVisibility = [];
  // The camera's view matrix.
  viewFromWorldMatrix = mat4_exports.create();
  // Used while calculating joint matrices.
  // public currentScale = vec3.create();
  parentScale = vec3_exports.create();
};
var ShapeData = class {
  constructor(device2, cache3, shape, coalescedBuffers) {
    this.shape = shape;
    assert(this.shape.loadedVertexLayout.indexFormat === GfxFormat.U16_R);
    const firstCoalescedBuffer = coalescedBuffers.shift();
    for (let i = 1; i < this.shape.mtxGroups.length; i++) {
      const coalescedBuffer = coalescedBuffers.shift();
      for (let i2 = 0; i2 < coalescedBuffer.vertexBuffers.length; i2++)
        firstCoalescedBuffer.vertexBuffers[i2].byteCount += coalescedBuffer.vertexBuffers[i2].byteCount;
    }
    this.inputLayout = createInputLayout(cache3, this.shape.loadedVertexLayout);
    this.vertexBufferDescriptors = firstCoalescedBuffer.vertexBuffers;
    this.indexBufferDescriptor = firstCoalescedBuffer.indexBuffer;
    let totalIndexCount = 0;
    for (let i = 0; i < this.shape.mtxGroups.length; i++) {
      const mtxGroup = this.shape.mtxGroups[i];
      assert(mtxGroup.loadedVertexData.draws.length === 1);
      const draw = mtxGroup.loadedVertexData.draws[0];
      draw.indexOffset = totalIndexCount;
      totalIndexCount += draw.indexCount;
      this.draws.push(draw);
    }
  }
  shape;
  inputLayout;
  vertexBufferDescriptors;
  indexBufferDescriptor;
  draws = [];
  sortKeyBias = 0;
  setOnRenderInst(renderInst, draw) {
    renderInst.setVertexInput(this.inputLayout, this.vertexBufferDescriptors, this.indexBufferDescriptor);
    renderInst.setDrawCount(draw.indexCount, draw.indexOffset);
  }
};
var MaterialData = class {
  constructor(material) {
    this.material = material;
  }
  material;
  fillMaterialParamsCallback = null;
};
var JointTreeNode = class {
  constructor(jointIndex = 0, children = []) {
    this.jointIndex = jointIndex;
    this.children = children;
  }
  jointIndex;
  children;
};
function prepareShapeMtxGroup(drawParams2, shapeInstanceState, shape, mtxGroup) {
  let instVisible = false;
  for (let i = 0; i < mtxGroup.useMtxTable.length; i++) {
    const matrixIndex = mtxGroup.useMtxTable[i];
    if (matrixIndex === 65535)
      continue;
    const drw = shapeInstanceState.drawViewMatrixArray[matrixIndex];
    const dst = drawParams2.u_PosMtx[i];
    if (shape.shapeMtxType === 1 /* BBoard */)
      calcBillboardMatrix(dst, drw, 1 /* UseRollGlobal */ | 0 /* PriorityZ */ | 0 /* UseZPlane */);
    else if (shape.shapeMtxType === 2 /* YBBoard */)
      calcBillboardMatrix(dst, drw, 1 /* UseRollGlobal */ | 2 /* PriorityY */ | 0 /* UseZPlane */);
    else
      mat4_exports.copy(dst, drw);
    if (shapeInstanceState.drawViewMatrixVisibility[matrixIndex])
      instVisible = true;
  }
  return instVisible;
}
var scratchModelViewMatrix = mat4_exports.create();
var drawParams = new DrawParams();
var ShapeInstance = class {
  constructor(shapeData) {
    this.shapeData = shapeData;
  }
  shapeData;
  visible = true;
  prepareToRender(renderInstManager, viewDepth, clipFromViewMatrix, materialInstance, modelData, materialInstanceState, shapeInstanceState) {
    if (!this.visible)
      return;
    const shape = this.shapeData.shape;
    const materialIndex = materialInstance.materialData.material.index;
    const materialJointIndex = modelData.materialJointIndices[materialIndex];
    const materialJointMatrix = shapeInstanceState.jointToWorldMatrixArray[materialJointIndex];
    drawParams.clear();
    const template = renderInstManager.pushTemplate();
    template.sortKey = materialInstance.sortKey;
    template.sortKey = setSortKeyDepth(template.sortKey, viewDepth);
    template.sortKey = setSortKeyBias(template.sortKey, this.shapeData.sortKeyBias);
    materialInstance.setOnRenderInst(renderInstManager.gfxRenderCache, template);
    const multi = shape.shapeMtxType === 3 /* Multi */;
    if (!multi)
      materialInstance.fillMaterialParams(template, materialInstanceState, clipFromViewMatrix, shapeInstanceState.viewFromWorldMatrix, materialJointMatrix, drawParams);
    for (let i = 0; i < shape.mtxGroups.length; i++) {
      if (!prepareShapeMtxGroup(drawParams, shapeInstanceState, shape, shape.mtxGroups[i]))
        continue;
      const renderInst = renderInstManager.newRenderInst();
      this.shapeData.setOnRenderInst(renderInst, this.shapeData.draws[i]);
      materialInstance.materialHelper.allocateDrawParamsDataOnInst(renderInst, drawParams);
      if (multi)
        materialInstance.fillMaterialParams(renderInst, materialInstanceState, clipFromViewMatrix, shapeInstanceState.viewFromWorldMatrix, materialJointMatrix, drawParams);
      renderInstManager.submitRenderInst(renderInst);
    }
    renderInstManager.popTemplate();
  }
};
var MaterialInstanceState = class {
  lights = nArray(8, () => new Light());
  textureMappings;
};
function J3DMtxProjConcat(dst, a, b) {
  const b00 = b[0], b10 = b[1], b20 = b[2], b30 = b[3], b01 = b[4], b11 = b[5], b21 = b[6], b31 = b[7], b02 = b[8], b12 = b[9], b22 = b[10], b32 = b[11], b03 = b[12], b13 = b[13], b23 = b[14], b33 = b[15];
  const a00 = a[0], a01 = a[4], a02 = a[8], a03 = a[12];
  dst[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
  dst[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
  dst[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
  dst[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;
  const a10 = a[1], a11 = a[5], a12 = a[9], a13 = a[13];
  dst[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
  dst[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
  dst[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
  dst[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;
  const a20 = a[2], a21 = a[6], a22 = a[10], a23 = a[14];
  dst[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
  dst[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
  dst[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
  dst[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;
}
function mat43Concat(dst, a, b) {
  const b00 = b[0], b10 = b[1], b20 = b[2], b01 = b[4], b11 = b[5], b21 = b[6], b02 = b[8], b12 = b[9], b22 = b[10], b03 = b[12], b13 = b[13], b23 = b[14];
  const a00 = a[0], a01 = a[4], a02 = a[8], a03 = a[12];
  dst[0] = a00 * b00 + a01 * b10 + a02 * b20;
  dst[4] = a00 * b01 + a01 * b11 + a02 * b21;
  dst[8] = a00 * b02 + a01 * b12 + a02 * b22;
  dst[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03;
  const a10 = a[1], a11 = a[5], a12 = a[9], a13 = a[13];
  dst[1] = a10 * b00 + a11 * b10 + a12 * b20;
  dst[5] = a10 * b01 + a11 * b11 + a12 * b21;
  dst[9] = a10 * b02 + a11 * b12 + a12 * b22;
  dst[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13;
  const a20 = a[2], a21 = a[6], a22 = a[10], a23 = a[14];
  dst[2] = a20 * b00 + a21 * b10 + a22 * b20;
  dst[6] = a20 * b01 + a21 * b11 + a22 * b21;
  dst[10] = a20 * b02 + a21 * b12 + a22 * b22;
  dst[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23;
}
function J3DGetTextureMtx(dst, srt) {
  mat4_exports.copy(dst, srt);
  dst[8] = dst[12];
  dst[9] = dst[13];
  dst[10] = 1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
}
var flipYMatrix = mat4_exports.create();
function mtxFlipY(dst, flipY) {
  if (flipY) {
    mat4_exports.set(
      flipYMatrix,
      1,
      0,
      0,
      0,
      0,
      -1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1
    );
    mat4_exports.mul(dst, flipYMatrix, dst);
  }
}
function buildEnvMtxOld(dst, flipYScale) {
  mat4_exports.set(
    dst,
    0.5,
    0,
    0,
    0,
    0,
    -0.5 * flipYScale,
    0,
    0,
    0,
    0,
    1,
    0,
    0.5,
    0.5,
    0,
    0
  );
}
function buildEnvMtx(dst, flipYScale) {
  mat4_exports.set(
    dst,
    0.5,
    0,
    0,
    0,
    0,
    -0.5 * flipYScale,
    0,
    0,
    0.5,
    0.5,
    1,
    0,
    0,
    0,
    0,
    0
  );
}
var materialParams2 = new MaterialParams();
var scratchMat4a = mat4_exports.create();
var scratchMat4b = mat4_exports.create();
var scratchMat4c = mat4_exports.create();
var MaterialInstance2 = class {
  constructor(materialData, shapeInstances, materialHacks) {
    this.shapeInstances = shapeInstances;
    this.setMaterialData(materialData, materialHacks);
  }
  shapeInstances;
  colorCalc = [];
  texMtxCalc = [];
  texNoCalc = [];
  effectMtx = null;
  name;
  materialData;
  materialHelper;
  visible = true;
  sortKey = 0;
  colorOverrides = nArray(12 /* COUNT */, () => null);
  fogBlock = new FogBlock();
  setMaterialData(materialData, materialHacks) {
    this.materialData = materialData;
    const material = this.materialData.material;
    this.materialHelper = new GXMaterialHelperGfx(material.gxMaterial, materialHacks);
    this.name = material.name;
    const layer = !material.gxMaterial.ropInfo.depthTest ? 0 /* BACKGROUND */ : material.translucent ? 128 /* TRANSLUCENT */ : 32 /* OPAQUE */;
    this.setSortKeyLayer(layer);
  }
  setMaterialHacks(materialHacks) {
    this.materialHelper.setMaterialHacks(materialHacks);
  }
  setColorOverride(i, color) {
    this.colorOverrides[i] = color;
  }
  setColorWriteEnabled(v) {
    setChanWriteEnabled(this.materialHelper, 7 /* RGB */, v);
  }
  setAlphaWriteEnabled(v) {
    setChanWriteEnabled(this.materialHelper, 8 /* Alpha */, v);
  }
  setSortKeyLayer(layer, transparent = this.materialData.material.translucent) {
    if (transparent)
      layer |= 128 /* TRANSLUCENT */;
    this.sortKey = setSortKeyLayer(this.sortKey, layer);
  }
  setOnRenderInst(cache3, renderInst) {
    this.materialHelper.setOnRenderInst(cache3, renderInst);
  }
  calcColor(dst, i, fallbackColor, colorRegType) {
    if (this.colorCalc[i]) {
      this.colorCalc[i].calcColor(dst);
    } else if (this.colorOverrides[i] !== null) {
      colorCopy(dst, this.colorOverrides[i]);
    } else {
      colorCopy(dst, fallbackColor);
    }
    if (colorRegType === 0 /* S10 */) {
      colorClamp(dst, dst, -1024 / 256, 1023 / 256);
    } else {
      colorClampLDR(dst, dst);
    }
  }
  calcTexMtxInput(dst, texMtx, modelViewMatrix, modelMatrix) {
    const matrixMode = texMtx.info & 63;
    switch (matrixMode) {
      case 1 /* EnvmapBasic */:
      case 6 /* EnvmapOld */:
      case 7 /* Envmap */:
        computeMatrixWithoutTranslation(dst, modelViewMatrix);
        break;
      case 2 /* ProjmapBasic */:
      case 8 /* Projmap */:
        mat4_exports.copy(dst, modelMatrix);
        break;
      case 3 /* ViewProjmapBasic */:
      case 9 /* ViewProjmap */:
        mat4_exports.copy(dst, modelViewMatrix);
        break;
      case 5 /* Unk0x05 */:
      case 10 /* EnvmapOldEffectMtx */:
      case 11 /* EnvmapEffectMtx */:
        computeMatrixWithoutTranslation(dst, modelMatrix);
        break;
      default:
        mat4_exports.identity(dst);
        break;
    }
  }
  calcPostTexMtxInput(dst, texMtx, viewMatrix) {
    const matrixMode = texMtx.info & 63;
    switch (matrixMode) {
      case 1 /* EnvmapBasic */:
      case 6 /* EnvmapOld */:
      case 7 /* Envmap */:
        mat4_exports.identity(dst);
        break;
      case 2 /* ProjmapBasic */:
      case 8 /* Projmap */:
        mat4_exports.invert(dst, viewMatrix);
        break;
      case 3 /* ViewProjmapBasic */:
      case 9 /* ViewProjmap */:
        mat4_exports.identity(dst);
        break;
      case 5 /* Unk0x05 */:
      case 10 /* EnvmapOldEffectMtx */:
      case 11 /* EnvmapEffectMtx */:
        mat4_exports.invert(dst, viewMatrix);
        computeMatrixWithoutTranslation(dst, dst);
        break;
      default:
        mat4_exports.identity(dst);
        break;
    }
  }
  calcTexSRT(dst, i) {
    const texMtx = this.materialData.material.texMatrices[i];
    const texMtxCalc = this.texMtxCalc[i];
    if (texMtxCalc) {
      texMtxCalc.calcTexMtx(dst);
    } else {
      mat4_exports.copy(dst, texMtx.matrix);
    }
  }
  calcTexMtx(dst, texMtx, texSRT, modelMatrix, clipFromViewMatrix, flipY) {
    const matrixMode = texMtx.info & 63;
    const flipYScale = flipY ? -1 : 1;
    const tmp1 = scratchMat4a;
    const tmp2 = scratchMat4b;
    switch (matrixMode) {
      case 1 /* EnvmapBasic */:
        mat43Concat(dst, texSRT, dst);
        break;
      case 2 /* ProjmapBasic */:
      case 3 /* ViewProjmapBasic */:
      case 5 /* Unk0x05 */:
        mtxFlipY(dst, flipY);
        J3DMtxProjConcat(tmp1, texSRT, texMtx.effectMatrix);
        mat43Concat(dst, tmp1, dst);
        break;
      case 4 /* Unk0x04 */:
        mtxFlipY(dst, flipY);
        J3DMtxProjConcat(dst, texSRT, texMtx.effectMatrix);
        break;
      case 6 /* EnvmapOld */:
        buildEnvMtxOld(tmp2, flipYScale);
        mat43Concat(tmp1, texSRT, tmp2);
        mat43Concat(dst, tmp1, dst);
        break;
      case 7 /* Envmap */:
        J3DGetTextureMtx(tmp1, texSRT);
        buildEnvMtx(tmp2, flipYScale);
        mat43Concat(tmp1, tmp1, tmp2);
        mat43Concat(dst, tmp1, dst);
        break;
      case 8 /* Projmap */:
      case 9 /* ViewProjmap */:
      case 11 /* EnvmapEffectMtx */:
        J3DGetTextureMtx(tmp2, texSRT);
        if (matrixMode === 9 /* ViewProjmap */) {
          texProjCameraSceneTex(tmp1, clipFromViewMatrix, flipYScale);
          J3DMtxProjConcat(tmp1, tmp2, tmp1);
        } else if (matrixMode === 8 /* Projmap */) {
          buildEnvMtx(tmp1, flipYScale);
          mat43Concat(tmp2, tmp2, tmp1);
          if (this.effectMtx !== null) {
            mat4_exports.mul(tmp1, this.effectMtx, tmp1);
          } else {
            mat4_exports.invert(tmp1, modelMatrix);
            mat4_exports.mul(tmp1, texMtx.effectMatrix, tmp1);
          }
          J3DMtxProjConcat(tmp1, tmp2, tmp1);
        } else {
          buildEnvMtx(tmp1, flipYScale);
          mat43Concat(tmp2, tmp2, tmp1);
          const effectMtx2 = this.effectMtx !== null ? this.effectMtx : texMtx.effectMatrix;
          J3DMtxProjConcat(tmp1, tmp2, effectMtx2);
        }
        mat43Concat(dst, tmp1, dst);
        break;
      case 10 /* EnvmapOldEffectMtx */:
        buildEnvMtxOld(tmp1, flipYScale);
        mat43Concat(tmp2, texSRT, tmp1);
        const effectMtx = this.effectMtx !== null ? this.effectMtx : texMtx.effectMatrix;
        J3DMtxProjConcat(tmp1, tmp2, effectMtx);
        mat43Concat(dst, tmp1, dst);
        break;
      case 0 /* None */:
        mat4_exports.copy(dst, texSRT);
        mtxFlipY(dst, flipY);
        break;
      default:
        throw new Error("whoops");
    }
  }
  fillOnMaterialParams(materialParams3, materialInstanceState, clipFromViewMatrix, viewFromWorldMatrix, modelMatrix, drawParams2) {
    const material = this.materialData.material;
    this.calcColor(materialParams3.u_Color[0 /* MAT0 */], 0 /* MAT0 */, material.colorMatRegs[0], 0 /* S10 */);
    this.calcColor(materialParams3.u_Color[1 /* MAT1 */], 1 /* MAT1 */, material.colorMatRegs[1], 0 /* S10 */);
    this.calcColor(materialParams3.u_Color[2 /* AMB0 */], 2 /* AMB0 */, material.colorAmbRegs[0], 0 /* S10 */);
    this.calcColor(materialParams3.u_Color[3 /* AMB1 */], 3 /* AMB1 */, material.colorAmbRegs[1], 0 /* S10 */);
    this.calcColor(materialParams3.u_Color[4 /* K0 */], 4 /* K0 */, material.colorConstants[0], 1 /* U8 */);
    this.calcColor(materialParams3.u_Color[5 /* K1 */], 5 /* K1 */, material.colorConstants[1], 1 /* U8 */);
    this.calcColor(materialParams3.u_Color[6 /* K2 */], 6 /* K2 */, material.colorConstants[2], 1 /* U8 */);
    this.calcColor(materialParams3.u_Color[7 /* K3 */], 7 /* K3 */, material.colorConstants[3], 1 /* U8 */);
    this.calcColor(materialParams3.u_Color[9 /* C0 */], 9 /* C0 */, material.colorRegisters[0], 0 /* S10 */);
    this.calcColor(materialParams3.u_Color[10 /* C1 */], 10 /* C1 */, material.colorRegisters[1], 0 /* S10 */);
    this.calcColor(materialParams3.u_Color[11 /* C2 */], 11 /* C2 */, material.colorRegisters[2], 0 /* S10 */);
    colorCopy(materialParams3.u_Color[8 /* CPREV */], White);
    for (let i = 0; i < material.textureIndexes.length; i++) {
      const m = materialParams3.m_TextureMapping[i];
      m.reset();
      let samplerIndex;
      const animator = this.texNoCalc[i];
      if (animator)
        samplerIndex = animator.calcTextureIndex();
      else
        samplerIndex = material.textureIndexes[i];
      if (samplerIndex >= 0)
        m.copy(materialInstanceState.textureMappings[samplerIndex]);
    }
    mat4_exports.mul(scratchModelViewMatrix, viewFromWorldMatrix, modelMatrix);
    for (let i = 0; i < material.texMatrices.length; i++) {
      const texMtx = material.texMatrices[i];
      if (texMtx === null)
        continue;
      const dst = materialParams3.u_TexMtx[i];
      const flipY = materialParams3.m_TextureMapping[i].flipY;
      this.calcTexMtxInput(dst, texMtx, scratchModelViewMatrix, modelMatrix);
      const texSRT = scratchMat4c;
      this.calcTexSRT(texSRT, i);
      this.calcTexMtx(dst, texMtx, texSRT, modelMatrix, clipFromViewMatrix, flipY);
    }
    for (let i = 0; i < material.indTexMatrices.length; i++) {
      const indTexMtx = material.indTexMatrices[i];
      if (indTexMtx === null)
        continue;
      fillIndTexMtx(materialParams3.u_IndTexMtx[i], indTexMtx);
    }
    for (let i = 0; i < materialInstanceState.lights.length; i++)
      materialParams3.u_Lights[i].copy(materialInstanceState.lights[i]);
    materialParams3.u_FogBlock.copy(this.fogBlock);
    if (this.materialData.fillMaterialParamsCallback !== null)
      this.materialData.fillMaterialParamsCallback(materialParams3, this, clipFromViewMatrix, viewFromWorldMatrix, modelMatrix, drawParams2);
  }
  fillMaterialParams(renderInst, materialInstanceState, clipFromViewMatrix, viewFromWorldMatrix, modelMatrix, drawParams2) {
    this.fillOnMaterialParams(materialParams2, materialInstanceState, clipFromViewMatrix, viewFromWorldMatrix, modelMatrix, drawParams2);
    this.materialHelper.allocateMaterialParamsDataOnInst(renderInst, materialParams2);
    renderInst.setSamplerBindingsFromTextureMappings(materialParams2.m_TextureMapping);
  }
  prepareToRenderShapes(renderInstManager, viewDepth, clipFromViewMatrix, modelData, materialInstanceState, shapeInstanceState) {
    if (!this.visible)
      return;
    for (let i = 0; i < this.shapeInstances.length; i++)
      this.shapeInstances[i].prepareToRender(renderInstManager, viewDepth, clipFromViewMatrix, this, modelData, materialInstanceState, shapeInstanceState);
  }
};
var TEX1Data = class {
  constructor(device2, cache3, tex1) {
    this.tex1 = tex1;
    for (let i = 0; i < this.tex1.samplers.length; i++) {
      const tex1Sampler = this.tex1.samplers[i];
      this.gfxSamplers.push(translateSampler(device2, cache3, tex1Sampler));
    }
    for (let i = 0; i < this.tex1.textureDatas.length; i++) {
      const textureData = this.tex1.textureDatas[i];
      if (textureData.data === null) {
        this.gfxTextures.push(null);
        this.viewerTextures.push(null);
      } else {
        const mipChain = calcMipChain(textureData, textureData.mipCount);
        const { viewerTexture, gfxTexture } = loadTextureFromMipChain(device2, mipChain);
        this.gfxTextures.push(gfxTexture);
        this.viewerTextures.push(viewerTexture);
      }
    }
  }
  tex1;
  realized = true;
  gfxSamplers = [];
  gfxTextures = [];
  viewerTextures = [];
  fillTextureMappingFromIndex(m, samplerIndex) {
    const sampler = this.tex1.samplers[samplerIndex];
    if (this.gfxTextures[sampler.textureDataIndex] === null) {
      return false;
    }
    const textureData = this.tex1.textureDatas[sampler.textureDataIndex];
    m.gfxTexture = this.gfxTextures[sampler.textureDataIndex];
    m.gfxSampler = this.gfxSamplers[sampler.index];
    m.lodBias = sampler.lodBias;
    m.width = textureData.width;
    m.height = textureData.height;
    return true;
  }
  destroy(device2) {
    if (!this.realized)
      return;
    for (let i = 0; i < this.gfxTextures.length; i++)
      if (this.gfxTextures[i] !== null)
        device2.destroyTexture(this.gfxTextures[i]);
    this.realized = false;
  }
};
var J3DModelMaterialData = class {
  materialData = null;
  tex1Data = null;
  constructor(device2, cache3, materialRes) {
    const mat3 = materialRes.mat3, tex1 = materialRes.tex1;
    if (mat3 !== null) {
      this.materialData = [];
      for (let i = 0; i < mat3.materialEntries.length; i++)
        this.materialData.push(new MaterialData(mat3.materialEntries[i]));
    }
    if (tex1 !== null)
      this.tex1Data = new TEX1Data(device2, cache3, tex1);
  }
  createDefaultTextureMappings() {
    const tex1Data = assertExists(this.tex1Data);
    const textureMappings = nArray(tex1Data.tex1.samplers.length, () => new GXTextureMapping());
    for (let i = 0; i < tex1Data.tex1.samplers.length; i++)
      tex1Data.fillTextureMappingFromIndex(textureMappings[i], i);
    return textureMappings;
  }
  destroy(device2) {
    if (this.tex1Data !== null)
      this.tex1Data.destroy(device2);
  }
};
var J3DModelData2 = class {
  constructor(device2, cache3, bmd, name = "") {
    this.bmd = bmd;
    const loadedVertexDatas = [];
    for (let i = 0; i < bmd.shp1.shapes.length; i++)
      for (let j = 0; j < bmd.shp1.shapes[i].mtxGroups.length; j++)
        loadedVertexDatas.push(bmd.shp1.shapes[i].mtxGroups[j].loadedVertexData);
    this.bufferCoalescer = loadedDataCoalescerComboGfx(device2, loadedVertexDatas, name);
    for (let i = 0; i < bmd.shp1.shapes.length; i++) {
      const shp1 = bmd.shp1.shapes[i];
      this.bbox.union(this.bbox, shp1.bbox);
      if (shp1.shapeMtxType === 1 /* BBoard */ || shp1.shapeMtxType === 2 /* YBBoard */)
        this.hasBillboard = true;
      this.shapeData.push(new ShapeData(device2, cache3, shp1, this.bufferCoalescer.coalescedBuffers));
    }
    this.modelMaterialData = new J3DModelMaterialData(device2, cache3, bmd);
    this.loadHierarchy(bmd.inf1);
    this.realized = true;
  }
  bmd;
  realized = false;
  bufferCoalescer;
  modelMaterialData;
  shapeData = [];
  rootJointTreeNode;
  // Reference joint indices for all materials.
  materialJointIndices = [];
  hasBillboard = false;
  bbox = new AABB();
  loadHierarchy(inf1) {
    let offs = 0;
    const view = inf1.hierarchyData.createDataView();
    let translucentDrawIndex = 0;
    this.rootJointTreeNode = new JointTreeNode(-1);
    let jointStack = [this.rootJointTreeNode];
    let lastJoint = jointStack[0];
    while (true) {
      const type = view.getUint16(offs + 0);
      const value = view.getUint16(offs + 2);
      if (type === 0 /* End */) {
        break;
      } else if (type === 1 /* Open */) {
        jointStack.unshift(lastJoint);
      } else if (type === 2 /* Close */) {
        jointStack.shift();
      } else if (type === 16 /* Joint */) {
        const jointIndex = value, parentJointTreeNode = jointStack[0];
        assert(jointIndex > parentJointTreeNode.jointIndex);
        const jointTreeNode = new JointTreeNode(jointIndex);
        parentJointTreeNode.children.push(jointTreeNode);
        lastJoint = jointTreeNode;
      } else if (type === 17 /* Material */) {
        assert(this.materialJointIndices[value] === void 0);
        this.materialJointIndices[value] = jointStack[0].jointIndex;
      } else if (type === 18 /* Shape */) {
        const shapeData = this.shapeData[value];
        if (this.modelMaterialData.materialData[shapeData.shape.materialIndex].material.translucent)
          shapeData.sortKeyBias = --translucentDrawIndex;
      }
      offs += 4;
    }
    assert(jointStack.length === 1);
  }
  destroy(device2) {
    if (!this.realized)
      return;
    this.bufferCoalescer.destroy(device2);
    this.modelMaterialData.tex1Data.destroy(device2);
    this.realized = false;
  }
};
var JointMatrixCalcNoAnm = class {
  calcJointMatrix(dst, modelData, i, shapeInstanceState) {
    const jnt1 = modelData.bmd.jnt1.joints[i];
    const transform = jnt1.transform;
    const loadFlags = modelData.bmd.inf1.loadFlags;
    calcJointMatrixFromTransform(dst, transform, loadFlags, jnt1, shapeInstanceState);
  }
};
var bboxScratch = new AABB();
var J3DModelInstance2 = class {
  constructor(modelData, materialHacks) {
    this.modelData = modelData;
    assert(this.modelData.realized);
    this.shapeInstances = this.modelData.shapeData.map((shapeData) => {
      return new ShapeInstance(shapeData);
    });
    this.modelMaterialData = this.modelData.modelMaterialData;
    this.materialInstances = this.modelMaterialData.materialData.map((materialData, i) => {
      const shapeInstances = this.shapeInstances.filter((shapeInstance) => shapeInstance.shapeData.shape.materialIndex === i);
      return new MaterialInstance2(materialData, shapeInstances, materialHacks);
    });
    this.tex1Data = this.modelMaterialData.tex1Data;
    this.materialInstanceState.textureMappings = this.modelMaterialData.createDefaultTextureMappings();
    const bmd = this.modelData.bmd;
    const numJoints = bmd.jnt1.joints.length;
    this.shapeInstanceState.jointToParentMatrixArray = nArray(numJoints, () => mat4_exports.create());
    this.shapeInstanceState.jointToWorldMatrixArray = nArray(numJoints, () => mat4_exports.create());
    this.jointVisibility = nArray(numJoints, () => true);
    this.jointMatrixCalc = new JointMatrixCalcNoAnm();
    this.calcAnim();
    let hasEVP1DoubleCountBug = true;
    if (bmd.subversion === "SuperBMD - Gamma")
      hasEVP1DoubleCountBug = false;
    let drawViewMatrixCount = bmd.drw1.matrixDefinitions.length;
    if (hasEVP1DoubleCountBug)
      drawViewMatrixCount -= bmd.evp1.envelopes.length;
    this.shapeInstanceState.drawViewMatrixArray = nArray(drawViewMatrixCount, () => mat4_exports.create());
    this.shapeInstanceState.drawViewMatrixVisibility = nArray(drawViewMatrixCount, () => true);
  }
  modelData;
  name = "";
  visible = true;
  modelMatrix = mat4_exports.create();
  baseScale = vec3_exports.fromValues(1, 1, 1);
  jointMatrixCalc;
  jointMatrixCalcCallback = null;
  materialInstanceState = new MaterialInstanceState();
  shapeInstances = [];
  materialInstances = [];
  shapeInstanceState = new ShapeInstanceState2();
  modelMaterialData;
  tex1Data;
  jointVisibility;
  destroy(device2) {
    this.modelData.destroy(device2);
    this.tex1Data.destroy(device2);
  }
  setVisible(v) {
    this.visible = v;
  }
  setBaseScale(v) {
    vec3_exports.copy(this.baseScale, v);
  }
  setModelMaterialData(modelMaterialData) {
    this.modelMaterialData = modelMaterialData;
    if (modelMaterialData.materialData !== null) {
      assert(modelMaterialData.materialData.length >= this.materialInstances.length);
      for (let i = 0; i < this.materialInstances.length; i++)
        this.materialInstances[i].setMaterialData(modelMaterialData.materialData[i]);
    }
    if (modelMaterialData.tex1Data !== null)
      this.materialInstanceState.textureMappings = this.modelMaterialData.createDefaultTextureMappings();
  }
  setMaterialHacks(materialHacks) {
    for (let i = 0; i < this.materialInstances.length; i++)
      this.materialInstances[i].setMaterialHacks(materialHacks);
  }
  setSortKeyLayer(layer, transparent) {
    for (let i = 0; i < this.materialInstances.length; i++)
      this.materialInstances[i].setSortKeyLayer(layer, transparent);
  }
  /**
   * Render Hack. Sets whether vertex colors are enabled. If vertex colors are disabled,
   * then opaque white is substituted for them in the shader generated for every material.
   *
   * By default, vertex colors are enabled.
   */
  setVertexColorsEnabled(v) {
    for (let i = 0; i < this.materialInstances.length; i++)
      this.materialInstances[i].setMaterialHacks({ disableVertexColors: !v });
  }
  /**
   * Render Hack. Sets whether texture samples are enabled. If texture samples are disabled,
   * then opaque white is substituted for them in the shader generated for every material.
   *
   * By default, textures are enabled.
   */
  setTexturesEnabled(v) {
    for (let i = 0; i < this.materialInstances.length; i++)
      this.materialInstances[i].setMaterialHacks({ disableTextures: !v });
  }
  /**
   * Render Hack. Sets whether lighting is enabled. If lighting is disabled, then it is treated
   * like all light channels have lighting disabled -- meaning they become equivalent to the material
   * color.
   *
   * By default, lighting is enabled.
   */
  setLightingEnabled(v) {
    for (let i = 0; i < this.materialInstances.length; i++)
      this.materialInstances[i].setMaterialHacks({ disableLighting: !v });
  }
  /**
   * Returns the {@link GXTextureMapping} for the given sampler referenced by the name
   * {@param samplerName}. Manipulating this mapping will affect the texture's usage
   * across all materials. You can use this to bind missing or extra "system" textures,
   * to set up texture overrides for framebuffer-referencing effects, and more.
   *
   * This object is not a copy; setting parameters on this object will directly affect
   * the render for the next frame.
   */
  getTextureMappingReference(samplerName) {
    const samplers = this.tex1Data.tex1.samplers;
    for (let i = 0; i < samplers.length; i++)
      if (samplers[i].name === samplerName)
        return this.materialInstanceState.textureMappings[i];
    return null;
  }
  /**
   * Sets whether a certain material with name {@param materialName} should be shown ({@param v} is
   * {@constant true}), or hidden ({@param v} is {@constant false}). All materials are shown
   * by default.
   */
  setMaterialVisible(materialName, v) {
    const materialInstance = assertExists(this.materialInstances.find((matInst) => matInst.name === materialName));
    materialInstance.visible = v;
  }
  /**
   * Sets whether color write is enabled. This is equivalent to the native GX function
   * GXSetColorUpdate. There is no MAT3 material flag for this, so some games have special
   * engine hooks to enable and disable color write at runtime.
   */
  setMaterialColorWriteEnabled(materialName, colorWrite) {
    const materialInstance = assertExists(this.materialInstances.find((matInst) => matInst.name === materialName));
    materialInstance.setColorWriteEnabled(colorWrite);
  }
  /**
   * Sets a color override for a specific color. The MAT3 has defaults for every color,
   * but engines can override colors on a model with their own colors if wanted. Color
   * overrides also take precedence over any bound color animations.
   *
   * Choose which color "slot" to override with {@param colorKind}.
   *
   * It is currently not possible to specify a color override per-material.
   *
   * To unset a color override, pass {@constant null} as for {@param color}.
   */
  setColorOverride(colorKind, color) {
    for (let i = 0; i < this.materialInstances.length; i++)
      this.materialInstances[i].setColorOverride(colorKind, color);
  }
  /**
   * Sets the shape at index {@param shapeIndex} to be either visible or invisible depending
   * on the value of {@param v}. Note that this modifies the same internal visibility structure
   * as VAF1 animation, and that will be calculated in {@method calcAnim} or {@method prepareToRender}
   * if a VAF1 animation is bound, so this might have no effect in that case.
   */
  setShapeVisible(shapeIndex, v) {
    this.shapeInstances[shapeIndex].visible = v;
  }
  /**
   * Returns the {@link GX_Material.Light} at index {@param i} as used by this model instance.
   *
   * This object is not a copy; setting parameters on this object will directly affect
   * the render for the next frame.
   */
  getGXLightReference(i) {
    return this.materialInstanceState.lights[i];
  }
  isAnyShapeVisible() {
    for (let i = 0; i < this.shapeInstanceState.drawViewMatrixVisibility.length; i++)
      if (this.shapeInstanceState.drawViewMatrixVisibility[i])
        return true;
    return false;
  }
  computeDepth() {
    const worldFromViewMatrix = this.shapeInstanceState.viewFromWorldMatrix;
    const rootJoint = this.modelData.bmd.jnt1.joints[0];
    bboxScratch.transform(rootJoint.bbox, this.modelMatrix);
    const depth = Math.max(computeViewSpaceDepthFromWorldSpaceAABB(worldFromViewMatrix, bboxScratch), 0);
    return depth;
  }
  calcView(viewMatrix, cullFrustum) {
    const disableCulling = this.modelData.hasBillboard;
    mat4_exports.copy(this.shapeInstanceState.viewFromWorldMatrix, viewMatrix);
    const jnt1 = this.modelData.bmd.jnt1;
    for (let i = 0; i < this.modelData.bmd.jnt1.joints.length; i++) {
      const jointToWorldMatrix = this.shapeInstanceState.jointToWorldMatrixArray[i];
      if (cullFrustum === null || disableCulling || jnt1.joints[i].bbox.isEmpty()) {
        this.jointVisibility[i] = true;
      } else {
        bboxScratch.transform(jnt1.joints[i].bbox, jointToWorldMatrix);
        this.jointVisibility[i] = cullFrustum.contains(bboxScratch);
      }
    }
    this.calcDrawMatrixArray(this.shapeInstanceState.viewFromWorldMatrix);
  }
  draw(renderInstManager, clipFromViewMatrix, translucent) {
    if (!this.isAnyShapeVisible())
      return;
    const viewDepth = translucent ? this.computeDepth() : -1;
    for (let i = 0; i < this.materialInstances.length; i++) {
      const materialInstance = this.materialInstances[i];
      if (materialInstance.materialData.material.translucent !== translucent)
        continue;
      materialInstance.prepareToRenderShapes(renderInstManager, viewDepth, clipFromViewMatrix, this.modelData, this.materialInstanceState, this.shapeInstanceState);
    }
  }
  drawOpa(renderInstManager, clipFromViewMatrix) {
    this.draw(renderInstManager, clipFromViewMatrix, false);
  }
  drawXlu(renderInstManager, clipFromViewMatrix) {
    this.draw(renderInstManager, clipFromViewMatrix, true);
  }
  calcJointAnimRecurse(node, parentNode) {
    const shapeInstanceState = this.shapeInstanceState;
    if (parentNode !== null) {
      const jointIndex = node.jointIndex;
      assert(jointIndex >= 0);
      const dstToParent = shapeInstanceState.jointToParentMatrixArray[jointIndex];
      this.jointMatrixCalc.calcJointMatrix(dstToParent, this.modelData, jointIndex, shapeInstanceState);
      const dstToWorld = shapeInstanceState.jointToWorldMatrixArray[jointIndex];
      const parentJointIndex = parentNode.jointIndex;
      let parentJointToWorldMatrix;
      if (parentJointIndex < 0) {
        computeModelMatrixS(scratchMat4a, this.baseScale[0], this.baseScale[1], this.baseScale[2]);
        mat4_exports.mul(scratchMat4a, this.modelMatrix, scratchMat4a);
        parentJointToWorldMatrix = scratchMat4a;
      } else {
        parentJointToWorldMatrix = shapeInstanceState.jointToWorldMatrixArray[parentJointIndex];
      }
      if (this.jointMatrixCalcCallback !== null)
        this.jointMatrixCalcCallback(dstToParent, this.modelData, jointIndex, parentJointToWorldMatrix);
      mat4_exports.mul(dstToWorld, parentJointToWorldMatrix, dstToParent);
    }
    const parentScaleX = shapeInstanceState.parentScale[0];
    const parentScaleY = shapeInstanceState.parentScale[1];
    const parentScaleZ = shapeInstanceState.parentScale[2];
    for (let i = 0; i < node.children.length; i++) {
      shapeInstanceState.parentScale[0] = parentScaleX;
      shapeInstanceState.parentScale[1] = parentScaleY;
      shapeInstanceState.parentScale[2] = parentScaleZ;
      this.calcJointAnimRecurse(node.children[i], node);
    }
  }
  calcAnim() {
    vec3_exports.set(this.shapeInstanceState.parentScale, 1, 1, 1);
    this.calcJointAnimRecurse(this.modelData.rootJointTreeNode, null);
  }
  calcDrawMatrixArray(worldToViewMatrix) {
    const drw1 = this.modelData.bmd.drw1;
    const evp1 = this.modelData.bmd.evp1;
    for (let i = 0; i < this.shapeInstanceState.drawViewMatrixArray.length; i++) {
      const matrixDefinition = drw1.matrixDefinitions[i];
      const dst = this.shapeInstanceState.drawViewMatrixArray[i];
      if (matrixDefinition.kind === 0 /* Joint */) {
        const matrixVisible = this.jointVisibility[matrixDefinition.jointIndex];
        this.shapeInstanceState.drawViewMatrixVisibility[i] = matrixVisible;
        mat4_exports.mul(dst, worldToViewMatrix, this.shapeInstanceState.jointToWorldMatrixArray[matrixDefinition.jointIndex]);
      } else if (matrixDefinition.kind === 1 /* Envelope */) {
        dst.fill(0);
        const envelope = evp1.envelopes[matrixDefinition.envelopeIndex];
        let matrixVisible = false;
        for (let i2 = 0; i2 < envelope.weightedBones.length; i2++) {
          const weightedBone = envelope.weightedBones[i2];
          if (this.jointVisibility[weightedBone.jointIndex]) {
            matrixVisible = true;
            break;
          }
        }
        this.shapeInstanceState.drawViewMatrixVisibility[i] = matrixVisible;
        for (let i2 = 0; i2 < envelope.weightedBones.length; i2++) {
          const weightedBone = envelope.weightedBones[i2];
          const inverseBindPose = evp1.inverseBinds[weightedBone.jointIndex];
          mat4_exports.mul(scratchMat4a, this.shapeInstanceState.jointToWorldMatrixArray[weightedBone.jointIndex], inverseBindPose);
          mat4_exports.multiplyScalarAndAdd(dst, dst, scratchMat4a, weightedBone.weight);
        }
        mat4_exports.mul(dst, worldToViewMatrix, dst);
      }
    }
  }
};

// noclip/AnimationController.ts
var AnimationController = class {
  constructor(fps2 = 30) {
    this.fps = fps2;
  }
  fps;
  timeInFrames = 0;
  phaseFrames = 0;
  getTimeInFrames() {
    return this.timeInFrames + this.phaseFrames;
  }
  getTimeInSeconds() {
    return this.getTimeInFrames() / this.fps;
  }
  setTimeInMilliseconds(ms) {
    this.setTimeInFrames(getTimeInFrames(ms, this.fps));
  }
  setTimeInFrames(newTime) {
    this.timeInFrames = newTime;
  }
  setTimeFromViewerInput(viewerInput2) {
    this.setTimeInMilliseconds(viewerInput2.time);
  }
  quantizeTimeToFPS() {
    this.timeInFrames = this.timeInFrames | 0;
  }
  setPhaseInMilliseconds(ms) {
    this.phaseFrames = getTimeInFrames(ms, this.fps);
  }
  setPhaseToCurrent() {
    this.phaseFrames = -this.timeInFrames;
  }
};
function getTimeInFrames(milliseconds, fps2) {
  const fpsRate = fps2 / 1e3;
  return milliseconds * fpsRate;
}

// noclip/Common/JSYSTEM/J3D/J3DGraphSimple.ts
init_util();
init_esm();
init_gx_render();
function applyLoopMode(t2, loopMode) {
  switch (loopMode) {
    case 0 /* Once */:
      return Math.min(t2, 1);
    case 1 /* OnceAndReset */:
      return Math.min(t2, 1) % 1;
    case 2 /* Repeat */:
      return t2 % 1;
    case 3 /* MirroredOnce */:
      return 1 - Math.abs(Math.min(t2, 2) - 1);
    case 4 /* MirroredRepeat */:
      return 1 - Math.abs(t2 % 2 - 1);
  }
}
function getAnimFrame(anim, frame2, loopMode = anim.loopMode) {
  const lastFrame2 = anim.duration;
  const normTime = frame2 / lastFrame2;
  const animFrame = applyLoopMode(normTime, loopMode) * lastFrame2;
  return animFrame;
}
var scratchTransform2 = new JointTransformInfo();
var JointMatrixCalcANK1 = class {
  constructor(animationController, ank1) {
    this.animationController = animationController;
    this.ank1 = ank1;
  }
  animationController;
  ank1;
  calcJointMatrix(dst, modelData, i, shapeInstanceState) {
    const entry = this.ank1.jointAnimationEntries[i];
    const jnt1 = modelData.bmd.jnt1.joints[i];
    let transform;
    if (entry !== void 0) {
      const frame2 = this.animationController.getTimeInFrames();
      const animFrame = getAnimFrame(this.ank1, frame2);
      const animFrame1 = getAnimFrame(this.ank1, frame2 + 1);
      calcANK1JointAnimationTransform(scratchTransform2, entry, animFrame, animFrame1);
      transform = scratchTransform2;
    } else {
      transform = jnt1.transform;
    }
    const loadFlags = modelData.bmd.inf1.loadFlags;
    calcJointMatrixFromTransform(dst, transform, loadFlags, jnt1, shapeInstanceState);
    vec3_exports.copy(shapeInstanceState.parentScale, transform.scale);
  }
};
var JointMatrixCalcANF1 = class {
  constructor(animationController, anf1) {
    this.animationController = animationController;
    this.anf1 = anf1;
  }
  animationController;
  anf1;
  calcJointMatrix(dst, modelData, i, shapeInstanceState) {
    const entry = this.anf1.jointAnimationEntries[i];
    const jnt1 = modelData.bmd.jnt1.joints[i];
    let transform;
    if (entry !== void 0) {
      const frame2 = this.animationController.getTimeInFrames();
      const animFrame = getAnimFrame(this.anf1, frame2);
      const animFrame1 = getAnimFrame(this.anf1, frame2 + 1);
      calcANF1JointAnimationTransform(scratchTransform2, entry, animFrame, animFrame1);
      transform = scratchTransform2;
    } else {
      transform = jnt1.transform;
    }
    const loadFlags = modelData.bmd.inf1.loadFlags;
    calcJointMatrixFromTransform(dst, transform, loadFlags, jnt1, shapeInstanceState);
    vec3_exports.copy(shapeInstanceState.parentScale, transform.scale);
  }
};
var TRK1Animator = class {
  constructor(animationController, trk1, animationEntry) {
    this.animationController = animationController;
    this.trk1 = trk1;
    this.animationEntry = animationEntry;
  }
  animationController;
  trk1;
  animationEntry;
  calcColor(dst) {
    const frame2 = this.animationController.getTimeInFrames();
    const animFrame = getAnimFrame(this.trk1, frame2);
    dst.r = sampleAnimationData(this.animationEntry.r, animFrame);
    dst.g = sampleAnimationData(this.animationEntry.g, animFrame);
    dst.b = sampleAnimationData(this.animationEntry.b, animFrame);
    dst.a = sampleAnimationData(this.animationEntry.a, animFrame);
  }
};
function bindTRK1Animator(animationController, trk1, materialName, colorKind) {
  const animationEntry = trk1.animationEntries.find((entry) => entry.materialName === materialName && entry.colorKind === colorKind);
  if (animationEntry === void 0)
    return null;
  return new TRK1Animator(animationController, trk1, animationEntry);
}
var TTK1Animator = class {
  constructor(animationController, ttk1, animationEntry) {
    this.animationController = animationController;
    this.ttk1 = ttk1;
    this.animationEntry = animationEntry;
  }
  animationController;
  ttk1;
  animationEntry;
  calcTexMtx(dst) {
    const frame2 = this.animationController.getTimeInFrames();
    const animFrame = getAnimFrame(this.ttk1, frame2);
    const scaleS = sampleAnimationData(this.animationEntry.scaleS, animFrame);
    const scaleT = sampleAnimationData(this.animationEntry.scaleT, animFrame);
    const rotation = sampleAnimationData(this.animationEntry.rotationQ, animFrame);
    const translationS = sampleAnimationData(this.animationEntry.translationS, animFrame);
    const translationT = sampleAnimationData(this.animationEntry.translationT, animFrame);
    if (this.ttk1.isMaya) {
      calcTexMtx_Maya(dst, scaleS, scaleT, rotation, translationS, translationT);
    } else {
      const centerS = this.animationEntry.centerS;
      const centerT = this.animationEntry.centerT;
      calcTexMtx_Basic(dst, scaleS, scaleT, rotation, translationS, translationT, centerS, centerT);
    }
  }
};
function bindTTK1Animator(animationController, ttk1, materialName, texGenIndex) {
  const animationEntry = ttk1.uvAnimationEntries.find((entry) => entry.materialName === materialName && entry.texGenIndex === texGenIndex);
  if (animationEntry === void 0)
    return null;
  return new TTK1Animator(animationController, ttk1, animationEntry);
}
var TPT1Animator = class {
  constructor(animationController, tpt1, animationEntry) {
    this.animationController = animationController;
    this.tpt1 = tpt1;
    this.animationEntry = animationEntry;
  }
  animationController;
  tpt1;
  animationEntry;
  calcTextureIndex() {
    const frame2 = this.animationController.getTimeInFrames();
    const animFrame = getAnimFrame(this.tpt1, frame2);
    return this.animationEntry.textureIndices[animFrame | 0];
  }
};
function bindTPT1Animator(animationController, tpt1, materialName, texMap) {
  const animationEntry = tpt1.animationEntries.find((entry) => entry.materialName === materialName && entry.texMapIndex === texMap);
  if (animationEntry === void 0)
    return null;
  return new TPT1Animator(animationController, tpt1, animationEntry);
}
function bindTRK1MaterialInstance(materialInstance, animationController, trk1) {
  for (let i = 0; i < 12 /* COUNT */; i++) {
    if (trk1 !== null) {
      const trk1Animator = bindTRK1Animator(animationController, trk1, materialInstance.name, i);
      if (trk1Animator !== null)
        materialInstance.colorCalc[i] = trk1Animator;
    } else {
      materialInstance.colorCalc[i] = null;
    }
  }
}
function bindTTK1MaterialInstance(materialInstance, animationController, ttk1) {
  for (let i = 0; i < 8; i++) {
    const ttk1Animator = ttk1 !== null ? bindTTK1Animator(animationController, ttk1, materialInstance.name, i) : null;
    materialInstance.texMtxCalc[i] = ttk1Animator;
  }
}
function bindTPT1MaterialInstance(materialInstance, animationController, tpt1) {
  for (let i = 0; i < 8; i++) {
    const tpt1Animator = tpt1 !== null ? bindTPT1Animator(animationController, tpt1, materialInstance.name, i) : null;
    materialInstance.texNoCalc[i] = tpt1Animator;
  }
}
var J3DModelInstanceSimple = class extends J3DModelInstance2 {
  animationController = new AnimationController();
  passMask = 1;
  ownedModelMaterialData = null;
  isSkybox = false;
  setModelMaterialDataOwned(modelMaterialData) {
    this.setModelMaterialData(modelMaterialData);
    assert(this.ownedModelMaterialData === null);
    this.ownedModelMaterialData = modelMaterialData;
  }
  /**
   * Binds {@param ttk1} (texture animations) to this model instance.
   * TTK1 objects can be parsed from {@link BTK} files. See {@link BTK.parse}.
   *
   * @param animationController An {@link AnimationController} to control the progress of this animation to.
   * By default, this will default to this instance's own {@member animationController}.
   */
  bindTTK1(ttk1, animationController = this.animationController) {
    for (let i = 0; i < this.materialInstances.length; i++)
      bindTTK1MaterialInstance(this.materialInstances[i], animationController, ttk1);
  }
  /**
   * Binds {@param trk1} (color register animations) to this model instance.
   * TRK1 objects can be parsed from {@link BRK} files. See {@link BRK.parse}.
   *
   * @param animationController An {@link AnimationController} to control the progress of this animation to.
   * By default, this will default to this instance's own {@member animationController}.
   */
  bindTRK1(trk1, animationController = this.animationController) {
    for (let i = 0; i < this.materialInstances.length; i++)
      bindTRK1MaterialInstance(this.materialInstances[i], animationController, trk1);
  }
  /**
   * Binds {@param tpt1} (texture palette animations) to this model instance.
   * TPT1 objects can be parsed from {@link BTP} files. See {@link BTP.parse}.
   *
   * @param animationController An {@link AnimationController} to control the progress of this animation to.
   * By default, this will default to this instance's own {@member animationController}.
   */
  bindTPT1(tpt1, animationController = this.animationController) {
    for (let i = 0; i < this.materialInstances.length; i++)
      bindTPT1MaterialInstance(this.materialInstances[i], animationController, tpt1);
  }
  /**
   * Binds {@param ank1} (joint animations) to this model instance.
   * ANK1 objects can be parsed from {@link BCK} files. See {@link BCK.parse}.
   *
   * @param animationController An {@link AnimationController} to control the progress of this animation to.
   * By default, this will default to this instance's own {@member animationController}.
   */
  bindANK1(ank1, animationController = this.animationController) {
    this.jointMatrixCalc = ank1 !== null ? new JointMatrixCalcANK1(animationController, ank1) : new JointMatrixCalcNoAnm();
  }
  bindANF1(anf1, animationController = this.animationController) {
    this.jointMatrixCalc = anf1 !== null ? new JointMatrixCalcANF1(animationController, anf1) : new JointMatrixCalcNoAnm();
  }
  /**
   * Returns the joint-to-world matrix for the joint with name {@param jointName}.
   *
   * This object is not a copy; if an animation updates the joint, the values in this object will be
   * updated as well. You can use this as a way to parent an object to this one.
   */
  getJointToWorldMatrixReference(jointName) {
    const joints = this.modelData.bmd.jnt1.joints;
    for (let i = 0; i < joints.length; i++)
      if (joints[i].name === jointName)
        return this.shapeInstanceState.jointToWorldMatrixArray[i];
    throw new Error("could not find joint");
  }
  calcSkybox(camera2) {
    if (this.isSkybox) {
      this.modelMatrix[12] = camera2.worldMatrix[12];
      this.modelMatrix[13] = camera2.worldMatrix[13];
      this.modelMatrix[14] = camera2.worldMatrix[14];
    }
  }
  // The classic public interface, for compatibility.
  prepareToRender(device2, renderInstManager, viewerInput2) {
    if (!this.visible)
      return;
    const camera2 = viewerInput2.camera;
    this.animationController.setTimeInMilliseconds(viewerInput2.time);
    this.calcSkybox(camera2);
    this.calcAnim();
    this.calcView(camera2.viewMatrix, camera2.frustum);
    if (!this.isAnyShapeVisible())
      return;
    const viewDepth = this.computeDepth();
    for (let i = 0; i < this.materialInstances.length; i++)
      this.materialInstances[i].prepareToRenderShapes(renderInstManager, viewDepth, camera2.projectionMatrix, this.modelData, this.materialInstanceState, this.shapeInstanceState);
  }
  destroy(device2) {
    super.destroy(device2);
    if (this.ownedModelMaterialData !== null)
      this.ownedModelMaterialData.destroy(device2);
  }
};

// noclip/Common/JSYSTEM/JPA.ts
init_ArrayBufferSlice();
init_gx_enum();
init_util();
init_esm();
init_endian();
init_GfxPlatform();
init_gx_material();
init_Color();
init_gx_render();
init_gx_render();
init_MathHelpers();
init_GfxRenderInstManager();
init_UniformBufferHelpers();
init_Camera();
init_TopologyHelpers();
init_GXMaterialBuilder();
init_gx_displaylist();

// stubs/DebugFloaters.ts
function dfRange(..._a2) {
  return (_t, _k) => {
  };
}
function dfShow(..._a2) {
  return (_t, _k) => {
  };
}

// noclip/Common/JSYSTEM/JPA.ts
init_BufferHelpers();
var SORT_PARTICLES = false;
var st_bm = [0 /* NONE */, 1 /* BLEND */, 2 /* LOGIC */];
var st_bf = [0 /* ZERO */, 1 /* ONE */, 2 /* SRCCLR */, 3 /* INVSRCCLR */, 2 /* SRCCLR */, 3 /* INVSRCCLR */, 4 /* SRCALPHA */, 5 /* INVSRCALPHA */, 6 /* DSTALPHA */, 7 /* INVDSTALPHA */];
var st_c = [0 /* NEVER */, 1 /* LESS */, 3 /* LEQUAL */, 2 /* EQUAL */, 5 /* NEQUAL */, 6 /* GEQUAL */, 4 /* GREATER */, 7 /* ALWAYS */];
var st_ao = [0 /* AND */, 1 /* OR */, 2 /* XOR */, 3 /* XNOR */];
var st_ca = [
  15 /* ZERO */,
  8 /* TEXC */,
  12 /* ONE */,
  15 /* ZERO */,
  15 /* ZERO */,
  2 /* C0 */,
  8 /* TEXC */,
  15 /* ZERO */,
  2 /* C0 */,
  12 /* ONE */,
  8 /* TEXC */,
  15 /* ZERO */,
  4 /* C1 */,
  2 /* C0 */,
  8 /* TEXC */,
  15 /* ZERO */,
  15 /* ZERO */,
  8 /* TEXC */,
  2 /* C0 */,
  4 /* C1 */,
  15 /* ZERO */,
  15 /* ZERO */,
  15 /* ZERO */,
  2 /* C0 */
];
var st_aa = [
  7 /* ZERO */,
  4 /* TEXA */,
  1 /* A0 */,
  7 /* ZERO */,
  7 /* ZERO */,
  7 /* ZERO */,
  7 /* ZERO */,
  1 /* A0 */
];
function isStripe(shapeType) {
  return shapeType === 5 /* Stripe */ || shapeType === 6 /* StripeCross */;
}
function isCross(shapeType) {
  return shapeType === 6 /* StripeCross */ || shapeType === 4 /* DirectionCross */ || shapeType === 8 /* RotationCross */;
}
var JPACData = class {
  constructor(jpac) {
    this.jpac = jpac;
  }
  jpac;
  // TODO(jstpierre): Use a global JPAResourceManager for textures.
  texData = [];
  textureMapping = [];
  ensureTexture(cache3, index) {
    assert(index !== void 0);
    if (this.texData[index] !== void 0)
      return;
    if (index >= 0) {
      this.texData[index] = new BTIData(cache3.device, cache3, this.jpac.textures[index].texture);
    } else {
      const imgData = new Uint8Array([
        0,
        255,
        0,
        255,
        0,
        255,
        0,
        255,
        0,
        255,
        26,
        255,
        128,
        255,
        214,
        255,
        0,
        255,
        128,
        255,
        255,
        255,
        255,
        255,
        0,
        255,
        214,
        255,
        255,
        255,
        255,
        255,
        0,
        255,
        0,
        255,
        0,
        255,
        0,
        255,
        214,
        255,
        128,
        255,
        26,
        255,
        0,
        255,
        255,
        255,
        255,
        255,
        128,
        255,
        0,
        255,
        255,
        255,
        255,
        255,
        214,
        255,
        0,
        255,
        0,
        255,
        214,
        255,
        255,
        255,
        255,
        255,
        0,
        255,
        128,
        255,
        255,
        255,
        255,
        255,
        0,
        255,
        26,
        255,
        128,
        255,
        214,
        255,
        0,
        255,
        0,
        255,
        0,
        255,
        0,
        255,
        255,
        255,
        255,
        255,
        214,
        255,
        0,
        255,
        255,
        255,
        255,
        255,
        128,
        255,
        0,
        255,
        214,
        255,
        128,
        255,
        26,
        255,
        0,
        255,
        0,
        255,
        0,
        255,
        0,
        255,
        0,
        255
      ]);
      const btiTexture = {
        name: "JPADefaultTexture",
        width: 8,
        height: 8,
        format: 3 /* IA8 */,
        wrapS: 0 /* CLAMP */,
        wrapT: 0 /* CLAMP */,
        minFilter: 1 /* LINEAR */,
        magFilter: 1 /* LINEAR */,
        data: new ArrayBufferSlice(imgData.buffer),
        lodBias: 0,
        minLOD: 0,
        maxLOD: 100,
        mipCount: 1,
        maxAnisotropy: 0 /* _1 */,
        paletteData: null,
        paletteFormat: 0 /* IA8 */
      };
      this.texData[index] = new BTIData(cache3.device, cache3, btiTexture);
    }
    if (this.textureMapping[index] === void 0) {
      this.textureMapping[index] = new GXTextureMapping();
      this.texData[index].fillTextureMapping(this.textureMapping[index]);
    }
  }
  getTextureMappingReference(name) {
    for (let i = 0; i < this.jpac.textures.length; i++) {
      const bti = this.jpac.textures[i];
      if (bti.texture.name === name) {
        if (this.textureMapping[i] === void 0)
          this.textureMapping[i] = new GXTextureMapping();
        return this.textureMapping[i];
      }
    }
    return null;
  }
  fillTextureMapping(m, index) {
    m.copy(this.textureMapping[index]);
  }
  destroy(device2) {
    for (let i = -1; i < this.texData.length; i++)
      if (this.texData[i] !== void 0)
        this.texData[i].destroy(device2);
  }
};
function hermiteInterpolate2(k, i1, tn) {
  const k0Idx = i1 - 4;
  const k1Idx = i1;
  const t0 = k[k0Idx + 0];
  const t1 = k[k1Idx + 0];
  const length5 = t1 - t0;
  const t2 = (tn - t0) / length5;
  const p0 = k[k0Idx + 1];
  const p1 = k[k1Idx + 1];
  const s0 = k[k0Idx + 3] * length5;
  const s1 = k[k1Idx + 2] * length5;
  return getPointHermite(p0, p1, s0, s1, t2);
}
function kfa1Findi1(kfa1, t2) {
  for (let i = 0; i < kfa1.keyValues.length; i += 4) {
    const kt = kfa1.keyValues[i + 0];
    if (kt > t2)
      return i;
  }
  return kfa1.keyValues.length - 4;
}
function kfa1Calc(kfa1, tick) {
  if (kfa1.isLoopEnable) {
    const tickMax = kfa1.keyValues[kfa1.keyValues.length - 4];
    tick = tick % tickMax;
  }
  const i1 = kfa1Findi1(kfa1, tick);
  if (i1 === 0 || i1 >= kfa1.keyValues.length - 4)
    return kfa1.keyValues[i1 + 1];
  else
    return hermiteInterpolate2(kfa1.keyValues, i1, tick);
}
function new_rndm() {
  return { state: 0 };
}
function copy_rndm(dst, src) {
  dst.state = src.state;
}
function next_rndm(random5) {
  random5.state = random5.state * 1664525 + 1013904223 >>> 0;
  return random5.state;
}
function get_rndm_f(random5) {
  return next_rndm(random5) / 4294967295;
}
function get_r_zp(random5) {
  return get_rndm_f(random5) * 2 - 1;
}
function get_r_zh(random5) {
  return get_rndm_f(random5) - 0.5;
}
var instancingBindingLayouts = [{
  numSamplers: 16,
  numUniformBuffers: 3,
  samplerEntries: [
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 0 /* Float */ },
    { dimension: 0 /* n2D */, formatKind: 1 /* UnfilterableFloat */ }
  ]
}];
function JPAGetDirMtx(m, v, scratch = scratchVec3a5) {
  vec3_exports.set(scratch, v[1], -v[0], 0);
  const mag = vec3_exports.length(scratch);
  vec3_exports.normalize(scratch, scratch);
  const x = scratch[0], y = scratch[1], z = v[2];
  m[0] = x * x + z * (1 - x * x);
  m[4] = (1 - z) * (x * y);
  m[8] = -y * mag;
  m[12] = 0;
  m[1] = (1 - z) * (x * y);
  m[5] = y * y + z * (1 - y * y);
  m[9] = x * mag;
  m[13] = 0;
  m[2] = y * mag;
  m[6] = -x * mag;
  m[10] = z;
  m[14] = 0;
}
function JPASetRMtxSTVecFromMtx(scale6, rot, trans, m) {
  mat4_exports.identity(rot);
  const scaleX = Math.hypot(m[0], m[1], m[2]);
  const scaleY = Math.hypot(m[4], m[5], m[6]);
  const scaleZ = Math.hypot(m[8], m[9], m[10]);
  if (scale6 !== null)
    vec3_exports.set(scale6, scaleX, scaleY, scaleZ);
  if (scaleX !== 0) {
    const d = 1 / scaleX;
    rot[0] = m[0] * d;
    rot[1] = m[1] * d;
    rot[2] = m[2] * d;
  }
  if (scaleY !== 0) {
    const d = 1 / scaleY;
    rot[4] = m[4] * d;
    rot[5] = m[5] * d;
    rot[6] = m[6] * d;
  }
  if (scaleZ !== 0) {
    const d = 1 / scaleZ;
    rot[8] = m[8] * d;
    rot[9] = m[9] * d;
    rot[10] = m[10] * d;
  }
  trans[0] = m[12];
  trans[1] = m[13];
  trans[2] = m[14];
}
function JPASetRMtxTVecfromMtx(m, rot, trans) {
  JPASetRMtxSTVecFromMtx(null, rot, trans, m);
}
function mirroredRepeat(t2, duration2) {
  const loopNum = t2 / duration2 | 0;
  const phase = t2 - loopNum * duration2;
  if (loopNum % 2 === 1)
    return duration2 - phase;
  else
    return phase;
}
function calcTexIdx(workData, tick, time, randomPhase) {
  const bsp1 = workData.baseEmitter.resData.res.bsp1;
  const texIdxAnimData = assertExists(bsp1.texIdxAnimData);
  let anmIdx;
  if (bsp1.texCalcIdxType === 0 /* Normal */) {
    anmIdx = Math.min(texIdxAnimData.length - 1, tick | 0);
  } else if (bsp1.texCalcIdxType === 1 /* Repeat */) {
    anmIdx = ((tick | 0) + randomPhase) % texIdxAnimData.length;
  } else if (bsp1.texCalcIdxType === 2 /* Reverse */) {
    anmIdx = mirroredRepeat((tick | 0) + randomPhase, texIdxAnimData.length - 1);
  } else if (bsp1.texCalcIdxType === 3 /* Merge */) {
    anmIdx = ((time * texIdxAnimData.length | 0) + randomPhase) % texIdxAnimData.length;
  } else if (bsp1.texCalcIdxType === 4 /* Random */) {
    anmIdx = randomPhase % texIdxAnimData.length;
  } else {
    throw new Error("whoops");
  }
  return texIdxAnimData[anmIdx];
}
function calcColor(dstPrm, dstEnv, workData, tick, time, randomPhase) {
  const bsp1 = workData.baseEmitter.resData.res.bsp1;
  let anmIdx = 0;
  if (bsp1.colorCalcIdxType === 0 /* Normal */) {
    anmIdx = Math.min(bsp1.colorAnimMaxFrm, tick | 0);
  } else if (bsp1.colorCalcIdxType === 1 /* Repeat */) {
    anmIdx = ((tick | 0) + randomPhase) % (bsp1.colorAnimMaxFrm + 1);
  } else if (bsp1.colorCalcIdxType === 2 /* Reverse */) {
    anmIdx = mirroredRepeat((tick | 0) + randomPhase, bsp1.colorAnimMaxFrm);
  } else if (bsp1.colorCalcIdxType === 3 /* Merge */) {
    anmIdx = ((time * (bsp1.colorAnimMaxFrm + 1) | 0) + randomPhase) % (bsp1.colorAnimMaxFrm + 1);
  } else if (bsp1.colorCalcIdxType === 4 /* Random */) {
    anmIdx = randomPhase % (bsp1.colorAnimMaxFrm + 1);
  } else {
    throw new Error("whoops");
  }
  if (bsp1.colorPrmAnimData !== null)
    colorCopy(dstPrm, bsp1.colorPrmAnimData[anmIdx]);
  if (bsp1.colorEnvAnimData !== null)
    colorCopy(dstEnv, bsp1.colorEnvAnimData[anmIdx]);
}
var scratchVec3Points = nArray(4, () => vec3_exports.create());
var _colorEnv_dec, _colorPrm_dec, _randomDirectionSpeed_dec, _directionalSpeed_dec, _awayFromYAxisSpeed_dec, _awayFromCenterSpeed_dec, _volumeSweep_dec, _volumeMinRad_dec, _volumeSize_dec, _rate_dec, _localRotation_dec, _localDirection_dec, _localTranslation_dec, _localScale_dec, _init;
_localScale_dec = [dfRange(-5, 5)], _localTranslation_dec = [dfRange(-9999, 9999)], _localDirection_dec = [dfRange(-1, 1)], _localRotation_dec = [dfRange(-Math.PI, Math.PI, 0.01)], _rate_dec = [dfRange(0, 5)], _volumeSize_dec = [dfRange(0, 1e3)], _volumeMinRad_dec = [dfRange(0, 6.283185307179586 /* TAU */, 0.01)], _volumeSweep_dec = [dfRange(0, 1, 0.01)], _awayFromCenterSpeed_dec = [dfRange(0, 10)], _awayFromYAxisSpeed_dec = [dfRange(0, 10)], _directionalSpeed_dec = [dfRange(0, 10)], _randomDirectionSpeed_dec = [dfRange(0, 10)], _colorPrm_dec = [dfShow()], _colorEnv_dec = [dfShow()];
var JPABaseEmitter = class {
  constructor(emitterManager) {
    this.emitterManager = emitterManager;
    __publicField(this, "drawParticle", true);
    __publicField(this, "status");
    __publicField(this, "resData");
    __publicField(this, "localScale", __runInitializers(_init, 8, this, vec3_exports.create())), __runInitializers(_init, 11, this);
    __publicField(this, "localTranslation", __runInitializers(_init, 12, this, vec3_exports.create())), __runInitializers(_init, 15, this);
    __publicField(this, "localDirection", __runInitializers(_init, 16, this, vec3_exports.create())), __runInitializers(_init, 19, this);
    __publicField(this, "localRotation", __runInitializers(_init, 20, this, vec3_exports.create())), __runInitializers(_init, 23, this);
    __publicField(this, "maxFrame");
    __publicField(this, "lifeTime");
    __publicField(this, "rate", __runInitializers(_init, 24, this)), __runInitializers(_init, 27, this);
    __publicField(this, "volumeSize", __runInitializers(_init, 28, this)), __runInitializers(_init, 31, this);
    __publicField(this, "volumeMinRad", __runInitializers(_init, 32, this)), __runInitializers(_init, 35, this);
    __publicField(this, "volumeSweep", __runInitializers(_init, 36, this)), __runInitializers(_init, 39, this);
    __publicField(this, "moment");
    __publicField(this, "awayFromCenterSpeed", __runInitializers(_init, 40, this)), __runInitializers(_init, 43, this);
    __publicField(this, "awayFromYAxisSpeed", __runInitializers(_init, 44, this)), __runInitializers(_init, 47, this);
    __publicField(this, "directionalSpeed", __runInitializers(_init, 48, this)), __runInitializers(_init, 51, this);
    __publicField(this, "randomDirectionSpeed", __runInitializers(_init, 52, this)), __runInitializers(_init, 55, this);
    __publicField(this, "spread");
    __publicField(this, "age");
    __publicField(this, "scaleOut");
    __publicField(this, "random", new_rndm());
    __publicField(this, "colorPrm", __runInitializers(_init, 56, this, colorNewCopy(White))), __runInitializers(_init, 59, this);
    __publicField(this, "colorEnv", __runInitializers(_init, 60, this, colorNewCopy(White))), __runInitializers(_init, 63, this);
    __publicField(this, "userData", null);
    // Internal state.
    __publicField(this, "emitCount");
    __publicField(this, "texAnmIdx");
    __publicField(this, "waitTime");
    __publicField(this, "rateStepTimer");
    __publicField(this, "globalColorPrm", colorNewCopy(White));
    __publicField(this, "globalColorEnv", colorNewCopy(White));
    // These are the public APIs to affect an emitter's placement.
    __publicField(this, "globalRotation", mat4_exports.create());
    __publicField(this, "globalDynamicsScale", vec3_exports.create());
    __publicField(this, "globalTranslation", vec3_exports.create());
    __publicField(this, "globalParticleScale", vec2_exports.create());
    __publicField(this, "aliveParticlesBase", []);
    __publicField(this, "aliveParticlesChild", []);
    __publicField(this, "drawGroupId", 0);
    __publicField(this, "emitterCallBack", null);
  }
  emitterManager;
  stopCreateParticle() {
    this.status |= 1 /* STOP_CREATE_PARTICLE */;
  }
  playCreateParticle() {
    this.status &= ~1 /* STOP_CREATE_PARTICLE */;
  }
  stopCalcEmitter() {
    this.status |= 2 /* STOP_CALC_EMITTER */;
  }
  playCalcEmitter() {
    this.status &= ~2 /* STOP_CALC_EMITTER */;
  }
  stopDrawParticle() {
    this.status |= 4 /* STOP_DRAW_PARTICLE */;
  }
  playDrawParticle() {
    this.status &= ~4 /* STOP_DRAW_PARTICLE */;
  }
  becomeInvalidEmitter() {
    this.stopCreateParticle();
    this.maxFrame = 1;
  }
  becomeInvalidEmitterImmediate() {
    this.stopCreateParticle();
    this.maxFrame = -1;
  }
  becomeImmortalEmitter() {
    this.status |= 64 /* IMMORTAL */;
  }
  getParticleNumber() {
    return this.aliveParticlesBase.length + this.aliveParticlesChild.length;
  }
  isEnableDeleteEmitter() {
    return !!(this.status & 8 /* TERMINATED */) && this.getParticleNumber() === 0;
  }
  setGlobalTranslation(v) {
    vec3_exports.copy(this.globalTranslation, v);
  }
  setGlobalScale(s) {
    this.setGlobalDynamicsScale(s);
    this.setGlobalParticleScale(s);
  }
  setGlobalDynamicsScale(s) {
    vec3_exports.copy(this.globalDynamicsScale, s);
  }
  setGlobalParticleScale(s) {
    vec2_exports.set(this.globalParticleScale, s[0], s[1]);
  }
  setDrawParticle(v) {
    this.drawParticle = v;
  }
  setVolumeSize(v) {
    this.volumeSize = v;
  }
  setRate(v) {
    this.rate = v;
  }
  setGlobalRTMatrix(m) {
    JPASetRMtxTVecfromMtx(m, this.globalRotation, this.globalTranslation);
  }
  setGlobalSRTMatrix(m) {
    JPASetRMtxSTVecFromMtx(this.globalDynamicsScale, this.globalRotation, this.globalTranslation, m);
  }
  setGlobalRotation(v) {
    computeModelMatrixR(this.globalRotation, v[0], v[1], v[2]);
  }
  init(resData) {
    this.resData = resData;
    const bem1 = this.resData.res.bem1;
    const bsp1 = this.resData.res.bsp1;
    vec3_exports.copy(this.localScale, bem1.emitterScl);
    vec3_exports.copy(this.localTranslation, bem1.emitterTrs);
    vec3_exports.copy(this.localDirection, bem1.emitterDir);
    vec3_exports.copy(this.localRotation, bem1.emitterRot);
    this.maxFrame = bem1.maxFrame;
    this.lifeTime = bem1.lifeTime;
    this.rate = bem1.rate;
    this.volumeSize = bem1.volumeSize;
    this.volumeMinRad = bem1.volumeMinRad;
    this.volumeSweep = bem1.volumeSweep;
    this.awayFromCenterSpeed = bem1.initialVelOmni;
    this.awayFromYAxisSpeed = bem1.initialVelAxis;
    this.directionalSpeed = bem1.initialVelDir;
    this.randomDirectionSpeed = bem1.initialVelRndm;
    this.spread = bem1.spread;
    this.moment = bem1.moment;
    next_rndm(this.emitterManager.workData.random);
    copy_rndm(this.random, this.emitterManager.workData.random);
    mat4_exports.identity(this.globalRotation);
    vec3SetAll(this.globalDynamicsScale, 1);
    vec3_exports.zero(this.globalTranslation);
    vec2_exports.set(this.globalParticleScale, 1, 1);
    colorCopy(this.globalColorPrm, White);
    colorCopy(this.globalColorEnv, White);
    colorCopy(this.colorPrm, bsp1.colorPrm);
    colorCopy(this.colorEnv, bsp1.colorEnv);
    this.scaleOut = 1;
    this.emitCount = 0;
    this.waitTime = 0;
    this.age = 0;
    this.rateStepTimer = 0;
    this.texAnmIdx = 0;
    this.status = 16 /* FIRST_EMISSION */ | 32 /* RATE_STEP_EMIT */;
    if (!this.resData.supportedParticle)
      this.status |= 8 /* TERMINATED */;
    this.emitterCallBack = null;
    this.userData = null;
  }
  deleteAllParticle() {
    for (let i = 0; i < this.aliveParticlesBase.length; i++)
      this.emitterManager.deadParticlePool.push(this.aliveParticlesBase[i]);
    this.aliveParticlesBase.length = 0;
    for (let i = 0; i < this.aliveParticlesChild.length; i++)
      this.emitterManager.deadParticlePool.push(this.aliveParticlesChild[i]);
    this.aliveParticlesChild.length = 0;
  }
  createChild(parent) {
    if (this.emitterManager.deadParticlePool.length === 0)
      return;
    const particle = this.emitterManager.deadParticlePool.pop();
    this.aliveParticlesChild.push(particle);
    particle.init_c(this.emitterManager.workData, parent);
  }
  calcKey() {
    for (let i = 0; i < this.resData.res.kfa1.length; i++) {
      const kfa1 = this.resData.res.kfa1[i];
      const v = kfa1Calc(kfa1, this.age);
      assert(v !== void 0);
      if (kfa1.keyType === 0 /* Rate */)
        this.rate = v;
      else if (kfa1.keyType === 1 /* VolumeSize */)
        this.volumeSize = v;
      else if (kfa1.keyType === 2 /* VolumeSweep */)
        this.volumeSweep = v;
      else if (kfa1.keyType === 3 /* VolumeMinRad */)
        this.volumeMinRad = v;
      else if (kfa1.keyType === 4 /* LifeTime */)
        this.lifeTime = v;
      else if (kfa1.keyType === 5 /* Moment */)
        this.moment = v;
      else if (kfa1.keyType === 6 /* InitialVelOmni */)
        this.awayFromCenterSpeed = v;
      else if (kfa1.keyType === 7 /* InitialVelAxis */)
        this.awayFromYAxisSpeed = v;
      else if (kfa1.keyType === 8 /* InitialVelDir */)
        this.directionalSpeed = v;
      else if (kfa1.keyType === 9 /* Spread */)
        this.spread = v;
      else if (kfa1.keyType === 10 /* Scale */)
        this.scaleOut = v;
      else
        throw new Error("whoops");
    }
  }
  calcVolumeCube(workData) {
    const rndX = get_rndm_f(this.random) - 0.5;
    const rndY = get_rndm_f(this.random) - 0.5;
    const rndZ = get_rndm_f(this.random) - 0.5;
    vec3_exports.set(workData.volumePos, rndX * this.volumeSize, rndY * this.volumeSize, rndZ * this.volumeSize);
    vec3_exports.mul(workData.velOmni, workData.volumePos, workData.emitterGlobalScale);
    vec3_exports.set(workData.velAxis, workData.volumePos[0], 0, workData.volumePos[2]);
  }
  calcVolumeSphere(workData) {
    const bem1 = workData.baseEmitter.resData.res.bem1;
    let angle3, x;
    if (!!(bem1.emitFlags & 2 /* FixedInterval */)) {
      const startAngle = Math.PI;
      angle3 = startAngle;
      if (workData.volumeEmitAngleMax > 1)
        angle3 += workData.volumeSweep * (workData.volumeEmitAngleCount / (workData.volumeEmitAngleMax - 1)) * 6.283185307179586 /* TAU */;
      x = Math.PI * 0.5 + workData.volumeEmitXCount / (workData.divNumber - 1) * Math.PI;
      workData.volumeEmitAngleCount++;
      if (workData.volumeEmitAngleCount === workData.volumeEmitAngleMax) {
        workData.volumeEmitAngleCount = 0;
        workData.volumeEmitXCount++;
        if (workData.volumeEmitXCount * 2 < workData.divNumber) {
          workData.volumeEmitAngleMax = workData.volumeEmitAngleMax !== 1 ? workData.volumeEmitAngleMax + 4 : workData.volumeEmitAngleMax + 3;
        } else {
          workData.volumeEmitAngleMax = workData.volumeEmitAngleMax !== 4 ? workData.volumeEmitAngleMax - 4 : 1;
        }
      }
    } else {
      angle3 = workData.volumeSweep * get_r_zh(this.random) * 6.283185307179586 /* TAU */;
      x = get_rndm_f(this.random) * Math.PI;
    }
    let distance4 = get_rndm_f(this.random);
    if (!!(bem1.emitFlags & 1 /* FixedDensity */)) {
      distance4 = 1 - distance4 ** 3;
    }
    const size = workData.volumeSize * lerp5(workData.volumeMinRad, 1, distance4);
    vec3_exports.set(
      workData.volumePos,
      size * Math.cos(x) * Math.sin(angle3),
      size * Math.sin(x),
      size * Math.cos(x) * Math.cos(angle3)
    );
    vec3_exports.mul(workData.velOmni, workData.volumePos, workData.emitterGlobalScale);
    vec3_exports.set(workData.velAxis, workData.volumePos[0], 0, workData.volumePos[2]);
  }
  calcVolumeCylinder(workData) {
    const bem1 = workData.baseEmitter.resData.res.bem1;
    let distance4 = get_rndm_f(this.random);
    if (!!(bem1.emitFlags & 1 /* FixedDensity */)) {
      distance4 = 1 - distance4 * distance4;
    }
    const sizeXZ = workData.volumeSize * lerp5(workData.volumeMinRad, 1, distance4);
    const angle3 = workData.volumeSweep * get_r_zh(this.random) * 6.283185307179586 /* TAU */;
    const height = workData.volumeSize * get_r_zp(this.random);
    vec3_exports.set(workData.volumePos, sizeXZ * Math.sin(angle3), height, sizeXZ * Math.cos(angle3));
    vec3_exports.mul(workData.velOmni, workData.volumePos, workData.emitterGlobalScale);
    vec3_exports.set(workData.velAxis, workData.volumePos[0], 0, workData.volumePos[2]);
  }
  calcVolumeTorus(workData) {
    const size = workData.volumeSize * workData.volumeMinRad;
    const angle1 = workData.volumeSweep * get_r_zh(this.random) * 6.283185307179586 /* TAU */;
    const angle22 = get_r_zh(this.random) * 6.283185307179586 /* TAU */;
    vec3_exports.set(
      workData.velAxis,
      size * Math.cos(angle1) * Math.cos(angle22),
      size * Math.sin(angle22),
      size * Math.cos(angle1) * Math.sin(angle22)
    );
    vec3_exports.set(
      workData.volumePos,
      workData.velAxis[0] + workData.volumeSize * Math.sin(angle1),
      workData.velAxis[1],
      workData.velAxis[2] + workData.volumeSize * Math.cos(angle1)
    );
    vec3_exports.mul(workData.velOmni, workData.volumePos, workData.emitterGlobalScale);
  }
  calcVolumePoint(workData) {
    vec3_exports.zero(workData.volumePos);
    const rndX = get_rndm_f(this.random) - 0.5;
    const rndY = get_rndm_f(this.random) - 0.5;
    const rndZ = get_rndm_f(this.random) - 0.5;
    vec3_exports.set(workData.velOmni, rndX, rndY, rndZ);
    vec3_exports.set(workData.velAxis, workData.velOmni[0], 0, workData.velOmni[2]);
  }
  calcVolumeCircle(workData) {
    const bem1 = this.resData.res.bem1;
    let angle3;
    if (!!(bem1.emitFlags & 2 /* FixedInterval */)) {
      const idx = workData.volumeEmitIdx++;
      const idxS = idx / workData.volumeEmitCount - 0.5;
      angle3 = workData.volumeSweep * idxS * 6.283185307179586 /* TAU */;
    } else {
      angle3 = workData.volumeSweep * get_r_zh(this.random) * 6.283185307179586 /* TAU */;
    }
    let distance4 = get_rndm_f(this.random);
    if (!!(bem1.emitFlags & 1 /* FixedDensity */)) {
      distance4 = 1 - distance4 * distance4;
    }
    const sizeXZ = workData.volumeSize * lerp5(workData.volumeMinRad, 1, distance4);
    vec3_exports.set(workData.volumePos, sizeXZ * Math.sin(angle3), 0, sizeXZ * Math.cos(angle3));
    vec3_exports.set(workData.velAxis, workData.volumePos[0], 0, workData.volumePos[2]);
    vec3_exports.mul(workData.velOmni, workData.velAxis, workData.emitterGlobalScale);
  }
  calcVolumeLine(workData) {
    const bem1 = this.resData.res.bem1;
    if (!!(bem1.emitFlags & 2 /* FixedInterval */)) {
      const idx = workData.volumeEmitIdx++;
      vec3_exports.set(workData.volumePos, 0, 0, bem1.volumeSize * (idx / (workData.volumeEmitCount - 1) - 0.5));
    } else {
      vec3_exports.set(workData.volumePos, 0, 0, bem1.volumeSize * get_r_zh(this.random));
    }
    vec3_exports.set(workData.velAxis, 0, 0, workData.volumePos[2]);
    vec3_exports.mul(workData.velOmni, workData.velAxis, workData.emitterGlobalScale);
  }
  calcVolume(workData) {
    const bem1 = this.resData.res.bem1;
    if (bem1.volumeType === 0 /* Cube */)
      this.calcVolumeCube(workData);
    else if (bem1.volumeType === 1 /* Sphere */)
      this.calcVolumeSphere(workData);
    else if (bem1.volumeType === 2 /* Cylinder */)
      this.calcVolumeCylinder(workData);
    else if (bem1.volumeType === 3 /* Torus */)
      this.calcVolumeTorus(workData);
    else if (bem1.volumeType === 4 /* Point */)
      this.calcVolumePoint(workData);
    else if (bem1.volumeType === 5 /* Circle */)
      this.calcVolumeCircle(workData);
    else if (bem1.volumeType === 6 /* Line */)
      this.calcVolumeLine(workData);
    else
      throw new Error("whoops");
  }
  createParticle() {
    if (this.emitterManager.deadParticlePool.length === 0)
      return null;
    const particle = this.emitterManager.deadParticlePool.pop();
    this.aliveParticlesBase.push(particle);
    this.calcVolume(this.emitterManager.workData);
    particle.init_p(this.emitterManager.workData);
    return particle;
  }
  create() {
    const workData = this.emitterManager.workData;
    const bem1 = this.resData.res.bem1;
    if (!!(this.status & 32 /* RATE_STEP_EMIT */)) {
      if (!!(bem1.emitFlags & 2 /* FixedInterval */)) {
        if (bem1.volumeType === 1 /* Sphere */)
          this.emitCount = bem1.divNumber * bem1.divNumber * 4 + 2;
        else
          this.emitCount = bem1.divNumber;
        workData.volumeEmitIdx = 0;
      } else {
        const emitCountIncr = this.rate * (1 + bem1.rateRndm * get_r_zp(this.random));
        this.emitCount += emitCountIncr;
        if (!!(this.status & 16 /* FIRST_EMISSION */) && this.rate !== 0 && this.emitCount < 1)
          this.emitCount = 1;
      }
      workData.volumeEmitCount = this.emitCount;
      if (!!(this.status & 1 /* STOP_CREATE_PARTICLE */))
        this.emitCount = 0;
      while (this.emitCount >= 1) {
        this.createParticle();
        this.emitCount--;
      }
    }
    this.rateStepTimer += workData.deltaTime;
    if (this.rateStepTimer >= bem1.rateStep + 1) {
      this.rateStepTimer -= bem1.rateStep + 1;
      this.status |= 32 /* RATE_STEP_EMIT */;
    } else {
      this.status &= ~32 /* RATE_STEP_EMIT */;
    }
    this.status &= ~16 /* FIRST_EMISSION */;
  }
  processTillStartFrame() {
    if (this.waitTime >= this.resData.res.bem1.startFrame)
      return true;
    if (!(this.status & 2 /* STOP_CALC_EMITTER */))
      this.waitTime += this.emitterManager.workData.deltaTime;
    return false;
  }
  processTermination() {
    if (!!(this.status & 256 /* TERMINATE */))
      return true;
    if (this.maxFrame === 0)
      return false;
    if (this.maxFrame < 0) {
      this.status |= 8 /* TERMINATED */;
      return this.getParticleNumber() === 0;
    }
    if (this.age >= this.maxFrame) {
      this.status |= 8 /* TERMINATED */;
      if (!!(this.status & 64 /* IMMORTAL */))
        return false;
      return this.getParticleNumber() === 0;
    }
    return false;
  }
  calcWorkData_c(workData) {
    workData.volumeSize = this.volumeSize;
    workData.volumeMinRad = this.volumeMinRad;
    workData.volumeSweep = this.volumeSweep;
    workData.volumeEmitXCount = 0;
    workData.volumeEmitAngleCount = 0;
    workData.volumeEmitAngleMax = 1;
    workData.divNumber = this.resData.res.bem1.divNumber * 2 + 1;
    mat4_exports.copy(workData.globalRotation, this.globalRotation);
    computeModelMatrixR(scratchMatrix4, this.localRotation[0], this.localRotation[1], this.localRotation[2]);
    mat4_exports.mul(workData.emitterGlobalRotation, workData.globalRotation, scratchMatrix4);
    mat4_exports.fromScaling(scratchMatrix4, this.localScale);
    mat4_exports.mul(workData.emitterGlobalSR, workData.emitterGlobalRotation, scratchMatrix4);
    vec3_exports.mul(workData.emitterGlobalScale, this.globalDynamicsScale, this.localScale);
    JPAGetDirMtx(workData.emitterDirMtx, this.localDirection);
    vec3_exports.copy(workData.globalDynamicsScale, this.globalDynamicsScale);
    vec3_exports.copy(workData.emitterTranslation, this.localTranslation);
    mat4_exports.fromScaling(scratchMatrix4, this.globalDynamicsScale);
    mat4_exports.mul(scratchMatrix4, workData.globalRotation, scratchMatrix4);
    setMatrixTranslation(scratchMatrix4, this.globalTranslation);
    transformVec3Mat4w1(workData.emitterGlobalCenterPos, scratchMatrix4, this.localTranslation);
  }
  calcWorkData_d(workData) {
    computeModelMatrixR(scratchMatrix4, this.localRotation[0], this.localRotation[1], this.localRotation[2]);
    mat4_exports.mul(workData.emitterGlobalRotation, this.globalRotation, scratchMatrix4);
    transformVec3Mat4w0(workData.emitterGlobalDir, workData.emitterGlobalRotation, this.localDirection);
    if (!SORT_PARTICLES) {
      this.calcEmitterGlobalPosition(scratchVec3a5);
      const depth = computeViewSpaceDepthFromWorldSpacePoint(workData.posCamMtx, scratchVec3a5);
      workData.particleSortKey = setSortKeyDepth(workData.particleSortKey, depth);
    }
  }
  calc(workData) {
    if (!this.processTillStartFrame())
      return true;
    if (this.processTermination())
      return false;
    workData.baseEmitter = this;
    if (!(this.status & 2 /* STOP_CALC_EMITTER */)) {
      this.calcKey();
      if (this.emitterCallBack !== null)
        this.emitterCallBack.execute(this);
      this.calcWorkData_c(workData);
      const bsp1 = this.resData.res.bsp1;
      if (bsp1.texIdxAnimData !== null && bsp1.isGlblTexAnm)
        this.texAnmIdx = calcTexIdx(workData, this.age, 0, 0);
      if (bsp1.isGlblClrAnm)
        calcColor(this.colorPrm, this.colorEnv, workData, this.age, 0, 0);
      if (!(this.status & 8 /* TERMINATED */))
        this.create();
      if (this.emitterCallBack !== null)
        this.emitterCallBack.executeAfter(this);
      for (let i = 0; i < this.aliveParticlesBase.length; i++) {
        const particle = this.aliveParticlesBase[i];
        const alive = particle.calc_p(workData);
        if (!alive) {
          this.aliveParticlesBase.splice(i, 1);
          workData.emitterManager.deadParticlePool.push(particle);
          i--;
        }
      }
      for (let i = 0; i < this.aliveParticlesChild.length; i++) {
        const particle = this.aliveParticlesChild[i];
        const alive = particle.calc_c(workData);
        if (!alive) {
          this.aliveParticlesChild.splice(i, 1);
          workData.emitterManager.deadParticlePool.push(particle);
          i--;
        }
      }
      this.age += workData.deltaTime;
      if (this.age < 0)
        this.age = 0.01;
    } else {
      if (this.emitterCallBack !== null)
        this.emitterCallBack.executeAfter(this);
    }
    return true;
  }
  calcEmitterGlobalPosition(v) {
    mat4_exports.scale(scratchMatrix4, this.globalRotation, this.globalDynamicsScale);
    scratchMatrix4[12] += this.globalTranslation[0];
    scratchMatrix4[13] += this.globalTranslation[1];
    scratchMatrix4[14] += this.globalTranslation[2];
    transformVec3Mat4w1(v, scratchMatrix4, this.localTranslation);
  }
  drawStripe(renderInstManager, workData, particleList, sp1) {
    const particleCount = particleList.length;
    if (particleCount < 2)
      return;
    const globalScaleX = 25 * workData.globalParticleScale[0];
    if (globalScaleX <= 0) {
      return;
    }
    const bsp1 = this.resData.res.bsp1;
    const reverseOrder = !bsp1.isDrawFwdAhead;
    const needsPrevPos = sp1.dirType === 4 /* PrevPctl */;
    if (needsPrevPos)
      this.calcEmitterGlobalPosition(workData.prevParticlePos);
    const pivotX = workData.pivotX - 1;
    const pivotY = workData.pivotY - 1;
    const px0 = globalScaleX * (1 + pivotX);
    const px1 = globalScaleX * (1 - pivotX);
    const py0 = globalScaleX * (1 + pivotY);
    const py1 = globalScaleX * (1 - pivotY);
    const isCross2 = sp1.shapeType === 6 /* StripeCross */;
    const oneStripVertexCount = particleCount * 2;
    const bufferVertexCount = isCross2 ? oneStripVertexCount * 2 : oneStripVertexCount;
    const data = new Float32Array(bufferVertexCount * 5);
    scratchMatrix4[12] = 0;
    scratchMatrix4[13] = 0;
    scratchMatrix4[14] = 0;
    const numPoints = isCross2 ? 4 : 2;
    let stripe0Idx = 0;
    let stripe1Idx = oneStripVertexCount * 5;
    for (let i = 0; i < particleCount; i++) {
      const particleIndex = reverseOrder ? particleCount - 1 - i : i;
      const p2 = particleList[particleIndex];
      applyDir(scratchVec3a5, p2, sp1.dirType, workData);
      if (isNearZeroVec3(scratchVec3a5, 1e-3))
        vec3_exports.set(scratchVec3a5, 0, 1, 0);
      else
        vec3_exports.normalize(scratchVec3a5, scratchVec3a5);
      vec3_exports.cross(scratchVec3b5, p2.axis, scratchVec3a5);
      if (isNearZeroVec3(scratchVec3b5, 1e-3))
        vec3_exports.set(scratchVec3b5, 1, 0, 0);
      else
        vec3_exports.normalize(scratchVec3b5, scratchVec3b5);
      vec3_exports.cross(p2.axis, scratchVec3a5, scratchVec3b5);
      vec3_exports.normalize(p2.axis, p2.axis);
      setMatrixAxis(scratchMatrix4, scratchVec3b5, Vec3Zero, p2.axis);
      const sx0 = px0 * -p2.particleScale[0];
      const sx1 = px1 * p2.particleScale[0];
      const sin = Math.sin(p2.rotateAngle), cos = Math.cos(p2.rotateAngle);
      vec3_exports.set(scratchVec3Points[0], sx0 * cos, 0, sx0 * sin);
      vec3_exports.set(scratchVec3Points[1], sx1 * cos, 0, sx1 * sin);
      if (isCross2) {
        const sy0 = py0 * -p2.particleScale[1];
        const sy1 = py1 * p2.particleScale[1];
        vec3_exports.set(scratchVec3Points[2], sy0 * -sin, 0, sy0 * cos);
        vec3_exports.set(scratchVec3Points[3], sy1 * -sin, 0, sy1 * cos);
      }
      for (let j = 0; j < numPoints; j++)
        transformVec3Mat4w0(scratchVec3Points[j], scratchMatrix4, scratchVec3Points[j]);
      const texT = i / (particleCount - 1);
      data[stripe0Idx++] = scratchVec3Points[0][0] + p2.position[0];
      data[stripe0Idx++] = scratchVec3Points[0][1] + p2.position[1];
      data[stripe0Idx++] = scratchVec3Points[0][2] + p2.position[2];
      data[stripe0Idx++] = 0;
      data[stripe0Idx++] = texT;
      data[stripe0Idx++] = scratchVec3Points[1][0] + p2.position[0];
      data[stripe0Idx++] = scratchVec3Points[1][1] + p2.position[1];
      data[stripe0Idx++] = scratchVec3Points[1][2] + p2.position[2];
      data[stripe0Idx++] = 1;
      data[stripe0Idx++] = texT;
      if (isCross2) {
        data[stripe1Idx++] = scratchVec3Points[2][0] + p2.position[0];
        data[stripe1Idx++] = scratchVec3Points[2][1] + p2.position[1];
        data[stripe1Idx++] = scratchVec3Points[2][2] + p2.position[2];
        data[stripe1Idx++] = 0;
        data[stripe1Idx++] = texT;
        data[stripe1Idx++] = scratchVec3Points[3][0] + p2.position[0];
        data[stripe1Idx++] = scratchVec3Points[3][1] + p2.position[1];
        data[stripe1Idx++] = scratchVec3Points[3][2] + p2.position[2];
        data[stripe1Idx++] = 1;
        data[stripe1Idx++] = texT;
      }
      if (needsPrevPos)
        vec3_exports.copy(workData.prevParticlePos, p2.position);
    }
    const globalRes = workData.emitterManager.globalRes;
    const oneStripIndexCount = getTriangleIndexCountForTopologyIndexCount(1 /* TriStrips */, oneStripVertexCount);
    const renderInst1 = renderInstManager.newRenderInst();
    renderInst1.setDrawCount(oneStripIndexCount);
    renderInst1.sortKey = workData.particleSortKey;
    const cache3 = renderInstManager.gfxRenderCache;
    const vertexBuffer = cache3.dynamicBufferCache.allocateData(2 /* Vertex */, new Uint8Array(data.buffer));
    renderInst1.setVertexInput(globalRes.inputLayout, [vertexBuffer], globalRes.inputIndexStripe);
    workData.fillParticleRenderInst(renderInstManager, renderInst1);
    renderInstManager.submitRenderInst(renderInst1);
    if (isCross2) {
      const renderInst2 = renderInstManager.newRenderInst();
      renderInst2.copyFrom(renderInst1);
      renderInst2.setDrawCount(oneStripIndexCount, oneStripIndexCount + 6);
      renderInstManager.submitRenderInst(renderInst2);
    }
  }
  drawQuads(renderInstManager, workData, particleList, sp1) {
    const n = particleList.length;
    if (n === 0)
      return;
    const needsPrevPos = sp1.dirType === 4 /* PrevPctl */;
    if (needsPrevPos)
      this.calcEmitterGlobalPosition(workData.prevParticlePos);
    let sortKeyBias = 0;
    const renderInst = workData.usingInstancing ? renderInstManager.newRenderInst() : renderInstManager.pushTemplate();
    const device2 = workData.emitterManager.cache.device;
    const globalRes = this.emitterManager.globalRes;
    renderInst.setVertexInput(globalRes.inputLayout, globalRes.inputVertexQuad, globalRes.inputIndexQuad);
    renderInst.setDrawCount(isCross(sp1.shapeType) ? 12 : 6);
    workData.aliveParticleNum = 0;
    if (workData.usingInstancing) {
      workData.dataTexture = this.emitterManager.dataTextureManager.allocateTexture(device2, n);
      workData.dataTextureOffs = 0;
      workData.fillEmitterRenderInst(renderInstManager, renderInst);
    }
    const isDrawFwdAhead = this.resData.res.bsp1.isDrawFwdAhead;
    for (let i = 0; i < n; i++) {
      const index = isDrawFwdAhead ? i : n - 1 - i;
      workData.particleSortKey = setSortKeyBias(workData.particleSortKey, sortKeyBias++);
      particleList[index].draw(renderInstManager, workData);
      if (needsPrevPos)
        vec3_exports.copy(workData.prevParticlePos, particleList[index].position);
    }
    if (workData.usingInstancing) {
      if (workData.aliveParticleNum > 0) {
        renderInst.setInstanceCount(workData.aliveParticleNum);
        renderInstManager.submitRenderInst(renderInst);
      } else {
        this.emitterManager.dataTextureManager.returnTexture(workData.dataTexture);
      }
    } else {
      renderInstManager.popTemplate();
    }
  }
  drawP(renderInstManager, workData) {
    const bsp1 = this.resData.res.bsp1;
    const etx1 = this.resData.res.etx1;
    this.status &= ~128 /* CHILD_DRAW */;
    vec2_exports.mul(workData.globalParticleScale, this.globalParticleScale, bsp1.baseSize);
    if (bsp1.shapeType === 0 /* Point */) {
      workData.globalParticleScale[0] *= 1.02;
    } else if (bsp1.shapeType === 1 /* Line */) {
      workData.globalParticleScale[0] *= 1.02;
      workData.globalParticleScale[1] *= 0.4;
    }
    workData.usingInstancing = this.resData.usingInstancingP;
    workData.materialHelper = this.resData.materialHelperP;
    const materialParams3 = workData.materialParams;
    const drawParams2 = workData.drawParams;
    const device2 = this.emitterManager.cache.device;
    if (bsp1.texIdxAnimData === null)
      this.resData.fillTextureMapping(materialParams3.m_TextureMapping[0], bsp1.texIdx);
    else if (bsp1.isGlblTexAnm)
      this.resData.fillTextureMapping(materialParams3.m_TextureMapping[0], this.texAnmIdx);
    else if (workData.usingInstancing) {
      for (let i = 0; i < this.resData.textureIds.length; i++)
        this.resData.fillTextureMapping(materialParams3.m_TextureMapping[i], i);
    }
    if (etx1 !== null) {
      if (etx1.indTextureMode === 1 /* Normal */) {
        const dstIndex = workData.usingInstancing ? 13 : 2;
        this.resData.fillTextureMapping(materialParams3.m_TextureMapping[dstIndex], etx1.indTextureID);
        fillIndTexMtx(materialParams3.u_IndTexMtx[0], etx1.indTextureMtx);
      }
      if (etx1.secondTextureIndex !== -1) {
        const dstIndex = workData.usingInstancing ? 14 : 3;
        this.resData.fillTextureMapping(materialParams3.m_TextureMapping[dstIndex], etx1.secondTextureIndex);
        mat4_exports.identity(materialParams3.u_TexMtx[1]);
      }
    }
    workData.forceTexMtxIdentity = false;
    workData.childDraw = false;
    if (bsp1.shapeType === 0 /* Point */ || bsp1.shapeType === 1 /* Line */)
      mat4_exports.identity(materialParams3.u_TexMtx[0]);
    else if (!bsp1.isEnableTexScrollAnm)
      calcTexCrdMtxIdt(materialParams3.u_TexMtx[0], bsp1);
    if (isStripe(bsp1.shapeType)) {
      colorMult(materialParams3.u_Color[9 /* C0 */], this.colorPrm, workData.baseEmitter.globalColorPrm);
      colorMult(materialParams3.u_Color[10 /* C1 */], this.colorEnv, workData.baseEmitter.globalColorEnv);
      mat4_exports.copy(drawParams2.u_PosMtx[0], workData.posCamMtx);
      if (!calcTexCrdMtxPrj(materialParams3.u_TexMtx[0], workData, workData.posCamMtx, materialParams3.m_TextureMapping[0].flipY)) {
        if (bsp1.isEnableTexScrollAnm)
          calcTexCrdMtxAnm(materialParams3.u_TexMtx[0], bsp1, workData.baseEmitter.age);
      }
    }
    if (this.emitterCallBack !== null)
      this.emitterCallBack.draw(this, device2, renderInstManager);
    if (isStripe(bsp1.shapeType)) {
      this.drawStripe(renderInstManager, workData, this.aliveParticlesBase, bsp1);
    } else {
      this.drawQuads(renderInstManager, workData, this.aliveParticlesBase, bsp1);
    }
  }
  drawC(renderInstManager, workData) {
    const bsp1 = this.resData.res.bsp1;
    const ssp1 = this.resData.res.ssp1;
    const materialParams3 = workData.materialParams;
    this.status |= 128 /* CHILD_DRAW */;
    if (ssp1.isInheritedScale)
      vec2_exports.mul(workData.globalParticleScale, this.globalParticleScale, bsp1.baseSize);
    else
      vec2_exports.mul(workData.globalParticleScale, this.globalParticleScale, ssp1.globalScale2D);
    if (ssp1.shapeType === 0 /* Point */) {
      workData.globalParticleScale[0] *= 1.02;
    } else if (ssp1.shapeType === 1 /* Line */) {
      workData.globalParticleScale[0] *= 1.02;
      workData.globalParticleScale[1] *= 0.4;
    }
    workData.forceTexMtxIdentity = true;
    workData.childDraw = true;
    workData.usingInstancing = this.resData.usingInstancingC;
    workData.materialHelper = this.resData.materialHelperC;
    mat4_exports.identity(materialParams3.u_TexMtx[0]);
    mat4_exports.identity(materialParams3.u_TexMtx[1]);
    workData.baseEmitter.resData.fillTextureMapping(materialParams3.m_TextureMapping[0], ssp1.texIdx);
    if (isStripe(ssp1.shapeType)) {
      colorMult(materialParams3.u_Color[9 /* C0 */], ssp1.colorPrm, workData.baseEmitter.globalColorPrm);
      colorMult(materialParams3.u_Color[10 /* C1 */], ssp1.colorEnv, workData.baseEmitter.globalColorEnv);
      this.drawStripe(renderInstManager, workData, this.aliveParticlesChild, ssp1);
    } else {
      this.drawQuads(renderInstManager, workData, this.aliveParticlesChild, ssp1);
    }
  }
  draw(renderInstManager, workData) {
    if (!!(this.status & 4 /* STOP_DRAW_PARTICLE */) || !this.drawParticle)
      return;
    const bsp1 = this.resData.res.bsp1;
    const ssp1 = this.resData.res.ssp1;
    workData.baseEmitter = this;
    this.calcWorkData_d(workData);
    if (!bsp1.isNoDrawChild && ssp1 !== null && bsp1.isDrawPrntAhead)
      this.drawC(renderInstManager, workData);
    if (!bsp1.isNoDrawParent)
      this.drawP(renderInstManager, workData);
    if (!bsp1.isNoDrawChild && ssp1 !== null && !bsp1.isDrawPrntAhead)
      this.drawC(renderInstManager, workData);
  }
};
_init = __decoratorStart(null);
__decorateElement(_init, 5, "localScale", _localScale_dec, JPABaseEmitter);
__decorateElement(_init, 5, "localTranslation", _localTranslation_dec, JPABaseEmitter);
__decorateElement(_init, 5, "localDirection", _localDirection_dec, JPABaseEmitter);
__decorateElement(_init, 5, "localRotation", _localRotation_dec, JPABaseEmitter);
__decorateElement(_init, 5, "rate", _rate_dec, JPABaseEmitter);
__decorateElement(_init, 5, "volumeSize", _volumeSize_dec, JPABaseEmitter);
__decorateElement(_init, 5, "volumeMinRad", _volumeMinRad_dec, JPABaseEmitter);
__decorateElement(_init, 5, "volumeSweep", _volumeSweep_dec, JPABaseEmitter);
__decorateElement(_init, 5, "awayFromCenterSpeed", _awayFromCenterSpeed_dec, JPABaseEmitter);
__decorateElement(_init, 5, "awayFromYAxisSpeed", _awayFromYAxisSpeed_dec, JPABaseEmitter);
__decorateElement(_init, 5, "directionalSpeed", _directionalSpeed_dec, JPABaseEmitter);
__decorateElement(_init, 5, "randomDirectionSpeed", _randomDirectionSpeed_dec, JPABaseEmitter);
__decorateElement(_init, 5, "colorPrm", _colorPrm_dec, JPABaseEmitter);
__decorateElement(_init, 5, "colorEnv", _colorEnv_dec, JPABaseEmitter);
__decoratorMetadata(_init, JPABaseEmitter);
function calcTexCrdMtxAnm(dst, bsp1, tick) {
  const offsS = 0.5 * bsp1.tilingS;
  const offsT = 0.5 * bsp1.tilingT;
  const translationS = bsp1.texInitTransX + tick * bsp1.texIncTransX + offsS;
  const translationT = bsp1.texInitTransY + tick * bsp1.texIncTransY + offsT;
  const scaleS = bsp1.texInitScaleX + tick * bsp1.texIncScaleX;
  const scaleT = bsp1.texInitScaleY + tick * bsp1.texIncScaleY;
  const rotate3 = (bsp1.texInitRot + tick * bsp1.texIncRot) * 6.283185307179586 /* TAU */ / 65535;
  const sinR = Math.sin(rotate3);
  const cosR = Math.cos(rotate3);
  dst[0] = bsp1.tilingS * scaleS * cosR;
  dst[4] = bsp1.tilingS * scaleS * -sinR;
  dst[8] = 0;
  dst[12] = offsS + scaleS * (sinR * translationT - cosR * translationS);
  dst[1] = bsp1.tilingT * scaleT * sinR;
  dst[5] = bsp1.tilingT * scaleT * cosR;
  dst[9] = 0;
  dst[13] = offsT + -scaleT * (sinR * translationS + cosR * translationT);
  dst[2] = 0;
  dst[6] = 0;
  dst[10] = 1;
  dst[14] = 0;
}
function calcTexCrdMtxIdt(dst, bsp1) {
  const scaleS = bsp1.tilingS;
  const scaleT = bsp1.tilingT;
  dst[0] = scaleS;
  dst[4] = 0;
  dst[8] = 0;
  dst[12] = 0;
  dst[1] = 0;
  dst[5] = scaleT;
  dst[9] = 0;
  dst[13] = 0;
  dst[2] = 0;
  dst[6] = 0;
  dst[10] = 1;
  dst[14] = 0;
}
function mat4SwapTranslationColumns(m) {
  const tx = m[12];
  m[12] = m[8];
  m[8] = tx;
  const ty = m[13];
  m[13] = m[9];
  m[9] = ty;
}
function calcTexCrdMtxPrj(dst, workData, posMtx, flipY) {
  const bsp1 = workData.baseEmitter.resData.res.bsp1;
  if (bsp1.isEnableProjection) {
    if (bsp1.isEnableTexScrollAnm) {
      calcTexCrdMtxAnm(dst, bsp1, workData.baseEmitter.age);
      mat4SwapTranslationColumns(dst);
      mat4_exports.copy(scratchMatrix4, workData.texPrjMtx);
      if (flipY) {
        scratchMatrix4[5] *= -1;
        scratchMatrix4[13] += 2;
      }
      mat4_exports.mul(dst, dst, scratchMatrix4);
      mat4_exports.mul(dst, dst, posMtx);
    } else {
      mat4_exports.copy(scratchMatrix4, workData.texPrjMtx);
      if (flipY) {
        scratchMatrix4[5] *= -1;
        scratchMatrix4[13] += 2;
      }
      mat4_exports.mul(dst, scratchMatrix4, posMtx);
    }
  }
  return bsp1.isEnableProjection;
}
function applyDir(v, p2, dirType, workData) {
  if (dirType === 0 /* Vel */)
    vec3_exports.copy(v, p2.velocity);
  else if (dirType === 1 /* Pos */)
    vec3_exports.copy(v, p2.localPosition);
  else if (dirType === 2 /* PosInv */)
    vec3_exports.negate(v, p2.localPosition);
  else if (dirType === 3 /* EmtrDir */)
    vec3_exports.copy(v, workData.emitterGlobalDir);
  else if (dirType === 4 /* PrevPctl */)
    vec3_exports.sub(v, workData.prevParticlePos, p2.position);
}
var scratchMatrix4 = mat4_exports.create();
var scratchVec3a5 = vec3_exports.create();
var scratchVec3b5 = vec3_exports.create();
var scratchVec3c3 = vec3_exports.create();
var scratchVec3d3 = vec3_exports.create();
var planeXZSwizzle = mat4_exports.fromValues(
  1,
  0,
  0,
  0,
  0,
  0,
  -1,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  1
);
var scratchColor = colorNewFromRGBA(0, 0, 0, 0);
function parseJEFFjpa1(buffer) {
  const view = buffer.createDataView();
  const version = readString(buffer, 0, 8);
  assert(version === "JEFFjpa1" /* JEFFjpa1 */);
  const effects = [];
  effects.push({ resourceId: 0, data: buffer, texIdBase: 0 });
  const textures = [];
  const blockCount = view.getUint32(12);
  let effectTableIdx = 32;
  for (let j = 0; j < blockCount; j++) {
    const blockType = readString(buffer, effectTableIdx + 0, 4);
    const blockSize = view.getUint32(effectTableIdx + 4);
    if (blockType === "TEX1") {
      const textureName = readString(buffer, effectTableIdx + 12, 20, true);
      const texture = BTI.parse(buffer.slice(effectTableIdx + 32, effectTableIdx + blockSize), textureName);
      textures.push(texture);
    }
    effectTableIdx += blockSize;
  }
  return { version, effects, textures };
}
function parseJPAC1_00(buffer) {
  const view = buffer.createDataView();
  const version = readString(buffer, 0, 8);
  assert(version === "JPAC1-00" /* JPAC1_00 */);
  const effectCount = view.getUint16(8);
  const textureCount = view.getUint16(10);
  const effects = [];
  let effectTableIdx = 32;
  for (let i = 0; i < effectCount; i++) {
    const resourceBeginOffs = effectTableIdx;
    const blockCount = view.getUint32(effectTableIdx + 12);
    const resourceId = view.getUint16(effectTableIdx + 24);
    effectTableIdx += 32;
    for (let j = 0; j < blockCount; j++) {
      const blockSize = view.getUint32(effectTableIdx + 4);
      effectTableIdx += blockSize;
    }
    const data = buffer.slice(resourceBeginOffs, effectTableIdx);
    effects.push({ resourceId, data, texIdBase: 0 });
  }
  const textures = [];
  let textureTableIdx = effectTableIdx;
  for (let i = 0; i < textureCount; i++) {
    assert(readString(buffer, textureTableIdx + 0, 4, false) === "TEX1");
    const blockSize = view.getUint32(textureTableIdx + 4);
    const textureName = readString(buffer, textureTableIdx + 12, 20, true);
    const texture = BTI.parse(buffer.slice(textureTableIdx + 32, textureTableIdx + blockSize), textureName);
    textures.push(texture);
    textureTableIdx += blockSize;
  }
  return { version, effects, textures };
}
function parseJPAC2(buffer) {
  const view = buffer.createDataView();
  const version = readString(buffer, 0, 8);
  assert(version === "JPAC2-10" /* JPAC2_10 */ || version === "JPAC2-11" /* JPAC2_11 */);
  const effectCount = view.getUint16(8);
  const textureCount = view.getUint16(10);
  const textureTableOffs = view.getUint32(12);
  const effects = [];
  let effectTableIdx = 16;
  for (let i = 0; i < effectCount; i++) {
    const resourceBeginOffs = effectTableIdx;
    const resourceId = view.getUint16(effectTableIdx + 0);
    const blockCount = view.getUint16(effectTableIdx + 2);
    effectTableIdx += 8;
    for (let j = 0; j < blockCount; j++) {
      const blockSize = view.getUint32(effectTableIdx + 4);
      effectTableIdx += blockSize;
    }
    const data = buffer.slice(resourceBeginOffs, effectTableIdx);
    effects.push({ resourceId, data, texIdBase: 0 });
  }
  const textures = [];
  let textureTableIdx = textureTableOffs;
  for (let i = 0; i < textureCount; i++) {
    assert(readString(buffer, textureTableIdx + 0, 4, false) === "TEX1");
    const blockSize = view.getUint32(textureTableIdx + 4);
    const textureName = readString(buffer, textureTableIdx + 12, 20, true);
    const texture = BTI.parse(buffer.slice(textureTableIdx + 32, textureTableIdx + blockSize), textureName);
    textures.push(texture);
    textureTableIdx += blockSize;
  }
  return { version, effects, textures };
}
function parse2(buffer) {
  const version = readString(buffer, 0, 8);
  if (version === "JEFFjpa1" /* JEFFjpa1 */)
    return parseJEFFjpa1(buffer);
  else if (version === "JPAC1-00" /* JPAC1_00 */)
    return parseJPAC1_00(buffer);
  else if (version === "JPAC2-10" /* JPAC2_10 */ || version === "JPAC2-11" /* JPAC2_11 */)
    return parseJPAC2(buffer);
  else
    throw new Error("whoops");
}

// src/sms_scene.ts
init_MathHelpers();
init_GfxDeviceHelpers();
init_RenderGraphHelpers();
init_GfxRenderGraph();
init_GfxRenderInstManager();
init_gx_material();
init_gx_render();
var sjisDecoder = new TextDecoder("sjis");
function unpack(buffer, sig) {
  const view = buffer.createDataView();
  const result = [];
  let offs = 0;
  let allowExtra = false;
  for (let i = 0; i < sig.length; i++) {
    switch (sig[i]) {
      case "B":
        result.push(view.getUint8(offs));
        offs += 1;
        break;
      case "I":
        result.push(view.getUint32(offs));
        offs += 4;
        break;
      case "i":
        result.push(view.getInt32(offs));
        offs += 4;
        break;
      case "f":
        result.push(view.getFloat32(offs));
        offs += 4;
        break;
      case "s":
        const size = view.getUint16(offs);
        offs += 2;
        result.push(readString(buffer, offs, size, false));
        offs += size;
        break;
      case ".":
        allowExtra = true;
        break;
      case " ":
        break;
      default:
        assert(false);
    }
  }
  if (!allowExtra) {
    assert(buffer.byteLength === offs);
  }
  return [offs, ...result];
}
function readSceneBin(buffer) {
  let offs = 0;
  const view_ = buffer.createDataView();
  const size = view_.getUint32(offs + 0);
  const view = buffer.createDataView(0, size);
  offs += 4;
  const klassHash = view.getUint16(offs + 0);
  const klassSize = view.getUint16(offs + 2);
  offs += 4;
  const klass = readString(buffer, offs, klassSize, false);
  offs += klassSize;
  const nameHash = view.getUint16(offs + 0);
  const nameSize = view.getUint16(offs + 2);
  offs += 4;
  const name = sjisDecoder.decode(buffer.createTypedArray(Uint8Array, offs, nameSize));
  offs += nameSize;
  function readChildren(numChildren) {
    const children = [];
    while (numChildren--) {
      const child = readSceneBin(buffer.slice(offs));
      children.push(child);
      offs += child.size;
    }
    return children;
  }
  const params = buffer.slice(offs, size);
  switch (klass) {
    case "GroupObj":
    case "LightAry":
    case "Strategy":
    case "AmbAry": {
      const [paramsSize, numChildren] = unpack(params, "I.");
      offs += paramsSize;
      const children = readChildren(numChildren);
      return { type: "Group", klass, name, size, children };
    }
    case "IdxGroup":
    case "MarScene": {
      const [paramsSize, groupId, numChildren] = unpack(params, "II.");
      offs += paramsSize;
      const children = readChildren(numChildren);
      return { type: "Group", klass, name, size, children };
    }
    case "AmbColor": {
      const [paramsSize, r, g, b, a] = unpack(params, "BBBB");
      return { type: "AmbColor", klass, name, size, r, g, b, a };
    }
    case "Light": {
      const [paramsSize, x, y, z, r, g, b, a, intensity] = unpack(params, "fffBBBBf");
      return { type: "Light", klass, name, size, x, y, z, r, g, b, a, intensity };
    }
    case "MapStaticObj": {
      const [paramsSize, x, y, z, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, manager, flags, model] = unpack(params, "ffffff fffsi s.");
      return { type: "StaticObj", klass, name, size, x, y, z, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, manager, model };
    }
    case "AirportPool":
    case "AirportSwitch":
    case "AmiKing":
    case "back_nozzle_item":
    case "BalloonKoopaJr":
    case "bambooFence_revolve_inner":
    case "BananaTree":
    case "BasketReverse":
    case "Bathtub":
    case "BellDolpicPolice":
    case "BellDolpicTV":
    case "BellWatermill":
    case "BiaBell":
    case "BiaTurnBridge":
    case "BiaWatermill":
    case "BiaWatermillVertical":
    case "BigWindmill":
    case "bigWindmillBlock":
    case "Billboard":
    case "breakable_block":
    case "BreakableBlock":
    case "BrickBlock":
    case "CasinoPanelGate":
    case "CasinoRoulette":
    case "Castella":
    case "ChangeStage":
    case "ChangeStageMerrygoround":
    case "ChestRevolve":
    case "Closet":
    case "Cogwheel":
    case "cogwheel_plate":
    case "cogwheel_pot":
    case "Coin":
    case "coin_blue":
    case "CoinBlue":
    case "CoinFish":
    case "coin_red":
    case "CoinRed":
    case "CoverFruit":
    case "crane_cargo":
    case "craneCargoUpDown":
    case "CraneRotY":
    case "craneUpDown":
    case "DemoCannon":
    case "DolWeathercock":
    case "Donchou":
    case "Door":
    case "DptMonteFence":
    case "EggYoshi":
    case "EXKickBoard":
    case "EXRollCube":
    case "Fence":
    case "FenceInner":
    case "FenceRevolve":
    case "fence_revolve_inner":
    case "FenceWaterH":
    case "FenceWaterV":
    case "FerrisGondola":
    case "FerrisWheel":
    case "FileLoadBlockA":
    case "FileLoadBlockB":
    case "FileLoadBlockC":
    case "FlowerCoin":
    case "FluffManager":
    case "Football":
    case "Fruit":
    case "FruitBanana":
    case "FruitBasket":
    case "FruitBasketEvent":
    case "FruitDurian":
    case "FruitHitHideObj":
    case "FruitPapaya":
    case "FruitPine":
    case "FruitTree":
    case "GateManta":
    case "GateShell":
    case "GesoSurfBoard":
    case "GetaGreen":
    case "GetaOrange":
    case "GlassBreak":
    case "GoalFlag":
    case "GoalWatermelon":
    case "HangingBridgeBoard":
    case "HideObj":
    case "Hikidashi":
    case "HipDropHideObj":
    case "IceBlock":
    case "IceCar":
    case "Item":
    case "ItemNozzle":
    case "ItemSlotDrum":
    case "joint_coin":
    case "JuiceBlock":
    case "JumpBase":
    case "JumpMushroom":
    case "Kamaboko":
    case "LampSeesaw":
    case "LampSeesawMain":
    case "LampTrapIron":
    case "LampTrapSpike":
    case "LeafBoat":
    case "LeafBoatRotten":
    case "lean_block":
    case "LeanMirror":
    case "MammaBlockRotate":
    case "MammaSurfboard":
    case "MammaYacht":
    case "Manhole":
    case "MapObjBase":
    case "MapObjChangeStage":
    case "MapObjChangeStageHipDrop":
    case "MapObjElasticCode":
    case "MapObjFloatOnSea":
    case "MapObjGeneral":
    case "MapObjGrowTree":
    case "MapObjNail":
    case "MapObjRootPakkun":
    case "MapObjSmoke":
    case "MapObjStartDemo":
    case "MapObjSteam":
    case "MapObjSwitch":
    case "MapObjTreeScale":
    case "MapObjWaterSpray":
    case "MareCork":
    case "MareEventBumpyWall":
    case "MareFall":
    case "maregate":
    case "MareGate":
    case "merry_egg":
    case "Merrygoround":
    case "merry_pole":
    case "MiniWindmill":
    case "MonteRoot":
    case "MonumentShine":
    case "MuddyBoat":
    case "Mushroom1up":
    case "mushroom1up":
    case "Mushroom1upR":
    case "mushroom1upR":
    case "mushroom1upX":
    case "Mushroom1upX":
    case "no_data":
    case "NormalBlock":
    case "NormalLift":
    case "normal_nozzle_item":
    case "NozzleBox":
    case "Palm":
    case "PalmNatume":
    case "PalmOugi":
    case "PalmSago":
    case "PanelBreak":
    case "PanelRevolve":
    case "PictureTeresa":
    case "PinnaCoaster":
    case "PinnaDoor":
    case "PinnaDoorOpen":
    case "PinnaHangingBridgeBoard":
    case "PolluterBase":
    case "Pool":
    case "PosterTeresa":
    case "Puncher":
    case "RailBlock":
    case "RailBlockB":
    case "RailBlockR":
    case "RailBlockY":
    case "RailFence":
    case "RandomFruit":
    case "RedCoinSwitch":
    case "ResetFruit":
    case "RiccoLog":
    case "RiccoSwitch":
    case "RiccoSwitchShine":
    case "riccoWatermill":
    case "RideCloud":
    case "rocket_nozzle_item":
    case "RollBlock":
    case "RollBlockB":
    case "RollBlockR":
    case "RollBlockY":
    case "Roulette":
    case "SakuCasino":
    case "SandBird":
    case "SandBirdBlock":
    case "sand_bird_test":
    case "SandBlock":
    case "SandBomb":
    case "SandBombBase":
    case "SandCastle":
    case "SandEgg":
    case "SandLeaf":
    case "SandLeafBase":
    case "Shine":
    case "SirenabossWall":
    case "SirenaCasinoRoof":
    case "SirenaGate":
    case "SlotDrum":
    case "submarine":
    case "SuperHipDropBlock":
    case "SurfGesoGreen":
    case "SurfGesoRed":
    case "SurfGesoYellow":
    case "SwingBoard":
    case "TelesaBlock":
    case "TelesaSlot":
    case "TurboNozzleDoor":
    case "Uirou":
    case "Umaibou":
    case "Viking":
    case "WaterHitHideObj":
    case "WaterHitPictureHideObj":
    case "WaterMelon":
    case "WatermelonBlock":
    case "WatermelonStatic":
    case "WaterMoveBlock":
    // appears in test11, not actually implemented in game
    case "WaterRecoverObj":
    case "WindmillRoof":
    case "WireBell":
    case "WoodBarrel":
    case "WoodBlock":
    case "WoodBox":
    case "YoshiBlock":
    case "yoshi_whistle_item": {
      const [paramsSize, x, y, z, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, manager, flags, model] = unpack(params, "ffffff fffsi s.");
      return { type: "MapObj", klass, name, size, x, y, z, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, manager, model };
    }
    default:
      let warnUnknown = true;
      if (klass.endsWith("Manager") || klass.endsWith("Mgr"))
        warnUnknown = false;
      if (klass.startsWith("Cube"))
        warnUnknown = false;
      void warnUnknown;
      return { type: "Unknown", klass, name, size };
  }
}
var LightConfig = class {
  lightObj = [];
  LARGE_NUMBER = -1048576;
  initSpecularDir(lit, nx, ny, nz) {
    const hx = -nx, hy = -ny, hz = -(nz - 1);
    vec3_exports.set(lit.Direction, hx, hy, hz);
    vec3_exports.normalize(lit.Direction, lit.Direction);
    const px = nx * this.LARGE_NUMBER;
    const py = ny * this.LARGE_NUMBER;
    const pz = nz * this.LARGE_NUMBER;
    vec3_exports.set(lit.Position, px, py, pz);
  }
  scratchVec3 = vec3_exports.create();
  setOnModelInstance(modelInstance, camera2) {
    const diffSrc = this.lightObj[0];
    const diffDst = modelInstance.getGXLightReference(0);
    vec3_exports.set(diffDst.Position, diffSrc.x, diffSrc.y, diffSrc.z);
    lightSetWorldPosition(diffDst, camera2.viewMatrix, diffDst.Position);
    colorFromRGBA(diffDst.Color, diffSrc.r / 255, diffSrc.g / 255, diffSrc.b / 255, diffSrc.a / 255);
    vec3_exports.set(diffDst.CosAtten, 1, 0, 0);
    vec3_exports.set(diffDst.DistAtten, 1, 0, 0);
    const specSrc = this.lightObj[2];
    const specDst = modelInstance.getGXLightReference(2);
    const v = this.scratchVec3;
    vec3_exports.set(v, specSrc.x, specSrc.y, specSrc.z);
    transformVec3Mat4w1(v, camera2.viewMatrix, v);
    vec3_exports.normalize(v, v);
    this.initSpecularDir(specDst, -v[0], -v[1], -v[2]);
    colorFromRGBA(specDst.Color, specSrc.r / 255, specSrc.g / 255, specSrc.b / 255, specSrc.a / 255);
    vec3_exports.set(specDst.CosAtten, 0, 0, 1);
    vec3_exports.set(specDst.DistAtten, 0.5 * specSrc.intensity, 0, 1 - 0.5 * specSrc.intensity);
  }
};
var SunshineRenderer = class {
  constructor(device2, rarc) {
    this.rarc = rarc;
    this.renderHelper = new GXRenderHelperGfx(device2);
  }
  rarc;
  renderHelper;
  renderInstListSky = new GfxRenderInstList();
  renderInstListMain = new GfxRenderInstList();
  renderInstListInd = new GfxRenderInstList();
  modelInstances = [];
  destroyables = [];
  modelCache = /* @__PURE__ */ new Map();
  effectsCache = /* @__PURE__ */ new Map();
  objLightConfig = null;
  /** The stage's ambient colour for the player (太陽アンビエント（プレイヤー）), if it has one. */
  playerAmbient = null;
  objectAmbient = null;
  /** The scene.bin tree, for the viewer's own use (triggers, objects). */
  sceneBin = null;
  /** Called before the models are prepared each frame (the viewer poses its ghosts there). */
  beforePrepare = null;
  setIndirectTextureOverride(device2) {
    for (let i = 0; i < this.modelInstances.length; i++) {
      const samplers = this.modelInstances[i].tex1Data.tex1.samplers;
      for (let j = 0; j < samplers.length; j++) {
        const m = this.modelInstances[i].materialInstanceState.textureMappings[j];
        if (samplers[j].name === "indirectdummy") {
          m.lateBinding = "opaque-scene-texture";
          m.width = EFB_WIDTH;
          m.height = EFB_HEIGHT;
          m.flipY = gfxDeviceNeedsFlipY(device2);
        }
      }
    }
  }
  preparePass(device2, list, passMask, viewerInput2) {
    const renderInstManager = this.renderHelper.renderInstManager;
    renderInstManager.setCurrentList(list);
    for (let i = 0; i < this.modelInstances.length; i++) {
      const m = this.modelInstances[i];
      if (!(m.passMask & passMask))
        continue;
      m.prepareToRender(device2, renderInstManager, viewerInput2);
    }
  }
  prepareToRender(device2, viewerInput2) {
    if (this.beforePrepare !== null)
      this.beforePrepare(viewerInput2);
    if (this.objLightConfig !== null) {
      for (let i = 0; i < this.modelInstances.length; i++)
        if (!this.modelInstances[i].isPlayer)
          this.objLightConfig.setOnModelInstance(this.modelInstances[i], viewerInput2.camera);
    }
    const template = this.renderHelper.pushTemplateRenderInst();
    fillSceneParamsDataOnTemplate(template, viewerInput2);
    this.preparePass(device2, this.renderInstListSky, 1 /* SKYBOX */, viewerInput2);
    this.preparePass(device2, this.renderInstListMain, 2 /* MAIN */, viewerInput2);
    this.preparePass(device2, this.renderInstListInd, 4 /* INDIRECT */, viewerInput2);
    this.renderHelper.renderInstManager.popTemplate();
  }
  render(device2, viewerInput2) {
    const renderInstManager = this.renderHelper.renderInstManager;
    const builder = this.renderHelper.renderGraph.newGraphBuilder();
    this.setIndirectTextureOverride(device2);
    this.prepareToRender(device2, viewerInput2);
    const mainColorDesc = makeBackbufferDescSimple(0 /* Color0 */, viewerInput2, opaqueBlackFullClearRenderPassDescriptor);
    const mainDepthDesc = makeBackbufferDescSimple(4 /* DepthStencil */, viewerInput2, opaqueBlackFullClearRenderPassDescriptor);
    const mainColorTargetID = builder.createRenderTargetID(mainColorDesc, "Main Color");
    builder.pushPass((pass) => {
      pass.setDebugName("Skybox");
      pass.attachRenderTargetID(0 /* Color0 */, mainColorTargetID);
      const skyboxDepthTargetID = builder.createRenderTargetID(mainDepthDesc, "Skybox Depth");
      pass.attachRenderTargetID(4 /* DepthStencil */, skyboxDepthTargetID);
      pass.exec((passRenderer) => {
        this.renderInstListSky.drawOnPassRenderer(this.renderHelper.renderCache, passRenderer);
      });
    });
    const mainDepthTargetID = builder.createRenderTargetID(mainDepthDesc, "Main Depth");
    builder.pushPass((pass) => {
      pass.setDebugName("Main");
      pass.attachRenderTargetID(0 /* Color0 */, mainColorTargetID);
      pass.attachRenderTargetID(4 /* DepthStencil */, mainDepthTargetID);
      pass.exec((passRenderer) => {
        this.renderInstListMain.drawOnPassRenderer(this.renderHelper.renderCache, passRenderer);
      });
    });
    if (this.renderInstListInd.renderInsts.length > 0) {
      builder.pushPass((pass) => {
        pass.setDebugName("Indirect");
        pass.attachRenderTargetID(0 /* Color0 */, mainColorTargetID);
        pass.attachRenderTargetID(4 /* DepthStencil */, mainDepthTargetID);
        const opaqueSceneTextureID = builder.resolveRenderTarget(mainColorTargetID);
        pass.attachResolveTexture(opaqueSceneTextureID);
        pass.exec((passRenderer, scope) => {
          this.renderInstListInd.resolveLateSamplerBinding("opaque-scene-texture", { gfxTexture: scope.getResolveTextureForID(opaqueSceneTextureID), gfxSampler: null });
          this.renderInstListInd.drawOnPassRenderer(this.renderHelper.renderCache, passRenderer);
        });
      });
    }
    this.renderHelper.antialiasingSupport.pushPasses(builder, viewerInput2, mainColorTargetID);
    builder.resolveRenderTargetToExternalTexture(mainColorTargetID, viewerInput2.onscreenTexture);
    this.renderHelper.prepareToRender();
    builder.execute();
    this.renderInstListSky.reset();
    this.renderInstListMain.reset();
    this.renderInstListInd.reset();
  }
  destroy(device2) {
    this.renderHelper.destroy();
    this.destroyables.forEach((o) => o.destroy(device2));
    this.modelInstances.forEach((instance) => instance.destroy(device2));
    for (const v of this.modelCache.values())
      v.destroy(device2);
  }
};
var SunshineSceneDesc = class _SunshineSceneDesc {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  id;
  name;
  ambAry;
  playerAmbIndex = -1;
  objectsAmbIndex = -1;
  static createSunshineSceneForBasename(device2, cache3, passMask, rarc, basename, isSkybox) {
    const bmdFile = rarc.findFile(`${basename}.bmd`);
    if (!bmdFile)
      return null;
    const btkFile = rarc.findFile(`${basename}.btk`);
    const brkFile = rarc.findFile(`${basename}.brk`);
    const bckFile = rarc.findFile(`${basename}.bck`);
    const bmtFile = rarc.findFile(`${basename}.bmt`);
    const bmd = BMD.parse(bmdFile.buffer);
    const bmdModel = new J3DModelData2(device2, cache3, bmd);
    const modelInstance = new J3DModelInstanceSimple(bmdModel);
    if (bmtFile !== null)
      modelInstance.setModelMaterialDataOwned(new J3DModelMaterialData(device2, cache3, BMT.parse(bmtFile.buffer)));
    if (btkFile !== null)
      modelInstance.bindTTK1(BTK.parse(btkFile.buffer));
    if (brkFile !== null)
      modelInstance.bindTRK1(BRK.parse(brkFile.buffer));
    if (bckFile !== null)
      modelInstance.bindANK1(BCK.parse(bckFile.buffer));
    modelInstance.name = basename;
    modelInstance.isSkybox = isSkybox;
    modelInstance.passMask = passMask;
    return modelInstance;
  }
  createScene(device2, context) {
    const pathBase = `SuperMarioSunshine`;
    const path = `${pathBase}/${this.id}.szs`;
    const dataFetcher = context.dataFetcher;
    return dataFetcher.fetchData(path).then((result) => {
      return decompress(result);
    }).then((buffer) => {
      const rarc = parse(buffer);
      const sceneBinObj = readSceneBin(rarc.findFileData("map/scene.bin"));
      const renderer2 = new SunshineRenderer(device2, rarc);
      renderer2.sceneBin = sceneBinObj;
      const cache3 = renderer2.renderHelper.renderInstManager.gfxRenderCache;
      const sky = _SunshineSceneDesc.createSunshineSceneForBasename(device2, cache3, 1 /* SKYBOX */, rarc, "map/map/sky", true);
      if (sky !== null)
        renderer2.modelInstances.push(sky);
      const map = _SunshineSceneDesc.createSunshineSceneForBasename(device2, cache3, 2 /* MAIN */, rarc, "map/map/map", false);
      if (map !== null)
        renderer2.modelInstances.push(map);
      const sea = _SunshineSceneDesc.createSunshineSceneForBasename(device2, cache3, 2 /* MAIN */, rarc, "map/map/sea", false);
      if (sea !== null)
        renderer2.modelInstances.push(sea);
      const seaIndirect = _SunshineSceneDesc.createSunshineSceneForBasename(device2, cache3, 4 /* INDIRECT */, rarc, "map/map/seaindirect", false);
      if (seaIndirect !== null)
        renderer2.modelInstances.push(seaIndirect);
      this.createSceneBinObjects(device2, cache3, renderer2, rarc, sceneBinObj);
      for (let i = 0; i < renderer2.modelInstances.length; i++) {
        this.setUpAmbientLight(renderer2.modelInstances[i]);
      }
      return renderer2;
    });
  }
  createSceneBinObjects(device2, cache3, renderer2, rarc, obj) {
    if (obj.type === "Group") {
      obj.children.forEach((c) => this.createSceneBinObjects(device2, cache3, renderer2, rarc, c));
      if (obj.klass === "LightAry") {
        renderer2.objLightConfig = new LightConfig();
        renderer2.objLightConfig.lightObj[0] = assertExists(obj.children.find((light) => light.name === "\u592A\u967D\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF09"));
        renderer2.objLightConfig.lightObj[1] = assertExists(obj.children.find((light) => light.name === "\u592A\u967D\u30B5\u30D6\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF09"));
        renderer2.objLightConfig.lightObj[2] = assertExists(obj.children.find((light) => light.name === "\u592A\u967D\u30B9\u30DA\u30AD\u30E5\u30E9\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF09"));
      } else if (obj.klass === "AmbAry") {
        this.ambAry = obj;
        this.objectsAmbIndex = obj.children.findIndex((ambColor) => ambColor.name === "\u592A\u967D\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF09");
        this.playerAmbIndex = obj.children.findIndex((ambColor) => ambColor.name === "\u592A\u967D\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\uFF08\u30D7\u30EC\u30A4\u30E4\u30FC\uFF09");
        if (this.objectsAmbIndex >= 0) renderer2.objectAmbient = obj.children[this.objectsAmbIndex];
        if (this.playerAmbIndex >= 0) renderer2.playerAmbient = obj.children[this.playerAmbIndex];
      }
    } else if (obj.type === "MapObj") {
      this.createRendererForSceneBinMapObj(device2, cache3, renderer2, rarc, obj);
    } else if (obj.type === "StaticObj") {
      this.createRendererForSceneBinStaticObj(device2, cache3, renderer2, rarc, obj);
    }
  }
  setUpAmbientLight(modelInstance) {
    if (this.objectsAmbIndex !== -1 && modelInstance.modelMaterialData.materialData !== null) {
      const ambColor = this.ambAry.children[this.objectsAmbIndex];
      modelInstance.modelMaterialData.materialData.forEach((matData) => colorFromRGBA(matData.material.colorAmbRegs[0], ambColor.r / 255, ambColor.g / 255, ambColor.b / 255, ambColor.a / 255));
    }
  }
  createRendererForSceneBinMapObj(device2, cache3, renderer2, rarc, obj) {
    ;
    const modelCache = renderer2.modelCache;
    function lookupModel(bmdFile) {
      assert(!!bmdFile);
      if (modelCache.has(bmdFile)) {
        return modelCache.get(bmdFile);
      } else {
        const bmd = BMD.parse(bmdFile.buffer);
        const bmdModel = new J3DModelData2(device2, cache3, bmd);
        modelCache.set(bmdFile, bmdModel);
        return bmdModel;
      }
    }
    const modelLookup = [
      { k: "AirportPole" },
      { k: "amiking", m: "amiking_model1.bmd" },
      { k: "ArrowBoardDown", t: "ArrowBoard" },
      { k: "ArrowBoardLR", t: "ArrowBoard" },
      { k: "ArrowBoardUp", t: "ArrowBoard" },
      { k: "balloonKoopaJr", m: "balloonKoopaJr.bmd", n: "balloonkoopajr_wait", u: 0 },
      { k: "baloonball", m: "soccerball.bmd" },
      { k: "bambooRailFence", m: "bambooFence_rail.bmd" },
      { k: "BananaTree", m: "BananaTree.bmd" },
      { k: "barrel_oil", m: "barrel_oil.bmd" },
      { k: "BasketReverse", m: "Basket.bmd" },
      { k: "bath", m: "bath.bmd" },
      { k: "belldolpic", m: "BellDolpic.bmd" },
      { k: "BiaBell", m: "BiaBell.bmd" },
      { k: "BiaWatermill00", m: "BiaWatermill00.bmd" },
      { k: "bigWindmill", t: "bianco", m: "bigWindmill.bmd" },
      { k: "billboard_dolphin", m: "billboardDol.bmd" },
      { k: "billboard_fish", m: "billboardFish.bmd" },
      { k: "billboard_restaurant", m: "billboardRestaurant.bmd" },
      { k: "billboard_sun", m: "billboardSun.bmd" },
      { k: "breakable_block", m: "breakable_block.bmd" },
      { k: "BrickBlock", t: "BrickBlock", m: "BrickBlock.bmd" },
      { k: "castella", m: "castella.bmd" },
      { k: "ChangeStage" },
      { k: "ChangeStageMerrygoround" },
      { k: "ChestRevolve", m: "ChestRevolve.bmd" },
      { k: "ChipShine", m: "chip_shine_model1.bmd" },
      { k: "Closet", m: "closet.bmd", n: "ClosetOpen", u: 0 },
      { k: "cloud", m: "cloud.bmd", n: "cloud_wait", u: 0 },
      { k: "cluster_block", m: "test_cluster.bmd" },
      { k: "coconut_ball", m: "soccerball.bmd" },
      { k: "cogwheel", m: "cogwheel_wheel.bmd" },
      { k: "CoinFish", m: "CoinFish.bmd", n: "coinfish", u: 0 },
      { k: "DokanGate", m: "efDokanGate.bmd", n: "efdokangate", u: 4 },
      { k: "doorHotel", m: "doorHotel.bmd" },
      { k: "dptlight", m: "dptlight.bmd" },
      { k: "dptWeathercock", m: "DptWeathercock.bmd", n: "dptweathercock", u: 0 },
      { k: "drum_can", m: "drum_can_model.bmd" },
      { k: "eggYoshiEvent", m: "eggYoshi_normal.bmd", n: "eggyoshi_wait", u: 0 },
      { k: "eggYoshi", m: "eggYoshi_normal.bmd", n: "eggyoshi_wait", u: 0 },
      { k: "ex1_turn_lift", m: "TurnLift.bmd" },
      { k: "exkickboard", m: "EXKickBoard.bmd" },
      { k: "expand_block", m: "breakable_block.bmd" },
      { k: "exrollcube", m: "EXRollCube.bmd" },
      { k: "fall_slow_block", m: "breakable_block.bmd" },
      { k: "fence3x3", m: "fence_half.bmd" },
      { k: "fence_revolve", m: "fence_revolve_outer.bmd" },
      { k: "FerrisLOD", m: "FerrisLOD.bmd", n: "ferrislod", u: 0 },
      { k: "FerrisWheel", m: "FerrisWheel.bmd", n: "ferriswheel", u: 0 },
      { k: "FileLoadBlockA", m: "FileLoadBlockA.bmd" },
      { k: "FileLoadBlockB", m: "FileLoadBlockB.bmd" },
      { k: "FileLoadBlockC", m: "FileLoadBlockC.bmd" },
      { k: "flowerOrange", t: "flower", m: "flowerOrange.bmd" },
      { k: "flowerPink", t: "flower", m: "flowerPink.bmd" },
      { k: "flowerPurple", t: "flower", m: "flowerPurple.bmd" },
      { k: "flowerRed", t: "flower", m: "flowerRed.bmd" },
      { k: "flowerSunflower", t: "flower", m: "flowerSunflower.bmd" },
      { k: "flowerYellow", t: "flower", m: "flowerYellow.bmd" },
      { k: "FluffManager" },
      { k: "Fluff", m: "Watage.bmd" },
      { k: "football_goal", m: "soccergoal_model.bmd" },
      { k: "football", m: "soccerball.bmd" },
      { k: "FruitBasket", m: "Basket.bmd" },
      { k: "FruitCoverPine", m: "FruitPine.bmd" },
      { k: "FruitHitHideObj" },
      { k: "GateManta", m: "GateManta.bmd", n: "gatemanta", u: 0 },
      { k: "Gateshell", m: "Gateshell.bmd", n: "gateshell", u: 0 },
      { k: "GeneralHitObj" },
      { k: "GesoSurfBoard", m: "surf_geso.bmd" },
      { k: "GesoSurfBoardStatic", m: "surf_geso.bmd" },
      { k: "getag", m: "getaGreen.bmd" },
      { k: "getao", m: "getaOrange.bmd" },
      { k: "GlassBreak", m: "GlassBreak.bmd" },
      { k: "GoalWatermelon" },
      { k: "HangingBridge" },
      { k: "HangingBridgeBoard", m: "mon_bri.bmd" },
      { k: "HatoPop", m: "hatopop_model1.bmd" },
      { k: "HideObj" },
      { k: "hikidashi", m: "hikidashi.bmd" },
      { k: "HipDropHideObj" },
      { k: "ice_car", m: "yatai.bmd" },
      { k: "invisible_coin" },
      { k: "joint_coin", m: "coin.bmd" },
      { k: "jumpbase", m: "jumpbase.bmd" },
      { k: "JumpMushroom", m: "JumpKinoko.bmd" },
      { k: "kamaboko", m: "kamaboko.bmd" },
      { k: "KoopaJrSignM", m: "koopa_jr_sign.bmd" },
      { k: "lampBianco", m: "lampBianco.bmd" },
      { k: "LampSeesaw", m: "lampBianco.bmd" },
      { k: "lamptrapiron", m: "lamptrapiron.bmd" },
      { k: "lamptrapspike", m: "lamptrapspike.bmd" },
      { k: "LeafBoatRotten", t: "LeafBoat" },
      { k: "LeafBoat", t: "LeafBoat" },
      { k: "lean_block", m: "breakable_block.bmd" },
      { k: "lean_direct_block", m: "breakable_block.bmd" },
      { k: "lean_indirect_block", m: "breakable_block.bmd" },
      { k: "manhole", m: "manhole.bmd", n: "manhole", u: 0 },
      { k: "MapObjNail", m: "kugi.bmd" },
      { k: "MapObjPachinkoNail", m: "PachinkoKugi.bmd" },
      { k: "MapSmoke" },
      { k: "MareEventBumpyWall" },
      { k: "mareFall", m: "MareFall.bmd", n: "marefall", u: 4 },
      { k: "maregate", m: "maregate.bmd", n: "maregate", u: 4 },
      { k: "mario_cap", m: "mariocap.bmd" },
      { k: "merry", m: "merry.bmd", n: "merry", u: 0 },
      { k: "merry_pole" },
      { k: "MiniWindmillL", t: "bianco" },
      { k: "MiniWindmillS", t: "bianco" },
      { k: "monte_chair", m: "monte_chair_model.bmd" },
      { k: "MonteGoalFlag", m: "monteflag.bmd", n: "monteflag_wait", u: 0 },
      { k: "MonteRoot", m: "nekko.bmd" },
      { k: "monumentshine", m: "monumentshine.bmd" },
      { k: "move_block", m: "breakable_block.bmd" },
      { k: "MoveCoin", m: "SandMoveCoin.bmd", n: "sandmovecoin", u: 0 },
      { k: "Moyasi", m: "Moyasi.bmd", n: "moyasi_wait", u: 0 },
      { k: "MuddyBoat", m: "MuddyBoat.bmd" },
      { k: "mushroom1up", m: "mushroom1up.bmd" },
      { k: "mushroom1upR", m: "mushroom1up.bmd" },
      { k: "mushroom1upX", m: "mushroom1up.bmd" },
      { k: "no_data" },
      { k: "normallift", m: "NormalBlock.bmd" },
      { k: "normal_nozzle_item", t: "nozzleItem" },
      { k: "NozzleBox", t: "nozzleBox", m: "nozzleBox.bmd" },
      { k: "nozzleDoor", m: "nozzleDoor.bmd" },
      { k: "palmLeaf", m: "palmLeaf.bmd" },
      { k: "palmNormal", m: "palmNormal.bmd" },
      { k: "PanelBreak", m: "PanelBreak.bmd" },
      { k: "PanelRevolve", m: "PanelRevolve.bmd" },
      { k: "PinnaHangingBridgeBoard", m: "PinnaBoard.bmd" },
      { k: "PoleNormal" },
      { k: "Puncher", m: "puncher_model1.bmd" },
      { k: "railblockb", m: "AllPurposeBoardB.bmd" },
      { k: "railblockr", m: "AllPurposeBoardR.bmd" },
      { k: "railblocky", m: "AllPurposeBoardY.bmd" },
      { k: "RailFence", m: "fence_normal.bmd" },
      { k: "riccoBoatL", t: "riccoShip" },
      { k: "riccoBoatS", t: "riccoShip" },
      { k: "riccoPole" },
      { k: "riccoShipDol", t: "riccoShip" },
      { k: "riccoShipLog", t: "riccoShip" },
      { k: "riccoShip", t: "riccoShip" },
      { k: "riccoSwitchShine" },
      { k: "riccoYachtL", t: "riccoShip" },
      { k: "riccoYachtS", t: "riccoShip" },
      { k: "rollblockb", m: "AllPurposeBoardB.bmd" },
      { k: "rollblockr", m: "AllPurposeBoardR.bmd" },
      { k: "rollblocky", m: "AllPurposeBoardY.bmd" },
      { k: "rulet00", m: "rulet00.bmd", n: "rulet00", u: 0 },
      { k: "SandBird", m: "SandBird.bmd", n: "sandbird", u: 0 },
      { k: "sand_block", m: "SandBlock.bmd" },
      { k: "SandBombBase00", t: "SandBombBase", m: "SandBombBase00.bmd" },
      { k: "SandBombBaseFoot", t: "SandBombBase", m: "SandBombBaseFoot.bmd" },
      { k: "SandBombBaseHand", t: "SandBombBase", m: "SandBombBaseHand.bmd" },
      { k: "SandBombBaseMushroom", t: "SandBombBase", m: "SandBombBaseMushroom.bmd" },
      { k: "SandBombBasePyramid", t: "SandBombBase", m: "SandBombBasePyramid.bmd" },
      { k: "SandBombBaseShit", t: "SandBombBase", m: "SandBombBaseShit.bmd" },
      { k: "SandBombBaseStairs", t: "SandBombBase", m: "SandBombBaseStairs.bmd" },
      { k: "SandBombBaseStar", t: "SandBombBase", m: "SandBombBaseStar.bmd" },
      { k: "SandBombBaseTurtle", t: "SandBombBase", m: "SandBombBaseTurtle.bmd" },
      { k: "SandBomb", m: "SandBomb.bmd", n: "sandbomb_wait", u: 0 },
      { k: "SandCastle", t: "SandBombBase", m: "SandCastle.bmd" },
      { k: "SandLeafBase00", m: "SandLeafBase00.bmd" },
      { k: "SandLeafBase01", m: "SandLeafBase01.bmd" },
      { k: "SandLeafBase02", m: "SandLeafBase02.bmd" },
      { k: "SandLeafBase03", m: "SandLeafBase03.bmd" },
      { k: "SandLeaf", m: "SandLeaf.bmd", n: "sandleaf_wait", u: 0 },
      { k: "ShellCup", m: "ShellCup.bmd", n: "shellcup", u: 0 },
      { k: "shine", m: "shine.bmd", n: "shine_float", u: 0 },
      { k: "SignCircle", m: "maru_sign.bmd" },
      { k: "SignCross", m: "batu_sign.bmd" },
      { k: "SignTriangle", m: "3kaku_sign.bmd" },
      { k: "SirenabossWall", m: "boss_wall.bmd" },
      { k: "SirenaCasinoRoof", m: "casino_lighting.bmd", n: "casino_lighting", u: 5 },
      { k: "skate_block", m: "breakable_block.bmd" },
      { k: "SkyIsland", m: "SkyIsland.bmd", n: "skyisland", u: 0 },
      { k: "spread_block", m: "breakable_block.bmd" },
      { k: "stand_break", m: "stand_break.bmd", n: "stand_break0", u: 0 },
      { k: "StartDemo" },
      { k: "SuperHipDropBlock", m: "super_rock.bmd" },
      { k: "supermario_block", m: "breakable_block.bmd" },
      { k: "SurfGesoGreen" },
      { k: "SurfGesoRed" },
      { k: "SurfGesoYellow" },
      { k: "TeethOfJuicer", m: "TeethOfJuicer.bmd", n: "teethofjuicer", u: 0 },
      { k: "uirou", m: "uirou.bmd" },
      { k: "umaibou", m: "umaibou.bmd" },
      { k: "WaterHitHideObj" },
      { k: "WaterMelonBlock", t: "WaterMelon", m: "WaterMelonBlock.bmd" },
      { k: "watermelon", m: "watermelon.bmd" },
      { k: "WatermelonStatic", m: "watermelon.bmd" },
      { k: "water_power_inertial_lift", m: "breakable_block.bmd" },
      { k: "water_power_lift", m: "breakable_block.bmd" },
      { k: "water_power_ship", m: "breakable_block.bmd" },
      { k: "WaterRecoverObj" },
      { k: "water_roll_block", m: "water_roll_block.bmd" },
      { k: "WaterSprayBox" },
      { k: "WaterSprayCylinder" },
      { k: "windmill_far", m: "bigWindmill.bmd" },
      { k: "wood_barrel_once", t: "barrel", m: "barrel_normal.bmd" },
      { k: "wood_barrel", t: "barrel", m: "barrel_normal.bmd" },
      { k: "WoodBox", t: "kibako", m: "kibako.bmd" },
      { k: "yoshiblock", m: "yoshiblock.bmd" },
      { k: "yTurnLift", m: "yTurnLift.bmd" }
    ];
    let modelEntry = modelLookup.find((lt) => obj.model === lt.k);
    if (modelEntry === void 0 || modelEntry.t && !modelEntry.m) {
      const bmdFile = rarc.findFile(`mapobj/${obj.model.toLowerCase()}.bmd`);
      if (bmdFile) {
        if (modelEntry === void 0)
          modelEntry = { k: obj.model, m: `${obj.model}.bmd` };
        else
          modelEntry.m = `${obj.model}.bmd`;
      }
    }
    if (modelEntry === void 0) {
      console.warn(`No model for ${obj.klass} ${obj.model}`);
      return null;
    }
    let modelInstance = null;
    if (modelEntry.m !== void 0) {
      const bmdFilename = `mapobj/${modelEntry.m.toLowerCase()}`;
      const bmdFile = assertExists(rarc.findFile(bmdFilename), bmdFilename);
      const bmdModel = lookupModel(bmdFile);
      modelInstance = new J3DModelInstanceSimple(bmdModel);
      modelInstance.passMask = 2 /* MAIN */;
    }
    if (modelInstance === null) {
      console.log(`couldn't load ${JSON.stringify(modelEntry)}`);
      return null;
    }
    if (modelEntry.t !== void 0) {
      const bmtFilename = `mapobj/${modelEntry.t.toLowerCase()}.bmt`;
      const bmtFile = rarc.findFile(bmtFilename);
      if (bmtFile !== null) {
        const modelMaterialData = new J3DModelMaterialData(device2, cache3, BMT.parse(bmtFile.buffer));
        renderer2.destroyables.push(modelMaterialData);
        modelInstance.setModelMaterialData(modelMaterialData);
      }
    }
    if (modelEntry.n) {
      switch (modelEntry.u) {
        case 0: {
          const anmFile = rarc.findFile(`mapobj/${modelEntry.n.toLowerCase()}.bck`);
          if (anmFile !== null) {
            const anm = BCK.parse(anmFile.buffer);
            modelInstance.bindANK1(anm);
          }
          break;
        }
        case 2: {
          const anmFile = assertExists(rarc.findFile(`mapobj/${modelEntry.n.toLowerCase()}.bpk`));
          const anm = BPK.parse(anmFile.buffer);
          modelInstance.bindTRK1(anm);
          break;
        }
        case 3: {
          const anmFile = assertExists(rarc.findFile(`mapobj/${modelEntry.n.toLowerCase()}.btp`));
          const anm = BTP.parse(anmFile.buffer);
          modelInstance.bindTPT1(anm);
          break;
        }
        case 4: {
          const anmFile = assertExists(rarc.findFile(`mapobj/${modelEntry.n.toLowerCase()}.btk`));
          const anm = BTK.parse(anmFile.buffer);
          modelInstance.bindTTK1(anm);
          break;
        }
        case 5: {
          const anmFile = assertExists(rarc.findFile(`mapobj/${modelEntry.n.toLowerCase()}.brk`));
          const anm = BRK.parse(anmFile.buffer);
          modelInstance.bindTRK1(anm);
          break;
        }
        default:
          throw `unhandled animation type ${modelEntry.u}`;
      }
    }
    const q = quat_exports.create();
    quat_exports.fromEuler(q, obj.rotationX, obj.rotationY, obj.rotationZ);
    mat4_exports.fromRotationTranslationScale(modelInstance.modelMatrix, q, [obj.x, obj.y, obj.z], [obj.scaleX, obj.scaleY, obj.scaleZ]);
    renderer2.modelInstances.push(modelInstance);
    return modelInstance;
  }
  createRendererForSceneBinStaticObj(device2, cache3, renderer2, rarc, obj) {
    ;
    const modelCache = renderer2.modelCache;
    function lookupModel(bmdFile) {
      assert(!!bmdFile);
      if (modelCache.has(bmdFile)) {
        return modelCache.get(bmdFile);
      } else {
        const bmd = BMD.parse(bmdFile.buffer);
        const bmdModel = new J3DModelData2(device2, cache3, bmd);
        modelCache.set(bmdFile, bmdModel);
        return bmdModel;
      }
    }
    const effectsCache = renderer2.effectsCache;
    function lookupEffect(jpaFile) {
      assert(!!jpaFile);
      if (effectsCache.has(jpaFile)) {
        return effectsCache.get(jpaFile);
      } else {
        const jpa = parse2(jpaFile.buffer);
        const jpaEffect = new JPACData(jpa);
        effectsCache.set(jpaFile, jpaEffect);
        return jpaEffect;
      }
    }
    const modelLookup = [
      { k: "BiancoBossEffectLight", p: "map/map/ms_wmlin_light.jpa" },
      { k: "BiancoRiver", m: "BiancoRiver" },
      { k: "BiaWaterPollution", m: "BiaWaterPollution" },
      { k: "IndirectObj", m: "IndirectObj" },
      { k: "Mare5ExGate", m: "Mare5ExGate" },
      { k: "mareSeaPollutionS0", m: "mareSeaPollutionS0" },
      { k: "mareSeaPollutionS12", m: "mareSeaPollutionS12" },
      { k: "MonteRiver", m: "MonteRiver" },
      //{ k: 'ReflectParts', m: 'ReflectParts' },
      //{ k: 'ReflectSky', m: 'ReflectSky' },
      { k: "riccoSeaPollutionS0", m: "riccoSeaPollutionS0" },
      { k: "riccoSeaPollutionS1", m: "riccoSeaPollutionS1" },
      { k: "riccoSeaPollutionS2", m: "riccoSeaPollutionS2" },
      { k: "riccoSeaPollutionS3", m: "riccoSeaPollutionS3" },
      { k: "riccoSeaPollutionS4", m: "riccoSeaPollutionS4" },
      //{ k: 'SeaIndirect', m: 'SeaIndirect' },
      //{ k: 'sea', m: 'sea' },
      { k: "sun_mirror", m: "sun_mirror" },
      { k: "TargetArrow", m: "TargetArrow" },
      { k: "TopOfCorona", p: "mapObj/ms_coronasmoke.jpa" }
    ];
    let modelEntry = modelLookup.find((lt) => obj.model === lt.k);
    if (modelEntry === void 0) {
      console.warn(`No model for ${obj.klass} ${obj.model}`);
      return null;
    }
    let modelInstance = null;
    if (modelEntry.m !== void 0) {
      const bmdFilename = `map/map/${modelEntry.m.toLowerCase()}.bmd`;
      const bmdFile = assertExists(rarc.findFile(bmdFilename), bmdFilename);
      const bmdModel = lookupModel(bmdFile);
      modelInstance = new J3DModelInstanceSimple(bmdModel);
      modelInstance.passMask = 2 /* MAIN */;
    }
    if (modelEntry.p !== void 0) {
      const jpaFilename = modelEntry.p.toLowerCase();
      const jpaFile = assertExists(rarc.findFile(jpaFilename), jpaFilename);
      const jpaData = lookupEffect(jpaFile);
    }
    if (modelInstance === null) {
      console.log(`couldn't load ${JSON.stringify(modelEntry)}`);
      return null;
    }
    const q = quat_exports.create();
    quat_exports.fromEuler(q, obj.rotationX, obj.rotationY, obj.rotationZ);
    mat4_exports.fromRotationTranslationScale(modelInstance.modelMatrix, q, [obj.x, obj.y, obj.z], [obj.scaleX, obj.scaleY, obj.scaleZ]);
    renderer2.modelInstances.push(modelInstance);
    return modelInstance;
  }
};
var sceneDescs = [
  "Delfino Airstrip",
  new SunshineSceneDesc("airport0", "Delfino Airstrip (first visit)"),
  new SunshineSceneDesc("airport1", "Delfino Airstrip (after defeating proto piranha plant)"),
  "Delfino Plaza",
  new SunshineSceneDesc("dolpic0", "Delfino Plaza (first visit)"),
  new SunshineSceneDesc("dolpic1", "Delfino Plaza (after defeating proto piranha plant)"),
  new SunshineSceneDesc("dolpic5", "Delfino Plaza (after unlocking Bianco Hills)"),
  new SunshineSceneDesc("dolpic6", "Delfino Plaza (after unlocking Ricco Harbor and Gelato Beach)"),
  new SunshineSceneDesc("dolpic7", "Delfino Plaza (after collecting 10 Shine Sprites)"),
  new SunshineSceneDesc("dolpic8", "Delfino Plaza (after unlocking Pinna Park)"),
  new SunshineSceneDesc("dolpic9", "Delfino Plaza (after collecting all 7th Shine Sprites)"),
  new SunshineSceneDesc("dolpic10", "Delfino Plaza (after visiting Corona Mountain)"),
  new SunshineSceneDesc("dolpic_ex0", "Delfino Airstrip (red coins)"),
  new SunshineSceneDesc("dolpic_ex1", "Delfino Plaza (eastern pillar secret)"),
  new SunshineSceneDesc("dolpic_ex2", "Delfino Plaza (secret under the bridge)"),
  new SunshineSceneDesc("dolpic_ex3", "Delfino Plaza (western palm secret)"),
  new SunshineSceneDesc("dolpic_ex4", "Delfino Plaza (Yoshi boat ride secret)"),
  new SunshineSceneDesc("bia_ex1", "Delfino Plaza (police station secret)"),
  "Bianco Hills",
  new SunshineSceneDesc("bianco0", "Road to the Big Windmill"),
  new SunshineSceneDesc("bianco1", "Down with Petey Piranha! (introduction)"),
  new SunshineSceneDesc("biancoBoss", "Down with Petey Piranha! (boss fight)"),
  new SunshineSceneDesc("bianco2", "The Hillside Cave Secret (introduction)"),
  new SunshineSceneDesc("coro_ex1", "The Hillside Cave Secret (secret area)"),
  new SunshineSceneDesc("bianco3", "Red Coins of Windmill Village"),
  new SunshineSceneDesc("bianco4", "Petey Piranha Strikes Back"),
  new SunshineSceneDesc("bianco7", "The Secret of the Dirty Lake (introduction)"),
  new SunshineSceneDesc("coro_ex0", "The Secret of the Dirty Lake (secret area)"),
  new SunshineSceneDesc("bianco6", "Shadow Mario on the Loose"),
  new SunshineSceneDesc("bianco5", "The Red Coins of the Lake"),
  "Ricco Harbor",
  new SunshineSceneDesc("ricco0", "Gooper Blooper Breaks Out (introduction)"),
  new SunshineSceneDesc("ricco8", "Gooper Blooper Breaks Out (boss fight)"),
  new SunshineSceneDesc("ricco1", "Blooper Surfing Safari (introduction)"),
  new SunshineSceneDesc("rico_ex0", "Blooper Surfing Safari (racing area)"),
  new SunshineSceneDesc("ricco2", "The Caged Shine Sprite"),
  new SunshineSceneDesc("ricco3", "The Secret of Ricco Tower"),
  new SunshineSceneDesc("coro_ex2", "The Secret of Ricco Tower (secret area)"),
  new SunshineSceneDesc("ricco4", "Gooper Blooper Returns"),
  new SunshineSceneDesc("ricco5", "Red Coins on the Water"),
  new SunshineSceneDesc("ricco6", "Shadow Mario Revisited"),
  new SunshineSceneDesc("ricco7", "Yoshi's Fruit Adventure"),
  "Gelato Beach",
  new SunshineSceneDesc("mamma0", "Dune Bud Sand Castle Secret (introduction)"),
  new SunshineSceneDesc("mam_ex0", "Dune Bud Sand Castle Secret (secret area)"),
  new SunshineSceneDesc("mamma1", "Mirror Madness! Tilt, Slam, Bam!"),
  new SunshineSceneDesc("mamma2", "Wiggler Ahoy! Full Steam Ahead!"),
  new SunshineSceneDesc("mamma3", "The Sand Bird is Born (introduction)"),
  new SunshineSceneDesc("mam_ex1", "The Sand Bird is Born (Sand Bird)"),
  new SunshineSceneDesc("mamma4", "Il Piantissimo's Sand Sprint"),
  new SunshineSceneDesc("mamma5", "Red Coins in the Coral Reef"),
  new SunshineSceneDesc("mamma6", "It's Shadow Mario! After Him!"),
  new SunshineSceneDesc("mamma7", "The Watermelon Festival"),
  "Pinna Park Beach",
  new SunshineSceneDesc("pinnaBeach0", "Mecha-Bowser Appears!"),
  new SunshineSceneDesc("pinnaBeach1", "The Beach Cannon's Secret (introduction)"),
  new SunshineSceneDesc("coro_ex4", "The Beach Cannon's Secret (secret area)"),
  new SunshineSceneDesc("pinnaBeach3", "Red Coins of the Pirate Ships"),
  new SunshineSceneDesc("pinnaBeach2", "The Wilted Sunflowers"),
  new SunshineSceneDesc("pinnaBeach4", "The Runaway Ferris Wheel/The Yoshi-Go-Round's Secret/Shadow Mario in the Park/Roller Coaster Balloons"),
  "Pinna Park",
  new SunshineSceneDesc("pinnaParco0", "Mecha-Bowser Appears! (introduction)"),
  new SunshineSceneDesc("pinnaParco6", "Mecha-Bowser Appears! (after revealing boss)"),
  new SunshineSceneDesc("pinnaBoss1", "Mecha-Bowser Appears! (boss fight)"),
  new SunshineSceneDesc("pinnaParco7", "Mecha-Bowser Appears! (after defeating boss)"),
  new SunshineSceneDesc("pinnaParco1", "Red Coins of the Pirate Ships"),
  new SunshineSceneDesc("pinnaParco2", "The Runaway Ferris Wheel"),
  new SunshineSceneDesc("pinnaParco3", "The Yoshi-Go-Round's Secret (introduction)"),
  new SunshineSceneDesc("sirena_ex1", "The Yoshi-Go-Round's Secret (secret area)"),
  new SunshineSceneDesc("pinnaParco4", "Shadow Mario in the Park"),
  new SunshineSceneDesc("pinnaParco5", "Roller Coaster Balloons (introduction)"),
  new SunshineSceneDesc("pinnaBoss0", "Roller Coaster Balloons (roller coaster)"),
  "Sirena Beach",
  new SunshineSceneDesc("sirena0", "The Manta Storm"),
  new SunshineSceneDesc("sirena1", "The Hotel Lobby's Secret"),
  new SunshineSceneDesc("sirena2", "Mysterious Hotel Delfino"),
  new SunshineSceneDesc("sirena3", "The Secret of Casino Delfino"),
  new SunshineSceneDesc("sirena4", "King Boo Down Below"),
  new SunshineSceneDesc("sirena5", "Scrubbing Sirena Beach"),
  new SunshineSceneDesc("sirena6", "Shadow Mario Checks In"),
  new SunshineSceneDesc("sirena7", "Red Coins in the Hotel"),
  "Delfino Hotel",
  new SunshineSceneDesc("delfino0", "The Hotel Lobby's Secret (introduction)"),
  new SunshineSceneDesc("coro_ex5", "The Hotel Lobby's Secret (secret area)"),
  new SunshineSceneDesc("delfino1", "Mysterious Hotel Delfino"),
  new SunshineSceneDesc("delfino2", "The Secret of Casino Delfino/King Boo Down Below (hotel)"),
  new SunshineSceneDesc("casino0", "The Secret of Casino Delfino (casino)"),
  new SunshineSceneDesc("sirena_ex0", "The Secret of Casino Delfino (secret area)"),
  new SunshineSceneDesc("casino1", "King Boo Down Below (casino)"),
  new SunshineSceneDesc("delfinoBoss", "King Boo Down Below (boss fight)"),
  new SunshineSceneDesc("delfino3", "Shadow Mario Checks In"),
  new SunshineSceneDesc("delfino4", "Red Coins in the Hotel"),
  "Pianta Village",
  new SunshineSceneDesc("monte0", "Chain Chomplets Unchained"),
  new SunshineSceneDesc("monte5", "Il Piantissimo's Crazy Climb"),
  new SunshineSceneDesc("monte2", "The Goopy Inferno"),
  new SunshineSceneDesc("monte1", "Chain Chomp's Bath"),
  new SunshineSceneDesc("monte4", "Secret of the Village Underside (introduction)"),
  new SunshineSceneDesc("monte_ex0", "Secret of the Village Underside (secret area)"),
  new SunshineSceneDesc("monte3", "Piantas in Need"),
  new SunshineSceneDesc("monte6", "Shadow Mario Runs Wild"),
  new SunshineSceneDesc("monte7", "Fluff Festival Coin Hunt"),
  "Noki Bay",
  new SunshineSceneDesc("mare0", "Uncork the Waterfall"),
  new SunshineSceneDesc("mare1", "The Boss of Tricky Ruins"),
  new SunshineSceneDesc("mare2", "Red Coins in a Bottle (introduction)"),
  new SunshineSceneDesc("mare_ex0", "Red Coins in a Bottle (bottle)"),
  new SunshineSceneDesc("mare3", "Eely-Mouth's Dentist (introduction)"),
  new SunshineSceneDesc("mareBoss", "Eely-Mouth's Dentist (boss fight)"),
  new SunshineSceneDesc("mare4", "Il Piantissimo's Surf Swim"),
  new SunshineSceneDesc("mare5", "The Shell's Secret (introduction)"),
  new SunshineSceneDesc("rico_ex1", "The Shell's Secret (secret area)"),
  new SunshineSceneDesc("mare6", "Hold It, Shadow Mario!"),
  new SunshineSceneDesc("mare7", "The Red Coin Fish (introduction)"),
  new SunshineSceneDesc("mareUndersea", "The Red Coin Fish (underwater)"),
  "Corona Mountain",
  new SunshineSceneDesc("coro_ex6", "Corona Mountain (introduction)"),
  new SunshineSceneDesc("coronaBoss", "Corona Mountain (boss fight)"),
  "Test Map 1",
  new SunshineSceneDesc("test11", "Test Map 1"),
  "Main Menu",
  new SunshineSceneDesc("option", "Main Menu")
];
var sceneIdMap = /* @__PURE__ */ new Map();
sceneIdMap.set("Delfino Plaza", "dolpic0");
sceneIdMap.set("Delfino Airport", "airport0");
sceneIdMap.set("Bianco Hills", "bianco0");
sceneIdMap.set("Ricco Harbor", "ricco0");
sceneIdMap.set("Gelato Beach", "mamma0");
sceneIdMap.set("Pinna Park Beach", "pinnaBeach0");
sceneIdMap.set("Pinna Park", "pinnaParco0");
sceneIdMap.set("Sirena Beach", "sirena0");
sceneIdMap.set("Delfino Hotel", "delfino0");
sceneIdMap.set("Noki Bay", "mare0");
sceneIdMap.set("Pianta Village", "monte3");

// src/mario.ts
init_esm();
init_ArrayBufferSlice();
init_JKRArchive();

// src/mario_anims.js
var MARIO_ANIM_TABLE = [[0, 1], [1, 0], [2, 0], [200, 5], [200, 5], [3, 1], [4, 1], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [6, 1], [200, 5], [7, 0], [8, 0], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [9, 1], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [10, 0], [11, 0], [200, 5], [200, 5], [12, 0], [13, 0], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [14, 1], [15, 1], [16, 1], [200, 5], [200, 5], [200, 5], [200, 5], [17, 2], [200, 5], [18, 2], [19, 2], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [20, 1], [200, 5], [200, 5], [21, 0], [22, 0], [23, 2], [24, 1], [200, 5], [25, 0], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [26, 0], [27, 0], [200, 5], [200, 5], [28, 0], [200, 5], [32, 1], [33, 1], [200, 5], [29, 0], [30, 0], [200, 5], [200, 5], [200, 5], [200, 5], [31, 1], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [34, 1], [35, 0], [36, 0], [37, 1], [38, 2], [200, 5], [200, 5], [39, 2], [200, 5], [41, 0], [42, 0], [200, 5], [200, 5], [200, 5], [177, 0], [40, 0], [43, 0], [44, 0], [200, 5], [45, 0], [46, 0], [47, 0], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [48, 0], [49, 0], [50, 0], [200, 5], [200, 5], [200, 5], [200, 5], [51, 1], [52, 1], [53, 1], [54, 0], [200, 5], [200, 5], [200, 5], [55, 1], [56, 1], [57, 1], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [200, 5], [58, 1], [59, 1], [60, 2], [61, 2], [60, 2], [108, 2], [200, 5], [62, 0], [200, 5], [200, 5], [63, 1], [64, 1], [200, 5], [200, 5], [65, 0], [66, 0], [67, 0], [130, 0], [200, 5], [200, 5], [200, 5], [70, 2], [71, 2], [72, 2], [73, 2], [74, 2], [26, 1], [76, 1], [77, 1], [78, 0], [79, 0], [80, 0], [81, 0], [82, 0], [83, 0], [84, 0], [85, 0], [86, 0], [87, 0], [88, 0], [89, 0], [90, 1], [91, 1], [92, 0], [93, 0], [94, 1], [95, 1], [96, 1], [97, 1], [98, 1], [99, 1], [100, 1], [101, 1], [102, 1], [103, 1], [104, 1], [105, 0], [106, 2], [107, 0], [108, 0], [109, 2], [110, 1], [111, 1], [112, 1], [113, 1], [114, 1], [115, 1], [116, 1], [117, 1], [118, 1], [119, 1], [120, 1], [121, 1], [122, 0], [123, 0], [124, 0], [125, 0], [126, 0], [127, 0], [128, 0], [129, 0], [131, 0], [132, 0], [133, 0], [134, 0], [135, 0], [136, 0], [137, 0], [138, 2], [139, 0], [140, 0], [141, 0], [142, 0], [143, 0], [144, 0], [145, 0], [146, 0], [147, 0], [148, 0], [149, 0], [150, 0], [151, 0], [152, 0], [153, 0], [154, 0], [155, 0], [156, 0], [157, 0], [158, 0], [159, 0], [160, 0], [161, 0], [162, 0], [163, 0], [164, 0], [165, 0], [166, 0], [167, 0], [168, 0], [169, 0], [170, 0], [171, 0], [172, 0], [173, 0], [174, 0], [175, 0], [176, 0], [178, 2], [179, 0], [180, 0], [181, 0], [182, 0], [183, 0], [184, 0], [185, 0], [186, 0], [187, 0], [188, 0], [189, 0], [190, 0], [191, 0], [192, 0], [193, 0], [194, 0], [195, 0], [196, 0], [197, 0], [198, 0]];
var MARIO_BCK_FILES = ["hgup", "bdwn", "bkdwn", "tree_climb", "tree_catch", "tree_stand", "tree_wait", "brake", "brend", "hgdwn", "fjpend", "firejmp", "sdwnf", "jfdwn", "hang", "hgjmp", "ladder_hang_catch", "hiped", "hipsr", "hipat", "run1", "2jmed", "2jmp2", "jump", "jmped", "2jmp1", "land", "laend", "lost", "door_openr", "door_openl", "throw", "ladder_hang_move_l", "ladder_hang_move_r", "raise", "push", "ride_shell", "put", "roll", "run2", "shock", "sfbdn", "sffdn", "sdown", "shfdn", "swait", "swlkl", "swlkr", "sldct", "slpbk", "sldwn", "slped", "slpla", "slip", "sstep", "sqend", "sqsta", "sqwat", "turn", "trned", "tjmp2", "tjmp1", "wait", "ladder_hang_wait_l", "ladder_hang_wait_r", "walk", "wjmp", "wsld", "pump", "hgpmp", "step1", "step2", "step3", "jkick", "dgrun", "carry_p", "hmov_l", "hmov_r", "t_wait", "hot_wait", "rope_walk", "rope_run", "rope_wait", "rope_wtosw", "rope_wtosw_r", "rope_swait", "rope_whg", "rope_swhg", "rope_hgwat", "rope_return", "rope_hmovr", "rope_hmovl", "sinking", "sink_down", "door_kick", "hold", "hold_wait", "hold_back", "hold_move_r", "hold_move_l", "hold_drag", "hold_to_hang", "hold_hang", "hang_to_hold", "hold_return", "spin_p", "turbo_dash", "broad_jump", "jump_rolling", "giant_rolling", "fence_catch", "fence_jcatch", "fence_wait", "fence_move_l", "fence_move_r", "fence_move_up", "fence_move_down", "fence_punch", "ladder_hang_kick", "ladder_roll_up", "ladder_roll_down", "ride_shell", "ride_shell_wait", "swim_start", "swim_wait", "wait_to_swim", "swim", "swim_to_wait", "swim_damage", "swim_down", "demo_shine_get", "demo_gate_in", "demo_gate_out", "roll_jump", "get_fail", "tree_move_l", "tree_move_r", "die", "monteman_wait", "swim_start", "swim_wait", "wait_to_paddle", "paddle_start", "swim", "paddle_end", "paddle_to_wait", "float", "damage_wait", "fepmp", "swpmp", "thrown", "thrown_end", "bottle_in", "sand_fill_head", "sand_fill_head_end", "sandfill_leg", "sandfill_leg_end", "damage_wait_start", "swim_dive", "draw", "swim_p_damage", "swim_p_down", "pivot", "demo_gate_out_get2", "demo_gate_out_appear", "belt_up", "yawn", "sit", "sit_wait", "sit_end", "sleep", "sleep_wait", "sleep_end", "dive_wait", "dive_land", "door_gacha_l", "door_gacha_r", "shock_down", "demo_gate_out_appear_get", "demo_gate_out_rolling_get", "demo_gate_out_rolling", "fall_down_wait", "yo_wait", "yo_walk", "yo_run", "yo_eat", "yo_eat_end", "yo_jump", "yo_jump_fall", "yo_jump_end", "yo_hold_jump", "yo_ride", "yo_hip_start", "yo_hip_pose", "yo_hip_end", "yo_damage", "demo_shine_get_yo", "yo_slide_pose", "yo_slide_end"];

// src/mario.ts
init_Color();
init_gx_render();
init_MathHelpers();
var _v = vec3_exports.create();
function setPlayerLights(models, sun, viewMatrix) {
  for (const m of models) {
    const l0 = m.getGXLightReference(0);
    vec3_exports.set(_v, sun.x, sun.y, sun.z);
    transformVec3Mat4w1(l0.Position, viewMatrix, _v);
    colorFromRGBA(l0.Color, sun.r / 255, sun.g / 255, sun.b / 255, sun.a / 255);
    vec3_exports.set(l0.CosAtten, 1, 0, 0);
    vec3_exports.set(l0.DistAtten, 1, 0, 0);
    const l2 = m.getGXLightReference(2);
    transformVec3Mat4w1(_v, viewMatrix, _v);
    vec3_exports.normalize(_v, _v);
    const nx = -_v[0], ny = -_v[1], nz = -_v[2];
    vec3_exports.set(l2.Direction, -nx, -ny, -(nz - 1));
    vec3_exports.normalize(l2.Direction, l2.Direction);
    vec3_exports.set(l2.Position, nx * -1048576, ny * -1048576, nz * -1048576);
    colorFromRGBA(l2.Color, sun.r / 255, sun.g / 255, sun.b / 255, sun.a / 255);
    vec3_exports.set(l2.CosAtten, 0, 0, 1);
    vec3_exports.set(l2.DistAtten, 25, 0, -24);
  }
}
var PinnedAnimationController = class extends AnimationController {
  setTimeInMilliseconds(_ms) {
  }
};
var MarioModel = class {
  constructor(device2, cache3, arc) {
    this.arc = arc;
    const load = (path) => {
      const f = arc.findFile(path);
      if (!f) return null;
      const m = new J3DModelInstanceSimple(new J3DModelData2(device2, cache3, BMD.parse(f.buffer)));
      m.passMask = 2 /* MAIN */;
      m.animationController = new PinnedAnimationController(30);
      m.isPlayer = true;
      return m;
    };
    this.body = load("bmd/ma_mdl1.bmd");
    this.body.animationController = this.anim;
    this.body.modelData.bmd.jnt1.joints.forEach((j, i) => {
      this.joint[j.name] = i;
    });
    for (const id of ["2", "3", "4"])
      for (const side of ["r", "l"]) {
        const m = load(`bmd/ma_hnd${id}${side}.bmd`);
        if (m) this.hands[id + side] = m;
      }
    this.cap = load("bmd/ma_cap1.bmd");
    this.fludd = load("watergun2/body/wg_mdl1.bmd");
    if (this.fludd) this.fluddNozzleCenter = this.fludd.modelData.bmd.jnt1.joints.findIndex((j) => j.name === "nozzle_center");
    for (const n of ["normal_wg", "hover_wg", "rocket_wg", "back_wg"]) {
      const m = load(`watergun2/${n}/${n}.bmd`);
      if (m) this.nozzles[n] = m;
    }
    const bodyTex0 = this.body.materialInstanceState.textureMappings[0];
    for (const m of [...Object.values(this.hands), this.cap]) {
      const r = m && m.getTextureMappingReference("H_ma_main_dummy");
      if (r) r.copy(bodyTex0);
    }
    if (this.fludd) {
      const t1 = this.fludd.materialInstanceState.textureMappings[1];
      for (const m of Object.values(this.nozzles)) {
        const r = m.getTextureMappingReference("H_watergun_main_dummy");
        if (r && t1) r.copy(t1);
      }
    }
    for (const m of [this.body, ...Object.values(this.hands), ...this.cap ? [this.cap] : []])
      for (const md of m.modelMaterialData.materialData || []) {
        const k = md.material.colorConstants[0];
        if (k) md.material.colorConstants[0] = { r: k.r, g: k.g, b: k.b, a: 0 };
      }
    this.parts = [...Object.values(this.hands), ...this.cap ? [this.cap] : [], ...this.fludd ? [this.fludd] : [], ...Object.values(this.nozzles)];
    this.all = [this.body, ...this.parts];
    if (this.body.shapeInstances.length > 10) this.body.setShapeVisible(10, false);
  }
  arc;
  body;
  parts = [];
  hands = {};
  cap = null;
  fludd = null;
  nozzles = {};
  anim = new PinnedAnimationController(30);
  bcks = /* @__PURE__ */ new Map();
  joint = {};
  fluddNozzleCenter = -1;
  all = [];
  bck(name) {
    if (!this.bcks.has(name)) {
      const f = this.arc.findFile(`bck/ma_${name}.bck`);
      this.bcks.set(name, f ? BCK.parse(f.buffer) : null);
    }
    return this.bcks.get(name);
  }
  setVisible(v) {
    for (const m of this.all) m.visible = v;
  }
  /**
   * Pose for a ghost sample: position, yaw (s16), the ghost's animation ID and phase (0..4095 of
   * the loop), riding Yoshi or not, FLUDD's nozzle name (or null without FLUDD).
   */
  pose(x, y, z, yaw, animId, yoshi, phase, nozzle) {
    const idx = yoshi ? animId : (MARIO_ANIM_TABLE[animId] || [200])[0];
    const file = MARIO_BCK_FILES[idx];
    const ank1 = file ? this.bck(file) : null;
    if (ank1 && this.body._ank1 !== ank1) {
      this.body.bindANK1(ank1, this.anim);
      this.body._ank1 = ank1;
    }
    if (ank1) this.anim.setTimeInFrames(phase / 4096 * ank1.duration);
    mat4_exports.fromYRotation(this.body.modelMatrix, yaw / 32768 * Math.PI);
    this.body.modelMatrix[12] = x;
    this.body.modelMatrix[13] = y;
    this.body.modelMatrix[14] = z;
    const h0 = yoshi ? 0 : (MARIO_ANIM_TABLE[animId] || [0, 0])[1];
    const h = h0 === 1 || h0 === 2 ? h0 : 0;
    this.body.setShapeVisible(5, h === 0);
    this.body.setShapeVisible(6, h === 0);
    const show = (k, v) => {
      if (this.hands[k]) this.hands[k].visible = v;
    };
    show("2r", h === 1);
    show("2l", h === 1);
    show("3r", h === 2);
    show("3l", h === 2);
    show("4r", false);
    if (this.fludd) this.fludd.visible = nozzle !== null;
    for (const [n, m] of Object.entries(this.nozzles)) m.visible = n === nozzle;
  }
  /** Joint matrices for the pose, then the parts hung on them. Before drawing. */
  calcParts() {
    this.body.calcAnim();
    const J = this.body.shapeInstanceState.jointToWorldMatrixArray;
    const at = (m, joint) => {
      if (m && this.joint[joint] !== void 0) mat4_exports.copy(m.modelMatrix, J[this.joint[joint]]);
    };
    for (const [k, m] of Object.entries(this.hands)) at(m, k.endsWith("r") ? "jnt_hand_R" : "jnt_hand_L");
    at(this.cap, "M_head");
    if (this.fludd) {
      at(this.fludd, "jnt_chest");
      this.fludd.calcAnim();
      const N = this.fludd.shapeInstanceState.jointToWorldMatrixArray[this.fluddNozzleCenter];
      if (N) for (const m of Object.values(this.nozzles)) mat4_exports.copy(m.modelMatrix, N);
    }
  }
  position(out) {
    vec3_exports.set(out, this.body.modelMatrix[12], this.body.modelMatrix[13], this.body.modelMatrix[14]);
    return out;
  }
};
function parseArchive(buf, yaz0) {
  let b = new ArrayBufferSlice(buf);
  if (new TextDecoder().decode(new Uint8Array(buf, 0, 4)) === "Yaz0") b = yaz0(b);
  return parse(b);
}
var YOSHI_COLORS = [[64, 161, 36], [255, 140, 28], [170, 76, 255], [255, 160, 190]];
var YoshiModel = class {
  constructor(device2, cache3, arc) {
    this.arc = arc;
    const f = arc.findFile("yoshi_model.bmd");
    this.body = new J3DModelInstanceSimple(new J3DModelData2(device2, cache3, BMD.parse(f.buffer)));
    this.body.passMask = 2 /* MAIN */;
    this.body.animationController = this.anim;
    this.body.isPlayer = true;
    this.names = arc.root.files.map((x) => x.name.toLowerCase()).filter((n) => n.endsWith(".bck")).sort();
  }
  arc;
  body;
  anim = new PinnedAnimationController(30);
  names;
  bcks = /* @__PURE__ */ new Map();
  colour = -1;
  /** The rider animation's Yoshi counterpart (ghosts before V7 record only Mario): yo_run -> yoshi_run. */
  indexForRider(marioFile) {
    const name = marioFile && /^yo_/.test(marioFile) ? `yoshi_${marioFile.slice(3)}.bck` : "yoshi_wait.bck";
    const k = this.names.indexOf(name);
    return k >= 0 ? k : this.names.indexOf("yoshi_wait.bck");
  }
  bck(i) {
    if (!this.bcks.has(i)) {
      const f = this.names[i] ? this.arc.findFile(this.names[i]) : null;
      this.bcks.set(i, f ? BCK.parse(f.buffer) : null);
    }
    return this.bcks.get(i);
  }
  duration(i) {
    const a = this.bck(i);
    return a ? a.duration : 1;
  }
  pose(x, y, z, yaw, colour, animIndex, frame2) {
    if (colour !== this.colour) {
      this.colour = colour;
      const c = YOSHI_COLORS[colour >= 1 && colour <= 4 ? colour - 1 : 0];
      for (const mi of this.body.materialInstances) mi.setColorOverride(11 /* C2 */, { r: c[0] / 255, g: c[1] / 255, b: c[2] / 255, a: 1 });
    }
    const a = this.bck(animIndex);
    if (a && this.body._ank1 !== a) {
      this.body.bindANK1(a, this.anim);
      this.body._ank1 = a;
    }
    if (a) this.anim.setTimeInFrames(frame2);
    mat4_exports.fromYRotation(this.body.modelMatrix, yaw / 32768 * Math.PI);
    this.body.modelMatrix[12] = x;
    this.body.modelMatrix[13] = y;
    this.body.modelMatrix[14] = z;
  }
};

// src/ghost.js
var GHOST_CRC_TABLE = (() => {
  const t2 = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
    t2[n] = c >>> 0;
  }
  return t2;
})();
function ghostCrc32(bytes, zeroStart = -1, zeroEnd = -1) {
  let c = 4294967295;
  for (let i = 0; i < bytes.length; i++) {
    const b = i >= zeroStart && i < zeroEnd ? 0 : bytes[i];
    c = GHOST_CRC_TABLE[(c ^ b) & 255] ^ c >>> 8;
  }
  return (c ^ 4294967295) >>> 0;
}
var GHOST_AREA_LABELS = {
  0: "AS",
  1: "DP",
  2: "BH",
  3: "RH",
  4: "GB",
  5: "PP",
  6: "SB",
  8: "PV",
  9: "NB",
  52: "CM",
  60: "BW"
};
function ghostRouteLabel(route) {
  let area = route.area;
  let episode = route.episode;
  if (route.parentArea !== 255 && route.variant >= 0) {
    area = route.parentArea;
    episode = route.variant;
  }
  const abbr = GHOST_AREA_LABELS[area];
  if (abbr) return abbr + (episode + 1);
  const hex = (v) => v.toString(16).toUpperCase().padStart(2, "0");
  return `A${hex(area)}E${hex(episode)}`;
}
function ghostFormatTime(qf) {
  const ms = Math.floor(qf * 1001 / 120);
  const m = Math.floor(ms / 6e4);
  const s = Math.floor(ms % 6e4 / 1e3);
  const frac = String(ms % 1e3).padStart(3, "0");
  return m > 0 ? `${m}:${String(s).padStart(2, "0")}.${frac}` : `${s}.${frac}`;
}
function parseSmsGhost(buffer) {
  const bytes = new Uint8Array(buffer);
  const dv = new DataView(buffer);
  const fail = (msg) => {
    throw new Error(msg);
  };
  if (bytes.length < 256) fail("File is too small to be a Moonshine ghost.");
  const magic = String.fromCharCode(...bytes.subarray(0, 4));
  if (magic !== "SGHF") fail("Not a Moonshine ghost (missing SGHF header).");
  const version = dv.getUint16(4);
  if (version < 3 || version > 8) fail(`Ghost version ${version} is newer than this viewer supports (3\u20138). The viewer needs an update for it.`);
  const fileSize = dv.getUint32(8);
  if (fileSize !== bytes.length) fail("Ghost file is truncated or has extra bytes.");
  const warnings = [];
  if (ghostCrc32(bytes, 12, 16) !== dv.getUint32(12)) warnings.push("File checksum does not match; the file may be damaged.");
  const text = (off, len5) => String.fromCharCode(...bytes.subarray(off, off + len5));
  const region = ["JP", "US", "PAL"][bytes[37]] || "?";
  const route = {
    area: bytes[44],
    episode: bytes[45],
    parentArea: bytes[46],
    flags: bytes[47],
    variant: dv.getInt32(48)
  };
  const header = {
    version,
    region,
    route,
    routeLabel: ghostRouteLabel(route),
    runFlags: dv.getUint32(28),
    resultQf: dv.getUint32(52),
    startQf: dv.getUint32(56),
    endQf: dv.getUint32(60),
    durationQf: dv.getUint32(64),
    sampleCount: dv.getUint32(68),
    created: dv.getUint32(76) * 2 ** 32 + dv.getUint32(80),
    author: text(96, bytes[92]),
    name: text(120, bytes[93]),
    profileName: text(168, bytes[94])
  };
  const segCount = dv.getUint16(184);
  const segTable = dv.getUint32(188);
  const sampleOff = dv.getUint32(196);
  const sampleSize = dv.getUint32(200);
  if (segCount < 1 || segCount > 64) fail("Ghost has an invalid segment count.");
  if (sampleOff + sampleSize > bytes.length || sampleSize !== header.sampleCount * 16) fail("Ghost sample data is out of bounds.");
  const be24s = (o) => {
    const v = bytes[o] << 16 | bytes[o + 1] << 8 | bytes[o + 2];
    return v & 8388608 ? v - 16777216 : v;
  };
  const be24u = (o) => bytes[o] << 16 | bytes[o + 1] << 8 | bytes[o + 2];
  const n = header.sampleCount;
  const qf = new Float64Array(n);
  const pos = new Float32Array(n * 3);
  const yaw = new Int16Array(n);
  const anim = new Uint16Array(n);
  const phase = new Uint16Array(n);
  const yoshi = new Uint8Array(n);
  const held = new Uint8Array(n);
  const segIndex = new Uint8Array(n);
  const segments = [];
  for (let s = 0; s < segCount; s++) {
    const o = segTable + s * 32;
    const seg = {
      firstSample: dv.getUint32(o),
      sampleCount: dv.getUint32(o + 4),
      startQf: dv.getUint32(o + 8),
      endQf: dv.getUint32(o + 12),
      route: { area: bytes[o + 20], episode: bytes[o + 21], parentArea: bytes[o + 22], flags: bytes[o + 23], variant: dv.getInt32(o + 16) }
    };
    seg.routeLabel = ghostRouteLabel(seg.route);
    if (seg.firstSample + seg.sampleCount > n) fail("Ghost segment table is out of bounds.");
    let t2 = seg.startQf;
    for (let i = seg.firstSample; i < seg.firstSample + seg.sampleCount; i++) {
      const o2 = sampleOff + i * 16;
      t2 += i === seg.firstSample ? 0 : dv.getUint16(o2 + 2);
      qf[i] = t2 - header.startQf;
      yaw[i] = dv.getInt16(o2);
      pos[i * 3] = be24s(o2 + 4) / 8;
      pos[i * 3 + 1] = be24s(o2 + 7) / 8;
      pos[i * 3 + 2] = be24s(o2 + 10) / 8;
      const a = be24u(o2 + 13);
      anim[i] = a >>> 15;
      phase[i] = version >= 4 ? Math.round((a >>> 7 & 255) * 4095 / 255) : a >>> 3 & 4095;
      yoshi[i] = version >= 4 ? a >>> 4 & 7 : 0;
      held[i] = version >= 4 ? a & 15 : 0;
      segIndex[i] = s;
    }
    segments.push(seg);
  }
  const attachments = [];
  if (version >= 4) {
    for (let k = 0; k < Math.min(bytes[208], 7); k++) {
      const o = 214 + k * 6;
      attachments.push({ objectId: dv.getUint32(o), nameKey: dv.getUint16(o + 4) });
    }
  }
  let inputs = null;
  if (version >= 5) {
    const off = sampleOff + sampleSize;
    if (off + 32 <= bytes.length && text(off, 4) === "SGTI") {
      const sectionVersion = dv.getUint16(off + 4);
      const headerSize = dv.getUint16(off + 6) || 32;
      const stride = sectionVersion >= 2 ? 24 : 16;
      let count = dv.getUint32(off + 8);
      const maxCount = Math.floor((bytes.length - off - headerSize) / stride);
      if (count > maxCount) {
        warnings.push("Input data is shorter than its header says; showing what is there.");
        count = maxCount;
      }
      inputs = {
        count,
        hasFludd: stride === 24,
        qf: new Float64Array(count),
        buttons: new Uint16Array(count),
        stick: new Int8Array(count * 2),
        cstick: new Int8Array(count * 2),
        trig: new Uint8Array(count * 2),
        fluddMode: new Uint8Array(count),
        fluddOffset: new Float32Array(count * 3),
        fluddYaw: new Float32Array(count),
        fluddPitch: new Float32Array(count),
        fluddPower: new Uint8Array(count)
      };
      if (version >= 7) {
        Object.assign(inputs, {
          yoshiAnim: new Uint8Array(count),
          yoshiFrame: new Float32Array(count),
          yoshiBlend: new Uint8Array(count),
          yoshiPrev: new Int16Array(count).fill(-1),
          yoshiPrevFrame: new Float32Array(count)
        });
      }
      for (let i = 0; i < count; i++) {
        const r = off + headerSize + i * stride;
        inputs.qf[i] = dv.getUint32(r) - header.startQf;
        inputs.buttons[i] = dv.getUint16(r + 4);
        inputs.stick[i * 2] = dv.getInt8(r + 6);
        inputs.stick[i * 2 + 1] = dv.getInt8(r + 7);
        inputs.cstick[i * 2] = dv.getInt8(r + 8);
        inputs.cstick[i * 2 + 1] = dv.getInt8(r + 9);
        inputs.trig[i * 2] = bytes[r + 10];
        inputs.trig[i * 2 + 1] = bytes[r + 11];
        if (stride === 24 && version >= 7 && bytes[r + 16] & 128) {
          const f = r + 16;
          inputs.fluddMode[i] = bytes[f];
          inputs.yoshiAnim[i] = bytes[f + 1];
          inputs.yoshiFrame[i] = dv.getUint16(f + 2) / 16;
          inputs.yoshiBlend[i] = bytes[f + 4];
          if (i && inputs.fluddMode[i - 1] & 128) {
            const same = inputs.yoshiAnim[i - 1] === bytes[f + 1];
            inputs.yoshiPrev[i] = same ? inputs.yoshiPrev[i - 1] : inputs.yoshiAnim[i - 1];
            inputs.yoshiPrevFrame[i] = same ? inputs.yoshiPrevFrame[i - 1] : inputs.yoshiFrame[i - 1];
          }
        } else if (stride === 24) {
          const f = r + 16;
          inputs.fluddMode[i] = bytes[f];
          inputs.fluddOffset[i * 3] = dv.getInt8(f + 1) * 2;
          inputs.fluddOffset[i * 3 + 1] = dv.getInt8(f + 2) * 2;
          inputs.fluddOffset[i * 3 + 2] = dv.getInt8(f + 3) * 2;
          const yaw12 = bytes[f + 4] << 4 | bytes[f + 5] >> 4;
          let pitch12 = (bytes[f + 5] & 15) << 8 | bytes[f + 6];
          if (pitch12 & 2048) pitch12 -= 4096;
          inputs.fluddYaw[i] = yaw12 / 4096 * Math.PI * 2;
          inputs.fluddPitch[i] = pitch12 / 4096 * Math.PI * 2;
          inputs.fluddPower[i] = bytes[f + 7];
        }
      }
    }
  }
  const splits = [];
  if (inputs) {
    const off = sampleOff + sampleSize, hs = dv.getUint16(off + 6) || 32, nSplit = dv.getUint32(off + 12);
    let o = off + hs + inputs.count * (inputs.hasFludd ? 24 : 16);
    for (let k = 0; k < nSplit && o + 12 <= bytes.length; k++, o += 12) {
      splits.push({ qf: dv.getUint32(o) - header.startQf, key: dv.getUint32(o + 4), route: dv.getUint16(o + 8), index: bytes[o + 10] });
    }
  }
  let camera2 = null;
  if (version >= 8 && inputs) {
    const off = sampleOff + sampleSize, hs = dv.getUint16(off + 6) || 32;
    const co = off + hs + dv.getUint32(off + 8) * 24 + dv.getUint32(off + 12) * 12;
    if (co + 32 <= bytes.length && dv.getUint32(co) === 1397179201) {
      let n2 = dv.getUint32(co + 8);
      const max4 = Math.floor((bytes.length - co - 32) / 24);
      if (n2 > max4) {
        warnings.push("Camera data is shorter than its header says; showing what is there.");
        n2 = max4;
      }
      camera2 = {
        count: n2,
        truncated: !!(dv.getUint32(co + 12) & 1),
        qf: new Float64Array(n2),
        pos: new Float32Array(n2 * 3),
        quat: new Float32Array(n2 * 4),
        fov: new Float32Array(n2),
        tag: new Uint8Array(n2)
      };
      for (let i = 0; i < n2; i++) {
        const r = co + 32 + i * 24;
        camera2.qf[i] = dv.getUint32(r) - header.startQf;
        for (let k = 0; k < 3; k++) camera2.pos[i * 3 + k] = be24s(r + 4 + k * 3) / 4;
        let l = 0;
        for (let k = 0; k < 4; k++) {
          const v = dv.getInt16(r + 13 + k * 2) / 32767;
          camera2.quat[i * 4 + k] = v;
          l += v * v;
        }
        l = Math.sqrt(l) || 1;
        for (let k = 0; k < 4; k++) camera2.quat[i * 4 + k] /= l;
        camera2.fov[i] = dv.getUint16(r + 21) / 256;
        camera2.tag[i] = bytes[r + 23];
      }
    } else warnings.push("The camera data this ghost should have is missing; it plays with the viewer's own follow camera.");
  }
  return { header, segments, qf, pos, yaw, anim, phase, yoshi, held, attachments, segIndex, inputs, splits, camera: camera2, warnings };
}
function ghostSampleAt(g, t2) {
  const { qf, pos, yaw } = g;
  const n = qf.length;
  if (t2 <= qf[0]) return { x: pos[0], y: pos[1], z: pos[2], yaw: yaw[0], i: 0, gap: false };
  if (t2 >= qf[n - 1]) {
    const k = n - 1;
    return { x: pos[k * 3], y: pos[k * 3 + 1], z: pos[k * 3 + 2], yaw: yaw[k], i: k, gap: false };
  }
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) {
    const mid = lo + hi >> 1;
    if (qf[mid] <= t2) lo = mid;
    else hi = mid;
  }
  if (g.segIndex[lo] !== g.segIndex[hi]) {
    return { x: pos[lo * 3], y: pos[lo * 3 + 1], z: pos[lo * 3 + 2], yaw: yaw[lo], i: lo, gap: true };
  }
  const f = (t2 - qf[lo]) / (qf[hi] - qf[lo] || 1);
  const dy = (yaw[hi] - yaw[lo] + 32768 & 65535) - 32768;
  return {
    x: pos[lo * 3] + (pos[hi * 3] - pos[lo * 3]) * f,
    y: pos[lo * 3 + 1] + (pos[hi * 3 + 1] - pos[lo * 3 + 1]) * f,
    z: pos[lo * 3 + 2] + (pos[hi * 3 + 2] - pos[lo * 3 + 2]) * f,
    yaw: yaw[lo] + dy * f,
    i: lo,
    gap: false
  };
}
function ghostAnimAt(g, t2) {
  const { qf, anim, phase, yoshi } = g;
  const n = qf.length;
  let lo = 0;
  if (t2 >= qf[n - 1]) lo = n - 1;
  else if (t2 > qf[0]) {
    let hi2 = n - 1;
    while (hi2 - lo > 1) {
      const mid = lo + hi2 >> 1;
      if (qf[mid] <= t2) lo = mid;
      else hi2 = mid;
    }
  }
  const out = { id: anim[lo], yoshi: yoshi[lo], phase: phase[lo] };
  const hi = lo + 1;
  if (hi < n && anim[hi] === anim[lo] && yoshi[hi] === yoshi[lo] && g.segIndex[hi] === g.segIndex[lo]) {
    const f = (t2 - qf[lo]) / (qf[hi] - qf[lo] || 1);
    const d = ((phase[hi] - phase[lo] + 2048) % 4096 + 4096) % 4096 - 2048;
    out.phase = ((phase[lo] + d * f) % 4096 + 4096) % 4096;
  }
  return out;
}
var FLUDD_NOZZLES = ["Spray", "Rocket", "Underwater", "Yoshi", "Hover", "Turbo"];
function ghostFluddAt(g, t2) {
  const inp = g.inputs;
  if (!inp || !inp.hasFludd || !inp.count || t2 < inp.qf[0]) return null;
  let lo = 0, hi = inp.count - 1;
  while (lo < hi) {
    const mid = lo + hi + 1 >> 1;
    if (inp.qf[mid] <= t2) lo = mid;
    else hi = mid - 1;
  }
  const mode = inp.fluddMode[lo];
  if (mode & 128) return { present: false, yoshi: true };
  if (!(mode & 8)) return { present: false };
  return {
    present: true,
    nozzle: mode & 7,
    nozzleName: FLUDD_NOZZLES[mode & 7] || "?",
    spraying: !!(mode & 16),
    burst: !!(mode & 32),
    power: inp.fluddPower[lo],
    offset: [inp.fluddOffset[lo * 3], inp.fluddOffset[lo * 3 + 1], inp.fluddOffset[lo * 3 + 2]],
    yaw: inp.fluddYaw[lo],
    pitch: inp.fluddPitch[lo]
  };
}
function ghostYoshiAt(g, t2) {
  const inp = g.inputs;
  if (!inp || !inp.yoshiAnim || !inp.count || t2 < inp.qf[0]) return null;
  let lo = 0, hi = inp.count - 1;
  while (lo < hi) {
    const mid = lo + hi + 1 >> 1;
    if (inp.qf[mid] <= t2) lo = mid;
    else hi = mid - 1;
  }
  if (!(inp.fluddMode[lo] & 128)) return null;
  return {
    anim: inp.yoshiAnim[lo],
    frame: inp.yoshiFrame[lo],
    blend: inp.yoshiBlend[lo] / 255,
    juice: !!(inp.fluddMode[lo] & 16),
    prevAnim: inp.yoshiPrev[lo],
    prevFrame: inp.yoshiPrevFrame[lo]
  };
}
function ghostCameraAt(g, t2, seg) {
  const c = g.camera;
  if (!c || !c.count) return null;
  let lo = 0, hi = c.count;
  while (lo < hi) {
    const mid = lo + hi >> 1;
    if (c.qf[mid] <= t2) lo = mid + 1;
    else hi = mid;
  }
  let i = lo ? lo - 1 : 0;
  if ((c.tag[i] & 63) !== seg) {
    if (i + 1 >= c.count || (c.tag[i + 1] & 63) !== seg) return null;
    i++;
  }
  if (c.truncated && i + 1 === c.count && t2 > c.qf[i]) return null;
  const out = { pos: [c.pos[i * 3], c.pos[i * 3 + 1], c.pos[i * 3 + 2]], quat: [c.quat[i * 4], c.quat[i * 4 + 1], c.quat[i * 4 + 2], c.quat[i * 4 + 3]], fov: c.fov[i] };
  if (i + 1 === c.count || t2 <= c.qf[i] || c.tag[i + 1] !== seg) return out;
  const j = i + 1, f = (t2 - c.qf[i]) / (c.qf[j] - c.qf[i]);
  for (let k = 0; k < 3; k++) out.pos[k] += (c.pos[j * 3 + k] - out.pos[k]) * f;
  out.fov += (c.fov[j] - out.fov) * f;
  let dot5 = 0, l = 0;
  for (let k = 0; k < 4; k++) dot5 += out.quat[k] * c.quat[j * 4 + k];
  for (let k = 0; k < 4; k++) {
    out.quat[k] += ((dot5 < 0 ? -c.quat[j * 4 + k] : c.quat[j * 4 + k]) - out.quat[k]) * f;
    l += out.quat[k] * out.quat[k];
  }
  l = Math.sqrt(l) || 1;
  for (let k = 0; k < 4; k++) out.quat[k] /= l;
  return out;
}

// src/triggers.ts
init_esm();
var TRIG_STYLE = {
  stage: ["#ff3b3b", "Load zone"],
  stageHipDrop: ["#ff8a3b", "Load zone (ground pound)"],
  demo: ["#ff4fd8", "Cutscene trigger"],
  warp: ["#a66bff", "Warp"],
  areaCyl: ["#9aa3ad", "Area cylinder"],
  camera: ["#3b8bff", "Camera cube"],
  area: ["#33d6e0", "Area cube"],
  stream: ["#2fd18b", "Flow cube"],
  wire: ["#ffd23b", "Wire cube"],
  shadow: ["#6b6b80", "Shadow cube"],
  mirror: ["#f2f2f2", "Mirror cube"],
  sound: ["#7bdc4b", "Sound cube"],
  fastA: ["#b07a4b", "Draw cube A"],
  fastB: ["#b07a4b", "Draw cube B"],
  fastC: ["#b07a4b", "Draw cube C"],
  cube: ["#cccccc", "Cube"],
  enemy: ["#ff5a1f", "Enemy zone"]
};
var ENEMY_ZONE_COLOR = { bomb: "#ff5a1f", bomb2: "#ffb21f", hide: "#8fd14f", unhide: "#4fc3d1" };
var CUBES = {
  "\u30AB\u30E1\u30E9\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "camera",
  "\u30A8\u30EA\u30A2\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "area",
  "\u6D41\u308C\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "stream",
  "\u30EF\u30A4\u30E4\u30FC\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "wire",
  "\u5F71\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "shadow",
  "\u93E1\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "mirror",
  "\u30B5\u30A6\u30F3\u30C9\u5207\u308A\u66FF\u3048\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "sound",
  "\u9AD8\u901F\uFF21\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "fastA",
  "\u9AD8\u901F\uFF22\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "fastB",
  "\u9AD8\u901F\uFF23\u30AD\u30E5\u30FC\u30D6\u30C6\u30FC\u30D6\u30EB": "fastC"
};
var STAGE_CHANGE = { MapObjChangeStage: "stage", MapObjChangeStageHipDrop: "stageHipDrop", ChangeStageMerrygoround: "stage" };
var sjis = new TextDecoder("shift_jis");
function parseNameRefs(buf, off = 0, len5) {
  const b = new Uint8Array(buf, off, len5), v = new DataView(buf, off, len5);
  const str6 = (o) => {
    const n = v.getUint16(o + 2);
    return [sjis.decode(b.subarray(o + 4, o + 4 + n)), o + 4 + n];
  };
  const looks = (o, end) => {
    if (o + 12 > end) return false;
    const size = v.getUint32(o);
    if (size < 12 || o + size > end) return false;
    const n = v.getUint16(o + 6);
    if (n === 0 || n > 64 || o + 8 + n > end) return false;
    for (let i = 0; i < n; i++) {
      const c = b[o + 8 + i];
      if (!(c >= 48 && c < 123 || c === 95)) return false;
    }
    return true;
  };
  const out = [];
  const walk = (o, path) => {
    const size = v.getUint32(o);
    const [type, p0] = str6(o + 4);
    const [name, p2] = str6(p0);
    const end = o + size;
    for (const lead2 of [0, 4]) {
      let q = p2 + lead2;
      if (q + 4 <= end) {
        const cnt = v.getUint32(q);
        if (cnt > 0 && cnt < 5e3 && looks(q + 4, end)) {
          q += 4;
          for (let i = 0; i < cnt && looks(q, end); i++) q = walk(q, [...path, name]);
          return end;
        }
      }
    }
    out.push({ type, name, payload: new DataView(buf, off + p2, end - p2), bytes: b.subarray(p2, end), path });
    return end;
  };
  walk(0, []);
  return out;
}
function placement(o) {
  if (o.payload.byteLength < 36) return null;
  const f = [];
  for (let i = 0; i < 9; i++) f.push(o.payload.getFloat32(i * 4));
  if (f.some((x) => !(Math.abs(x) <= 1e7))) return null;
  return [f.slice(0, 3), f.slice(3, 6), f.slice(6, 9)];
}
var lstrEnd = (v, p2) => p2 + 2 + v.getUint16(p2);
function actorTail(v) {
  return lstrEnd(v, lstrEnd(v, 36) + 4);
}
function parsePrm(buf, off, len5) {
  const v = new DataView(buf, off, len5), b = new Uint8Array(buf, off, len5), out = {};
  const n = v.getUint32(0);
  let o = 4;
  for (let k = 0; k < n; k++) {
    const ln2 = v.getUint16(o + 2);
    const name = String.fromCharCode(...b.subarray(o + 4, o + 4 + ln2));
    o += 4 + ln2;
    const sz = v.getUint32(o);
    if (sz === 4) {
      const f = v.getFloat32(o + 4), i = v.getInt32(o + 4);
      out[name] = Math.abs(f) > 1e-6 && Math.abs(f) < 1e7 || i === 0 ? f : i;
    } else if (sz === 1) out[name] = b[o + 4];
    o += 4 + sz;
  }
  return out;
}
var ENEMY_ZONES = {
  Cannon: {
    prm: "cannon",
    defaults: { mSLHideDist: 300, mSLBombDist: 2e3, mSLKillerDist: 1e4 },
    zones: [
      ["bomb", "Monty Mole: throws bombs", (p2) => p2.mSLBombDist],
      ["bomb2", "Monty Mole: bomb after goop", (p2) => p2.mSLBombDist * Math.SQRT2],
      ["hide", "Monty Mole: hides", (p2) => p2.mSLHideDist],
      ["unhide", "Monty Mole: comes back out past", (p2) => p2.mSLHideDist * 3]
    ]
  }
};
function fileData(rarc, path) {
  const f = rarc.findFileData(path);
  return f ? { buf: f.arrayBuffer, off: f.byteOffset, len: f.byteLength } : null;
}
function corkHeld(rarc, cork) {
  const f = rarc.findFileData("mapobj/marecork.bmd");
  if (!cork || !f) return null;
  const bmd = BMD.parse(f);
  const h = bmd.inf1.hierarchyData.createDataView();
  const parent = [];
  const stack = [-1];
  let last = -1;
  for (let o = 0; o + 4 <= h.byteLength; o += 4) {
    const type = h.getUint16(o), value = h.getUint16(o + 2);
    if (type === 0) break;
    if (type === 1) stack.push(last);
    else if (type === 2) stack.pop();
    else if (type === 16) {
      parent[value] = stack[stack.length - 1];
      last = value;
    }
  }
  const chain = [];
  for (let j = 2; j >= 0 && chain.length < 64; j = parent[j] ?? -1) chain.unshift(j);
  const m = mat4_exports.create(), local = mat4_exports.create();
  for (const j of chain) {
    const tr = bmd.jnt1.joints[j].transform;
    mat4_exports.fromRotationTranslationScale(local, tr.rotation, tr.translation, tr.scale);
    mat4_exports.mul(m, m, local);
  }
  const lx = m[12], ly = m[13], lz = m[14];
  const ry = cork[1][1] * Math.PI / 180, [cx, cy, cz] = cork[0];
  return [cx + lx * Math.cos(ry) + lz * Math.sin(ry), cy + ly, cz - lx * Math.sin(ry) + lz * Math.cos(ry)];
}
function buildTriggers(rarc) {
  const out = [];
  const scene = fileData(rarc, "map/scene.bin");
  if (!scene) return out;
  const objs = parseNameRefs(scene.buf, scene.off, scene.len);
  const placed = [];
  let cork = null;
  for (const o of objs) {
    const pl = placement(o);
    if (!pl) continue;
    const [[x, y, z], [rx, ry, rz], [sx, sy, sz]] = pl;
    if (ENEMY_ZONES[o.type]) placed.push([o, [x, y, z]]);
    else if (o.type === "MareCork") cork = [[x, y, z], [rx, ry, rz]];
    if (STAGE_CHANGE[o.type] || o.type === "MapObjStartDemo") {
      let val = 0;
      try {
        val = o.payload.getUint32(actorTail(o.payload));
      } catch {
      }
      out.push({ kind: STAGE_CHANGE[o.type] || "demo", label: o.type, pos: [x, y, z], rot: [rx, ry, rz], a: 100 * Math.max(sx, sz), b: 100 * sy, c: 0, info: val });
    } else if (o.type === "WarpArea") {
      const n = o.payload.byteLength;
      const info = n >= 44 ? [o.payload.getUint32(n - 8), o.payload.getUint32(n - 4)] : [0, 0];
      out.push({ kind: "warp", label: o.type, pos: [x, y, z], rot: [rx, ry, rz], a: 100 * sx, b: 100 * sy, c: 0, info });
    } else if (o.type === "AreaCylinder" || o.type === "AreaSphere") {
      out.push({ kind: "areaCyl", label: o.name, pos: [x, y, z], rot: [0, 0, 0], a: sx * 50, b: sy * 50, c: 0, info: 0 });
    }
  }
  const tables = fileData(rarc, "map/tables.bin");
  if (tables) {
    for (const o of parseNameRefs(tables.buf, tables.off, tables.len)) {
      if (o.type !== "CubeGeneralInfo" && o.type !== "CameraCubeInfo" && o.type !== "CubeStreamInfo") continue;
      const f = [];
      for (let i = 0; i < 9; i++) f.push(o.payload.getFloat32(i * 4));
      out.push({ kind: CUBES[o.path[o.path.length - 1]] || "cube", label: o.name, pos: [f[0], f[1], f[2]], rot: [f[3], f[4], f[5]], a: f[6] * 100, b: f[7] * 100, c: f[8] * 100, info: 0 });
    }
  }
  for (const [type, z] of Object.entries(ENEMY_ZONES)) {
    const p2 = { ...z.defaults };
    const prm = fileData(rarc, `map/params/enemy/${z.prm}.prm`);
    if (prm) try {
      Object.assign(p2, parsePrm(prm.buf, prm.off, prm.len));
    } catch {
    }
    for (const [o, pos] of placed) {
      if (o.type !== type) continue;
      const at = type === "Cannon" && corkHeld(rarc, cork) || pos;
      for (const [zone, label, rad] of z.zones)
        out.push({ kind: "enemy", label, pos: at, rot: [0, 0, 0], a: rad(p2), b: 0, c: 0, info: zone });
    }
  }
  return out;
}
function marioStart(rarc) {
  const scene = fileData(rarc, "map/scene.bin");
  if (!scene) return null;
  for (const o of parseNameRefs(scene.buf, scene.off, scene.len)) {
    if (o.type !== "Mario") continue;
    const pl = placement(o);
    if (pl) return [pl[0][0], pl[0][1], pl[0][2], pl[1][1]];
  }
  return null;
}

// src/overlay.ts
init_esm();
var CYL = /* @__PURE__ */ new Set(["stage", "stageHipDrop", "demo", "warp", "areaCyl"]);
var D = Math.PI / 180;
function outline(tr) {
  const [x, y, z] = tr.pos, lines = [];
  if (tr.kind === "enemy") {
    const r = tr.a, n = 48;
    for (const h of [-0.7, -0.35, 0, 0.35, 0.7]) {
      const rr = r * Math.sqrt(1 - h * h), yy = y + r * h;
      for (let i = 0; i < n; i++) {
        const a0 = i / n * 2 * Math.PI, a1 = (i + 1) / n * 2 * Math.PI;
        lines.push([[x + Math.cos(a0) * rr, yy, z + Math.sin(a0) * rr], [x + Math.cos(a1) * rr, yy, z + Math.sin(a1) * rr]]);
      }
    }
    for (const m of [0, Math.PI / 2]) for (let i = 0; i < n; i++) {
      const a0 = i / n * 2 * Math.PI, a1 = (i + 1) / n * 2 * Math.PI;
      lines.push([
        [x + Math.cos(m) * Math.cos(a0) * r, y + Math.sin(a0) * r, z + Math.sin(m) * Math.cos(a0) * r],
        [x + Math.cos(m) * Math.cos(a1) * r, y + Math.sin(a1) * r, z + Math.sin(m) * Math.cos(a1) * r]
      ]);
    }
    return lines;
  }
  if (CYL.has(tr.kind)) {
    const r = tr.a, h = tr.b, n = 32;
    for (let i = 0; i < n; i++) {
      const a0 = i / n * 2 * Math.PI, a1 = (i + 1) / n * 2 * Math.PI;
      const p0 = [x + Math.cos(a0) * r, z + Math.sin(a0) * r], p1 = [x + Math.cos(a1) * r, z + Math.sin(a1) * r];
      lines.push([[p0[0], y, p0[1]], [p1[0], y, p1[1]]], [[p0[0], y + h, p0[1]], [p1[0], y + h, p1[1]]]);
      if (i % 4 === 0) lines.push([[p0[0], y, p0[1]], [p0[0], y + h, p0[1]]]);
    }
    return lines;
  }
  const [rx, ry, rz] = tr.rot.map((v) => v * D), sx = tr.a / 2, sy = tr.b, sz = tr.c / 2;
  const rot = (p2) => {
    let [a, b, c2] = p2;
    [b, c2] = [b * Math.cos(rx) - c2 * Math.sin(rx), b * Math.sin(rx) + c2 * Math.cos(rx)];
    [a, c2] = [a * Math.cos(ry) + c2 * Math.sin(ry), -a * Math.sin(ry) + c2 * Math.cos(ry)];
    [a, b] = [a * Math.cos(rz) - b * Math.sin(rz), a * Math.sin(rz) + b * Math.cos(rz)];
    return [x + a, y + b, z + c2];
  };
  const c = [[-sx, 0, -sz], [sx, 0, -sz], [sx, 0, sz], [-sx, 0, sz], [-sx, sy, -sz], [sx, sy, -sz], [sx, sy, sz], [-sx, sy, sz]].map(rot);
  for (const [i, j] of [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]]) lines.push([c[i], c[j]]);
  return lines;
}
var cache2 = /* @__PURE__ */ new WeakMap();
var _a = vec4_exports.create();
var _b = vec4_exports.create();
function drawTriggers(cv, camera2, list) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const W = Math.round(cv.clientWidth * dpr), H = Math.round(cv.clientHeight * dpr);
  if (cv.width !== W || cv.height !== H) {
    cv.width = W;
    cv.height = H;
  }
  const g = cv.getContext("2d");
  g.clearRect(0, 0, W, H);
  if (!list.length) return;
  const M = camera2.clipFromWorldMatrix;
  const cam = [camera2.worldMatrix[12], camera2.worldMatrix[13], camera2.worldMatrix[14]];
  const proj = (p2, out) => vec4_exports.transformMat4(out, vec4_exports.set(out, p2[0], p2[1], p2[2], 1), M);
  const NEAR = 1;
  g.lineWidth = 1.25 * dpr;
  const labels = [];
  for (const tr of list) {
    let L = cache2.get(tr);
    if (!L) {
      L = outline(tr);
      cache2.set(tr, L);
    }
    const color = tr.kind === "enemy" ? ENEMY_ZONE_COLOR[tr.info] || TRIG_STYLE.enemy[0] : (TRIG_STYLE[tr.kind] || TRIG_STYLE.cube)[0];
    g.strokeStyle = color;
    g.globalAlpha = 0.8;
    g.beginPath();
    for (const [p2, q] of L) {
      proj(p2, _a);
      proj(q, _b);
      let aw = _a[3], bw = _b[3];
      if (aw < NEAR && bw < NEAR) continue;
      if (aw < NEAR || bw < NEAR) {
        const f = (NEAR - aw) / (bw - aw);
        const cut = vec4_exports.lerp(vec4_exports.create(), _a, _b, f);
        if (aw < NEAR) vec4_exports.copy(_a, cut);
        else vec4_exports.copy(_b, cut);
        aw = _a[3];
        bw = _b[3];
      }
      g.moveTo((_a[0] / aw + 1) * 0.5 * W, (1 - _a[1] / aw) * 0.5 * H);
      g.lineTo((_b[0] / bw + 1) * 0.5 * W, (1 - _b[1] / bw) * 0.5 * H);
    }
    g.stroke();
    const top = [tr.pos[0], tr.pos[1] + (tr.kind === "enemy" ? tr.a : tr.b), tr.pos[2]];
    proj(top, _a);
    if (_a[3] > NEAR) {
      const sx = (_a[0] / _a[3] + 1) * 0.5 * W, sy = (1 - _a[1] / _a[3]) * 0.5 * H;
      if (sx > -50 && sx < W + 50 && sy > -20 && sy < H + 20) {
        let text = tr.kind === "enemy" ? `${tr.label} (${Math.round(tr.a)})` : (TRIG_STYLE[tr.kind] || TRIG_STYLE.cube)[1];
        if (tr.kind === "warp" && Array.isArray(tr.info)) text += ` ${tr.info[0]} \u2192 ${tr.info[1]}`;
        labels.push({ x: sx, y: sy, text, color, d: Math.hypot(top[0] - cam[0], top[1] - cam[1], top[2] - cam[2]) });
      }
    }
  }
  g.globalAlpha = 1;
  labels.sort((a, b) => a.d - b.d);
  const placed = [];
  g.font = `600 ${12 * dpr}px system-ui, sans-serif`;
  g.textBaseline = "middle";
  for (const l of labels) {
    const w = g.measureText(l.text).width + 12 * dpr, h = 20 * dpr, x = l.x - w / 2, y = l.y - h;
    if (placed.some(([px, py, pw, ph]) => x < px + pw && px < x + w && y < py + ph && py < y + h)) continue;
    placed.push([x, y, w, h]);
    g.fillStyle = "rgba(10,14,20,0.75)";
    g.fillRect(x, y, w, h);
    g.fillStyle = l.color;
    g.fillText(l.text, x + 6 * dpr, y + h / 2);
  }
}

// src/inputs.ts
var BITS = [["A", 256], ["B", 512], ["X", 1024], ["Y", 2048], ["Z", 16], ["L", 64], ["R", 32], ["S", 4096]];
var InputDisplay = class {
  constructor(root) {
    this.root = root;
    root.innerHTML = `<svg viewBox="0 0 220 110" width="220" height="110" aria-label="Controller inputs">
  <rect x="2" y="8" width="16" height="60" rx="3" class="tb"/><rect id="tL" x="2" y="68" width="16" height="0" class="tf"/>
  <circle cx="58" cy="44" r="30" class="ring"/><circle id="st" cx="58" cy="44" r="9" class="dot"/>
  <circle cx="58" cy="92" r="14" class="ring c"/><circle id="cs" cx="58" cy="92" r="5" class="dot c"/>
  <circle id="bA" cx="150" cy="52" r="16" class="b a"/><text x="150" y="57">A</text>
  <circle id="bB" cx="122" cy="72" r="10" class="b bb"/><text x="122" y="76">B</text>
  <circle id="bX" cx="178" cy="40" r="10" class="b"/><text x="178" y="44">X</text>
  <circle id="bY" cx="146" cy="22" r="10" class="b"/><text x="146" y="26">Y</text>
  <rect id="bZ" x="166" y="2" width="26" height="11" rx="4" class="b z"/><text x="179" y="11" class="s">Z</text>
  <rect id="bL" x="22" y="0" width="22" height="9" rx="3" class="b"/><text x="33" y="8" class="s">L</text>
  <rect id="bR" x="196" y="2" width="22" height="9" rx="3" class="b"/><text x="207" y="10" class="s">R</text>
  <rect id="bS" x="100" y="94" width="18" height="10" rx="5" class="b"/>
  <rect x="202" y="16" width="16" height="60" rx="3" class="tb"/><rect id="tR" x="202" y="76" width="16" height="0" class="tf"/>
</svg>`;
    const q = (id) => root.querySelector("#" + id);
    this.stick = q("st");
    this.cstick = q("cs");
    for (const [n] of BITS) this.btn[n] = q("b" + n);
    this.trig = [q("tL"), q("tR")];
  }
  root;
  stick;
  cstick;
  btn = {};
  trig = [];
  update(g, t2) {
    const inp = g && g.data.inputs;
    this.root.hidden = !inp || !inp.count;
    if (this.root.hidden) return;
    let lo = 0, hi = inp.count - 1;
    if (t2 < inp.qf[0]) lo = 0;
    else {
      while (lo < hi) {
        const mid = lo + hi + 1 >> 1;
        if (inp.qf[mid] <= t2) lo = mid;
        else hi = mid - 1;
      }
    }
    const b = inp.buttons[lo];
    for (const [n, bit] of BITS) this.btn[n].classList.toggle("on", !!(b & bit));
    const sx = inp.stick[lo * 2] / 128, sy = inp.stick[lo * 2 + 1] / 128;
    this.stick.setAttribute("cx", String(58 + sx * 24));
    this.stick.setAttribute("cy", String(44 - sy * 24));
    const cx = inp.cstick[lo * 2] / 128, cy = inp.cstick[lo * 2 + 1] / 128;
    this.cstick.setAttribute("cx", String(58 + cx * 10));
    this.cstick.setAttribute("cy", String(92 - cy * 10));
    for (let k = 0; k < 2; k++) {
      const v = Math.min(1, inp.trig[lo * 2 + k] / 255), top = (k ? 16 : 8) + 60 * (1 - v);
      this.trig[k].setAttribute("y", String(top));
      this.trig[k].setAttribute("height", String(60 * v));
    }
  }
};

// src/actors.ts
init_esm();
init_gx_render();

// src/data/npc_init.json
var npc_init_default = [{ name: "sMonteM_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "body_jnt", file: "nimotsu_model.bmd", slot: 0, colors: [] }], body: [{ kind: 1, mat: "_hand_mat", c0: [[100, 255, 300], [120, 120, 300], [350, 300, 0], [200, 70, 0], [300, 130, 255], [255, 350, 0], [400, 255, 255], [320, 140, 0], [200, 255, 400], [400, 250, 100]], c1: null }, null] }, { name: "sMonteMA_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "body_jnt", file: "nimotsu_model.bmd", slot: 0, colors: [] }], body: [{ kind: 1, mat: "_hand_mat", c0: [[100, 255, 300], [120, 120, 300], [350, 300, 0], [200, 70, 0], [300, 130, 255], [255, 350, 0], [400, 255, 255], [320, 140, 0], [200, 255, 400], [400, 250, 100]], c1: null }, { kind: 2, mat: "_fuku_mat", c0: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [200, 200, 170], [50, 50, 50], [150, 200, 255], [0, 70, 150], [400, 300, 200], [255, 255, 255], [255, 255, 255], [255, 255, 150]], c1: [[250, 130, 50], [50, 130, 100], [150, 180, 20], [200, 200, 170], [50, 50, 50], [150, 200, 255], [0, 70, 150], [230, 150, 100], [60, 150, 230], [180, 150, 200], [100, 220, 300]] }] }, { name: "sMonteMB_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "body_jnt", file: "nimotsu_model.bmd", slot: 0, colors: [] }], body: [{ kind: 1, mat: "_hand_mat", c0: [[160, 200, 300], [255, 160, 150], [300, 200, 80], [200, 300, 100]], c1: null }, { kind: 1, mat: "_fuku_mat", c0: [[70, 130, 200], [200, 20, 20], [130, 30, 80], [130, 200, 80], [230, 200, 80], [50, 100, 150]], c1: null }] }, { name: "sMonteMC_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "body_jnt", file: "nimotsu_model.bmd", slot: 0, colors: [] }], body: [{ kind: 1, mat: "_hand_mat", c0: [[100, 255, 300], [120, 120, 300], [350, 300, 0], [200, 70, 0], [300, 130, 255], [255, 350, 0], [400, 255, 255], [320, 140, 0], [200, 255, 400], [400, 250, 100]], c1: null }, { kind: 2, mat: "_fuku_mat", c0: [[230, 230, 210], [150, 70, 0], [230, 230, 210], [0, 70, 150], [50, 150, 130], [60, 40, 0], [0, 100, 100], [0, 150, 200], [0, 50, 100], [100, 100, 0], [100, 0, 0]], c1: [[230, 230, 210], [150, 70, 0], [0, 70, 150], [230, 230, 210], [230, 230, 210], [160, 150, 60], [0, 100, 100], [0, 150, 200], [0, 50, 100], [0, 0, 0], [0, 0, 0]] }] }, { name: "sMonteMD_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "body_jnt", file: "nimotsu_model.bmd", slot: 0, colors: [] }], body: [{ kind: 1, mat: "_hand_mat", c0: [[100, 255, 300], [120, 120, 300], [350, 300, 0], [200, 70, 0], [300, 130, 255], [255, 350, 0], [400, 255, 255], [320, 140, 0], [200, 255, 400], [400, 250, 100]], c1: null }, { kind: 1, mat: "_fuku_mat", c0: [[350, 360, 340], [50, 100, 0], [150, 0, 0], [0, 300, 350], [0, 100, 250]], c1: null }] }, { name: "sMonteME_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "body_jnt", file: "nimotsu_model.bmd", slot: 0, colors: [] }], body: [null, null] }, { name: "sMonteMF_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "body_jnt", file: "tube_model.bmd", slot: 0, colors: [] }], body: [{ kind: 1, mat: "_hand_mat", c0: [[100, 255, 300], [120, 120, 300], [350, 300, 0], [200, 70, 0], [300, 130, 255], [255, 350, 0], [400, 255, 255], [320, 140, 0], [200, 255, 400], [400, 250, 100]], c1: null }, null] }, { name: "sMonteMG_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "handR_jnt", file: "mop_model.bmd", slot: 0, colors: [] }], body: [{ kind: 1, mat: "_hand_mat", c0: [[100, 255, 300], [120, 120, 300], [350, 300, 0], [200, 70, 0], [300, 130, 255], [255, 350, 0], [400, 255, 255], [320, 140, 0], [200, 255, 400], [400, 250, 100]], c1: null }, { kind: 2, mat: "_fuku_mat", c0: [[230, 230, 210], [150, 70, 0], [230, 230, 210], [0, 70, 150], [50, 150, 130], [60, 40, 0], [0, 100, 100], [0, 150, 200], [0, 50, 100], [100, 100, 0], [100, 0, 0]], c1: [[230, 230, 210], [150, 70, 0], [0, 70, 150], [230, 230, 210], [230, 230, 210], [160, 150, 60], [0, 100, 100], [0, 150, 200], [0, 50, 100], [0, 0, 0], [0, 0, 0]] }] }, { name: "sMonteMH_InitData", parts: [{ joint: "kubi", file: "hatA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [70, 70, 70], [200, 200, 150], [100, 200, 200], [0, 30, 150], [200, 220, 120], [140, 50, 0]], c1: [[160, 130, 50], [70, 70, 70], [200, 200, 150], [50, 120, 160], [0, 30, 150], [0, 130, 50], [140, 50, 0]] }, { kind: 1, mat: "_obi_mat", c0: [[100, 0, 0], [0, 0, 0], [0, 0, 0], [0, 100, 300], [0, 200, 150], [0, 130, 130], [100, 0, 0]], c1: null }] }, { joint: "kubi", file: "higeA_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_hige_mat", c0: [[0, 0, 0], [255, 255, 150], [100, 0, 0], [255, 200, 0]], c1: null }] }, { joint: "kubi", file: "glassesA_model.bmd", slot: 2, colors: [] }, { joint: "kubi", file: "glassesB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[255, 230, 50], [255, 255, 255], [0, 0, 0]], c1: null }] }, { joint: "kubi", file: "hatB_model.bmd", slot: 0, colors: [{ kind: 0, mat: "_boushi_mat", c0: [[255, 255, 60], [255, 130, 0], [255, 255, 0]], c1: null }, { kind: 1, mat: "_obi_mat", c0: [[100, 70, 50], [100, 70, 50], [0, 100, 255]], c1: null }] }, { joint: "kubi", file: "hatE_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 70, 150], [230, 230, 210]], c1: [[230, 230, 210], [0, 70, 150]] }] }, { joint: "kubi", file: "hatD_model.bmd", slot: 0, colors: [{ kind: 1, mat: "_obi_mat", c0: [[0, 100, 230], [400, 400, 350]], c1: null }] }, { joint: "kubi", file: "hatF_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[50, 150, 130], [60, 40, 0]], c1: [[230, 230, 210], [160, 150, 60]] }] }, { joint: "kubi", file: "hatG_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 100, 255], [140, 50, 0]], c1: [[0, 50, 120], [100, 120, 0], [170, 120, 0], [0, 180, 255], [200, 120, 0]] }] }, { joint: "body_jnt", file: "eriA_model.bmd", slot: 1, colors: [{ kind: 2, mat: "_eri_mat", c0: [[0, 70, 150], [255, 255, 230]], c1: [[255, 255, 230], [0, 70, 150]] }] }, { joint: "body_jnt", file: "tieB_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_tie_mat", c0: [[100, 0, 0]], c1: [[150, 130, 0]] }] }, { joint: "body_jnt", file: "uklele_model.bmd", slot: 0, colors: [] }], body: [{ kind: 1, mat: "_hand_mat", c0: [[100, 255, 300], [120, 120, 300], [350, 300, 0], [200, 70, 0], [300, 130, 255], [255, 350, 0], [400, 255, 255], [320, 140, 0], [200, 255, 400], [400, 250, 100]], c1: null }, { kind: 2, mat: "_fuku_mat", c0: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [200, 200, 170], [50, 50, 50], [150, 200, 255], [0, 70, 150], [400, 300, 200], [255, 255, 255], [255, 255, 255], [255, 255, 150]], c1: [[250, 130, 50], [50, 130, 100], [150, 180, 20], [200, 200, 170], [50, 50, 50], [150, 200, 255], [0, 70, 150], [230, 150, 100], [60, 150, 230], [180, 150, 200], [100, 220, 300]] }] }, { name: "sMonteW_InitData", parts: [{ joint: "yashi_jnt", file: "flower_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_naka_mat", c0: [[255, 255, 0], [255, 255, 0], [255, 255, 0]], c1: null }, { kind: 0, mat: "_hana_mat", c0: [[220, 40, 120], [220, 40, 0], [200, 220, 0]], c1: null }] }, { joint: "kubi", file: "hwA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [160, 0, 0], [190, 150, 120], [200, 220, 220]], c1: [[160, 130, 50], [160, 0, 0], [120, 70, 50], [100, 170, 200]] }, { kind: 1, mat: "_obi_mat", c0: [[300, 100, 100], [350, 100, 100], [100, 0, 0], [400, 400, 380]], c1: null }] }, { joint: "kubi", file: "gwB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[150, 0, 0], [0, 200, 0], [200, 200, 0]], c1: null }] }, { joint: "handR_jnt", file: "arrowR_model.bmd", slot: 0, colors: [] }, { joint: "handR_jnt", file: "arrowL_model.bmd", slot: 0, colors: [] }, null, null, null, null, null, null, null], body: [{ kind: 1, mat: "_hand_mat", c0: [[300, 100, 200], [400, 150, 0], [300, 330, 0], [400, 330, 0], [330, 40, 0], [400, 200, 255]], c1: null }, null] }, { name: "sMonteWA_InitData", parts: [{ joint: "yashi_jnt", file: "flower_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_naka_mat", c0: [[255, 255, 0], [255, 255, 0], [255, 255, 0]], c1: null }, { kind: 0, mat: "_hana_mat", c0: [[220, 40, 120], [220, 40, 0], [200, 220, 0]], c1: null }] }, { joint: "kubi", file: "hwA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [160, 0, 0], [190, 150, 120], [200, 220, 220]], c1: [[160, 130, 50], [160, 0, 0], [120, 70, 50], [100, 170, 200]] }, { kind: 1, mat: "_obi_mat", c0: [[300, 100, 100], [350, 100, 100], [100, 0, 0], [400, 400, 380]], c1: null }] }, { joint: "kubi", file: "gwB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[150, 0, 0], [0, 200, 0], [200, 200, 0]], c1: null }] }, { joint: "handR_jnt", file: "arrowR_model.bmd", slot: 0, colors: [] }, { joint: "handR_jnt", file: "arrowL_model.bmd", slot: 0, colors: [] }, null, null, null, null, null, null, null], body: [{ kind: 1, mat: "_hand_mat", c0: [[300, 100, 200], [400, 150, 0], [300, 330, 0], [400, 330, 0], [330, 40, 0], [400, 200, 255]], c1: null }, { kind: 1, mat: "_fuku_mat", c0: [[380, 330, 150], [300, 100, 200], [360, 350, 300], [300, 50, 0], [400, 150, 100], [120, 150, 300]], c1: null }] }, { name: "sMonteWB_InitData", parts: [{ joint: "yashi_jnt", file: "flower_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_naka_mat", c0: [[255, 255, 0], [255, 255, 0], [255, 255, 0]], c1: null }, { kind: 0, mat: "_hana_mat", c0: [[220, 40, 120], [220, 40, 0], [200, 220, 0]], c1: null }] }, { joint: "kubi", file: "hwA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [160, 0, 0], [190, 150, 120], [200, 220, 220]], c1: [[160, 130, 50], [160, 0, 0], [120, 70, 50], [100, 170, 200]] }, { kind: 1, mat: "_obi_mat", c0: [[300, 100, 100], [350, 100, 100], [100, 0, 0], [400, 400, 380]], c1: null }] }, { joint: "kubi", file: "gwB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[150, 0, 0], [0, 200, 0], [200, 200, 0]], c1: null }] }, { joint: "handR_jnt", file: "arrowR_model.bmd", slot: 0, colors: [] }, { joint: "handR_jnt", file: "arrowL_model.bmd", slot: 0, colors: [] }, null, null, null, null, null, null, null], body: [{ kind: 1, mat: "_hand_mat", c0: [[300, 100, 200], [400, 150, 0], [300, 330, 0], [400, 330, 0], [330, 40, 0], [400, 200, 255]], c1: null }, { kind: 2, mat: "_fuku_mat", c0: [[220, 200, 220], [200, 220, 220], [255, 255, 255], [255, 255, 255], [220, 230, 220], [180, 100, 110], [200, 100, 0], [0, 100, 150], [255, 200, 100]], c1: [[100, 80, 200], [100, 170, 200], [150, 0, 60], [180, 120, 200], [140, 180, 300], [180, 100, 110], [200, 100, 0], [0, 100, 150], [255, 200, 100]] }] }, { name: "sMonteWC_InitData", parts: [{ joint: "yashi_jnt", file: "flower_model.bmd", slot: 1, colors: [{ kind: 1, mat: "_naka_mat", c0: [[255, 255, 0], [255, 255, 0], [255, 255, 0]], c1: null }, { kind: 0, mat: "_hana_mat", c0: [[220, 40, 120], [220, 40, 0], [200, 220, 0]], c1: null }] }, { joint: "kubi", file: "hwA_model.bmd", slot: 0, colors: [{ kind: 2, mat: "_boushi_mat", c0: [[200, 200, 120], [160, 0, 0], [190, 150, 120], [200, 220, 220]], c1: [[160, 130, 50], [160, 0, 0], [120, 70, 50], [100, 170, 200]] }, { kind: 1, mat: "_obi_mat", c0: [[300, 100, 100], [350, 100, 100], [100, 0, 0], [400, 400, 380]], c1: null }] }, { joint: "kubi", file: "gwB_model.bmd", slot: 2, colors: [{ kind: 0, mat: "_megane_mat", c0: [[150, 0, 0], [0, 200, 0], [200, 200, 0]], c1: null }] }, { joint: "handR_jnt", file: "arrowR_model.bmd", slot: 0, colors: [] }, { joint: "handR_jnt", file: "arrowL_model.bmd", slot: 0, colors: [] }, { joint: "kubi", file: "hwC_model.bmd", slot: 0, colors: [] }, { joint: "handR_jnt", file: "udewaR_model.bmd", slot: 0, colors: [] }, { joint: "handL_jnt", file: "udewaL_model.bmd", slot: 0, colors: [] }, null, null, null, null], body: [{ kind: 1, mat: "_hand_mat", c0: [[300, 100, 200], [400, 150, 0], [300, 330, 0], [400, 330, 0], [330, 40, 0], [400, 200, 255]], c1: null }, null] }, { name: "sMareM_InitData", parts: [{ joint: "kubi", file: "mareMhat_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[20, 0, 160], [20, 60, 100], [170, 120, 20], [10, 10, 10], [-40, -10, -10], [0, 20, 30], [255, 255, 255], [-160, -200, -70], [240, 240, 190]], c1: [[140, 170, 240], [160, 230, 70], [-20, 220, 80], [150, -30, 40], [-120, -160, -220], [100, 160, 140], [140, 110, 190], [-230, 0, -160], [80, 60, 40]] }] }, { joint: "kubi", file: "mareMhat_B.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[170, 230, 210], [150, 160, 200], [200, 190, 10], [255, -10, -50], [60, 100, 150], [50, 10, 110]], c1: [[25, 20, 20], [-220, -230, 0], [-200, -230, 0], [-150, -100, 20], [20, 20, 10], [160, 130, 220]] }] }, null, { joint: "kubi", file: "mareMhat_E.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [190, 240, 250], [20, 120, 30], [-60, -130, 0], [220, 220, 240], [200, 230, 160], [0, 10, 20], [200, 210, 230], [200, 240, 240]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [60, 90, -70], [220, 230, 100], [-10, -50, 50], [100, 60, 180], [200, 180, 30], [140, 270, 50], [190, 50, 30], [90, 110, 160]] }] }, { joint: "koshi", file: "mareMmakigai_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 60, 50], [-60, 450, 250], [0, -200, -250], [-210, -220, -420], [-170, -200, 0], [140, 200, 255], [0, -110, 30], [190, 120, 20], [150, 110, -40], [200, 50, 40]], c1: [[500, 500, 350], [320, 70, 100], [-10, -20, -350], [110, 100, 200], [180, 190, 170], [-255, -240, -100], [230, 230, 230], [240, 255, 130], [255, 255, 255], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMmakigai_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[110, 125, 200], [-130, -120, -100], [-120, 30, 20], [-200, -200, -250], [-160, -200, 10], [-200, -230, -160], [40, 40, 40], [40, 20, 0], [40, 30, -160], [40, 30, 20]], c1: [[25, 20, 20], [300, 280, 10], [30, 0, 10], [-190, -100, 20], [-60, -70, 10], [-100, -110, 200], [30, -150, -60], [140, 70, 10], [90, 80, 150], [170, 150, 120]] }] }, { joint: "kubi", file: "mareM_grass.bmd", slot: 2, colors: [{ kind: 2, mat: "_matgrass", c0: [[-170, -200, 20], [40, 0, 10], [40, 70, 20]], c1: [[190, 180, 220], [80, 120, 20], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMbivalve_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [100, 60, 180], [200, 230, 160], [0, 10, 20]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [220, 220, 240], [200, 180, 30], [140, 270, 50]] }] }, null, null, null, null], body: [{ kind: 1, mat: "_body", c0: [[370, 290, 170], [350, 340, 120], [260, 180, 100], [300, 150, 130], [300, 200, 60], [240, 160, 230]], c1: null }, null] }, { name: "sMareM_InitData", parts: [{ joint: "kubi", file: "mareMhat_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[20, 0, 160], [20, 60, 100], [170, 120, 20], [10, 10, 10], [-40, -10, -10], [0, 20, 30], [255, 255, 255], [-160, -200, -70], [240, 240, 190]], c1: [[140, 170, 240], [160, 230, 70], [-20, 220, 80], [150, -30, 40], [-120, -160, -220], [100, 160, 140], [140, 110, 190], [-230, 0, -160], [80, 60, 40]] }] }, { joint: "kubi", file: "mareMhat_B.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[170, 230, 210], [150, 160, 200], [200, 190, 10], [255, -10, -50], [60, 100, 150], [50, 10, 110]], c1: [[25, 20, 20], [-220, -230, 0], [-200, -230, 0], [-150, -100, 20], [20, 20, 10], [160, 130, 220]] }] }, null, { joint: "kubi", file: "mareMhat_E.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [190, 240, 250], [20, 120, 30], [-60, -130, 0], [220, 220, 240], [200, 230, 160], [0, 10, 20], [200, 210, 230], [200, 240, 240]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [60, 90, -70], [220, 230, 100], [-10, -50, 50], [100, 60, 180], [200, 180, 30], [140, 270, 50], [190, 50, 30], [90, 110, 160]] }] }, { joint: "koshi", file: "mareMmakigai_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 60, 50], [-60, 450, 250], [0, -200, -250], [-210, -220, -420], [-170, -200, 0], [140, 200, 255], [0, -110, 30], [190, 120, 20], [150, 110, -40], [200, 50, 40]], c1: [[500, 500, 350], [320, 70, 100], [-10, -20, -350], [110, 100, 200], [180, 190, 170], [-255, -240, -100], [230, 230, 230], [240, 255, 130], [255, 255, 255], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMmakigai_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[110, 125, 200], [-130, -120, -100], [-120, 30, 20], [-200, -200, -250], [-160, -200, 10], [-200, -230, -160], [40, 40, 40], [40, 20, 0], [40, 30, -160], [40, 30, 20]], c1: [[25, 20, 20], [300, 280, 10], [30, 0, 10], [-190, -100, 20], [-60, -70, 10], [-100, -110, 200], [30, -150, -60], [140, 70, 10], [90, 80, 150], [170, 150, 120]] }] }, { joint: "kubi", file: "mareM_grass.bmd", slot: 2, colors: [{ kind: 2, mat: "_matgrass", c0: [[-170, -200, 20], [40, 0, 10], [40, 70, 20]], c1: [[190, 180, 220], [80, 120, 20], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMbivalve_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [100, 60, 180], [200, 230, 160], [0, 10, 20]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [220, 220, 240], [200, 180, 30], [140, 270, 50]] }] }, null, null, null, null], body: [{ kind: 1, mat: "_body", c0: [[370, 290, 170], [350, 340, 120], [260, 180, 100], [300, 150, 130], [300, 200, 60], [240, 160, 230]], c1: null }, null] }, { name: "sMareMB_InitData", parts: [{ joint: "kubi", file: "mareMhat_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[20, 0, 160], [20, 60, 100], [170, 120, 20], [10, 10, 10], [-40, -10, -10], [0, 20, 30], [255, 255, 255], [-160, -200, -70], [240, 240, 190]], c1: [[140, 170, 240], [160, 230, 70], [-20, 220, 80], [150, -30, 40], [-120, -160, -220], [100, 160, 140], [140, 110, 190], [-230, 0, -160], [80, 60, 40]] }] }, { joint: "kubi", file: "mareMhat_B.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[170, 230, 210], [150, 160, 200], [200, 190, 10], [255, -10, -50], [60, 100, 150], [50, 10, 110]], c1: [[25, 20, 20], [-220, -230, 0], [-200, -230, 0], [-150, -100, 20], [20, 20, 10], [160, 130, 220]] }] }, null, { joint: "kubi", file: "mareMhat_E.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [190, 240, 250], [20, 120, 30], [-60, -130, 0], [220, 220, 240], [200, 230, 160], [0, 10, 20], [200, 210, 230], [200, 240, 240]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [60, 90, -70], [220, 230, 100], [-10, -50, 50], [100, 60, 180], [200, 180, 30], [140, 270, 50], [190, 50, 30], [90, 110, 160]] }] }, { joint: "koshi", file: "mareMmakigai_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 60, 50], [-60, 450, 250], [0, -200, -250], [-210, -220, -420], [-170, -200, 0], [140, 200, 255], [0, -110, 30], [190, 120, 20], [150, 110, -40], [200, 50, 40]], c1: [[500, 500, 350], [320, 70, 100], [-10, -20, -350], [110, 100, 200], [180, 190, 170], [-255, -240, -100], [230, 230, 230], [240, 255, 130], [255, 255, 255], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMmakigai_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[110, 125, 200], [-130, -120, -100], [-120, 30, 20], [-200, -200, -250], [-160, -200, 10], [-200, -230, -160], [40, 40, 40], [40, 20, 0], [40, 30, -160], [40, 30, 20]], c1: [[25, 20, 20], [300, 280, 10], [30, 0, 10], [-190, -100, 20], [-60, -70, 10], [-100, -110, 200], [30, -150, -60], [140, 70, 10], [90, 80, 150], [170, 150, 120]] }] }, { joint: "kubi", file: "mareM_grass.bmd", slot: 2, colors: [{ kind: 2, mat: "_matgrass", c0: [[-170, -200, 20], [40, 0, 10], [40, 70, 20]], c1: [[190, 180, 220], [80, 120, 20], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMbivalve_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [100, 60, 180], [200, 230, 160], [0, 10, 20]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [220, 220, 240], [200, 180, 30], [140, 270, 50]] }] }, { joint: "kubi", file: "mareMB_set.bmd", slot: 2, colors: [{ kind: 2, mat: "_mat1", c0: [[-210, 40, 100]], c1: [[100, 70, 200]] }, { kind: 2, mat: "_mat2", c0: [[170, 170, 230]], c1: [[255, 255, 255]] }, { kind: 2, mat: "_mat3", c0: [[10, 20, 30]], c1: [[240, 100, 20]] }] }, { joint: "__ROOT_JOINT__", file: "mareMBTurizao.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[60, -200, -200]], c1: [[255, 255, 255]] }, { kind: 2, mat: "_mat2", c0: [[250, 180, 30]], c1: [[255, 255, 255]] }, { kind: 2, mat: "_mat3", c0: [[70, 40, 0]], c1: [[255, 255, 130]] }] }, null, null], body: [{ kind: 1, mat: "_body", c0: [[370, 290, 170], [350, 340, 120], [260, 180, 100], [300, 150, 130], [300, 200, 60], [240, 160, 230]], c1: null }, null] }, { name: "sMareMC_InitData", parts: [{ joint: "kubi", file: "mareMhat_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[20, 0, 160], [20, 60, 100], [170, 120, 20], [10, 10, 10], [-40, -10, -10], [0, 20, 30], [255, 255, 255], [-160, -200, -70], [240, 240, 190]], c1: [[140, 170, 240], [160, 230, 70], [-20, 220, 80], [150, -30, 40], [-120, -160, -220], [100, 160, 140], [140, 110, 190], [-230, 0, -160], [80, 60, 40]] }] }, { joint: "kubi", file: "mareMhat_B.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[170, 230, 210], [150, 160, 200], [200, 190, 10], [255, -10, -50], [60, 100, 150], [50, 10, 110]], c1: [[25, 20, 20], [-220, -230, 0], [-200, -230, 0], [-150, -100, 20], [20, 20, 10], [160, 130, 220]] }] }, null, { joint: "kubi", file: "mareMhat_E.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [190, 240, 250], [20, 120, 30], [-60, -130, 0], [220, 220, 240], [200, 230, 160], [0, 10, 20], [200, 210, 230], [200, 240, 240]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [60, 90, -70], [220, 230, 100], [-10, -50, 50], [100, 60, 180], [200, 180, 30], [140, 270, 50], [190, 50, 30], [90, 110, 160]] }] }, { joint: "koshi", file: "mareMmakigai_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 60, 50], [-60, 450, 250], [0, -200, -250], [-210, -220, -420], [-170, -200, 0], [140, 200, 255], [0, -110, 30], [190, 120, 20], [150, 110, -40], [200, 50, 40]], c1: [[500, 500, 350], [320, 70, 100], [-10, -20, -350], [110, 100, 200], [180, 190, 170], [-255, -240, -100], [230, 230, 230], [240, 255, 130], [255, 255, 255], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMmakigai_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[110, 125, 200], [-130, -120, -100], [-120, 30, 20], [-200, -200, -250], [-160, -200, 10], [-200, -230, -160], [40, 40, 40], [40, 20, 0], [40, 30, -160], [40, 30, 20]], c1: [[25, 20, 20], [300, 280, 10], [30, 0, 10], [-190, -100, 20], [-60, -70, 10], [-100, -110, 200], [30, -150, -60], [140, 70, 10], [90, 80, 150], [170, 150, 120]] }] }, { joint: "kubi", file: "mareM_grass.bmd", slot: 2, colors: [{ kind: 2, mat: "_matgrass", c0: [[-170, -200, 20], [40, 0, 10], [40, 70, 20]], c1: [[190, 180, 220], [80, 120, 20], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMbivalve_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [100, 60, 180], [200, 230, 160], [0, 10, 20]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [220, 220, 240], [200, 180, 30], [140, 270, 50]] }] }, { joint: "kubi", file: "mareMChat_F.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[-170, -200, 0]], c1: [[120, 120, 80]] }] }, { joint: "kubi", file: "mareMCagohige.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[-120, -110, -160]], c1: [[180, -70, 380]] }] }, { joint: "kubi", file: "mareMCkuchihige.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[-120, -110, -160]], c1: [[180, -70, 380]] }] }, null], body: [{ kind: 1, mat: "_body", c0: [[370, 290, 170], [350, 340, 120], [260, 180, 100], [300, 150, 130], [300, 200, 60], [240, 160, 230]], c1: null }, null] }, { name: "sMareMD_InitData", parts: [{ joint: "kubi", file: "mareMhat_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[20, 0, 160], [20, 60, 100], [170, 120, 20], [10, 10, 10], [-40, -10, -10], [0, 20, 30], [255, 255, 255], [-160, -200, -70], [240, 240, 190]], c1: [[140, 170, 240], [160, 230, 70], [-20, 220, 80], [150, -30, 40], [-120, -160, -220], [100, 160, 140], [140, 110, 190], [-230, 0, -160], [80, 60, 40]] }] }, { joint: "kubi", file: "mareMhat_B.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[170, 230, 210], [150, 160, 200], [200, 190, 10], [255, -10, -50], [60, 100, 150], [50, 10, 110]], c1: [[25, 20, 20], [-220, -230, 0], [-200, -230, 0], [-150, -100, 20], [20, 20, 10], [160, 130, 220]] }] }, null, { joint: "kubi", file: "mareMhat_E.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [190, 240, 250], [20, 120, 30], [-60, -130, 0], [220, 220, 240], [200, 230, 160], [0, 10, 20], [200, 210, 230], [200, 240, 240]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [60, 90, -70], [220, 230, 100], [-10, -50, 50], [100, 60, 180], [200, 180, 30], [140, 270, 50], [190, 50, 30], [90, 110, 160]] }] }, { joint: "koshi", file: "mareMmakigai_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 60, 50], [-60, 450, 250], [0, -200, -250], [-210, -220, -420], [-170, -200, 0], [140, 200, 255], [0, -110, 30], [190, 120, 20], [150, 110, -40], [200, 50, 40]], c1: [[500, 500, 350], [320, 70, 100], [-10, -20, -350], [110, 100, 200], [180, 190, 170], [-255, -240, -100], [230, 230, 230], [240, 255, 130], [255, 255, 255], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMmakigai_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[110, 125, 200], [-130, -120, -100], [-120, 30, 20], [-200, -200, -250], [-160, -200, 10], [-200, -230, -160], [40, 40, 40], [40, 20, 0], [40, 30, -160], [40, 30, 20]], c1: [[25, 20, 20], [300, 280, 10], [30, 0, 10], [-190, -100, 20], [-60, -70, 10], [-100, -110, 200], [30, -150, -60], [140, 70, 10], [90, 80, 150], [170, 150, 120]] }] }, { joint: "kubi", file: "mareM_grass.bmd", slot: 2, colors: [{ kind: 2, mat: "_matgrass", c0: [[-170, -200, 20], [40, 0, 10], [40, 70, 20]], c1: [[190, 180, 220], [80, 120, 20], [255, 255, 255]] }] }, { joint: "koshi", file: "mareMbivalve_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[330, -150, 200], [255, 255, 420], [0, 120, 100], [100, 60, 180], [200, 230, 160], [0, 10, 20]], c1: [[170, 210, 230], [230, -100, 320], [-70, -40, 130], [220, 220, 240], [200, 180, 30], [140, 270, 50]] }] }, { joint: "migite", file: "mareMDhoragai_A.bmd", slot: 2, colors: [{ kind: 2, mat: "_mat1", c0: [[0, -100, 50]], c1: [[400, 250, 150]] }] }, null, null, null], body: [{ kind: 1, mat: "_body", c0: [[370, 290, 170], [350, 340, 120], [260, 180, 100], [300, 150, 130], [300, 200, 60], [240, 160, 230]], c1: null }, null] }, { name: "sMareW_InitData", parts: [{ joint: "kubi", file: "mareWpearl_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[-20, -10, -100], [-30, -20, 0], [40, 20, 70], [20, 110, 0], [-10, -10, 240], [160, 150, 170]], c1: [[220, 255, 255], [220, 240, 180], [100, 70, 165], [170, -10, 150], [150, 150, 240], [250, 255, 230]] }] }, { joint: "kubi", file: "mareWhatW_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[10, 0, 120], [260, 60, 20], [-170, -200, -250], [70, 280, 100], [210, 200, 70], [230, 100, 170]], c1: [[120, 150, -50], [-35, -50, -150], [240, 240, 190], [140, 80, 220], [140, 100, 50], [255, 255, 255]] }] }, null, null, { joint: "koshi", file: "mareWkai_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[160, 20, 40], [0, 100, 170], [80, 20, -70], [20, 120, 260], [200, 210, -30], [220, 210, 160]], c1: [[255, 200, 255], [255, 255, 255], [165, 145, 185], [240, 250, 240], [80, 80, 160], [360, 340, 100]] }] }, { joint: "koshi", file: "mareWkai_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[-100, -50, -10], [-50, -40, -120], [-180, -210, 10], [130, 90, -40], [230, 250, 130], [200, 60, 120], [50, 30, 20], [210, 90, 30], [0, 125, 50]], c1: [[10, 20, 130], [0, 70, 0], [240, 240, 190], [-230, 0, 40], [160, 100, 0], [255, 255, 255], [190, -70, 200], [-10, -65, 0], [160, 240, 130]] }] }, null, null, { joint: "koshi", file: "mareWbivalveW_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 0, 30], [30, 30, 120], [-60, -100, -40], [-10, 140, 60], [-200, 40, -100], [255, 255, 255]], c1: [[-50, 20, 60], [40, 120, 200], [80, 30, 140], [220, 10, 10], [0, 10, 10], [40, 160, 80]] }] }, { joint: "kubi", file: "mareWhatW_D.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 0, 30], [30, 30, 120], [-60, -100, -40], [-10, 140, 60], [-200, 40, -100], [255, 255, 255], [220, 240, -20], [250, 150, 210], [220, 240, -20], [255, 255, 150], [230, 250, 230]], c1: [[-50, 20, 60], [40, 120, 200], [80, 30, 140], [220, 10, 10], [0, 10, 10], [40, 160, 80], [200, 210, 50], [255, 255, 255], [170, 150, 210], [-10, -100, 0], [-200, -60, -20]] }] }, null, null], body: [{ kind: 1, mat: "_body", c0: [[410, 255, 280], [430, 330, 150], [440, 330, 255], [300, 200, 130], [300, 190, 220], [400, 250, 90]], c1: null }, null] }, { name: "sMareW_InitData", parts: [{ joint: "kubi", file: "mareWpearl_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[-20, -10, -100], [-30, -20, 0], [40, 20, 70], [20, 110, 0], [-10, -10, 240], [160, 150, 170]], c1: [[220, 255, 255], [220, 240, 180], [100, 70, 165], [170, -10, 150], [150, 150, 240], [250, 255, 230]] }] }, { joint: "kubi", file: "mareWhatW_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[10, 0, 120], [260, 60, 20], [-170, -200, -250], [70, 280, 100], [210, 200, 70], [230, 100, 170]], c1: [[120, 150, -50], [-35, -50, -150], [240, 240, 190], [140, 80, 220], [140, 100, 50], [255, 255, 255]] }] }, null, null, { joint: "koshi", file: "mareWkai_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[160, 20, 40], [0, 100, 170], [80, 20, -70], [20, 120, 260], [200, 210, -30], [220, 210, 160]], c1: [[255, 200, 255], [255, 255, 255], [165, 145, 185], [240, 250, 240], [80, 80, 160], [360, 340, 100]] }] }, { joint: "koshi", file: "mareWkai_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[-100, -50, -10], [-50, -40, -120], [-180, -210, 10], [130, 90, -40], [230, 250, 130], [200, 60, 120], [50, 30, 20], [210, 90, 30], [0, 125, 50]], c1: [[10, 20, 130], [0, 70, 0], [240, 240, 190], [-230, 0, 40], [160, 100, 0], [255, 255, 255], [190, -70, 200], [-10, -65, 0], [160, 240, 130]] }] }, null, null, { joint: "koshi", file: "mareWbivalveW_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 0, 30], [30, 30, 120], [-60, -100, -40], [-10, 140, 60], [-200, 40, -100], [255, 255, 255]], c1: [[-50, 20, 60], [40, 120, 200], [80, 30, 140], [220, 10, 10], [0, 10, 10], [40, 160, 80]] }] }, { joint: "kubi", file: "mareWhatW_D.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 0, 30], [30, 30, 120], [-60, -100, -40], [-10, 140, 60], [-200, 40, -100], [255, 255, 255], [220, 240, -20], [250, 150, 210], [220, 240, -20], [255, 255, 150], [230, 250, 230]], c1: [[-50, 20, 60], [40, 120, 200], [80, 30, 140], [220, 10, 10], [0, 10, 10], [40, 160, 80], [200, 210, 50], [255, 255, 255], [170, 150, 210], [-10, -100, 0], [-200, -60, -20]] }] }, null, null], body: [{ kind: 1, mat: "_body", c0: [[410, 255, 280], [430, 330, 150], [440, 330, 255], [300, 200, 130], [300, 190, 220], [400, 250, 90]], c1: null }, null] }, { name: "sMareWB_InitData", parts: [{ joint: "kubi", file: "mareWpearl_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[-20, -10, -100], [-30, -20, 0], [40, 20, 70], [20, 110, 0], [-10, -10, 240], [160, 150, 170]], c1: [[220, 255, 255], [220, 240, 180], [100, 70, 165], [170, -10, 150], [150, 150, 240], [250, 255, 230]] }] }, { joint: "kubi", file: "mareWhatW_A.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[10, 0, 120], [260, 60, 20], [-170, -200, -250], [70, 280, 100], [210, 200, 70], [230, 100, 170]], c1: [[120, 150, -50], [-35, -50, -150], [240, 240, 190], [140, 80, 220], [140, 100, 50], [255, 255, 255]] }] }, null, null, { joint: "koshi", file: "mareWkai_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[160, 20, 40], [0, 100, 170], [80, 20, -70], [20, 120, 260], [200, 210, -30], [220, 210, 160]], c1: [[255, 200, 255], [255, 255, 255], [165, 145, 185], [240, 250, 240], [80, 80, 160], [360, 340, 100]] }] }, { joint: "koshi", file: "mareWkai_B.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[-100, -50, -10], [-50, -40, -120], [-180, -210, 10], [130, 90, -40], [230, 250, 130], [200, 60, 120], [50, 30, 20], [210, 90, 30], [0, 125, 50]], c1: [[10, 20, 130], [0, 70, 0], [240, 240, 190], [-230, 0, 40], [160, 100, 0], [255, 255, 255], [190, -70, 200], [-10, -65, 0], [160, 240, 130]] }] }, null, null, { joint: "koshi", file: "mareWbivalveW_A.bmd", slot: 1, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 0, 30], [30, 30, 120], [-60, -100, -40], [-10, 140, 60], [-200, 40, -100], [255, 255, 255]], c1: [[-50, 20, 60], [40, 120, 200], [80, 30, 140], [220, 10, 10], [0, 10, 10], [40, 160, 80]] }] }, { joint: "kubi", file: "mareWhatW_D.bmd", slot: 0, colors: [{ kind: 2, mat: "_mat1", c0: [[100, 0, 30], [30, 30, 120], [-60, -100, -40], [-10, 140, 60], [-200, 40, -100], [255, 255, 255], [220, 240, -20], [250, 150, 210], [220, 240, -20], [255, 255, 150], [230, 250, 230]], c1: [[-50, 20, 60], [40, 120, 200], [80, 30, 140], [220, 10, 10], [0, 10, 10], [40, 160, 80], [200, 210, 50], [255, 255, 255], [170, 150, 210], [-10, -100, 0], [-200, -60, -20]] }] }, { joint: "__ROOT_JOINT__", file: "mareWBbaby.bmd", slot: 2, colors: [{ kind: 1, mat: "_body", c0: [[440, 330, 255]], c1: null }, { kind: 2, mat: "_baby_hat", c0: [[70, 0, 0]], c1: [[190, 60, 30]] }, { kind: 2, mat: "_baby_bed", c0: [[70, 10, 10]], c1: [[200, 180, 10]] }] }, null], body: [{ kind: 1, mat: "_body", c0: [[410, 255, 280], [430, 330, 150], [440, 330, 255], [300, 200, 130], [300, 190, 220], [400, 250, 90]], c1: null }, null] }, { name: "sKinopio_InitData", parts: [{ joint: "kubi", file: "kinopio_sunmegane.bmd", slot: 0, colors: [] }, null, null, null, null, null, null, null, null, null, null, null], body: [{ kind: 2, mat: "_mat_cap", c0: [[30, 30, 200], [230, 0, 0], [30, 120, 30], [250, 220, 30], [150, 0, 200]], c1: [[230, 230, 230], [230, 230, 230], [230, 230, 230], [230, 230, 230], [230, 230, 230]] }, { kind: 2, mat: "_mat_cloth", c0: [[250, 150, 0], [250, 150, 0], [250, 150, 0], [250, 150, 0], [250, 150, 0]], c1: [[30, 30, 200], [230, 0, 0], [30, 120, 30], [250, 220, 30], [150, 0, 200]] }] }, { name: "sKinojii_InitData", parts: [{ joint: "jnt_rfinger_1", file: "kinoji_stick.bmd", slot: 0, colors: [] }, null, null, null, null, null, null, null, null, null, null, null], body: [null, null] }, { name: "sPeach_InitData", parts: [{ joint: "kubi", file: "peach_hair_normal.bmd", slot: 0, colors: [] }, { joint: "jnt_hand_L", file: "peach_hand1_l.bmd", slot: 0, colors: [] }, { joint: "jnt_hand_R", file: "peach_hand1_r.bmd", slot: 0, colors: [] }, { joint: "kubi", file: "peach_hair_ponytail.bmd", slot: 0, colors: [] }, { joint: "jnt_hand_R", file: "peach_parasol.bmd", slot: 0, colors: [] }, { joint: "jnt_hand_L", file: "peach_hand2_l.bmd", slot: 0, colors: [] }, { joint: "jnt_hand_R", file: "peach_hand2_r.bmd", slot: 0, colors: [] }, null, null, null, null, null], body: [null, null] }, { name: "sRaccoonDog_InitData", parts: [{ joint: "ukiwa_null", file: "ukiwa.bmd", slot: 0, colors: [{ kind: 2, mat: "_ukiwa", c0: [[155, 0, 0], [10, 30, 150]], c1: [[255, 255, 255], [240, 220, 200]] }] }, null, null, null, null, null, null, null, null, null, null, null], body: [null, { kind: 2, mat: "_pants", c0: [[0, 0, 0], [270, 280, 275]], c1: [[255, 255, 255], [-20, 100, -50]] }] }, { name: "sSunflowerL_InitData", parts: [null, null, null, null, null, null, null, null, null, null, null, null], body: [null, null] }, { name: "sSunflowerS_InitData", parts: [null, null, null, null, null, null, null, null, null, null, null, null], body: [null, null] }, { name: "sBoardNpc_InitData", parts: [null, null, null, null, null, null, null, null, null, null, null, null], body: [null, null] }];

// src/actors.ts
var _q = quat_exports.create();
var NPC_ORDER = [
  "NPCMonteM",
  "NPCMonteMA",
  "NPCMonteMB",
  "NPCMonteMC",
  "NPCMonteMD",
  "NPCMonteME",
  "NPCMonteMF",
  "NPCMonteMG",
  "NPCMonteMH",
  "NPCMonteW",
  "NPCMonteWA",
  "NPCMonteWB",
  "NPCMonteWC",
  "NPCMareM",
  "NPCMareMA",
  "NPCMareMB",
  "NPCMareMC",
  "NPCMareMD",
  "NPCMareW",
  "NPCMareWA",
  "NPCMareWB",
  "NPCKinopio",
  "NPCKinojii",
  "NPCPeach",
  "NPCRaccoonDog",
  "NPCSunflowerL",
  "NPCSunflowerS"
];
var POLLUTION_NPCS = /* @__PURE__ */ new Set(["NPCMonteM", "NPCMonteMA", "NPCMonteMC", "NPCMonteW", "NPCMonteWA", "NPCMareM", "NPCMareW", "NPCKinopio"]);
var SPECIAL_NPCS = /* @__PURE__ */ new Set(["NPCMonteMF", "NPCMonteMG", "NPCMonteMH", "NPCMonteWC", "NPCMareMA", "NPCMareMB", "NPCMareMC", "NPCMareMD", "NPCMareWA", "NPCMareWB"]);
function npcFields(o) {
  try {
    const v = o.payload;
    let p2 = 36;
    p2 += 2 + v.getUint16(p2) + 4;
    p2 += 2 + v.getUint16(p2);
    p2 += 2 + v.getUint16(p2);
    const vals = [];
    for (let k = 0; k < 9; k++) vals.push(v.getInt32(p2 + k * 4));
    return { c0: vals.slice(0, 3), c1: vals.slice(3, 6), parts: Math.max(0, vals[6]) };
  } catch {
    return null;
  }
}
var s10 = (c) => ({ r: c[0] / 255, g: c[1] / 255, b: c[2] / 255, a: 1 });
function npcColour(m, cc, idx) {
  if (!cc || idx < 0) return;
  const mi = m.materialInstances.find((x) => x.name === cc.mat);
  if (!mi) return;
  const a = cc.c0 && cc.c0[idx], b = cc.c1 && cc.c1[idx];
  if (cc.kind === 0 && a) mi.setColorOverride(0 /* MAT0 */, { ...s10(a), a: 1 });
  else if (cc.kind === 1 && a) mi.setColorOverride(9 /* C0 */, s10(a));
  else if (cc.kind === 2) {
    if (a) mi.setColorOverride(10 /* C1 */, s10(a));
    if (b) mi.setColorOverride(11 /* C2 */, s10(b));
  }
}
var TEXTURE_SWAPS = [
  ["H_ma_rak_dummy", "map/pollution/h_ma_rak.bti"],
  ["I_mom_mino_dummyI4", "montemcommon/i_mom_mino_rgba.bti"],
  ["I_mow_mino_dummyI4", "montewcommon/i_mow_mino_rgba.bti"],
  ["J_jellyFish_dummy", "marejellyfish/j_kurage.bti"]
];
var btiCache = /* @__PURE__ */ new WeakMap();
function swapTextures(device2, cache3, arc, models) {
  let c = btiCache.get(arc);
  if (!c) {
    c = /* @__PURE__ */ new Map();
    btiCache.set(arc, c);
  }
  for (const [name, path] of TEXTURE_SWAPS) {
    let d = c.get(path);
    if (d === void 0) {
      const f = arc.findFileData(path);
      d = f ? new BTIData(device2, cache3, BTI.parse(f, name).texture) : null;
      c.set(path, d);
    }
    if (!d) continue;
    for (const m of models) {
      const r = m.getTextureMappingReference(name);
      if (r) d.fillTextureMapping(r);
    }
  }
}
var actorParts = [];
function updateActorParts(parts, timeMs) {
  const done = /* @__PURE__ */ new Set();
  for (const p2 of parts) {
    if (!done.has(p2.body)) {
      p2.body.animationController.setTimeInMilliseconds(timeMs);
      p2.body.calcAnim();
      done.add(p2.body);
    }
    mat4_exports.copy(p2.part.modelMatrix, p2.body.shapeInstanceState.jointToWorldMatrixArray[p2.joint] || p2.body.modelMatrix);
  }
}
var SKIP = /^(Light|AmbColor|Cube\w*|AreaCylinder|\w*Manager|Map|Sky|SunMgr|MirrorCamera|Mario|GroupObj|IdxGroup|MarScene|MapObjSoundGroup|MapObjWave|Pollution|\w*Camera\w*|\w*Event\w*Point|Strategy|ConductorInit|NameRefGrp|ScenarioArchiveName\w*|Shimmer)$/;
var TYPE_FOLDERS = {
  NPCMareM: "marem",
  NPCMareMB: "maremb",
  NPCMareW: "marew",
  NPCMareWB: "marewb",
  AnimalMew: "mew",
  AnimalBird: "bird",
  NameKuri: "namekuri2",
  BombHei: "bombhei",
  Cannon: "cannon",
  RaccoonDog: "raccoondog",
  NPCRaccoonDog: "raccoondog",
  Gesso: "mamegesso",
  LandGesso: "rikugesso",
  BossGesso: "bgeso",
  PoiHana: "poihana",
  PoiHanaRed: "poihana",
  SleepPoiHana: "poihana",
  StayPakkun: "pakkun",
  Pakkun: "pakkun",
  HanaSambo: "sambohead",
  Yumbo: "sambohead",
  ElecNokonoko: "dennoko",
  Telesa: "telesa",
  LoopTelesa: "telesa",
  BoxTelesa: "telesa",
  MarioModokiTelesa: "telesa",
  BossTelesa: "telesa",
  FishoidA: "fish",
  FishoidB: "fish",
  FishoidC: "fish",
  FishoidD: "fish",
  ButterflyA: "butterfly",
  ButterflyB: "butterfly",
  ButterflyC: "butterfly",
  NPCBoard: "boardnpc",
  NPCKinopio: "kinopio",
  NPCKinojii: "kinojii",
  NPCPeach: "peach",
  Amenbo: "amenbo",
  HamuKuri: "hamukuri",
  Hamukuri: "hamukuri",
  HaneHamuKuri: "hanekuri",
  HaneHamuKuri2: "hanekuri",
  DoroHaneKuri: "hanekuri",
  KageMario: "kagemario",
  Kazekun: "kazekun",
  Manta: "manta",
  FireWanwan: "firewanwan",
  BossWanwan: "bwanwan",
  BeeHive: "beehive",
  Kugu: "kug",
  Aminoko: "aminoko",
  GateKeeper: "gatekeeper",
  OrangeSeal: "seal",
  BossPakkun: "kbosspakkun",
  Gorogoro: "gorogoro"
};
var PREFERRED_FILES = {
  poihana: "default.bmd",
  sambohead: "sambohead.bmd",
  telesa: "telesa.bmd",
  mamegesso: "default.bmd",
  rikugesso: "geso_model1.bmd",
  bgeso: "bgeso_body.bmd",
  pakkun: "pakun.bmd",
  kinopio: "kinopio_body.bmd",
  kinojii: "kinoji_body.bmd",
  peach: "peach_model.bmd",
  beehive: "bee_nest.bmd",
  firewanwan: "wanwan.bmd",
  bwanwan: "bwanwan_body.bmd",
  gatekeeper: "gene_pakkun_model1.bmd",
  seal: "gene_orange_model1.bmd",
  cannon: "default.bmd",
  bombhei: "nejibomb_model1.bmd"
};
var NPC_BODIES = {
  NPCMareM: ["marem", "marem.bmd"],
  NPCMareMA: ["marem", "marem.bmd"],
  NPCMareMB: ["marem", "marem.bmd"],
  NPCMareMC: ["marem", "marem.bmd"],
  NPCMareMD: ["marem", "marem.bmd"],
  NPCMareW: ["marew", "marew.bmd"],
  NPCMareWA: ["marew", "marew.bmd"],
  NPCMareWB: ["marew", "marew.bmd"],
  NPCRaccoonDog: ["raccoondog", "tanuki.bmd"],
  RaccoonDog: ["raccoondog", "tanuki.bmd"]
};
var TYPE_FILES = {
  Yumbo: "yumbo.bmd",
  HaneHamuKuri: "hanekuri.bmd",
  HaneHamuKuri2: "hanekuri.bmd",
  DoroHaneKuri: "dorohane.bmd",
  MarioModokiTelesa: "modoki.bmd",
  FishoidA: "fisha.bmd",
  FishoidB: "fishb.bmd",
  FishoidC: "fishc.bmd",
  FishoidD: "fishd.bmd",
  ButterflyA: "butterflya.bmd",
  ButterflyB: "butterflyb.bmd",
  ButterflyC: "butterflyc.bmd"
};
var IDLE_WORDS = ["wait", "idle", "stand", "taiki", "walk", "fly", "swim", "swing"];
function listFiles(arc) {
  const out = /* @__PURE__ */ new Map();
  const walk = (d, prefix) => {
    for (const f of d.files) out.set((prefix + f.name).toLowerCase(), f);
    for (const s of d.subdirs) if (s.name !== "." && s.name !== "..") walk(s, prefix + s.name + "/");
  };
  walk(arc.root, "");
  return out;
}
function isSpine(o) {
  try {
    const v = o.payload;
    let p2 = 36 + 2 + v.getUint16(36);
    p2 += 4;
    const n = v.getUint16(p2);
    const name = new TextDecoder("shift_jis").decode(o.bytes.subarray(p2 + 2, p2 + 2 + n));
    return name.includes("\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC") || name.includes("\u7BA1\u7406");
  } catch {
    return false;
  }
}
function findModel(files, typ) {
  if (NPC_BODIES[typ]) {
    const [f, fn] = NPC_BODIES[typ];
    if (files.has(`${f}/${fn}`)) return `${f}/${fn}`;
  }
  const base = typ.toLowerCase().replace(/^(npc|animal|enemy)/, "");
  const folders = [(TYPE_FOLDERS[typ] || "").toLowerCase(), typ.toLowerCase(), base];
  for (let n = base.length - 1; n > 3; n--) folders.push(base.slice(0, n));
  for (const f of folders) {
    if (!f || f === "mapobj" || f === "map") continue;
    const names = [...files.keys()].filter((k) => k.startsWith(f + "/") && k.split("/").length === 2 && (k.endsWith(".bmd") || k.endsWith(".bdl"))).sort();
    if (!names.length) continue;
    for (const want of [TYPE_FILES[typ], PREFERRED_FILES[f], `${f}.bmd`]) if (want && names.includes(`${f}/${want.toLowerCase()}`)) return `${f}/${want.toLowerCase()}`;
    for (const word of ["model1", "_model", "default", "set", "body"]) {
      const hit = names.find((k) => k.includes(word));
      if (hit) return hit;
    }
    return names.reduce((a, b) => b.length < a.length ? b : a);
  }
  return null;
}
function idleAnim(files, model, joints) {
  const folder = model.split("/")[0];
  const folders = [folder, folder + "anm", folder + "common", folder.slice(0, -1) + "common", folder.slice(0, -2) + "common"];
  const cands = [...files.keys()].filter((k) => folders.some((f) => k.startsWith(f + "/")) && k.split("/").length === 2 && k.endsWith(".bck")).sort();
  for (const w of IDLE_WORDS)
    for (const k of cands) {
      if (!k.split("/")[1].includes(w)) continue;
      try {
        const a = BCK.parse(files.get(k).buffer);
        if (a.jointAnimationEntries.length === joints) return a;
      } catch {
      }
    }
  return null;
}
function buildActors(device2, cache3, arc) {
  actorParts.length = 0;
  const scene = arc.findFileData("map/scene.bin");
  if (!scene) return [];
  const files = listFiles(arc);
  const models = /* @__PURE__ */ new Map();
  const out = [];
  for (const o of parseNameRefs(scene.arrayBuffer, scene.byteOffset, scene.byteLength)) {
    if (SKIP.test(o.type) || !isSpine(o)) continue;
    const pl = placement(o);
    if (!pl) continue;
    const path = findModel(files, o.type);
    if (!path) continue;
    if (!models.has(path)) {
      try {
        models.set(path, new J3DModelData2(device2, cache3, BMD.parse(files.get(path).buffer)));
      } catch {
        models.set(path, null);
      }
    }
    const data = models.get(path);
    if (!data) continue;
    const m = new J3DModelInstanceSimple(data);
    m.passMask = 2 /* MAIN */;
    const anim = idleAnim(files, path, data.bmd.jnt1.joints.length);
    if (anim) m.bindANK1(anim);
    const base = path.replace(/\.(bmd|bdl)$/, "");
    const btk = files.get(base + ".btk"), brk = files.get(base + ".brk");
    try {
      if (btk) m.bindTTK1(BTK.parse(btk.buffer));
      if (brk) m.bindTRK1(BRK.parse(brk.buffer));
    } catch {
    }
    const [[x, y, z], [rx, ry, rz], [sx, sy, sz]] = pl;
    quat_exports.fromEuler(_q, rx, ry, rz);
    mat4_exports.fromRotationTranslationScale(m.modelMatrix, _q, [x, y, z], [sx, sy, sz]);
    m.name = `${o.type} ${o.name}`;
    out.push(m);
    const ni = NPC_ORDER.indexOf(o.type), f = ni >= 0 ? npcFields(o) : null;
    if (f) {
      const info = npc_init_default[ni];
      for (let j = 0; j < 2; j++) npcColour(m, info.body[j], f.c0[j]);
      if (POLLUTION_NPCS.has(o.type) || SPECIAL_NPCS.has(o.type)) {
        const amount = POLLUTION_NPCS.has(o.type) ? Math.max(0, f.c0[2]) / 255 : 0;
        const k0 = { r: 1, g: 1, b: 1, a: (Math.floor(amount * 150) & 255) / 255 };
        for (const mi of m.materialInstances) if (!/eye/i.test(mi.name)) mi.setColorOverride(4 /* K0 */, k0);
      }
      info.parts.forEach((part, i) => {
        if (!part || !(f.parts >> i & 1)) return;
        const path2 = [...files.keys()].find((k) => k.endsWith("/" + part.file.toLowerCase()));
        if (!path2) return;
        if (!models.has(path2)) {
          try {
            models.set(path2, new J3DModelData2(device2, cache3, BMD.parse(files.get(path2).buffer)));
          } catch {
            models.set(path2, null);
          }
        }
        const pd = models.get(path2);
        if (!pd) return;
        const pm = new J3DModelInstanceSimple(pd);
        pm.passMask = 2 /* MAIN */;
        const idx = part.slot < 3 ? f.c1[part.slot] : -1;
        for (const cc of part.colors || []) npcColour(pm, cc, idx);
        const joint = data.bmd.jnt1.joints.findIndex((j) => j.name === part.joint);
        actorParts.push({ part: pm, body: m, joint: joint < 0 ? 0 : joint });
        out.push(pm);
      });
    }
  }
  swapTextures(device2, cache3, arc, out);
  return out;
}

// src/main.ts
var QF_PER_SECOND = 12e4 / 1001;
var QF_PER_FRAME = 4;
var COLORS = ["#e8402a", "#2f7de1", "#2aa36b", "#a35ad8", "#e07b1c", "#0fa3a3"];
var WORLD_NAMES = {
  0: "Delfino Airstrip",
  1: "Delfino Plaza",
  2: "Bianco Hills",
  3: "Ricco Harbor",
  4: "Gelato Beach",
  5: "Pinna Park",
  6: "Sirena Beach",
  7: "Hotel Delfino",
  8: "Pianta Village",
  9: "Noki Bay",
  13: "Pinna Park",
  14: "Casino Delfino",
  16: "Noki Bay undersea",
  52: "Corona Mountain",
  55: "Petey Piranha",
  56: "King Boo",
  57: "Eely-Mouth",
  58: "Mecha-Bowser",
  59: "Gooper Blooper",
  60: "Bowser"
};
var $ = (id) => document.getElementById(id);
var fs = null;
var stageTable = [];
var marioArc = null;
var yoshiArc = null;
var renderer = null;
var stageName = "";
var stageLoading = "";
var triggers = [];
var ghosts = [];
var lead = null;
var t = 0;
var playing = false;
var speed = 1;
var camMode = "follow";
var canvas = $("scene");
var gl = canvas.getContext("webgl2", { antialias: false, preserveDrawingBuffer: false, depth: false, stencil: false });
if (!gl) throw new Error("This browser has no WebGL 2.");
var swapChain = createSwapChainForWebGL2(gl, new GfxPlatformWebGL2Config());
var device = swapChain.getDevice();
var camera = new Camera();
camera.clipSpaceNearZ = device.queryVendorInfo().clipSpaceNearZ;
var input = new InputManager(canvas);
var fps = new FPSCameraController();
fps.camera = camera;
var viewerInput = {
  camera,
  time: 0,
  deltaTime: 0,
  backbufferWidth: 1,
  backbufferHeight: 1,
  onscreenTexture: null,
  antialiasingMode: 1 /* FXAA */,
  mouseLocation: { mouseX: -1, mouseY: -1 },
  debugConsole: { addInfoLine() {
  } }
};
async function useDisc(g) {
  fs = g;
  stageTable = parseStageArc(await fs.read("data/stageArc.bin"));
  marioArc = parseArchive(await fs.read("data/mario.szs"), decompressSW);
  yoshiArc = fs.has("data/yoshi.szs") ? parseArchive(await fs.read("data/yoshi.szs"), decompressSW) : null;
  $("discLabel").textContent = `${g.label}${g.id ? ` \xB7 ${g.id}` : ""}`;
  document.body.classList.add("hasDisc");
  fillStagePicker();
  const route = leadRoute();
  await loadStage(route ? sceneForRoute(stageTable, route.area, route.episode) || "dolpic0" : "dolpic0");
}
async function pickDisc() {
  const w = window;
  if (w.showOpenFilePicker) {
    try {
      const [h] = await w.showOpenFilePicker({ types: [{ description: "GameCube disc image", accept: { "application/octet-stream": [".iso", ".gcm"] } }] });
      const file = await h.getFile();
      await useDisc(await openDisc(file));
      rememberHandle(h);
      return;
    } catch (e) {
      if (e && e.name === "AbortError") return;
      if (!(e instanceof TypeError)) {
        showError(e);
        return;
      }
    }
  }
  $("isoFile").click();
}
async function reopenRemembered() {
  const h = await rememberedHandle();
  if (!h) return false;
  try {
    if (await h.queryPermission({ mode: "read" }) !== "granted" && await h.requestPermission({ mode: "read" }) !== "granted") return false;
    await useDisc(await openDisc(await h.getFile()));
    return true;
  } catch (e) {
    forgetHandle();
    showError(e);
    return false;
  }
}
function showError(e) {
  const box = $("error");
  box.textContent = e && e.message ? e.message : String(e);
  box.hidden = false;
  console.error(e);
}
function fillStagePicker() {
  const sel = $("stage");
  sel.textContent = "";
  stageTable.forEach((eps, area) => {
    const seen = /* @__PURE__ */ new Set();
    const names = eps.filter((s) => s && s !== "none" && !seen.has(s) && seen.add(s) && fs.has(`data/scene/${s}.szs`));
    if (!names.length) return;
    const og = document.createElement("optgroup");
    og.label = WORLD_NAMES[area] || `Area ${area}`;
    for (const s of names) {
      const o = document.createElement("option");
      o.value = s;
      o.textContent = s;
      og.append(o);
    }
    sel.append(og);
  });
  sel.value = stageName;
}
async function loadStage(name) {
  if (!fs || name === stageName || name === stageLoading) return;
  if (!fs.has(`data/scene/${name}.szs`)) {
    showError(new Error(`${name}.szs isn't on this disc.`));
    return;
  }
  stageLoading = name;
  $("status").textContent = `Loading ${name}\u2026`;
  try {
    const buf = await fs.read(`data/scene/${name}.szs`);
    const context = { device, dataFetcher: { fetchData: async () => new ArrayBufferSlice(buf) } };
    const r = await new SunshineSceneDesc(name, name).createScene(device, context);
    if (stageLoading !== name) {
      r.destroy(device);
      return;
    }
    if (renderer) destroyStage();
    renderer = r;
    stageName = name;
    triggers = buildTriggers(r.rarc);
    playerSun = findLight(r, "\u592A\u967D\uFF08\u30D7\u30EC\u30A4\u30E4\u30FC\uFF09");
    objectSun = findLight(r, "\u592A\u967D\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF09");
    r.beforePrepare = (vi) => {
      poseGhosts();
      if (actorParts.length) updateActorParts(actorParts, vi.time);
    };
    const cache3 = r.renderHelper.renderInstManager.gfxRenderCache;
    const actors = buildActors(device, cache3, r.rarc);
    const oa = r.objectAmbient;
    if (oa) for (const a of actors) a.modelMaterialData.materialData?.forEach((md) => {
      md.material.colorAmbRegs[0] = { r: oa.r / 255, g: oa.g / 255, b: oa.b / 255, a: oa.a / 255 };
    });
    for (const a of actors) a.isPlayer = true;
    actorModels = actors;
    r.modelInstances.push(...actors);
    for (const g of ghosts) attachMario(g);
    $("stage").value = name;
    if (!ghosts.length || camMode === "free") frameStage();
    $("status").textContent = "";
  } catch (e) {
    showError(e);
    $("status").textContent = "";
  } finally {
    if (stageLoading === name) stageLoading = "";
  }
}
function destroyStage() {
  if (!renderer) return;
  for (const g of ghosts) {
    g.mario = null;
    g.yoshi = null;
  }
  renderer.destroy(device);
  renderer = null;
}
function attachMario(g) {
  if (!renderer || !marioArc) return;
  const cache3 = renderer.renderHelper.renderInstManager.gfxRenderCache;
  const m = new MarioModel(device, cache3, marioArc);
  const amb = renderer.playerAmbient;
  if (amb) for (const inst of m.all) inst.modelMaterialData.materialData?.forEach((md) => {
    md.material.colorAmbRegs[0] = { r: amb.r / 255, g: amb.g / 255, b: amb.b / 255, a: amb.a / 255 };
  });
  swapTextures(device, cache3, renderer.rarc, m.all);
  renderer.modelInstances.push(...m.all);
  g.mario = m;
  g.yoshi = null;
  if (yoshiArc && g.data.yoshi && g.data.yoshi.some((v) => v)) {
    const y = new YoshiModel(device, cache3, yoshiArc);
    if (amb) y.body.modelMaterialData.materialData?.forEach((md) => {
      md.material.colorAmbRegs[0] = { r: amb.r / 255, g: amb.g / 255, b: amb.b / 255, a: amb.a / 255 };
    });
    renderer.modelInstances.push(y.body);
    g.yoshi = y;
  }
}
function frameStage() {
  const p2 = renderer ? marioStart(renderer.rarc) : null;
  if (p2) {
    const r = p2[3] * Math.PI / 180;
    setCameraLook([p2[0] - Math.sin(r) * 1100, p2[1] + 420, p2[2] - Math.cos(r) * 1100], [p2[0], p2[1] + 120, p2[2]]);
  } else setCameraLook([0, 6e3, 8e3], [0, 0, 0]);
}
function setCameraLook(eye, at) {
  mat4_exports.targetTo(camera.worldMatrix, eye, at, [0, 1, 0]);
  camera.worldMatrixUpdated();
}
async function addGhostFiles(files) {
  for (const f of Array.from(files)) {
    try {
      const data = parseSmsGhost(await f.arrayBuffer());
      const g = { data, fileName: f.name, color: COLORS[ghosts.length % COLORS.length], visible: true, mario: null, yoshi: null };
      ghosts.push(g);
      attachMario(g);
      for (const w of data.warnings) console.warn(f.name, w);
    } catch (e) {
      showError(new Error(`${f.name}: ${e.message}`));
    }
  }
  if (!lead) lead = ghosts[0] || null;
  renderGhostList();
  followLeadStage();
  update();
}
function duration() {
  return Math.max(0, ...ghosts.map((g) => g.data.header.durationQf));
}
function leadRoute() {
  if (!lead) return null;
  const s = ghostSampleAt(lead.data, t);
  const k = s.gap ? Math.min(s.i + 1, lead.data.segIndex.length - 1) : s.i;
  const seg = lead.data.segments[lead.data.segIndex[k]];
  return seg ? seg.route : null;
}
function followLeadStage() {
  if (!fs || !$("optAuto").checked) return;
  const r = leadRoute();
  if (!r) return;
  const s = sceneForRoute(stageTable, r.area, r.episode);
  if (s && s !== stageName) loadStage(s);
}
function ghostOnStage(g, time) {
  const s = ghostSampleAt(g.data, time);
  const seg = g.data.segments[g.data.segIndex[s.i]];
  return !!seg && sceneForRoute(stageTable, seg.route.area, seg.route.episode) === stageName;
}
var playerSun = null;
var objectSun = null;
var actorModels = [];
function findLight(r, name) {
  let found = null;
  const walk = (o) => {
    if (found) return;
    if (o.type === "Group") o.children.forEach(walk);
    else if (o.type === "Light" && o.name === name) found = o;
  };
  if (r.sceneBin) walk(r.sceneBin);
  return found;
}
function poseGhosts() {
  if (renderer && playerSun) setPlayerLights(ghosts.flatMap((g) => [...g.mario ? g.mario.all : [], ...g.yoshi ? [g.yoshi.body] : []]), playerSun, camera.viewMatrix);
  if (renderer && objectSun) {
    setPlayerLights(actorModels, objectSun, camera.viewMatrix);
    for (const m of actorModels) {
      const l = m.getGXLightReference(2);
      l.Color.r = l.Color.g = l.Color.b = 0;
    }
  }
  for (const g of ghosts) {
    const m = g.mario;
    if (!m) continue;
    const on = g.visible && ghostOnStage(g, t) && t <= g.data.header.durationQf;
    m.setVisible(on);
    if (g.yoshi && !on) g.yoshi.body.visible = false;
    if (!on) continue;
    const s = ghostSampleAt(g.data, t), a = ghostAnimAt(g.data, t), fl = ghostFluddAt(g.data, t);
    const noz = fl && fl.present ? { 0: "normal_wg", 1: "rocket_wg", 4: "hover_wg", 5: "back_wg" }[fl.nozzle] || "normal_wg" : fl ? null : "normal_wg";
    m.pose(s.x, s.y, s.z, s.yaw, a.id, !!a.yoshi, a.phase, a.yoshi ? null : noz);
    m.calcParts();
    if (g.yoshi) {
      const colour = g.data.yoshi ? g.data.yoshi[s.i] : 0;
      g.yoshi.body.visible = !!colour && !s.gap;
      if (g.yoshi.body.visible) {
        const ob = ghostYoshiAt(g.data, t);
        let k, f;
        if (ob) {
          k = ob.anim;
          f = ob.frame;
        } else {
          k = g.yoshi.indexForRider(MARIO_BCK_FILES[a.id]);
          f = a.phase / 4096 * g.yoshi.duration(k);
        }
        g.yoshi.pose(s.x, s.y, s.z, s.yaw, colour, k, f);
      }
    }
  }
}
function renderGhostList() {
  const box = $("ghostList");
  box.textContent = "";
  for (const g of ghosts) {
    const row = document.createElement("div");
    row.className = "ghostRow" + (g === lead ? " lead" : "");
    const sw = document.createElement("input");
    sw.type = "checkbox";
    sw.checked = g.visible;
    sw.title = "Show this ghost";
    sw.style.accentColor = g.color;
    sw.onchange = () => {
      g.visible = sw.checked;
    };
    const name = document.createElement("button");
    name.className = "ghostName";
    name.title = "Follow this ghost";
    const h = g.data.header;
    name.innerHTML = `<span class="sw" style="background:${g.color}"></span>`;
    name.append(`${h.name || g.fileName}`);
    const meta = document.createElement("span");
    meta.className = "meta";
    meta.textContent = `${h.routeLabel} \xB7 ${ghostFormatTime(h.durationQf)}${h.author ? " \xB7 " + h.author : ""}`;
    name.append(meta);
    name.onclick = () => {
      lead = g;
      renderGhostList();
      followLeadStage();
      update();
    };
    const rm = document.createElement("button");
    rm.className = "rm";
    rm.textContent = "\xD7";
    rm.title = "Remove this ghost";
    rm.onclick = () => {
      ghosts.splice(ghosts.indexOf(g), 1);
      if (g.mario && renderer) renderer.modelInstances = renderer.modelInstances.filter((x) => !g.mario.all.includes(x));
      if (lead === g) lead = ghosts[0] || null;
      renderGhostList();
      update();
    };
    row.append(sw, name, rm);
    box.append(row);
  }
  $("ghostHint").hidden = ghosts.length > 0;
}
var follow = { yaw: 0, pitch: 0.32, dist: 1100, userUntil: 0, pos: vec3_exports.create(), have: false };
var dragging = false;
var lastX = 0;
var lastY = 0;
canvas.addEventListener("pointerdown", (e) => {
  if (camMode !== "follow") return;
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  follow.yaw -= (e.clientX - lastX) * 6e-3;
  follow.pitch = Math.max(-1.2, Math.min(1.45, follow.pitch + (e.clientY - lastY) * 5e-3));
  lastX = e.clientX;
  lastY = e.clientY;
  follow.userUntil = performance.now() + 1500;
});
canvas.addEventListener("pointerup", () => {
  dragging = false;
});
canvas.addEventListener("wheel", (e) => {
  if (camMode !== "follow") return;
  follow.dist = Math.max(200, Math.min(8e3, follow.dist * Math.exp(e.deltaY * 1e-3)));
  follow.userUntil = performance.now() + 1500;
  e.preventDefault();
}, { passive: false });
var _q2 = quat_exports.create();
var _p = vec3_exports.create();
function updateCamera(dt) {
  const aspect = canvas.width / Math.max(1, canvas.height);
  let fov = 50;
  if (camMode === "free") {
    fps.update(input, dt, 1);
  } else if (lead) {
    const s = ghostSampleAt(lead.data, t);
    const rec = s.gap ? null : ghostCameraAt(lead.data, t, lead.data.segIndex[s.i]);
    const userOn = dragging || performance.now() < follow.userUntil;
    if (rec && !userOn && $("optRecCam").checked) {
      quat_exports.set(_q2, -rec.quat[0], -rec.quat[1], -rec.quat[2], rec.quat[3]);
      mat4_exports.fromRotationTranslation(camera.worldMatrix, _q2, rec.pos);
      camera.worldMatrixUpdated();
      fov = rec.fov;
      const d = vec3_exports.sub(_p, rec.pos, [s.x, s.y + 100, s.z]);
      follow.dist = Math.max(200, vec3_exports.length(d));
      follow.yaw = Math.atan2(d[0], d[2]);
      follow.pitch = Math.asin(Math.max(-1, Math.min(1, d[1] / follow.dist)));
    } else {
      if (!userOn) {
        const want = s.yaw / 32768 * Math.PI + Math.PI;
        let dy = want - follow.yaw;
        dy = Math.atan2(Math.sin(dy), Math.cos(dy));
        follow.yaw += dy * Math.min(1, dt / 1e3 * 2.5);
      }
      const tx = s.x, ty = s.y + 120, tz = s.z;
      const eye = [tx + Math.sin(follow.yaw) * Math.cos(follow.pitch) * follow.dist, ty + Math.sin(follow.pitch) * follow.dist, tz + Math.cos(follow.yaw) * Math.cos(follow.pitch) * follow.dist];
      setCameraLook(eye, [tx, ty, tz]);
    }
  }
  camera.fovY = fov * Math.PI / 180;
  camera.aspect = aspect;
  camera.setClipPlanes(10, 3e5);
}
function setCamMode(m) {
  camMode = m;
  $("camFollow").setAttribute("aria-pressed", String(m === "follow"));
  $("camFree").setAttribute("aria-pressed", String(m === "free"));
}
var lastFrame = performance.now();
function setPlaying(on) {
  playing = on && ghosts.length > 0;
  $("play").textContent = playing ? "Pause" : "Play";
}
function seek(q) {
  t = Math.max(0, Math.min(duration(), q));
  update();
}
function update() {
  const d = duration();
  const sc = $("scrub");
  sc.max = String(Math.max(1, Math.round(d)));
  sc.value = String(Math.round(t));
  $("clock").textContent = `${ghostFormatTime(Math.round(t))} / ${ghostFormatTime(Math.round(d))}`;
  drawSplitTicks();
  updateSplitTable();
  followLeadStage();
  hud.update(lead, t);
  const r = leadRoute();
  $("where").textContent = r ? `${ghostRouteLabel(r)} \xB7 ${stageName}` : stageName;
}
function frame(now) {
  const dt = Math.min(100, now - lastFrame);
  lastFrame = now;
  if (playing) {
    t += dt / 1e3 * QF_PER_SECOND * speed;
    if (t >= duration()) {
      t = duration();
      setPlaying(false);
    }
    update();
  }
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.max(1, Math.round(canvas.clientWidth * dpr)), h = Math.max(1, Math.round(canvas.clientHeight * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  updateCamera(dt);
  if (renderer) {
    viewerInput.time = now;
    viewerInput.deltaTime = dt;
    viewerInput.backbufferWidth = w;
    viewerInput.backbufferHeight = h;
    swapChain.configureSwapChain(w, h);
    device.beginFrame();
    viewerInput.onscreenTexture = swapChain.getOnscreenTexture();
    renderer.render(device, viewerInput);
    device.endFrame();
  }
  drawTriggers($("overlay"), camera, $("optTriggers").checked ? triggers : []);
  input.afterFrame();
  requestAnimationFrame(frame);
}
var fmtDelta = (q) => (q < 0 ? "\u2212" : "+") + (Math.abs(q) / QF_PER_SECOND).toFixed(2);
function splitGroup() {
  if (!lead || !lead.data.splits.length) return null;
  const route = lead.data.splits[0].route;
  const list = [lead, ...ghosts.filter((g) => g !== lead && g.data.splits.length && g.data.splits[0].route === route)];
  return { list, n: Math.max(...list.map((g) => g.data.splits.length)) };
}
var tickKey = "";
var tickLayout = 0;
new ResizeObserver(() => {
  tickLayout++;
  drawSplitTicks();
}).observe($("timeline"));
function drawSplitTicks() {
  const sp = lead ? lead.data.splits : [], box = $("splitTicks"), sc = $("scrub");
  const key = (lead ? lead.fileName : "") + "|" + duration() + "|" + sp.length + "|" + tickLayout;
  if (key === tickKey) return;
  tickKey = key;
  box.textContent = "";
  box.style.left = sc.offsetLeft + "px";
  box.style.width = sc.offsetWidth + "px";
  sp.forEach((x, k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.style.left = Math.max(0, Math.min(1, x.qf / Math.max(1, duration()))) * 100 + "%";
    b.title = `Split ${k + 1} \xB7 ${ghostFormatTime(Math.round(x.qf))}`;
    b.onclick = () => {
      setPlaying(false);
      seek(x.qf);
    };
    box.append(b);
  });
}
var tableKey = "";
function updateSplitTable() {
  const G = splitGroup(), box = $("splits");
  $("splitsHead").hidden = box.hidden = !G;
  if (!G) {
    tableKey = "";
    return;
  }
  const at = (g, k) => g.data.splits.find((x) => x.index === k);
  const cur = lead.data.splits.filter((x) => x.qf <= t).length;
  const key = G.list.map((g) => g.fileName).join("|") + "|" + cur;
  if (key === tableKey) return;
  tableKey = key;
  const segOf = (g, k) => {
    const a = at(g, k), b = k ? at(g, k - 1) : { qf: 0 };
    return a && b ? a.qf - b.qf : null;
  };
  const best = [];
  for (let k = 0; k < G.n; k++) best[k] = Math.min(...G.list.map((g) => segOf(g, k)).filter((v) => v !== null));
  const tbl = document.createElement("table");
  const head = document.createElement("tr");
  head.innerHTML = "<th>#</th>";
  G.list.forEach((g) => {
    const th = document.createElement("th");
    th.innerHTML = `<span class="sw" style="background:${g.color}"></span>`;
    th.append(g.data.header.name.replace(/ - .*$/, "") || g.fileName);
    head.append(th);
  });
  const thead = document.createElement("thead");
  thead.append(head);
  tbl.append(thead);
  const body = document.createElement("tbody");
  for (let k = 0; k < G.n; k++) {
    const tr = document.createElement("tr");
    if (k === cur - 1) tr.className = "now";
    tr.innerHTML = `<td>${k + 1}</td>`;
    const ref = at(lead, k);
    G.list.forEach((g) => {
      const td = document.createElement("td"), s0 = at(g, k), seg = segOf(g, k);
      if (!s0) {
        td.textContent = "--";
        tr.append(td);
        return;
      }
      const txt = ghostFormatTime(Math.round(s0.qf));
      if (g !== lead && ref) {
        const dq = s0.qf - ref.qf;
        td.innerHTML = `${txt} <span class="${dq > 0 ? "behind" : "ahead"}">${fmtDelta(dq)}</span>`;
      } else td.textContent = txt;
      if (seg !== null) {
        const sp = document.createElement("span");
        sp.className = "seg";
        sp.textContent = (seg / QF_PER_SECOND).toFixed(2) + " s";
        td.append(sp);
        if (G.list.length > 1 && seg === best[k]) td.classList.add("best");
      }
      tr.append(td);
    });
    tr.onclick = () => {
      setPlaying(false);
      if (ref) seek(ref.qf);
    };
    body.append(tr);
  }
  tbl.append(body);
  box.replaceChildren(tbl);
}
var hud = new InputDisplay($("inputs"));
$("pickDisc").onclick = () => pickDisc();
$("pickFolder").onclick = () => $("folderFile").click();
$("isoFile").onchange = async (e) => {
  const f = e.target.files?.[0];
  if (f) try {
    await useDisc(await openDisc(f));
  } catch (err) {
    showError(err);
  }
};
$("folderFile").onchange = async (e) => {
  const list = Array.from(e.target.files || []);
  if (list.length) try {
    await useDisc(await openFolder(list));
  } catch (err) {
    showError(err);
  }
};
$("addGhost").onclick = () => $("ghostFile").click();
$("ghostFile").onchange = (e) => {
  const f = e.target.files;
  if (f) addGhostFiles(f);
  e.target.value = "";
};
$("stage").onchange = (e) => {
  $("optAuto").checked = false;
  loadStage(e.target.value);
};
$("play").onclick = () => {
  if (!playing && t >= duration()) t = 0;
  setPlaying(!playing);
};
$("back").onclick = () => {
  setPlaying(false);
  seek(Math.round(t / QF_PER_FRAME) * QF_PER_FRAME - QF_PER_FRAME);
};
$("fwd").onclick = () => {
  setPlaying(false);
  seek(Math.round(t / QF_PER_FRAME) * QF_PER_FRAME + QF_PER_FRAME);
};
$("scrub").oninput = (e) => {
  setPlaying(false);
  seek(Number(e.target.value));
};
$("speed").onchange = (e) => {
  speed = Number(e.target.value);
};
$("camFollow").onclick = () => setCamMode("follow");
$("camFree").onclick = () => {
  mat4_exports.copy(fps.camera.worldMatrix, camera.worldMatrix);
  setCamMode("free");
};
$("optAuto").onchange = () => followLeadStage();
$("errorClose").onclick = () => {
  $("error").hidden = true;
};
$("error").onclick = () => {
  $("error").hidden = true;
};
window.addEventListener("keydown", (e) => {
  if (e.target.closest("input, select, textarea")) return;
  if (e.code === "KeyP" || e.code === "Space" && camMode !== "free") {
    e.preventDefault();
    $("play").click();
  } else if (e.code === "Comma") $("back").click();
  else if (e.code === "Period") $("fwd").click();
  else if (e.code === "KeyF") setCamMode(camMode === "follow" ? "free" : "follow");
});
var drop = document.body;
drop.addEventListener("dragover", (e) => {
  e.preventDefault();
  document.body.classList.add("dragging");
});
drop.addEventListener("dragleave", (e) => {
  if (e.target === document.body) document.body.classList.remove("dragging");
});
drop.addEventListener("drop", async (e) => {
  e.preventDefault();
  document.body.classList.remove("dragging");
  const files = Array.from(e.dataTransfer?.files || []);
  const iso = files.find((f) => /\.(iso|gcm)$/i.test(f.name));
  if (iso) try {
    await useDisc(await openDisc(iso));
  } catch (err) {
    showError(err);
  }
  const gh = files.filter((f) => /\.smsghost$/i.test(f.name));
  if (gh.length) addGhostFiles(gh);
});
(async () => {
  setCamMode("follow");
  renderGhostList();
  update();
  requestAnimationFrame(frame);
  const h = await rememberedHandle();
  if (h) {
    const b = $("reopen");
    b.hidden = false;
    b.textContent = `Open ${h.name} again`;
    b.onclick = async () => {
      b.hidden = true;
      if (!await reopenRemembered()) b.hidden = false;
    };
  }
})();
window.ghostViewer = {
  get t() {
    return t;
  },
  seek,
  addGhostFiles,
  loadStage,
  get stage() {
    return stageName;
  },
  get ghosts() {
    return ghosts;
  },
  useDiscFile: async (f) => useDisc(await openDisc(f)),
  camera,
  triggers: () => triggers,
  setCamMode,
  get renderer() {
    return renderer;
  },
  models: () => renderer ? renderer.modelInstances.map((m) => [m.name, m.materialInstances.map((x) => x.name), [...m.modelMatrix.slice(12, 15)]]) : [],
  look: (eye, at) => {
    setCamMode("free");
    setCameraLook(eye, at);
  },
  sample: () => lead && ghostSampleAt(lead.data, t)
};
//# sourceMappingURL=app.js.map
