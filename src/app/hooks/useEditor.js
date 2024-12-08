import { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import Paragraph from '@editorjs/paragraph';
import LinkTool from '@editorjs/link';
import AttachesTool from '@editorjs/attaches';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Marker from '@editorjs/marker';
import Code from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';
import Table from '@editorjs/table';
import Delimiter from '@editorjs/delimiter';
import RawTool from '@editorjs/raw';
import ImageTool from '@editorjs/image';

const useEditorJs = ({ content = '{}', handleChange = () => {}, callBacks = {}, ...props }) => {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    editorInstanceRef.current = new EditorJS({
      ...props,
      holder: editorRef.current,
      tools: {
        attaches: {
          class: AttachesTool,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },

        embed: {
          class: Embed,
          inlineToolbar: true,
          config: {
            services: {
              youtube: true,
              coub: true,
            },
          },
        },
        code: Code,
        inlineCode: InlineCode,
        delimeter: Delimiter,
        header: Header,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              /**
               * Upload file to the server and return an uploaded image data
               * @param {File} file - file selected from the device or pasted by drag-n-drop
               * @return {Promise.<{success: boolean, file: {url: string}}>}
               */
              uploadByFile(file) {
                return new Promise((resolve, reject) => {
                  const reader = new FileReader();

                  reader.onloadend = () => {
                    resolve({
                      success: 1,
                      file: {
                        url: reader.result,
                      },
                    });
                  };

                  reader.onerror = () => {
                    // eslint-disable-next-line prefer-promise-reject-errors
                    reject('Failed to read file');
                  };

                  reader.readAsDataURL(file);
                });
              },
            },
          },
        },
        linkTool: LinkTool,
        list: List,
        checklist: Checklist,
        raw: RawTool,
        table: Table,
        marker: Marker,
      },
      data: JSON.parse(content),
      // autofocus: true,
      onReady: () => {
        // handleEditorReady();
      },
      onChange: (api, event) => {
        editorInstanceRef.current
          .save()
          .then((outputData) => {
            handleChange(outputData, event, api);
            if (callBacks[event.detail.target.name]) {
              callBacks[event.detail.target.name](outputData.blocks[event.detail.index]);
            }
          })
          .catch((error) => console.error('Error: ', error));
      },
    });

    return () => {
      if (editorInstanceRef?.current?.destroy) {
        editorInstanceRef.current.destroy();
      }
    };
  }, [content, editorInstanceRef]);

  return { editorRef, editorInstanceRef };
};

export default useEditorJs;
