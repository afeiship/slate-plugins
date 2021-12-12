/**
 * @usage:
 * Editor.addMark(editor,'font-size', '14px');
 */

import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

export default NxSlatePlugin.define({
  id: 'font-size',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.fontSize) {
        return jsx('text', { fontSize: el.style.fontSize }, children);
      }
    },
    output: (node, children) => {
      const el = node.el;
      el.style.fontSize = node['font-size'];
      return el;
    }
  },
  render: (_, { attributes, children, leaf }) => {
    return (
      <span style={{ fontSize: leaf['font-size'] }} {...attributes}>
        {children}
      </span>
    );
  }
});
