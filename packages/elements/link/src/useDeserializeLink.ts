import { getNodeDeserializer } from '@udecode/slate-plugins-common';
import { Deserialize, getPluginOptions } from '@udecode/slate-plugins-core';
import { ELEMENT_LINK } from './defaults';

export const useDeserializeLink = (): Deserialize => (editor) => {
  const options = getPluginOptions(editor, ELEMENT_LINK);

  return {
    element: getNodeDeserializer({
      type: options.type,
      getNode: (el) => ({
        type: options.type,
        url: el.getAttribute('href'),
      }),
      rules: [{ nodeNames: 'A' }],
      ...options.deserialize,
    }),
  };
};