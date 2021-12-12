/**
 * @usage:
 * Editor.addMark(editor,'font-family', 'lightgreen');
 */

import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

export default NxSlatePlugin.define({
  id: 'font-family',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.fontFamily) {
        return jsx('text', { fontFamily: el.style.fontFamily }, children);
      }
    },
    output: (node, children) => {
      const el = node.el;
      el.style.fontFamily = node['font-family'];
      return el;
    }
  },
  render: (_, { attributes, children, leaf }) => {
    return (
      <span style={{ fontFamily: leaf['font-family'] }} {...attributes}>
        {children}
      </span>
    );
  }
});
