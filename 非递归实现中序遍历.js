function midTraversal(root) {
    let res = []
    let stack = []
    while (root || stack.length > 0) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            let temp = stack.pop()
            res.push(temp.val)
            if (temp.right) {
                root = temp.right
            }
        }
    }
    return res
}

function midTraversal(root) {
    let res = []
    let stack = []
    while (root || stack.length > 0) {
        if (root) {
            res.push(root.val)
            stack.push(root)
            root = root.left
        } else {
            let temp = stack.pop()
            if (temp.right) {
                root = temp.right
            }
        }
    }
    return res
}