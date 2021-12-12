/**
 * @usage:
 * Editor.addMark(editor,'strikethrough', true)
 */

import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

export default NxSlatePlugin.define({
  id: 'strikethrough',
  hotkey: 'mod+s',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 's') {
        return jsx('text', { strikethrough: true }, children);
      }
    },
    output: ({ el }) => {
      const s = document.createElement('s');
      s.appendChild(el);
      return s;
    }
  },
  render: (_, { attributes, children, leaf }) => {
    return <s {...attributes}>{children}</s>;
  }
});
