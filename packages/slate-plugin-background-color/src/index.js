/**
 * @usage:
 * Editor.addMark(editor,'background-color', 'lightgreen');
 */

import React from 'react';
import { jsx } from 'slate-hyperscript';
import { Editor } from 'slate';
import NxSlatePlugin from '@jswork/next-slate-plugin';

export default NxSlatePlugin.define({
  id: 'background-color',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.backgroundColor) {
        return jsx('text', { backgroundColor: el.style.backgroundColor }, children);
      }
    },
    output: (node, children) => {
      const el = node.el;
      el.style.backgroundColor = node['background-color'];
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
    return (
      <span style={{ backgroundColor: leaf['background-color'] }} {...attributes}>
        {children}
      </span>
    );
  }
});
