class BinarySearch {
    searchRecursive(arr, l, r, element) {
        if ( l > r ){
            return -1;
        }
        const mid = i + (j - i)//2;
        if ( arr[mid] === element){
            return mid;
        } else if(arr[mid] < element) {
            this.searchRecursive(arr, mid + 1, r, element)
        } else {
            this.searchRecursive(arr, l, mid - 1, element)
        }

    }   
    searchIterative(arr, size, element) {
        let i = 0;
        let j = size - 1;
        while (i < j) {
            const mid = i + (j - i)//2;
            if ( arr[mid] === element){
                return mid;
            } else if(arr[mid] < element) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return -1;
    }
}


