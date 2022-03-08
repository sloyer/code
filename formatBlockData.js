case 'acf/brand-repeater-block':
    // Retrieve additional image meta.
    attributes.data.imageMetas = []
    for (let z = 0; z < attributes.data.brand; z++) {
      attributes.data.imageMetas.push(
        await getMediaByID(attributes?.data[`brand_${z}_image`])
      )
    }
    break