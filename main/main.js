module.exports = function main(minimum, max, length, average) {
	let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
	console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.max()}
o) 元素数量 = ${sequence.length()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
	constructor(input) {
		// Write your code here
		this.array = input
	}

	minimum() {
		// Write your code here
		var min = this.array[0];
		for (var i = 1; i < this.array.length; i++) {
			if (this.array[i] < min)
				min = this.array[i];
		}
		return min
	}

	max() {
		var max = this.array[0];
		for (var i = 1; i < this.array.length; i++) {
			if (this.array[i] > max)
				max = this.array[i];
		}
		return max
	}

	length() {
		return this.array.length
	}

	average() {
		var sum = 0;
		for (var i = 0; i < this.array.length; i++) {
			sum += this.array[i]
		};
		return (sum / this.array.length).toFixed(2);
	}
	// Write your code here
}
