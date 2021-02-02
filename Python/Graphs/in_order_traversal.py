# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve(self, root: TreeNode, res: List[int]):
        if root is None:
            return
        self.solve(root.left, res)
        res.append(root.val)
        self.solve(root.right, res)

    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        self.solve(root, res)
        return res
