/**
 * @description Merge in reverse order
 * @Time-complexity: O(m + n)
 * @Space-complexity: O(1)
 * @returns Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let last = (m + n) - 1;
  m = m - 1
  n = n - 1

  while (m > -1 && n > -1) {
    if (nums1[m] > nums2[n]) {
      nums1[last] = nums1[m]
      m -= 1
    } else {
      nums1[last] = nums2[n]
      n -= 1
    }
    last -= 1
  }

  while(n > -1) {
    nums1[last] = nums2[n];
    last -= 1
    n -= 1
  }

  console.log(nums1)
 };

 let nums1 = [1,2,3, 0, 0, 0], m = 3, nums2 = [2,5,6], n = 3;
 merge(nums1, m, nums2, n)
