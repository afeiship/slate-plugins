/**
 * @usage:
 * Editor.addMark(editor,'italic', true)
 */

import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

export default NxSlatePlugin.define({
  id: 'italic',
  hotkey: 'mod+i',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'i') {
        return jsx('text', { italic: true }, children);
      }
    },
    output: ({ el }) => {
      const i = document.createElement('i');
      i.appendChild(el);
      return i;
    }
  },
  render: (_, { attributes, children, leaf }) => {
    return <em {...attributes}>{children}</em>;
  }
});
