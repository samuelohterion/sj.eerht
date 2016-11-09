/*
 * Copyright (c) 2015 cannon.js Authors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

! function(e) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && false) define([], e);
	else {
		var f;
		"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.CANNON = e()
	}
}(function() {
	return function e(f, n, o) {
		function d(t, l) {
			if (!n[t]) {
				if (!f[t]) {
					var u = "function" == typeof require && require;
					if (!l && u) return u(t, !0);
					if (i) return i(t, !0);
					throw new Error("Cannot find module '" + t + "'")
				}
				var p = n[t] = {
					exports: {}
				};
				f[t][0].call(p.exports, function(e) {
					var n = f[t][1][e];
					return d(n ? n : e)
				}, p, p.exports, e, f, n, o)
			}
			return n[t].exports
		}
		for (var i = "function" == typeof require && require, t = 0; t < o.length; t++) d(o[t]);
		return d
	}({
		1: [function(e, f) {
			f.exports = {
				name: "cannon",
				version: "0.6.2",
				description: "A lightweight 3D physics engine written in JavaScript.",
				homepage: "https://github.com/schteppe/cannon.js",
				author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
				keywords: ["cannon.js", "cannon", "physics", "engine", "3d"],
				main: "./build/cannon.js",
				engines: {
					node: "*"
				},
				repository: {
					type: "git",
					url: "https://github.com/schteppe/cannon.js.git"
				},
				bugs: {
					url: "https://github.com/schteppe/cannon.js/issues"
				},
				licenses: [{
					type: "MIT"
				}],
				devDependencies: {
					jshint: "latest",
					"uglify-js": "latest",
					nodeunit: "^0.9.0",
					grunt: "~0.4.0",
					"grunt-contrib-jshint": "~0.1.1",
					"grunt-contrib-nodeunit": "^0.4.1",
					"grunt-contrib-concat": "~0.1.3",
					"grunt-contrib-uglify": "^0.5.1",
					"grunt-browserify": "^2.1.4",
					"grunt-contrib-yuidoc": "^0.5.2",
					browserify: "*"
				},
				dependencies: {}
			}
		}, {}],
		2: [function(e, f) {
			f.exports = {
				version: e("../package.json").version,
				AABB: e("./collision/AABB"),
				ArrayCollisionMatrix: e("./collision/ArrayCollisionMatrix"),
				Body: e("./objects/Body"),
				Box: e("./shapes/Box"),
				Broadphase: e("./collision/Broadphase"),
				Constraint: e("./constraints/Constraint"),
				ContactEquation: e("./equations/ContactEquation"),
				Narrowphase: e("./world/Narrowphase"),
				ConeTwistConstraint: e("./constraints/ConeTwistConstraint"),
				ContactMaterial: e("./material/ContactMaterial"),
				ConvexPolyhedron: e("./shapes/ConvexPolyhedron"),
				Cylinder: e("./shapes/Cylinder"),
				DistanceConstraint: e("./constraints/DistanceConstraint"),
				Equation: e("./equations/Equation"),
				EventTarget: e("./utils/EventTarget"),
				FrictionEquation: e("./equations/FrictionEquation"),
				GSSolver: e("./solver/GSSolver"),
				GridBroadphase: e("./collision/GridBroadphase"),
				Heightfield: e("./shapes/Heightfield"),
				HingeConstraint: e("./constraints/HingeConstraint"),
				LockConstraint: e("./constraints/LockConstraint"),
				Mat3: e("./math/Mat3"),
				Material: e("./material/Material"),
				NaiveBroadphase: e("./collision/NaiveBroadphase"),
				ObjectCollisionMatrix: e("./collision/ObjectCollisionMatrix"),
				Pool: e("./utils/Pool"),
				Particle: e("./shapes/Particle"),
				Plane: e("./shapes/Plane"),
				PointToPointConstraint: e("./constraints/PointToPointConstraint"),
				Quaternion: e("./math/Quaternion"),
				Ray: e("./collision/Ray"),
				RaycastVehicle: e("./objects/RaycastVehicle"),
				RaycastResult: e("./collision/RaycastResult"),
				RigidVehicle: e("./objects/RigidVehicle"),
				RotationalEquation: e("./equations/RotationalEquation"),
				RotationalMotorEquation: e("./equations/RotationalMotorEquation"),
				SAPBroadphase: e("./collision/SAPBroadphase"),
				SPHSystem: e("./objects/SPHSystem"),
				Shape: e("./shapes/Shape"),
				Solver: e("./solver/Solver"),
				Sphere: e("./shapes/Sphere"),
				SplitSolver: e("./solver/SplitSolver"),
				Spring: e("./objects/Spring"),
				Trimesh: e("./shapes/Trimesh"),
				Vec3: e("./math/Vec3"),
				Vec3Pool: e("./utils/Vec3Pool"),
				World: e("./world/World")
			}
		}, {
			"../package.json": 1,
			"./collision/AABB": 3,
			"./collision/ArrayCollisionMatrix": 4,
			"./collision/Broadphase": 5,
			"./collision/GridBroadphase": 6,
			"./collision/NaiveBroadphase": 7,
			"./collision/ObjectCollisionMatrix": 8,
			"./collision/Ray": 9,
			"./collision/RaycastResult": 10,
			"./collision/SAPBroadphase": 11,
			"./constraints/ConeTwistConstraint": 12,
			"./constraints/Constraint": 13,
			"./constraints/DistanceConstraint": 14,
			"./constraints/HingeConstraint": 15,
			"./constraints/LockConstraint": 16,
			"./constraints/PointToPointConstraint": 17,
			"./equations/ContactEquation": 19,
			"./equations/Equation": 20,
			"./equations/FrictionEquation": 21,
			"./equations/RotationalEquation": 22,
			"./equations/RotationalMotorEquation": 23,
			"./material/ContactMaterial": 24,
			"./material/Material": 25,
			"./math/Mat3": 27,
			"./math/Quaternion": 28,
			"./math/Vec3": 30,
			"./objects/Body": 31,
			"./objects/RaycastVehicle": 32,
			"./objects/RigidVehicle": 33,
			"./objects/SPHSystem": 34,
			"./objects/Spring": 35,
			"./shapes/Box": 37,
			"./shapes/ConvexPolyhedron": 38,
			"./shapes/Cylinder": 39,
			"./shapes/Heightfield": 40,
			"./shapes/Particle": 41,
			"./shapes/Plane": 42,
			"./shapes/Shape": 43,
			"./shapes/Sphere": 44,
			"./shapes/Trimesh": 45,
			"./solver/GSSolver": 46,
			"./solver/Solver": 47,
			"./solver/SplitSolver": 48,
			"./utils/EventTarget": 49,
			"./utils/Pool": 51,
			"./utils/Vec3Pool": 54,
			"./world/Narrowphase": 55,
			"./world/World": 56
		}],
		3: [function(e, f) {
			function n(e) {
				e = e || {}, this.lowerBound = new o, e.lowerBound && this.lowerBound.copy(e.lowerBound), this.upperBound = new o, e.upperBound && this.upperBound.copy(e.upperBound)
			} {
				var o = e("../math/Vec3");
				e("../utils/Utils")
			}
			f.exports = n;
			var d = new o;
			n.prototype.setFromPoints = function(e, f, n, o) {
				var i = this.lowerBound,
					t = this.upperBound,
					l = n;
				i.copy(e[0]), l && l.vmult(i, i), t.copy(i);
				for (var u = 1; u < e.length; u++) {
					var p = e[u];
					l && (l.vmult(p, d), p = d), p.x > t.x && (t.x = p.x), p.x < i.x && (i.x = p.x), p.y > t.y && (t.y = p.y), p.y < i.y && (i.y = p.y), p.z > t.z && (t.z = p.z), p.z < i.z && (i.z = p.z)
				}
				return f && (f.vadd(i, i), f.vadd(t, t)), o && (i.x -= o, i.y -= o, i.z -= o, t.x += o, t.y += o, t.z += o), this
			}, n.prototype.copy = function(e) {
				return this.lowerBound.copy(e.lowerBound), this.upperBound.copy(e.upperBound), this
			}, n.prototype.clone = function() {
				return (new n).copy(this)
			}, n.prototype.extend = function(e) {
				var f = e.lowerBound.x;
				this.lowerBound.x > f && (this.lowerBound.x = f);
				var n = e.upperBound.x;
				this.upperBound.x < n && (this.upperBound.x = n);
				var f = e.lowerBound.y;
				this.lowerBound.y > f && (this.lowerBound.y = f);
				var n = e.upperBound.y;
				this.upperBound.y < n && (this.upperBound.y = n);
				var f = e.lowerBound.z;
				this.lowerBound.z > f && (this.lowerBound.z = f);
				var n = e.upperBound.z;
				this.upperBound.z < n && (this.upperBound.z = n)
			}, n.prototype.overlaps = function(e) {
				var f = this.lowerBound,
					n = this.upperBound,
					o = e.lowerBound,
					d = e.upperBound;
				return (o.x <= n.x && n.x <= d.x || f.x <= d.x && d.x <= n.x) && (o.y <= n.y && n.y <= d.y || f.y <= d.y && d.y <= n.y) && (o.z <= n.z && n.z <= d.z || f.z <= d.z && d.z <= n.z)
			}, n.prototype.contains = function(e) {
				var f = this.lowerBound,
					n = this.upperBound,
					o = e.lowerBound,
					d = e.upperBound;
				return f.x <= o.x && n.x >= d.x && f.y <= o.y && n.y >= d.y && f.z <= o.z && n.z >= d.z
			}, n.prototype.getCorners = function(e, f, n, o, d, i, t, l) {
				var u = this.lowerBound,
					p = this.upperBound;
				e.copy(u), f.set(p.x, u.y, u.z), n.set(p.x, p.y, u.z), o.set(u.x, p.y, p.z), d.set(p.x, u.y, u.z), i.set(u.x, p.y, u.z), t.set(u.x, u.y, p.z), l.copy(p)
			};
			var i = [new o, new o, new o, new o, new o, new o, new o, new o];
			n.prototype.toLocalFrame = function(e, f) {
				var n = i,
					o = n[0],
					d = n[1],
					t = n[2],
					l = n[3],
					u = n[4],
					p = n[5],
					s = n[6],
					y = n[7];
				this.getCorners(o, d, t, l, u, p, s, y);
				for (var c = 0; 8 !== c; c++) {
					var a = n[c];
					e.pointToLocal(a, a)
				}
				return f.setFromPoints(n)
			}, n.prototype.toWorldFrame = function(e, f) {
				var n = i,
					o = n[0],
					d = n[1],
					t = n[2],
					l = n[3],
					u = n[4],
					p = n[5],
					s = n[6],
					y = n[7];
				this.getCorners(o, d, t, l, u, p, s, y);
				for (var c = 0; 8 !== c; c++) {
					var a = n[c];
					e.pointToWorld(a, a)
				}
				return f.setFromPoints(n)
			}
		}, {
			"../math/Vec3": 30,
			"../utils/Utils": 53
		}],
		4: [function(e, f) {
			function n() {
				this.matrix = []
			}
			f.exports = n, n.prototype.get = function(e, f) {
				if (e = e.index, f = f.index, f > e) {
					var n = f;
					f = e, e = n
				}
				return this.matrix[(e * (e + 1) >> 1) + f - 1]
			}, n.prototype.set = function(e, f, n) {
				if (e = e.index, f = f.index, f > e) {
					var o = f;
					f = e, e = o
				}
				this.matrix[(e * (e + 1) >> 1) + f - 1] = n ? 1 : 0
			}, n.prototype.reset = function() {
				for (var e = 0, f = this.matrix.length; e !== f; e++) this.matrix[e] = 0
			}, n.prototype.setNumObjects = function(e) {
				this.matrix.length = e * (e - 1) >> 1
			}
		}, {}],
		5: [function(e, f) {
			function n() {
				this.world = null, this.useBoundingBoxes = !1, this.dirty = !0
			} {
				var o = e("../objects/Body"),
					d = e("../math/Vec3"),
					i = e("../math/Quaternion");
				e("../shapes/Shape"), e("../shapes/Plane")
			}
			f.exports = n, n.prototype.collisionPairs = function() {
				throw new Error("collisionPairs not implemented for this BroadPhase class!")
			};
			var t = o.STATIC | o.KINEMATIC;
			n.prototype.needBroadphaseCollision = function(e, f) {
				return 0 === (e.collisionFilterGroup & f.collisionFilterMask) || 0 === (f.collisionFilterGroup & e.collisionFilterMask) ? !1 : 0 === (e.type & t) && e.sleepState !== o.SLEEPING || 0 === (f.type & t) && f.sleepState !== o.SLEEPING ? !0 : !1
			}, n.prototype.intersectionTest = function(e, f, n, o) {
				this.useBoundingBoxes ? this.doBoundingBoxBroadphase(e, f, n, o) : this.doBoundingSphereBroadphase(e, f, n, o)
			}; {
				var l = new d;
				new d, new i, new d
			}
			n.prototype.doBoundingSphereBroadphase = function(e, f, n, o) {
				var d = l;
				f.position.vsub(e.position, d);
				var i = Math.pow(e.boundingRadius + f.boundingRadius, 2),
					t = d.norm2();
				i > t && (n.push(e), o.push(f))
			}, n.prototype.doBoundingBoxBroadphase = function(e, f, n, o) {
				e.aabbNeedsUpdate && e.computeAABB(), f.aabbNeedsUpdate && f.computeAABB(), e.aabb.overlaps(f.aabb) && (n.push(e), o.push(f))
			};
			var u = {
					keys: []
				},
				p = [],
				s = [];
			n.prototype.makePairsUnique = function(e, f) {
				for (var n = u, o = p, d = s, i = e.length, t = 0; t !== i; t++) o[t] = e[t], d[t] = f[t];
				e.length = 0, f.length = 0;
				for (var t = 0; t !== i; t++) {
					var l = o[t].id,
						y = d[t].id,
						c = y > l ? l + "," + y : y + "," + l;
					n[c] = t, n.keys.push(c)
				}
				for (var t = 0; t !== n.keys.length; t++) {
					var c = n.keys.pop(),
						a = n[c];
					e.push(o[a]), f.push(d[a]), delete n[c]
				}
			}, n.prototype.setWorld = function() {};
			var y = new d;
			n.boundingSphereCheck = function(e, f) {
				var n = y;
				return e.position.vsub(f.position, n), Math.pow(e.shape.boundingSphereRadius + f.shape.boundingSphereRadius, 2) > n.norm2()
			}, n.prototype.aabbQuery = function() {
				return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), []
			}
		}, {
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/Body": 31,
			"../shapes/Plane": 42,
			"../shapes/Shape": 43
		}],
		6: [function(e, f) {
			function n(e, f, n, i, t) {
				o.apply(this), this.nx = n || 10, this.ny = i || 10, this.nz = t || 10, this.aabbMin = e || new d(100, 100, 100), this.aabbMax = f || new d(-100, -100, -100);
				var l = this.nx * this.ny * this.nz;
				if (0 >= l) throw "GridBroadphase: Each dimension's n must be >0";
				this.bins = [], this.binLengths = [], this.bins.length = l, this.binLengths.length = l;
				for (var u = 0; l > u; u++) this.bins[u] = [], this.binLengths[u] = 0
			}
			f.exports = n;
			var o = e("./Broadphase"),
				d = e("../math/Vec3"),
				i = e("../shapes/Shape");
			n.prototype = new o, n.prototype.constructor = n; {
				var t = new d;
				new d
			}
			n.prototype.collisionPairs = function(e, f, n) {
				function o(e, f, n, o, d, i, t) {
					var l = (e - g) * v | 0,
						u = (f - x) * A | 0,
						p = (n - j) * C | 0,
						b = I((o - g) * v),
						m = I((d - x) * A),
						N = I((i - j) * C);
					0 > l ? l = 0 : l >= s && (l = s - 1), 0 > u ? u = 0 : u >= y && (u = y - 1), 0 > p ? p = 0 : p >= c && (p = c - 1), 0 > b ? b = 0 : b >= s && (b = s - 1), 0 > m ? m = 0 : m >= y && (m = y - 1), 0 > N ? N = 0 : N >= c && (N = c - 1), l *= a, u *= r, p *= w, b *= a, m *= r, N *= w;
					for (var O = l; b >= O; O += a)
						for (var h = u; m >= h; h += r)
							for (var k = p; N >= k; k += w) {
								var q = O + h + k;
								E[q][F[q] ++] = t
							}
				}
				for (var d = e.numObjects(), l = e.bodies, u = this.aabbMax, p = this.aabbMin, s = this.nx, y = this.ny, c = this.nz, a = y * c, r = c, w = 1, b = u.x, m = u.y, N = u.z, g = p.x, x = p.y, j = p.z, v = s / (b - g), A = y / (m - x), C = c / (N - j), O = (b - g) / s, h = (m - x) / y, k = (N - j) / c, q = .5 * Math.sqrt(O * O + h * h + k * k), z = i.types, B = z.SPHERE, D = z.PLANE, E = (z.BOX, z.COMPOUND, z.CONVEXPOLYHEDRON, this.bins), F = this.binLengths, G = this.bins.length, H = 0; H !== G; H++) F[H] = 0;
				for (var I = Math.ceil, p = Math.min, u = Math.max, H = 0; H !== d; H++) {
					var J = l[H],
						K = J.shape;
					switch (K.type) {
						case B:
							var L = J.position.x,
								M = J.position.y,
								P = J.position.z,
								Q = K.radius;
							o(L - Q, M - Q, P - Q, L + Q, M + Q, P + Q, J);
							break;
						case D:
							K.worldNormalNeedsUpdate && K.computeWorldNormal(J.quaternion);
							var R = K.worldNormal,
								S = g + .5 * O - J.position.x,
								T = x + .5 * h - J.position.y,
								U = j + .5 * k - J.position.z,
								V = t;
							V.set(S, T, U);
							for (var W = 0, X = 0; W !== s; W++, X += a, V.y = T, V.x += O)
								for (var Y = 0, Z = 0; Y !== y; Y++, Z += r, V.z = U, V.y += h)
									for (var $ = 0, _ = 0; $ !== c; $++, _ += w, V.z += k)
										if (V.dot(R) < q) {
											var ef = X + Z + _;
											E[ef][F[ef] ++] = J
										}
							break;
						default:
							J.aabbNeedsUpdate && J.computeAABB(), o(J.aabb.lowerBound.x, J.aabb.lowerBound.y, J.aabb.lowerBound.z, J.aabb.upperBound.x, J.aabb.upperBound.y, J.aabb.upperBound.z, J)
					}
				}
				for (var H = 0; H !== G; H++) {
					var ff = F[H];
					if (ff > 1)
						for (var nf = E[H], W = 0; W !== ff; W++)
							for (var J = nf[W], Y = 0; Y !== W; Y++) {
								var of = nf[Y];
								this.needBroadphaseCollision(J, of) && this.intersectionTest(J, of, f, n)
							}
				}
				this.makePairsUnique(f, n)
			}
		}, {
			"../math/Vec3": 30,
			"../shapes/Shape": 43,
			"./Broadphase": 5
		}],
		7: [function(e, f) {
			function n() {
				o.apply(this)
			}
			f.exports = n;
			var o = e("./Broadphase"),
				d = e("./AABB");
			n.prototype = new o, n.prototype.constructor = n, n.prototype.collisionPairs = function(e, f, n) {
				var o, d, i, t, l = e.bodies,
					u = l.length;
				for (o = 0; o !== u; o++)
					for (d = 0; d !== o; d++) i = l[o], t = l[d], this.needBroadphaseCollision(i, t) && this.intersectionTest(i, t, f, n)
			};
			new d;
			n.prototype.aabbQuery = function(e, f, n) {
				n = n || [];
				for (var o = 0; o < e.bodies.length; o++) {
					var d = e.bodies[o];
					d.aabbNeedsUpdate && d.computeAABB(), d.aabb.overlaps(f) && n.push(d)
				}
				return n
			}
		}, {
			"./AABB": 3,
			"./Broadphase": 5
		}],
		8: [function(e, f) {
			function n() {
				this.matrix = {}
			}
			f.exports = n, n.prototype.get = function(e, f) {
				if (e = e.id, f = f.id, f > e) {
					var n = f;
					f = e, e = n
				}
				return e + "-" + f in this.matrix
			}, n.prototype.set = function(e, f, n) {
				if (e = e.id, f = f.id, f > e) {
					var o = f;
					f = e, e = o
				}
				n ? this.matrix[e + "-" + f] = !0 : delete this.matrix[e + "-" + f]
			}, n.prototype.reset = function() {
				this.matrix = {}
			}, n.prototype.setNumObjects = function() {}
		}, {}],
		9: [function(e, f) {
			function n(e, f) {
				this.from = e ? e.clone() : new i, this.to = f ? f.clone() : new i, this._direction = new i, this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = n.ANY, this.result = new u, this.hasHit = !1, this.callback = function() {}
			}

			function o(e, f, n, o) {
				o.vsub(f, G), n.vsub(f, a), e.vsub(f, r);
				var d, i, t = G.dot(G),
					l = G.dot(a),
					u = G.dot(r),
					p = a.dot(a),
					s = a.dot(r);
				return (d = p * u - l * s) >= 0 && (i = t * s - l * u) >= 0 && t * p - l * l > d + i
			}

			function d(e, f, n) {
				n.vsub(e, G);
				var o = G.dot(f);
				f.mult(o, H), H.vadd(e, H);
				var d = n.distanceTo(H);
				return d
			}
			f.exports = n;
			var i = e("../math/Vec3"),
				t = e("../math/Quaternion"),
				l = e("../math/Transform"),
				u = (e("../shapes/ConvexPolyhedron"), e("../shapes/Box"), e("../collision/RaycastResult")),
				p = e("../shapes/Shape"),
				s = e("../collision/AABB");
			n.prototype.constructor = n, n.CLOSEST = 1, n.ANY = 2, n.ALL = 4;
			var y = new s,
				c = [];
			n.prototype.intersectWorld = function(e, f) {
				return this.mode = f.mode || n.ANY, this.result = f.result || new u, this.skipBackfaces = !!f.skipBackfaces, this.collisionFilterMask = "undefined" != typeof f.collisionFilterMask ? f.collisionFilterMask : -1, this.collisionFilterGroup = "undefined" != typeof f.collisionFilterGroup ? f.collisionFilterGroup : -1, f.from && this.from.copy(f.from), f.to && this.to.copy(f.to), this.callback = f.callback || function() {}, this.hasHit = !1, this.result.reset(), this._updateDirection(), this.getAABB(y), c.length = 0, e.broadphase.aabbQuery(e, y, c), this.intersectBodies(c), this.hasHit
			};
			var a = new i,
				r = new i;
			n.pointInTriangle = o;
			var w = new i,
				b = new t;
			n.prototype.intersectBody = function(e, f) {
				f && (this.result = f, this._updateDirection());
				var n = this.checkCollisionResponse;
				if ((!n || e.collisionResponse) && 0 !== (this.collisionFilterGroup & e.collisionFilterMask) && 0 !== (e.collisionFilterGroup & this.collisionFilterMask))
					for (var o = w, d = b, i = 0, t = e.shapes.length; t > i; i++) {
						var l = e.shapes[i];
						if ((!n || l.collisionResponse) && (e.quaternion.mult(e.shapeOrientations[i], d), e.quaternion.vmult(e.shapeOffsets[i], o), o.vadd(e.position, o), this.intersectShape(l, d, o, e), this.result._shouldStop)) break
					}
			}, n.prototype.intersectBodies = function(e, f) {
				f && (this.result = f, this._updateDirection());
				for (var n = 0, o = e.length; !this.result._shouldStop && o > n; n++) this.intersectBody(e[n])
			}, n.prototype._updateDirection = function() {
				this.to.vsub(this.from, this._direction), this._direction.normalize()
			}, n.prototype.intersectShape = function(e, f, n, o) {
				var i = this.from,
					t = d(i, this._direction, n);
				if (!(t > e.boundingSphereRadius)) {
					var l = this[e.type];
					l && l.call(this, e, f, n, o)
				}
			}; {
				var m = (new i, new i, new i),
					N = new i,
					g = new i,
					x = new i;
				new i, new u
			}
			n.prototype.intersectBox = function(e, f, n, o) {
				return this.intersectConvex(e.convexPolyhedronRepresentation, f, n, o)
			}, n.prototype[p.types.BOX] = n.prototype.intersectBox, n.prototype.intersectPlane = function(e, f, n, o) {
				var d = this.from,
					t = this.to,
					l = this._direction,
					u = new i(0, 0, 1);
				f.vmult(u, u);
				var p = new i;
				d.vsub(n, p);
				var s = p.dot(u);
				t.vsub(n, p);
				var y = p.dot(u);
				if (!(s * y > 0 || d.distanceTo(t) < s)) {
					var c = u.dot(l);
					if (!(Math.abs(c) < this.precision)) {
						var a = new i,
							r = new i,
							w = new i;
						d.vsub(n, a);
						var b = -u.dot(a) / c;
						l.scale(b, r), d.vadd(r, w), this.reportIntersection(u, w, e, o, -1)
					}
				}
			}, n.prototype[p.types.PLANE] = n.prototype.intersectPlane, n.prototype.getAABB = function(e) {
				var f = this.to,
					n = this.from;
				e.lowerBound.x = Math.min(f.x, n.x), e.lowerBound.y = Math.min(f.y, n.y), e.lowerBound.z = Math.min(f.z, n.z), e.upperBound.x = Math.max(f.x, n.x), e.upperBound.y = Math.max(f.y, n.y), e.upperBound.z = Math.max(f.z, n.z)
			};
			var j = {
				faceList: [0]
			};
			n.prototype.intersectHeightfield = function(e, f, o, d) {
				var t = (e.data, e.elementSize, new i),
					u = new n(this.from, this.to);
				l.pointToLocalFrame(o, f, u.from, u.from), l.pointToLocalFrame(o, f, u.to, u.to);
				var p = [],
					s = null,
					y = null,
					c = null,
					a = null,
					r = e.getIndexOfPosition(u.from.x, u.from.y, p, !1);
				if (r && (s = p[0], y = p[1], c = p[0], a = p[1]), r = e.getIndexOfPosition(u.to.x, u.to.y, p, !1), r && ((null === s || p[0] < s) && (s = p[0]), (null === c || p[0] > c) && (c = p[0]), (null === y || p[1] < y) && (y = p[1]), (null === a || p[1] > a) && (a = p[1])), null !== s) {
					var w = [];
					e.getRectMinMax(s, y, c, a, w);
					for (var b = (w[0], w[1], s); c >= b; b++)
						for (var m = y; a >= m; m++) {
							if (this.result._shouldStop) return;
							if (e.getConvexTrianglePillar(b, m, !1), l.pointToWorldFrame(o, f, e.pillarOffset, t), this.intersectConvex(e.pillarConvex, f, t, d, j), this.result._shouldStop) return;
							e.getConvexTrianglePillar(b, m, !0), l.pointToWorldFrame(o, f, e.pillarOffset, t), this.intersectConvex(e.pillarConvex, f, t, d, j)
						}
				}
			}, n.prototype[p.types.HEIGHTFIELD] = n.prototype.intersectHeightfield;
			var v = new i,
				A = new i;
			n.prototype.intersectSphere = function(e, f, n, o) {
				var d = this.from,
					i = this.to,
					t = e.radius,
					l = Math.pow(i.x - d.x, 2) + Math.pow(i.y - d.y, 2) + Math.pow(i.z - d.z, 2),
					u = 2 * ((i.x - d.x) * (d.x - n.x) + (i.y - d.y) * (d.y - n.y) + (i.z - d.z) * (d.z - n.z)),
					p = Math.pow(d.x - n.x, 2) + Math.pow(d.y - n.y, 2) + Math.pow(d.z - n.z, 2) - Math.pow(t, 2),
					s = Math.pow(u, 2) - 4 * l * p,
					y = v,
					c = A;
				if (!(0 > s))
					if (0 === s) d.lerp(i, s, y), y.vsub(n, c), c.normalize(), this.reportIntersection(c, y, e, o, -1);
					else {
						var a = (-u - Math.sqrt(s)) / (2 * l),
							r = (-u + Math.sqrt(s)) / (2 * l);
						if (a >= 0 && 1 >= a && (d.lerp(i, a, y), y.vsub(n, c), c.normalize(), this.reportIntersection(c, y, e, o, -1)), this.result._shouldStop) return;
						r >= 0 && 1 >= r && (d.lerp(i, r, y), y.vsub(n, c), c.normalize(), this.reportIntersection(c, y, e, o, -1))
					}
			}, n.prototype[p.types.SPHERE] = n.prototype.intersectSphere;
			var C = new i,
				O = (new i, new i, new i);
			n.prototype.intersectConvex = function(e, f, n, d, i) {
				for (var t = C, l = O, u = i && i.faceList || null, p = e.faces, s = e.vertices, y = e.faceNormals, c = this._direction, a = this.from, r = this.to, w = a.distanceTo(r), b = u ? u.length : p.length, j = this.result, v = 0; !j._shouldStop && b > v; v++) {
					var A = u ? u[v] : v,
						h = p[A],
						k = y[A],
						q = f,
						z = n;
					l.copy(s[h[0]]), q.vmult(l, l), l.vadd(z, l), l.vsub(a, l), q.vmult(k, t);
					var B = c.dot(t);
					if (!(Math.abs(B) < this.precision)) {
						var D = t.dot(l) / B;
						if (!(0 > D)) {
							c.mult(D, m), m.vadd(a, m), N.copy(s[h[0]]), q.vmult(N, N), z.vadd(N, N);
							for (var E = 1; !j._shouldStop && E < h.length - 1; E++) {
								g.copy(s[h[E]]), x.copy(s[h[E + 1]]), q.vmult(g, g), q.vmult(x, x), z.vadd(g, g), z.vadd(x, x);
								var F = m.distanceTo(a);
								!o(m, N, g, x) && !o(m, g, N, x) || F > w || this.reportIntersection(t, m, e, d, A)
							}
						}
					}
				}
			}, n.prototype[p.types.CONVEXPOLYHEDRON] = n.prototype.intersectConvex;
			var h = new i,
				k = new i,
				q = new i,
				z = new i,
				B = new i,
				D = new i,
				E = (new s, []),
				F = new l;
			n.prototype.intersectTrimesh = function(e, f, n, d, i) {
				var t = h,
					u = E,
					p = F,
					s = O,
					y = k,
					c = q,
					a = z,
					r = D,
					w = B,
					b = (i && i.faceList || null, e.indices),
					j = (e.vertices, e.faceNormals, this.from),
					v = this.to,
					A = this._direction;
				p.position.copy(n), p.quaternion.copy(f), l.vectorToLocalFrame(n, f, A, y), l.pointToLocalFrame(n, f, j, c), l.pointToLocalFrame(n, f, v, a);
				var C = c.distanceSquared(a);
				e.tree.rayQuery(this, p, u);
				for (var G = 0, H = u.length; !this.result._shouldStop && G !== H; G++) {
					var I = u[G];
					e.getNormal(I, t), e.getVertex(b[3 * I], N), N.vsub(c, s);
					var J = y.dot(t),
						K = t.dot(s) / J;
					if (!(0 > K)) {
						y.scale(K, m), m.vadd(c, m), e.getVertex(b[3 * I + 1], g), e.getVertex(b[3 * I + 2], x);
						var L = m.distanceSquared(c);
						!o(m, g, N, x) && !o(m, N, g, x) || L > C || (l.vectorToWorldFrame(f, t, w), l.pointToWorldFrame(n, f, m, r), this.reportIntersection(w, r, e, d, I))
					}
				}
				u.length = 0
			}, n.prototype[p.types.TRIMESH] = n.prototype.intersectTrimesh, n.prototype.reportIntersection = function(e, f, o, d, i) {
				var t = this.from,
					l = this.to,
					u = t.distanceTo(f),
					p = this.result;
				if (!(this.skipBackfaces && e.dot(this._direction) > 0)) switch (p.hitFaceIndex = "undefined" != typeof i ? i : -1, this.mode) {
					case n.ALL:
						this.hasHit = !0, p.set(t, l, e, f, o, d, u), p.hasHit = !0, this.callback(p);
						break;
					case n.CLOSEST:
						(u < p.distance || !p.hasHit) && (this.hasHit = !0, p.hasHit = !0, p.set(t, l, e, f, o, d, u));
						break;
					case n.ANY:
						this.hasHit = !0, p.hasHit = !0, p.set(t, l, e, f, o, d, u), p._shouldStop = !0
				}
			};
			var G = new i,
				H = new i
		}, {
			"../collision/AABB": 3,
			"../collision/RaycastResult": 10,
			"../math/Quaternion": 28,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"../shapes/Box": 37,
			"../shapes/ConvexPolyhedron": 38,
			"../shapes/Shape": 43
		}],
		10: [function(e, f) {
			function n() {
				this.rayFromWorld = new o, this.rayToWorld = new o, this.hitNormalWorld = new o, this.hitPointWorld = new o, this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1
			}
			var o = e("../math/Vec3");
			f.exports = n, n.prototype.reset = function() {
				this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1
			}, n.prototype.abort = function() {
				this._shouldStop = !0
			}, n.prototype.set = function(e, f, n, o, d, i, t) {
				this.rayFromWorld.copy(e), this.rayToWorld.copy(f), this.hitNormalWorld.copy(n), this.hitPointWorld.copy(o), this.shape = d, this.body = i, this.distance = t
			}
		}, {
			"../math/Vec3": 30
		}],
		11: [function(e, f) {
			function n(e) {
				o.apply(this), this.axisList = [], this.world = null, this.axisIndex = 0;
				var f = this.axisList;
				this._addBodyHandler = function(e) {
					f.push(e.body)
				}, this._removeBodyHandler = function(e) {
					var n = f.indexOf(e.body); - 1 !== n && f.splice(n, 1)
				}, e && this.setWorld(e)
			}
			var o = (e("../shapes/Shape"), e("../collision/Broadphase"));
			f.exports = n, n.prototype = new o, n.prototype.setWorld = function(e) {
				this.axisList.length = 0;
				for (var f = 0; f < e.bodies.length; f++) this.axisList.push(e.bodies[f]);
				e.removeEventListener("addBody", this._addBodyHandler), e.removeEventListener("removeBody", this._removeBodyHandler), e.addEventListener("addBody", this._addBodyHandler), e.addEventListener("removeBody", this._removeBodyHandler), this.world = e, this.dirty = !0
			}, n.insertionSortX = function(e) {
				for (var f = 1, n = e.length; n > f; f++) {
					for (var o = e[f], d = f - 1; d >= 0 && !(e[d].aabb.lowerBound.x <= o.aabb.lowerBound.x); d--) e[d + 1] = e[d];
					e[d + 1] = o
				}
				return e
			}, n.insertionSortY = function(e) {
				for (var f = 1, n = e.length; n > f; f++) {
					for (var o = e[f], d = f - 1; d >= 0 && !(e[d].aabb.lowerBound.y <= o.aabb.lowerBound.y); d--) e[d + 1] = e[d];
					e[d + 1] = o
				}
				return e
			}, n.insertionSortZ = function(e) {
				for (var f = 1, n = e.length; n > f; f++) {
					for (var o = e[f], d = f - 1; d >= 0 && !(e[d].aabb.lowerBound.z <= o.aabb.lowerBound.z); d--) e[d + 1] = e[d];
					e[d + 1] = o
				}
				return e
			}, n.prototype.collisionPairs = function(e, f, o) {
				var d, i, t = this.axisList,
					l = t.length,
					u = this.axisIndex;
				for (this.dirty && (this.sortList(), this.dirty = !1), d = 0; d !== l; d++) {
					var p = t[d];
					for (i = d + 1; l > i; i++) {
						var s = t[i];
						if (this.needBroadphaseCollision(p, s)) {
							if (!n.checkBounds(p, s, u)) break;
							this.intersectionTest(p, s, f, o)
						}
					}
				}
			}, n.prototype.sortList = function() {
				for (var e = this.axisList, f = this.axisIndex, o = e.length, d = 0; d !== o; d++) {
					var i = e[d];
					i.aabbNeedsUpdate && i.computeAABB()
				}
				0 === f ? n.insertionSortX(e) : 1 === f ? n.insertionSortY(e) : 2 === f && n.insertionSortZ(e)
			}, n.checkBounds = function(e, f, n) {
				var o, d;
				0 === n ? (o = e.position.x, d = f.position.x) : 1 === n ? (o = e.position.y, d = f.position.y) : 2 === n && (o = e.position.z, d = f.position.z);
				var i = e.boundingRadius,
					t = f.boundingRadius,
					l = o + i,
					u = d - t;
				return l > u
			}, n.prototype.autoDetectAxis = function() {
				for (var e = 0, f = 0, n = 0, o = 0, d = 0, i = 0, t = this.axisList, l = t.length, u = 1 / l, p = 0; p !== l; p++) {
					var s = t[p],
						y = s.position.x;
					e += y, f += y * y;
					var c = s.position.y;
					n += c, o += c * c;
					var a = s.position.z;
					d += a, i += a * a
				}
				var r = f - e * e * u,
					w = o - n * n * u,
					b = i - d * d * u;
				this.axisIndex = r > w ? r > b ? 0 : 2 : w > b ? 1 : 2
			}, n.prototype.aabbQuery = function(e, f, n) {
				n = n || [], this.dirty && (this.sortList(), this.dirty = !1);
				var o = this.axisIndex,
					d = "x";
				1 === o && (d = "y"), 2 === o && (d = "z");
				for (var i = this.axisList, t = (f.lowerBound[d], f.upperBound[d], 0); t < i.length; t++) {
					var l = i[t];
					l.aabbNeedsUpdate && l.computeAABB(), l.aabb.overlaps(f) && n.push(l)
				}
				return n
			}
		}, {
			"../collision/Broadphase": 5,
			"../shapes/Shape": 43
		}],
		12: [function(e, f) {
			function n(e, f, n) {
				n = n || {};
				var l = "undefined" != typeof n.maxForce ? n.maxForce : 1e6,
					u = n.pivotA ? n.pivotA.clone() : new t,
					p = n.pivotB ? n.pivotB.clone() : new t;
				this.axisA = n.axisA ? n.axisA.clone() : new t, this.axisB = n.axisB ? n.axisB.clone() : new t, o.call(this, e, u, f, p, l), this.collideConnected = !!n.collideConnected, this.angle = "undefined" != typeof n.angle ? n.angle : 0;
				var s = this.coneEquation = new d(e, f, n),
					y = this.twistEquation = new i(e, f, n);
				this.twistAngle = "undefined" != typeof n.twistAngle ? n.twistAngle : 0, s.maxForce = 0, s.minForce = -l, y.maxForce = 0, y.minForce = -l, this.equations.push(s, y)
			}
			f.exports = n;
			var o = (e("./Constraint"), e("./PointToPointConstraint")),
				d = e("../equations/ConeEquation"),
				i = e("../equations/RotationalEquation"),
				t = (e("../equations/ContactEquation"), e("../math/Vec3"));
			n.prototype = new o, n.constructor = n;
			new t, new t;
			n.prototype.update = function() {
				var e = this.bodyA,
					f = this.bodyB,
					n = this.coneEquation,
					d = this.twistEquation;
				o.prototype.update.call(this), e.vectorToWorldFrame(this.axisA, n.axisA), f.vectorToWorldFrame(this.axisB, n.axisB), this.axisA.tangents(d.axisA, d.axisA), e.vectorToWorldFrame(d.axisA, d.axisA), this.axisB.tangents(d.axisB, d.axisB), f.vectorToWorldFrame(d.axisB, d.axisB), n.angle = this.angle, d.maxAngle = this.twistAngle
			}
		}, {
			"../equations/ConeEquation": 18,
			"../equations/ContactEquation": 19,
			"../equations/RotationalEquation": 22,
			"../math/Vec3": 30,
			"./Constraint": 13,
			"./PointToPointConstraint": 17
		}],
		13: [function(e, f) {
			function n(e, f, d) {
				d = o.defaults(d, {
					collideConnected: !0,
					wakeUpBodies: !0
				}), this.equations = [], this.bodyA = e, this.bodyB = f, this.id = n.idCounter++, this.collideConnected = d.collideConnected, d.wakeUpBodies && (e && e.wakeUp(), f && f.wakeUp())
			}
			f.exports = n;
			var o = e("../utils/Utils");
			n.prototype.update = function() {
				throw new Error("method update() not implmemented in this Constraint subclass!")
			}, n.prototype.enable = function() {
				for (var e = this.equations, f = 0; f < e.length; f++) e[f].enabled = !0
			}, n.prototype.disable = function() {
				for (var e = this.equations, f = 0; f < e.length; f++) e[f].enabled = !1
			}, n.idCounter = 0
		}, {
			"../utils/Utils": 53
		}],
		14: [function(e, f) {
			function n(e, f, n, i) {
				o.call(this, e, f), "undefined" == typeof n && (n = e.position.distanceTo(f.position)), "undefined" == typeof i && (i = 1e6), this.distance = n;
				var t = this.distanceEquation = new d(e, f);
				this.equations.push(t), t.minForce = -i, t.maxForce = i
			}
			f.exports = n;
			var o = e("./Constraint"),
				d = e("../equations/ContactEquation");
			n.prototype = new o, n.prototype.update = function() {
				var e = this.bodyA,
					f = this.bodyB,
					n = this.distanceEquation,
					o = .5 * this.distance,
					d = n.ni;
				f.position.vsub(e.position, d), d.normalize(), d.mult(o, n.ri), d.mult(-o, n.rj)
			}
		}, {
			"../equations/ContactEquation": 19,
			"./Constraint": 13
		}],
		15: [function(e, f) {
			function n(e, f, n) {
				n = n || {};
				var l = "undefined" != typeof n.maxForce ? n.maxForce : 1e6,
					u = n.pivotA ? n.pivotA.clone() : new t,
					p = n.pivotB ? n.pivotB.clone() : new t;
				o.call(this, e, u, f, p, l);
				var s = this.axisA = n.axisA ? n.axisA.clone() : new t(1, 0, 0);
				s.normalize();
				var y = this.axisB = n.axisB ? n.axisB.clone() : new t(1, 0, 0);
				y.normalize();
				var c = this.rotationalEquation1 = new d(e, f, n),
					a = this.rotationalEquation2 = new d(e, f, n),
					r = this.motorEquation = new i(e, f, l);
				r.enabled = !1, this.equations.push(c, a, r)
			}
			f.exports = n;
			var o = (e("./Constraint"), e("./PointToPointConstraint")),
				d = e("../equations/RotationalEquation"),
				i = e("../equations/RotationalMotorEquation"),
				t = (e("../equations/ContactEquation"), e("../math/Vec3"));
			n.prototype = new o, n.constructor = n, n.prototype.enableMotor = function() {
				this.motorEquation.enabled = !0
			}, n.prototype.disableMotor = function() {
				this.motorEquation.enabled = !1
			}, n.prototype.setMotorSpeed = function(e) {
				this.motorEquation.targetVelocity = e
			}, n.prototype.setMotorMaxForce = function(e) {
				this.motorEquation.maxForce = e, this.motorEquation.minForce = -e
			};
			var l = new t,
				u = new t;
			n.prototype.update = function() {
				var e = this.bodyA,
					f = this.bodyB,
					n = this.motorEquation,
					d = this.rotationalEquation1,
					i = this.rotationalEquation2,
					t = l,
					p = u,
					s = this.axisA,
					y = this.axisB;
				o.prototype.update.call(this), e.quaternion.vmult(s, t), f.quaternion.vmult(y, p), t.tangents(d.axisA, i.axisA), d.axisB.copy(p), i.axisB.copy(p), this.motorEquation.enabled && (e.quaternion.vmult(this.axisA, n.axisA), f.quaternion.vmult(this.axisB, n.axisB))
			}
		}, {
			"../equations/ContactEquation": 19,
			"../equations/RotationalEquation": 22,
			"../equations/RotationalMotorEquation": 23,
			"../math/Vec3": 30,
			"./Constraint": 13,
			"./PointToPointConstraint": 17
		}],
		16: [function(e, f) {
			function n(e, f, n) {
				n = n || {};
				var t = "undefined" != typeof n.maxForce ? n.maxForce : 1e6,
					l = new i,
					u = new i,
					p = new i;
				e.position.vadd(f.position, p), p.scale(.5, p), f.pointToLocalFrame(p, u), e.pointToLocalFrame(p, l), o.call(this, e, l, f, u, t);
				var s = this.rotationalEquation1 = new d(e, f, n),
					y = this.rotationalEquation2 = new d(e, f, n),
					c = this.rotationalEquation3 = new d(e, f, n);
				this.equations.push(s, y, c)
			}
			f.exports = n;
			var o = (e("./Constraint"), e("./PointToPointConstraint")),
				d = e("../equations/RotationalEquation"),
				i = (e("../equations/RotationalMotorEquation"), e("../equations/ContactEquation"), e("../math/Vec3"));
			n.prototype = new o, n.constructor = n;
			new i, new i;
			n.prototype.update = function() {
				var e = this.bodyA,
					f = this.bodyB,
					n = (this.motorEquation, this.rotationalEquation1),
					d = this.rotationalEquation2,
					t = this.rotationalEquation3;
				o.prototype.update.call(this), e.vectorToWorldFrame(i.UNIT_X, n.axisA), f.vectorToWorldFrame(i.UNIT_Y, n.axisB), e.vectorToWorldFrame(i.UNIT_Y, d.axisA), f.vectorToWorldFrame(i.UNIT_Z, d.axisB), e.vectorToWorldFrame(i.UNIT_Z, t.axisA), f.vectorToWorldFrame(i.UNIT_X, t.axisB)
			}
		}, {
			"../equations/ContactEquation": 19,
			"../equations/RotationalEquation": 22,
			"../equations/RotationalMotorEquation": 23,
			"../math/Vec3": 30,
			"./Constraint": 13,
			"./PointToPointConstraint": 17
		}],
		17: [function(e, f) {
			function n(e, f, n, t, l) {
				o.call(this, e, n), l = "undefined" != typeof l ? l : 1e6, this.pivotA = f ? f.clone() : new i, this.pivotB = t ? t.clone() : new i;
				var u = this.equationX = new d(e, n),
					p = this.equationY = new d(e, n),
					s = this.equationZ = new d(e, n);
				this.equations.push(u, p, s), u.minForce = p.minForce = s.minForce = -l, u.maxForce = p.maxForce = s.maxForce = l, u.ni.set(1, 0, 0), p.ni.set(0, 1, 0), s.ni.set(0, 0, 1)
			}
			f.exports = n;
			var o = e("./Constraint"),
				d = e("../equations/ContactEquation"),
				i = e("../math/Vec3");
			n.prototype = new o, n.prototype.update = function() {
				var e = this.bodyA,
					f = this.bodyB,
					n = this.equationX,
					o = this.equationY,
					d = this.equationZ;
				e.quaternion.vmult(this.pivotA, n.ri), f.quaternion.vmult(this.pivotB, n.rj), o.ri.copy(n.ri), o.rj.copy(n.rj), d.ri.copy(n.ri), d.rj.copy(n.rj)
			}
		}, {
			"../equations/ContactEquation": 19,
			"../math/Vec3": 30,
			"./Constraint": 13
		}],
		18: [function(e, f) {
			function n(e, f, n) {
				n = n || {};
				var i = "undefined" != typeof n.maxForce ? n.maxForce : 1e6;
				d.call(this, e, f, -i, i), this.axisA = n.axisA ? n.axisA.clone() : new o(1, 0, 0), this.axisB = n.axisB ? n.axisB.clone() : new o(0, 1, 0), this.angle = "undefined" != typeof n.angle ? n.angle : 0
			}
			f.exports = n;
			var o = e("../math/Vec3"),
				d = (e("../math/Mat3"), e("./Equation"));
			n.prototype = new d, n.prototype.constructor = n;
			var i = new o,
				t = new o;
			n.prototype.computeB = function(e) {
				var f = this.a,
					n = this.b,
					o = this.axisA,
					d = this.axisB,
					l = i,
					u = t,
					p = this.jacobianElementA,
					s = this.jacobianElementB;
				o.cross(d, l), d.cross(o, u), p.rotational.copy(u), s.rotational.copy(l);
				var y = Math.cos(this.angle) - o.dot(d),
					c = this.computeGW(),
					a = this.computeGiMf(),
					r = -y * f - c * n - e * a;
				return r
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		19: [function(e, f) {
			function n(e, f, n) {
				n = "undefined" != typeof n ? n : 1e6, o.call(this, e, f, 0, n), this.restitution = 0, this.ri = new d, this.rj = new d, this.ni = new d
			}
			f.exports = n; {
				var o = e("./Equation"),
					d = e("../math/Vec3");
				e("../math/Mat3")
			}
			n.prototype = new o, n.prototype.constructor = n;
			var i = new d,
				t = new d,
				l = new d;
			n.prototype.computeB = function(e) {
				var f = this.a,
					n = this.b,
					o = this.bi,
					d = this.bj,
					u = this.ri,
					p = this.rj,
					s = i,
					y = t,
					c = o.velocity,
					a = o.angularVelocity,
					r = (o.force, o.torque, d.velocity),
					w = d.angularVelocity,
					b = (d.force, d.torque, l),
					m = this.jacobianElementA,
					N = this.jacobianElementB,
					g = this.ni;
				u.cross(g, s), p.cross(g, y), g.negate(m.spatial), s.negate(m.rotational), N.spatial.copy(g), N.rotational.copy(y), b.copy(d.position), b.vadd(p, b), b.vsub(o.position, b), b.vsub(u, b);
				var x = g.dot(b),
					j = this.restitution + 1,
					v = j * r.dot(g) - j * c.dot(g) + w.dot(y) - a.dot(s),
					A = this.computeGiMf(),
					C = -x * f - v * n - e * A;
				return C
			};
			var u = new d,
				p = new d,
				s = new d,
				y = new d,
				c = new d;
			n.prototype.getImpactVelocityAlongNormal = function() {
				var e = u,
					f = p,
					n = s,
					o = y,
					d = c;
				return this.bi.position.vadd(this.ri, n), this.bj.position.vadd(this.rj, o), this.bi.getVelocityAtWorldPoint(n, e), this.bj.getVelocityAtWorldPoint(o, f), e.vsub(f, d), this.ni.dot(d)
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		20: [function(e, f) {
			function n(e, f, d, i) {
				this.id = n.id++, this.minForce = "undefined" == typeof d ? -1e6 : d, this.maxForce = "undefined" == typeof i ? 1e6 : i, this.bi = e, this.bj = f, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new o, this.jacobianElementB = new o, this.enabled = !0, this.setSpookParams(1e7, 4, 1 / 60)
			}
			f.exports = n;
			var o = e("../math/JacobianElement"),
				d = e("../math/Vec3");
			n.prototype.constructor = n, n.id = 0, n.prototype.setSpookParams = function(e, f, n) {
				var o = f,
					d = e,
					i = n;
				this.a = 4 / (i * (1 + 4 * o)), this.b = 4 * o / (1 + 4 * o), this.eps = 4 / (i * i * d * (1 + 4 * o))
			}, n.prototype.computeB = function(e, f, n) {
				var o = this.computeGW(),
					d = this.computeGq(),
					i = this.computeGiMf();
				return -d * e - o * f - i * n
			}, n.prototype.computeGq = function() {
				var e = this.jacobianElementA,
					f = this.jacobianElementB,
					n = this.bi,
					o = this.bj,
					d = n.position,
					i = o.position;
				return e.spatial.dot(d) + f.spatial.dot(i)
			};
			var i = new d;
			n.prototype.computeGW = function() {
				var e = this.jacobianElementA,
					f = this.jacobianElementB,
					n = this.bi,
					o = this.bj,
					d = n.velocity,
					t = o.velocity,
					l = n.angularVelocity || i,
					u = o.angularVelocity || i;
				return e.multiplyVectors(d, l) + f.multiplyVectors(t, u)
			}, n.prototype.computeGWlambda = function() {
				var e = this.jacobianElementA,
					f = this.jacobianElementB,
					n = this.bi,
					o = this.bj,
					d = n.vlambda,
					t = o.vlambda,
					l = n.wlambda || i,
					u = o.wlambda || i;
				return e.multiplyVectors(d, l) + f.multiplyVectors(t, u)
			};
			var t = new d,
				l = new d,
				u = new d,
				p = new d;
			n.prototype.computeGiMf = function() {
				var e = this.jacobianElementA,
					f = this.jacobianElementB,
					n = this.bi,
					o = this.bj,
					d = n.force,
					i = n.torque,
					s = o.force,
					y = o.torque,
					c = n.invMassSolve,
					a = o.invMassSolve;
				return n.invInertiaWorldSolve ? n.invInertiaWorldSolve.vmult(i, u) : u.set(0, 0, 0), o.invInertiaWorldSolve ? o.invInertiaWorldSolve.vmult(y, p) : p.set(0, 0, 0), d.mult(c, t), s.mult(a, l), e.multiplyVectors(t, u) + f.multiplyVectors(l, p)
			};
			var s = new d;
			n.prototype.computeGiMGt = function() {
				var e = this.jacobianElementA,
					f = this.jacobianElementB,
					n = this.bi,
					o = this.bj,
					d = n.invMassSolve,
					i = o.invMassSolve,
					t = n.invInertiaWorldSolve,
					l = o.invInertiaWorldSolve,
					u = d + i;
				return t && (t.vmult(e.rotational, s), u += s.dot(e.rotational)), l && (l.vmult(f.rotational, s), u += s.dot(f.rotational)), u
			}; {
				var y = new d;
				new d, new d, new d, new d, new d
			}
			n.prototype.addToWlambda = function(e) {
				var f = this.jacobianElementA,
					n = this.jacobianElementB,
					o = this.bi,
					d = this.bj,
					i = y;
				f.spatial.mult(o.invMassSolve * e, i), o.vlambda.vadd(i, o.vlambda), n.spatial.mult(d.invMassSolve * e, i), d.vlambda.vadd(i, d.vlambda), o.invInertiaWorldSolve && (o.invInertiaWorldSolve.vmult(f.rotational, i), i.mult(e, i), o.wlambda.vadd(i, o.wlambda)), d.invInertiaWorldSolve && (d.invInertiaWorldSolve.vmult(n.rotational, i), i.mult(e, i), d.wlambda.vadd(i, d.wlambda))
			}, n.prototype.computeC = function() {
				return this.computeGiMGt() + this.eps
			}
		}, {
			"../math/JacobianElement": 26,
			"../math/Vec3": 30
		}],
		21: [function(e, f) {
			function n(e, f, n) {
				o.call(this, e, f, -n, n), this.ri = new d, this.rj = new d, this.t = new d
			}
			f.exports = n; {
				var o = e("./Equation"),
					d = e("../math/Vec3");
				e("../math/Mat3")
			}
			n.prototype = new o, n.prototype.constructor = n;
			var i = new d,
				t = new d;
			n.prototype.computeB = function(e) {
				var f = (this.a, this.b),
					n = (this.bi, this.bj, this.ri),
					o = this.rj,
					d = i,
					l = t,
					u = this.t;
				n.cross(u, d), o.cross(u, l);
				var p = this.jacobianElementA,
					s = this.jacobianElementB;
				u.negate(p.spatial), d.negate(p.rotational), s.spatial.copy(u), s.rotational.copy(l);
				var y = this.computeGW(),
					c = this.computeGiMf(),
					a = -y * f - e * c;
				return a
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		22: [function(e, f) {
			function n(e, f, n) {
				n = n || {};
				var i = "undefined" != typeof n.maxForce ? n.maxForce : 1e6;
				d.call(this, e, f, -i, i), this.axisA = n.axisA ? n.axisA.clone() : new o(1, 0, 0), this.axisB = n.axisB ? n.axisB.clone() : new o(0, 1, 0), this.maxAngle = Math.PI / 2
			}
			f.exports = n;
			var o = e("../math/Vec3"),
				d = (e("../math/Mat3"), e("./Equation"));
			n.prototype = new d, n.prototype.constructor = n;
			var i = new o,
				t = new o;
			n.prototype.computeB = function(e) {
				var f = this.a,
					n = this.b,
					o = this.axisA,
					d = this.axisB,
					l = i,
					u = t,
					p = this.jacobianElementA,
					s = this.jacobianElementB;
				o.cross(d, l), d.cross(o, u), p.rotational.copy(u), s.rotational.copy(l);
				var y = Math.cos(this.maxAngle) - o.dot(d),
					c = this.computeGW(),
					a = this.computeGiMf(),
					r = -y * f - c * n - e * a;
				return r
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		23: [function(e, f) {
			function n(e, f, n) {
				n = "undefined" != typeof n ? n : 1e6, d.call(this, e, f, -n, n), this.axisA = new o, this.axisB = new o, this.targetVelocity = 0
			}
			f.exports = n;
			var o = e("../math/Vec3"),
				d = (e("../math/Mat3"), e("./Equation"));
			n.prototype = new d, n.prototype.constructor = n, n.prototype.computeB = function(e) {
				var f = (this.a, this.b),
					n = (this.bi, this.bj, this.axisA),
					o = this.axisB,
					d = this.jacobianElementA,
					i = this.jacobianElementB;
				d.rotational.copy(n), o.negate(i.rotational);
				var t = this.computeGW() - this.targetVelocity,
					l = this.computeGiMf(),
					u = -t * f - e * l;
				return u
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		24: [function(e, f) {
			function n(e, f, d) {
				d = o.defaults(d, {
					friction: .3,
					restitution: .3,
					contactEquationStiffness: 1e7,
					contactEquationRelaxation: 3,
					frictionEquationStiffness: 1e7,
					frictionEquationRelaxation: 3
				}), this.id = n.idCounter++, this.materials = [e, f], this.friction = d.friction, this.restitution = d.restitution, this.contactEquationStiffness = d.contactEquationStiffness, this.contactEquationRelaxation = d.contactEquationRelaxation, this.frictionEquationStiffness = d.frictionEquationStiffness, this.frictionEquationRelaxation = d.frictionEquationRelaxation
			}
			var o = e("../utils/Utils");
			f.exports = n, n.idCounter = 0
		}, {
			"../utils/Utils": 53
		}],
		25: [function(e, f) {
			function n(e) {
				var f = "";
				e = e || {}, "string" == typeof e ? (f = e, e = {}) : "object" == typeof e && (f = ""), this.name = f, this.id = n.idCounter++, this.friction = "undefined" != typeof e.friction ? e.friction : -1, this.restitution = "undefined" != typeof e.restitution ? e.restitution : -1
			}
			f.exports = n, n.idCounter = 0
		}, {}],
		26: [function(e, f) {
			function n() {
				this.spatial = new o, this.rotational = new o
			}
			f.exports = n;
			var o = e("./Vec3");
			n.prototype.multiplyElement = function(e) {
				return e.spatial.dot(this.spatial) + e.rotational.dot(this.rotational)
			}, n.prototype.multiplyVectors = function(e, f) {
				return e.dot(this.spatial) + f.dot(this.rotational)
			}
		}, {
			"./Vec3": 30
		}],
		27: [function(e, f) {
			function n(e) {
				this.elements = e ? e : [0, 0, 0, 0, 0, 0, 0, 0, 0]
			}
			f.exports = n;
			var o = e("./Vec3");
			n.prototype.identity = function() {
				var e = this.elements;
				e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1
			}, n.prototype.setZero = function() {
				var e = this.elements;
				e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 0
			}, n.prototype.setTrace = function(e) {
				var f = this.elements;
				f[0] = e.x, f[4] = e.y, f[8] = e.z
			}, n.prototype.getTrace = function(e) {
				var e = e || new o,
					f = this.elements;
				e.x = f[0], e.y = f[4], e.z = f[8]
			}, n.prototype.vmult = function(e, f) {
				f = f || new o;
				var n = this.elements,
					d = e.x,
					i = e.y,
					t = e.z;
				return f.x = n[0] * d + n[1] * i + n[2] * t, f.y = n[3] * d + n[4] * i + n[5] * t, f.z = n[6] * d + n[7] * i + n[8] * t, f
			}, n.prototype.smult = function(e) {
				for (var f = 0; f < this.elements.length; f++) this.elements[f] *= e
			}, n.prototype.mmult = function(e, f) {
				for (var o = f || new n, d = 0; 3 > d; d++)
					for (var i = 0; 3 > i; i++) {
						for (var t = 0, l = 0; 3 > l; l++) t += e.elements[d + 3 * l] * this.elements[l + 3 * i];
						o.elements[d + 3 * i] = t
					}
				return o
			}, n.prototype.scale = function(e, f) {
				f = f || new n;
				for (var o = this.elements, d = f.elements, i = 0; 3 !== i; i++) d[3 * i + 0] = e.x * o[3 * i + 0], d[3 * i + 1] = e.y * o[3 * i + 1], d[3 * i + 2] = e.z * o[3 * i + 2];
				return f
			}, n.prototype.solve = function(e, f) {
				f = f || new o;
				for (var n = 3, d = 4, i = [], t = 0; n * d > t; t++) i.push(0);
				var t, l;
				for (t = 0; 3 > t; t++)
					for (l = 0; 3 > l; l++) i[t + d * l] = this.elements[t + 3 * l];
				i[3] = e.x, i[7] = e.y, i[11] = e.z;
				var u, p, s = 3,
					y = s,
					c = 4;
				do {
					if (t = y - s, 0 === i[t + d * t])
						for (l = t + 1; y > l; l++)
							if (0 !== i[t + d * l]) {
								u = c;
								do p = c - u, i[p + d * t] += i[p + d * l]; while (--u);
								break
							}
					if (0 !== i[t + d * t])
						for (l = t + 1; y > l; l++) {
							var a = i[t + d * l] / i[t + d * t];
							u = c;
							do p = c - u, i[p + d * l] = t >= p ? 0 : i[p + d * l] - i[p + d * t] * a; while (--u)
						}
				} while (--s);
				if (f.z = i[2 * d + 3] / i[2 * d + 2], f.y = (i[1 * d + 3] - i[1 * d + 2] * f.z) / i[1 * d + 1], f.x = (i[0 * d + 3] - i[0 * d + 2] * f.z - i[0 * d + 1] * f.y) / i[0 * d + 0], isNaN(f.x) || isNaN(f.y) || isNaN(f.z) || 1 / 0 === f.x || 1 / 0 === f.y || 1 / 0 === f.z) throw "Could not solve equation! Got x=[" + f.toString() + "], b=[" + e.toString() + "], A=[" + this.toString() + "]";
				return f
			}, n.prototype.e = function(e, f, n) {
				return void 0 === n ? this.elements[f + 3 * e] : void(this.elements[f + 3 * e] = n)
			}, n.prototype.copy = function(e) {
				for (var f = 0; f < e.elements.length; f++) this.elements[f] = e.elements[f];
				return this
			}, n.prototype.toString = function() {
				for (var e = "", f = ",", n = 0; 9 > n; n++) e += this.elements[n] + f;
				return e
			}, n.prototype.reverse = function(e) {
				e = e || new n;
				for (var f = 3, o = 6, d = [], i = 0; f * o > i; i++) d.push(0);
				var i, t;
				for (i = 0; 3 > i; i++)
					for (t = 0; 3 > t; t++) d[i + o * t] = this.elements[i + 3 * t];
				d[3] = 1, d[9] = 0, d[15] = 0, d[4] = 0, d[10] = 1, d[16] = 0, d[5] = 0, d[11] = 0, d[17] = 1;
				var l, u, p = 3,
					s = p,
					y = o;
				do {
					if (i = s - p, 0 === d[i + o * i])
						for (t = i + 1; s > t; t++)
							if (0 !== d[i + o * t]) {
								l = y;
								do u = y - l, d[u + o * i] += d[u + o * t]; while (--l);
								break
							}
					if (0 !== d[i + o * i])
						for (t = i + 1; s > t; t++) {
							var c = d[i + o * t] / d[i + o * i];
							l = y;
							do u = y - l, d[u + o * t] = i >= u ? 0 : d[u + o * t] - d[u + o * i] * c; while (--l)
						}
				} while (--p);
				i = 2;
				do {
					t = i - 1;
					do {
						var c = d[i + o * t] / d[i + o * i];
						l = o;
						do u = o - l, d[u + o * t] = d[u + o * t] - d[u + o * i] * c; while (--l)
					} while (t--)
				} while (--i);
				i = 2;
				do {
					var c = 1 / d[i + o * i];
					l = o;
					do u = o - l, d[u + o * i] = d[u + o * i] * c; while (--l)
				} while (i--);
				i = 2;
				do {
					t = 2;
					do {
						if (u = d[f + t + o * i], isNaN(u) || 1 / 0 === u) throw "Could not reverse! A=[" + this.toString() + "]";
						e.e(i, t, u)
					} while (t--)
				} while (i--);
				return e
			}, n.prototype.setRotationFromQuaternion = function(e) {
				var f = e.x,
					n = e.y,
					o = e.z,
					d = e.w,
					i = f + f,
					t = n + n,
					l = o + o,
					u = f * i,
					p = f * t,
					s = f * l,
					y = n * t,
					c = n * l,
					a = o * l,
					r = d * i,
					w = d * t,
					b = d * l,
					m = this.elements;
				return m[0] = 1 - (y + a), m[1] = p - b, m[2] = s + w, m[3] = p + b, m[4] = 1 - (u + a), m[5] = c - r, m[6] = s - w, m[7] = c + r, m[8] = 1 - (u + y), this
			}, n.prototype.transpose = function(e) {
				e = e || new n;
				for (var f = e.elements, o = this.elements, d = 0; 3 !== d; d++)
					for (var i = 0; 3 !== i; i++) f[3 * d + i] = o[3 * i + d];
				return e
			}
		}, {
			"./Vec3": 30
		}],
		28: [function(e, f) {
			function n(e, f, n, o) {
				this.x = void 0 !== e ? e : 0, this.y = void 0 !== f ? f : 0, this.z = void 0 !== n ? n : 0, this.w = void 0 !== o ? o : 1
			}
			f.exports = n;
			var o = e("./Vec3");
			n.prototype.set = function(e, f, n, o) {
				this.x = e, this.y = f, this.z = n, this.w = o
			}, n.prototype.toString = function() {
				return this.x + "," + this.y + "," + this.z + "," + this.w
			}, n.prototype.toArray = function() {
				return [this.x, this.y, this.z, this.w]
			}, n.prototype.setFromAxisAngle = function(e, f) {
				var n = Math.sin(.5 * f);
				this.x = e.x * n, this.y = e.y * n, this.z = e.z * n, this.w = Math.cos(.5 * f)
			}, n.prototype.toAxisAngle = function(e) {
				e = e || new o, this.normalize();
				var f = 2 * Math.acos(this.w),
					n = Math.sqrt(1 - this.w * this.w);
				return .001 > n ? (e.x = this.x, e.y = this.y, e.z = this.z) : (e.x = this.x / n, e.y = this.y / n, e.z = this.z / n), [e, f]
			};
			var d = new o,
				i = new o;
			n.prototype.setFromVectors = function(e, f) {
				if (e.isAntiparallelTo(f)) {
					var n = d,
						o = i;
					e.tangents(n, o), this.setFromAxisAngle(n, Math.PI)
				} else {
					var t = e.cross(f);
					this.x = t.x, this.y = t.y, this.z = t.z, this.w = Math.sqrt(Math.pow(e.norm(), 2) * Math.pow(f.norm(), 2)) + e.dot(f), this.normalize()
				}
			};
			var t = new o,
				l = new o,
				u = new o;
			n.prototype.mult = function(e, f) {
				f = f || new n;
				var o = this.w,
					d = t,
					i = l,
					p = u;
				return d.set(this.x, this.y, this.z), i.set(e.x, e.y, e.z), f.w = o * e.w - d.dot(i), d.cross(i, p), f.x = o * i.x + e.w * d.x + p.x, f.y = o * i.y + e.w * d.y + p.y, f.z = o * i.z + e.w * d.z + p.z, f
			}, n.prototype.inverse = function(e) {
				var f = this.x,
					o = this.y,
					d = this.z,
					i = this.w;
				e = e || new n, this.conjugate(e);
				var t = 1 / (f * f + o * o + d * d + i * i);
				return e.x *= t, e.y *= t, e.z *= t, e.w *= t, e
			}, n.prototype.conjugate = function(e) {
				return e = e || new n, e.x = -this.x, e.y = -this.y, e.z = -this.z, e.w = this.w, e
			}, n.prototype.normalize = function() {
				var e = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
				0 === e ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (e = 1 / e, this.x *= e, this.y *= e, this.z *= e, this.w *= e)
			}, n.prototype.normalizeFast = function() {
				var e = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
				0 === e ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= e, this.y *= e, this.z *= e, this.w *= e)
			}, n.prototype.vmult = function(e, f) {
				f = f || new o;
				var n = e.x,
					d = e.y,
					i = e.z,
					t = this.x,
					l = this.y,
					u = this.z,
					p = this.w,
					s = p * n + l * i - u * d,
					y = p * d + u * n - t * i,
					c = p * i + t * d - l * n,
					a = -t * n - l * d - u * i;
				return f.x = s * p + a * -t + y * -u - c * -l, f.y = y * p + a * -l + c * -t - s * -u, f.z = c * p + a * -u + s * -l - y * -t, f
			}, n.prototype.copy = function(e) {
				return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this
			}, n.prototype.toEuler = function(e, f) {
				f = f || "YZX";
				var n, o, d, i = this.x,
					t = this.y,
					l = this.z,
					u = this.w;
				switch (f) {
					case "YZX":
						var p = i * t + l * u;
						if (p > .499 && (n = 2 * Math.atan2(i, u), o = Math.PI / 2, d = 0), -.499 > p && (n = -2 * Math.atan2(i, u), o = -Math.PI / 2, d = 0), isNaN(n)) {
							var s = i * i,
								y = t * t,
								c = l * l;
							n = Math.atan2(2 * t * u - 2 * i * l, 1 - 2 * y - 2 * c), o = Math.asin(2 * p), d = Math.atan2(2 * i * u - 2 * t * l, 1 - 2 * s - 2 * c)
						}
						break;
					default:
						throw new Error("Euler order " + f + " not supported yet.")
				}
				e.y = n, e.z = o, e.x = d
			}, n.prototype.setFromEuler = function(e, f, n, o) {
				o = o || "XYZ";
				var d = Math.cos(e / 2),
					i = Math.cos(f / 2),
					t = Math.cos(n / 2),
					l = Math.sin(e / 2),
					u = Math.sin(f / 2),
					p = Math.sin(n / 2);
				return "XYZ" === o ? (this.x = l * i * t + d * u * p, this.y = d * u * t - l * i * p, this.z = d * i * p + l * u * t, this.w = d * i * t - l * u * p) : "YXZ" === o ? (this.x = l * i * t + d * u * p, this.y = d * u * t - l * i * p, this.z = d * i * p - l * u * t, this.w = d * i * t + l * u * p) : "ZXY" === o ? (this.x = l * i * t - d * u * p, this.y = d * u * t + l * i * p, this.z = d * i * p + l * u * t, this.w = d * i * t - l * u * p) : "ZYX" === o ? (this.x = l * i * t - d * u * p, this.y = d * u * t + l * i * p, this.z = d * i * p - l * u * t, this.w = d * i * t + l * u * p) : "YZX" === o ? (this.x = l * i * t + d * u * p, this.y = d * u * t + l * i * p, this.z = d * i * p - l * u * t, this.w = d * i * t - l * u * p) : "XZY" === o && (this.x = l * i * t - d * u * p, this.y = d * u * t - l * i * p, this.z = d * i * p + l * u * t, this.w = d * i * t + l * u * p), this
			}, n.prototype.clone = function() {
				return new n(this.x, this.y, this.z, this.w)
			}
		}, {
			"./Vec3": 30
		}],
		29: [function(e, f) {
			function n(e) {
				e = e || {}, this.position = new o, e.position && this.position.copy(e.position), this.quaternion = new d, e.quaternion && this.quaternion.copy(e.quaternion)
			}
			var o = e("./Vec3"),
				d = e("./Quaternion");
			f.exports = n;
			var i = new d;
			n.pointToLocalFrame = function(e, f, n, d) {
				var d = d || new o;
				return n.vsub(e, d), f.conjugate(i), i.vmult(d, d), d
			}, n.prototype.pointToLocal = function(e, f) {
				return n.pointToLocalFrame(this.position, this.quaternion, e, f)
			}, n.pointToWorldFrame = function(e, f, n, d) {
				var d = d || new o;
				return f.vmult(n, d), d.vadd(e, d), d
			}, n.prototype.pointToWorld = function(e, f) {
				return n.pointToWorldFrame(this.position, this.quaternion, e, f)
			}, n.prototype.vectorToWorldFrame = function(e, f) {
				var f = f || new o;
				return this.quaternion.vmult(e, f), f
			}, n.vectorToWorldFrame = function(e, f, n) {
				return e.vmult(f, n), n
			}, n.vectorToLocalFrame = function(e, f, n, d) {
				var d = d || new o;
				return f.w *= -1, f.vmult(n, d), f.w *= -1, d
			}
		}, {
			"./Quaternion": 28,
			"./Vec3": 30
		}],
		30: [function(e, f) {
			function n(e, f, n) {
				this.x = e || 0, this.y = f || 0, this.z = n || 0
			}
			f.exports = n;
			var o = e("./Mat3");
			n.ZERO = new n(0, 0, 0), n.UNIT_X = new n(1, 0, 0), n.UNIT_Y = new n(0, 1, 0), n.UNIT_Z = new n(0, 0, 1), n.prototype.cross = function(e, f) {
				var o = e.x,
					d = e.y,
					i = e.z,
					t = this.x,
					l = this.y,
					u = this.z;
				return f = f || new n, f.x = l * i - u * d, f.y = u * o - t * i, f.z = t * d - l * o, f
			}, n.prototype.set = function(e, f, n) {
				return this.x = e, this.y = f, this.z = n, this
			}, n.prototype.setZero = function() {
				this.x = this.y = this.z = 0
			}, n.prototype.vadd = function(e, f) {
				return f ? (f.x = e.x + this.x, f.y = e.y + this.y, f.z = e.z + this.z, void 0) : new n(this.x + e.x, this.y + e.y, this.z + e.z)
			}, n.prototype.vsub = function(e, f) {
				return f ? (f.x = this.x - e.x, f.y = this.y - e.y, f.z = this.z - e.z, void 0) : new n(this.x - e.x, this.y - e.y, this.z - e.z)
			}, n.prototype.crossmat = function() {
				return new o([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0])
			}, n.prototype.normalize = function() {
				var e = this.x,
					f = this.y,
					n = this.z,
					o = Math.sqrt(e * e + f * f + n * n);
				if (o > 0) {
					var d = 1 / o;
					this.x *= d, this.y *= d, this.z *= d
				} else this.x = 0, this.y = 0, this.z = 0;
				return o
			}, n.prototype.unit = function(e) {
				e = e || new n;
				var f = this.x,
					o = this.y,
					d = this.z,
					i = Math.sqrt(f * f + o * o + d * d);
				return i > 0 ? (i = 1 / i, e.x = f * i, e.y = o * i, e.z = d * i) : (e.x = 1, e.y = 0, e.z = 0), e
			}, n.prototype.norm = function() {
				var e = this.x,
					f = this.y,
					n = this.z;
				return Math.sqrt(e * e + f * f + n * n)
			}, n.prototype.length = n.prototype.norm, n.prototype.norm2 = function() {
				return this.dot(this)
			}, n.prototype.lengthSquared = n.prototype.norm2, n.prototype.distanceTo = function(e) {
				var f = this.x,
					n = this.y,
					o = this.z,
					d = e.x,
					i = e.y,
					t = e.z;
				return Math.sqrt((d - f) * (d - f) + (i - n) * (i - n) + (t - o) * (t - o))
			}, n.prototype.distanceSquared = function(e) {
				var f = this.x,
					n = this.y,
					o = this.z,
					d = e.x,
					i = e.y,
					t = e.z;
				return (d - f) * (d - f) + (i - n) * (i - n) + (t - o) * (t - o)
			}, n.prototype.mult = function(e, f) {
				f = f || new n;
				var o = this.x,
					d = this.y,
					i = this.z;
				return f.x = e * o, f.y = e * d, f.z = e * i, f
			}, n.prototype.scale = n.prototype.mult, n.prototype.dot = function(e) {
				return this.x * e.x + this.y * e.y + this.z * e.z
			}, n.prototype.isZero = function() {
				return 0 === this.x && 0 === this.y && 0 === this.z
			}, n.prototype.negate = function(e) {
				return e = e || new n, e.x = -this.x, e.y = -this.y, e.z = -this.z, e
			};
			var d = new n,
				i = new n;
			n.prototype.tangents = function(e, f) {
				var n = this.norm();
				if (n > 0) {
					var o = d,
						t = 1 / n;
					o.set(this.x * t, this.y * t, this.z * t);
					var l = i;
					Math.abs(o.x) < .9 ? (l.set(1, 0, 0), o.cross(l, e)) : (l.set(0, 1, 0), o.cross(l, e)), o.cross(e, f)
				} else e.set(1, 0, 0), f.set(0, 1, 0)
			}, n.prototype.toString = function() {
				return this.x + "," + this.y + "," + this.z
			}, n.prototype.toArray = function() {
				return [this.x, this.y, this.z]
			}, n.prototype.copy = function(e) {
				return this.x = e.x, this.y = e.y, this.z = e.z, this
			}, n.prototype.lerp = function(e, f, n) {
				var o = this.x,
					d = this.y,
					i = this.z;
				n.x = o + (e.x - o) * f, n.y = d + (e.y - d) * f, n.z = i + (e.z - i) * f
			}, n.prototype.almostEquals = function(e, f) {
				return void 0 === f && (f = 1e-6), Math.abs(this.x - e.x) > f || Math.abs(this.y - e.y) > f || Math.abs(this.z - e.z) > f ? !1 : !0
			}, n.prototype.almostZero = function(e) {
				return void 0 === e && (e = 1e-6), Math.abs(this.x) > e || Math.abs(this.y) > e || Math.abs(this.z) > e ? !1 : !0
			};
			var t = new n;
			n.prototype.isAntiparallelTo = function(e, f) {
				return this.negate(t), t.almostEquals(e, f)
			}, n.prototype.clone = function() {
				return new n(this.x, this.y, this.z)
			}
		}, {
			"./Mat3": 27
		}],
		31: [function(e, f) {
			function n(e) {
				e = e || {}, o.apply(this), this.id = n.idCounter++, this.world = null, this.preStep = null, this.postStep = null, this.vlambda = new d, this.collisionFilterGroup = "number" == typeof e.collisionFilterGroup ? e.collisionFilterGroup : 1, this.collisionFilterMask = "number" == typeof e.collisionFilterMask ? e.collisionFilterMask : 1, this.collisionResponse = !0, this.position = new d, e.position && this.position.copy(e.position), this.previousPosition = new d, this.initPosition = new d, this.velocity = new d, e.velocity && this.velocity.copy(e.velocity), this.initVelocity = new d, this.force = new d;
				var f = "number" == typeof e.mass ? e.mass : 0;
				this.mass = f, this.invMass = f > 0 ? 1 / f : 0, this.material = e.material || null, this.linearDamping = "number" == typeof e.linearDamping ? e.linearDamping : .01, this.type = 0 >= f ? n.STATIC : n.DYNAMIC, typeof e.type == typeof n.STATIC && (this.type = e.type), this.allowSleep = "undefined" != typeof e.allowSleep ? e.allowSleep : !0, this.sleepState = 0, this.sleepSpeedLimit = "undefined" != typeof e.sleepSpeedLimit ? e.sleepSpeedLimit : .1, this.sleepTimeLimit = "undefined" != typeof e.sleepTimeLimit ? e.sleepTimeLimit : 1, this.timeLastSleepy = 0, this._wakeUpAfterNarrowphase = !1, this.torque = new d, this.quaternion = new t, e.quaternion && this.quaternion.copy(e.quaternion), this.initQuaternion = new t, this.angularVelocity = new d, e.angularVelocity && this.angularVelocity.copy(e.angularVelocity), this.initAngularVelocity = new d, this.interpolatedPosition = new d, this.interpolatedQuaternion = new t, this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new d, this.invInertia = new d, this.invInertiaWorld = new i, this.invMassSolve = 0, this.invInertiaSolve = new d, this.invInertiaWorldSolve = new i, this.fixedRotation = "undefined" != typeof e.fixedRotation ? e.fixedRotation : !1, this.angularDamping = "undefined" != typeof e.angularDamping ? e.angularDamping : .01, this.aabb = new l, this.aabbNeedsUpdate = !0, this.wlambda = new d, e.shape && this.addShape(e.shape), this.updateMassProperties()
			}
			f.exports = n;
			var o = e("../utils/EventTarget"),
				d = (e("../shapes/Shape"), e("../math/Vec3")),
				i = e("../math/Mat3"),
				t = e("../math/Quaternion"),
				l = (e("../material/Material"), e("../collision/AABB")),
				u = e("../shapes/Box");
			n.prototype = new o, n.prototype.constructor = n, n.DYNAMIC = 1, n.STATIC = 2, n.KINEMATIC = 4, n.AWAKE = 0, n.SLEEPY = 1, n.SLEEPING = 2, n.idCounter = 0, n.prototype.wakeUp = function() {
				var e = this.sleepState;
				this.sleepState = 0, e === n.SLEEPING && this.dispatchEvent({
					type: "wakeup"
				})
			}, n.prototype.sleep = function() {
				this.sleepState = n.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0)
			}, n.sleepyEvent = {
				type: "sleepy"
			}, n.sleepEvent = {
				type: "sleep"
			}, n.prototype.sleepTick = function(e) {
				if (this.allowSleep) {
					var f = this.sleepState,
						o = this.velocity.norm2() + this.angularVelocity.norm2(),
						d = Math.pow(this.sleepSpeedLimit, 2);
					f === n.AWAKE && d > o ? (this.sleepState = n.SLEEPY, this.timeLastSleepy = e, this.dispatchEvent(n.sleepyEvent)) : f === n.SLEEPY && o > d ? this.wakeUp() : f === n.SLEEPY && e - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(n.sleepEvent))
				}
			}, n.prototype.updateSolveMassProperties = function() {
				this.sleepState === n.SLEEPING || this.type === n.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld))
			}, n.prototype.pointToLocalFrame = function(e, f) {
				var f = f || new d;
				return e.vsub(this.position, f), this.quaternion.conjugate().vmult(f, f), f
			}, n.prototype.vectorToLocalFrame = function(e, f) {
				var f = f || new d;
				return this.quaternion.conjugate().vmult(e, f), f
			}, n.prototype.pointToWorldFrame = function(e, f) {
				var f = f || new d;
				return this.quaternion.vmult(e, f), f.vadd(this.position, f), f
			}, n.prototype.vectorToWorldFrame = function(e, f) {
				var f = f || new d;
				return this.quaternion.vmult(e, f), f
			};
			var p = new d,
				s = new t;
			n.prototype.addShape = function(e, f, n) {
				var o = new d,
					i = new t;
				return f && o.copy(f), n && i.copy(n), this.shapes.push(e), this.shapeOffsets.push(o), this.shapeOrientations.push(i), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0, this
			}, n.prototype.updateBoundingRadius = function() {
				for (var e = this.shapes, f = this.shapeOffsets, n = e.length, o = 0, d = 0; d !== n; d++) {
					var i = e[d];
					i.updateBoundingSphereRadius();
					var t = f[d].norm(),
						l = i.boundingSphereRadius;
					t + l > o && (o = t + l)
				}
				this.boundingRadius = o
			};
			var y = new l;
			n.prototype.computeAABB = function() {
				for (var e = this.shapes, f = this.shapeOffsets, n = this.shapeOrientations, o = e.length, d = p, i = s, t = this.quaternion, l = this.aabb, u = y, c = 0; c !== o; c++) {
					var a = e[c];
					n[c].mult(t, i), i.vmult(f[c], d), d.vadd(this.position, d), a.calculateWorldAABB(d, i, u.lowerBound, u.upperBound), 0 === c ? l.copy(u) : l.extend(u)
				}
				this.aabbNeedsUpdate = !1
			}; {
				var c = new i,
					a = new i;
				new i
			}
			n.prototype.updateInertiaWorld = function(e) {
				var f = this.invInertia;
				if (f.x !== f.y || f.y !== f.z || e) {
					var n = c,
						o = a;
					n.setRotationFromQuaternion(this.quaternion), n.transpose(o), n.scale(f, n), n.mmult(o, this.invInertiaWorld)
				} else;
			};
			var r = new d,
				w = new d;
			n.prototype.applyForce = function(e, f) {
				if (this.type === n.DYNAMIC) {
					var o = r;
					f.vsub(this.position, o);
					var d = w;
					o.cross(e, d), this.force.vadd(e, this.force), this.torque.vadd(d, this.torque)
				}
			};
			var b = new d,
				m = new d;
			n.prototype.applyLocalForce = function(e, f) {
				if (this.type === n.DYNAMIC) {
					var o = b,
						d = m;
					this.vectorToWorldFrame(e, o), this.pointToWorldFrame(f, d), this.applyForce(o, d)
				}
			};
			var N = new d,
				g = new d,
				x = new d;
			n.prototype.applyImpulse = function(e, f) {
				if (this.type === n.DYNAMIC) {
					var o = N;
					f.vsub(this.position, o);
					var d = g;
					d.copy(e), d.mult(this.invMass, d), this.velocity.vadd(d, this.velocity);
					var i = x;
					o.cross(e, i), this.invInertiaWorld.vmult(i, i), this.angularVelocity.vadd(i, this.angularVelocity)
				}
			};
			var j = new d,
				v = new d;
			n.prototype.applyLocalImpulse = function(e, f) {
				if (this.type === n.DYNAMIC) {
					var o = j,
						d = v;
					this.vectorToWorldFrame(e, o), this.pointToWorldFrame(f, d), this.applyImpulse(o, d)
				}
			};
			var A = new d;
			n.prototype.updateMassProperties = function() {
				var e = A;
				this.invMass = this.mass > 0 ? 1 / this.mass : 0;
				var f = this.inertia,
					n = this.fixedRotation;
				this.computeAABB(), e.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), u.calculateInertia(e, this.mass, f), this.invInertia.set(f.x > 0 && !n ? 1 / f.x : 0, f.y > 0 && !n ? 1 / f.y : 0, f.z > 0 && !n ? 1 / f.z : 0), this.updateInertiaWorld(!0)
			}, n.prototype.getVelocityAtWorldPoint = function(e, f) {
				var n = new d;
				return e.vsub(this.position, n), this.angularVelocity.cross(n, f), this.velocity.vadd(f, f), f
			}
		}, {
			"../collision/AABB": 3,
			"../material/Material": 25,
			"../math/Mat3": 27,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../shapes/Box": 37,
			"../shapes/Shape": 43,
			"../utils/EventTarget": 49
		}],
		32: [function(e, f) {
			function n(e) {
				this.chassisBody = e.chassisBody, this.wheelInfos = [], this.sliding = !1, this.world = null, this.indexRightAxis = "undefined" != typeof e.indexRightAxis ? e.indexRightAxis : 1, this.indexForwardAxis = "undefined" != typeof e.indexForwardAxis ? e.indexForwardAxis : 0, this.indexUpAxis = "undefined" != typeof e.indexUpAxis ? e.indexUpAxis : 2
			}

			function o(e, f, n, o, i) {
				var t = 0,
					l = n,
					u = x,
					p = j,
					s = v;
				e.getVelocityAtWorldPoint(l, u), f.getVelocityAtWorldPoint(l, p), u.vsub(p, s);
				var y = o.dot(s),
					c = d(e, n, o),
					a = d(f, n, o),
					r = 1,
					w = r / (c + a);
				return t = -y * w, t > i && (t = i), -i > t && (t = -i), t
			}

			function d(e, f, n) {
				var o = A,
					d = C,
					i = O,
					t = h;
				return f.vsub(e.position, o), o.cross(n, d), e.invInertiaWorld.vmult(d, t), t.cross(o, i), e.invMass + n.dot(i)
			}

			function i(e, f, n, o, d, i) {
				var t = d.norm2();
				if (t > 1.1) return 0;
				var l = k,
					u = q,
					p = z;
				e.getVelocityAtWorldPoint(f, l), n.getVelocityAtWorldPoint(o, u), l.vsub(u, p);
				var s = d.dot(p),
					y = .2,
					c = 1 / (e.invMass + n.invMass),
					i = -y * s * c;
				return i
			}
			var t = (e("./Body"), e("../math/Vec3")),
				l = e("../math/Quaternion"),
				u = (e("../collision/RaycastResult"), e("../collision/Ray")),
				p = e("../objects/WheelInfo");
			f.exports = n; {
				var s = (new t, new t, new t, new t),
					y = new t,
					c = new t;
				new u
			}
			n.prototype.addWheel = function(e) {
				e = e || {};
				var f = new p(e),
					n = this.wheelInfos.length;
				return this.wheelInfos.push(f), n
			}, n.prototype.setSteeringValue = function(e, f) {
				var n = this.wheelInfos[f];
				n.steering = e
			};
			new t;
			n.prototype.applyEngineForce = function(e, f) {
				this.wheelInfos[f].engineForce = e
			}, n.prototype.setBrake = function(e, f) {
				this.wheelInfos[f].brake = e
			}, n.prototype.addToWorld = function(e) {
				this.constraints;
				e.add(this.chassisBody);
				var f = this;
				this.preStepCallback = function() {
					f.updateVehicle(e.dt)
				}, e.addEventListener("preStep", this.preStepCallback), this.world = e
			}, n.prototype.getVehicleAxisWorld = function(e, f) {
				f.set(0 === e ? 1 : 0, 1 === e ? 1 : 0, 2 === e ? 1 : 0), this.chassisBody.vectorToWorldFrame(f, f)
			}, n.prototype.updateVehicle = function(e) {
				for (var f = this.wheelInfos, n = f.length, o = this.chassisBody, d = 0; n > d; d++) this.updateWheelTransform(d);
				this.currentVehicleSpeedKmHour = 3.6 * o.velocity.norm();
				var i = new t;
				this.getVehicleAxisWorld(this.indexForwardAxis, i), i.dot(o.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
				for (var d = 0; n > d; d++) this.castRay(f[d]);
				this.updateSuspension(e);
				for (var l = new t, u = new t, d = 0; n > d; d++) {
					var p = f[d],
						s = p.suspensionForce;
					s > p.maxSuspensionForce && (s = p.maxSuspensionForce), p.raycastResult.hitNormalWorld.scale(s * e, l), p.raycastResult.hitPointWorld.vsub(o.position, u), o.applyImpulse(l, p.raycastResult.hitPointWorld)
				}
				this.updateFriction(e);
				var y = new t,
					c = new t,
					a = new t;
				for (d = 0; n > d; d++) {
					var p = f[d];
					o.getVelocityAtWorldPoint(p.chassisConnectionPointWorld, a);
					var r = 1;
					switch (this.indexUpAxis) {
						case 1:
							r = -1
					}
					if (p.isInContact) {
						this.getVehicleAxisWorld(this.indexForwardAxis, c);
						var w = c.dot(p.raycastResult.hitNormalWorld);
						p.raycastResult.hitNormalWorld.scale(w, y), c.vsub(y, c);
						var b = c.dot(a);
						p.deltaRotation = r * b * e / p.radius
					}!p.sliding && p.isInContact || 0 === p.engineForce || !p.useCustomSlidingRotationalSpeed || (p.deltaRotation = (p.engineForce > 0 ? 1 : -1) * p.customSlidingRotationalSpeed * e), Math.abs(p.brake) > Math.abs(p.engineForce) && (p.deltaRotation = 0), p.rotation += p.deltaRotation, p.deltaRotation *= .99
				}
			}, n.prototype.updateSuspension = function() {
				for (var e = this.chassisBody, f = e.mass, n = this.wheelInfos, o = n.length, d = 0; o > d; d++) {
					var i = n[d];
					if (i.isInContact) {
						var t, l = i.suspensionRestLength,
							u = i.suspensionLength,
							p = l - u;
						t = i.suspensionStiffness * p * i.clippedInvContactDotSuspension;
						var s, y = i.suspensionRelativeVelocity;
						s = 0 > y ? i.dampingCompression : i.dampingRelaxation, t -= s * y, i.suspensionForce = t * f, i.suspensionForce < 0 && (i.suspensionForce = 0)
					} else i.suspensionForce = 0
				}
			}, n.prototype.removeFromWorld = function(e) {
				this.constraints;
				e.remove(this.chassisBody), e.removeEventListener("preStep", this.preStepCallback), this.world = null
			};
			var a = new t,
				r = new t;
			n.prototype.castRay = function(e) {
				var f = a,
					n = r;
				this.updateWheelTransformWorld(e);
				var o = this.chassisBody,
					d = -1,
					i = e.suspensionRestLength + e.radius;
				e.directionWorld.scale(i, f);
				var l = e.chassisConnectionPointWorld;
				l.vadd(f, n);
				var u = e.raycastResult;
				u.reset();
				var p = o.collisionResponse;
				o.collisionResponse = !1, this.world.rayTest(l, n, u), o.collisionResponse = p;
				var s = u.body;
				if (e.raycastResult.groundObject = 0, s) {
					d = u.distance, e.raycastResult.hitNormalWorld = u.hitNormalWorld, e.isInContact = !0;
					var y = u.distance;
					e.suspensionLength = y - e.radius;
					var c = e.suspensionRestLength - e.maxSuspensionTravel,
						w = e.suspensionRestLength + e.maxSuspensionTravel;
					e.suspensionLength < c && (e.suspensionLength = c), e.suspensionLength > w && (e.suspensionLength = w, e.raycastResult.reset());
					var b = e.raycastResult.hitNormalWorld.dot(e.directionWorld),
						m = new t;
					o.getVelocityAtWorldPoint(e.raycastResult.hitPointWorld, m);
					var N = e.raycastResult.hitNormalWorld.dot(m);
					if (b >= -.1) e.suspensionRelativeVelocity = 0, e.clippedInvContactDotSuspension = 10;
					else {
						var g = -1 / b;
						e.suspensionRelativeVelocity = N * g, e.clippedInvContactDotSuspension = g
					}
				} else e.suspensionLength = e.suspensionRestLength + 0 * e.maxSuspensionTravel, e.suspensionRelativeVelocity = 0, e.directionWorld.scale(-1, e.raycastResult.hitNormalWorld), e.clippedInvContactDotSuspension = 1;
				return d
			}, n.prototype.updateWheelTransformWorld = function(e) {
				e.isInContact = !1;
				var f = this.chassisBody;
				f.pointToWorldFrame(e.chassisConnectionPointLocal, e.chassisConnectionPointWorld), f.vectorToWorldFrame(e.directionLocal, e.directionWorld), f.vectorToWorldFrame(e.axleLocal, e.axleWorld)
			}, n.prototype.updateWheelTransform = function(e) {
				var f = s,
					n = y,
					o = c,
					d = this.wheelInfos[e];
				this.updateWheelTransformWorld(d), d.directionLocal.scale(-1, f), n.copy(d.axleLocal), f.cross(n, o), o.normalize(), n.normalize();
				var i = d.steering,
					t = new l;
				t.setFromAxisAngle(f, i);
				var u = new l;
				u.setFromAxisAngle(n, d.rotation);
				var p = d.worldTransform.quaternion;
				this.chassisBody.quaternion.mult(t, p), p.mult(u, p), p.normalize();
				var a = d.worldTransform.position;
				a.copy(d.directionWorld), a.scale(d.suspensionLength, a), a.vadd(d.chassisConnectionPointWorld, a)
			};
			var w = [new t(1, 0, 0), new t(0, 1, 0), new t(0, 0, 1)];
			n.prototype.getWheelTransformWorld = function(e) {
				return this.wheelInfos[e].worldTransform
			};
			var b = new t,
				m = [],
				N = [],
				g = 1;
			n.prototype.updateFriction = function(e) {
				for (var f = b, n = this.wheelInfos, d = n.length, l = this.chassisBody, u = N, p = m, s = 0, y = 0; d > y; y++) {
					var c = n[y],
						a = c.raycastResult.body;
					a && s++, c.sideImpulse = 0, c.forwardImpulse = 0, u[y] || (u[y] = new t), p[y] || (p[y] = new t)
				}
				for (var y = 0; d > y; y++) {
					var c = n[y],
						a = c.raycastResult.body;
					if (a) {
						var r = p[y],
							x = this.getWheelTransformWorld(y);
						x.vectorToWorldFrame(w[this.indexRightAxis], r);
						var j = c.raycastResult.hitNormalWorld,
							v = r.dot(j);
						j.scale(v, f), r.vsub(f, r), r.normalize(), j.cross(r, u[y]), u[y].normalize(), c.sideImpulse = i(l, c.raycastResult.hitPointWorld, a, c.raycastResult.hitPointWorld, r), c.sideImpulse *= g
					}
				}
				var A = 1,
					C = .5;
				this.sliding = !1;
				for (var y = 0; d > y; y++) {
					var c = n[y],
						a = c.raycastResult.body,
						O = 0;
					if (c.slipInfo = 1, a) {
						var h = 0,
							k = c.brake ? c.brake : h;
						O = o(l, a, c.raycastResult.hitPointWorld, u[y], k), O += c.engineForce * e;
						var q = k / O;
						c.slipInfo *= q
					}
					if (c.forwardImpulse = 0, c.skidInfo = 1, a) {
						c.skidInfo = 1;
						var z = c.suspensionForce * e * c.frictionSlip,
							B = z,
							D = z * B;
						c.forwardImpulse = O;
						var E = c.forwardImpulse * C,
							F = c.sideImpulse * A,
							G = E * E + F * F;
						if (c.sliding = !1, G > D) {
							this.sliding = !0, c.sliding = !0;
							var q = z / Math.sqrt(G);
							c.skidInfo *= q
						}
					}
				}
				if (this.sliding)
					for (var y = 0; d > y; y++) {
						var c = n[y];
						0 !== c.sideImpulse && c.skidInfo < 1 && (c.forwardImpulse *= c.skidInfo, c.sideImpulse *= c.skidInfo)
					}
				for (var y = 0; d > y; y++) {
					var c = n[y],
						H = new t;
					if (H.copy(c.raycastResult.hitPointWorld), 0 !== c.forwardImpulse) {
						var I = new t;
						u[y].scale(c.forwardImpulse, I), l.applyImpulse(I, H)
					}
					if (0 !== c.sideImpulse) {
						var a = c.raycastResult.body,
							J = new t;
						J.copy(c.raycastResult.hitPointWorld);
						var K = new t;
						p[y].scale(c.sideImpulse, K), l.pointToLocalFrame(H, H), H["xyz" [this.indexUpAxis]] *= c.rollInfluence, l.pointToWorldFrame(H, H), l.applyImpulse(K, H), K.scale(-1, K), a.applyImpulse(K, J)
					}
				}
			};
			var x = new t,
				j = new t,
				v = new t,
				A = new t,
				C = new t,
				O = new t,
				h = new t,
				k = new t,
				q = new t,
				z = new t
		}, {
			"../collision/Ray": 9,
			"../collision/RaycastResult": 10,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/WheelInfo": 36,
			"./Body": 31
		}],
		33: [function(e, f) {
			function n(e) {
				if (this.wheelBodies = [], this.coordinateSystem = "undefined" == typeof e.coordinateSystem ? new t(1, 2, 3) : e.coordinateSystem.clone(), this.chassisBody = e.chassisBody, !this.chassisBody) {
					var f = new i(new t(5, 2, .5));
					this.chassisBody = new o(1, f)
				}
				this.constraints = [], this.wheelAxes = [], this.wheelForces = []
			}
			var o = e("./Body"),
				d = e("../shapes/Sphere"),
				i = e("../shapes/Box"),
				t = e("../math/Vec3"),
				l = e("../constraints/HingeConstraint");
			f.exports = n, n.prototype.addWheel = function(e) {
				e = e || {};
				var f = e.body;
				f || (f = new o(1, new d(1.2))), this.wheelBodies.push(f), this.wheelForces.push(0);
				var n = (new t, "undefined" != typeof e.position ? e.position.clone() : new t),
					i = new t;
				this.chassisBody.pointToWorldFrame(n, i), f.position.set(i.x, i.y, i.z);
				var u = "undefined" != typeof e.axis ? e.axis.clone() : new t(0, 1, 0);
				this.wheelAxes.push(u);
				var p = new l(this.chassisBody, f, {
					pivotA: n,
					axisA: u,
					pivotB: t.ZERO,
					axisB: u,
					collideConnected: !1
				});
				return this.constraints.push(p), this.wheelBodies.length - 1
			}, n.prototype.setSteeringValue = function(e, f) {
				var n = this.wheelAxes[f],
					o = Math.cos(e),
					d = Math.sin(e),
					i = n.x,
					t = n.y;
				this.constraints[f].axisA.set(o * i - d * t, d * i + o * t, 0)
			}, n.prototype.setMotorSpeed = function(e, f) {
				var n = this.constraints[f];
				n.enableMotor(), n.motorTargetVelocity = e
			}, n.prototype.disableMotor = function(e) {
				var f = this.constraints[e];
				f.disableMotor()
			};
			var u = new t;
			n.prototype.setWheelForce = function(e, f) {
				this.wheelForces[f] = e
			}, n.prototype.applyWheelForce = function(e, f) {
				var n = this.wheelAxes[f],
					o = this.wheelBodies[f],
					d = o.torque;
				n.scale(e, u), o.vectorToWorldFrame(u, u), d.vadd(u, d)
			}, n.prototype.addToWorld = function(e) {
				for (var f = this.constraints, n = this.wheelBodies.concat([this.chassisBody]), o = 0; o < n.length; o++) e.add(n[o]);
				for (var o = 0; o < f.length; o++) e.addConstraint(f[o]);
				e.addEventListener("preStep", this._update.bind(this))
			}, n.prototype._update = function() {
				for (var e = this.wheelForces, f = 0; f < e.length; f++) this.applyWheelForce(e[f], f)
			}, n.prototype.removeFromWorld = function(e) {
				for (var f = this.constraints, n = this.wheelBodies.concat([this.chassisBody]), o = 0; o < n.length; o++) e.remove(n[o]);
				for (var o = 0; o < f.length; o++) e.removeConstraint(f[o])
			};
			var p = new t;
			n.prototype.getWheelSpeed = function(e) {
				var f = this.wheelAxes[e],
					n = this.wheelBodies[e],
					o = n.angularVelocity;
				return this.chassisBody.vectorToWorldFrame(f, p), o.dot(p)
			}
		}, {
			"../constraints/HingeConstraint": 15,
			"../math/Vec3": 30,
			"../shapes/Box": 37,
			"../shapes/Sphere": 44,
			"./Body": 31
		}],
		34: [function(e, f) {
			function n() {
				this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [], this.neighbors = []
			}
			f.exports = n; {
				var o = (e("../shapes/Shape"), e("../math/Vec3"));
				e("../math/Quaternion"), e("../shapes/Particle"), e("../objects/Body"), e("../material/Material")
			}
			n.prototype.add = function(e) {
				this.particles.push(e), this.neighbors.length < this.particles.length && this.neighbors.push([])
			}, n.prototype.remove = function(e) {
				var f = this.particles.indexOf(e); - 1 !== f && (this.particles.splice(f, 1), this.neighbors.length > this.particles.length && this.neighbors.pop())
			};
			var d = new o;
			n.prototype.getNeighbors = function(e, f) {
				for (var n = this.particles.length, o = e.id, i = this.smoothingRadius * this.smoothingRadius, t = d, l = 0; l !== n; l++) {
					var u = this.particles[l];
					u.position.vsub(e.position, t), o !== u.id && t.norm2() < i && f.push(u)
				}
			};
			var i = new o,
				t = new o,
				l = new o,
				u = new o,
				p = new o,
				s = new o;
			n.prototype.update = function() {
				for (var e = this.particles.length, f = i, n = this.speedOfSound, o = this.eps, d = 0; d !== e; d++) {
					var y = this.particles[d],
						c = this.neighbors[d];
					c.length = 0, this.getNeighbors(y, c), c.push(this.particles[d]);
					for (var a = c.length, r = 0, w = 0; w !== a; w++) {
						y.position.vsub(c[w].position, f);
						var b = f.norm(),
							m = this.w(b);
						r += c[w].mass * m
					}
					this.densities[d] = r, this.pressures[d] = n * n * (this.densities[d] - this.density)
				}
				for (var N = t, g = l, x = u, j = p, v = s, d = 0; d !== e; d++) {
					var A = this.particles[d];
					N.set(0, 0, 0), g.set(0, 0, 0);
					for (var C, O, c = this.neighbors[d], a = c.length, w = 0; w !== a; w++) {
						var h = c[w];
						A.position.vsub(h.position, j);
						var k = j.norm();
						C = -h.mass * (this.pressures[d] / (this.densities[d] * this.densities[d] + o) + this.pressures[w] / (this.densities[w] * this.densities[w] + o)), this.gradw(j, x), x.mult(C, x), N.vadd(x, N), h.velocity.vsub(A.velocity, v), v.mult(1 / (1e-4 + this.densities[d] * this.densities[w]) * this.viscosity * h.mass, v), O = this.nablaw(k), v.mult(O, v), g.vadd(v, g)
					}
					g.mult(A.mass, g), N.mult(A.mass, N), A.force.vadd(g, A.force), A.force.vadd(N, A.force)
				}
			}, n.prototype.w = function(e) {
				var f = this.smoothingRadius;
				return 315 / (64 * Math.PI * Math.pow(f, 9)) * Math.pow(f * f - e * e, 3)
			}, n.prototype.gradw = function(e, f) {
				var n = e.norm(),
					o = this.smoothingRadius;
				e.mult(945 / (32 * Math.PI * Math.pow(o, 9)) * Math.pow(o * o - n * n, 2), f)
			}, n.prototype.nablaw = function(e) {
				var f = this.smoothingRadius,
					n = 945 / (32 * Math.PI * Math.pow(f, 9)) * (f * f - e * e) * (7 * e * e - 3 * f * f);
				return n
			}
		}, {
			"../material/Material": 25,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/Body": 31,
			"../shapes/Particle": 41,
			"../shapes/Shape": 43
		}],
		35: [function(e, f) {
			function n(e, f, n) {
				n = n || {}, this.restLength = "number" == typeof n.restLength ? n.restLength : 1, this.stiffness = n.stiffness || 100, this.damping = n.damping || 1, this.bodyA = e, this.bodyB = f, this.localAnchorA = new o, this.localAnchorB = new o, n.localAnchorA && this.localAnchorA.copy(n.localAnchorA), n.localAnchorB && this.localAnchorB.copy(n.localAnchorB), n.worldAnchorA && this.setWorldAnchorA(n.worldAnchorA), n.worldAnchorB && this.setWorldAnchorB(n.worldAnchorB)
			}
			var o = e("../math/Vec3");
			f.exports = n, n.prototype.setWorldAnchorA = function(e) {
				this.bodyA.pointToLocalFrame(e, this.localAnchorA)
			}, n.prototype.setWorldAnchorB = function(e) {
				this.bodyB.pointToLocalFrame(e, this.localAnchorB)
			}, n.prototype.getWorldAnchorA = function(e) {
				this.bodyA.pointToWorldFrame(this.localAnchorA, e)
			}, n.prototype.getWorldAnchorB = function(e) {
				this.bodyB.pointToWorldFrame(this.localAnchorB, e)
			};
			var d = new o,
				i = new o,
				t = new o,
				l = new o,
				u = new o,
				p = new o,
				s = new o,
				y = new o,
				c = new o,
				a = new o,
				r = new o;
			n.prototype.applyForce = function() {
				var e = this.stiffness,
					f = this.damping,
					n = this.restLength,
					o = this.bodyA,
					w = this.bodyB,
					b = d,
					m = i,
					N = t,
					g = l,
					x = r,
					j = u,
					v = p,
					A = s,
					C = y,
					O = c,
					h = a;
				this.getWorldAnchorA(j), this.getWorldAnchorB(v), j.vsub(o.position, A), v.vsub(w.position, C), v.vsub(j, b);
				var k = b.norm();
				m.copy(b), m.normalize(), w.velocity.vsub(o.velocity, N), w.angularVelocity.cross(C, x), N.vadd(x, N), o.angularVelocity.cross(A, x), N.vsub(x, N), m.mult(-e * (k - n) - f * N.dot(m), g), o.force.vsub(g, o.force), w.force.vadd(g, w.force), A.cross(g, O), C.cross(g, h), o.torque.vsub(O, o.torque), w.torque.vadd(h, w.torque)
			}
		}, {
			"../math/Vec3": 30
		}],
		36: [function(e, f) {
			function n(e) {
				e = t.defaults(e, {
					chassisConnectionPointLocal: new o,
					chassisConnectionPointWorld: new o,
					directionLocal: new o,
					directionWorld: new o,
					axleLocal: new o,
					axleWorld: new o,
					suspensionRestLength: 1,
					suspensionMaxLength: 2,
					radius: 1,
					suspensionStiffness: 100,
					dampingCompression: 10,
					dampingRelaxation: 10,
					frictionSlip: 1e4,
					steering: 0,
					rotation: 0,
					deltaRotation: 0,
					rollInfluence: .01,
					maxSuspensionForce: Number.MAX_VALUE,
					isFrontWheel: !0,
					clippedInvContactDotSuspension: 1,
					suspensionRelativeVelocity: 0,
					suspensionForce: 0,
					skidInfo: 0,
					suspensionLength: 0,
					maxSuspensionTravel: 1,
					useCustomSlidingRotationalSpeed: !1,
					customSlidingRotationalSpeed: -.1
				}), this.maxSuspensionTravel = e.maxSuspensionTravel, this.customSlidingRotationalSpeed = e.customSlidingRotationalSpeed, this.useCustomSlidingRotationalSpeed = e.useCustomSlidingRotationalSpeed, this.sliding = !1, this.chassisConnectionPointLocal = e.chassisConnectionPointLocal.clone(), this.chassisConnectionPointWorld = e.chassisConnectionPointWorld.clone(), this.directionLocal = e.directionLocal.clone(), this.directionWorld = e.directionWorld.clone(), this.axleLocal = e.axleLocal.clone(), this.axleWorld = e.axleWorld.clone(), this.suspensionRestLength = e.suspensionRestLength, this.suspensionMaxLength = e.suspensionMaxLength, this.radius = e.radius, this.suspensionStiffness = e.suspensionStiffness, this.dampingCompression = e.dampingCompression, this.dampingRelaxation = e.dampingRelaxation, this.frictionSlip = e.frictionSlip, this.steering = 0, this.rotation = 0, this.deltaRotation = 0, this.rollInfluence = e.rollInfluence, this.maxSuspensionForce = e.maxSuspensionForce, this.engineForce = 0, this.brake = 0, this.isFrontWheel = e.isFrontWheel, this.clippedInvContactDotSuspension = 1, this.suspensionRelativeVelocity = 0, this.suspensionForce = 0, this.skidInfo = 0, this.suspensionLength = 0, this.sideImpulse = 0, this.forwardImpulse = 0, this.raycastResult = new i, this.worldTransform = new d, this.isInContact = !1
			}
			var o = e("../math/Vec3"),
				d = e("../math/Transform"),
				i = e("../collision/RaycastResult"),
				t = e("../utils/Utils");
			f.exports = n;
			var l = new o,
				u = new o,
				l = new o;
			n.prototype.updateWheel = function(e) {
				var f = this.raycastResult;
				if (this.isInContact) {
					var n = f.hitNormalWorld.dot(f.directionWorld);
					f.hitPointWorld.vsub(e.position, u), e.getVelocityAtWorldPoint(u, l);
					var o = f.hitNormalWorld.dot(l);
					if (n >= -.1) this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10;
					else {
						var d = -1 / n;
						this.suspensionRelativeVelocity = o * d, this.clippedInvContactDotSuspension = d
					}
				} else f.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0, f.directionWorld.scale(-1, f.hitNormalWorld), this.clippedInvContactDotSuspension = 1
			}
		}, {
			"../collision/RaycastResult": 10,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"../utils/Utils": 53
		}],
		37: [function(e, f) {
			function n(e) {
				o.call(this), this.type = o.types.BOX, this.halfExtents = e, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius()
			}
			f.exports = n;
			var o = e("./Shape"),
				d = e("../math/Vec3"),
				i = e("./ConvexPolyhedron");
			n.prototype = new o, n.prototype.constructor = n, n.prototype.updateConvexPolyhedronRepresentation = function() {
				var e = this.halfExtents.x,
					f = this.halfExtents.y,
					n = this.halfExtents.z,
					o = d,
					t = [new o(-e, -f, -n), new o(e, -f, -n), new o(e, f, -n), new o(-e, f, -n), new o(-e, -f, n), new o(e, -f, n), new o(e, f, n), new o(-e, f, n)],
					l = [
						[3, 2, 1, 0],
						[4, 5, 6, 7],
						[5, 4, 0, 1],
						[2, 3, 7, 6],
						[0, 4, 7, 3],
						[1, 2, 6, 5]
					],
					u = ([new o(0, 0, 1), new o(0, 1, 0), new o(1, 0, 0)], new i(t, l));
				this.convexPolyhedronRepresentation = u, u.material = this.material
			}, n.prototype.calculateLocalInertia = function(e, f) {
				return f = f || new d, n.calculateInertia(this.halfExtents, e, f), f
			}, n.calculateInertia = function(e, f, n) {
				var o = e;
				n.x = 1 / 12 * f * (2 * o.y * 2 * o.y + 2 * o.z * 2 * o.z), n.y = 1 / 12 * f * (2 * o.x * 2 * o.x + 2 * o.z * 2 * o.z), n.z = 1 / 12 * f * (2 * o.y * 2 * o.y + 2 * o.x * 2 * o.x)
			}, n.prototype.getSideNormals = function(e, f) {
				var n = e,
					o = this.halfExtents;
				if (n[0].set(o.x, 0, 0), n[1].set(0, o.y, 0), n[2].set(0, 0, o.z), n[3].set(-o.x, 0, 0), n[4].set(0, -o.y, 0), n[5].set(0, 0, -o.z), void 0 !== f)
					for (var d = 0; d !== n.length; d++) f.vmult(n[d], n[d]);
				return n
			}, n.prototype.volume = function() {
				return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
			}, n.prototype.updateBoundingSphereRadius = function() {
				this.boundingSphereRadius = this.halfExtents.norm()
			}; {
				var t = new d;
				new d
			}
			n.prototype.forEachWorldCorner = function(e, f, n) {
				for (var o = this.halfExtents, d = [
						[o.x, o.y, o.z],
						[-o.x, o.y, o.z],
						[-o.x, -o.y, o.z],
						[-o.x, -o.y, -o.z],
						[o.x, -o.y, -o.z],
						[o.x, o.y, -o.z],
						[-o.x, o.y, -o.z],
						[o.x, -o.y, o.z]
					], i = 0; i < d.length; i++) t.set(d[i][0], d[i][1], d[i][2]), f.vmult(t, t), e.vadd(t, t), n(t.x, t.y, t.z)
			};
			var l = [new d, new d, new d, new d, new d, new d, new d, new d];
			n.prototype.calculateWorldAABB = function(e, f, n, o) {
				var d = this.halfExtents;
				l[0].set(d.x, d.y, d.z), l[1].set(-d.x, d.y, d.z), l[2].set(-d.x, -d.y, d.z), l[3].set(-d.x, -d.y, -d.z), l[4].set(d.x, -d.y, -d.z), l[5].set(d.x, d.y, -d.z), l[6].set(-d.x, d.y, -d.z), l[7].set(d.x, -d.y, d.z);
				var i = l[0];
				f.vmult(i, i), e.vadd(i, i), o.copy(i), n.copy(i);
				for (var t = 1; 8 > t; t++) {
					var i = l[t];
					f.vmult(i, i), e.vadd(i, i);
					var u = i.x,
						p = i.y,
						s = i.z;
					u > o.x && (o.x = u), p > o.y && (o.y = p), s > o.z && (o.z = s), u < n.x && (n.x = u), p < n.y && (n.y = p), s < n.z && (n.z = s)
				}
			}
		}, {
			"../math/Vec3": 30,
			"./ConvexPolyhedron": 38,
			"./Shape": 43
		}],
		38: [function(e, f) {
			function n(e, f, n) {
				o.call(this), this.type = o.types.CONVEXPOLYHEDRON, this.vertices = e || [], this.worldVertices = [], this.worldVerticesNeedsUpdate = !0, this.faces = f || [], this.faceNormals = [], this.computeNormals(), this.worldFaceNormalsNeedsUpdate = !0, this.worldFaceNormals = [], this.uniqueEdges = [], this.uniqueAxes = n ? n.slice() : null, this.computeEdges(), this.updateBoundingSphereRadius()
			}
			f.exports = n;
			var o = e("./Shape"),
				d = e("../math/Vec3"),
				i = (e("../math/Quaternion"), e("../math/Transform"));
			n.prototype = new o, n.prototype.constructor = n;
			var t = new d;
			n.prototype.computeEdges = function() {
				var e = this.faces,
					f = this.vertices,
					n = (f.length, this.uniqueEdges);
				n.length = 0;
				for (var o = t, d = 0; d !== e.length; d++)
					for (var i = e[d], l = i.length, u = 0; u !== l; u++) {
						var p = (u + 1) % l;
						f[i[u]].vsub(f[i[p]], o), o.normalize();
						for (var s = !1, y = 0; y !== n.length; y++)
							if (n[y].almostEquals(o) || n[y].almostEquals(o)) {
								s = !0;
								break
							}
						s || n.push(o.clone())
					}
			}, n.prototype.computeNormals = function() {
				this.faceNormals.length = this.faces.length;
				for (var e = 0; e < this.faces.length; e++) {
					for (var f = 0; f < this.faces[e].length; f++)
						if (!this.vertices[this.faces[e][f]]) throw new Error("Vertex " + this.faces[e][f] + " not found!");
					var n = this.faceNormals[e] || new d;
					this.getFaceNormal(e, n), n.negate(n), this.faceNormals[e] = n;
					var o = this.vertices[this.faces[e][0]];
					if (n.dot(o) < 0) {
						console.error(".faceNormals[" + e + "] = Vec3(" + n.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
						for (var f = 0; f < this.faces[e].length; f++) console.warn(".vertices[" + this.faces[e][f] + "] = Vec3(" + this.vertices[this.faces[e][f]].toString() + ")")
					}
				}
			};
			var l = new d,
				u = new d;
			n.computeNormal = function(e, f, n, o) {
				f.vsub(e, u), n.vsub(f, l), l.cross(u, o), o.isZero() || o.normalize()
			}, n.prototype.getFaceNormal = function(e, f) {
				var o = this.faces[e],
					d = this.vertices[o[0]],
					i = this.vertices[o[1]],
					t = this.vertices[o[2]];
				return n.computeNormal(d, i, t, f)
			};
			var p = new d;
			n.prototype.clipAgainstHull = function(e, f, n, o, i, t, l, u, s) {
				for (var y = p, c = -1, a = -Number.MAX_VALUE, r = 0; r < n.faces.length; r++) {
					y.copy(n.faceNormals[r]), i.vmult(y, y);
					var w = y.dot(t);
					w > a && (a = w, c = r)
				}
				for (var b = [], m = n.faces[c], N = m.length, g = 0; N > g; g++) {
					var x = n.vertices[m[g]],
						j = new d;
					j.copy(x), i.vmult(j, j), o.vadd(j, j), b.push(j)
				}
				c >= 0 && this.clipFaceAgainstHull(t, e, f, b, l, u, s)
			};
			var s = new d,
				y = new d,
				c = new d,
				a = new d,
				r = new d,
				w = new d;
			n.prototype.findSeparatingAxis = function(e, f, n, o, d, i, t, l) {
				var u = s,
					p = y,
					b = c,
					m = a,
					N = r,
					g = w,
					x = Number.MAX_VALUE,
					j = this,
					v = 0;
				if (j.uniqueAxes)
					for (var A = 0; A !== j.uniqueAxes.length; A++) {
						n.vmult(j.uniqueAxes[A], u);
						var C = j.testSepAxis(u, e, f, n, o, d);
						if (C === !1) return !1;
						x > C && (x = C, i.copy(u))
					} else
						for (var O = t ? t.length : j.faces.length, A = 0; O > A; A++) {
							var h = t ? t[A] : A;
							u.copy(j.faceNormals[h]), n.vmult(u, u);
							var C = j.testSepAxis(u, e, f, n, o, d);
							if (C === !1) return !1;
							x > C && (x = C, i.copy(u))
						}
				if (e.uniqueAxes)
					for (var A = 0; A !== e.uniqueAxes.length; A++) {
						d.vmult(e.uniqueAxes[A], p), v++;
						var C = j.testSepAxis(p, e, f, n, o, d);
						if (C === !1) return !1;
						x > C && (x = C, i.copy(p))
					} else
						for (var k = l ? l.length : e.faces.length, A = 0; k > A; A++) {
							var h = l ? l[A] : A;
							p.copy(e.faceNormals[h]), d.vmult(p, p), v++;
							var C = j.testSepAxis(p, e, f, n, o, d);
							if (C === !1) return !1;
							x > C && (x = C, i.copy(p))
						}
				for (var q = 0; q !== j.uniqueEdges.length; q++) {
					n.vmult(j.uniqueEdges[q], m);
					for (var z = 0; z !== e.uniqueEdges.length; z++)
						if (d.vmult(e.uniqueEdges[z], N), m.cross(N, g), !g.almostZero()) {
							g.normalize();
							var B = j.testSepAxis(g, e, f, n, o, d);
							if (B === !1) return !1;
							x > B && (x = B, i.copy(g))
						}
				}
				return o.vsub(f, b), b.dot(i) > 0 && i.negate(i), !0
			};
			var b = [],
				m = [];
			n.prototype.testSepAxis = function(e, f, o, d, i, t) {
				var l = this;
				n.project(l, e, o, d, b), n.project(f, e, i, t, m);
				var u = b[0],
					p = b[1],
					s = m[0],
					y = m[1];
				if (y > u || p > s) return !1;
				var c = u - y,
					a = s - p,
					r = a > c ? c : a;
				return r
			};
			var N = new d,
				g = new d;
			n.prototype.calculateLocalInertia = function(e, f) {
				this.computeLocalAABB(N, g);
				var n = g.x - N.x,
					o = g.y - N.y,
					d = g.z - N.z;
				f.x = 1 / 12 * e * (2 * o * 2 * o + 2 * d * 2 * d), f.y = 1 / 12 * e * (2 * n * 2 * n + 2 * d * 2 * d), f.z = 1 / 12 * e * (2 * o * 2 * o + 2 * n * 2 * n)
			}, n.prototype.getPlaneConstantOfFace = function(e) {
				var f = this.faces[e],
					n = this.faceNormals[e],
					o = this.vertices[f[0]],
					d = -n.dot(o);
				return d
			};
			var x = new d,
				j = new d,
				v = new d,
				A = new d,
				C = new d,
				O = new d,
				h = new d,
				k = new d;
			n.prototype.clipFaceAgainstHull = function(e, f, n, o, d, i, t) {
				for (var l = x, u = j, p = v, s = A, y = C, c = O, a = h, r = k, w = this, b = [], m = o, N = b, g = -1, q = Number.MAX_VALUE, z = 0; z < w.faces.length; z++) {
					l.copy(w.faceNormals[z]), n.vmult(l, l);
					var B = l.dot(e);
					q > B && (q = B, g = z)
				}
				if (!(0 > g)) {
					var D = w.faces[g];
					D.connectedFaces = [];
					for (var E = 0; E < w.faces.length; E++)
						for (var F = 0; F < w.faces[E].length; F++) - 1 !== D.indexOf(w.faces[E][F]) && E !== g && -1 === D.connectedFaces.indexOf(E) && D.connectedFaces.push(E);
					for (var G = (m.length, D.length), H = 0; G > H; H++) {
						var I = w.vertices[D[H]],
							J = w.vertices[D[(H + 1) % G]];
						I.vsub(J, u), p.copy(u), n.vmult(p, p), f.vadd(p, p), s.copy(this.faceNormals[g]), n.vmult(s, s), f.vadd(s, s), p.cross(s, y), y.negate(y), c.copy(I), n.vmult(c, c), f.vadd(c, c);
						var K, L = (-c.dot(y), D.connectedFaces[H]);
						a.copy(this.faceNormals[L]);
						var M = this.getPlaneConstantOfFace(L);
						r.copy(a), n.vmult(r, r);
						var K = M - r.dot(f);
						for (this.clipFaceAgainstPlane(m, N, r, K); m.length;) m.shift();
						for (; N.length;) m.push(N.shift())
					}
					a.copy(this.faceNormals[g]);
					var M = this.getPlaneConstantOfFace(g);
					r.copy(a), n.vmult(r, r);
					for (var K = M - r.dot(f), E = 0; E < m.length; E++) {
						var P = r.dot(m[E]) + K;
						if (d >= P && (console.log("clamped: depth=" + P + " to minDist=" + (d + "")), P = d), i >= P) {
							var Q = m[E];
							if (0 >= P) {
								var R = {
									point: Q,
									normal: r,
									depth: P
								};
								t.push(R)
							}
						}
					}
				}
			}, n.prototype.clipFaceAgainstPlane = function(e, f, n, o) {
				var i, t, l = e.length;
				if (2 > l) return f;
				var u = e[e.length - 1],
					p = e[0];
				i = n.dot(u) + o;
				for (var s = 0; l > s; s++) {
					if (p = e[s], t = n.dot(p) + o, 0 > i)
						if (0 > t) {
							var y = new d;
							y.copy(p), f.push(y)
						} else {
							var y = new d;
							u.lerp(p, i / (i - t), y), f.push(y)
						} else if (0 > t) {
						var y = new d;
						u.lerp(p, i / (i - t), y), f.push(y), f.push(p)
					}
					u = p, i = t
				}
				return f
			}, n.prototype.computeWorldVertices = function(e, f) {
				for (var n = this.vertices.length; this.worldVertices.length < n;) this.worldVertices.push(new d);
				for (var o = this.vertices, i = this.worldVertices, t = 0; t !== n; t++) f.vmult(o[t], i[t]), e.vadd(i[t], i[t]);
				this.worldVerticesNeedsUpdate = !1
			};
			new d;
			n.prototype.computeLocalAABB = function(e, f) {
				var n = this.vertices.length,
					o = this.vertices;
				e.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), f.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
				for (var d = 0; n > d; d++) {
					var i = o[d];
					i.x < e.x ? e.x = i.x : i.x > f.x && (f.x = i.x), i.y < e.y ? e.y = i.y : i.y > f.y && (f.y = i.y), i.z < e.z ? e.z = i.z : i.z > f.z && (f.z = i.z)
				}
			}, n.prototype.computeWorldFaceNormals = function(e) {
				for (var f = this.faceNormals.length; this.worldFaceNormals.length < f;) this.worldFaceNormals.push(new d);
				for (var n = this.faceNormals, o = this.worldFaceNormals, i = 0; i !== f; i++) e.vmult(n[i], o[i]);
				this.worldFaceNormalsNeedsUpdate = !1
			}, n.prototype.updateBoundingSphereRadius = function() {
				for (var e = 0, f = this.vertices, n = 0, o = f.length; n !== o; n++) {
					var d = f[n].norm2();
					d > e && (e = d)
				}
				this.boundingSphereRadius = Math.sqrt(e)
			};
			var q = new d;
			n.prototype.calculateWorldAABB = function(e, f, n, o) {
				for (var d, i, t, l, u, p, s = this.vertices.length, y = this.vertices, c = 0; s > c; c++) {
					q.copy(y[c]), f.vmult(q, q), e.vadd(q, q);
					var a = q;
					a.x < d || void 0 === d ? d = a.x : (a.x > l || void 0 === l) && (l = a.x), a.y < i || void 0 === i ? i = a.y : (a.y > u || void 0 === u) && (u = a.y), a.z < t || void 0 === t ? t = a.z : (a.z > p || void 0 === p) && (p = a.z)
				}
				n.set(d, i, t), o.set(l, u, p)
			}, n.prototype.volume = function() {
				return 4 * Math.PI * this.boundingSphereRadius / 3
			}, n.prototype.getAveragePointLocal = function(e) {
				e = e || new d;
				for (var f = this.vertices.length, n = this.vertices, o = 0; f > o; o++) e.vadd(n[o], e);
				return e.mult(1 / f, e), e
			}, n.prototype.transformAllPoints = function(e, f) {
				var n = this.vertices.length,
					o = this.vertices;
				if (f) {
					for (var d = 0; n > d; d++) {
						var i = o[d];
						f.vmult(i, i)
					}
					for (var d = 0; d < this.faceNormals.length; d++) {
						var i = this.faceNormals[d];
						f.vmult(i, i)
					}
				}
				if (e)
					for (var d = 0; n > d; d++) {
						var i = o[d];
						i.vadd(e, i)
					}
			};
			var z = new d,
				B = new d,
				D = new d;
			n.prototype.pointIsInside = function(e) {
				var f = this.vertices.length,
					n = this.vertices,
					o = this.faces,
					d = this.faceNormals,
					i = null,
					t = this.faces.length,
					l = z;
				this.getAveragePointLocal(l);
				for (var u = 0; t > u; u++) {
					var f = (this.faces[u].length, d[u]),
						p = n[o[u][0]],
						s = B;
					e.vsub(p, s);
					var y = f.dot(s),
						c = D;
					l.vsub(p, c);
					var a = f.dot(c);
					if (0 > y && a > 0 || y > 0 && 0 > a) return !1
				}
				return i ? 1 : -1
			};
			var E = (new d, new d),
				F = new d;
			n.project = function(e, f, n, o, d) {
				var t = e.vertices.length,
					l = E,
					u = 0,
					p = 0,
					s = F,
					y = e.vertices;
				s.setZero(), i.vectorToLocalFrame(n, o, f, l), i.pointToLocalFrame(n, o, s, s);
				var c = s.dot(l);
				p = u = y[0].dot(l);
				for (var a = 1; t > a; a++) {
					var r = y[a].dot(l);
					r > u && (u = r), p > r && (p = r)
				}
				if (p -= c, u -= c, p > u) {
					var w = p;
					p = u, u = w
				}
				d[0] = u, d[1] = p
			}
		}, {
			"../math/Quaternion": 28,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		39: [function(e, f) {
			function n(e, f, n, t) {
				var l = t,
					u = [],
					p = [],
					s = [],
					y = [],
					c = [],
					a = Math.cos,
					r = Math.sin;
				u.push(new d(f * a(0), f * r(0), .5 * -n)), y.push(0), u.push(new d(e * a(0), e * r(0), .5 * n)), c.push(1);
				for (var w = 0; l > w; w++) {
					var b = 2 * Math.PI / l * (w + 1),
						m = 2 * Math.PI / l * (w + .5);
					l - 1 > w ? (u.push(new d(f * a(b), f * r(b), .5 * -n)), y.push(2 * w + 2), u.push(new d(e * a(b), e * r(b), .5 * n)), c.push(2 * w + 3), s.push([2 * w + 2, 2 * w + 3, 2 * w + 1, 2 * w])) : s.push([0, 1, 2 * w + 1, 2 * w]), (l % 2 === 1 || l / 2 > w) && p.push(new d(a(m), r(m), 0))
				}
				s.push(c), p.push(new d(0, 0, 1));
				for (var N = [], w = 0; w < y.length; w++) N.push(y[y.length - w - 1]);
				s.push(N), this.type = o.types.CONVEXPOLYHEDRON, i.call(this, u, s, p)
			}
			f.exports = n;
			var o = e("./Shape"),
				d = e("../math/Vec3"),
				i = (e("../math/Quaternion"), e("./ConvexPolyhedron"));
			n.prototype = new i
		}, {
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"./ConvexPolyhedron": 38,
			"./Shape": 43
		}],
		40: [function(e, f) {
			function n(e, f) {
				f = t.defaults(f, {
					maxValue: null,
					minValue: null,
					elementSize: 1
				}), this.data = e, this.maxValue = f.maxValue, this.minValue = f.minValue, this.elementSize = f.elementSize, null === f.minValue && this.updateMinValue(), null === f.maxValue && this.updateMaxValue(), this.cacheEnabled = !0, o.call(this), this.pillarConvex = new d, this.pillarOffset = new i, this.type = o.types.HEIGHTFIELD, this.updateBoundingSphereRadius(), this._cachedPillars = {}
			}
			var o = e("./Shape"),
				d = e("./ConvexPolyhedron"),
				i = e("../math/Vec3"),
				t = e("../utils/Utils");
			f.exports = n, n.prototype = new o, n.prototype.update = function() {
				this._cachedPillars = {}
			}, n.prototype.updateMinValue = function() {
				for (var e = this.data, f = e[0][0], n = 0; n !== e.length; n++)
					for (var o = 0; o !== e[n].length; o++) {
						var d = e[n][o];
						f > d && (f = d)
					}
				this.minValue = f
			}, n.prototype.updateMaxValue = function() {
				for (var e = this.data, f = e[0][0], n = 0; n !== e.length; n++)
					for (var o = 0; o !== e[n].length; o++) {
						var d = e[n][o];
						d > f && (f = d)
					}
				this.maxValue = f
			}, n.prototype.setHeightValueAtIndex = function(e, f, n) {
				var o = this.data;
				o[e][f] = n, this.clearCachedConvexTrianglePillar(e, f, !1), e > 0 && (this.clearCachedConvexTrianglePillar(e - 1, f, !0), this.clearCachedConvexTrianglePillar(e - 1, f, !1)), f > 0 && (this.clearCachedConvexTrianglePillar(e, f - 1, !0), this.clearCachedConvexTrianglePillar(e, f - 1, !1)), f > 0 && e > 0 && this.clearCachedConvexTrianglePillar(e - 1, f - 1, !0)
			}, n.prototype.getRectMinMax = function(e, f, n, o, d) {
				d = d || [];
				for (var i = this.data, t = this.minValue, l = e; n >= l; l++)
					for (var u = f; o >= u; u++) {
						var p = i[l][u];
						p > t && (t = p)
					}
				d[0] = this.minValue, d[1] = t
			}, n.prototype.getIndexOfPosition = function(e, f, n, o) {
				var d = this.elementSize,
					i = this.data,
					t = Math.floor(e / d),
					l = Math.floor(f / d);
				return n[0] = t, n[1] = l, o && (0 > t && (t = 0), 0 > l && (l = 0), t >= i.length - 1 && (t = i.length - 1), l >= i[0].length - 1 && (l = i[0].length - 1)), 0 > t || 0 > l || t >= i.length - 1 || l >= i[0].length - 1 ? !1 : !0
			}, n.prototype.getHeightAt = function(e, f, n) {
				var o = [];
				this.getIndexOfPosition(e, f, o, n);
				var d = [];
				return this.getRectMinMax(o[0], o[1] + 1, o[0], o[1] + 1, d), (d[0] + d[1]) / 2
			}, n.prototype.getCacheConvexTrianglePillarKey = function(e, f, n) {
				return e + "_" + f + "_" + (n ? 1 : 0)
			}, n.prototype.getCachedConvexTrianglePillar = function(e, f, n) {
				return this._cachedPillars[this.getCacheConvexTrianglePillarKey(e, f, n)]
			}, n.prototype.setCachedConvexTrianglePillar = function(e, f, n, o, d) {
				this._cachedPillars[this.getCacheConvexTrianglePillarKey(e, f, n)] = {
					convex: o,
					offset: d
				}
			}, n.prototype.clearCachedConvexTrianglePillar = function(e, f, n) {
				delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(e, f, n)]
			}, n.prototype.getConvexTrianglePillar = function(e, f, n) {
				var o = this.pillarConvex,
					t = this.pillarOffset;
				if (this.cacheEnabled) {
					var l = this.getCachedConvexTrianglePillar(e, f, n);
					if (l) return this.pillarConvex = l.convex, void(this.pillarOffset = l.offset);
					o = new d, t = new i, this.pillarConvex = o, this.pillarOffset = t
				}
				var l = this.data,
					u = this.elementSize,
					p = o.faces;
				o.vertices.length = 6;
				for (var s = 0; 6 > s; s++) o.vertices[s] || (o.vertices[s] = new i);
				p.length = 5;
				for (var s = 0; 5 > s; s++) p[s] || (p[s] = []);
				var y = o.vertices,
					c = (Math.min(l[e][f], l[e + 1][f], l[e][f + 1], l[e + 1][f + 1]) - this.minValue) / 2 + this.minValue;
				n ? (t.set((e + .75) * u, (f + .75) * u, c), y[0].set(.25 * u, .25 * u, l[e + 1][f + 1] - c), y[1].set(-.75 * u, .25 * u, l[e][f + 1] - c), y[2].set(.25 * u, -.75 * u, l[e + 1][f] - c), y[3].set(.25 * u, .25 * u, -c - 1), y[4].set(-.75 * u, .25 * u, -c - 1), y[5].set(.25 * u, -.75 * u, -c - 1), p[0][0] = 0, p[0][1] = 1, p[0][2] = 2, p[1][0] = 5, p[1][1] = 4, p[1][2] = 3, p[2][0] = 2, p[2][1] = 5, p[2][2] = 3, p[2][3] = 0, p[3][0] = 3, p[3][1] = 4, p[3][2] = 1, p[3][3] = 0, p[4][0] = 1, p[4][1] = 4, p[4][2] = 5, p[4][3] = 2) : (t.set((e + .25) * u, (f + .25) * u, c), y[0].set(-.25 * u, -.25 * u, l[e][f] - c), y[1].set(.75 * u, -.25 * u, l[e + 1][f] - c), y[2].set(-.25 * u, .75 * u, l[e][f + 1] - c), y[3].set(-.25 * u, -.25 * u, -c - 1), y[4].set(.75 * u, -.25 * u, -c - 1), y[5].set(-.25 * u, .75 * u, -c - 1), p[0][0] = 0, p[0][1] = 1, p[0][2] = 2, p[1][0] = 5, p[1][1] = 4, p[1][2] = 3, p[2][0] = 0, p[2][1] = 2, p[2][2] = 5, p[2][3] = 3, p[3][0] = 1, p[3][1] = 0, p[3][2] = 3, p[3][3] = 4, p[4][0] = 4, p[4][1] = 5, p[4][2] = 2, p[4][3] = 1), o.computeNormals(), o.computeEdges(), o.updateBoundingSphereRadius(), this.setCachedConvexTrianglePillar(e, f, n, o, t)
			}, n.prototype.calculateLocalInertia = function(e, f) {
				return f = f || new i, f.set(0, 0, 0), f
			}, n.prototype.volume = function() {
				return Number.MAX_VALUE
			}, n.prototype.calculateWorldAABB = function(e, f, n, o) {
				n.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), o.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
			}, n.prototype.updateBoundingSphereRadius = function() {
				var e = this.data,
					f = this.elementSize;
				this.boundingSphereRadius = new i(e.length * f, e[0].length * f, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm()
			}
		}, {
			"../math/Vec3": 30,
			"../utils/Utils": 53,
			"./ConvexPolyhedron": 38,
			"./Shape": 43
		}],
		41: [function(e, f) {
			function n() {
				o.call(this), this.type = o.types.PARTICLE
			}
			f.exports = n;
			var o = e("./Shape"),
				d = e("../math/Vec3");
			n.prototype = new o, n.prototype.constructor = n, n.prototype.calculateLocalInertia = function(e, f) {
				return f = f || new d, f.set(0, 0, 0), f
			}, n.prototype.volume = function() {
				return 0
			}, n.prototype.updateBoundingSphereRadius = function() {
				this.boundingSphereRadius = 0
			}, n.prototype.calculateWorldAABB = function(e, f, n, o) {
				n.copy(e), o.copy(e)
			}
		}, {
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		42: [function(e, f) {
			function n() {
				o.call(this), this.type = o.types.PLANE, this.worldNormal = new d, this.worldNormalNeedsUpdate = !0, this.boundingSphereRadius = Number.MAX_VALUE
			}
			f.exports = n;
			var o = e("./Shape"),
				d = e("../math/Vec3");
			n.prototype = new o, n.prototype.constructor = n, n.prototype.computeWorldNormal = function(e) {
				var f = this.worldNormal;
				f.set(0, 0, 1), e.vmult(f, f), this.worldNormalNeedsUpdate = !1
			}, n.prototype.calculateLocalInertia = function(e, f) {
				return f = f || new d
			}, n.prototype.volume = function() {
				return Number.MAX_VALUE
			};
			var i = new d;
			n.prototype.calculateWorldAABB = function(e, f, n, o) {
				i.set(0, 0, 1), f.vmult(i, i);
				var d = Number.MAX_VALUE;
				n.set(-d, -d, -d), o.set(d, d, d), 1 === i.x && (o.x = e.x), 1 === i.y && (o.y = e.y), 1 === i.z && (o.z = e.z), -1 === i.x && (n.x = e.x), -1 === i.y && (n.y = e.y), -1 === i.z && (n.z = e.z)
			}, n.prototype.updateBoundingSphereRadius = function() {
				this.boundingSphereRadius = Number.MAX_VALUE
			}
		}, {
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		43: [function(e, f) {
			function n() {
				this.id = n.idCounter++, this.type = 0, this.boundingSphereRadius = 0, this.collisionResponse = !0, this.material = null
			}
			f.exports = n; {
				var n = e("./Shape");
				e("../math/Vec3"), e("../math/Quaternion"), e("../material/Material")
			}
			n.prototype.constructor = n, n.prototype.updateBoundingSphereRadius = function() {
				throw "computeBoundingSphereRadius() not implemented for shape type " + this.type
			}, n.prototype.volume = function() {
				throw "volume() not implemented for shape type " + this.type
			}, n.prototype.calculateLocalInertia = function() {
				throw "calculateLocalInertia() not implemented for shape type " + this.type
			}, n.idCounter = 0, n.types = {
				SPHERE: 1,
				PLANE: 2,
				BOX: 4,
				COMPOUND: 8,
				CONVEXPOLYHEDRON: 16,
				HEIGHTFIELD: 32,
				PARTICLE: 64,
				CYLINDER: 128,
				TRIMESH: 256
			}
		}, {
			"../material/Material": 25,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		44: [function(e, f) {
			function n(e) {
				if (o.call(this), this.radius = void 0 !== e ? Number(e) : 1, this.type = o.types.SPHERE, this.radius < 0) throw new Error("The sphere radius cannot be negative.");
				this.updateBoundingSphereRadius()
			}
			f.exports = n;
			var o = e("./Shape"),
				d = e("../math/Vec3");
			n.prototype = new o, n.prototype.constructor = n, n.prototype.calculateLocalInertia = function(e, f) {
				f = f || new d;
				var n = 2 * e * this.radius * this.radius / 5;
				return f.x = n, f.y = n, f.z = n, f
			}, n.prototype.volume = function() {
				return 4 * Math.PI * this.radius / 3
			}, n.prototype.updateBoundingSphereRadius = function() {
				this.boundingSphereRadius = this.radius
			}, n.prototype.calculateWorldAABB = function(e, f, n, o) {
				for (var d = this.radius, i = ["x", "y", "z"], t = 0; t < i.length; t++) {
					var l = i[t];
					n[l] = e[l] - d, o[l] = e[l] + d
				}
			}
		}, {
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		45: [function(e, f) {
			function n(e, f) {
				o.call(this), this.type = o.types.TRIMESH, this.vertices = new Float32Array(e), this.indices = new Int16Array(f), this.normals = new Float32Array(f.length), this.aabb = new t, this.edges = null, this.scale = new d(1, 1, 1), this.tree = new l, this.updateEdges(), this.updateNormals(), this.updateAABB(), this.updateBoundingSphereRadius(), this.updateTree()
			}
			f.exports = n;
			var o = e("./Shape"),
				d = e("../math/Vec3"),
				i = (e("../math/Quaternion"), e("../math/Transform")),
				t = e("../collision/AABB"),
				l = e("../utils/Octree");
			n.prototype = new o, n.prototype.constructor = n;
			var u = new d;
			n.prototype.updateTree = function() {
				var e = this.tree;
				e.reset(), e.aabb.copy(this.aabb);
				var f = this.scale;
				e.aabb.lowerBound.x *= 1 / f.x, e.aabb.lowerBound.y *= 1 / f.y, e.aabb.lowerBound.z *= 1 / f.z, e.aabb.upperBound.x *= 1 / f.x, e.aabb.upperBound.y *= 1 / f.y, e.aabb.upperBound.z *= 1 / f.z;
				for (var n = new t, o = new d, i = new d, l = new d, u = [o, i, l], p = 0; p < this.indices.length / 3; p++) {
					var s = 3 * p;
					this._getUnscaledVertex(this.indices[s], o), this._getUnscaledVertex(this.indices[s + 1], i), this._getUnscaledVertex(this.indices[s + 2], l), n.setFromPoints(u), e.insert(n, p)
				}
				e.removeEmptyNodes()
			};
			var p = new t;
			n.prototype.getTrianglesInAABB = function(e, f) {
				p.copy(e);
				var n = this.scale,
					o = n.x,
					d = n.y,
					i = n.z,
					t = p.lowerBound,
					l = p.upperBound;
				return t.x /= o, t.y /= d, t.z /= i, l.x /= o, l.y /= d, l.z /= i, this.tree.aabbQuery(p, f)
			}, n.prototype.setScale = function(e) {
				var f = this.scale.x === this.scale.y === this.scale.z,
					n = e.x === e.y === e.z;
				f && n || this.updateNormals(), this.scale.copy(e), this.updateAABB(), this.updateBoundingSphereRadius()
			}, n.prototype.updateNormals = function() {
				for (var e = u, f = this.normals, o = 0; o < this.indices.length / 3; o++) {
					var d = 3 * o,
						i = this.indices[d],
						t = this.indices[d + 1],
						l = this.indices[d + 2];
					this.getVertex(i, r), this.getVertex(t, w), this.getVertex(l, b), n.computeNormal(w, r, b, e), f[d] = e.x, f[d + 1] = e.y, f[d + 2] = e.z
				}
			}, n.prototype.updateEdges = function() {
				for (var e = {}, f = function() {
						var f = i > d ? d + "_" + i : i + "_" + d;
						e[f] = !0
					}, n = 0; n < this.indices.length / 3; n++) {
					var o = 3 * n,
						d = this.indices[o],
						i = this.indices[o + 1],
						t = this.indices[o + 2];
					f(d, i), f(i, t), f(t, d)
				}
				var l = Object.keys(e);
				this.edges = new Int16Array(2 * l.length);
				for (var n = 0; n < l.length; n++) {
					var u = l[n].split("_");
					this.edges[2 * n] = parseInt(u[0], 10), this.edges[2 * n + 1] = parseInt(u[1], 10)
				}
			}, n.prototype.getEdgeVertex = function(e, f, n) {
				var o = this.edges[2 * e + (f ? 1 : 0)];
				this.getVertex(o, n)
			};
			var s = new d,
				y = new d;
			n.prototype.getEdgeVector = function(e, f) {
				var n = s,
					o = y;
				this.getEdgeVertex(e, 0, n), this.getEdgeVertex(e, 1, o), o.vsub(n, f)
			};
			var c = new d,
				a = new d;
			n.computeNormal = function(e, f, n, o) {
				f.vsub(e, a), n.vsub(f, c), c.cross(a, o), o.isZero() || o.normalize()
			};
			var r = new d,
				w = new d,
				b = new d;
			n.prototype.getVertex = function(e, f) {
				var n = this.scale;
				return this._getUnscaledVertex(e, f), f.x *= n.x, f.y *= n.y, f.z *= n.z, f
			}, n.prototype._getUnscaledVertex = function(e, f) {
				var n = 3 * e,
					o = this.vertices;
				return f.set(o[n], o[n + 1], o[n + 2])
			}, n.prototype.getWorldVertex = function(e, f, n, o) {
				return this.getVertex(e, o), i.pointToWorldFrame(f, n, o, o), o
			}, n.prototype.getTriangleVertices = function(e, f, n, o) {
				var d = 3 * e;
				this.getVertex(this.indices[d], f), this.getVertex(this.indices[d + 1], n), this.getVertex(this.indices[d + 2], o)
			}, n.prototype.getNormal = function(e, f) {
				var n = 3 * e;
				return f.set(this.normals[n], this.normals[n + 1], this.normals[n + 2])
			};
			var m = new t;
			n.prototype.calculateLocalInertia = function(e, f) {
				this.computeLocalAABB(m);
				var n = m.upperBound.x - m.lowerBound.x,
					o = m.upperBound.y - m.lowerBound.y,
					d = m.upperBound.z - m.lowerBound.z;
				return f.set(1 / 12 * e * (2 * o * 2 * o + 2 * d * 2 * d), 1 / 12 * e * (2 * n * 2 * n + 2 * d * 2 * d), 1 / 12 * e * (2 * o * 2 * o + 2 * n * 2 * n))
			};
			var N = new d;
			n.prototype.computeLocalAABB = function(e) {
				var f = e.lowerBound,
					n = e.upperBound,
					o = this.vertices.length,
					d = (this.vertices, N);
				this.getVertex(0, d), f.copy(d), n.copy(d);
				for (var i = 0; i !== o; i++) this.getVertex(i, d), d.x < f.x ? f.x = d.x : d.x > n.x && (n.x = d.x), d.y < f.y ? f.y = d.y : d.y > n.y && (n.y = d.y), d.z < f.z ? f.z = d.z : d.z > n.z && (n.z = d.z)
			}, n.prototype.updateAABB = function() {
				this.computeLocalAABB(this.aabb)
			}, n.prototype.updateBoundingSphereRadius = function() {
				for (var e = 0, f = this.vertices, n = new d, o = 0, i = f.length / 3; o !== i; o++) {
					this.getVertex(o, n);
					var t = n.norm2();
					t > e && (e = t)
				}
				this.boundingSphereRadius = Math.sqrt(e)
			};
			var g = (new d, new i),
				x = new t;
			n.prototype.calculateWorldAABB = function(e, f, n, o) {
				var d = g,
					i = x;
				d.position = e, d.quaternion = f, this.aabb.toWorldFrame(d, i), n.copy(i.lowerBound), o.copy(i.upperBound)
			}, n.prototype.volume = function() {
				return 4 * Math.PI * this.boundingSphereRadius / 3
			}, n.createTorus = function(e, f, o, d, i) {
				e = e || 1, f = f || .5, o = o || 8, d = d || 6, i = i || 2 * Math.PI;
				for (var t = [], l = [], u = 0; o >= u; u++)
					for (var p = 0; d >= p; p++) {
						var s = p / d * i,
							y = u / o * Math.PI * 2,
							c = (e + f * Math.cos(y)) * Math.cos(s),
							a = (e + f * Math.cos(y)) * Math.sin(s),
							r = f * Math.sin(y);
						t.push(c, a, r)
					}
				for (var u = 1; o >= u; u++)
					for (var p = 1; d >= p; p++) {
						var w = (d + 1) * u + p - 1,
							b = (d + 1) * (u - 1) + p - 1,
							m = (d + 1) * (u - 1) + p,
							N = (d + 1) * u + p;
						l.push(w, b, N), l.push(b, m, N)
					}
				return new n(t, l)
			}
		}, {
			"../collision/AABB": 3,
			"../math/Quaternion": 28,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"../utils/Octree": 50,
			"./Shape": 43
		}],
		46: [function(e, f) {
			function n() {
				o.call(this), this.iterations = 10, this.tolerance = 1e-7
			}
			f.exports = n;
			var o = (e("../math/Vec3"), e("../math/Quaternion"), e("./Solver"));
			n.prototype = new o;
			var d = [],
				i = [],
				t = [];
			n.prototype.solve = function(e, f) {
				var n, o, l, u, p, s, y = 0,
					c = this.iterations,
					a = this.tolerance * this.tolerance,
					r = this.equations,
					w = r.length,
					b = f.bodies,
					m = b.length,
					N = e;
				if (0 !== w)
					for (var g = 0; g !== m; g++) b[g].updateSolveMassProperties();
				var x = i,
					j = t,
					v = d;
				x.length = w, j.length = w, v.length = w;
				for (var g = 0; g !== w; g++) {
					var A = r[g];
					v[g] = 0, j[g] = A.computeB(N), x[g] = 1 / A.computeC()
				}
				if (0 !== w) {
					for (var g = 0; g !== m; g++) {
						var C = b[g],
							O = C.vlambda,
							h = C.wlambda;
						O.set(0, 0, 0), h && h.set(0, 0, 0)
					}
					for (y = 0; y !== c; y++) {
						u = 0;
						for (var k = 0; k !== w; k++) {
							var A = r[k];
							n = j[k], o = x[k], s = v[k], p = A.computeGWlambda(), l = o * (n - p - A.eps * s), s + l < A.minForce ? l = A.minForce - s : s + l > A.maxForce && (l = A.maxForce - s), v[k] += l, u += l > 0 ? l : -l, A.addToWlambda(l)
						}
						if (a > u * u) break
					}
					for (var g = 0; g !== m; g++) {
						var C = b[g],
							q = C.velocity,
							z = C.angularVelocity;
						q.vadd(C.vlambda, q), z && z.vadd(C.wlambda, z)
					}
				}
				return y
			}
		}, {
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"./Solver": 47
		}],
		47: [function(e, f) {
			function n() {
				this.equations = []
			}
			f.exports = n, n.prototype.solve = function() {
				return 0
			}, n.prototype.addEquation = function(e) {
				e.enabled && this.equations.push(e)
			}, n.prototype.removeEquation = function(e) {
				var f = this.equations,
					n = f.indexOf(e); - 1 !== n && f.splice(n, 1)
			}, n.prototype.removeAllEquations = function() {
				this.equations.length = 0
			}
		}, {}],
		48: [function(e, f) {
			function n(e) {
				for (l.call(this), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = e, this.nodes = [], this.nodePool = []; this.nodePool.length < 128;) this.nodePool.push(this.createNode())
			}

			function o(e) {
				for (var f = e.length, n = 0; n !== f; n++) {
					var o = e[n];
					if (!(o.visited || o.body.type & c)) return o
				}
				return !1
			}

			function d(e, f, n, d) {
				for (a.push(e), e.visited = !0, f(e, n, d); a.length;)
					for (var i, t = a.pop(); i = o(t.children);) i.visited = !0, f(i, n, d), a.push(i)
			}

			function i(e, f, n) {
				f.push(e.body);
				for (var o = e.eqs.length, d = 0; d !== o; d++) {
					var i = e.eqs[d]; - 1 === n.indexOf(i) && n.push(i)
				}
			}

			function t(e, f) {
				return f.id - e.id
			}
			f.exports = n;
			var l = (e("../math/Vec3"), e("../math/Quaternion"), e("./Solver")),
				u = e("../objects/Body");
			n.prototype = new l;
			var p = [],
				s = [],
				y = {
					bodies: []
				},
				c = u.STATIC,
				a = [];
			n.prototype.createNode = function() {
				return {
					body: null,
					children: [],
					eqs: [],
					visited: !1
				}
			}, n.prototype.solve = function(e, f) {
				for (var n = p, l = this.nodePool, u = f.bodies, c = this.equations, a = c.length, r = u.length, w = this.subsolver; l.length < r;) l.push(this.createNode());
				n.length = r;
				for (var b = 0; r > b; b++) n[b] = l[b];
				for (var b = 0; b !== r; b++) {
					var m = n[b];
					m.body = u[b], m.children.length = 0, m.eqs.length = 0, m.visited = !1
				}
				for (var N = 0; N !== a; N++) {
					var g = c[N],
						b = u.indexOf(g.bi),
						x = u.indexOf(g.bj),
						j = n[b],
						v = n[x];
					j.children.push(v), j.eqs.push(g), v.children.push(j), v.eqs.push(g)
				}
				var A, C = 0,
					O = s;
				w.tolerance = this.tolerance, w.iterations = this.iterations;
				for (var h = y; A = o(n);) {
					O.length = 0, h.bodies.length = 0, d(A, i, h.bodies, O);
					var k = O.length;
					O = O.sort(t);
					for (var b = 0; b !== k; b++) w.addEquation(O[b]); {
						w.solve(e, h)
					}
					w.removeAllEquations(), C++
				}
				return C
			}
		}, {
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/Body": 31,
			"./Solver": 47
		}],
		49: [function(e, f) {
			var n = function() {};
			f.exports = n, n.prototype = {
				constructor: n,
				addEventListener: function(e, f) {
					void 0 === this._listeners && (this._listeners = {});
					var n = this._listeners;
					return void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(f) && n[e].push(f), this
				},
				hasEventListener: function(e, f) {
					if (void 0 === this._listeners) return !1;
					var n = this._listeners;
					return void 0 !== n[e] && -1 !== n[e].indexOf(f) ? !0 : !1
				},
				removeEventListener: function(e, f) {
					if (void 0 === this._listeners) return this;
					var n = this._listeners;
					if (void 0 === n[e]) return this;
					var o = n[e].indexOf(f);
					return -1 !== o && n[e].splice(o, 1), this
				},
				dispatchEvent: function(e) {
					if (void 0 === this._listeners) return this;
					var f = this._listeners,
						n = f[e.type];
					if (void 0 !== n) {
						e.target = this;
						for (var o = 0, d = n.length; d > o; o++) n[o].call(this, e)
					}
					return this
				}
			}
		}, {}],
		50: [function(e, f) {
			function n(e) {
				e = e || {}, this.root = e.root || null, this.aabb = e.aabb ? e.aabb.clone() : new d, this.data = [], this.children = []
			}

			function o(e, f) {
				f = f || {}, f.root = null, f.aabb = e, n.call(this, f), this.maxDepth = "undefined" != typeof f.maxDepth ? f.maxDepth : 8
			}
			var d = e("../collision/AABB"),
				i = e("../math/Vec3");
			f.exports = o, o.prototype = new n, n.prototype.reset = function() {
				this.children.length = this.data.length = 0
			}, n.prototype.insert = function(e, f, n) {
				var o = this.data;
				if (n = n || 0, !this.aabb.contains(e)) return !1;
				var d = this.children;
				if (n < (this.maxDepth || this.root.maxDepth)) {
					var i = !1;
					d.length || (this.subdivide(), i = !0);
					for (var t = 0; 8 !== t; t++)
						if (d[t].insert(e, f, n + 1)) return !0;
					i && (d.length = 0)
				}
				return o.push(f), !0
			};
			var t = new i;
			n.prototype.subdivide = function() {
				var e = this.aabb,
					f = e.lowerBound,
					o = e.upperBound,
					l = this.children;
				l.push(new n({
					aabb: new d({
						lowerBound: new i(0, 0, 0)
					})
				}), new n({
					aabb: new d({
						lowerBound: new i(1, 0, 0)
					})
				}), new n({
					aabb: new d({
						lowerBound: new i(1, 1, 0)
					})
				}), new n({
					aabb: new d({
						lowerBound: new i(1, 1, 1)
					})
				}), new n({
					aabb: new d({
						lowerBound: new i(0, 1, 1)
					})
				}), new n({
					aabb: new d({
						lowerBound: new i(0, 0, 1)
					})
				}), new n({
					aabb: new d({
						lowerBound: new i(1, 0, 1)
					})
				}), new n({
					aabb: new d({
						lowerBound: new i(0, 1, 0)
					})
				})), o.vsub(f, t), t.scale(.5, t);
				for (var u = this.root || this, p = 0; 8 !== p; p++) {
					var s = l[p];
					s.root = u;
					var y = s.aabb.lowerBound;
					y.x *= t.x, y.y *= t.y, y.z *= t.z, y.vadd(f, y), y.vadd(t, s.aabb.upperBound)
				}
			}, n.prototype.aabbQuery = function(e, f) {
				for (var n = (this.data, this.children, [this]); n.length;) {
					var o = n.pop();
					o.aabb.overlaps(e) && Array.prototype.push.apply(f, o.data), Array.prototype.push.apply(n, o.children)
				}
				return f
			};
			var l = new d;
			n.prototype.rayQuery = function(e, f, n) {
				return e.getAABB(l), l.toLocalFrame(f, l), this.aabbQuery(l, n), n
			}, n.prototype.removeEmptyNodes = function() {
				for (var e = [this]; e.length;) {
					for (var f = e.pop(), n = f.children.length - 1; n >= 0; n--) f.children[n].data.length || f.children.splice(n, 1);
					Array.prototype.push.apply(e, f.children)
				}
			}
		}, {
			"../collision/AABB": 3,
			"../math/Vec3": 30
		}],
		51: [function(e, f) {
			function n() {
				this.objects = [], this.type = Object
			}
			f.exports = n, n.prototype.release = function() {
				for (var e = arguments.length, f = 0; f !== e; f++) this.objects.push(arguments[f])
			}, n.prototype.get = function() {
				return 0 === this.objects.length ? this.constructObject() : this.objects.pop()
			}, n.prototype.constructObject = function() {
				throw new Error("constructObject() not implemented in this Pool subclass yet!")
			}
		}, {}],
		52: [function(e, f) {
			function n() {
				this.data = {
					keys: []
				}
			}
			f.exports = n, n.prototype.get = function(e, f) {
				if (e > f) {
					var n = f;
					f = e, e = n
				}
				return this.data[e + "-" + f]
			}, n.prototype.set = function(e, f, n) {
				if (e > f) {
					var o = f;
					f = e, e = o
				}
				var d = e + "-" + f;
				this.get(e, f) || this.data.keys.push(d), this.data[d] = n
			}, n.prototype.reset = function() {
				for (var e = this.data, f = e.keys; f.length > 0;) {
					var n = f.pop();
					delete e[n]
				}
			}
		}, {}],
		53: [function(e, f) {
			function n() {}
			f.exports = n, n.defaults = function(e, f) {
				e = e || {};
				for (var n in f) n in e || (e[n] = f[n]);
				return e
			}
		}, {}],
		54: [function(e, f) {
			function n() {
				d.call(this), this.type = o
			}
			f.exports = n;
			var o = e("../math/Vec3"),
				d = e("./Pool");
			n.prototype = new d, n.prototype.constructObject = function() {
				return new o
			}
		}, {
			"../math/Vec3": 30,
			"./Pool": 51
		}],
		55: [function(e, f) {
			function n(e) {
				this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], this.v3pool = new s, this.world = e, this.currentContactMaterial = null, this.enableFrictionReduction = !1
			}

			function o(e, f, n) {
				for (var o = null, d = e.length, i = 0; i !== d; i++) {
					var t = e[i],
						l = M;
					e[(i + 1) % d].vsub(t, l);
					var u = P;
					l.cross(f, u);
					var p = Q;
					n.vsub(t, p);
					var s = u.dot(p);
					if (!(null === o || s > 0 && o === !0 || 0 >= s && o === !1)) return !1;
					null === o && (o = s > 0)
				}
				return !0
			}
			f.exports = n;
			var d = e("../collision/AABB"),
				i = e("../shapes/Shape"),
				t = e("../collision/Ray"),
				l = e("../math/Vec3"),
				u = e("../math/Transform"),
				p = (e("../shapes/ConvexPolyhedron"), e("../math/Quaternion")),
				s = (e("../solver/Solver"), e("../utils/Vec3Pool")),
				y = e("../equations/ContactEquation"),
				c = e("../equations/FrictionEquation");
			n.prototype.createContactEquation = function(e, f, n, o, d, i) {
				var t;
				this.contactPointPool.length ? (t = this.contactPointPool.pop(), t.bi = e, t.bj = f) : t = new y(e, f), t.enabled = e.collisionResponse && f.collisionResponse && n.collisionResponse && o.collisionResponse;
				var l = this.currentContactMaterial;
				t.restitution = l.restitution, t.setSpookParams(l.contactEquationStiffness, l.contactEquationRelaxation, this.world.dt);
				var u = n.material || e.material,
					p = o.material || f.material;
				return u && p && u.restitution >= 0 && p.restitution >= 0 && (t.restitution = u.restitution * p.restitution), t.si = d || n, t.sj = i || o, t
			}, n.prototype.createFrictionEquationsFromContact = function(e, f) {
				var n = e.bi,
					o = e.bj,
					d = e.si,
					i = e.sj,
					t = this.world,
					l = this.currentContactMaterial,
					u = l.friction,
					p = d.material || n.material,
					s = i.material || o.material;
				if (p && s && p.friction >= 0 && s.friction >= 0 && (u = p.friction * s.friction), u > 0) {
					var y = u * t.gravity.length(),
						a = n.invMass + o.invMass;
					a > 0 && (a = 1 / a);
					var r = this.frictionEquationPool,
						w = r.length ? r.pop() : new c(n, o, y * a),
						b = r.length ? r.pop() : new c(n, o, y * a);
					return w.bi = b.bi = n, w.bj = b.bj = o, w.minForce = b.minForce = -y * a, w.maxForce = b.maxForce = y * a, w.ri.copy(e.ri), w.rj.copy(e.rj), b.ri.copy(e.ri), b.rj.copy(e.rj), e.ni.tangents(w.t, b.t), w.setSpookParams(l.frictionEquationStiffness, l.frictionEquationRelaxation, t.dt), b.setSpookParams(l.frictionEquationStiffness, l.frictionEquationRelaxation, t.dt), w.enabled = b.enabled = e.enabled, f.push(w, b), !0
				}
				return !1
			};
			var a = new l,
				r = new l,
				w = new l;
			n.prototype.createFrictionFromAverage = function(e) {
				var f = this.result[this.result.length - 1];
				if (this.createFrictionEquationsFromContact(f, this.frictionResult) && 1 !== e) {
					var n = this.frictionResult[this.frictionResult.length - 2],
						o = this.frictionResult[this.frictionResult.length - 1];
					a.setZero(), r.setZero(), w.setZero();
					for (var d = f.bi, i = (f.bj, 0); i !== e; i++) f = this.result[this.result.length - 1 - i], f.bodyA !== d ? (a.vadd(f.ni, a), r.vadd(f.ri, r), w.vadd(f.rj, w)) : (a.vsub(f.ni, a), r.vadd(f.rj, r), w.vadd(f.ri, w));
					var t = 1 / e;
					r.scale(t, n.ri), w.scale(t, n.rj), o.ri.copy(n.ri), o.rj.copy(n.rj), a.normalize(), a.tangents(n.t, o.t)
				}
			};
			var b = new l,
				m = new l,
				N = new p,
				g = new p;
			n.prototype.getContacts = function(e, f, n, o, d, i, t) {
				this.contactPointPool = d, this.frictionEquationPool = t, this.result = o, this.frictionResult = i;
				for (var l = N, u = g, p = b, s = m, y = 0, c = e.length; y !== c; y++) {
					var a = e[y],
						r = f[y],
						w = null;
					a.material && r.material && (w = n.getContactMaterial(a.material, r.material) || null);
					for (var x = 0; x < a.shapes.length; x++) {
						a.quaternion.mult(a.shapeOrientations[x], l), a.quaternion.vmult(a.shapeOffsets[x], p), p.vadd(a.position, p);
						for (var j = a.shapes[x], v = 0; v < r.shapes.length; v++) {
							r.quaternion.mult(r.shapeOrientations[v], u), r.quaternion.vmult(r.shapeOffsets[v], s), s.vadd(r.position, s);
							var A = r.shapes[v];
							if (!(p.distanceTo(s) > j.boundingSphereRadius + A.boundingSphereRadius)) {
								var C = null;
								j.material && A.material && (C = n.getContactMaterial(j.material, A.material) || null), this.currentContactMaterial = C || w || n.defaultContactMaterial;
								var O = this[j.type | A.type];
								O && (j.type < A.type ? O.call(this, j, A, p, s, l, u, a, r, j, A) : O.call(this, A, j, s, p, u, l, r, a, j, A))
							}
						}
					}
				}
			};
			n.prototype[i.types.BOX | i.types.BOX] = n.prototype.boxBox = function(e, f, n, o, d, i, t, l) {
				e.convexPolyhedronRepresentation.material = e.material, f.convexPolyhedronRepresentation.material = f.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, f.convexPolyhedronRepresentation.collisionResponse = f.collisionResponse, this.convexConvex(e.convexPolyhedronRepresentation, f.convexPolyhedronRepresentation, n, o, d, i, t, l, e, f)
			}, n.prototype[i.types.BOX | i.types.CONVEXPOLYHEDRON] = n.prototype.boxConvex = function(e, f, n, o, d, i, t, l) {
				e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexConvex(e.convexPolyhedronRepresentation, f, n, o, d, i, t, l, e, f)
			}, n.prototype[i.types.BOX | i.types.PARTICLE] = n.prototype.boxParticle = function(e, f, n, o, d, i, t, l) {
				e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexParticle(e.convexPolyhedronRepresentation, f, n, o, d, i, t, l, e, f)
			}, n.prototype[i.types.SPHERE] = n.prototype.sphereSphere = function(e, f, n, o, d, i, t, l) {
				var u = this.createContactEquation(t, l, e, f);
				o.vsub(n, u.ni), u.ni.normalize(), u.ri.copy(u.ni), u.rj.copy(u.ni), u.ri.mult(e.radius, u.ri), u.rj.mult(-f.radius, u.rj), u.ri.vadd(n, u.ri), u.ri.vsub(t.position, u.ri), u.rj.vadd(o, u.rj), u.rj.vsub(l.position, u.rj), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult)
			};
			var x = new l,
				j = new l,
				v = new l;
			n.prototype[i.types.PLANE | i.types.TRIMESH] = n.prototype.planeTrimesh = function(e, f, n, o, d, i, t, p) {
				var s = new l,
					y = x;
				y.set(0, 0, 1), d.vmult(y, y);
				for (var c = 0; c < f.vertices.length / 3; c++) {
					f.getVertex(c, s);
					var a = new l;
					a.copy(s), u.pointToWorldFrame(o, i, a, s);
					var r = j;
					s.vsub(n, r);
					var w = y.dot(r);
					if (0 >= w) {
						var b = this.createContactEquation(t, p, e, f);
						b.ni.copy(y);
						var m = v;
						y.scale(r.dot(y), m), s.vsub(m, m), b.ri.copy(m), b.ri.vsub(t.position, b.ri), b.rj.copy(s), b.rj.vsub(p.position, b.rj), this.result.push(b), this.createFrictionEquationsFromContact(b, this.frictionResult)
					}
				}
			};
			var A = new l,
				C = new l,
				O = (new l, new l),
				h = new l,
				k = new l,
				q = new l,
				z = new l,
				B = new l,
				D = new l,
				E = new l,
				F = new l,
				G = new l,
				H = new l,
				I = new d,
				J = [];
			n.prototype[i.types.SPHERE | i.types.TRIMESH] = n.prototype.sphereTrimesh = function(e, f, n, o, d, i, l, p) {
				var s = k,
					y = q,
					c = z,
					a = B,
					r = D,
					w = E,
					b = I,
					m = h,
					N = C,
					g = J;
				u.pointToLocalFrame(o, i, n, r);
				var x = e.radius;
				b.lowerBound.set(r.x - x, r.y - x, r.z - x), b.upperBound.set(r.x + x, r.y + x, r.z + x), f.getTrianglesInAABB(b, g);
				for (var j = O, v = e.radius * e.radius, K = 0; K < g.length; K++)
					for (var L = 0; 3 > L; L++)
						if (f.getVertex(f.indices[3 * g[K] + L], j), j.vsub(r, N), N.norm2() <= v) {
							m.copy(j), u.pointToWorldFrame(o, i, m, j), j.vsub(n, N);
							var M = this.createContactEquation(l, p, e, f);
							M.ni.copy(N), M.ni.normalize(), M.ri.copy(M.ni), M.ri.scale(e.radius, M.ri), M.ri.vadd(n, M.ri), M.ri.vsub(l.position, M.ri), M.rj.copy(j), M.rj.vsub(p.position, M.rj), this.result.push(M), this.createFrictionEquationsFromContact(M, this.frictionResult)
						}
				for (var K = 0; K < g.length; K++)
					for (var L = 0; 3 > L; L++) {
						f.getVertex(f.indices[3 * g[K] + L], s), f.getVertex(f.indices[3 * g[K] + (L + 1) % 3], y), y.vsub(s, c), r.vsub(y, w);
						var P = w.dot(c);
						r.vsub(s, w);
						var Q = w.dot(c);
						if (Q > 0 && 0 > P) {
							r.vsub(s, w), a.copy(c), a.normalize(), Q = w.dot(a), a.scale(Q, w), w.vadd(s, w);
							var R = w.distanceTo(r);
							if (R < e.radius) {
								var M = this.createContactEquation(l, p, e, f);
								w.vsub(r, M.ni), M.ni.normalize(), M.ni.scale(e.radius, M.ri), u.pointToWorldFrame(o, i, w, w), w.vsub(p.position, M.rj), u.vectorToWorldFrame(i, M.ni, M.ni), u.vectorToWorldFrame(i, M.ri, M.ri), this.result.push(M), this.createFrictionEquationsFromContact(M, this.frictionResult)
							}
						}
					}
				for (var S = F, T = G, U = H, V = A, K = 0, W = g.length; K !== W; K++) {
					f.getTriangleVertices(g[K], S, T, U), f.getNormal(g[K], V), r.vsub(S, w);
					var R = w.dot(V);
					if (V.scale(R, w), r.vsub(w, w), R = w.distanceTo(r), t.pointInTriangle(w, S, T, U) && R < e.radius) {
						var M = this.createContactEquation(l, p, e, f);
						w.vsub(r, M.ni), M.ni.normalize(), M.ni.scale(e.radius, M.ri), u.pointToWorldFrame(o, i, w, w), w.vsub(p.position, M.rj), u.vectorToWorldFrame(i, M.ni, M.ni), u.vectorToWorldFrame(i, M.ri, M.ri), this.result.push(M), this.createFrictionEquationsFromContact(M, this.frictionResult)
					}
				}
				g.length = 0
			};
			var K = new l,
				L = new l;
			n.prototype[i.types.SPHERE | i.types.PLANE] = n.prototype.spherePlane = function(e, f, n, o, d, i, t, l) {
				var u = this.createContactEquation(t, l, e, f);
				if (u.ni.set(0, 0, 1), i.vmult(u.ni, u.ni), u.ni.negate(u.ni), u.ni.normalize(), u.ni.mult(e.radius, u.ri), n.vsub(o, K), u.ni.mult(u.ni.dot(K), L), K.vsub(L, u.rj), -K.dot(u.ni) <= e.radius) {
					var p = u.ri,
						s = u.rj;
					p.vadd(n, p), p.vsub(t.position, p), s.vadd(o, s), s.vsub(l.position, s), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult)
				}
			};
			var M = new l,
				P = new l,
				Q = new l,
				R = new l,
				S = new l,
				T = new l,
				U = new l,
				V = [new l, new l, new l, new l, new l, new l],
				W = new l,
				X = new l,
				Y = new l,
				Z = new l;
			n.prototype[i.types.SPHERE | i.types.BOX] = n.prototype.sphereBox = function(e, f, n, o, d, i, t, l) {
				var u = this.v3pool,
					p = V;
				n.vsub(o, R), f.getSideNormals(p, i);
				for (var s = e.radius, y = !1, c = X, a = Y, r = Z, w = null, b = 0, m = 0, N = 0, g = null, x = 0, j = p.length; x !== j && y === !1; x++) {
					var v = S;
					v.copy(p[x]);
					var A = v.norm();
					v.normalize();
					var C = R.dot(v);
					if (A + s > C && C > 0) {
						var O = T,
							h = U;
						O.copy(p[(x + 1) % 3]), h.copy(p[(x + 2) % 3]);
						var k = O.norm(),
							q = h.norm();
						O.normalize(), h.normalize();
						var z = R.dot(O),
							B = R.dot(h);
						if (k > z && z > -k && q > B && B > -q) {
							var D = Math.abs(C - A - s);
							(null === g || g > D) && (g = D, m = z, N = B, w = A, c.copy(v), a.copy(O), r.copy(h), b++)
						}
					}
				}
				if (b) {
					y = !0;
					var E = this.createContactEquation(t, l, e, f);
					c.mult(-s, E.ri), E.ni.copy(c), E.ni.negate(E.ni), c.mult(w, c), a.mult(m, a), c.vadd(a, c), r.mult(N, r), c.vadd(r, E.rj), E.ri.vadd(n, E.ri), E.ri.vsub(t.position, E.ri), E.rj.vadd(o, E.rj), E.rj.vsub(l.position, E.rj), this.result.push(E), this.createFrictionEquationsFromContact(E, this.frictionResult)
				}
				for (var F = u.get(), G = W, H = 0; 2 !== H && !y; H++)
					for (var I = 0; 2 !== I && !y; I++)
						for (var J = 0; 2 !== J && !y; J++)
							if (F.set(0, 0, 0), H ? F.vadd(p[0], F) : F.vsub(p[0], F), I ? F.vadd(p[1], F) : F.vsub(p[1], F), J ? F.vadd(p[2], F) : F.vsub(p[2], F), o.vadd(F, G), G.vsub(n, G), G.norm2() < s * s) {
								y = !0;
								var E = this.createContactEquation(t, l, e, f);
								E.ri.copy(G), E.ri.normalize(), E.ni.copy(E.ri), E.ri.mult(s, E.ri), E.rj.copy(F), E.ri.vadd(n, E.ri), E.ri.vsub(t.position, E.ri), E.rj.vadd(o, E.rj), E.rj.vsub(l.position, E.rj), this.result.push(E), this.createFrictionEquationsFromContact(E, this.frictionResult)
							}
				u.release(F), F = null;
				for (var K = u.get(), L = u.get(), E = u.get(), M = u.get(), D = u.get(), P = p.length, H = 0; H !== P && !y; H++)
					for (var I = 0; I !== P && !y; I++)
						if (H % 3 !== I % 3) {
							p[I].cross(p[H], K), K.normalize(), p[H].vadd(p[I], L), E.copy(n), E.vsub(L, E), E.vsub(o, E);
							var Q = E.dot(K);
							K.mult(Q, M);
							for (var J = 0; J === H % 3 || J === I % 3;) J++;
							D.copy(n), D.vsub(M, D), D.vsub(L, D), D.vsub(o, D);
							var $ = Math.abs(Q),
								_ = D.norm();
							if ($ < p[J].norm() && s > _) {
								y = !0;
								var ef = this.createContactEquation(t, l, e, f);
								L.vadd(M, ef.rj), ef.rj.copy(ef.rj), D.negate(ef.ni), ef.ni.normalize(), ef.ri.copy(ef.rj), ef.ri.vadd(o, ef.ri), ef.ri.vsub(n, ef.ri), ef.ri.normalize(), ef.ri.mult(s, ef.ri), ef.ri.vadd(n, ef.ri), ef.ri.vsub(t.position, ef.ri), ef.rj.vadd(o, ef.rj), ef.rj.vsub(l.position, ef.rj), this.result.push(ef), this.createFrictionEquationsFromContact(ef, this.frictionResult)
							}
						}
				u.release(K, L, E, M, D)
			};
			var $ = new l,
				_ = new l,
				ef = new l,
				ff = new l,
				nf = new l,
				of = new l,
				df = new l,
				tf = new l,
				lf = new l,
				uf = new l;
			n.prototype[i.types.SPHERE | i.types.CONVEXPOLYHEDRON] = n.prototype.sphereConvex = function(e, f, n, d, i, t, l, u) {
				var p = this.v3pool;
				n.vsub(d, $);
				for (var s = f.faceNormals, y = f.faces, c = f.vertices, a = e.radius, r = 0; r !== c.length; r++) {
					var w = c[r],
						b = nf;
					t.vmult(w, b), d.vadd(b, b);
					var m = ff;
					if (b.vsub(n, m), m.norm2() < a * a) {
						g = !0;
						var N = this.createContactEquation(l, u, e, f);
						return N.ri.copy(m), N.ri.normalize(), N.ni.copy(N.ri), N.ri.mult(a, N.ri), b.vsub(d, N.rj), N.ri.vadd(n, N.ri), N.ri.vsub(l.position, N.ri), N.rj.vadd(d, N.rj), N.rj.vsub(u.position, N.rj), this.result.push(N), void this.createFrictionEquationsFromContact(N, this.frictionResult)
					}
				}
				for (var g = !1, r = 0, x = y.length; r !== x && g === !1; r++) {
					var j = s[r],
						v = y[r],
						A = of;
					t.vmult(j, A);
					var C = df;
					t.vmult(c[v[0]], C), C.vadd(d, C);
					var O = tf;
					A.mult(-a, O), n.vadd(O, O);
					var h = lf;
					O.vsub(C, h);
					var k = h.dot(A),
						q = uf;
					if (n.vsub(C, q), 0 > k && q.dot(A) > 0) {
						for (var z = [], B = 0, D = v.length; B !== D; B++) {
							var E = p.get();
							t.vmult(c[v[B]], E), d.vadd(E, E), z.push(E)
						}
						if (o(z, A, n)) {
							g = !0;
							var N = this.createContactEquation(l, u, e, f);
							A.mult(-a, N.ri), A.negate(N.ni);
							var F = p.get();
							A.mult(-k, F);
							var G = p.get();
							A.mult(-a, G), n.vsub(d, N.rj), N.rj.vadd(G, N.rj), N.rj.vadd(F, N.rj), N.rj.vadd(d, N.rj), N.rj.vsub(u.position, N.rj), N.ri.vadd(n, N.ri), N.ri.vsub(l.position, N.ri), p.release(F), p.release(G), this.result.push(N), this.createFrictionEquationsFromContact(N, this.frictionResult);
							for (var B = 0, H = z.length; B !== H; B++) p.release(z[B]);
							return
						}
						for (var B = 0; B !== v.length; B++) {
							var I = p.get(),
								J = p.get();
							t.vmult(c[v[(B + 1) % v.length]], I), t.vmult(c[v[(B + 2) % v.length]], J), d.vadd(I, I), d.vadd(J, J);
							var K = _;
							J.vsub(I, K);
							var L = ef;
							K.unit(L);
							var M = p.get(),
								P = p.get();
							n.vsub(I, P);
							var Q = P.dot(L);
							L.mult(Q, M), M.vadd(I, M);
							var R = p.get();
							if (M.vsub(n, R), Q > 0 && Q * Q < K.norm2() && R.norm2() < a * a) {
								var N = this.createContactEquation(l, u, e, f);
								M.vsub(d, N.rj), M.vsub(n, N.ni), N.ni.normalize(), N.ni.mult(a, N.ri), N.rj.vadd(d, N.rj), N.rj.vsub(u.position, N.rj), N.ri.vadd(n, N.ri), N.ri.vsub(l.position, N.ri), this.result.push(N), this.createFrictionEquationsFromContact(N, this.frictionResult);
								for (var B = 0, H = z.length; B !== H; B++) p.release(z[B]);
								return p.release(I), p.release(J), p.release(M), p.release(R), void p.release(P)
							}
							p.release(I), p.release(J), p.release(M), p.release(R), p.release(P)
						}
						for (var B = 0, H = z.length; B !== H; B++) p.release(z[B])
					}
				}
			};
			new l, new l;
			n.prototype[i.types.PLANE | i.types.BOX] = n.prototype.planeBox = function(e, f, n, o, d, i, t, l) {
				f.convexPolyhedronRepresentation.material = f.material, f.convexPolyhedronRepresentation.collisionResponse = f.collisionResponse, this.planeConvex(e, f.convexPolyhedronRepresentation, n, o, d, i, t, l)
			};
			var pf = new l,
				sf = new l,
				yf = new l,
				cf = new l;
			n.prototype[i.types.PLANE | i.types.CONVEXPOLYHEDRON] = n.prototype.planeConvex = function(e, f, n, o, d, i, t, l) {
				var u = pf,
					p = sf;
				p.set(0, 0, 1), d.vmult(p, p);
				for (var s = 0, y = yf, c = 0; c !== f.vertices.length; c++) {
					u.copy(f.vertices[c]), i.vmult(u, u), o.vadd(u, u), u.vsub(n, y);
					var a = p.dot(y);
					if (0 >= a) {
						var r = this.createContactEquation(t, l, e, f),
							w = cf;
						p.mult(p.dot(y), w), u.vsub(w, w), w.vsub(n, r.ri), r.ni.copy(p), u.vsub(o, r.rj), r.ri.vadd(n, r.ri), r.ri.vsub(t.position, r.ri), r.rj.vadd(o, r.rj), r.rj.vsub(l.position, r.rj), this.result.push(r), s++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(r, this.frictionResult)
					}
				}
				this.enableFrictionReduction && s && this.createFrictionFromAverage(s)
			};
			var af = new l,
				rf = new l;
			n.prototype[i.types.CONVEXPOLYHEDRON] = n.prototype.convexConvex = function(e, f, n, o, d, i, t, l, u, p, s, y) {
				var c = af;
				if (!(n.distanceTo(o) > e.boundingSphereRadius + f.boundingSphereRadius) && e.findSeparatingAxis(f, n, d, o, i, c, s, y)) {
					var a = [],
						r = rf;
					e.clipAgainstHull(n, d, f, o, i, c, -100, 100, a);
					for (var w = 0, b = 0; b !== a.length; b++) {
						var m = this.createContactEquation(t, l, e, f, u, p),
							N = m.ri,
							g = m.rj;
						c.negate(m.ni), a[b].normal.negate(r), r.mult(a[b].depth, r), a[b].point.vadd(r, N), g.copy(a[b].point), N.vsub(n, N), g.vsub(o, g), N.vadd(n, N), N.vsub(t.position, N), g.vadd(o, g), g.vsub(l.position, g), this.result.push(m), w++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(m, this.frictionResult)
					}
					this.enableFrictionReduction && w && this.createFrictionFromAverage(w)
				}
			};
			var wf = new l,
				bf = new l,
				mf = new l;
			n.prototype[i.types.PLANE | i.types.PARTICLE] = n.prototype.planeParticle = function(e, f, n, o, d, i, t, l) {
				var u = wf;
				u.set(0, 0, 1), t.quaternion.vmult(u, u);
				var p = bf;
				o.vsub(t.position, p);
				var s = u.dot(p);
				if (0 >= s) {
					var y = this.createContactEquation(l, t, f, e);
					y.ni.copy(u), y.ni.negate(y.ni), y.ri.set(0, 0, 0);
					var c = mf;
					u.mult(u.dot(o), c), o.vsub(c, c), y.rj.copy(c), this.result.push(y), this.createFrictionEquationsFromContact(y, this.frictionResult)
				}
			};
			var Nf = new l;
			n.prototype[i.types.PARTICLE | i.types.SPHERE] = n.prototype.sphereParticle = function(e, f, n, o, d, i, t, l) {
				var u = Nf;
				u.set(0, 0, 1), o.vsub(n, u);
				var p = u.norm2();
				if (p <= e.radius * e.radius) {
					var s = this.createContactEquation(l, t, f, e);
					u.normalize(), s.rj.copy(u), s.rj.mult(e.radius, s.rj), s.ni.copy(u), s.ni.negate(s.ni), s.ri.set(0, 0, 0), this.result.push(s), this.createFrictionEquationsFromContact(s, this.frictionResult)
				}
			};
			var gf = new p,
				xf = new l,
				jf = (new l, new l),
				vf = new l,
				Af = new l;
			n.prototype[i.types.PARTICLE | i.types.CONVEXPOLYHEDRON] = n.prototype.convexParticle = function(e, f, n, o, d, i, t, l) {
				var u = -1,
					p = jf,
					s = Af,
					y = null,
					c = 0,
					a = xf;
				if (a.copy(o), a.vsub(n, a), d.conjugate(gf), gf.vmult(a, a), e.pointIsInside(a)) {
					e.worldVerticesNeedsUpdate && e.computeWorldVertices(n, d), e.worldFaceNormalsNeedsUpdate && e.computeWorldFaceNormals(d);
					for (var r = 0, w = e.faces.length; r !== w; r++) {
						var b = [e.worldVertices[e.faces[r][0]]],
							m = e.worldFaceNormals[r];
						o.vsub(b[0], vf);
						var N = -m.dot(vf);
						(null === y || Math.abs(N) < Math.abs(y)) && (y = N, u = r, p.copy(m), c++)
					}
					if (-1 !== u) {
						var g = this.createContactEquation(l, t, f, e);
						p.mult(y, s), s.vadd(o, s), s.vsub(n, s), g.rj.copy(s), p.negate(g.ni), g.ri.set(0, 0, 0);
						var x = g.ri,
							j = g.rj;
						x.vadd(o, x), x.vsub(l.position, x), j.vadd(n, j), j.vsub(t.position, j), this.result.push(g), this.createFrictionEquationsFromContact(g, this.frictionResult)
					} else console.warn("Point found inside convex, but did not find penetrating face!")
				}
			}, n.prototype[i.types.BOX | i.types.HEIGHTFIELD] = n.prototype.boxHeightfield = function(e, f, n, o, d, i, t, l) {
				e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexHeightfield(e.convexPolyhedronRepresentation, f, n, o, d, i, t, l)
			};
			var Cf = new l,
				Of = new l,
				hf = [0];
			n.prototype[i.types.CONVEXPOLYHEDRON | i.types.HEIGHTFIELD] = n.prototype.convexHeightfield = function(e, f, n, o, d, i, t, l) {
				var p = f.data,
					s = f.elementSize,
					y = e.boundingSphereRadius,
					c = Of,
					a = hf,
					r = Cf;
				u.pointToLocalFrame(o, i, n, r);
				var w = Math.floor((r.x - y) / s) - 1,
					b = Math.ceil((r.x + y) / s) + 1,
					m = Math.floor((r.y - y) / s) - 1,
					N = Math.ceil((r.y + y) / s) + 1;
				if (!(0 > b || 0 > N || w > p.length || m > p[0].length)) {
					0 > w && (w = 0), 0 > b && (b = 0), 0 > m && (m = 0), 0 > N && (N = 0), w >= p.length && (w = p.length - 1), b >= p.length && (b = p.length - 1), N >= p[0].length && (N = p[0].length - 1), m >= p[0].length && (m = p[0].length - 1);
					var g = [];
					f.getRectMinMax(w, m, b, N, g);
					var x = g[0],
						j = g[1];
					if (!(r.z - y > j || r.z + y < x))
						for (var v = w; b > v; v++)
							for (var A = m; N > A; A++) f.getConvexTrianglePillar(v, A, !1), u.pointToWorldFrame(o, i, f.pillarOffset, c), n.distanceTo(c) < f.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && this.convexConvex(e, f.pillarConvex, n, c, d, i, t, l, null, null, a, null), f.getConvexTrianglePillar(v, A, !0), u.pointToWorldFrame(o, i, f.pillarOffset, c), n.distanceTo(c) < f.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && this.convexConvex(e, f.pillarConvex, n, c, d, i, t, l, null, null, a, null)
				}
			};
			var kf = new l,
				qf = new l;
			n.prototype[i.types.SPHERE | i.types.HEIGHTFIELD] = n.prototype.sphereHeightfield = function(e, f, n, o, d, i, t, l) {
				var p = f.data,
					s = e.radius,
					y = f.elementSize,
					c = qf,
					a = kf;
				u.pointToLocalFrame(o, i, n, a);
				var r = Math.floor((a.x - s) / y) - 1,
					w = Math.ceil((a.x + s) / y) + 1,
					b = Math.floor((a.y - s) / y) - 1,
					m = Math.ceil((a.y + s) / y) + 1;
				if (!(0 > w || 0 > m || r > p.length || m > p[0].length)) {
					0 > r && (r = 0), 0 > w && (w = 0), 0 > b && (b = 0), 0 > m && (m = 0), r >= p.length && (r = p.length - 1), w >= p.length && (w = p.length - 1), m >= p[0].length && (m = p[0].length - 1), b >= p[0].length && (b = p[0].length - 1);
					var N = [];
					f.getRectMinMax(r, b, w, m, N);
					var g = N[0],
						x = N[1];
					if (!(a.z - s > x || a.z + s < g))
						for (var j = this.result, v = r; w > v; v++)
							for (var A = b; m > A; A++) {
								var C = j.length;
								f.getConvexTrianglePillar(v, A, !1), u.pointToWorldFrame(o, i, f.pillarOffset, c), n.distanceTo(c) < f.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && this.sphereConvex(e, f.pillarConvex, n, c, d, i, t, l), f.getConvexTrianglePillar(v, A, !0), u.pointToWorldFrame(o, i, f.pillarOffset, c), n.distanceTo(c) < f.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && this.sphereConvex(e, f.pillarConvex, n, c, d, i, t, l);
								var O = j.length - C;
								if (O > 2) return
							}
				}
			}
		}, {
			"../collision/AABB": 3,
			"../collision/Ray": 9,
			"../equations/ContactEquation": 19,
			"../equations/FrictionEquation": 21,
			"../math/Quaternion": 28,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"../shapes/ConvexPolyhedron": 38,
			"../shapes/Shape": 43,
			"../solver/Solver": 47,
			"../utils/Vec3Pool": 54
		}],
		56: [function(e, f) {
			function n() {
				u.apply(this), this.dt = -1, this.allowSleep = !1, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = 0, this.quatNormalizeFast = !1, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new d, this.broadphase = new m, this.bodies = [], this.solver = new t, this.constraints = [], this.narrowphase = new l(this), this.collisionMatrix = new p, this.collisionMatrixPrevious = new p, this.materials = [], this.contactmaterials = [], this.contactMaterialTable = new a, this.defaultMaterial = new s("default"), this.defaultContactMaterial = new y(this.defaultMaterial, this.defaultMaterial, {
					friction: .3,
					restitution: 0
				}), this.doProfiling = !1, this.profile = {
					solve: 0,
					makeContactConstraints: 0,
					broadphase: 0,
					integrate: 0,
					narrowphase: 0
				}, this.subsystems = [], this.addBodyEvent = {
					type: "addBody",
					body: null
				}, this.removeBodyEvent = {
					type: "removeBody",
					body: null
				}
			}
			f.exports = n;
			var o = e("../shapes/Shape"),
				d = e("../math/Vec3"),
				i = e("../math/Quaternion"),
				t = e("../solver/GSSolver"),
				l = (e("../utils/Vec3Pool"), e("../equations/ContactEquation"), e("../equations/FrictionEquation"), e("./Narrowphase")),
				u = e("../utils/EventTarget"),
				p = e("../collision/ArrayCollisionMatrix"),
				s = e("../material/Material"),
				y = e("../material/ContactMaterial"),
				c = e("../objects/Body"),
				a = e("../utils/TupleDictionary"),
				r = e("../collision/RaycastResult"),
				w = e("../collision/AABB"),
				b = e("../collision/Ray"),
				m = e("../collision/NaiveBroadphase");
			n.prototype = new u;
			var N = (new w, new b);
			if (n.prototype.getContactMaterial = function(e, f) {
					return this.contactMaterialTable.get(e.id, f.id)
				}, n.prototype.numObjects = function() {
					return this.bodies.length
				}, n.prototype.collisionMatrixTick = function() {
					var e = this.collisionMatrixPrevious;
					this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = e, this.collisionMatrix.reset()
				}, n.prototype.add = n.prototype.addBody = function(e) {
					-1 === this.bodies.indexOf(e) && (e.index = this.bodies.length, this.bodies.push(e), e.world = this, e.initPosition.copy(e.position), e.initVelocity.copy(e.velocity), e.timeLastSleepy = this.time, e instanceof c && (e.initAngularVelocity.copy(e.angularVelocity), e.initQuaternion.copy(e.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = e, this.dispatchEvent(this.addBodyEvent))
				}, n.prototype.addConstraint = function(e) {
					this.constraints.push(e)
				}, n.prototype.removeConstraint = function(e) {
					var f = this.constraints.indexOf(e); - 1 !== f && this.constraints.splice(f, 1)
				}, n.prototype.rayTest = function(e, f, n) {
					n instanceof r ? this.raycastClosest(e, f, {
						skipBackfaces: !0
					}, n) : this.raycastAll(e, f, {
						skipBackfaces: !0
					}, n)
				}, n.prototype.raycastAll = function(e, f, n, o) {
					return n.mode = b.ALL, n.from = e, n.to = f, n.callback = o, N.intersectWorld(this, n)
				}, n.prototype.raycastAny = function(e, f, n, o) {
					return n.mode = b.ANY, n.from = e, n.to = f, n.result = o, N.intersectWorld(this, n)
				}, n.prototype.raycastClosest = function(e, f, n, o) {
					return n.mode = b.CLOSEST, n.from = e, n.to = f, n.result = o, N.intersectWorld(this, n)
				}, n.prototype.remove = function(e) {
					e.world = null;
					var f = this.bodies.length - 1,
						n = this.bodies,
						o = n.indexOf(e);
					if (-1 !== o) {
						n.splice(o, 1);
						for (var d = 0; d !== n.length; d++) n[d].index = d;
						this.collisionMatrix.setNumObjects(f), this.removeBodyEvent.body = e, this.dispatchEvent(this.removeBodyEvent)
					}
				}, n.prototype.removeBody = n.prototype.remove, n.prototype.addMaterial = function(e) {
					this.materials.push(e)
				}, n.prototype.addContactMaterial = function(e) {
					this.contactmaterials.push(e), this.contactMaterialTable.set(e.materials[0].id, e.materials[1].id, e)
				}, "undefined" == typeof performance && (performance = {}), !performance.now) {
				var g = Date.now();
				performance.timing && performance.timing.navigationStart && (g = performance.timing.navigationStart), performance.now = function() {
					return Date.now() - g
				}
			}
			var x = new d;
			n.prototype.step = function(e, f, n) {
				if (n = n || 10, f = f || 0, 0 === f) this.internalStep(e), this.time += e;
				else {
					var o = Math.floor((this.time + f) / e) - Math.floor(this.time / e);
					o = Math.min(o, n);
					for (var d = performance.now(), i = 0; i !== o && (this.internalStep(e), !(performance.now() - d > 1e3 * e)); i++);
					this.time += f;
					for (var t = this.time % e, l = t / e, u = x, p = this.bodies, s = 0; s !== p.length; s++) {
						var y = p[s];
						y.type !== c.STATIC && y.sleepState !== c.SLEEPING ? (y.position.vsub(y.previousPosition, u), u.scale(l, u), y.position.vadd(u, y.interpolatedPosition)) : (y.interpolatedPosition.copy(y.position), y.interpolatedQuaternion.copy(y.quaternion))
					}
				}
			};
			var j = {
					type: "postStep"
				},
				v = {
					type: "preStep"
				},
				A = {
					type: "collide",
					body: null,
					contact: null
				},
				C = [],
				O = [],
				h = [],
				k = [],
				q = (new d, new d, new d, new d, new d, new d, new d, new d, new d, new i, new i),
				z = new i,
				B = new d;
			n.prototype.internalStep = function(e) {
				this.dt = e;
				var f, n = this.contacts,
					d = h,
					i = k,
					t = this.numObjects(),
					l = this.bodies,
					u = this.solver,
					p = this.gravity,
					s = this.doProfiling,
					y = this.profile,
					a = c.DYNAMIC,
					r = this.constraints,
					w = O,
					b = (p.norm(), p.x),
					m = p.y,
					N = p.z,
					g = 0;
				for (s && (f = performance.now()), g = 0; g !== t; g++) {
					var x = l[g];
					if (x.type & a) {
						var D = x.force,
							E = x.mass;
						D.x += E * b, D.y += E * m, D.z += E * N
					}
				}
				for (var g = 0, F = this.subsystems.length; g !== F; g++) this.subsystems[g].update();
				s && (f = performance.now()), d.length = 0, i.length = 0, this.broadphase.collisionPairs(this, d, i), s && (y.broadphase = performance.now() - f);
				var G = r.length;
				for (g = 0; g !== G; g++) {
					var H = r[g];
					if (!H.collideConnected)
						for (var I = d.length - 1; I >= 0; I -= 1)(H.bodyA === d[I] && H.bodyB === i[I] || H.bodyB === d[I] && H.bodyA === i[I]) && (d.splice(I, 1), i.splice(I, 1))
				}
				this.collisionMatrixTick(), s && (f = performance.now());
				var J = C,
					K = n.length;
				for (g = 0; g !== K; g++) J.push(n[g]);
				n.length = 0;
				var L = this.frictionEquations.length;
				for (g = 0; g !== L; g++) w.push(this.frictionEquations[g]);
				this.frictionEquations.length = 0, this.narrowphase.getContacts(d, i, this, n, J, this.frictionEquations, w), s && (y.narrowphase = performance.now() - f), s && (f = performance.now());
				for (var g = 0; g < this.frictionEquations.length; g++) u.addEquation(this.frictionEquations[g]);
				for (var M = n.length, P = 0; P !== M; P++) {
					{
						var Q, H = n[P],
							x = H.bi,
							R = H.bj;
						H.si, H.sj
					}
					Q = x.material && R.material ? this.getContactMaterial(x.material, R.material) || this.defaultContactMaterial : this.defaultContactMaterial;
					var S = Q.friction;
					if (x.material && R.material && (x.material.friction >= 0 && R.material.friction >= 0 && (S = x.material.friction * R.material.friction), x.material.restitution >= 0 && R.material.restitution >= 0 && (H.restitution = x.material.restitution * R.material.restitution)), u.addEquation(H), x.allowSleep && x.type === c.DYNAMIC && x.sleepState === c.SLEEPING && R.sleepState === c.AWAKE && R.type !== c.STATIC) {
						var T = R.velocity.norm2() + R.angularVelocity.norm2(),
							U = Math.pow(R.sleepSpeedLimit, 2);
						T >= 2 * U && (x._wakeUpAfterNarrowphase = !0)
					}
					if (R.allowSleep && R.type === c.DYNAMIC && R.sleepState === c.SLEEPING && x.sleepState === c.AWAKE && x.type !== c.STATIC) {
						var V = x.velocity.norm2() + x.angularVelocity.norm2(),
							W = Math.pow(x.sleepSpeedLimit, 2);
						V >= 2 * W && (R._wakeUpAfterNarrowphase = !0)
					}
					this.collisionMatrix.set(x, R, !0), this.collisionMatrixPrevious.get(x, R) || (A.body = R, A.contact = H, x.dispatchEvent(A), A.body = x, R.dispatchEvent(A))
				}
				for (s && (y.makeContactConstraints = performance.now() - f, f = performance.now()), g = 0; g !== t; g++) {
					var x = l[g];
					x._wakeUpAfterNarrowphase && (x.wakeUp(), x._wakeUpAfterNarrowphase = !1)
				}
				var G = r.length;
				for (g = 0; g !== G; g++) {
					var H = r[g];
					H.update();
					for (var I = 0, X = H.equations.length; I !== X; I++) {
						var Y = H.equations[I];
						u.addEquation(Y)
					}
				}
				u.solve(e, this), s && (y.solve = performance.now() - f), u.removeAllEquations();
				var Z = Math.pow;
				for (g = 0; g !== t; g++) {
					var x = l[g];
					if (x.type & a) {
						var $ = Z(1 - x.linearDamping, e),
							_ = x.velocity;
						_.mult($, _);
						var ef = x.angularVelocity;
						if (ef) {
							var ff = Z(1 - x.angularDamping, e);
							ef.mult(ff, ef)
						}
					}
				}
				for (this.dispatchEvent(v), g = 0; g !== t; g++) {
					var x = l[g];
					x.preStep && x.preStep.call(x)
				}
				s && (f = performance.now()); {
					var nf = q,
						of = z,
						df = this.stepnumber,
						tf = c.DYNAMIC | c.KINEMATIC,
						lf = df % (this.quatNormalizeSkip + 1) === 0,
						uf = this.quatNormalizeFast,
						pf = .5 * e;
					o.types.PLANE, o.types.CONVEXPOLYHEDRON
				}
				for (g = 0; g !== t; g++) {
					var sf = l[g],
						yf = sf.force,
						cf = sf.torque;
					if (sf.type & tf && sf.sleepState !== c.SLEEPING) {
						var af = sf.velocity,
							rf = sf.angularVelocity,
							wf = sf.position,
							bf = sf.quaternion,
							mf = sf.invMass,
							Nf = sf.invInertiaWorld;
						af.x += yf.x * mf * e, af.y += yf.y * mf * e, af.z += yf.z * mf * e, sf.angularVelocity && (Nf.vmult(cf, B), B.mult(e, B), B.vadd(rf, rf)), wf.x += af.x * e, wf.y += af.y * e, wf.z += af.z * e, sf.angularVelocity && (nf.set(rf.x, rf.y, rf.z, 0), nf.mult(bf, of), bf.x += pf * of.x, bf.y += pf * of.y, bf.z += pf * of.z, bf.w += pf * of.w, lf && (uf ? bf.normalizeFast() : bf.normalize())), sf.aabb && (sf.aabbNeedsUpdate = !0), sf.updateInertiaWorld && sf.updateInertiaWorld()
					}
				}
				for (this.clearForces(), this.broadphase.dirty = !0, s && (y.integrate = performance.now() - f), this.time += e, this.stepnumber += 1, this.dispatchEvent(j), g = 0; g !== t; g++) {
					var x = l[g],
						gf = x.postStep;
					gf && gf.call(x)
				}
				if (this.allowSleep)
					for (g = 0; g !== t; g++) l[g].sleepTick(this.time)
			}, n.prototype.clearForces = function() {
				for (var e = this.bodies, f = e.length, n = 0; n !== f; n++) {
					{
						var o = e[n];
						o.force, o.torque
					}
					o.force.set(0, 0, 0), o.torque.set(0, 0, 0)
				}
			}
		}, {
			"../collision/AABB": 3,
			"../collision/ArrayCollisionMatrix": 4,
			"../collision/NaiveBroadphase": 7,
			"../collision/Ray": 9,
			"../collision/RaycastResult": 10,
			"../equations/ContactEquation": 19,
			"../equations/FrictionEquation": 21,
			"../material/ContactMaterial": 24,
			"../material/Material": 25,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/Body": 31,
			"../shapes/Shape": 43,
			"../solver/GSSolver": 46,
			"../utils/EventTarget": 49,
			"../utils/TupleDictionary": 52,
			"../utils/Vec3Pool": 54,
			"./Narrowphase": 55
		}]
	}, {}, [2])(2)
});