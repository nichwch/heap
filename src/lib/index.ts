// place files you want to import through the `$lib` alias in this folder.
export const getParentIndex = (arr: number[], index: number | null): number | null => {
	if (index === null) return null;
	const parent = Math.floor((index - 1) / 2);
	if (parent < 0) return null;
	return parent;
};

export const getChildIndices = (
	arr: number[],
	index: number | null
): [number | null, number | null] => {
	if (index === null) return [null, null];
	const left = index * 2 + 1;
	const right = index * 2 + 2;
	if (left > arr.length - 1) return [null, null];
	if (right > arr.length - 1) return [left, null];
	return [left, right];
};

//modifies array in place
export const heapifyUp = (arr: number[], index: number) => {
	const parentIndex = getParentIndex(arr, index);
	if (parentIndex === null) return;
	const parent = arr[parentIndex];
	const current = arr[index];
	// TODO: make heap condition swappable
	if (parent > current) {
		arr[index] = parent;
		arr[parentIndex] = current;
		heapifyUp(arr, parentIndex);
	}
};

//modifies array in place
export const heapifyDown = (arr: number[], index: number) => {
	const [leftIndex, rightIndex] = getChildIndices(arr, index);

	let smallestIndex = index;
	if (leftIndex !== null && arr[smallestIndex] > arr[leftIndex]) {
		smallestIndex = leftIndex;
	}
	if (rightIndex !== null && arr[smallestIndex] > arr[rightIndex]) {
		smallestIndex = rightIndex;
	}

	if (smallestIndex !== index) {
		const temp = arr[index];
		arr[index] = arr[smallestIndex];
		arr[smallestIndex] = temp;
		heapifyDown(arr, smallestIndex);
	}
};

//modifies array in place
export const heapify = (arr: number[]) => {
	for (let i = arr.length - 1; i >= 0; i--) {
		heapifyDown(arr, i);
	}
};
