import BrandRepeater from '@/components/organisms/BrandRepeater'
import PropTypes from 'prop-types'

/**
 * Handle the brandRepeaterBlock block.
 *
 * @author WebDevStudios
 * @param  {object}  props            The props.
 * @param  {object}  props.attributes The attributes object.
 * @return {Element}                  The component.
 */
export default function BrandepeaterBlock({attributes}) {
  const {data} = attributes
  let images = []
  // Prepare repeater data for mapping
  for (let z = 0; z < attributes.data.brand; z++) {
    images.push({
      image: data[`brand_${z}_image`],
      title: data[`brand_${z}_title`],
      caption: data[`brand_${z}_image_caption`],
      content: data[`brand_${z}_content`],
      buttonText: data[`brand_${z}_button_text`],
      buttonURL: data[`brand_${z}_button_url`]
    })
  }
  return (
    <>
      {attributes ? (
        <BrandRepeater {...attributes.data} images={images} />
      ) : (
        'There was a problem with attributes in BrandRepeater.js.'
      )}
    </>
  )
}

BrandepeaterBlock.propTypes = {
  attributes: PropTypes.object
}
