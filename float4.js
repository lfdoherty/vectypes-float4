
function isNumber(n) : boolean {
	return typeof (n) === 'number';
}
function assertNumber(n) : number {
	if (!isNumber(n)) throw new Error(`not a number: ${n}`);
	return n;
}

const Epsilon = Number.EPSILON

export interface Duck {x: number, y: number, z: number}
export const T = Float4;

export function vec(x: number, y: number, z: number, w: number): Float4 {
	return new Float4(x, y, z, w)
}
export function as(json: Duck): Float4 {
	return fromJson(json)
}
export function is(json: Duck) : boolean {
	return isNumber(json.x) && isNumber(json.y) && isNumber(json.z) && isNumber(json.w)
}

export function fromJson(json: Duck): Float4 {
	assertNumber(json.x)
	assertNumber(json.y)
	assertNumber(json.z)
	assertNumber(json.w)
	return new Float4(json.x, json.y, json.z, json.w);
}
export function one() : Float4 {
	return new Float4(1,1,1,1)
}
export function zero() : Float4 {
	return new Float4(0,0,0,0)
}
export function dot(a: Duck, b: Duck) : number {
	return (a.x*b.x) + (a.y*b.y) + (a.z*b.z) + (a.w*b.w);
}
export function magFlat(x: number, y: number, z: number, w: number) : number {
	return Math.sqrt((x*x) + (y*y) + (z*z) + (w*w));
}

export class Float4 {
	constructor(x: number, y: number, z: number, w: number){
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}


	set(v: Duck) : Float4 {
		this.x = v.x
		this.y = v.y
		this.z = v.z
		this.w = v.w
		return this
	}
	setFlat(x: number, y:number, z:number, w: number): Float4 {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w
		return this;
	}
	copy() : Float4 {
		return new Float4(this.x, this.y, this.z, this.w)
	}
	toString() : string {
		return `${this.x},${this.y},${this.z},${this.w}`
	}
	toShortString() : string {
		return `${this.x.toFixed(2)},${this.y.toFixed(2)},${this.z.toFixed(2)},${this.w.toFixed(2)}`
	}
	toArray(): number[] {
		return [this.x, this.y, this.z, this.w]
	}
	mag() : number {
		return magFlat(this.x,this.y,this.z, this.w)
	}

	dot(v): number {
		return dot(this,v)
	}
	equals(v: Duck) : boolean {
		return (Math.abs(v.x - this.x) < Epsilon) && (Math.abs(v.y - this.y) < Epsilon) && (Math.abs(v.z - this.z) < Epsilon) && (Math.abs(v.w - this.w) < Epsilon);
	}
	add(v: Duck) : Float4 {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;
		return this;
	}
	

	isOk() : boolean {
		return !isNaN(this.x) && !isNaN(this.y) && !isNaN(this.z) && !isNaN(this.w)
	}
	assertOk() : Float4 {
		if(!this.isOk()) throw new Error(`not OK ${this}`)
		return this
	}
}

