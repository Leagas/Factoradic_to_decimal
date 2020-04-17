function getFactoradic(word) {
	const sorted = [...word].sort();
	return word.map(item => {
		const i = sorted.indexOf(item)
		sorted.splice(i, 1)
		return i;
	})
}

function calcFactorialtoDecimal(value, index) {
	return index > 1 ? index * calcFactorialtoDecimal(value, index-1) : index*value
}

function duplicateCharacterCombinations(word, index) {
	let s = word.slice(index, word.length).split("")
	const duplicates = s.reduce((count, char) => {
		count[char] = count[char] ? count[char]+1 : 1
		return count
	}, {})

	for (count in duplicates) {
		duplicates[count] = calcFactorialtoDecimal(1, duplicates[count])
	}

	return Object.keys(duplicates).reduce((total, key) => total*duplicates[key], 1)
}

function listPosition(word) {
	const factoradic = getFactoradic(word.split(""))

	const result = factoradic.map((item, index) => {
		return calcFactorialtoDecimal(item, factoradic.length - index - 1)/duplicateCharacterCombinations(word, index)
	})

	return result.reduce((a, b) => a+b)+1
}
