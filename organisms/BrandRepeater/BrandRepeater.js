import DisplayImage from '@/components/atoms/Image'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './BrandRepeater.module.css'
import InnerHTML from 'dangerously-set-html-content'

/**
 * Render the LogoRepeater component.
 *
 * @param  {object}  props            LogoRepeater component props.
 * @param  {Array}   props.images     The images from LogoRepeaterBlock
 * @param  {Array}   props.imageMetas The images metadata
 * @param            props.caption
 * @param            props.color
 * @return {Element}                  The LogoRepeater component.
 */
export default function BrandRepeater({images, imageMetas, color}) {
  return (
    <section className={cn(styles.container)}>
      {images.map((image, i) => {
        let currMeta = imageMetas[i]
        return (
          <div key={i} className={styles.BrandRepeater} style={{color}}>
            <div className={cn(styles.media)}>
              <DisplayImage
                className={styles.imageWrap}
                id={image}
                alt={currMeta?.altText}
                imageMeta={currMeta}
                nextImageFill={true}
              />
              <div className={styles.caption}>
                <p>{image.caption}</p>
              </div>
            </div>
            <div className={styles.content}>
              <h3>{image.title}</h3>
              <InnerHTML html={image.content} />
              {!image.buttonURL ? null : (
                <a className={styles.link} href={image.buttonURL}>
                  {image.buttonText}
                </a>
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}

BrandRepeater.propTypes = {
  images: PropTypes.array,
  imageMetas: PropTypes.array
}
