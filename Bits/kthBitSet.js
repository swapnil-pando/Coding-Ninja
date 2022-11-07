function kthBitSet(n , k) {
    return  (((n >> (k-1)) & 1) === 1);
}