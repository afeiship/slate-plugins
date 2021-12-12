import React from 'react';
import { jsx } from 'slate-hyperscript';
import { Editor, Element } from 'slate';
import NxSlatePlugin from '@jswork/next-slate-plugin';

export default NxSlatePlugin.define({
  id: 'editor-extension',
  statics: {
    current(inEditor) {
      const selection = inEditor.selection;
      if (!selection) return null;
      const [node, _] = Editor.above(inEditor, selection.anchor.path);
      return node;
    },
    isActiveMark(inEditor, inFormat) {
      const marks = Editor.marks(inEditor);
      return marks ? marks[inFormat] : false;
    },
    isActiveBlock(inEditor, inFormat) {
      const [match] = Editor.nodes(inEditor, {
        match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === inFormat
      });
      return !!match;
    }
  }
});
