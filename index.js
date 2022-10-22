module.exports = ({ types: t }) => {
    return {
        visitor: {
            Identifier(path) {
                const isDEBUG = path.node.name === 'DEBUG';
                const isIfStatement = t.isIfStatement(path.parentPath);
                console.log(isDEBUG, isIfStatement);
                if (isDEBUG && isIfStatement) {
                    const stringNode = t.stringLiteral("DEBUG");
                    path.replaceWith(stringNode);
                }
            },
            StringLiteral(path) {
                const isDEBUG = path.node.value === 'DEBUG';
                const isIfStatement = t.isIfStatement(path.parentPath);
                if (isDEBUG && isIfStatement) {
                    if (process.env.NODE_ENV == 'production') {
                        path.parentPath.remove();
                    }
                }
            }
        }
    }
}