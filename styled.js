import { css } from "emotion";

const styled = (tag, styles) => {
  const mergedStyles = tag.__styles === undefined
    ? styles
    : { ...tag.__styles, ...styles }

  const Component = {
    functional: true,

    // Save the raw styles, so `styled(Component)` works as expected.
    __styles: mergedStyles,

    render(h, { props, data, children }) {
      // Compute the style object, using component props if necessary.
      const finalStyles = Object
        .entries(mergedStyles)
        .reduce((final, [property, value]) => {
          if (typeof value === 'function') {
            return { ...final, [property]: value(props) }
          }

          return { ...final, [property]: value }
        }, {})

      // Construct the final CSS classes as a single string.
      const finalClasses = `${data.class || ''} ${css(finalStyles)}`.trim()

      return h(tag, { ...data, class: finalClasses }, children)
    }
  }

  // Create a new component with the exact same CSS.
  Component.withComponent = tag => {
    const NextComponent = styled(tag, Component.__styles)
    NextComponent.props = Component.props

    return NextComponent
  }

  // TODO: Component.name
  // TODO: Use components as CSS selectors (?)

  return Component
}

export default styled
