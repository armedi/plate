import {
  Hotkeys,
  KeyboardHandlerReturnType,
  PlateEditor,
  Value,
} from '@udecode/plate-core';
import { indent, outdent } from './transforms/index';

export const onKeyDownIndent = <
  V extends Value = Value,
  E extends PlateEditor<V> = PlateEditor<V>
>(
  editor: E
): KeyboardHandlerReturnType => (e) => {
  if (Hotkeys.isTab(editor, e)) {
    e.preventDefault();
    indent(editor);
  }

  if (Hotkeys.isUntab(editor, e)) {
    e.preventDefault();
    outdent(editor);
  }
};
