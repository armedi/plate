import { getElementDeserializer } from '@udecode/slate-plugins-common';
import { Deserialize, getPluginOptions } from '@udecode/slate-plugins-core';
import { ELEMENT_BLOCKQUOTE } from './defaults';

export const useDeserializeBlockquote = (): Deserialize => (editor) => {
  const options = getPluginOptions(editor, ELEMENT_BLOCKQUOTE);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'BLOCKQUOTE' }],
      ...options.deserialize,
    }),
  };
};