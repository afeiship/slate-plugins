/**
 * @usage:
 * Transforms.setNodes(editor, { type:'heading', value: 1})
 */
import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

const HEADING_RE = /h([1-6])$/;

const isHeading = (tag) => {
  return HEADING_RE.test(tag);
};

export default NxSlatePlugin.define({
  id: 'heading',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (isHeading(nodeName)) {
        const num = HEADING_RE.exec(nodeName);
        return jsx('element', { type: 'heading', value: num }, children);
      }
    },
    output: (node, children) => {
      const { style, value } = node;
      return `<h${value}${style}>${children}</h${value}>`;
    }
  },
  render: (_, { attributes, children, element }) => {
    return React.createElement(`h${element.value}`, attributes, children);
  }
});
