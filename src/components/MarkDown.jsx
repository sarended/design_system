import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDown = (props) => {
  useEffect(() => {
    console.log('updated');
  }, [props.md]);
  console.log(props.md);
  return (
    <div className="scroll-container">
      <div className="markdown-container">
        <ReactMarkdown allowDangerousHtml={true} source={props.md?.text} />
      </div>
    </div>
  );
};

export default MarkDown;
