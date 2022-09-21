import { useLayoutEffect, useRef, useState } from "react";


export const Quote = ({ author, quote }) => {

  const pRef = useRef();
  const [boxSize, setboxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const {height, width } = pRef.current.getBoundingClientReact();
    setboxSize({ height, width });
  
  }, [])



  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{display: 'flex'}}
      >
        <p ref={pRef} className="mb-1">{quote }</p>
        <footer className="blockquote-footer">{author }</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize) }</code>
    </>
  )
}
