/**
 * @usage:
 * Editor.addMark(editor,'color', '#f00')
 */

import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';
import { Editor } from 'slate';

export default NxSlatePlugin.define({
  id: 'color',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.color) {
        return jsx('text', { color: el.style.color }, children);
      }
    },
    output: ({ el, color }) => {
      el.style.color = color;
      return el;
    }
  },
  commands: {
    value: function (inEditor) {
      if (!inEditor) return '#000';
      var id = this.id;
      var marks = Editor.marks(inEditor);
      return marks[id] || '#000';
    }
  },
  render: (_, { attributes, children, leaf }) => {
    const { color } = leaf;
    return (
      <span style={{ color }} {...attributes}>
        {children}
      </span>
    );
  }
});
