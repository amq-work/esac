/**
 * Ultra-performance SplitText helper utility for GSAP typography animations.
 * Wraps characters and words in overflow-hidden line containers.
 */
import React from 'react';

export function splitTextIntoSpans(text, type = 'words') {
  if (!text) return null;
  
  if (type === 'chars') {
    const words = text.split(' ');
    return words.map((word, wIdx) => (
      `<span class="split-word" key="${wIdx}">` +
      word.split('').map((char, cIdx) => `<span class="split-char">${char}</span>`).join('') +
      `</span>` + (wIdx < words.length - 1 ? '&nbsp;' : '')
    )).join('');
  }

  if (type === 'words') {
    const words = text.split(' ');
    return words.map((word, wIdx) => (
      `<span class="split-line-overflow"><span class="split-word">${word}</span></span>` +
      (wIdx < words.length - 1 ? '&nbsp;' : '')
    )).join('');
  }

  return text;
}

/**
 * React Component wrapper for SplitText
 */
export const SplitText = ({ text, className = "", type = "words", charClassName = "", wordClassName = "" }) => {
  if (!text) return null;

  const words = text.split(' ');

  return (
    <span className={`split-text-container ${className}`}>
      {words.map((word, wIdx) => (
        <React.Fragment key={wIdx}>
          <span className="split-line-overflow inline-block overflow-hidden align-top">
            {type === 'chars' ? (
              <span className={`split-word inline-block ${wordClassName}`}>
                {word.split('').map((char, cIdx) => (
                  <span key={cIdx} className={`split-char inline-block will-change-transform ${charClassName}`}>
                    {char}
                  </span>
                ))}
              </span>
            ) : (
              <span className={`split-word inline-block will-change-transform ${wordClassName}`}>
                {word}
              </span>
            )}
          </span>
          {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </React.Fragment>
      ))}
    </span>
  );
};
