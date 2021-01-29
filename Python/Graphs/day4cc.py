#Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal

class Node:

    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value


def successor(root, node):

    if root == None:
        return None

    elif root == node:

        if root.left:
            return root.left

        elif root.right:
            return root.right

        else:
            return None

    queue = []

    queue.append(root)

    while len(queue) != 0:
        item = queue.pop(0)

        if item.left != None:
            queue.append(item.left)

        if item.right != None:
            queue.append(item.right)

        if item == node:
            break

    return queue[0]


# Driver Code
if __name__ == "__main__":

    root = Node(1)
    root.left = Node(2)
    root.left.left = Node(3)
    root.left.right = Node(4)
    root.right = Node(5)
    root.right.left = Node(6)
    root.right.right = Node(7)
    root.left.right.left = Node(8)
    root.left.right.left.left = Node(9)

    node = root.right.left

    res = successor(root, node)

    if res:
        print(
            str(node.value) + " --> " +
            str(res.value))

    else:
        print(
            str(node.value) + " is NULL")
