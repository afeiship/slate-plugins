export default {
  renderMark(inProps, inEditor, inNext) {
    const { children, ...attributes } = inProps;
    const value = inProps.node.data.get('value');
    switch (inProps.node.type) {
      case 'font-family':
        return <span style={{ fontFamily: value }} children={children} />;
      default:
        return inNext();
    }
  }
};
