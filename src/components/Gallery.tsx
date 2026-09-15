import { useCallback, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons'

interface Props {
  images: string[]
  alt: string
}

/** Large image with a thumbnail strip; click opens a full-screen viewer with keyboard navigation. */
export function Gallery({ images, alt }: Props) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const step = useCallback((d: number) => setIndex((i) => (i + d + images.length) % images.length), [images.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, step])

  if (!images.length) return null

  return (
    <div className="gallery">
      <button className="gallery__main thumb thumb--active" onClick={() => setOpen(true)} aria-label="Open image">
        <img src={images[index]} alt={`${alt} — ${index + 1}`} />
        <span className="gallery__caption mono">
          {index + 1} / {images.length}
        </span>
      </button>
      {images.length > 1 && (
        <div className="gallery__thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              className={`thumb gallery__thumb ${i === index ? 'thumb--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Image ${i + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {open && (
        <div className="lightbox" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
          <button className="lightbox__close icon-btn" aria-label="Close" onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
          {images.length > 1 && (
            <button className="lightbox__nav lightbox__nav--prev icon-btn" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1) }}>
              <ChevronLeftIcon />
            </button>
          )}
          <img src={images[index]} alt={`${alt} — ${index + 1}`} onClick={(e) => e.stopPropagation()} />
          {images.length > 1 && (
            <button className="lightbox__nav lightbox__nav--next icon-btn" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1) }}>
              <ChevronRightIcon />
            </button>
          )}
          <span className="lightbox__counter mono">
            {index + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  )
}
