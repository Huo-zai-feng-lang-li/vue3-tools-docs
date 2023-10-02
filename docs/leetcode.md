## 常见的力扣高频题

### 无重复的最长子串

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        lst,res = [],0 # 定义一个滑动列表，初始化res为0
        for i in range(len(s)):  # 遍历列表
            while s[i] in lst:   # 如果遍历到的元素在滑动列表中，则左边出去；如果不在滑动列表中，则加入列表
                lst.pop(0)
            lst.append(s[i])     # 将不在滑动列表中的元素加入滑动列表
            res = max(len(lst),res) # 结果在滑动列表的长度和当前的res中取最大的
        return res  # for循环结束将res返回即可
```

### 链表反转

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pre,cur = None,head
        while cur:
            tmp = cur.next
            cur.next=pre
            pre=cur
            cur=tmp
        return pre
```

### 数组中第 k 个最大元素

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        if nums:
            nums.sort(reverse=True)
            return nums[k-1]
```

### 两数之和

```python
# 方法1
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        le=len(nums)
        for i in range(le):
            for n in range(i+1,le):
                if nums[i]+nums[n]==target:
                    return [i,n]
# 方法2
def twoSum(nums, target):
    hashmap={}
    for ind,num in enumerate(nums):
        hashmap[num] = ind
    for i,num in enumerate(nums):
        j = hashmap.get(target - num)
        if j is not None and i!=j:
            return [i,j]
```

### 有效的括号

```python
class Solution:
    def isValid(self, s: str) -> bool:
        while '{}' in s or '[]' in s or '()' in s:
            s=s.replace('{}','')
            s=s.replace('[]','')
            s=s.replace('()','')
        return s==''
```

### 二分查找

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if target in nums:
            return bisect.bisect_left(nums,target)
        else:
            return -1
```
